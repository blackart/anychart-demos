var page = new WebPage(), address, mode, output;

var screenshot_counter = 1;
var system = require('system');
var args = system.args;

if (args.length != 4) {
        console.log('Wrong args (expected: address, output), got: ', args);
        phantom.exit("01");

} else {
    address = args[1];
    output = args[2];
    mode = args[3];
    if (address.substr(0,1)!='h') address = "file:///"+ address;
    page.open(address + '?mode=' + mode + '&' + 'ph=1#cat');
    var generateScreenshot = function(name){
        var container = page.evaluate(function(){
            var bounds = document.getElementById('container').getBoundingClientRect();
            document.body.style.width = bounds.width + "px";
            document.body.style.height = bounds.height + "px";
            return bounds;
            });
        //console.log(document.getElementById('container').getBoundingClientRect().width,-1)
        //console.log(document.getElementById('container1').getBoundingClientRect().width,-1)
        //console.log(container.width);
        page.viewportSize = {
            width: container.width,
            height: container.height
        };
        page.render(output + '/' + name);
        screenshot_counter ++;
    };

    var getAllMessages = function(){
        return message_list = page.evaluate(function() {
            return [].map.call(document.querySelectorAll('div.consoleMsg'), function(item) {
                return item.innerText.replace(/(\r\n|\n|\r)/gm,"").trim();
            });
        });
    };

    var getIgnoredMessages = function(){
        return ignored_list = page.evaluate(function() {
            return [].map.call(document.querySelectorAll('div.ignoreConsoleMsg'), function(item) {
                return item.innerText.replace(/(\r\n|\n|\r)/gm,"").trim();
            });
        });
    };

    Array.prototype.equals = function (array) {
        if (!array)
            return false;

        if (this.length != array.length)
            return false;
        for (var i = 0, l=this.length; i < l; i++) {
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i]))
                    return false;
            }
            else if (this[i] != array[i]) {
                return false;
            }
        }
        return true;
    };

    var code = '14';
    var console_log = [];
    var develop_edition = false;

    page.onError = function(msg, trace) {
        console.error(msg);
        phantom.exit("11");
    };

    page.onConsoleMessage = function(msg) {
        var message_list = getAllMessages();
        var ignored_list = getIgnoredMessages();
        if (msg.substr(0, 4) == 'CAT:'){
            if (msg.substr(5, 14) == 'check_messages'){
                if (develop_edition && !message_list.equals(console_log)) {
                    console.log('%BR%Messages are:%BR%', console_log.join('%BR%'));
                    console.log('%BR%Expected messages:%BR%', getAllMessages().join('%BR%'));
                    phantom.exit('12');
                }else if (!develop_edition) {
                    var production_message_list = [];
                    for (var i = 0; i < message_list.length; i++){
                        if (message_list[i].substr(0, 6) == 'Error:')
                        production_message_list.push(message_list[i])
                    }
                    if (!production_message_list.equals(console_log)) phantom.exit('12');
                    else console.log('Console messages matched with the required');
                }else if (develop_edition && message_list.equals(console_log)){
                    console.log('Console messages matched with the required');
                }
            }else if (msg.substr(5, 15) == 'develop_edition'){
                develop_edition = true;
            }else if (msg.substr(5, 14) == 'get_screenshot'){
                var name = screenshot_counter + '_' + msg.substr(20).replace(' ', '_') + '.png';
                generateScreenshot(name);
            }else if (msg.substr(5, 6) == 'action'){
                var commands = msg.substr(13).split(" ");
                if (commands[0].substr(0, 3) != 'key') {
                    if (commands.length == 4) {
                        page.sendEvent(commands[0], parseInt(commands[1]), parseInt(commands[2]), commands[3]);
                    } else if (commands.length == 5) {
                        var map = {
                            'alt': page.event.modifier.alt,
                            'ctrl': page.event.modifier.ctrl,
                            'shift': page.event.modifier.shift,
                            'meta': page.event.modifier.meta
                        };
                        //console.log(JSON.stringify(page.event.modifier))
                        var keys = 0;
                        for(var key in map) if (commands[4].indexOf(key) > -1) keys = keys | map[key];
                        page.sendEvent(commands[0], parseInt(commands[1]), parseInt(commands[2]), commands[3], keys);
                    }
                } else {
                    page.sendEvent(commands[0], page.event.key[commands[1]]);
                }
            }else if (msg.substr(5, 4) == 'exit'){
                phantom.exit('10');
            }else{
                console.log(msg.substr(5));
                phantom.exit('15');
            }
        }else if (msg.substr(0, 21) != 'Chart rendering time:' && msg != 'Assertion: Assertion failed: Cannot fallback to non-typed array case: Code is too specialized') {
            var search_msg = msg.replace(/(\r\n|\n|\r)/gm, " ").trim();
            if (message_list.length == 0) message_list = getAllMessages();
            if (ignored_list.length == 0) ignored_list = getIgnoredMessages();
            var flag = false;
            for (i=0; i<=ignored_list.length; i++){
                if (search_msg.indexOf(ignored_list[i]) > -1) {flag = true; break;}
            }
            if (message_list.indexOf(search_msg) < 0 && !flag) {
                console.log(search_msg);
                console.log('%BR%Expected one from:%BR%', message_list.join('%BR%'));
                phantom.exit('13');
            } else if (!develop_edition && search_msg.substr(0, 6) != 'Error:' && !flag && msg.substr(0, 12) != 'Warning: 405'){
                console.log(search_msg);
                phantom.exit('13');
            }
            else if (!flag) console_log.push(search_msg);
        }
    };
}