const fs = require('fs');
const download = require('download');
const await = require('await-sleep')
const request = require('request');
const jp = require('jsonpath');
const shell = require('shelljs');
const fileExists = require('file-exists');

const filter = '$.assets[*].browser_download_url'
var activatorFilename = ''

  var requestOptions = {
      url: 'https://api.github.com/repos/kgrid/kgrid-activator/releases/latest',
      headers: {
          'User-Agent': 'request'
      }
  };

  request(requestOptions, function (error, response, body) {

      let download_url = jp.value(JSON.parse(body),filter);
      activatorFilename = download_url.substring( (download_url.lastIndexOf('/')+1) )
      fileExists( activatorFilename ).then( exists => {

        if (exists){
          console.log("already have activator");
          executeActivator();
        } else {
          console.log("downloading activator");
          download(download_url,"build").then(() => {
            console.log('files downloaded!');
           executeActivator();
          });
        }
      });

  });

   function executeActivator() {
    let wd = process.cwd()
    console.log(wd);
    var activator = shell.exec(" java -jar build/kgrid-activator-1.0.1.jar  --kgrid.shelf.cdostore.url=filesystem:file:///"+ wd.replace(/\\/g,'/'), function(code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
    });

    return activator;
  }
