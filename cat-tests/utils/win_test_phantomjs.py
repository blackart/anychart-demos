#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
How to start:
$./test_phantomjs <path to your test>

example:
$./test_phantomjs ../../tests/charts/map/align.html

screenshots will be in '../../../phantomjs_screenshot'
'''

import os
import subprocess
import time
import signal
import sys
import glob
try:
    from PIL import Image
    from PIL import ImageChops, ImageOps
except ImportError:
    raise ImportError('You need install pillow. Run `'
                      'pip install --user --upgrade pillow`')

OUTPUT_PATH = os.path.join('..','screenshots')
MODE = 0
# 0 - Simple mode
# 1 - Resize mode
# 4 - JSON mode
# 8 - XML mode
# 16 - HiddenContainer mode: draw in display=none container, after draw display=block and display=none again
# 32 - HiddenContainer mode: draw in normal container, after draw display=none


class GenerationError(Exception):
    """ return message and the priority by error code """
    def __init__(self, code):
        """
        @constructor
        @param int code : error code {1; 2; 11; 12; 13; 14; 122; 404}
        """
        self.message = 'No message'
        self.priority = 'HG'
        self.status = 'fail'

        if code == 1:
            self.message = 'Invalid args'
            self.priority = 'KP'
        elif code == 11:
            self.message = "Chart printed error"
            self.priority = 'CR'
        elif code == 12:
            self.message = "Console messages doesn't match"
            self.priority = 'HG'
        elif code == 13:
            self.message = 'Chart printed unexpected message'
            self.priority = 'HG'
        elif code == 14:
            self.message = 'PhantomJs timeout'
            self.priority = 'CR'
        elif code == 15:
            self.message = 'Unknown CAT command'
            self.priority = 'KP'
        elif code == 404:
            self.message = 'No picture'
            self.priority = 'LW'
            self.status = 'success'
        else:
            self.message = ('Serious error (tell about that one to'
                            'CAT-development team), code: ') + str(code)
            self.priority = 'KP'


def find_by_name(dict_list, name):
    for item in dict_list:
        if item['name'] == name:
            return item
    return None


def get_diff_pic(path1, path2):
    img1 = ImageOps.grayscale(Image.open(path1))
    img2 = ImageOps.grayscale(Image.open(path2))
    diff_image = ImageChops.difference(img1, img2)
    invert_diff = ImageOps.invert(diff_image)
    invert_diff = invert_diff.point(lambda x: 0 if x < 255 else 255, '1')
    invert_diff.save(path1 + '_diff.png', 'PNG', optimize=True)


def compare_images(path1, path2, name1, name2, equal=True):
    if os.path.exists(path1) and not os.path.exists(path2):
        return 'success', "LW", "Image to compare missed", ''
    if os.path.exists(path1) and os.path.exists(path2):
        img1 = Image.open(path1)
        img2 = Image.open(path2)
        diff = ImageChops.difference(img1, img2).getbbox()
        if diff is None and equal == 'different' and img1.size == img2.size:
            return ('fail', "Equal steps pictures",
                    'Had to be different: "%s" via "%s"' % (name1, name2))
        elif diff is None and equal:
            return 'success', "Success comparing", ''
        elif diff is not None and equal == 'different':
            return 'success', "Success comparing", ''
        elif diff is not None and equal == 'equal':
            get_diff_pic(path1, path2)
            return 'fail', "Different steps pictures", ''
        get_diff_pic(path1, path2)
        return 'warning', "Basic pictures different", ''

    return 'warning', "No image for compare", ''


def steps_compere(images):
    result = []
    for file_path in images:
            file_name = os.path.basename(file_path).replace('.png', '')
            file_meta = file_name.split('_')
            file_data = {'step': file_meta[0],
                         'name': file_meta[1],
                         'path': os.path.join(OUTPUT_PATH,
                                              os.path.basename(file_path)),
                         'compare_equal': None,
                         'compare_with': None}
            if len(file_meta) == 4:
                file_data['compare_equal'] = file_meta[2]
                file_data['compare_with'] = file_meta[3]
            result.append(file_data)
    result = sorted(result, key=lambda k: k['step'])
    return result



def treatment_process(cmd_line, timeout):
    """
    Starts cmd in subprocess
    @param string cmd_line : command to run
    @return int exit_code : result code
    @return int priority : priority of the error
    @return string error_more : extra information about the error,
     if exists (from phantomjs console)
    """
    env = os.environ.copy()
    env["DISPLAY"] = ":2"
    p = subprocess.Popen(cmd_line, shell=True, env=env,
                         stdout=subprocess.PIPE,
                         stderr=subprocess.PIPE)
    t_beginning = time.time()
    error_more = ''
    message = ''
    printed = True
    try:
        while True:
            if p.poll() is not None:
                exit_code = p.poll()
                error_more = str(p.communicate()[0])
                p.stdout.close()
                if exit_code == 10:
                    priority = None
                    status = 'success'
                    return status, priority, message, error_more
                else:
                    raise GenerationError(p.poll())
            seconds_passed = time.time() - t_beginning
            if seconds_passed > timeout / 2 and printed:
                printed = False
            if seconds_passed > timeout:
                #p.terminate()
                # os.killpg(p.pid, signal.SIGINT)
                os.popen('TASKKILL /PID '+str(p.pid)+' /F')
                # p.kill()
                raise GenerationError(14)
            time.sleep(0.1)
    except GenerationError as ge:
        status = ge.status
        message = ge.message
        priority = ge.priority
        return status, priority, message, error_more


cmd = "phantomjs.exe --web-security=no phantomjs_handler.js %s %s %s" % (
    sys.argv[1].replace('\\', '/'),
    OUTPUT_PATH,  # path to screenshots
    str(MODE))

status, _, message, error_more = treatment_process(cmd, 30)
image_files = glob.glob(os.path.join(OUTPUT_PATH, '*.png'))
if status != 'success' or len(list(image_files)) <= 0:
    print status, message, error_more
else:
    short_message = ''
    long_message = ''
    output_list = steps_compere(image_files)
    if len(list(output_list)) == 1:
        print status, message, error_more
        sys.exit(0)
    for step_file in output_list:
        if step_file['compare_equal']:
            item_compare = find_by_name(output_list,
                                        step_file['compare_with'])
            if item_compare is None:
                print 'Error: can\'t find screen for compare.'
                sys.exit(0)
            status, short_message, long_message = compare_images(
                step_file['path'],
                item_compare['path'],
                step_file['name'],
                item_compare['name'],
                equal=step_file['compare_equal'])
            if status != 'success':
                diff = os.path.join(step_file['path'] + '_diff.png')
                if os.path.exists(diff):
                    step_file['different_image'] = item_compare['path']
                    step_file['difference'] = step_file['path'] + '_diff.png'
                    long_message = 'Had to be {}: "{}" via "{}"'.format(
                        step_file['compare_equal'],
                        step_file['name'],
                        item_compare['name'])
                print {'status': status,
                       'msg': short_message,
                       'long_msg': long_message}
                sys.exit(0)
    print status, message, error_more
