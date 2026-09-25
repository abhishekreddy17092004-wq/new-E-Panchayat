/* =========================================================
   E-PANCHAYAT BACKEND
   MAIN SERVER
========================================================= */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const {
  startComplaintScheduler,
} = require("./services/complaintScheduler");
const fs = require("fs");

require("dotenv").config();


/* =========================================================
   1. APP CONFIGURATION
========================================================= */

const app = express();

const PORT =
  Number(process.env.PORT) || 5000;


/* =========================================================
   2. UPLOADS DIRECTORY
========================================================= */

const uploadsPath = path.join(
  __dirname,
  "uploads"
);

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, {
    recursive: true,
  });
}


/* =========================================================
   3. CORS CONFIGURATION
========================================================= */

const allowedOrigins =
  process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
    : [];

app.use(
  cors({
    origin: function (
      origin,
      callback
    ) {

      // Allow Postman, curl and server-to-server requests
      if (!origin) {
        return callback(
          null,
          true
        );
      }

      // Development mode
      if (
        allowedOrigins.length === 0
      ) {
        return callback(
          null,
          true
        );
      }

      // Production mode
      if (
        allowedOrigins.includes(
          origin
        )
      ) {
        return callback(
          null,
          true
        );
      }

      return callback(
        new Error(
          "CORS origin not allowed."
        )
      );
    },

    credentials: true,
  })
);


/* =========================================================
   4. BODY PARSERS
========================================================= */

app.use(
  express.json({
    limit: "2mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "2mb",
  })
);


/* =========================================================
   5. SERVE UPLOADED FILES
========================================================= */

app.use(
  "/uploads",
  express.static(
    uploadsPath
  )
);


/* =========================================================
   6. LOAD ROUTES
========================================================= */

const authRoutes =
  require(
    "./routes/authRoutes"
  );

const userRoutes =
  require(
    "./routes/userRoutes"
  );

const complaintRoutes =
  require(
    "./routes/complaintRoutes"
  );


/* =========================================================
   7. AUTHENTICATION ROUTES
========================================================= */

app.use(
  "/api/auth",
  authRoutes
);


/* =========================================================
   8. USER ROUTES
========================================================= */

/*
 * userRoutes.js:
 *
 * router.get("/profile", protect, ...)
 *
 * Mounted here:
 *
 * /api/users
 *
 * Final endpoint:
 *
 * GET /api/users/profile
 */

app.use(
  "/api/users",
  userRoutes
);


/* =========================================================
   9. COMPLAINT ROUTES
========================================================= */

app.use(
  "/api/complaints",
  complaintRoutes
);


/* =========================================================
   10. ROOT HEALTH CHECK
========================================================= */

app.get(
  "/",
  function (req, res) {

    return res.status(200).json({
      success: true,
      message:
        "E-Panchayat API is running",
      service:
        "e-panchayat-backend",
      status: "online",
    });

  }
);


/* =========================================================
   11. API HEALTH CHECK
========================================================= */

app.get(
  "/api/health",
  function (req, res) {

    const mongoState =
      mongoose.connection
        .readyState;

    /*
     * 0 = disconnected
     * 1 = connected
     * 2 = connecting
     * 3 = disconnecting
     */

    const mongoConnected =
      mongoState === 1;

    return res
      .status(
        mongoConnected
          ? 200
          : 503
      )
      .json({

        success:
          mongoConnected,

        backend:
          "online",

        database:
          mongoConnected
            ? "connected"
            : "not connected",

        timestamp:
          new Date().toISOString(),
      });

  }
);


/* =========================================================
   12. 404 HANDLER
========================================================= */

app.use(
  function (req, res) {

    return res.status(404).json({
      success: false,

      message:
        `Route not found: ${req.method} ${req.originalUrl}`,
    });

  }
);


/* =========================================================
   13. GLOBAL ERROR HANDLER
========================================================= */

app.use(
  function (
    error,
    req,
    res,
    next
  ) {

    console.error(
      "=========================================="
    );

    console.error(
      "SERVER ERROR"
    );

    console.error(
      "=========================================="
    );

    console.error(error);


    // CORS error
    if (
      error.message ===
      "CORS origin not allowed."
    ) {

      return res.status(403).json({
        success: false,
        message:
          "CORS origin not allowed.",
      });

    }


    // Multer upload error
    if (
      error.name ===
      "MulterError"
    ) {

      return res.status(400).json({
        success: false,
        message:
          error.message ||
          "File upload failed.",
      });

    }


    const statusCode =
      Number(
        error.status ||
        error.statusCode ||
        500
      );

    return res
      .status(
        statusCode >= 400 &&
        statusCode < 600
          ? statusCode
          : 500
      )
      .json({
        success: false,

        message:
          error.message ||
          "Internal server error",
      });

  }
);


/* =========================================================
   14. MONGODB URI
========================================================= */

const MONGO_URI =
  process.env.MONGO_URI ||
  process.env.MONGODB_URI ||
  process.env.MONGO_URL ||
  process.env.DATABASE_URL;


if (!MONGO_URI) {

  console.error(
    "=========================================="
  );

  console.error(
    "ERROR: MONGODB URI NOT FOUND"
  );

  console.error(
    "=========================================="
  );

  console.error(
    "Expected one of:"
  );

  console.error(
    "MONGO_URI"
  );

  console.error(
    "MONGODB_URI"
  );

  console.error(
    "MONGO_URL"
  );

  console.error(
    "DATABASE_URL"
  );

  console.error(
    "=========================================="
  );

  process.exit(1);
}


/* =========================================================
   15. START SERVER
========================================================= */

async function startServer() {

  try {

    console.log(
      "=========================================="
    );

    console.log(
      "E-PANCHAYAT BACKEND"
    );

    console.log(
      "=========================================="
    );

    console.log(
      "Connecting to MongoDB..."
    );

    console.log(
      "=========================================="
    );


    /* ------------------------------------------
       CONNECT TO MONGODB
    ------------------------------------------ */

    await mongoose.connect(
      MONGO_URI
    );


    console.log(
      "=========================================="
    );

    console.log(
      "MongoDB Atlas connected successfully"
    );

    console.log(
      "=========================================="
    );


    /* ------------------------------------------
       START EXPRESS SERVER
    ------------------------------------------ */

    app.listen(
      PORT,
      function () {

        console.log(
          "=========================================="
        );

        console.log(
          "E-PANCHAYAT BACKEND"
        );

        console.log(
          "=========================================="
        );

        console.log(
          `Server running on port ${PORT}`
        );

        console.log(
          `http://localhost:${PORT}`
        );

        console.log(
          `Health check: http://localhost:${PORT}/api/health`
        );

        console.log(
          "=========================================="
        );

        console.log(
          "Available API routes:"
        );

        console.log(
          `POST http://localhost:${PORT}/api/auth/register`
        );

        console.log(
          `POST http://localhost:${PORT}/api/auth/login`
        );

        console.log(
          `GET  http://localhost:${PORT}/api/auth/me`
        );

        console.log(
          `GET  http://localhost:${PORT}/api/users/profile`
        );

        console.log(
          `POST http://localhost:${PORT}/api/complaints`
        );

        console.log(
          `GET  http://localhost:${PORT}/api/complaints/my`
        );

        console.log(
          `GET  http://localhost:${PORT}/api/complaints/:id`
        );

        console.log(
          "=========================================="
        );

        console.log(
          `Uploads folder: ${uploadsPath}`
        );

        console.log(
          `Upload URL: http://localhost:${PORT}/uploads/<filename>`
        );

        console.log(
          "=========================================="
        );

 startComplaintScheduler();
      }
    );

  }
  catch (error) {

    console.error(
      "=========================================="
    );

    console.error(
      "SERVER STARTUP FAILED"
    );

    console.error(
      "=========================================="
    );

    console.error(
      error.message
    );

    console.error(
      "=========================================="
    );

    try {

      await mongoose.disconnect();

    }
    catch (disconnectError) {

      console.error(
        "MongoDB disconnect error:",
        disconnectError.message
      );

    }

    process.exit(1);
  }
}


/* =========================================================
   16. START APPLICATION
========================================================= */

startServer();


/* =========================================================
   17. EXPORT APP
========================================================= */

module.exports = app;