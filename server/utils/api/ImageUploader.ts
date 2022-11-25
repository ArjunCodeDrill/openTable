  import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

var storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    console.log(file)
    cb(null, './server/public/uploads');
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
const maxSize = 1 * 1024 * 1024;

var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single('file');

const uploader = async (req: Request | any, res: Response) => {
  try {
 
    upload(req, res, async function (err: any) {
      console.log(req)
      if (!req.file) {
        return res.status(200).json({ path: 'null12345678' });
      } else {
        let { mimetype } = req?.file;
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.

          return res.status(400).json('File too large should be less than 4 MB');
        } else if (mimetype != 'image/png' && mimetype != 'image/jpg' && mimetype != 'image/jpeg') {
          const { filename } = req.file;
          fs.unlink(`./server/public/uploads/${filename}`, function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log('File deleted!');
            }
          });

          return res.status(400).json('Only .png, .jpg and .jpeg format filetype  allowed!');
        } else {
          const filename = req?.file?.filename;

          return res.status(200).json({ path: `${filename}` });
        }
      }
    });
  } catch (e) {
    console.log(e, 'error');
  }
};

export default uploader;
