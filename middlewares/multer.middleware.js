import multer from "multer";
import crypto from "crypto";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      if (err) throw err;
      const fileName = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fileName);
    });
  },
});
export const upload = multer({ storage: storage });
