var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
	  util = require('util'),
    fs = require('fs');

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', {title:'0'});
});

router.post('/upload', function(req, res){
  var form = new formidable.IncomingForm();
  form.uploadDir = "../picture/public/images";
  form.parse(req, function(err, fields, files) {
  //重命名
  fs.renameSync(files.fileField.path, "..\\picture\\public\\images\\"+files.fileField.name);
  res.render('index.html', {title:fields.type});
  });

  return;
});

module.exports = router;
