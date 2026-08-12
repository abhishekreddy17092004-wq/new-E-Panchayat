require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const app = express();

const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// CLOUDINARY CONFIGURATION
// ==========================================

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// ==========================================
// MULTER CONFIGURATION
// ==========================================

const upload = multer({
    storage: multer.memoryStorage(),

    limits: {
        fileSize: 5 * 1024 * 1024
    },

    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed."));
        }
    }
});

// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "E-Panchayat Backend is running",
        service: "Node.js + Express + Cloudinary"
    });
});

// ==========================================
// IMAGE UPLOAD ROUTE
// ==========================================

app.post(
    "/upload-image",
    upload.single("image"),
    async (req, res) => {

        try {

            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    message: "No image received."
                });
            }

            console.log("Image received:", req.file.originalname);

            const result = await new Promise((resolve, reject) => {

                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "e-panchayat/complaints",
                        resource_type: "image"
                    },

                    (error, result) => {

                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }

                    }
                );

                stream.end(req.file.buffer);

            });

            console.log("Image uploaded to Cloudinary");

            return res.status(200).json({

                success: true,

                message: "Image uploaded successfully.",

                url: result.secure_url,

                public_id: result.public_id

            });

        } catch (error) {

            console.error("Cloudinary upload error:", error);

            return res.status(500).json({

                success: false,

                message: "Image upload failed.",

                error: error.message

            });

        }

    }
);

// ==========================================
// ERROR HANDLER
// ==========================================

app.use((error, req, res, next) => {

    console.error("Server error:", error);

    return res.status(500).json({

        success: false,

        message: error.message || "Internal server error."

    });

});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, "0.0.0.0", () => {

    console.log("--------------------------------------");
    console.log("       E-PANCHAYAT BACKEND");
    console.log("--------------------------------------");
    console.log(`Server running on port ${PORT}`);
    console.log("--------------------------------------");

});