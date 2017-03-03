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

cmd = "phantomjs.exe phantomjs_handler.js %s %s %s" % (
    sys.argv[1].replace('\\', '/'),
    os.path.join('..','screenshots'),  # path to screenshots
    str(MODE)
)
exit_code, priority, message, error_more = treatment_process(cmd, 30)
print exit_code, message, error_more
