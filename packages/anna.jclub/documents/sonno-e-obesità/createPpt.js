/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.documents\packages\anna.jclub\.wizzi\documents\sonno-e-obesità\createPpt.js.ittf
    utc time: Wed, 29 Nov 2023 13:05:39 GMT
*/
'use strict';
const path = require('path');
const fs = require('fs');
const spawn = require("child_process").spawn;
var pptJsPath = path.join(__dirname, 'index.js');
const pptProcess = spawn('node', [
    pptJsPath
]);
if (pptProcess.stdout) {
    pptProcess.stdout.on('data', function(data) {
        console.log('stdout data', data.toString());
    })
}
if (pptProcess.stderr) {
    pptProcess.stderr.on('data', function(data) {
        console.log("[31m%s[0m", 'stdout error data', data.toString());
    })
}
pptProcess.on('message', function(message) {
    console.log('child process message', message);
})
pptProcess.on('error', function(err) {
    console.log('child process error message', err);
})
pptProcess.on('exit', function(code) {
    console.log('exit code', code);
})
