const multer = require("multer");
const path = require("path");
const fs = require("fs");

// =========================================================
// COMPLAINT UPLOAD DIRECTORY
// =========================================================

const uploadDirectory = path.join(
  __dirname,
  "..",
  "uploads",
  "complaints"
);

// =========================================================
// CREATE UPLOAD DIRECTORY
// =========================================================

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, {
    recursive: true,
  });
}

// =========================================================
// MULTER STORAGE
// =========================================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },

  filename: (req, file, cb) => {
    const extension = path
      .extname(file.originalname)
      .toLowerCase();

    const uniqueName =
      `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${extension}`;

    cb(null, uniqueName);
  },
});

// =========================================================
// IMAGE VALIDATION
// =========================================================
//
// Accept:
//   .jpg
//   .jpeg
//   .png
//
// Some clients/Postman may send images as:
//   application/octet-stream
//
// Therefore validation uses BOTH:
//   1. File extension
//   2. MIME type when available
//
// application/octet-stream is accepted ONLY when
// the extension is a valid image extension.
// =========================================================

const fileFilter = (req, file, cb) => {
  console.log("==========================================");
  console.log("COMPLAINT FILE UPLOAD");
  console.log("Original name :", file.originalname);
  console.log("MIME type     :", file.mimetype);
  console.log(
    "Extension     :",
    path.extname(file.originalname).toLowerCase()
  );
  console.log("==========================================");

  const allowedExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
  ];

  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
  ];

  const extension = path
    .extname(file.originalname)
    .toLowerCase();

  const extensionAllowed =
    allowedExtensions.includes(extension);

  const mimeTypeAllowed =
    allowedMimeTypes.includes(file.mimetype);

  // =======================================================
  // NORMAL IMAGE MIME TYPE
  // =======================================================

  if (
    extensionAllowed &&
    mimeTypeAllowed
  ) {
    return cb(null, true);
  }

  // =======================================================
  // POSTMAN / CLIENT MAY SEND application/octet-stream
  // =======================================================
  //
  // If the extension is .jpg/.jpeg/.png, allow it.
  //

  if (
    extensionAllowed &&
    file.mimetype === "application/octet-stream"
  ) {
    console.log(
      "Accepted image with application/octet-stream MIME type."
    );

    return cb(null, true);
  }

  // =======================================================
  // INVALID FILE
  // =======================================================

  return cb(
    new Error(
      "Only JPG, JPEG and PNG images are allowed for complaints."
    ),
    false
  );
};

// =========================================================
// MULTER CONFIGURATION
// =========================================================

const complaintUpload = multer({
  storage,
  fileFilter,

  limits: {
    // Maximum one photo
    files: 1,

    // Maximum file size = 5 MB
    fileSize: 5 * 1024 * 1024,
  },
});

// =========================================================
// EXPORT
// =========================================================

module.exports = complaintUpload;