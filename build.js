let installer = require('electron-winstaller');

installer
    .createWindowsInstaller({
        appDirectory: './dist/PocketCastsElectron-win32-x64',
        outputDirectory: './setup',
        authors: 'James Hrisho (http://jameshrisho.com/)',
        exe: 'PocketCastsElectron.exe'
    })
    .then(
        ()  => console.log("It worked!"), 
        (e) => console.log(`ERROR: ${e.message}`)
    );
