// ==========================================
// SMS SERVICE
// DEMO MODE
// ==========================================
//
// This service currently simulates SMS sending.
// No paid SMS provider or DLT registration
// is required.
//
// Later, this same service can be connected
// to MSG91/Twilio without changing the
// controllers significantly.
// ==========================================


// ==========================================
// DEMO SMS SENDER
// ==========================================

const sendSMS = async (
  phone,
  message
) => {

  try {

    // ========================================
    // BASIC VALIDATION
    // ========================================

    if (!phone) {

      throw new Error(
        "Phone number is required."
      );

    }

    if (!message) {

      throw new Error(
        "SMS message is required."
      );

    }


    // ========================================
    // MASK PHONE FOR PRIVACY
    // ========================================

    const phoneString =
      String(phone);

    const maskedPhone =
      phoneString.length >= 10
        ? `${phoneString.slice(0, 2)}******${phoneString.slice(-2)}`
        : "**********";


    // ========================================
    // DEMO SMS LOG
    // ========================================

    console.log(
      "\n=========================================="
    );

    console.log(
      "           DEMO SMS SERVICE"
    );

    console.log(
      "=========================================="
    );

    console.log(
      `To: ${maskedPhone}`
    );

    console.log(
      `Message: ${message}`
    );

    console.log(
      "Status: DEMO SMS SENT"
    );

    console.log(
      "==========================================\n"
    );


    // ========================================
    // RETURN SUCCESS
    // ========================================

    return {
      success: true,
      demo: true,
      message:
        "Demo SMS generated successfully.",
    };

  }
  catch (error) {

    console.error(
      "SMS service error:",
      error
    );


    return {
      success: false,
      demo: true,
      message:
        "Unable to generate demo SMS.",
    };

  }

};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
  sendSMS,
};