/* const multer = require("multer");

const multerUpload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const singleAvatar = multerUpload.single("avatar");
const attachmentsMulter = multerUpload.array("files", 5);

export { singleAvatar, attachmentsMulter };
 */
const multer = require("multer");
 const multerUpload = multer({
  limits: {
    fileSize: 1024 * 1024 * 5,
  }
})
const singleAvatar = multerUpload.single("avatar");
module.exports = {singleAvatar}