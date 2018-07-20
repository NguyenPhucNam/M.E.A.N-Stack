const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const checkAuth = require('../authenticate/check-auth');
const sellerController = require('../controller/sellerController');

//Set luu
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        let hexa = Buffer.from(req.userData.email, 'ascii'),
          imgName = Date.now()+hexa.toString('hex')+path.extname(file.originalname);
          cb(null, imgName);
        }
  });
  
  //Init Upload
  const upload = multer({
    limits: {
      fileSize: 2*1024*1024,
      files: 6
    },
    fileFilter: (req, file, cb) => {
      checkFileType(file, cb);
    },
    storage: storage
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
  }

router.get("/", checkAuth.isLogin, sellerController.sellerPage);

router.post("/them-anh", checkAuth.isLogin, upload.array('uploadImg', 6), sellerController.uploadImg);

router.post("/them", checkAuth.isLogin, sellerController.addPage);

router.get("/chinh-sua/:id", checkAuth.isLogin, sellerController.get_editPage);

router.put("/chinh-sua/:id", checkAuth.isLogin, sellerController.put_editPage);

module.exports = router;