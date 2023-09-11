const jimp = require('jimp');

jimp.read('./templates/bg.jpg')
    .then(bg =>{
        jimp.read('./images/m.jpg', (err, m) =>{
            m
            .resize(376, 733)
            jimp.read('./images/p.jpg', (err, p) =>{
                p
                .resize(702, 396)
                jimp.read('./templates/overlay.png', (err, overlay) =>{
                    bg
                    .blit(m, 1024, 437)
                    .blit(p, 163, 467)
                    .blit(overlay, 0, 0)
                    .write('test.jpg');
                })
            })
        })
    })
    .catch(err => {
        console.error(err);
    })