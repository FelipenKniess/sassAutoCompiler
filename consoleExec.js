const { exec } = require('child_process');

exports.execute = function (strcommand) {
    exec(strcommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        if(stderr.length > 0){
            console.log(`stderr: ${stderr}`);
        }
    });
};