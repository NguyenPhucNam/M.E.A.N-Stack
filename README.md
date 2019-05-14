# M.E.A.N-Stack
https://developers.google.com/web/updates/2016/10/capture-stream
https://stackoverflow.com/questions/34089846/peerjs-multiple-viewers
####################################################################

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')))

const secretKey = 'w1lnWEN63FPKxBNmxHN7WpfW2IoYVYca5moqIUKfWesL1Ykwv34iR5xwfWLy';
const environmentId = 'LJRQ1bju55p6a47RwadH';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/images');
    },
    filename: function (req, file, cb) {
        const filetypes = /.jpeg|.jpg|.png|.gif/;
        cb(null, `demo-${Date.now()}.png`);
    }
});
const checkFileType = (file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Vui lòng chỉ chọn đúng định dạng ảnh&nbsp;<i class="text-primary">( .JPG |.JPEG |.PNG |.GIF )</i>.');
    }
};
const upload = multer({
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
    storage: storage
});

app.get(`/token/dev`, ( req, res ) => {
    const result = jwt.sign( { iss: environmentId }, secretKey, { algorithm: 'HS256' } );
    res.send(result);
});

app.post('/upload', upload.single('file'), (req, res) => {
    if(req.file) {
        res.json({ default: `/images/${req.file.filename}` });
    }
    else throw 'error';
});

app.listen( 8080, () => console.log( 'Listening on port 8080' ) );
