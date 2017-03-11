/*
 author:cyhu(viskey.hu@gmail.com) 2014.7.8
 modified 2014.7.24

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/***************************************************ELEMENT**************************************************************/
var a = null,
    l = 0;

document.ondblclick = function (e) {
    // alert(1);
    var e = e || window.event;
    var target = e.srcElement || e.target;

    a = target.innerHTML;
    l = target.childNodes.length;

    if (l <= 1) {
        play(a, 'vcn=xiaoyan');
    } else {
        return false;
    }

    // alert(target.tagName);
    return false;
};
// var a = document.getElementById('two').innerHTML;
/***************************************************ELEMENT**************************************************************/

/***********************************************local Variables**********************************************************/

function isMSIE(){
    var ua = navigator.userAgent.toLowerCase();
    return (/msie/.test(ua) && !/opera/.test(ua)) || ((/msie/.test(ua)||/trident/.test(ua)) && !/opera/.test(ua));
    //return true;
};

/* is ie browser or other */
var is_ie = isMSIE();

/* init session*/
var session = new Session({
    'url' : 'http://webapi.openspeech.cn/ivp}',
    //'url' : 'http://192.168.0.101:9687/ivp}',    
    //'url' : 'http://webapi.voicecloud.cn:80/ivp}',                                
    'interval' : '30000', 
    'disconnect_hint' : 'disconnect',
    'sub' : 'tts'
});

/* session begin param */
var ssb_param = "aue = speex-wb;7, ent=intp65, spd = 50, vol = 50, tte=utf8";

var audio = null;       

var audio_array = [];    

var audio_state = 0;

var func_play_audio = null;

/***********************************************local Variables**********************************************************/
if(is_ie)
{
    var encoderWorker = new Worker('/js/common/mp3Worker.js');
    play_audio = function(input)
    {
        encoderWorker.postMessage({ cmd: 'init', config:{ mode : 1, channels:1, samplerate: 16000, bitrate: 24}});      
        encoderWorker.postMessage({ cmd: 'encode', buf: input});
        encoderWorker.postMessage({ cmd: 'finish'});        
        encoderWorker.onmessage = function(e) {
            if (e.data.cmd == 'data') {
                audio.src = 'data:audio/mp3;base64,'+encode64(e.data.buf);
                audio.play();
            }
        };
    };
}else{
    play_audio = function(data)
    {
        var wave = new RIFFWAVE(); 
        wave.header.sampleRate = 16000;
        wave.header.numChannels = 1;        
        wave.Make(data); 
        audio.src = wave.dataURI; 
        audio.play(); 
    };
};

function play(content, vcn){    
    reset();
    console.log('--------------------');
    session.start('tts', ssb_param + ", vcn =" + vcn, content, function (err, obj)
    {
        var arraybuffer = obj.audio_data;
        
        if(is_ie)
        {
            play_audio(arraybuffer);    
        }else
        {
            if(audio_state == 0)
            {                   
                audio.addEventListener('ended', function() {
                    if(audio_array.length != 0)
                    {
                        play_audio(audio_array[0]);
                        audio_array.splice(0, 1);
                    }else
                    {
                        audio_state = 0;
                    }
                }, false);
                        
                play_audio(arraybuffer);
                audio_state = 1;
            } 
            else if(audio_state == 1)
            {
                audio_array.push(arraybuffer);
            }
        }
    });
};

//function play_xiaoqi(){play(a, 'vcn=vixy')};

function encode64(buffer) {
    var binary = '',
        bytes = new Uint8Array( buffer ),
        len = bytes.byteLength;

    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
};

function reset()
{
    audio_array = [];    
    audio_state = 0;
    if(audio != null)
    {
        audio.pause();
        audio == null;
    }
    audio = new Audio();
};