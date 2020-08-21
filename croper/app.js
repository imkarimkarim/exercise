#!/usr/bin/node
const jimp = require("jimp");
const fs = require("fs");

let inputDir = process.argv[2];
let dir = inputDir || __dirname;

const createDir = () =>{
    fs.mkdir(dir+'/cropt', { recursive: true }, (err) => {
        if (err) throw err;
    });
    return dir+'/cropt';
}

const isImage = (file) => {
    file =  dir+"/"+file;
    let len = file.length;
    // console.log(len);
    // console.log(file);
    let type = file[len-3]+file[len-2]+file[len-1];
    if(type == 'jpg' || type == 'png') return true;
    return false;
}

let dir2 = createDir();

fs.readdir(dir, (err, files) => {

    if(err) throw err;

    files.forEach(file =>{

        if(isImage(file)){
            jimp.read(dir+'/'+file)
                .then(image => {
                    return image
                    .cover(1440,2560)
                    .write(dir2+'/'+'(mobile)@internetwallpaper-'+file);
                })
                .catch(err =>{
                    console.error(err);
                });
            jimp.read(dir+'/'+file)
                .then(image => {
                    return image
                    .cover(2560,1440)
                    .write(dir2+'/'+'(pc)@internetwallpaper-'+file);
                })
                .catch(err =>{
                    console.error(err);
                });
        }
    })
})
