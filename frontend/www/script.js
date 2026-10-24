/* =========================================================
   E-PANCHAYAT
   FRONTEND JAVASCRIPT
   Backend: Node.js + Express + MongoDB + JWT
========================================================= */
/* =========================================================
   GLOBAL LANGUAGE SYSTEM
   English + Hindi + Kannada
========================================================= */

const SUPPORTED_LANGUAGES = ["en", "hi", "kn"];
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "epanchayat_language";


/* =========================================================
   LANGUAGE STORAGE
========================================================= */

function getSelectedLanguage() {

    /*
     * sessionStorage keeps the selected language
     * while the current browser tab/session is open.
     *
     * When the website/tab is closed and opened again,
     * there will be no saved language, so English
     * becomes the default language.
     */

    const savedLanguage =
        sessionStorage.getItem(
            LANGUAGE_STORAGE_KEY
        );


    if (
        SUPPORTED_LANGUAGES.includes(
            savedLanguage
        )
    ) {

        return savedLanguage;
    }


    return DEFAULT_LANGUAGE;
}


function setSelectedLanguage(
    language
) {

    if (
        !SUPPORTED_LANGUAGES.includes(
            language
        )
    ) {

        language =
            DEFAULT_LANGUAGE;
    }


    /*
     * Store only for the current browser session.
     * Do NOT use localStorage here.
     */

    sessionStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        language
    );


    const languageSelect =
        document.getElementById(
            "languageSelect"
        );


    if (languageSelect) {

        languageSelect.value =
            language;
    }
}


/* =========================================================
   TRANSLATIONS
   Keep all citizen-facing wording here.
========================================================= */

const translations = {

/* =========================
   ENGLISH
========================= */

en: {

    home: "Home",
    about: "About",
    services: "Services",
    complaints: "Complaints",
    notices: "Notices",
    contact: "Contact",
    login: "Login",
    register: "Register",
    language: "Language",
    complaint: "Complaint",

    email: "Email",
    password: "Password",
    enterEmail: "Enter email",
enterPassword: "Enter password",
    newCitizen: "New citizen?",
    createAccount: "Create Account",

    citizenLogin: "Citizen Login",
    citizenLoginDescription:
        "Login to access your E-Gram Panchayat account.",

    citizenRegistration: "Citizen Registration",
    citizenRegistrationDescription:
        "Create your E-Gram Panchayat account.",

   fullName: "Full Name",
phone: "Phone",
village: "Village",
state: "State",
district: "District",
taluk: "Taluk",
problem: "Problem",
description: "Description",

enterFullName: "Enter full name",
enterPhone: "Phone number",
enterVillage: "Village",
minimumPasswordLength: "Minimum 6 characters",

    loginEnterCredentials: "Enter email and password.",
    loggingIn: "Logging in...",
    loginSuccessful: "Login successful!",

    registrationFillAllFields: "Please fill all registration fields.",
    invalidIndianPhone:
    "Please enter a valid 10-digit Indian mobile number.",
registrationPasswordLength: "Password must contain at least 6 characters.",
creatingCitizenAccount: "Creating your citizen account...",
registrationSuccessful: "Registration successful. Redirecting to login...",

officialLoginEnterCredentials: "Enter official email and password.",
selectOfficialRole: "Select official role.",
invalidOfficialRole: "Invalid official role.",


    /* =====================================================
       HOME / SERVICES
    ===================================================== */

    welcome: "Welcome to E-Panchayat",

    tagline:
        "Digital Panchayat Services for Every Citizen",

    servicesLabel:
        "PANCHAYAT SERVICES",
        governmentOfIndia:
    "Government of India",

digitalPanchayatInitiative:
    "Digital Panchayat Initiative",

helpline:
    "Helpline",

brandTitle:
    "E-Gram Panchayat",

brandSubtitle:
    "Digital Panchayat Services",

    governmentBadge:
    "Digital India · Rural Development",

heroDescription:
    "Bring government services closer to citizens through digital Panchayat governance.",

heroSecondary:
    "Submit complaints, attach real-world photo evidence, capture the complaint location and track action taken by Panchayat officials.",

registerNow:
    "Register Now",

citizenLogin:
    "Citizen Login",

complaintsRegistered:
    "Complaints Registered",

complaintsResolved:
    "Complaints Resolved",

digitalAccess:
    "Digital Access",

digitalServices:
    "Digital Services",

accessPanchayatOnline:
    "Access Panchayat services online",

smartGovernance:
    "Smart Governance",

transparentLocalAdministration:
    "Transparent local administration",

citizenFirst:
    "Citizen First",

servicesCloserCommunity:
    "Services closer to your community",

    
    /* =====================================================
          NOTICES
    ===================================================== */
    latestInformation: "LATEST INFORMATION",
    noticesAnnouncements: "Notices & Announcements",
    importantPanchayatInfo: "Important information from your Panchayat.",
    aug: "AUG",
    general:"GENERAL",
    notice:"NOTICE",
    update:"UPDATE",
    digitalPanchayatServices:"Digital Panchayat Services",
    digitalPanchayatServicesDescription: "Citizens can access Panchayat services through the online portal.",
    complaintRegistrationNotice: "Complaint Registration",
    complaintsEncouraged: "Citizens are encouraged to submit complaints through the digital system.",
    smartGovernanceInitiative: "Smart Governance Initiative",
    technologyGovernanceServices: "New technology-enabled governance services are being introduced.",

     /* =====================================================
          CONTACT
      ===================================================== */
    contactUs: "CONTACT US",
panchayatOffice: "Panchayat Office",
contactAssistance: "For assistance, citizens can contact the Panchayat office during working hours.",
address: "Address",
panchayatOfficeAddress: "Gram Panchayat Office, Your Village, Karnataka, India",
sendUsMessage: "Send Us a Message",
name: "Name",
yourName: "Your name",
yourEmail: "Your email",
message: "Message",
writeYourMessage: "Write your message...",
sendMessage: "Send Message",

    /* =====================================================
       ABOUT E-GRAM PANCHAYAT
    ===================================================== */

    digitalPanchayat:
        "Digital Panchayat",

    technologyRuralGovernance:
        "Technology-enabled rural governance",

    aboutEGramPanchayat:
        "ABOUT E-GRAM PANCHAYAT",

    connectingCitizens:
        "Connecting Citizens with Local Governance",

    aboutDescription1:
        "E-Gram Panchayat is a digital platform designed to make Panchayat services easier and more accessible to citizens.",

    aboutDescription2:
        "Citizens can report real-world problems with photo evidence and GPS location. Authorized officials can inspect complaints and update their status.",

    transparentComplaintManagement:
        "Transparent complaint management",

    gpsEnabledComplaintLocation:
        "GPS-enabled complaint location",

    photoEvidenceComplaints:
        "Photo evidence for complaints",

    roleBasedOfficialDashboard:
        "Role-based official dashboard",


    /* =====================================================
       PANCHAYAT SERVICES
    ===================================================== */

    panchayatServices:
        "Panchayat Services",

    panchayatServicesDescription:
        "Access important digital services from one place.",

    registerComplaint:
        "Register Complaint",

    registerComplaintDesc:
        "Report road, water, sanitation, waste, electricity and other local problems.",

    submitComplaintArrow:
        "Submit Complaint →",

    trackComplaint:
        "Track Complaint",

    trackComplaintDesc:
        "Track complaints submitted from your citizen account.",

    trackNow:
        "Track Now →",

    panchayatLocation:
        "Panchayat Location",

    panchayatLocationDesc:
        "Find your Panchayat office and important local information.",

    viewContact:
        "View Contact →",

    noticesService:
        "Notices",

    noticesServiceDesc:
        "Stay updated with Panchayat notices, announcements and public information.",

    readNotices:
        "Read Notices →",


    /* =====================================================
       COMPLAINT PROCESS
    ===================================================== */

    smartComplaintSystem:
        "SMART COMPLAINT SYSTEM",

    reportLocalProblem:
        "Report a Local Problem",

    reportLocalProblemDescription:
        "Report an issue in your village or town and track its resolution.",

    registerStep:
        "Register",

    registerStepDescription:
        "Create your citizen account",

    submitStep:
        "Submit",

    submitStepDescription:
        "Add complaint details and photo",

    trackStep:
        "Track",

    trackStepDescription:
        "Monitor complaint status",

    resolveStep:
        "Resolve",

    resolveStepDescription:
        "Officials take action and update status",

    haveProblem:
        "Have a problem in your area?",

    reportDirectly:
        "Report it directly to your Panchayat.",


    /* =====================================================
       COMPLAINT FORM
    ===================================================== */

    complaintPhotoEvidence:
        "📷 Complaint Photo Evidence",

    openCamera:
        "📷 Open Camera",

    capturePhoto:
        "📸 Capture Photo",

    closeCamera:
        "✕ Close Camera",

    removePhoto:
        "🗑️ Remove Photo",

    photoStatus:
        "Capture a clear photo showing the problem.",

    complaintLocation:
        "📍 Complaint Location",

    getGPS:
        "Get GPS",

    locationNotCaptured:
        "Location not captured.",

    submitComplaint:
        "🚀 Submit Complaint",

    selectProblem:
        "Select Problem",


    /* =====================================================
       PROBLEM TYPES
    ===================================================== */

    roadDamage:
        "Road Damage",

    waterProblem:
        "Water Problem",

    governmentPropertyProblem:
        "Government Property Problem",

    governmentSchemeProblem:
        "Government Scheme Problem",

    drainageProblem:
        "Drainage Problem",

    streetLightProblem:
        "Street Light Problem",

    garbageSanitationProblem:
        "Garbage / Sanitation Problem",

    other:
        "Other",


    /* =====================================================
       COMPLAINT DETAILS
    ===================================================== */

    status:
        "Status",

    currentLevel:
        "Current Level",

    citizen:
        "Citizen",

    submitted:
        "Submitted",

    descriptionLabel:
        "Description",

    gps:
        "GPS",

    submittedOn:
        "Submitted",

    assignedTo:
        "Assigned To",

    remarks:
        "Remarks",

    history:
        "History",

    viewComplaint:
        "View Complaint",

    viewDetails:
        "View Details",

    viewComplaintPhoto:
        "View Complaint Photo",

    noComplaints:
        "No complaints found.",

    noComplaintsYet:
        "You have not submitted any complaints yet.",

        system:
    "System",

officer:
    "Officer",

action:
    "Action",

    trackComplaintMissingId:
    "Please enter your Complaint ID.",

trackingComplaint:
    "🔎 Tracking complaint...",

complaintNotFound:
    "Complaint not found.",

complaintFound:
    "✓ Complaint found.",

unableToTrackComplaint:
    "Unable to track complaint. Please try again.",

    trackingProgress:
    "Complaint Progress",

noProgressUpdates:
    "No progress updates are available yet.",

trackingDetails:
    "Complaint Tracking",

lastUpdated:
    "Last Updated",

level:
    "Level",

date:
    "Date",

progressUpdate:
    "Progress Update",

    trackComplaintTitle:
    "Track Complaint",

trackComplaintDescription:
    "Enter your Complaint ID to check the current status and progress of your complaint.",

enterComplaintIdPlaceholder:
    "Enter Complaint ID",

trackComplaintButton:
    "🔎 Track Complaint",


    /* =====================================================
       OFFICIAL DASHBOARD
    ===================================================== */

    officials:
        "Officials",

    officialsPortal:
        "Officials Portal",

    officialsDashboard:
        "Officials Dashboard",

    complaintManagement:
        "Complaint Management",

    officialDashboardDescription:
        "Review citizen complaints, evidence and locations.",

    officialAccount:
        "Official Account",

    role:
        "Role",

    admin:
        "Admin",

    gkm:
        "GKM",

    pdo:
        "PDO",

    eo:
        "EO",

    ceo:
        "CEO",

    complaintReview:
        "Complaint Review",

    complaintReviewDescription:
        "Check complaint information and update action status.",

    refresh:
        "🔄 Refresh",

        officialLoginDescription:
    "Authorized Panchayat officials only.",

officialEmail:
    "Official Email",

selectRole:
    "Select Role",


    /* =====================================================
       COMPLAINT STATUS
    ===================================================== */

   submittedAction:
    "Submitted",

complaintSubmittedAction:
    "Complaint Submitted",

underReviewAction:
    "Under Review",

assignedAction:
    "Assigned",

assignedToGkmAction:
    "Assigned to GKM",

assignedToPdoAction:
    "Assigned to PDO",

assignedToEoAction:
    "Assigned to EO",

assignedToCeoAction:
    "Assigned to CEO",

inProgressAction:
    "In Progress",

progressStartedAction:
    "Progress Started",

resolvedAction:
    "Resolved",

complaintResolvedAction:
    "Complaint Resolved",

rejectedAction:
    "Rejected",

complaintRejectedAction:
    "Complaint Rejected",

closedAction:
    "Closed",

complaintClosedAction:
    "Complaint Closed",


    /* =====================================================
       OFFICIAL ACTIONS
    ===================================================== */

    approve:
        "Approve",

    reject:
        "Reject",

    delete:
        "Delete",

    startProgress:
        "Start Progress",

    resolve:
        "Resolve",

    logout:
        "Logout",


    /* =====================================================
       CITIZEN DASHBOARD — B4.10
    ===================================================== */

    citizenPortal:
        "CITIZEN PORTAL",

    myDashboard:
        "My Dashboard",

    dashboardDescription:
        "Submit complaints and track their progress.",

    myProfile:
        "My Profile",

    newComplaint:
        "📢 New Complaint",

    refreshComplaints:
        "🔄 Refresh Complaints",

    myComplaints:
        "My Complaints",

    viewSubmittedComplaints:
        "View your submitted complaints and current status.",

        unableToLoadComplaints:
    "Unable to load your complaints.",

    noComplaintsCurrentlyAvailable:
    "No complaints are currently available.",

noComplaintsAssignedToYou:
    "No complaints are currently assigned to you.",

    onlyAdminCanVerify:
    "Only admin can verify complaints.",

invalidVerificationAction:
    "Invalid verification action.",

enterRejectionReason:
    "Enter rejection reason:",

rejectionReasonRequired:
    "Rejection reason is required.",

approveComplaintConfirmation:
    "Approve this complaint and send it to GKM?",

rejectComplaintConfirmation:
    "Reject this complaint?",

unableToVerifyComplaint:
    "Unable to verify complaint.",

complaintApprovedAssignedGkm:
    "Complaint approved and assigned to GKM.",

complaintRejectedSuccessfully:
    "Complaint rejected successfully.",

unableToUpdateComplaint:
    "Unable to update complaint.",

noComplaintsTitle:
    "No complaints",

loadingYourComplaints:
    "Loading your complaints...",
    onlyAdminCanDeleteComplaints:
    "Only admin can delete complaints.",

deleteComplaintConfirmation:
    "Are you sure you want to delete this complaint?",

unableToDeleteComplaint:
    "Unable to delete complaint.",

complaintDeletedSuccessfully:
    "Complaint deleted successfully.",

sessionExpired:
    "Your session has expired. Please login again.",

    loadingOfficialComplaints:
    "Loading complaints...",

    notAssigned:
    "Not assigned",

assignedOfficer:
    "Assigned officer",

notAuthorizedToViewOfficialComplaints:
    "You are not authorized to view official complaints.",

unknownError:
    "Unknown error.",

    loggedOut:
    "You have been logged out.",

    pleaseFillContactFields:
    "Please fill all contact fields.",

contactMessagePrepared:
    "Thank you. Your message has been prepared, but the current backend does not yet have a contact-message API.",

    pleaseLoginCitizenAccount:
    "Please login using a citizen account.",

    complaintIdNotAvailable:
    "Complaint ID is not available.",

complaintIdCopied:
    "Complaint ID copied.",

    complaintSearchFieldUnavailable:
    "Complaint search field is not available.",

enterComplaintId:
    "Enter a complaint ID.",

    noDeadline:
    "No deadline",

invalidDeadline:
    "Invalid deadline",

deadlinePassed:
    "Deadline passed",

hoursRemaining:
    "{count} hour(s) remaining",

daysRemaining:
    "{count} day(s) remaining",

    offlineMessage:
    "You are offline. Some E-Panchayat features may not work.",

internetRestored:
    "Internet connection restored.",

    pleaseGetGpsLocationFirst:
    "Please get your GPS location first.",

invalidProblemLocation:
    "Invalid problem location. Please select the location again.",

problemLocationConfirmed:
    "✓ Problem location confirmed: {lat}, {lng}",

confirmedProblemLocation:
    "✓ Confirmed Problem Location",

locationAttachedToComplaint:
    "This location will be attached to your complaint.",

locationConfirmed:
    "✓ Location Confirmed",

    /* =====================================================
       DASHBOARD
    ===================================================== */

    citizenDashboard:
        "Citizen Dashboard",

    trackComplaintStatus:
        "Track complaint status and see assigned roles",

    citizenRole:
        "Citizen",

    officialRole:
        "Officials",

    governmentOfficials:
        "Government officials complaint management",


    /* =====================================================
       GPS
    ===================================================== */

    gpsNotSupported:
        "GPS is not supported by this browser.",

    gettingLocation:
        "Getting your current location...",

    unableToGetLocation:
        "Unable to get your location.",

    locationPermissionDenied:
        "Location permission was denied. Please allow location access.",

    locationUnavailable:
        "Your location is currently unavailable.",

    locationTimeout:
        "Location request timed out. Please try again.",

    locationCaptured:
        "Location captured",

    accuracy:
        "Accuracy",

        mapCouldNotBeLoaded:
    "Map could not be loaded. Please refresh the page.",


    /* =====================================================
       CAMERA
    ===================================================== */

    cameraNotSupported:
        "Camera is not supported by this browser.",

    cameraRequiresHttps:
        "Camera requires HTTPS when the website is deployed.",

    requestingCameraPermission:
        "Requesting camera permission...",

    cameraReady:
        "Camera ready. Capture the complaint photo.",

    unableToAccessCamera:
        "Unable to access camera. Please allow camera permission.",

    cameraPermissionDenied:
        "Camera permission denied. Please allow camera access.",

    noCameraFound:
        "No camera was found on this device.",

    cameraBusy:
        "Camera is already being used by another application.",

    cameraUnavailable:
        "Camera is not available.",

    cameraNotReady:
        "Camera is not ready yet. Please wait a moment.",

    unableToPrepareCapture:
        "Unable to prepare photo capture.",

    failedToCapture:
        "Failed to capture photo.",

    photoCaptured:
        "Photo captured successfully.",

    cameraClosed:
        "Camera closed.",

    photoRemoved:
        "Photo removed. Please capture or select a new photo.",

    photoSelected:
        "Photo selected",


    /* =====================================================
       VALIDATION
    ===================================================== */

    enterState:
        "Please enter the state.",

    enterDistrict:
        "Please enter the district.",

    enterTaluk:
        "Please enter the taluk.",

   enterVillageRequired:
    "Please enter the village.",

    selectProblemType:
        "Please select the problem type.",

    describeProblem:
        "Please describe the problem.",

        confirmProblemLocation:
    "Please confirm the exact problem location on the map before submitting.",

selectProblemLocation:
    "Please select the problem location on the map.",

invalidSelectedLocation:
    "The selected location is invalid. Please select the location again.",

invalidLatitude:
    "Invalid latitude. Please select the location again.",

invalidLongitude:
    "Invalid longitude. Please select the location again.",

photoRequired:
    "Please capture or upload a photo of the problem.",

complaintFormValid:
    "Complaint form is valid.",

    descriptionMinimum:
        "Complaint description should contain at least 10 characters.",

    descriptionMaximum:
        "Complaint description cannot exceed 2000 characters.",

    captureGPSBeforeSubmit:
        "Please capture your GPS location before submitting the complaint.",

    capturePhotoBeforeSubmit:
        "Please capture or select a complaint photo.",


    /* =====================================================
       SUBMISSION
    ===================================================== */

    submitting:
        "Submitting...",

    submittingComplaint:
        "Submitting complaint to E-Panchayat...",

    complaintSubmitted:
        "Complaint submitted successfully.",

        failedToSubmitComplaint:
    "Failed to submit complaint.",

    complaintSubmittedWithId:
        "Complaint submitted successfully. Your Complaint ID is",

    unableToSubmit:
        "Unable to submit complaint.",

        confirmProblemLocationButton:
    "Confirm Problem Location",

    locationNotCaptured:
    "Location not captured.",

    loggedOut:
        "You have been logged out.",


    /* =====================================================
       FOOTER
    ===================================================== */

    eGramPanchayat:
        "E-Gram Panchayat",

    footerDescription:
        "Digital services for transparent and citizen-focused local governance.",

    quickLinks:
        "Quick Links",

    officialPortal:
        "Official Portal",

    officialsLogin:
        "Officials Login",

    helpSupport:
        "Help & Support",

    footerCopyright:
        "© 2026 E-Gram Panchayat. All Rights Reserved.",

    digitalPanchayatInitiative:
        "Digital Panchayat Initiative",

            adminVerificationCompleted:
            "Admin verification completed.",

        complaintHandledByAssignedOfficer:
            "Complaint is now handled by the assigned officer.",

        enterRemarks:
            "Enter remarks...",

        startUpdate:
            "Start / Update",

        markResolved:
            "Mark Resolved",

        complaintNotAssignedToYou:
            "This complaint is not currently assigned to you.",

        complaintId:
            "Complaint ID",

            complaintIdMissing:
    "Complaint ID is missing.",

   complaintDetailsUnavailable:
    "Complaint details are unavailable.",

    complaintDetails:
    "Complaint Details",

notAvailable:
    "N/A",

        adminVerification:
            "Admin Verification",

        assignedAt:
            "Assigned At",

        deadline:
            "Deadline",

        latestRemarks:
            "Latest Remarks",

        evidencePhoto:
            "Evidence Photo",

        viewPhoto:
            "View Photo",

        openGoogleMaps:
            "Open in Google Maps",

        viewFullDetails:
            "View Full Details",

        underReview:
            "Under Review",

        assigned:
            "Assigned",

        inProgress:
            "In Progress",

        resolved:
            "Resolved",

        rejected:
            "Rejected",

        closed:
            "Closed"
        

},
  
/* =========================
   HINDI
========================= */

hi: {

    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    complaints: "शिकायतें",
    notices: "सूचनाएं",
    contact: "संपर्क",
    login: "लॉगिन",
    register: "पंजीकरण",
    language: "भाषा",
    complaint: "शिकायत",

    email: "ईमेल",
    password: "पासवर्ड",
    enterEmail: "ईमेल दर्ज करें",
enterPassword: "पासवर्ड दर्ज करें",
    newCitizen: "नए नागरिक हैं?",
    createAccount: "खाता बनाएं",

    citizenLogin: "नागरिक लॉगिन",

    citizenLoginDescription:
        "अपने ई-ग्राम पंचायत खाते में लॉगिन करें।",

    citizenRegistration:
        "नागरिक पंजीकरण",

    citizenRegistrationDescription:
        "अपना ई-ग्राम पंचायत खाता बनाएं।",

   fullName: "पूरा नाम",
phone: "फ़ोन",
village: "गाँव",
state: "राज्य",
district: "जिला",
taluk: "तालुका",
problem: "समस्या",
description: "विवरण",

enterFullName: "पूरा नाम दर्ज करें",
enterPhone: "फ़ोन नंबर दर्ज करें",
enterVillage: "गाँव दर्ज करें",
minimumPasswordLength: "कम से कम 6 अक्षर",

    loginEnterCredentials: "ईमेल और पासवर्ड दर्ज करें।",
    loggingIn: "लॉग इन हो रहा है...",
    loginSuccessful: "लॉगिन सफल रहा!",

    registrationFillAllFields: "कृपया पंजीकरण के सभी फ़ील्ड भरें।",
    invalidIndianPhone:
    "कृपया मान्य 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।",
registrationPasswordLength: "पासवर्ड में कम से कम 6 अक्षर होने चाहिए।",
creatingCitizenAccount: "आपका नागरिक खाता बनाया जा रहा है...",
registrationSuccessful: "पंजीकरण सफल रहा। लॉगिन पर भेजा जा रहा है...",

officialLoginEnterCredentials: "अधिकारी ईमेल और पासवर्ड दर्ज करें।",
selectOfficialRole: "अधिकारी की भूमिका चुनें।",
invalidOfficialRole: "अमान्य अधिकारी भूमिका।",

    /* =====================================================
       HOME / SERVICES
    ===================================================== */

    welcome:
        "ई-पंचायत में आपका स्वागत है",

    tagline:
        "हर नागरिक के लिए डिजिटल पंचायत सेवाएं",

    servicesLabel:
        "पंचायत सेवाएं",
          governmentOfIndia:
    "भारत सरकार",

digitalPanchayatInitiative:
    "डिजिटल पंचायत पहल",

helpline:
    "हेल्पलाइन",

brandTitle:
    "ई-ग्राम पंचायत",

brandSubtitle:
    "डिजिटल पंचायत सेवाएं",

    governmentBadge:
    "डिजिटल इंडिया · ग्रामीण विकास",

heroDescription:
    "डिजिटल पंचायत शासन के माध्यम से सरकारी सेवाओं को नागरिकों के और करीब लाएं।",

heroSecondary:
    "शिकायतें दर्ज करें, वास्तविक फोटो प्रमाण संलग्न करें, शिकायत का स्थान दर्ज करें और पंचायत अधिकारियों द्वारा की गई कार्रवाई को ट्रैक करें।",

registerNow:
    "अभी पंजीकरण करें",

citizenLogin:
    "नागरिक लॉगिन",

complaintsRegistered:
    "दर्ज शिकायतें",

complaintsResolved:
    "निस्तारित शिकायतें",

digitalAccess:
    "डिजिटल पहुंच",

digitalServices:
    "डिजिटल सेवाएं",

accessPanchayatOnline:
    "पंचायत सेवाओं को ऑनलाइन प्राप्त करें",

smartGovernance:
    "स्मार्ट शासन",

transparentLocalAdministration:
    "पारदर्शी स्थानीय प्रशासन",

citizenFirst:
    "नागरिक प्रथम",

servicesCloserCommunity:
    "आपके समुदाय के करीब सेवाएं",

    /* =====================================================
          NOTICES
     ===================================================== */
     latestInformation: "नवीनतम जानकारी",
    noticesAnnouncements: "सूचनाएँ और घोषणाएँ",
    importantPanchayatInfo: "आपकी पंचायत से महत्वपूर्ण जानकारी।",
    aug: "अगस्त",
    general:"सामान्य",
notice:    "सूचना",
update:    "अपडेट",
digitalPanchayatServices:    "डिजिटल पंचायत सेवाएं",
    digitalPanchayatServicesDescription: "नागरिक ऑनलाइन पोर्टल के माध्यम से पंचायत सेवाओं का लाभ उठा सकते हैं।",
    complaintRegistrationNotice: "शिकायत पंजीकरण",
    complaintsEncouraged: "नागरिकों को डिजिटल प्रणाली के माध्यम से शिकायत दर्ज करने के लिए प्रोत्साहित किया जाता है।",
    smartGovernanceInitiative: "स्मार्ट शासन पहल",
    technologyGovernanceServices: "नई तकनीक-सक्षम शासन सेवाएँ शुरू की जा रही हैं।", 

     /* =====================================================
          CONTACT
      ===================================================== */
     contactUs: "संपर्क करें",
panchayatOffice: "पंचायत कार्यालय",
contactAssistance: "सहायता के लिए नागरिक कार्य समय के दौरान पंचायत कार्यालय से संपर्क कर सकते हैं।",
address: "पता",
panchayatOfficeAddress: "ग्राम पंचायत कार्यालय, आपका गाँव, कर्नाटक, भारत",
sendUsMessage: "हमें संदेश भेजें",
name: "नाम",
yourName: "अपना नाम",
yourEmail: "अपना ईमेल",
message: "संदेश",
writeYourMessage: "अपना संदेश लिखें...",
sendMessage: "संदेश भेजें",

    /* =====================================================
       ABOUT E-GRAM PANCHAYAT
    ===================================================== */

    digitalPanchayat:
        "डिजिटल पंचायत",

    technologyRuralGovernance:
        "तकनीक-सक्षम ग्रामीण शासन",

    aboutEGramPanchayat:
        "ई-ग्राम पंचायत के बारे में",

    connectingCitizens:
        "नागरिकों को स्थानीय शासन से जोड़ना",

    aboutDescription1:
        "ई-ग्राम पंचायत एक डिजिटल प्लेटफ़ॉर्म है जिसे पंचायत सेवाओं को नागरिकों के लिए आसान और अधिक सुलभ बनाने के लिए डिज़ाइन किया गया है।",

    aboutDescription2:
        "नागरिक फोटो प्रमाण और GPS स्थान के साथ वास्तविक समस्याओं की शिकायत दर्ज कर सकते हैं। अधिकृत अधिकारी शिकायतों की जांच कर सकते हैं और उनकी स्थिति अपडेट कर सकते हैं।",

    transparentComplaintManagement:
        "पारदर्शी शिकायत प्रबंधन",

    gpsEnabledComplaintLocation:
        "GPS-सक्षम शिकायत स्थान",

    photoEvidenceComplaints:
        "शिकायतों के लिए फोटो प्रमाण",

    roleBasedOfficialDashboard:
        "भूमिका-आधारित अधिकारी डैशबोर्ड",


    /* =====================================================
       PANCHAYAT SERVICES
    ===================================================== */

    panchayatServices:
        "पंचायत सेवाएं",

    panchayatServicesDescription:
        "महत्वपूर्ण डिजिटल सेवाओं का उपयोग एक ही स्थान से करें।",

    registerComplaint:
        "शिकायत दर्ज करें",

    registerComplaintDesc:
        "सड़क, पानी, स्वच्छता, कचरा, बिजली और अन्य स्थानीय समस्याओं की शिकायत दर्ज करें।",

    submitComplaintArrow:
        "शिकायत दर्ज करें →",

    trackComplaint:
        "शिकायत ट्रैक करें",

    trackComplaintDesc:
        "अपने नागरिक खाते से दर्ज की गई शिकायतों की स्थिति देखें।",

    trackNow:
        "अभी ट्रैक करें →",

    panchayatLocation:
        "पंचायत स्थान",

    panchayatLocationDesc:
        "अपनी पंचायत कार्यालय का स्थान और महत्वपूर्ण स्थानीय जानकारी देखें।",

    viewContact:
        "संपर्क देखें →",

    noticesService:
        "सूचनाएं",

    noticesServiceDesc:
        "पंचायत की सूचनाओं, घोषणाओं और सार्वजनिक जानकारी से अपडेट रहें।",

    readNotices:
        "सूचनाएं पढ़ें →",


    /* =====================================================
       COMPLAINT PROCESS
    ===================================================== */

    smartComplaintSystem:
        "स्मार्ट शिकायत प्रणाली",

    reportLocalProblem:
        "स्थानीय समस्या की शिकायत करें",

    reportLocalProblemDescription:
        "अपने गाँव या शहर की समस्या की शिकायत करें और उसके समाधान की स्थिति देखें।",

    registerStep:
        "पंजीकरण",

    registerStepDescription:
        "अपना नागरिक खाता बनाएं",

    submitStep:
        "जमा करें",

    submitStepDescription:
        "शिकायत का विवरण और फोटो जोड़ें",

    trackStep:
        "ट्रैक करें",

    trackStepDescription:
        "शिकायत की स्थिति देखें",

    resolveStep:
        "समाधान",

    resolveStepDescription:
        "अधिकारी कार्रवाई करते हैं और स्थिति अपडेट करते हैं",

    haveProblem:
        "क्या आपके क्षेत्र में कोई समस्या है?",

    reportDirectly:
        "इसे सीधे अपनी पंचायत में दर्ज करें.",


    /* =====================================================
       COMPLAINT FORM
    ===================================================== */

    complaintPhotoEvidence:
        "📷 शिकायत की फोटो",

    openCamera:
        "📷 कैमरा खोलें",

    capturePhoto:
        "📸 फोटो लें",

    closeCamera:
        "✕ कैमरा बंद करें",

    removePhoto:
        "🗑️ फोटो हटाएँ",

    photoStatus:
        "समस्या को स्पष्ट रूप से दिखाने वाली फोटो लें।",

    complaintLocation:
        "📍 शिकायत का स्थान",

    getGPS:
        "GPS प्राप्त करें",

    locationNotCaptured:
        "स्थान प्राप्त नहीं हुआ है।",

    submitComplaint:
        "🚀 शिकायत दर्ज करें",

    selectProblem:
        "समस्या चुनें",


    /* =====================================================
       PROBLEM TYPES
    ===================================================== */

    roadDamage:
        "सड़क क्षति",

    waterProblem:
        "पानी की समस्या",

    governmentPropertyProblem:
        "सरकारी संपत्ति की समस्या",

    governmentSchemeProblem:
        "सरकारी योजना की समस्या",

    drainageProblem:
        "नाली की समस्या",

    streetLightProblem:
        "स्ट्रीट लाइट की समस्या",

    garbageSanitationProblem:
        "कचरा / स्वच्छता की समस्या",

    other:
        "अन्य",


    /* =====================================================
       COMPLAINT DETAILS
    ===================================================== */

    status:
        "स्थिति",

    currentLevel:
        "वर्तमान स्तर",

    citizen:
        "नागरिक",

    submitted:
        "जमा किया गया",

    descriptionLabel:
        "विवरण",

    gps:
        "GPS",

    submittedOn:
        "जमा किया गया",

    assignedTo:
        "सौंपा गया",

    remarks:
        "टिप्पणी",

    history:
        "इतिहास",

    viewComplaint:
        "शिकायत देखें",

    viewDetails:
        "विवरण देखें",

    viewComplaintPhoto:
        "शिकायत की फोटो देखें",

    noComplaints:
        "कोई शिकायत नहीं मिली।",

    noComplaintsYet:
        "आपने अभी तक कोई शिकायत दर्ज नहीं की है।",
        
        system:
    "सिस्टम",

officer:
    "अधिकारी",

action:
    "कार्रवाई",

    trackComplaintMissingId:
    "कृपया अपनी शिकायत आईडी दर्ज करें।",

trackingComplaint:
    "🔎 शिकायत ट्रैक की जा रही है...",

complaintNotFound:
    "शिकायत नहीं मिली।",

complaintFound:
    "✓ शिकायत मिल गई।",

unableToTrackComplaint:
    "शिकायत ट्रैक नहीं की जा सकी। कृपया पुनः प्रयास करें।",

    trackingProgress:
    "शिकायत की प्रगति",

noProgressUpdates:
    "अभी तक कोई प्रगति अपडेट उपलब्ध नहीं है।",

trackingDetails:
    "शिकायत ट्रैकिंग",

lastUpdated:
    "अंतिम अपडेट",

level:
    "स्तर",

date:
    "दिनांक",

progressUpdate:
    "प्रगति अपडेट",

   trackComplaintTitle:
    "शिकायत ट्रैक करें",

trackComplaintDescription:
    "अपनी शिकायत की वर्तमान स्थिति और प्रगति देखने के लिए शिकायत आईडी दर्ज करें।",

enterComplaintIdPlaceholder:
    "शिकायत आईडी दर्ज करें",

trackComplaintButton:
    "🔎 शिकायत ट्रैक करें",

    /* =====================================================
       OFFICIAL DASHBOARD
    ===================================================== */

    officials:
        "अधिकारी",

    officialsPortal:
        "अधिकारी पोर्टल",

    officialsDashboard:
        "अधिकारी डैशबोर्ड",

    complaintManagement:
        "शिकायत प्रबंधन",

    officialDashboardDescription:
        "नागरिकों की शिकायतों, प्रमाण और स्थानों की समीक्षा करें।",

    officialAccount:
        "अधिकारी खाता",

    role:
        "भूमिका",

    admin:
        "प्रशासक",

    gkm:
        "GKM",

    pdo:
        "PDO",

    eo:
        "EO",

    ceo:
        "CEO",

    complaintReview:
        "शिकायत समीक्षा",

    complaintReviewDescription:
        "शिकायत की जानकारी देखें और कार्रवाई की स्थिति अपडेट करें।",

    refresh:
        "🔄 रिफ्रेश",

        officialLoginDescription:
    "केवल अधिकृत पंचायत अधिकारियों के लिए।",

officialEmail:
    "अधिकारी ईमेल",

selectRole:
    "भूमिका चुनें",


    /* =====================================================
       COMPLAINT STATUS
    ===================================================== */

    submittedAction:
    "सबमिट की गई",

complaintSubmittedAction:
    "शिकायत सबमिट की गई",

underReviewAction:
    "समीक्षा के अधीन",

assignedAction:
    "सौंपा गया",

assignedToGkmAction:
    "GKM को सौंपा गया",

assignedToPdoAction:
    "PDO को सौंपा गया",

assignedToEoAction:
    "EO को सौंपा गया",

assignedToCeoAction:
    "CEO को सौंपा गया",

inProgressAction:
    "प्रगति में",

progressStartedAction:
    "कार्य प्रगति शुरू हुई",

resolvedAction:
    "समाधान किया गया",

complaintResolvedAction:
    "शिकायत का समाधान किया गया",

rejectedAction:
    "अस्वीकृत",

complaintRejectedAction:
    "शिकायत अस्वीकार की गई",

closedAction:
    "बंद की गई",

complaintClosedAction:
    "शिकायत बंद की गई",


    /* =====================================================
       OFFICIAL ACTIONS
    ===================================================== */

    approve:
        "स्वीकृत करें",

    reject:
        "अस्वीकार करें",

    delete:
        "हटाएं",

    startProgress:
        "प्रगति शुरू करें",

    resolve:
        "समाधान करें",

    logout:
        "लॉगआउट",


    /* =====================================================
       CITIZEN DASHBOARD — B4.10
    ===================================================== */

    citizenPortal:
        "नागरिक पोर्टल",

    myDashboard:
        "मेरा डैशबोर्ड",

    dashboardDescription:
        "शिकायत दर्ज करें और उनकी प्रगति देखें।",

    myProfile:
        "मेरी प्रोफ़ाइल",

    newComplaint:
        "📢 नई शिकायत",

    refreshComplaints:
        "🔄 शिकायतें रिफ्रेश करें",

    myComplaints:
        "मेरी शिकायतें",

    viewSubmittedComplaints:
        "अपनी दर्ज की गई शिकायतें और वर्तमान स्थिति देखें।",

        unableToLoadComplaints:
    "आपकी शिकायतें लोड नहीं हो सकीं।",

    noComplaintsCurrentlyAvailable:
    "वर्तमान में कोई शिकायत उपलब्ध नहीं है।",

noComplaintsAssignedToYou:
    "वर्तमान में आपको कोई शिकायत नहीं सौंपी गई है।",

    onlyAdminCanVerify:
    "केवल एडमिन ही शिकायतों को सत्यापित कर सकता है।",

invalidVerificationAction:
    "अमान्य सत्यापन कार्रवाई।",

enterRejectionReason:
    "अस्वीकृति का कारण दर्ज करें:",

rejectionReasonRequired:
    "अस्वीकृति का कारण आवश्यक है।",

approveComplaintConfirmation:
    "क्या इस शिकायत को स्वीकृत करके GKM को भेजना है?",

rejectComplaintConfirmation:
    "क्या इस शिकायत को अस्वीकार करना है?",

unableToVerifyComplaint:
    "शिकायत सत्यापित नहीं हो सकी।",

complaintApprovedAssignedGkm:
    "शिकायत स्वीकृत कर GKM को सौंप दी गई है।",

complaintRejectedSuccessfully:
    "शिकायत सफलतापूर्वक अस्वीकार की गई।",

unableToUpdateComplaint:
    "शिकायत अपडेट नहीं हो सकी।",

noComplaintsTitle:
    "कोई शिकायत नहीं",

        loadingYourComplaints:
    "आपकी शिकायतें लोड हो रही हैं...",

    onlyAdminCanDeleteComplaints:
    "केवल एडमिन ही शिकायतें हटा सकता है।",

deleteComplaintConfirmation:
    "क्या आप वाकई इस शिकायत को हटाना चाहते हैं?",

unableToDeleteComplaint:
    "शिकायत हटाई नहीं जा सकी।",

complaintDeletedSuccessfully:
    "शिकायत सफलतापूर्वक हटा दी गई।",

sessionExpired:
    "आपका सत्र समाप्त हो गया है। कृपया फिर से लॉगिन करें.",

    loadingOfficialComplaints:
    "शिकायतें लोड हो रही हैं...",

    notAssigned:
    "सौंपा नहीं गया",

assignedOfficer:
    "सौंपा गया अधिकारी",

notAuthorizedToViewOfficialComplaints:
    "आपको आधिकारिक शिकायतें देखने की अनुमति नहीं है।",

unknownError:
    "अज्ञात त्रुटि।",

    loggedOut:
    "आप लॉग आउट हो गए हैं।",

    pleaseFillContactFields:
    "कृपया संपर्क फॉर्म के सभी फ़ील्ड भरें।",

contactMessagePrepared:
    "धन्यवाद। आपका संदेश तैयार कर दिया गया है, लेकिन वर्तमान बैकएंड में अभी संपर्क संदेश के लिए API उपलब्ध नहीं है।",

    pleaseLoginCitizenAccount:
    "कृपया नागरिक खाते का उपयोग करके लॉगिन करें।",

    complaintIdNotAvailable:
    "शिकायत आईडी उपलब्ध नहीं है।",

complaintIdCopied:
    "शिकायत आईडी कॉपी की गई।",

    complaintSearchFieldUnavailable:
    "शिकायत खोज फ़ील्ड उपलब्ध नहीं है।",

enterComplaintId:
    "शिकायत आईडी दर्ज करें।",

    noDeadline:
    "कोई समय सीमा नहीं",

invalidDeadline:
    "अमान्य समय सीमा",

deadlinePassed:
    "समय सीमा समाप्त हो गई",

hoursRemaining:
    "{count} घंटे शेष",

daysRemaining:
    "{count} दिन शेष",

    offlineMessage:
    "आप ऑफ़लाइन हैं। E-Panchayat की कुछ सुविधाएँ काम नहीं कर सकती हैं।",

internetRestored:
    "इंटरनेट कनेक्शन बहाल हो गया है।",

    pleaseGetGpsLocationFirst:
    "कृपया पहले अपना GPS स्थान प्राप्त करें।",

invalidProblemLocation:
    "समस्या का स्थान अमान्य है। कृपया स्थान फिर से चुनें।",

problemLocationConfirmed:
    "✓ समस्या का स्थान सुनिश्चित किया गया: {lat}, {lng}",

confirmedProblemLocation:
    "✓ समस्या का स्थान सुनिश्चित किया गया",

locationAttachedToComplaint:
    "यह स्थान आपकी शिकायत के साथ जोड़ा जाएगा।",

locationConfirmed:
    "✓ स्थान सुनिश्चित किया गया",

    /* =====================================================
       DASHBOARD
    ===================================================== */

    citizenDashboard:
        "नागरिक डैशबोर्ड",

    trackComplaintStatus:
        "शिकायत की स्थिति और सौंपे गए अधिकारियों को देखें",

    citizenRole:
        "नागरिक",

    officialRole:
        "अधिकारी",

    governmentOfficials:
        "सरकारी अधिकारियों का शिकायत प्रबंधन",


    /* =====================================================
       GPS
    ===================================================== */

    gpsNotSupported:
        "इस ब्राउज़र में GPS समर्थित नहीं है।",

    gettingLocation:
        "आपका वर्तमान स्थान प्राप्त किया जा रहा है...",

    unableToGetLocation:
        "आपका स्थान प्राप्त नहीं किया जा सका।",

    locationPermissionDenied:
        "स्थान की अनुमति अस्वीकार की गई है। कृपया स्थान की अनुमति दें।",

    locationUnavailable:
        "आपका स्थान अभी उपलब्ध नहीं है।",

    locationTimeout:
        "स्थान प्राप्त करने का समय समाप्त हो गया। कृपया फिर से प्रयास करें।",

    locationCaptured:
        "स्थान प्राप्त हुआ",

    accuracy:
        "सटीकता",

        mapCouldNotBeLoaded:
    "मानचित्र लोड नहीं हो सका। कृपया पेज को रीफ्रेश करें।",


    /* =====================================================
       CAMERA
    ===================================================== */

    cameraNotSupported:
        "इस ब्राउज़र में कैमरा समर्थित नहीं है।",

    cameraRequiresHttps:
        "वेबसाइट प्रकाशित होने पर कैमरे के लिए HTTPS आवश्यक है।",

    requestingCameraPermission:
        "कैमरा अनुमति मांगी जा रही है...",

    cameraReady:
        "कैमरा तैयार है। शिकायत की फोटो लें।",

    unableToAccessCamera:
        "कैमरा एक्सेस नहीं किया जा सका। कृपया कैमरा अनुमति दें।",

    cameraPermissionDenied:
        "कैमरा अनुमति अस्वीकार की गई है। कृपया कैमरा अनुमति दें।",

    noCameraFound:
        "इस डिवाइस पर कोई कैमरा नहीं मिला।",

    cameraBusy:
        "कैमरा पहले से किसी अन्य ऐप्लिकेशन द्वारा उपयोग किया जा रहा है।",

    cameraUnavailable:
        "कैमरा उपलब्ध नहीं है।",

    cameraNotReady:
        "कैमरा अभी तैयार नहीं है। कृपया कुछ क्षण प्रतीक्षा करें।",

    unableToPrepareCapture:
        "फोटो लेने की तैयारी नहीं हो सकी।",

    failedToCapture:
        "फोटो लेने में विफल।",

    photoCaptured:
        "फोटो सफलतापूर्वक ली गई।",

    cameraClosed:
        "कैमरा बंद कर दिया गया।",

    photoRemoved:
        "फोटो हटा दी गई। कृपया नई फोटो लें या चुनें।",

    photoSelected:
        "फोटो चुनी गई",


    /* =====================================================
       VALIDATION
    ===================================================== */

    enterState:
        "कृपया राज्य दर्ज करें।",

    enterDistrict:
        "कृपया जिला दर्ज करें।",

    enterTaluk:
        "कृपया तालुका दर्ज करें।",

   enterVillageRequired:
    "कृपया गाँव दर्ज करें।",

    selectProblemType:
        "कृपया समस्या का प्रकार चुनें।",

    describeProblem:
        "कृपया समस्या का विवरण दें।",
        confirmProblemLocation:
    "सबमिट करने से पहले कृपया मानचित्र पर समस्या का सटीक स्थान सुनिश्चित करें।",

selectProblemLocation:
    "कृपया मानचित्र पर समस्या का स्थान चुनें।",

invalidSelectedLocation:
    "चयनित स्थान अमान्य है। कृपया स्थान फिर से चुनें।",

invalidLatitude:
    "अमान्य अक्षांश। कृपया स्थान फिर से चुनें।",

invalidLongitude:
    "अमान्य देशांतर। कृपया स्थान फिर से चुनें।",

photoRequired:
    "कृपया समस्या की फोटो कैप्चर करें या अपलोड करें।",

complaintFormValid:
    "शिकायत फॉर्म मान्य है।",

    descriptionMinimum:
        "शिकायत के विवरण में कम से कम 10 अक्षर होने चाहिए।",

    descriptionMaximum:
        "शिकायत का विवरण 2000 अक्षरों से अधिक नहीं हो सकता।",

    captureGPSBeforeSubmit:
        "शिकायत दर्ज करने से पहले कृपया अपना GPS स्थान प्राप्त करें।",

    capturePhotoBeforeSubmit:
        "कृपया शिकायत की फोटो लें या चुनें।",


    /* =====================================================
       SUBMISSION
    ===================================================== */

    submitting:
        "जमा किया जा रहा है...",

    submittingComplaint:
        "शिकायत ई-पंचायत में दर्ज की जा रही है...",

    complaintSubmitted:
        "शिकायत सफलतापूर्वक दर्ज की गई।",

    complaintSubmittedWithId:
        "शिकायत सफलतापूर्वक दर्ज की गई। आपकी शिकायत आईडी है",

    unableToSubmit:
        "शिकायत दर्ज नहीं की जा सकी।",

        confirmProblemLocationButton:
    "समस्या का स्थान सुनिश्चित करें",

locationNotCaptured:
    "स्थान दर्ज नहीं किया गया है।",
          
    loggedOut:
        "आप लॉगआउट हो गए हैं।",

        failedToSubmitComplaint:
    "शिकायत दर्ज करने में विफल।",


    /* =====================================================
       FOOTER
    ===================================================== */

    eGramPanchayat:
        "ई-ग्राम पंचायत",

    footerDescription:
        "पारदर्शी और नागरिक-केंद्रित स्थानीय शासन के लिए डिजिटल सेवाएं।",

    quickLinks:
        "त्वरित लिंक",

    officialPortal:
        "अधिकारी पोर्टल",

    officialsLogin:
        "अधिकारी लॉगिन",

    helpSupport:
        "सहायता और समर्थन",

    footerCopyright:
        "© 2026 ई-ग्राम पंचायत। सर्वाधिकार सुरक्षित।",

    digitalPanchayatInitiative:
        "डिजिटल पंचायत पहल",

        adminVerificationCompleted:
            "व्यवस्थापक सत्यापन पूरा हो गया है।",

        complaintHandledByAssignedOfficer:
            "अब शिकायत निर्धारित अधिकारी द्वारा संभाली जा रही है।",

        enterRemarks:
            "टिप्पणी दर्ज करें...",

        startUpdate:
            "शुरू / अपडेट करें",

        markResolved:
            "समाधान हो गया",

        complaintNotAssignedToYou:
            "यह शिकायत वर्तमान में आपको आवंटित नहीं है।",

        complaintId:
            "शिकायत आईडी",

            complaintIdMissing:
    "शिकायत आईडी उपलब्ध नहीं है।",

    complaintDetailsUnavailable:
    "शिकायत का विवरण उपलब्ध नहीं है।",

    complaintDetails:
    "शिकायत का विवरण",

notAvailable:
    "उपलब्ध नहीं",

        adminVerification:
            "व्यवस्थापक सत्यापन",

        assignedAt:
            "निर्धारित समय",

        deadline:
            "समय सीमा",

        latestRemarks:
            "नवीनतम टिप्पणी",

        evidencePhoto:
            "प्रमाण फोटो",

        viewPhoto:
            "फोटो देखें",

        openGoogleMaps:
            "Google Maps में खोलें",

        viewFullDetails:
            "पूरी जानकारी देखें",

        underReview:
            "समीक्षा के अंतर्गत",

        assigned:
            "निर्धारित",

        inProgress:
            "कार्य प्रगति पर",

        resolved:
            "समाधान किया गया",

        rejected:
            "अस्वीकार किया गया",

        closed:
            "बंद"

},

/* =========================
   KANNADA
========================= */

kn: {

    home: "ಮುಖಪುಟ",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    services: "ಸೇವೆಗಳು",
    complaints: "ದೂರುಗಳು",
    notices: "ಸೂಚನೆಗಳು",
    contact: "ಸಂಪರ್ಕ",
    login: "ಲಾಗಿನ್",
    register: "ನೋಂದಣಿ",
    language: "ಭಾಷೆ",
    complaint: "ದೂರು",

    email: "ಇಮೇಲ್",
    password: "ಪಾಸ್‌ವರ್ಡ್",
    enterEmail: "ಇಮೇಲ್ ನಮೂದಿಸಿ",
    enterPassword: "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
    newCitizen: "ಹೊಸ ನಾಗರಿಕರೇ?",
    createAccount: "ಖಾತೆ ರಚಿಸಿ",

    citizenLogin:
        "ನಾಗರಿಕ ಲಾಗಿನ್",

    citizenLoginDescription:
        "ನಿಮ್ಮ ಇ-ಗ್ರಾಮ ಪಂಚಾಯತ್ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ.",

    citizenRegistration:
        "ನಾಗರಿಕ ನೋಂದಣಿ",

    citizenRegistrationDescription:
        "ನಿಮ್ಮ ಇ-ಗ್ರಾಮ ಪಂಚಾಯತ್ ಖಾತೆಯನ್ನು ರಚಿಸಿ.",

   fullName: "ಪೂರ್ಣ ಹೆಸರು",
phone: "ಫೋನ್",
village: "ಗ್ರಾಮ",
state: "ರಾಜ್ಯ",
district: "ಜಿಲ್ಲೆ",
taluk: "ತಾಲೂಕು",
problem: "ಸಮಸ್ಯೆ",
description: "ವಿವರಣೆ",

enterFullName: "ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
enterPhone: "ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
enterVillage: "ಗ್ರಾಮವನ್ನು ನಮೂದಿಸಿ",
minimumPasswordLength: "ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳು",

    loginEnterCredentials: "ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
    loggingIn: "ಲಾಗಿನ್ ಆಗುತ್ತಿದೆ...",
    loginSuccessful: "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ!",

    registrationFillAllFields: "ದಯವಿಟ್ಟು ನೋಂದಣಿಯ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
    invalidIndianPhone:
    "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10 ಅಂಕಿಗಳ ಭಾರತೀಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
registrationPasswordLength: "ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು.",
creatingCitizenAccount: "ನಿಮ್ಮ ನಾಗರಿಕ ಖಾತೆಯನ್ನು ರಚಿಸಲಾಗುತ್ತಿದೆ...",
registrationSuccessful: "ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ. ಲಾಗಿನ್‌ಗೆ ಕರೆದೊಯ್ಯಲಾಗುತ್ತಿದೆ...",

officialLoginEnterCredentials: "ಅಧಿಕಾರಿ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
selectOfficialRole: "ಅಧಿಕಾರಿ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
invalidOfficialRole: "ಅಮಾನ್ಯ ಅಧಿಕಾರಿ ಪಾತ್ರ.",


    /* =====================================================
       HOME / SERVICES
    ===================================================== */

    welcome:
        "ಇ-ಪಂಚಾಯತ್‌ಗೆ ಸ್ವಾಗತ",

    tagline:
        "ಪ್ರತಿ ನಾಗರಿಕರಿಗಾಗಿ ಡಿಜಿಟಲ್ ಪಂಚಾಯತ್ ಸೇವೆಗಳು",

    servicesLabel:
        "ಪಂಚಾಯತ್ ಸೇವೆಗಳು",
        governmentOfIndia:
    "ಭಾರತ ಸರ್ಕಾರ",

digitalPanchayatInitiative:
    "ಡಿಜಿಟಲ್ ಪಂಚಾಯತ್ ಉಪಕ್ರಮ",

helpline:
    "ಸಹಾಯವಾಣಿ",

brandTitle:
    "ಇ-ಗ್ರಾಮ ಪಂಚಾಯತ್",

brandSubtitle:
    "ಡಿಜಿಟಲ್ ಪಂಚಾಯತ್ ಸೇವೆಗಳು",

    governmentBadge:
    "ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ · ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ",

heroDescription:
    "ಡಿಜಿಟಲ್ ಪಂಚಾಯತ್ ಆಡಳಿತದ ಮೂಲಕ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ನಾಗರಿಕರ ಹತ್ತಿರಕ್ಕೆ ತರುತ್ತೇವೆ.",

heroSecondary:
    "ದೂರುಗಳನ್ನು ಸಲ್ಲಿಸಿ, ನೈಜ ಫೋಟೋ ಸಾಕ್ಷ್ಯವನ್ನು ಸೇರಿಸಿ, ದೂರು ಸ್ಥಳವನ್ನು ದಾಖಲಿಸಿ ಮತ್ತು ಪಂಚಾಯತ್ ಅಧಿಕಾರಿಗಳು ಕೈಗೊಂಡ ಕ್ರಮವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",

registerNow:
    "ಈಗ ನೋಂದಾಯಿಸಿ",

citizenLogin:
    "ನಾಗರಿಕ ಲಾಗಿನ್",

complaintsRegistered:
    "ನೋಂದಾಯಿಸಲಾದ ದೂರುಗಳು",

complaintsResolved:
    "ಪರಿಹರಿಸಲಾದ ದೂರುಗಳು",

digitalAccess:
    "ಡಿಜಿಟಲ್ ಪ್ರವೇಶ",

digitalServices:
    "ಡಿಜಿಟಲ್ ಸೇವೆಗಳು",

accessPanchayatOnline:
    "ಪಂಚಾಯತ್ ಸೇವೆಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪಡೆಯಿರಿ",

smartGovernance:
    "ಸ್ಮಾರ್ಟ್ ಆಡಳಿತ",

transparentLocalAdministration:
    "ಪಾರದರ್ಶಕ ಸ್ಥಳೀಯ ಆಡಳಿತ",

citizenFirst:
    "ನಾಗರಿಕರಿಗೆ ಮೊದಲ ಆದ್ಯತೆ",

servicesCloserCommunity:
    "ನಿಮ್ಮ ಸಮುದಾಯದ ಹತ್ತಿರದ ಸೇವೆಗಳು",

    

    /* =====================================================
          NOTICES
     ===================================================== */
    latestInformation: "ಇತ್ತೀಚಿನ ಮಾಹಿತಿ",
    noticesAnnouncements: "ಸೂಚನೆಗಳು ಮತ್ತು ಪ್ರಕಟಣೆಗಳು",
    importantPanchayatInfo: "ನಿಮ್ಮ ಪಂಚಾಯಿತಿಯಿಂದ ಪ್ರಮುಖ ಮಾಹಿತಿ.",
    aug: "ಆಗಸ್ಟ್",
    general: "ಸಾಮಾನ್ಯ",
    notice: "ಸೂಚನೆ",
    update: "ನವೀಕರಣ",
digitalPanchayatServices:    "ಡಿಜಿಟಲ್ ಪಂಚಾಯತ್ ಸೇವೆಗಳು",
    digitalPanchayatServicesDescription: "ನಾಗರಿಕರು ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ಪಂಚಾಯಿತಿ ಸೇವೆಗಳನ್ನು ಪಡೆಯಬಹುದು.",
    complaintRegistrationNotice: "ದೂರು ನೋಂದಣಿ",
    complaintsEncouraged: "ನಾಗರಿಕರು ಡಿಜಿಟಲ್ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ದೂರುಗಳನ್ನು ಸಲ್ಲಿಸಲು ಪ್ರೋತ್ಸಾಹಿಸಲಾಗುತ್ತದೆ.",
    smartGovernanceInitiative: "ಸ್ಮಾರ್ಟ್ ಆಡಳಿತ ಉಪಕ್ರಮ",
    technologyGovernanceServices: "ಹೊಸ ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ ಆಡಳಿತ ಸೇವೆಗಳನ್ನು ಪರಿಚಯಿಸಲಾಗುತ್ತಿದೆ.",
    
     /* =====================================================
          CONTACT
     ===================================================== */
     contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
panchayatOffice: "ಪಂಚಾಯಿತಿ ಕಚೇರಿ",
contactAssistance: "ಸಹಾಯಕ್ಕಾಗಿ ನಾಗರಿಕರು ಕೆಲಸದ ಸಮಯದಲ್ಲಿ ಪಂಚಾಯಿತಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.",
address: "ವಿಳಾಸ",
panchayatOfficeAddress: "ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಕಚೇರಿ, ನಿಮ್ಮ ಗ್ರಾಮ, ಕರ್ನಾಟಕ, ಭಾರತ",
sendUsMessage: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
name: "ಹೆಸರು",
yourName: "ನಿಮ್ಮ ಹೆಸರು",
yourEmail: "ನಿಮ್ಮ ಇಮೇಲ್",
message: "ಸಂದೇಶ",
writeYourMessage: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಬರೆಯಿರಿ...",
sendMessage: "ಸಂದೇಶ ಕಳುಹಿಸಿ",

    /* =====================================================
       ABOUT E-GRAM PANCHAYAT
    ===================================================== */

    digitalPanchayat:
        "ಡಿಜಿಟಲ್ ಪಂಚಾಯತ್",

    technologyRuralGovernance:
        "ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ ಗ್ರಾಮೀಣ ಆಡಳಿತ",

    aboutEGramPanchayat:
        "ಇ-ಗ್ರಾಮ ಪಂಚಾಯತ್ ಬಗ್ಗೆ",

    connectingCitizens:
        "ನಾಗರಿಕರನ್ನು ಸ್ಥಳೀಯ ಆಡಳಿತದೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವುದು",

    aboutDescription1:
        "ಇ-ಗ್ರಾಮ ಪಂಚಾಯತ್ ಒಂದು ಡಿಜಿಟಲ್ ವೇದಿಕೆಯಾಗಿದ್ದು, ಪಂಚಾಯತ್ ಸೇವೆಗಳನ್ನು ನಾಗರಿಕರಿಗೆ ಸುಲಭ ಮತ್ತು ಹೆಚ್ಚು ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",

    aboutDescription2:
        "ನಾಗರಿಕರು ಫೋಟೋ ಸಾಕ್ಷ್ಯ ಮತ್ತು GPS ಸ್ಥಳದೊಂದಿಗೆ ನೈಜ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ದೂರು ಸಲ್ಲಿಸಬಹುದು. ಅಧಿಕೃತ ಅಧಿಕಾರಿಗಳು ದೂರುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಅವುಗಳ ಸ್ಥಿತಿಯನ್ನು ನವೀಕರಿಸಬಹುದು.",

    transparentComplaintManagement:
        "ಪಾರದರ್ಶಕ ದೂರು ನಿರ್ವಹಣೆ",

    gpsEnabledComplaintLocation:
        "GPS-ಸಕ್ರಿಯ ದೂರು ಸ್ಥಳ",

    photoEvidenceComplaints:
        "ದೂರುಗಳಿಗೆ ಫೋಟೋ ಸಾಕ್ಷ್ಯ",

    roleBasedOfficialDashboard:
        "ಪಾತ್ರ ಆಧಾರಿತ ಅಧಿಕಾರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",


    /* =====================================================
       PANCHAYAT SERVICES
    ===================================================== */

    panchayatServices:
        "ಪಂಚಾಯತ್ ಸೇವೆಗಳು",

    panchayatServicesDescription:
        "ಪ್ರಮುಖ ಡಿಜಿಟಲ್ ಸೇವೆಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಿಂದ ಪಡೆಯಿರಿ.",

    registerComplaint:
        "ದೂರು ನೋಂದಾಯಿಸಿ",

    registerComplaintDesc:
        "ರಸ್ತೆ, ನೀರು, ಸ್ವಚ್ಛತೆ, ಕಸ, ವಿದ್ಯುತ್ ಮತ್ತು ಇತರ ಸ್ಥಳೀಯ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ದೂರು ಸಲ್ಲಿಸಿ.",

    submitComplaintArrow:
        "ದೂರು ಸಲ್ಲಿಸಿ →",

    trackComplaint:
        "ದೂರು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",

    trackComplaintDesc:
        "ನಿಮ್ಮ ನಾಗರಿಕ ಖಾತೆಯಿಂದ ಸಲ್ಲಿಸಿದ ದೂರುಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",

    trackNow:
        "ಈಗ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ →",

    panchayatLocation:
        "ಪಂಚಾಯತ್ ಸ್ಥಳ",

    panchayatLocationDesc:
        "ನಿಮ್ಮ ಪಂಚಾಯತ್ ಕಚೇರಿ ಮತ್ತು ಪ್ರಮುಖ ಸ್ಥಳೀಯ ಮಾಹಿತಿಯನ್ನು ಹುಡುಕಿ.",

    viewContact:
        "ಸಂಪರ್ಕ ವೀಕ್ಷಿಸಿ →",

    noticesService:
        "ಸೂಚನೆಗಳು",

    noticesServiceDesc:
        "ಪಂಚಾಯತ್ ಸೂಚನೆಗಳು, ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿಯೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ.",

    readNotices:
        "ಸೂಚನೆಗಳನ್ನು ಓದಿ →",


    /* =====================================================
       COMPLAINT PROCESS
    ===================================================== */

    smartComplaintSystem:
        "ಸ್ಮಾರ್ಟ್ ದೂರು ವ್ಯವಸ್ಥೆ",

    reportLocalProblem:
        "ಸ್ಥಳೀಯ ಸಮಸ್ಯೆಯ ಕುರಿತು ದೂರು ಸಲ್ಲಿಸಿ",

    reportLocalProblemDescription:
        "ನಿಮ್ಮ ಗ್ರಾಮ ಅಥವಾ ಪಟ್ಟಣದಲ್ಲಿನ ಸಮಸ್ಯೆಯ ಕುರಿತು ದೂರು ಸಲ್ಲಿಸಿ ಮತ್ತು ಅದರ ಪರಿಹಾರದ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",

    registerStep:
        "ನೋಂದಣಿ",

    registerStepDescription:
        "ನಿಮ್ಮ ನಾಗರಿಕ ಖಾತೆಯನ್ನು ರಚಿಸಿ",

    submitStep:
        "ಸಲ್ಲಿಸಿ",

    submitStepDescription:
        "ದೂರಿನ ವಿವರ ಮತ್ತು ಫೋಟೋ ಸೇರಿಸಿ",

    trackStep:
        "ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",

    trackStepDescription:
        "ದೂರಿನ ಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸಿ",

    resolveStep:
        "ಪರಿಹಾರ",

    resolveStepDescription:
        "ಅಧಿಕಾರಿಗಳು ಕ್ರಮ ಕೈಗೊಂಡು ಸ್ಥಿತಿಯನ್ನು ನವೀಕರಿಸುತ್ತಾರೆ",

    haveProblem:
        "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆಯೇ?",

    reportDirectly:
        "ಅದನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಪಂಚಾಯತ್‌ಗೆ ವರದಿ ಮಾಡಿ.",


    /* =====================================================
       COMPLAINT FORM
    ===================================================== */

    complaintPhotoEvidence:
        "📷 ದೂರಿನ ಫೋಟೋ",

    openCamera:
        "📷 ಕ್ಯಾಮೆರಾ ತೆರೆಯಿರಿ",

    capturePhoto:
        "📸 ಫೋಟೋ ತೆಗೆಯಿರಿ",

    closeCamera:
        "✕ ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಿರಿ",

    removePhoto:
        "🗑️ ಫೋಟೋ ತೆಗೆದುಹಾಕಿ",

    photoStatus:
        "ಸಮಸ್ಯೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುವ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.",

    complaintLocation:
        "📍 ದೂರಿನ ಸ್ಥಳ",

    getGPS:
        "GPS ಪಡೆಯಿರಿ",

    locationNotCaptured:
        "ಸ್ಥಳವನ್ನು ಪಡೆಯಲಾಗಿಲ್ಲ.",

    submitComplaint:
        "🚀 ದೂರು ಸಲ್ಲಿಸಿ",

    selectProblem:
        "ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",


    /* =====================================================
       PROBLEM TYPES
    ===================================================== */

    roadDamage:
        "ರಸ್ತೆ ಹಾನಿ",

    waterProblem:
        "ನೀರಿನ ಸಮಸ್ಯೆ",

    governmentPropertyProblem:
        "ಸರ್ಕಾರಿ ಆಸ್ತಿ ಸಮಸ್ಯೆ",

    governmentSchemeProblem:
        "ಸರ್ಕಾರಿ ಯೋಜನೆ ಸಮಸ್ಯೆ",

    drainageProblem:
        "ಚರಂಡಿ ಸಮಸ್ಯೆ",

    streetLightProblem:
        "ಬೀದಿ ದೀಪದ ಸಮಸ್ಯೆ",

    garbageSanitationProblem:
        "ಕಸ / ಸ್ವಚ್ಛತೆ ಸಮಸ್ಯೆ",

    other:
        "ಇತರೆ",


    /* =====================================================
       COMPLAINT DETAILS
    ===================================================== */

    status:
        "ಸ್ಥಿತಿ",

    currentLevel:
        "ಪ್ರಸ್ತುತ ಹಂತ",

    citizen:
        "ನಾಗರಿಕ",

    submitted:
        "ಸಲ್ಲಿಸಲಾಗಿದೆ",

    descriptionLabel:
        "ವಿವರಣೆ",

    gps:
        "GPS",

    submittedOn:
        "ಸಲ್ಲಿಸಲಾಗಿದೆ",

    assignedTo:
        "ನಿಯೋಜಿಸಲಾಗಿದೆ",

    remarks:
        "ಟಿಪ್ಪಣಿ",

    history:
        "ಇತಿಹಾಸ",

    viewComplaint:
        "ದೂರು ವೀಕ್ಷಿಸಿ",

    viewDetails:
        "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    viewComplaintPhoto:
        "ದೂರಿನ ಫೋಟೋ ವೀಕ್ಷಿಸಿ",

    noComplaints:
        "ಯಾವುದೇ ದೂರುಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",

    noComplaintsYet:
        "ನೀವು ಇನ್ನೂ ಯಾವುದೇ ದೂರು ಸಲ್ಲಿಸಿಲ್ಲ.",

        system:
    "ಸಿಸ್ಟಮ್",

officer:
    "ಅಧಿಕಾರಿ",

action:
    "ಕ್ರಿಯೆ",

    trackComplaintMissingId:
    "ದಯವಿಟ್ಟು ನಿಮ್ಮ ದೂರು ID ನಮೂದಿಸಿ.",

trackingComplaint:
    "🔎 ದೂರನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",

complaintNotFound:
    "ದೂರು ಕಂಡುಬಂದಿಲ್ಲ.",

complaintFound:
    "✓ ದೂರು ಕಂಡುಬಂದಿದೆ.",

unableToTrackComplaint:
    "ದೂರನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",

    trackingProgress:
    "ದೂರು ಪ್ರಗತಿ",

noProgressUpdates:
    "ಇನ್ನೂ ಯಾವುದೇ ಪ್ರಗತಿ ನವೀಕರಣಗಳು ಲಭ್ಯವಿಲ್ಲ.",

trackingDetails:
    "ದೂರು ಟ್ರ್ಯಾಕಿಂಗ್",

lastUpdated:
    "ಕೊನೆಯ ನವೀಕರಣ",

level:
    "ಹಂತ",

date:
    "ದಿನಾಂಕ",

progressUpdate:
    "ಪ್ರಗತಿ ನವೀಕರಣ",

    trackComplaintTitle:
    "ದೂರು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",

trackComplaintDescription:
    "ನಿಮ್ಮ ದೂರಿನ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ ಮತ್ತು ಪ್ರಗತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು ದೂರು ID ನಮೂದಿಸಿ.",

enterComplaintIdPlaceholder:
    "ದೂರು ID ನಮೂದಿಸಿ",

trackComplaintButton:
    "🔎 ದೂರು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",


    /* =====================================================
       OFFICIAL DASHBOARD
    ===================================================== */

    officials:
        "ಅಧಿಕಾರಿಗಳು",

    officialsPortal:
        "ಅಧಿಕಾರಿ ಪೋರ್ಟಲ್",

    officialsDashboard:
        "ಅಧಿಕಾರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

    complaintManagement:
        "ದೂರು ನಿರ್ವಹಣೆ",

    officialDashboardDescription:
        "ನಾಗರಿಕರ ದೂರುಗಳು, ಸಾಕ್ಷ್ಯಗಳು ಮತ್ತು ಸ್ಥಳಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",

    officialAccount:
        "ಅಧಿಕಾರಿ ಖಾತೆ",

    role:
        "ಪಾತ್ರ",

    admin:
        "ನಿರ್ವಾಹಕ",

    gkm:
        "GKM",

    pdo:
        "PDO",

    eo:
        "EO",

    ceo:
        "CEO",

    complaintReview:
        "ದೂರು ಪರಿಶೀಲನೆ",

    complaintReviewDescription:
        "ದೂರಿನ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಕ್ರಮದ ಸ್ಥಿತಿಯನ್ನು ನವೀಕರಿಸಿ.",

    refresh:
        "🔄 ರಿಫ್ರೆಶ್",

        officialLoginDescription:
    "ಅಧಿಕೃತ ಪಂಚಾಯತ್ ಅಧಿಕಾರಿಗಳಿಗೆ ಮಾತ್ರ.",

officialEmail:
    "ಅಧಿಕಾರಿ ಇಮೇಲ್",

selectRole:
    "ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",

    /* =====================================================
       COMPLAINT STATUS
    ===================================================== */

   submittedAction:
    "ಸಲ್ಲಿಸಲಾಗಿದೆ",

complaintSubmittedAction:
    "ದೂರು ಸಲ್ಲಿಸಲಾಗಿದೆ",

underReviewAction:
    "ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ",

assignedAction:
    "ಹಂಚಿಕೆ ಮಾಡಲಾಗಿದೆ",

assignedToGkmAction:
    "GKM ಅವರಿಗೆ ಹಂಚಿಕೆ ಮಾಡಲಾಗಿದೆ",

assignedToPdoAction:
    "PDO ಅವರಿಗೆ ಹಂಚಿಕೆ ಮಾಡಲಾಗಿದೆ",

assignedToEoAction:
    "EO ಅವರಿಗೆ ಹಂಚಿಕೆ ಮಾಡಲಾಗಿದೆ",

assignedToCeoAction:
    "CEO ಅವರಿಗೆ ಹಂಚಿಕೆ ಮಾಡಲಾಗಿದೆ",

inProgressAction:
    "ಪ್ರಗತಿಯಲ್ಲಿದೆ",

progressStartedAction:
    "ಪ್ರಗತಿ ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ",

resolvedAction:
    "ಪರಿಹರಿಸಲಾಗಿದೆ",

complaintResolvedAction:
    "ದೂರು ಪರಿಹರಿಸಲಾಗಿದೆ",

rejectedAction:
    "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

complaintRejectedAction:
    "ದೂರು ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

closedAction:
    "ಮುಚ್ಚಲಾಗಿದೆ",

complaintClosedAction:
    "ದೂರು ಮುಚ್ಚಲಾಗಿದೆ",


    /* =====================================================
       OFFICIAL ACTIONS
    ===================================================== */

    approve:
        "ಅನುಮೋದಿಸಿ",

    reject:
        "ತಿರಸ್ಕರಿಸಿ",

    delete:
        "ಅಳಿಸಿ",

    startProgress:
        "ಪ್ರಗತಿ ಪ್ರಾರಂಭಿಸಿ",

    resolve:
        "ಪರಿಹರಿಸಿ",

    logout:
        "ಲಾಗ್‌ಔಟ್",


    /* =====================================================
       CITIZEN DASHBOARD — B4.10
    ===================================================== */

    citizenPortal:
        "ನಾಗರಿಕ ಪೋರ್ಟಲ್",

    myDashboard:
        "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

    dashboardDescription:
        "ದೂರುಗಳನ್ನು ಸಲ್ಲಿಸಿ ಮತ್ತು ಅವುಗಳ ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",

    myProfile:
        "ನನ್ನ ಪ್ರೊಫೈಲ್",

    newComplaint:
        "📢 ಹೊಸ ದೂರು",

    refreshComplaints:
        "🔄 ದೂರುಗಳನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ",

    myComplaints:
        "ನನ್ನ ದೂರುಗಳು",

    viewSubmittedComplaints:
        "ನೀವು ಸಲ್ಲಿಸಿದ ದೂರುಗಳು ಮತ್ತು ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯನ್ನು ವೀಕ್ಷಿಸಿ.",

    unableToLoadComplaints:
    "ನಿಮ್ಮ ದೂರುಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

    noComplaintsCurrentlyAvailable:
    "ಪ್ರಸ್ತುತ ಯಾವುದೇ ದೂರುಗಳು ಲಭ್ಯವಿಲ್ಲ.",

noComplaintsAssignedToYou:
    "ಪ್ರಸ್ತುತ ನಿಮಗೆ ಯಾವುದೇ ದೂರುಗಳನ್ನು ಹಂಚಿಕೆ ಮಾಡಲಾಗಿಲ್ಲ.",

    onlyAdminCanVerify:
    "ಅಡ್ಮಿನ್ ಮಾತ್ರ ದೂರುಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದು.",

invalidVerificationAction:
    "ಅಮಾನ್ಯ ಪರಿಶೀಲನಾ ಕ್ರಿಯೆ.",

enterRejectionReason:
    "ತಿರಸ್ಕರಣೆಯ ಕಾರಣವನ್ನು ನಮೂದಿಸಿ:",

rejectionReasonRequired:
    "ತಿರಸ್ಕರಣೆಯ ಕಾರಣ ಅಗತ್ಯವಾಗಿದೆ.",

approveComplaintConfirmation:
    "ಈ ದೂರನ್ನು ಅನುಮೋದಿಸಿ GKM ಅವರಿಗೆ ಕಳುಹಿಸಬೇಕೇ?",

rejectComplaintConfirmation:
    "ಈ ದೂರನ್ನು ತಿರಸ್ಕರಿಸಬೇಕೇ?",

unableToVerifyComplaint:
    "ದೂರನ್ನು ಪರಿಶೀಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

complaintApprovedAssignedGkm:
    "ದೂರು ಅನುಮೋದಿಸಿ GKM ಅವರಿಗೆ ಹಂಚಿಕೆ ಮಾಡಲಾಗಿದೆ.",

complaintRejectedSuccessfully:
    "ದೂರು ಯಶಸ್ವಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲಾಗಿದೆ.",

unableToUpdateComplaint:
    "ದೂರನ್ನು ನವೀಕರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

noComplaintsTitle:
    "ಯಾವುದೇ ದೂರುಗಳಿಲ್ಲ",

        loadingYourComplaints:
    "ನಿಮ್ಮ ದೂರುಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",

    onlyAdminCanDeleteComplaints:
    "ಅಡ್ಮಿನ್ ಮಾತ್ರ ದೂರುಗಳನ್ನು ಅಳಿಸಬಹುದು.",

deleteComplaintConfirmation:
    "ಈ ದೂರನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?",

unableToDeleteComplaint:
    "ದೂರನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

complaintDeletedSuccessfully:
    "ದೂರು ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ.",

sessionExpired:
    "ನಿಮ್ಮ ಸೆಷನ್ ಅವಧಿ ಮುಗಿದಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಲಾಗಿನ್ ಮಾಡಿ.",

    loadingOfficialComplaints:
    "ದೂರುಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ.",

    notAssigned:
    "ಹಂಚಿಕೆ ಮಾಡಲಾಗಿಲ್ಲ",

assignedOfficer:
    "ಹಂಚಿಕೆ ಮಾಡಲಾದ ಅಧಿಕಾರಿ",
    
notAuthorizedToViewOfficialComplaints:
    "ಅಧಿಕೃತ ದೂರುಗಳನ್ನು ವೀಕ್ಷಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.",

unknownError:
    "ಅಜ್ಞಾತ ದೋಷ.",

    loggedOut:
    "ನೀವು ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ.",

    pleaseFillContactFields:
    "ದಯವಿಟ್ಟು ಸಂಪರ್ಕ ಫಾರ್ಮ್‌ನ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",

contactMessagePrepared:
    "ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ, ಆದರೆ ಪ್ರಸ್ತುತ ಬ್ಯಾಕೆಂಡ್‌ನಲ್ಲಿ ಇನ್ನೂ ಸಂಪರ್ಕ ಸಂದೇಶ API ಲಭ್ಯವಿಲ್ಲ.",
    
    pleaseLoginCitizenAccount:
    "ದಯವಿಟ್ಟು ನಾಗರಿಕ ಖಾತೆಯನ್ನು ಬಳಸಿಕೊಂಡು ಲಾಗಿನ್ ಮಾಡಿ.",

    complaintIdNotAvailable:
    "ದೂರು ಐಡಿ ಲಭ್ಯವಿಲ್ಲ.",

complaintIdCopied:
    "ದೂರು ಐಡಿಯನ್ನು ಕಾಪಿ ಮಾಡಲಾಗಿದೆ.",

    complaintSearchFieldUnavailable:
    "ದೂರು ಹುಡುಕಾಟ ಕ್ಷೇತ್ರ ಲಭ್ಯವಿಲ್ಲ.",

enterComplaintId:
    "ದೂರು ಐಡಿಯನ್ನು ನಮೂದಿಸಿ.",

    noDeadline:
    "ಯಾವುದೇ ಗಡುವು ಇಲ್ಲ",

invalidDeadline:
    "ಅಮಾನ್ಯ ಗಡುವು",

deadlinePassed:
    "ಗಡುವು ಮುಗಿದಿದೆ",

hoursRemaining:
    "{count} ಗಂಟೆಗಳು ಉಳಿದಿವೆ",

daysRemaining:
    "{count} ದಿನಗಳು ಉಳಿದಿವೆ",

    offlineMessage:
    "ನೀವು ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿದ್ದೀರಿ. E-Panchayat ನ ಕೆಲವು ಸೌಲಭ್ಯಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸದಿರಬಹುದು.",

internetRestored:
    "ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ.",

    pleaseGetGpsLocationFirst:
    "ದಯವಿಟ್ಟು ಮೊದಲು ನಿಮ್ಮ GPS ಸ್ಥಳವನ್ನು ಪಡೆಯಿರಿ.",

invalidProblemLocation:
    "ಸಮಸ್ಯೆಯ ಸ್ಥಳ ಅಮಾನ್ಯವಾಗಿದೆ. ದಯವಿಟ್ಟು ಸ್ಥಳವನ್ನು ಮತ್ತೊಮ್ಮೆ ಆಯ್ಕೆಮಾಡಿ.",

problemLocationConfirmed:
    "✓ ಸಮಸ್ಯೆಯ ಸ್ಥಳವನ್ನು ದೃಢೀಕರಿಸಲಾಗಿದೆ: {lat}, {lng}",

confirmedProblemLocation:
    "✓ ದೃಢೀಕರಿಸಿದ ಸಮಸ್ಯೆಯ ಸ್ಥಳ",

locationAttachedToComplaint:
    "ಈ ಸ್ಥಳವನ್ನು ನಿಮ್ಮ ದೂರಿನೊಂದಿಗೆ ಲಗತ್ತಿಸಲಾಗುತ್ತದೆ.",

locationConfirmed:
    "✓ ಸ್ಥಳವನ್ನು ದೃಢೀಕರಿಸಲಾಗಿದೆ",

    /* =====================================================
       DASHBOARD
    ===================================================== */

    citizenDashboard:
        "ನಾಗರಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

    trackComplaintStatus:
        "ದೂರಿನ ಸ್ಥಿತಿ ಮತ್ತು ನಿಯೋಜಿಸಲಾದ ಅಧಿಕಾರಿಗಳನ್ನು ನೋಡಿ",

    citizenRole:
        "ನಾಗರಿಕ",

    officialRole:
        "ಅಧಿಕಾರಿ",

    governmentOfficials:
        "ಸರ್ಕಾರಿ ಅಧಿಕಾರಿಗಳ ದೂರು ನಿರ್ವಹಣೆ",


    /* =====================================================
       GPS
    ===================================================== */

    gpsNotSupported:
        "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ GPS ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.",

    gettingLocation:
        "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳವನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ...",

    unableToGetLocation:
        "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

    locationPermissionDenied:
        "ಸ್ಥಳ ಅನುಮತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಸ್ಥಳ ಅನುಮತಿ ನೀಡಿ.",

    locationUnavailable:
        "ನಿಮ್ಮ ಸ್ಥಳವು ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ.",

    locationTimeout:
        "ಸ್ಥಳ ವಿನಂತಿಯ ಸಮಯ ಮೀರಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",

    locationCaptured:
        "ಸ್ಥಳವನ್ನು ಪಡೆಯಲಾಗಿದೆ",

    accuracy:
        "ನಿಖರತೆ",

        mapCouldNotBeLoaded:
    "ನಕ್ಷೆಯನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಪುಟವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ.",


    /* =====================================================
       CAMERA
    ===================================================== */

    cameraNotSupported:
        "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಕ್ಯಾಮೆರಾ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.",

    cameraRequiresHttps:
        "ವೆಬ್‌ಸೈಟ್ ಪ್ರಕಟಿಸಿದಾಗ ಕ್ಯಾಮೆರಾಗೆ HTTPS ಅಗತ್ಯವಿದೆ.",

    requestingCameraPermission:
        "ಕ್ಯಾಮೆರಾ ಅನುಮತಿಯನ್ನು ಕೇಳಲಾಗುತ್ತಿದೆ...",

    cameraReady:
        "ಕ್ಯಾಮೆರಾ ಸಿದ್ಧವಾಗಿದೆ. ದೂರಿನ ಫೋಟೋ ತೆಗೆಯಿರಿ.",

    unableToAccessCamera:
        "ಕ್ಯಾಮೆರಾವನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ನೀಡಿ.",

    cameraPermissionDenied:
        "ಕ್ಯಾಮೆರಾ ಅನುಮತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ನೀಡಿ.",

    noCameraFound:
        "ಈ ಸಾಧನದಲ್ಲಿ ಯಾವುದೇ ಕ್ಯಾಮೆರಾ ಕಂಡುಬಂದಿಲ್ಲ.",

    cameraBusy:
        "ಕ್ಯಾಮೆರಾವನ್ನು ಈಗಾಗಲೇ ಮತ್ತೊಂದು ಅಪ್ಲಿಕೇಶನ್ ಬಳಸುತ್ತಿದೆ.",

    cameraUnavailable:
        "ಕ್ಯಾಮೆರಾ ಲಭ್ಯವಿಲ್ಲ.",

    cameraNotReady:
        "ಕ್ಯಾಮೆರಾ ಇನ್ನೂ ಸಿದ್ಧವಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕಾಯಿರಿ.",

    unableToPrepareCapture:
        "ಫೋಟೋ ತೆಗೆಯಲು ಸಿದ್ಧಪಡಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

    failedToCapture:
        "ಫೋಟೋ ತೆಗೆಯಲು ವಿಫಲವಾಗಿದೆ.",

    photoCaptured:
        "ಫೋಟೋ ಯಶಸ್ವಿಯಾಗಿ ತೆಗೆಯಲಾಗಿದೆ.",

    cameraClosed:
        "ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಲಾಗಿದೆ.",

    photoRemoved:
        "ಫೋಟೋ ತೆಗೆದುಹಾಕಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಹೊಸ ಫೋಟೋ ತೆಗೆಯಿರಿ ಅಥವಾ ಆಯ್ಕೆಮಾಡಿ.",

    photoSelected:
        "ಫೋಟೋ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ",


    /* =====================================================
       VALIDATION
    ===================================================== */

    enterState:
        "ದಯವಿಟ್ಟು ರಾಜ್ಯವನ್ನು ನಮೂದಿಸಿ.",

    enterDistrict:
        "ದಯವಿಟ್ಟು ಜಿಲ್ಲೆಯನ್ನು ನಮೂದಿಸಿ.",

    enterTaluk:
        "ದಯವಿಟ್ಟು ತಾಲುಕನ್ನು ನಮೂದಿಸಿ.",

   enterVillageRequired:
    "ದಯವಿಟ್ಟು ಗ್ರಾಮವನ್ನು ನಮೂದಿಸಿ.",
    
    selectProblemType:
        "ದಯವಿಟ್ಟು ಸಮಸ್ಯೆಯ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",

    describeProblem:
        "ದಯವಿಟ್ಟು ಸಮಸ್ಯೆಯ ವಿವರವನ್ನು ನಮೂದಿಸಿ.",
        confirmProblemLocation:
    "ಸಲ್ಲಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ನಕ್ಷೆಯಲ್ಲಿ ಸಮಸ್ಯೆಯ ನಿಖರ ಸ್ಥಳವನ್ನು ದೃಢೀಕರಿಸಿ.",

selectProblemLocation:
    "ದಯವಿಟ್ಟು ನಕ್ಷೆಯಲ್ಲಿ ಸಮಸ್ಯೆಯ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",

invalidSelectedLocation:
    "ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳ ಅಮಾನ್ಯವಾಗಿದೆ. ದಯವಿಟ್ಟು ಸ್ಥಳವನ್ನು ಮತ್ತೊಮ್ಮೆ ಆಯ್ಕೆಮಾಡಿ.",

invalidLatitude:
    "ಅಮಾನ್ಯ ಅಕ್ಷಾಂಶ. ದಯವಿಟ್ಟು ಸ್ಥಳವನ್ನು ಮತ್ತೊಮ್ಮೆ ಆಯ್ಕೆಮಾಡಿ.",

invalidLongitude:
    "ಅಮಾನ್ಯ ರೇಖಾಂಶ. ದಯವಿಟ್ಟು ಸ್ಥಳವನ್ನು ಮತ್ತೊಮ್ಮೆ ಆಯ್ಕೆಮಾಡಿ.",

photoRequired:
    "ದಯವಿಟ್ಟು ಸಮಸ್ಯೆಯ ಫೋಟೋವನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ ಅಥವಾ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",

complaintFormValid:
    "ದೂರು ಫಾರ್ಮ್ ಮಾನ್ಯವಾಗಿದೆ.",
        

    descriptionMinimum:
        "ದೂರಿನ ವಿವರದಲ್ಲಿ ಕನಿಷ್ಠ 10 ಅಕ್ಷರಗಳಿರಬೇಕು.",

    descriptionMaximum:
        "ದೂರಿನ ವಿವರವು 2000 ಅಕ್ಷರಗಳನ್ನು ಮೀರಬಾರದು.",

    captureGPSBeforeSubmit:
        "ದೂರು ಸಲ್ಲಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ GPS ಸ್ಥಳವನ್ನು ಪಡೆಯಿರಿ.",

    capturePhotoBeforeSubmit:
        "ದಯವಿಟ್ಟು ದೂರಿನ ಫೋಟೋ ತೆಗೆಯಿರಿ ಅಥವಾ ಆಯ್ಕೆಮಾಡಿ.",


    /* =====================================================
       SUBMISSION
    ===================================================== */

    submitting:
        "ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",

    submittingComplaint:
        "ದೂರನ್ನು ಇ-ಪಂಚಾಯತ್‌ಗೆ ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",

    complaintSubmitted:
        "ದೂರು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ.",

    complaintSubmittedWithId:
        "ದೂರು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ದೂರು ಐಡಿ",

    unableToSubmit:
        "ದೂರು ಸಲ್ಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

        confirmProblemLocationButton:
    "ಸಮಸ್ಯೆಯ ಸ್ಥಳವನ್ನು ದೃಢೀಕರಿಸಿ",

locationNotCaptured:
    "ಸ್ಥಳವನ್ನು ದಾಖಲಿಸಲಾಗಿಲ್ಲ.",

    loggedOut:
        "ನೀವು ಲಾಗ್‌ಔಟ್ ಆಗಿದ್ದೀರಿ.",

        failedToSubmitComplaint:
    "ದೂರನ್ನು ಸಲ್ಲಿಸಲು ವಿಫಲವಾಗಿದೆ.",


    /* =====================================================
       FOOTER
    ===================================================== */

    eGramPanchayat:
        "ಇ-ಗ್ರಾಮ ಪಂಚಾಯತ್",

    footerDescription:
        "ಪಾರದರ್ಶಕ ಮತ್ತು ನಾಗರಿಕ ಕೇಂದ್ರಿತ ಸ್ಥಳೀಯ ಆಡಳಿತಕ್ಕಾಗಿ ಡಿಜಿಟಲ್ ಸೇವೆಗಳು.",

    quickLinks:
        "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",

    officialPortal:
        "ಅಧಿಕಾರಿ ಪೋರ್ಟಲ್",

    officialsLogin:
        "ಅಧಿಕಾರಿ ಲಾಗಿನ್",

    helpSupport:
        "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",

    footerCopyright:
        "© 2026 ಇ-ಗ್ರಾಮ ಪಂಚಾಯತ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",

    digitalPanchayatInitiative:
        "ಡಿಜಿಟಲ್ ಪಂಚಾಯತ್ ಉಪಕ್ರಮ",
               
        adminVerificationCompleted:
            "ನಿರ್ವಾಹಕರ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ.",

        complaintHandledByAssignedOfficer:
            "ಈ ದೂರನ್ನು ಈಗ ನಿಯೋಜಿತ ಅಧಿಕಾರಿ ನಿರ್ವಹಿಸುತ್ತಿದ್ದಾರೆ.",

        enterRemarks:
            "ಟಿಪ್ಪಣಿಗಳನ್ನು ನಮೂದಿಸಿ...",

        startUpdate:
            "ಪ್ರಾರಂಭಿಸಿ / ನವೀಕರಿಸಿ",

        markResolved:
            "ಪರಿಹಾರವಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",

        complaintNotAssignedToYou:
            "ಈ ದೂರು ಪ್ರಸ್ತುತ ನಿಮಗೆ ನಿಯೋಜಿಸಲಾಗಿಲ್ಲ.",

        complaintId:
            "ದೂರು ಐಡಿ",

            complaintIdMissing:
    "ದೂರು ಐಡಿ ಲಭ್ಯವಿಲ್ಲ.",

    complaintDetailsUnavailable:
    "ದೂರು ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ.",

    complaintDetails:
    "ದೂರು ವಿವರಗಳು",

notAvailable:
    "ಲಭ್ಯವಿಲ್ಲ",

        adminVerification:
            "ನಿರ್ವಾಹಕರ ಪರಿಶೀಲನೆ",

        assignedAt:
            "ನಿಯೋಜಿಸಿದ ಸಮಯ",

        deadline:
            "ಗಡುವು",

        latestRemarks:
            "ಇತ್ತೀಚಿನ ಟಿಪ್ಪಣಿ",

        evidencePhoto:
            "ಸಾಕ್ಷ್ಯ ಫೋಟೋ",

        viewPhoto:
            "ಫೋಟೋ ವೀಕ್ಷಿಸಿ",

        openGoogleMaps:
            "Google Maps ನಲ್ಲಿ ತೆರೆಯಿರಿ",

        viewFullDetails:
            "ಸಂಪೂರ್ಣ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

        underReview:
            "ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ",

        assigned:
            "ನಿಯೋಜಿಸಲಾಗಿದೆ",

        inProgress:
            "ಪ್ರಗತಿಯಲ್ಲಿದೆ",

        resolved:
            "ಪರಿಹರಿಸಲಾಗಿದೆ",

        rejected:
            "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

        closed:
            "ಮುಚ್ಚಲಾಗಿದೆ"


        }
};
/* =========================================================
   TRANSLATION COMPLETENESS PATCH
   Missing dynamic translation keys
========================================================= */

Object.assign(translations.en, {

    complaintHistory:
        "Complaint History",

    complaintMarkedAsResolved:
        "Complaint marked as resolved.",

    complaintProgressUpdated:
        "Complaint progress updated successfully.",

    complaintSubmittedSuccessfully:
        "Complaint submitted successfully.",

    invalidComplaintStatus:
        "Invalid complaint status.",

    invalidEmailOrPassword:
        "Invalid email or password.",

    location:
        "Location",

    loginFailed:
        "Login failed.",

    loginSessionExpired:
        "Your login session has expired. Please login again.",

    markComplaintAsResolved:
        "Are you sure you want to mark this complaint as resolved?",

    noHistoryAvailable:
        "No complaint history available.",

    notAuthorizedToAccessOfficialDashboard:
        "You are not authorized to access the official dashboard.",

    notAuthorizedToUpdateComplaintProgress:
        "You are not authorized to update complaint progress.",

    photo:
        "Photo",

    pleaseEnterResolutionRemarks:
        "Please enter resolution remarks.",

    pleaseLoginFirst:
        "Please login first.",

    registrationFailed:
        "Registration failed.",

    unableToLoadComplaintDetails:
        "Unable to load complaint details.",

    unableToSubmitComplaint:
        "Unable to submit complaint.",

    unableToUpdateComplaintProgress:
        "Unable to update complaint progress.",

    updateComplaintAsInProgress:
        "Are you sure you want to update this complaint as in progress?"
});


Object.assign(translations.hi, {

    complaintHistory:
        "शिकायत इतिहास",

    complaintMarkedAsResolved:
        "शिकायत को समाधान के रूप में चिह्नित किया गया है।",

    complaintProgressUpdated:
        "शिकायत की प्रगति सफलतापूर्वक अपडेट की गई।",

    complaintSubmittedSuccessfully:
        "शिकायत सफलतापूर्वक दर्ज की गई।",

    invalidComplaintStatus:
        "अमान्य शिकायत स्थिति।",

    invalidEmailOrPassword:
        "ईमेल या पासवर्ड अमान्य है।",

    location:
        "स्थान",

    loginFailed:
        "लॉगिन विफल रहा।",

    loginSessionExpired:
        "आपका लॉगिन सत्र समाप्त हो गया है। कृपया फिर से लॉगिन करें।",

    markComplaintAsResolved:
        "क्या आप वाकई इस शिकायत को समाधान के रूप में चिह्नित करना चाहते हैं?",

    noHistoryAvailable:
        "शिकायत का कोई इतिहास उपलब्ध नहीं है।",

    notAuthorizedToAccessOfficialDashboard:
        "आपको आधिकारिक डैशबोर्ड तक पहुँचने की अनुमति नहीं है।",

    notAuthorizedToUpdateComplaintProgress:
        "आपको शिकायत की प्रगति अपडेट करने की अनुमति नहीं है।",

    photo:
        "फोटो",

    pleaseEnterResolutionRemarks:
        "कृपया समाधान संबंधी टिप्पणी दर्ज करें।",

    pleaseLoginFirst:
        "कृपया पहले लॉगिन करें।",

    registrationFailed:
        "पंजीकरण विफल रहा।",

    unableToLoadComplaintDetails:
        "शिकायत का विवरण लोड नहीं किया जा सका।",

    unableToSubmitComplaint:
        "शिकायत दर्ज नहीं की जा सकी।",

    unableToUpdateComplaintProgress:
        "शिकायत की प्रगति अपडेट नहीं की जा सकी।",

    updateComplaintAsInProgress:
        "क्या आप वाकई इस शिकायत को प्रगति में अपडेट करना चाहते हैं?"
});


Object.assign(translations.kn, {

    complaintHistory:
        "ದೂರು ಇತಿಹಾಸ",

    complaintMarkedAsResolved:
        "ದೂರನ್ನು ಪರಿಹರಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ.",

    complaintProgressUpdated:
        "ದೂರಿನ ಪ್ರಗತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ.",

    complaintSubmittedSuccessfully:
        "ದೂರು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ.",

    invalidComplaintStatus:
        "ಅಮಾನ್ಯ ದೂರು ಸ್ಥಿತಿ.",

    invalidEmailOrPassword:
        "ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಅಮಾನ್ಯವಾಗಿದೆ.",

    location:
        "ಸ್ಥಳ",

    loginFailed:
        "ಲಾಗಿನ್ ವಿಫಲವಾಗಿದೆ.",

    loginSessionExpired:
        "ನಿಮ್ಮ ಲಾಗಿನ್ ಸೆಷನ್ ಮುಗಿದಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಲಾಗಿನ್ ಮಾಡಿ.",

    markComplaintAsResolved:
        "ಈ ದೂರನ್ನು ಪರಿಹರಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಲು ನೀವು ಖಚಿತವಾಗಿದ್ದೀರಾ?",

    noHistoryAvailable:
        "ಯಾವುದೇ ದೂರು ಇತಿಹಾಸ ಲಭ್ಯವಿಲ್ಲ.",

    notAuthorizedToAccessOfficialDashboard:
        "ಅಧಿಕೃತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.",

    notAuthorizedToUpdateComplaintProgress:
        "ದೂರಿನ ಪ್ರಗತಿಯನ್ನು ನವೀಕರಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.",

    photo:
        "ಫೋಟೋ",

    pleaseEnterResolutionRemarks:
        "ದಯವಿಟ್ಟು ಪರಿಹಾರದ ಕುರಿತು ಟಿಪ್ಪಣಿ ನಮೂದಿಸಿ.",

    pleaseLoginFirst:
        "ದಯವಿಟ್ಟು ಮೊದಲು ಲಾಗಿನ್ ಮಾಡಿ.",

    registrationFailed:
        "ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ.",

    unableToLoadComplaintDetails:
        "ದೂರಿನ ವಿವರಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

    unableToSubmitComplaint:
        "ದೂರನ್ನು ಸಲ್ಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

    unableToUpdateComplaintProgress:
        "ದೂರಿನ ಪ್ರಗತಿಯನ್ನು ನವೀಕರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",

    updateComplaintAsInProgress:
        "ಈ ದೂರನ್ನು ಪ್ರಗತಿಯಲ್ಲಿದೆ ಎಂದು ನವೀಕರಿಸಲು ನೀವು ಖಚಿತವಾಗಿದ್ದೀರಾ?"
});

/* =========================================================
   LOGIN ERROR TRANSLATIONS
========================================================= */

Object.assign(translations.en, {

    backendUrlNotConfigured:
        "Backend URL is not configured.",

    authenticationTokenMissing:
        "Login succeeded but no authentication token was returned.",

    userInformationMissing:
        "Login succeeded but user information was not returned.",

    citizenLoginOnly:
        "This login is for citizens. Please use Officials Login for government staff.",

    authenticatingOfficial:
        "Authenticating official...",

    officialLoginFailed:
        "Official login failed.",

    officialUserInformationMissing:
        "User information was not returned by the server.",

    officialRoleMissing:
        "This account does not have an official role.",

    roleMismatch:
        "Role mismatch. Your account role is {role}."
});


Object.assign(translations.hi, {

    backendUrlNotConfigured:
        "बैकएंड URL कॉन्फ़िगर नहीं किया गया है।",

    authenticationTokenMissing:
        "लॉगिन सफल हुआ, लेकिन प्रमाणीकरण टोकन प्राप्त नहीं हुआ।",

    userInformationMissing:
        "लॉगिन सफल हुआ, लेकिन उपयोगकर्ता की जानकारी प्राप्त नहीं हुई।",

    citizenLoginOnly:
        "यह लॉगिन केवल नागरिकों के लिए है। सरकारी कर्मचारियों के लिए अधिकारी लॉगिन का उपयोग करें।",

    authenticatingOfficial:
        "अधिकारी का प्रमाणीकरण किया जा रहा है...",

    officialLoginFailed:
        "अधिकारी लॉगिन विफल रहा।",

    officialUserInformationMissing:
        "सर्वर से उपयोगकर्ता की जानकारी प्राप्त नहीं हुई।",

    officialRoleMissing:
        "इस खाते में कोई आधिकारिक भूमिका नहीं है।",

    roleMismatch:
        "भूमिका मेल नहीं खाती। आपके खाते की भूमिका {role} है।"
});


Object.assign(translations.kn, {

    backendUrlNotConfigured:
        "ಬ್ಯಾಕೆಂಡ್ URL ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗಿಲ್ಲ.",

    authenticationTokenMissing:
        "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ, ಆದರೆ ದೃಢೀಕರಣ ಟೋಕನ್ ದೊರೆಯಲಿಲ್ಲ.",

    userInformationMissing:
        "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ, ಆದರೆ ಬಳಕೆದಾರರ ಮಾಹಿತಿ ದೊರೆಯಲಿಲ್ಲ.",

    citizenLoginOnly:
        "ಈ ಲಾಗಿನ್ ನಾಗರಿಕರಿಗೆ ಮಾತ್ರ. ಸರ್ಕಾರಿ ಸಿಬ್ಬಂದಿಗಾಗಿ ಅಧಿಕಾರಿ ಲಾಗಿನ್ ಬಳಸಿ.",

    authenticatingOfficial:
        "ಅಧಿಕಾರಿಯನ್ನು ದೃಢೀಕರಿಸಲಾಗುತ್ತಿದೆ...",

    officialLoginFailed:
        "ಅಧಿಕಾರಿ ಲಾಗಿನ್ ವಿಫಲವಾಗಿದೆ.",

    officialUserInformationMissing:
        "ಸರ್ವರ್‌ನಿಂದ ಬಳಕೆದಾರರ ಮಾಹಿತಿ ದೊರೆಯಲಿಲ್ಲ.",

    officialRoleMissing:
        "ಈ ಖಾತೆಗೆ ಅಧಿಕೃತ ಪಾತ್ರವಿಲ್ಲ.",

    roleMismatch:
        "ಪಾತ್ರ ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ. ನಿಮ್ಮ ಖಾತೆಯ ಪಾತ್ರ {role} ಆಗಿದೆ."
});
/* =========================================================
   PHOTO UPLOAD TRANSLATIONS
========================================================= */

Object.assign(translations.en, {

    invalidPhotoFormat:
        "Only JPG, JPEG and PNG images are allowed.",

    photoTooLarge:
        "Photo must be smaller than 5 MB.",

    photoSelected:
        "Photo selected: {filename}"
});


Object.assign(translations.hi, {

    invalidPhotoFormat:
        "केवल JPG, JPEG और PNG छवियों की अनुमति है।",

    photoTooLarge:
        "फोटो 5 MB से छोटी होनी चाहिए।",

    photoSelected:
        "फोटो चुनी गई: {filename}"
});


Object.assign(translations.kn, {

    invalidPhotoFormat:
        "JPG, JPEG ಮತ್ತು PNG ಚಿತ್ರಗಳಿಗೆ ಮಾತ್ರ ಅನುಮತಿ ಇದೆ.",

    photoTooLarge:
        "ಫೋಟೋ 5 MB ಗಿಂತ ಚಿಕ್ಕದಾಗಿರಬೇಕು.",

    photoSelected:
        "ಫೋಟೋ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ: {filename}"
});


/* =========================================================
   BASIC TRANSLATE FUNCTION
========================================================= */

function translate(key) {

    const language = getSelectedLanguage();

    return (
        translations[language]?.[key] ||
        translations.en?.[key] ||
        key
    );
}


/* =========================================================
   PROBLEM TYPE TRANSLATION
========================================================= */

const problemTranslationKeys = {
    "Road Damage": "roadDamage",
    "Electricity Problem": "electricityProblem",
    "Water Problem": "waterProblem",
    "Government Property Problem": "governmentPropertyProblem",
    "Government Scheme Problem": "governmentSchemeProblem",
    "Drainage Problem": "drainageProblem",
    "Street Light Problem": "streetLightProblem",
    "Garbage / Sanitation Problem": "garbageSanitationProblem",
    "Other": "other"
};


function translateProblem(problem) {

    if (!problem) {
        return problem;
    }

    const key = problemTranslationKeys[problem];

    return key ? translate(key) : problem;
}


/* =========================================================
   STATUS TRANSLATION
========================================================= */

const statusTranslationKeys = {
    "Submitted": "submittedStatus",
    "Under Review": "underReviewStatus",
    "Assigned": "assignedStatus",
    "In Progress": "inProgressStatus",
    "Resolved": "resolvedStatus",
    "Rejected": "rejectedStatus",
    "Closed": "closedStatus"
};


function translateStatus(status) {

    if (!status) {
        return status;
    }

    const key = statusTranslationKeys[status];

    return key ? translate(key) : status;
}


/* =========================================================
   ROLE TRANSLATION
========================================================= */

const roleTranslationKeys = {
    admin: "admin",
    gkm: "gkm",
    pdo: "pdo",
    eo: "eo",
    ceo: "ceo",
    citizen: "citizen"
};


function translateRole(role) {

    if (!role) {
        return role;
    }

    const key = roleTranslationKeys[String(role).toLowerCase()];

    return key ? translate(key) : role;
}

/* =========================================================
   HISTORY ACTION TRANSLATION
========================================================= */

const historyActionTranslationKeys = {

    "Submitted": "submittedAction",
    "Complaint Submitted": "complaintSubmittedAction",

    "Under Review": "underReviewAction",
    "Assigned": "assignedAction",
    "Assigned to GKM": "assignedToGkmAction",
    "Assigned to PDO": "assignedToPdoAction",
    "Assigned to EO": "assignedToEoAction",
    "Assigned to CEO": "assignedToCeoAction",

    "In Progress": "inProgressAction",
    "Progress Started": "progressStartedAction",

    "Resolved": "resolvedAction",
    "Complaint Resolved": "complaintResolvedAction",

    "Rejected": "rejectedAction",
    "Complaint Rejected": "complaintRejectedAction",

    "Closed": "closedAction",
    "Complaint Closed": "complaintClosedAction"
};


function translateHistoryAction(
    action
) {

    if (!action) {
        return translate("action");
    }

    const actionText =
        String(action).trim();

    const key =
        historyActionTranslationKeys[
            actionText
        ];

    if (key) {
        return translate(key);
    }

    return actionText;
}


/* =========================================================
   AUTOMATIC UI TEXT TRANSLATION
   This handles dynamically-created dashboard content too.
========================================================= */

const dynamicTextKeys = {

    "Home": "home",
    "About": "about",
    "Services": "services",
    "Complaints": "complaints",
    "Notices": "notices",
    "Contact": "contact",
    "Login": "login",
    "Register": "register",

    "Citizen Dashboard": "citizenDashboard",
    "Track complaint status and see assigned roles":
        "trackComplaintStatus",
    "Citizen": "citizen",

    "Officials": "officials",
    "Officials Portal": "officialsPortal",
    "Officials Dashboard": "officialsDashboard",
    "Government officials complaint management":
        "governmentOfficials",
    "Complaint Management and Governance":
        "complaintManagement",

    "Status": "status",
    "Current Level": "currentLevel",
    "Description": "descriptionLabel",
    "Remarks": "remarks",
    "History": "history",
    "Assigned To": "assignedTo",

    "View Complaint": "viewComplaint",
    "View Details": "viewDetails",
    "View Complaint Photo": "viewComplaintPhoto",

    "Approve": "approve",
    "Reject": "reject",
    "Delete": "delete",
    "Start Progress": "startProgress",
    "Resolve": "resolve",
    "Logout": "logout",

    "No complaints found.": "noComplaints",
    "You have not submitted any complaints yet.": "noComplaintsYet"
};


/* =========================================================
   TRANSLATE A SINGLE UI TEXT VALUE
========================================================= */

function translateUiText(text) {

    if (!text || typeof text !== "string") {
        return text;
    }

    const original = text;
    const trimmed = text.trim();

    /* Exact dynamic text */

    if (dynamicTextKeys[trimmed]) {

        const translated = translate(dynamicTextKeys[trimmed]);

        return original.replace(trimmed, translated);
    }


    /* Problem type */

    if (problemTranslationKeys[trimmed]) {
        return original.replace(
            trimmed,
            translateProblem(trimmed)
        );
    }


    /* Status */

    if (statusTranslationKeys[trimmed]) {
        return original.replace(
            trimmed,
            translateStatus(trimmed)
        );
    }


    /* Role */

    if (roleTranslationKeys[trimmed.toLowerCase()]) {
        return original.replace(
            trimmed,
            translateRole(trimmed)
        );
    }


    /* Dynamic complaint information */

    let match;


    match = trimmed.match(/^Complaint ID:\s*(.+)$/i);

    if (match) {
        return original.replace(
            trimmed,
            `${translate("complaints")} ID: ${match[1]}`
        );
    }


    match = trimmed.match(/^Status:\s*(.+)$/i);

    if (match) {
        return original.replace(
            trimmed,
            `${translate("status")}: ${translateStatus(match[1])}`
        );
    }


    match = trimmed.match(/^Current Level:\s*(.+)$/i);

    if (match) {
        return original.replace(
            trimmed,
            `${translate("currentLevel")}: ${translateRole(match[1])}`
        );
    }


       match = trimmed.match(/^Photo selected:\s*(.+)$/i);

    if (match) {
        return original.replace(
            trimmed,
            `${translate("photoSelected")}: ${match[1]}`
        );
    }


    /* GPS accuracy message */

    match = trimmed.match(
        /^Location captured:\s*(.+?)\s*\(Accuracy:\s*(.+?)\)$/i
    );

    if (match) {
        return original.replace(
            trimmed,
            `${translate("locationCaptured")}: ${match[1]} (${translate("accuracy")}: ${match[2]})`
        );
    }


    /* GPS messages */

    if (trimmed === "Getting your current location...") {
        return original.replace(
            trimmed,
            translate("gettingLocation")
        );
    }

    if (trimmed === "GPS is not supported by this browser.") {
        return original.replace(
            trimmed,
            translate("gpsNotSupported")
        );
    }

    if (trimmed === "Unable to get your location.") {
        return original.replace(
            trimmed,
            translate("unableToGetLocation")
        );
    }

    if (
        trimmed ===
        "Location permission was denied. Please allow location access."
    ) {
        return original.replace(
            trimmed,
            translate("locationPermissionDenied")
        );
    }

    if (trimmed === "Your location is currently unavailable.") {
        return original.replace(
            trimmed,
            translate("locationUnavailable")
        );
    }

    if (
        trimmed ===
        "Location request timed out. Please try again."
    ) {
        return original.replace(
            trimmed,
            translate("locationTimeout")
        );
    }


    /* Camera messages */

    const cameraMessages = {
        "Camera is not supported by this browser.":
            "cameraNotSupported",

        "Camera requires HTTPS when the website is deployed.":
            "cameraRequiresHttps",

        "Requesting camera permission...":
            "requestingCameraPermission",

        "Camera ready. Capture the complaint photo.":
            "cameraReady",

        "Unable to access camera. Please allow camera permission.":
            "unableToAccessCamera",

        "Camera permission denied. Please allow camera access.":
            "cameraPermissionDenied",

        "No camera was found on this device.":
            "noCameraFound",

        "Camera is already being used by another application.":
            "cameraBusy",

        "Camera is not available.":
            "cameraUnavailable",

        "Camera is not ready yet. Please wait a moment.":
            "cameraNotReady",

        "Unable to prepare photo capture.":
            "unableToPrepareCapture",

        "Failed to capture photo.":
            "failedToCapture",

        "Photo captured successfully.":
            "photoCaptured",

        "Camera closed.":
            "cameraClosed"
    };

    if (cameraMessages[trimmed]) {
        return original.replace(
            trimmed,
            translate(cameraMessages[trimmed])
        );
    }


    /* Photo selected */

    match = trimmed.match(/^Photo selected:\s*(.+)$/i);

    if (match) {
        return original.replace(
            trimmed,
            `${translate("photoSelected")}: ${match[1]}`
        );
    }


    /* Complaint submitted with ID */

    match = trimmed.match(
        /^Complaint submitted successfully\. Your Complaint ID is\s*(.+)$/i
    );

    if (match) {
        return original.replace(
            trimmed,
            `${translate("complaintSubmittedWithId")} ${match[1]}`
        );
    }


    return original;
}


/* =========================================================
   TRANSLATE DATA-I18N ELEMENTS
========================================================= */

function applyDataI18nTranslations() {

    const language =
        getSelectedLanguage();


    /* =====================================================
       NORMAL TEXT TRANSLATION
    ===================================================== */

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.getAttribute("data-i18n");

            if (!key) {
                return;
            }

            if (translations[language]?.[key]) {

                element.textContent =
                    translate(key);

            }

        });


    /* =====================================================
       PLACEHOLDER TRANSLATION
    ===================================================== */

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (!key) {
                return;
            }

            if (translations[language]?.[key]) {

                element.placeholder =
                    translate(key);

            }

        });

}

/* =========================================================
   TRANSLATE DYNAMIC TEXT NODES
========================================================= */

function applyDynamicTextTranslations() {

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    const textNodes = [];

    let node;

    while ((node = walker.nextNode())) {

        const parent = node.parentElement;

        if (!parent) {
            continue;
        }

        const tagName = parent.tagName?.toLowerCase();

        if (
            tagName === "script" ||
            tagName === "style" ||
            tagName === "textarea"
        ) {
            continue;
        }

        textNodes.push(node);
    }


    textNodes.forEach((textNode) => {

        const translated = translateUiText(textNode.nodeValue);

        if (
            translated &&
            translated !== textNode.nodeValue
        ) {
            textNode.nodeValue = translated;
        }
    });
}


/* =========================================================
   MAIN TRANSLATION FUNCTION
========================================================= */

function applyTranslations() {

    applyDataI18nTranslations();

    applyDynamicTextTranslations();

    const languageSelect =
        document.getElementById("languageSelect");

    if (languageSelect) {
        languageSelect.value = getSelectedLanguage();
    }
}


/* =========================================================
   AUTO-TRANSLATE NEW DASHBOARD CONTENT
========================================================= */

let languageMutationObserver = null;


function startLanguageObserver() {

    if (languageMutationObserver) {
        return;
    }

    if (!document.body) {
        return;
    }

    languageMutationObserver = new MutationObserver(() => {

        applyDataI18nTranslations();
        applyDynamicTextTranslations();

    });


    languageMutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
}


/* =========================================================
   LANGUAGE SELECTOR INITIALIZATION
========================================================= */

function initializeLanguageSelector() {

    const languageSelect =
        document.getElementById("languageSelect");

    if (!languageSelect) {
        return;
    }

    languageSelect.value = getSelectedLanguage();


    languageSelect.addEventListener("change", function () {

        setSelectedLanguage(this.value);

        applyTranslations();

    });
}


/* =========================================================
   START GLOBAL LANGUAGE SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeLanguageSelector();

    applyTranslations();
    loadPublicComplaintStats();

});
/* =========================================================
   1. BACKEND CONFIGURATION
========================================================= */

const LOCAL_BACKEND_URL = "http://localhost:5000";

/*
 * IMPORTANT:
 * Keep this for local testing.
 *
 * Later, after deploying your backend to Render,
 * replace the URL below with your real Render URL.
 */
const DEPLOYED_BACKEND_URL =
    "https://e-panchayat.onrender.com";


const BACKEND_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? LOCAL_BACKEND_URL
        : DEPLOYED_BACKEND_URL;


/* =========================================================
   2. AUTHENTICATION STORAGE
========================================================= */

const TOKEN_KEY = "ePanchayatToken";
const USER_KEY = "ePanchayatUser";

let currentUser = null;
let currentOfficialRole = null;


/* =========================================================
   3. COMPLAINT LOCATION
========================================================= */

let currentLat = null;
let currentLng = null;
let currentAccuracy = null;

/*
 * Step 1: Interactive complaint location
 * These variables store the location selected
 * by the citizen on the map.
 */

let complaintMap = null;
let complaintMarker = null;
let complaintAccuracyCircle = null;

let selectedComplaintLat = null;
let selectedComplaintLng = null;

let locationConfirmed = false;

/* =========================================================
   4. CAMERA
========================================================= */

let cameraStream = null;
let capturedPhotoBlob = null;


/* =========================================================
   5. DOM HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================================================
   6. SHOW / HIDE HELPERS
========================================================= */

function showElement(element) {
    if (element) {
        element.classList.remove("hidden");
    }
}


function hideElement(element) {
    if (element) {
        element.classList.add("hidden");
    }
}


/* =========================================================
   7. MESSAGE HELPER
========================================================= */

function setMessage(element, message, type = "info") {

    if (!element) {
        return;
    }

    element.textContent = message;

    element.className =
        "form-status " + type;
}


/* =========================================================
   8. HTML SECURITY HELPER
========================================================= */

function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   9. DATE FORMATTER
========================================================= */

function formatDate(value) {

    if (!value) {
        return "N/A";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "N/A";
    }

    return date.toLocaleString();
}


/* =========================================================
   10. ROLE HELPERS
========================================================= */

function normalizeRole(role) {

    return String(role || "")
        .trim()
        .toLowerCase();
}


function isOfficialRole(role) {

    return [
        "admin",
        "gkm",
        "pdo",
        "eo",
        "ceo"
    ].includes(
        normalizeRole(role)
    );
}


/* =========================================================
   11. BACKEND URL CHECK
========================================================= */

function validateBackendURL() {

    if (!BACKEND_URL) {
        return false;
    }

    if (
        BACKEND_URL.includes(
            "YOUR-RENDER-BACKEND"
        )
    ) {
        console.warn(
            "Render backend URL is not configured yet."
        );

        return false;
    }

    return true;
}


/* =========================================================
   12. TOKEN
========================================================= */

function getToken() {

    return localStorage.getItem(
        TOKEN_KEY
    );
}


/* =========================================================
   13. AUTH HEADERS
========================================================= */

function getAuthHeaders() {

    const token = getToken();

    if (!token) {
        return {};
    }

    return {
        Authorization:
            `Bearer ${token}`
    };
}


/* =========================================================
   14. CLEAR SESSION
========================================================= */

function clearSession() {

    localStorage.removeItem(
        TOKEN_KEY
    );

    localStorage.removeItem(
        USER_KEY
    );

    currentUser = null;
    currentOfficialRole = null;
}

/* =========================================================
   14A. CROSS-TAB LOGOUT SYNCHRONIZATION
========================================================= */

window.addEventListener(
    "storage",
    function (event) {

        /*
         * Another browser tab removed the authentication token.
         * Synchronize this tab with that logout.
         */

        if (
            event.key === TOKEN_KEY &&
            event.oldValue &&
            event.newValue === null
        ) {

            stopCamera();

            closeAllModals();

            showView(
                "view-home"
            );


            if ($("complaintsList")) {

                $("complaintsList").innerHTML =
                    "";
            }


            if ($("officialComplaintsList")) {

                $("officialComplaintsList").innerHTML =
                    "";
            }


            currentUser = null;
            currentOfficialRole = null;


            showNotice(
                translate("loggedOut")
            );
        }
    }
);


/* =========================================================
   15. READ BACKEND RESPONSE
========================================================= */

async function readBackendResponse(response) {

    const text =
        await response.text();

    let data = null;

    if (text) {

        try {

            data = JSON.parse(text);

        } catch (error) {

            console.error(
                "Backend returned non-JSON response:",
                text
            );
        }
    }

    return {
        ok: response.ok,
        status: response.status,
        text,
        data
    };
}


/* =========================================================
   16. BACKEND ERROR MESSAGE
========================================================= */

function backendErrorMessage(
    result,
    fallbackMessage
) {

    if (result?.data?.message) {

        return result.data.message;
    }

    if (result?.data?.error) {

        return result.data.error;
    }

    if (result?.text) {

        return result.text;
    }

    return (
        fallbackMessage ||
        "Something went wrong."
    );
}


/* =========================================================
   17. AUTHENTICATED FETCH
========================================================= */

async function authenticatedFetch(
    url,
    options = {}
) {

    const token = getToken();

    if (!token) {

        throw new Error(
            translate("pleaseLoginFirst")
        );
    }

    const headers = {
        ...(options.headers || {}),
        Authorization:
            `Bearer ${token}`
    };

    return fetch(
        url,
        {
            ...options,
            headers
        }
    );
}


/* =========================================================
   5. MODAL HELPERS
   ========================================================= */

function openModal(id) {
    const modal = $(id);

    if (!modal) {
        console.warn(`Modal not found: ${id}`);
        return;
    }

    modal.classList.add("show");
    modal.classList.remove("hidden");

    document.body.classList.add("modal-open");
}

function closeModal(id) {
    const modal = $(id);

    if (!modal) {
        return;
    }

    modal.classList.remove("show");
    modal.classList.add("hidden");

    document.body.classList.remove("modal-open");

    if (id === "complaintModal") {
        stopCamera();
    }
}
function closeAllModals() {

    [
        "loginModal",
        "registerModal",
        "complaintModal",
        "officialLoginModal",
        "complaintTrackingModal"
    ].forEach(closeModal);

}

/* =========================================================
   PUBLIC COMPLAINT STATISTICS
========================================================= */

async function loadPublicComplaintStats() {

    const complaintsElement =
        $("statComplaints");

    const resolvedElement =
        $("statResolved");


    if (
        !complaintsElement ||
        !resolvedElement
    ) {
        return;
    }


    try {

        const response =
            await fetch(
                `${BACKEND_URL}/api/complaints/stats`,
                {
                    method: "GET"
                }
            );


        const result =
            await readBackendResponse(
                response
            );


        if (!result.ok) {

            throw new Error(
                "Unable to load complaint statistics."
            );
        }


        const data =
            result.data || {};


        complaintsElement.textContent =
            String(
                Number(
                    data.registered
                ) || 0
            );


        resolvedElement.textContent =
            String(
                Number(
                    data.resolved
                ) || 0
            );

    }
    catch (error) {

        console.error(
            "Public complaint statistics error:",
            error
        );


        /*
         * Keep 0 displayed if the backend
         * statistics request fails.
         */

        complaintsElement.textContent =
            "0";

        resolvedElement.textContent =
            "0";
    }
}

/* =========================================================
   19. OPEN LOGIN
========================================================= */

function openLoginModal() {

    closeAllModals();

    openModal(
        "loginModal"
    );
}


/* =========================================================
   20. OPEN REGISTER
========================================================= */

function openRegisterModal() {

    closeAllModals();

    openModal(
        "registerModal"
    );
}


/* =========================================================
   21. OPEN COMPLAINT
========================================================= */

function openComplaintModal() {

    const token = getToken();

    if (
        !token ||
        normalizeRole(
            currentUser?.role
        ) !== "citizen"
    ) {

        openLoginModal();

        setTimeout(() => {

            setMessage(
                $("login-message"),
                "Please login as a citizen before submitting a complaint.",
                "info"
            );

        }, 50);

        return;
    }

    closeAllModals();

    openModal(
        "complaintModal"
    );

    resetComplaintLocationMessage();
}


/* =========================================================
   22. OPEN OFFICIAL LOGIN
========================================================= */

function openOfficialLoginModal() {

    closeAllModals();

    openModal(
        "officialLoginModal"
    );
}

/* =========================================================
   PUBLIC COMPLAINT TRACKING MODAL
========================================================= */

function openComplaintTrackingModal() {

    closeAllModals();

    const input =
        $("tracking-complaint-id");

    const message =
        $("complaint-tracking-message");

    const result =
        $("complaintTrackingResult");


    if (input) {
        input.value = "";
    }


    if (message) {
        message.textContent = "";
        message.className = "form-status";
    }


    if (result) {
        result.innerHTML = "";
        result.classList.add("hidden");
    }


    openModal(
        "complaintTrackingModal"
    );


    setTimeout(
        function () {

            if (input) {
                input.focus();
            }

        },
        100
    );
}

async function trackComplaintById(event) {

    event.preventDefault();

    const input =
        $("tracking-complaint-id");

    const message =
        $("complaint-tracking-message");

    const result =
        $("complaintTrackingResult");

    if (!input) {
        return;
    }

    const complaintId =
        input.value.trim();

    if (!complaintId) {

        setMessage(
            message,
            translate("trackComplaintMissingId"),
            "error"
        );

        return;
    }

    if (result) {
        result.innerHTML = "";
        result.classList.add("hidden");
    }

    setMessage(
        message,
        translate("trackingComplaint"),
        "info"
    );

    try {

        const response =
            await fetch(
                `${BACKEND_URL}/api/complaints/track/${encodeURIComponent(complaintId)}`
            );

        const data =
            await response.json();

        if (!response.ok || !data.success) {

            setMessage(
                message,
                data.message ||
                    translate("complaintNotFound"),
                "error"
            );

            return;
        }

        const complaint =
            data.complaint || {};

        setMessage(
            message,
            translate("complaintFound"),
            "success"
        );

        const progress =
            Array.isArray(complaint.progress)
                ? complaint.progress
                : Array.isArray(complaint.history)
                    ? complaint.history
                    : [];

        let progressHtml = "";

        if (progress.length > 0) {

            progressHtml = `

                <div class="complaint-tracking-history">

                    <h3>
                        ${escapeHtml(
                            translate("trackingProgress")
                        )}
                    </h3>

                    <div class="complaint-progress-list">

                        ${progress.map(
                            function (item) {

                                if (
                                    item === null ||
                                    typeof item !== "object"
                                ) {

                                    return `
                                        <div class="complaint-progress-item">
                                            ${escapeHtml(
                                                String(item)
                                            )}
                                        </div>
                                    `;
                                }

                                const status =
                                    item.status ||
                                    item.action ||
                                    item.stage ||
                                    translate("progressUpdate");

                                const remarks =
                                    item.remarks ||
                                    item.remark ||
                                    item.message ||
                                    item.description ||
                                    "";

                                const level =
                                    item.level ||
                                    item.currentLevel ||
                                    item.assignedLevel ||
                                    "";

                                const updatedAt =
                                    item.updatedAt ||
                                    item.createdAt ||
                                    item.date ||
                                    "";

                                return `

                                    <div
                                        class="complaint-progress-item"
                                    >

                                        <div>
                                            <strong>
                                                ${escapeHtml(
                                                    String(status)
                                                )}
                                            </strong>
                                        </div>

                                        ${
                                            level
                                                ? `
                                                    <div>
                                                        <strong>
                                                            ${escapeHtml(
                                                                translate("level")
                                                            )}:
                                                        </strong>
                                                        ${escapeHtml(
                                                            String(level)
                                                        )}
                                                    </div>
                                                  `
                                                : ""
                                        }

                                        ${
                                            remarks
                                                ? `
                                                    <div>
                                                        <strong>
                                                            ${escapeHtml(
                                                                translate("remarks")
                                                            )}:
                                                        </strong>
                                                        ${escapeHtml(
                                                            String(remarks)
                                                        )}
                                                    </div>
                                                  `
                                                : ""
                                        }

                                        ${
                                            updatedAt
                                                ? `
                                                    <div>
                                                        <strong>
                                                            ${escapeHtml(
                                                                translate("date")
                                                            )}:
                                                        </strong>
                                                        ${escapeHtml(
                                                            new Date(
                                                                updatedAt
                                                            ).toLocaleString()
                                                        )}
                                                    </div>
                                                  `
                                                : ""
                                        }

                                    </div>

                                `;
                            }
                        ).join("")}

                    </div>

                </div>

            `;

        }
        else {

            progressHtml = `

                <div class="complaint-tracking-history">

                    <h3>
                        ${escapeHtml(
                            translate("trackingProgress")
                        )}
                    </h3>

                    <p>
                        ${escapeHtml(
                            translate("noProgressUpdates")
                        )}
                    </p>

                </div>

            `;
        }

        if (result) {

            result.innerHTML = `

                <div class="complaint-tracking-result">

                    <h3>
                        ${escapeHtml(
                            translate("trackingDetails")
                        )}
                    </h3>

                    <p>
                        <strong>
                            ${escapeHtml(
                                translate("complaintId")
                            )}:
                        </strong>
                        ${escapeHtml(
                            complaint.complaintId ||
                            complaintId
                        )}
                    </p>

                    <p>
                        <strong>
                            ${escapeHtml(
                                translate("problem")
                            )}:
                        </strong>
                        ${escapeHtml(
                            complaint.problem ||
                            translate("notAvailable")
                        )}
                    </p>

                    ${
                        complaint.description
                            ? `
                                <p>
                                    <strong>
                                        ${escapeHtml(
                                            translate("descriptionLabel")
                                        )}:
                                    </strong>
                                    ${escapeHtml(
                                        complaint.description
                                    )}
                                </p>
                              `
                            : ""
                    }

                    <p>
                        <strong>
                            ${escapeHtml(
                                translate("status")
                            )}:
                        </strong>
                        ${escapeHtml(
                            complaint.status ||
                            translate("notAvailable")
                        )}
                    </p>

                    <p>
                        <strong>
                            ${escapeHtml(
                                translate("currentLevel")
                            )}:
                        </strong>
                        ${escapeHtml(
                            complaint.currentLevel ||
                            translate("notAssigned")
                        )}
                    </p>

                    <p>
                        <strong>
                            ${escapeHtml(
                                translate("submitted")
                            )}:
                        </strong>
                        ${
                            complaint.createdAt
                                ? escapeHtml(
                                    new Date(
                                        complaint.createdAt
                                    ).toLocaleString()
                                )
                                : escapeHtml(
                                    translate("notAvailable")
                                )
                        }
                    </p>

                    <p>
                        <strong>
                            ${escapeHtml(
                                translate("lastUpdated")
                            )}:
                        </strong>
                        ${
                            complaint.updatedAt
                                ? escapeHtml(
                                    new Date(
                                        complaint.updatedAt
                                    ).toLocaleString()
                                )
                                : escapeHtml(
                                    translate("notAvailable")
                                )
                        }
                    </p>

                    ${progressHtml}

                </div>

            `;

            result.classList.remove("hidden");
        }

    }
    catch (error) {

        console.error(
            "PUBLIC COMPLAINT TRACKING ERROR:",
            error
        );

        setMessage(
            message,
            translate("unableToTrackComplaint"),
            "error"
        );
    }
}
/* =========================================================
   23. SWITCH LOGIN → REGISTER
========================================================= */

function switchToRegister() {

    closeModal(
        "loginModal"
    );

    openRegisterModal();
}


/* =========================================================
   24. NOTICE / TOAST
========================================================= */

function showNotice(message) {

    const notice = $("notice");

    const toast = $("toast");

    const target =
        notice || toast;

    if (!target) {

        alert(message);

        return;
    }

    target.textContent =
        message;

    target.classList.add(
        "show"
    );

    setTimeout(() => {

        target.classList.remove(
            "show"
        );

    }, 3000);
}


/* =========================================================
   25. VIEW SWITCHING
========================================================= */

function showView(id) {

    const views = [
        "view-home",
        "view-register",
        "view-login",
        "view-complaint",
        "view-dashboard",
        "view-admin-login",
        "view-official-dashboard"
    ];

    views.forEach(
        viewId => {

            const element =
                $(viewId);

            if (element) {

                element.classList.add(
                    "hidden"
                );
            }
        }
    );

    const target = $(id);

    if (target) {

        target.classList.remove(
            "hidden"
        );
    }
}


/* =========================================================
   26. DASHBOARD TAB
========================================================= */

function setTab(tab) {

    const citizenTab =
        $("tab-citizen");

    const adminTab =
        $("tab-admin");


    if (tab === "citizen") {

        citizenTab?.classList.add(
            "active"
        );

        adminTab?.classList.remove(
            "active"
        );

        if ($("rightPanelTitle")) {

            $("rightPanelTitle")
                .textContent =
                "Citizen Dashboard";
        }

        if ($("rightPanelCaption")) {

            $("rightPanelCaption")
                .textContent =
                "Track complaint status and see assigned roles";
        }

        if ($("rightPanelBadge")) {

            $("rightPanelBadge")
                .textContent =
                "Citizen";
        }

        hideElement(
            $("view-official-dashboard")
        );

        return;
    }


    adminTab?.classList.add(
        "active"
    );

    citizenTab?.classList.remove(
        "active"
    );


    if ($("rightPanelTitle")) {

        $("rightPanelTitle")
            .textContent =
            "Officials Portal";
    }

    if ($("rightPanelCaption")) {

        $("rightPanelCaption")
            .textContent =
            "Government officials complaint management";
    }

    if ($("rightPanelBadge")) {

        $("rightPanelBadge")
            .textContent =
            "Officials";
    }


    if (currentOfficialRole) {

        hideElement(
            $("view-admin-login")
        );

        showElement(
            $("view-official-dashboard")
        );

    } else {

        showElement(
            $("view-admin-login")
        );

        hideElement(
            $("view-official-dashboard")
        );
    }
}


/* =========================================================
   27. MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        $("mobileMenuBtn");

    const nav =
        $("mainNav");

    if (!button || !nav) {
        return;
    }

    button.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "open"
            );
        }
    );


    nav.querySelectorAll(
        "a, button"
    ).forEach(
        element => {

            element.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );
                }
            );
        }
    );
}


/* =========================================================
   8. CITIZEN REGISTRATION
   Backend:
   POST /api/auth/register
========================================================= */

async function registerCitizen(event) {

    event?.preventDefault();


    const button =
        $("registerBtn");

    const message =
        $("reg-message");


    const name =
        $("reg-name")
            ?.value
            .trim() || "";


    const email =
        $("reg-email")
            ?.value
            .trim() || "";

const phone =
    $("reg-phone")
        ?.value
        .replace(/\D/g, "")
        .slice(0, 10) || "";


    const village =
        $("reg-village")
            ?.value
            .trim() || "";


    const password =
        $("reg-password")
            ?.value || "";


    /*
     * Optional location fields.
     * They are sent only when available.
     */
    const state =
        $("reg-state")
            ?.value
            .trim() || "";


    const district =
        $("reg-district")
            ?.value
            .trim() || "";


    const taluk =
        $("reg-taluk")
            ?.value
            .trim() || "";


    /* =====================================================
       FRONTEND VALIDATION
    ===================================================== */

    if (
        !name ||
        !email ||
        !phone ||
        !village ||
        !password
    ) {

        setMessage(
            message,
            translate(
                "registrationFillAllFields"
            ),
            "error"
        );

        return;
    }

    if (
    !/^[6-9][0-9]{9}$/.test(phone)
) {

    setMessage(
        message,
        translate(
            "invalidIndianPhone"
        ),
        "error"
    );

    return;
}

    if (
        password.length < 6
    ) {

        setMessage(
            message,
            translate(
                "registrationPasswordLength"
            ),
            "error"
        );

        return;
    }


    if (
        !validateBackendURL()
    ) {

        setMessage(
            message,
            translate(
                "backendUrlNotConfigured"
            ),
            "error"
        );

        return;
    }


    try {

        if (button) {

            button.disabled =
                true;
        }


        setMessage(
            message,
            translate(
                "creatingCitizenAccount"
            ),
            "info"
        );


        /* =================================================
           REGISTRATION REQUEST
        ================================================= */

        const body = {

            name,

            email,

            password,

            phone,

            village
        };


        if (state) {

            body.state =
                state;
        }


        if (district) {

            body.district =
                district;
        }


        if (taluk) {

            body.taluk =
                taluk;
        }


        const response =
            await fetch(
                `${BACKEND_URL}/api/auth/register`,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            body
                        )
                }
            );


        const result =
            await readBackendResponse(
                response
            );


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate(
                        "registrationFailed"
                    )
                )
            );
        }


        /* =================================================
           REGISTRATION SUCCESS

           IMPORTANT:
           The backend returns a JWT token,
           but we intentionally do NOT save it here.

           The citizen must login normally after
           registration.
        ================================================= */

        setMessage(
            message,
            translate(
                "registrationSuccessful"
            ),
            "success"
        );


        /*
         * Clear registration form.
         */
        $("registerForm")
            ?.reset();


        /*
         * Open citizen login after
         * successful registration.
         */
        setTimeout(
            () => {

                closeModal(
                    "registerModal"
                );


                openLoginModal();

            },
            900
        );


    }
    catch (error) {

        console.error(
            "Registration error:",
            error
        );


        setMessage(
            message,

            error?.message ||
            translate(
                "registrationFailed"
            ),

            "error"
        );

    }
    finally {

        if (button) {

            button.disabled =
                false;
        }
    }
}

/* =========================================================
   29. END OF PART 1
========================================================= */


/* =========================================================
   30. CITIZEN LOGIN
   POST /api/auth/login
========================================================= */

async function loginCitizen(event) {

    event?.preventDefault();

    const button =
        $("loginBtn");

    const message =
        $("login-message");


    const email =
        $("login-email")
            ?.value
            .trim() || "";


    const password =
        $("login-password")
            ?.value || "";


    if (!email || !password) {

        setMessage(
            message,
            translate("loginEnterCredentials"),
            "error"
        );

        return;
    }


    if (!validateBackendURL()) {

        setMessage(
            message,
            translate("backendUrlNotConfigured"),
            "error"
        );

        return;
    }


    try {

        if (button) {
            button.disabled = true;
        }


        setMessage(
            message,
            translate("loggingIn"),
            "info"
        );


        const response =
            await fetch(
                `${BACKEND_URL}/api/auth/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            email,
                            password
                        })
                }
            );


        const result =
            await readBackendResponse(
                response
            );


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate("loginFailed")
                )
            );
        }


        const data =
            result.data || {};


        if (!data.token) {

            throw new Error(
                translate(
                    "authenticationTokenMissing"
                )
            );
        }


        const user =
            data.user || null;


        if (!user) {

            throw new Error(
                translate(
                    "userInformationMissing"
                )
            );
        }


        const role =
            normalizeRole(
                user.role
            );


        /*
         * Citizen login must only allow
         * citizen accounts.
         */
        if (role !== "citizen") {

            throw new Error(
                translate(
                    "citizenLoginOnly"
                )
            );
        }


        localStorage.setItem(
            TOKEN_KEY,
            data.token
        );


        localStorage.setItem(
            USER_KEY,
            JSON.stringify(user)
        );


        currentUser =
            user;


        currentOfficialRole =
            null;


        updateCitizenProfile(
            user
        );


        setMessage(
            message,
            translate("loginSuccessful"),
            "success"
        );


        $("loginForm")
            ?.reset();


        setTimeout(
            async () => {

                closeModal(
                    "loginModal"
                );


                showView(
                    "view-dashboard"
                );


                setTab(
                    "citizen"
                );


                await loadDashboard();

            },
            500
        );


    }
    catch (error) {

        console.error(
            "Citizen login error:",
            error
        );


        setMessage(
            message,
            error.message ||
                translate(
                    "invalidEmailOrPassword"
                ),
            "error"
        );

    }
    finally {

        if (button) {

            button.disabled = false;
        }
    }
}
/* =========================================================
   31. OFFICIAL LOGIN
   POST /api/auth/login
========================================================= */

async function loginOfficial(event) {

    event?.preventDefault();

    const button =
        $("adminLoginBtn");

    const message =
        $("admin-message");


    const email =
        $("admin-email")
            ?.value
            .trim() || "";


    const password =
        $("admin-password")
            ?.value || "";


    const selectedRole =
        normalizeRole(
            $("admin-role")
                ?.value || ""
        );


    const validRoles = [
        "admin",
        "gkm",
        "pdo",
        "eo",
        "ceo"
    ];


    if (!email || !password) {

        setMessage(
            message,
            translate(
                "officialLoginEnterCredentials"
            ),
            "error"
        );

        return;
    }


    if (
        !validRoles.includes(
            selectedRole
        )
    ) {

        setMessage(
            message,
            translate(
                "selectOfficialRole"
            ),
            "error"
        );

        return;
    }


    if (!validateBackendURL()) {

        setMessage(
            message,
            translate(
                "backendUrlNotConfigured"
            ),
            "error"
        );

        return;
    }


    try {

        if (button) {
            button.disabled = true;
        }


        setMessage(
            message,
            translate(
                "authenticatingOfficial"
            ),
            "info"
        );


        const response =
            await fetch(
                `${BACKEND_URL}/api/auth/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            email,
                            password
                        })
                }
            );


        const result =
            await readBackendResponse(
                response
            );


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate(
                        "officialLoginFailed"
                    )
                )
            );
        }


        const data =
            result.data || {};


        if (!data.token) {

            throw new Error(
                translate(
                    "authenticationTokenMissing"
                )
            );
        }


        const user =
            data.user || null;


        if (!user) {

            throw new Error(
                translate(
                    "officialUserInformationMissing"
                )
            );
        }


        const actualRole =
            normalizeRole(
                user.role
            );


        if (
            !validRoles.includes(
                actualRole
            )
        ) {

            throw new Error(
                translate(
                    "officialRoleMissing"
                )
            );
        }


        /*
         * IMPORTANT:
         * Never trust the role selected in the frontend.
         * The database role returned by the backend
         * is authoritative.
         */
        if (
            actualRole !== selectedRole
        ) {

            throw new Error(
                translate(
                    "roleMismatch"
                ).replace(
                    "{role}",
                    actualRole.toUpperCase()
                )
            );
        }


        localStorage.setItem(
            TOKEN_KEY,
            data.token
        );


        localStorage.setItem(
            USER_KEY,
            JSON.stringify(user)
        );


        currentUser =
            user;


        currentOfficialRole =
            actualRole;


        updateOfficialProfile(
            user
        );


        setMessage(
            message,
            translate(
                "loginSuccessful"
            ),
            "success"
        );


        $("officialLoginForm")
            ?.reset();


        closeModal(
            "officialLoginModal"
        );


        showView(
            "view-official-dashboard"
        );


        setTab(
            "official"
        );


        await loadOfficialDashboard();


    }
    catch (error) {

        console.error(
            "Official login error:",
            error
        );


        clearSession();


        setMessage(
            message,
            error.message ||
                translate(
                    "officialLoginFailed"
                ),
            "error"
        );

    }
    finally {

        if (button) {

            button.disabled = false;
        }
    }
}

/* =========================================================
   32. CITIZEN PROFILE
========================================================= */

function updateCitizenProfile(
    user
) {

    if (!user) {
        return;
    }


    if ($("citizenName")) {

        $("citizenName")
            .textContent =
            user.name || "-";
    }


    if ($("citizenEmail")) {

        $("citizenEmail")
            .textContent =
            user.email || "-";
    }


    if ($("citizenPhone")) {

        $("citizenPhone")
            .textContent =
            user.phone || "-";
    }


    if ($("citizenVillage")) {

        $("citizenVillage")
            .textContent =
            user.village || "-";
    }
}


/* =========================================================
   33. OFFICIAL PROFILE
========================================================= */

function updateOfficialProfile(
    user
) {

    if (!user) {
        return;
    }


    const role =
        normalizeRole(
            user.role
        );


    if ($("officialRoleText")) {

        $("officialRoleText")
            .textContent =
            role.toUpperCase();
    }


    if ($("officialEmailText")) {

        $("officialEmailText")
            .textContent =
            user.email || "-";
    }


    if ($("rightPanelBadge")) {

        $("rightPanelBadge")
            .textContent =
            role.toUpperCase();
    }


    if ($("rightPanelTitle")) {

        $("rightPanelTitle")
            .textContent =
            translate("officialsDashboard");
    }


    if ($("rightPanelCaption")) {

        $("rightPanelCaption")
            .textContent =
            translate("governmentOfficials");
    }
}
/* =========================================================
   34. RESET GPS MESSAGE
========================================================= */

function resetComplaintLocationMessage() {

    if ($("locationInfo")) {

        $("locationInfo")
            .textContent =
            translate("locationNotCaptured");

        $("locationInfo")
            .className = "";
    }
}
/* =========================================================
   35. CAPTURE GPS LOCATION
========================================================= */

function captureGPSLocation() {

    const info =
        $("locationInfo");

    const getLocationButton =
        $("getLocationBtn");

    const confirmButton =
        $("confirmLocationBtn");

    const mapElement =
        $("complaintMap");


    /* -----------------------------------------------------
       CHECK GEOLOCATION SUPPORT
    ----------------------------------------------------- */

    if (!navigator.geolocation) {

        setMessage(
            info,
            translate("gpsNotSupported"),
            "error"
        );

        return;
    }


    /* -----------------------------------------------------
       RESET LOCATION STATE
    ----------------------------------------------------- */

    locationConfirmed =
        false;

    selectedComplaintLat =
        null;

    selectedComplaintLng =
        null;

    currentLat =
        null;

    currentLng =
        null;

    currentAccuracy =
        null;


    /* -----------------------------------------------------
       RESET CONFIRM BUTTON
    ----------------------------------------------------- */

    if (confirmButton) {

        confirmButton.style.display =
            "none";

        confirmButton.disabled =
            false;

        confirmButton.textContent =
            translate(
                "confirmProblemLocationButton"
            );
    }


    /* -----------------------------------------------------
       REMOVE PREVIOUS MAP
    ----------------------------------------------------- */

    if (complaintMap) {

        try {

            complaintMap.remove();

        }
        catch (error) {

            console.warn(
                "Previous complaint map could not be removed:",
                error
            );
        }

        complaintMap =
            null;
    }


    complaintMarker =
        null;

    complaintAccuracyCircle =
        null;


    /* -----------------------------------------------------
       RESET MAP CONTAINER
    ----------------------------------------------------- */

    if (mapElement) {

        mapElement.innerHTML =
            "";

        mapElement.style.display =
            "none";
    }


    if ($("locationHint")) {

        $("locationHint")
            .style.display =
            "none";
    }


    /* -----------------------------------------------------
       SHOW GPS LOADING
    ----------------------------------------------------- */

    setMessage(
        info,
        translate("gettingLocation"),
        "info"
    );


    if (getLocationButton) {

        getLocationButton.disabled =
            true;

        getLocationButton.textContent =
            translate("gettingGps");
    }


    /* -----------------------------------------------------
       GET CURRENT GPS POSITION
    ----------------------------------------------------- */

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            const accuracy =
                position.coords.accuracy;


            /* -------------------------------------------------
               SAVE GPS DATA
            ------------------------------------------------- */

            currentLat =
                latitude;

            currentLng =
                longitude;

            currentAccuracy =
                accuracy;


            selectedComplaintLat =
                latitude;

            selectedComplaintLng =
                longitude;


            /* -------------------------------------------------
               SHOW GPS RESULT
            ------------------------------------------------- */

            const accuracyText =
                Number.isFinite(accuracy)
                    ? `${Math.round(accuracy)} m`
                    : "-";


            setMessage(
                info,

                `${translate("locationCaptured")}: ` +
                `${latitude.toFixed(6)}, ` +
                `${longitude.toFixed(6)} ` +
                `(${translate("accuracy")}: ${accuracyText})`,

                "success"
            );


            /* -------------------------------------------------
               SHOW MAP CONTAINER
            ------------------------------------------------- */

            if (mapElement) {

                mapElement.style.display =
                    "block";

                mapElement.style.width =
                    "100%";

                mapElement.style.height =
                    "300px";

                mapElement.style.minHeight =
                    "300px";
            }


            if ($("locationHint")) {

                $("locationHint")
                    .style.display =
                    "block";
            }


            /*
             * IMPORTANT:
             *
             * Wait until the browser has rendered
             * the visible map container before
             * creating the Leaflet map.
             */

            requestAnimationFrame(
                function () {

                    requestAnimationFrame(
                        function () {

                            if (!mapElement) {

                                console.error(
                                    "Complaint map element not found after GPS."
                                );

                                return;
                            }


                            /*
                             * Initialize Leaflet.
                             */

                            initializeComplaintMap(
                                latitude,
                                longitude
                            );


                            /*
                             * Force Leaflet to calculate
                             * the actual visible dimensions.
                             */

                            if (complaintMap) {

                                complaintMap.invalidateSize(
                                    true
                                );


                                complaintMap.setView(
                                    [
                                        latitude,
                                        longitude
                                    ],
                                    18
                                );
                            }


                            /*
                             * GPS accuracy circle.
                             */

                            if (
                                Number.isFinite(
                                    accuracy
                                ) &&
                                accuracy > 0 &&
                                accuracy <= 1000
                            ) {

                                showComplaintGPSAccuracy(
                                    latitude,
                                    longitude,
                                    accuracy
                                );
                            }


                            /*
                             * Show confirmation button.
                             */

                            if (confirmButton) {

                                confirmButton.style.display =
                                    "block";

                                confirmButton.disabled =
                                    false;

                                confirmButton.textContent =
                                    translate(
                                        "confirmProblemLocationButton"
                                    );
                            }

                        }
                    );

                }
            );


            /* -------------------------------------------------
               GPS BUTTON FINISHED
            ------------------------------------------------- */

            if (getLocationButton) {

                getLocationButton.disabled =
                    false;

                getLocationButton.textContent =
                    translate("getGps");
            }

        },


        /* -----------------------------------------------------
           GPS ERROR
        ----------------------------------------------------- */

        function (error) {

            console.error(
                "GPS error:",
                error
            );


            let errorMessage =
                translate(
                    "unableToGetLocation"
                );


            if (
                error.code ===
                error.PERMISSION_DENIED
            ) {

                errorMessage =
                    translate(
                        "locationPermissionDenied"
                    );

            }

            else if (
                error.code ===
                error.POSITION_UNAVAILABLE
            ) {

                errorMessage =
                    translate(
                        "locationUnavailable"
                    );

            }

            else if (
                error.code ===
                error.TIMEOUT
            ) {

                errorMessage =
                    translate(
                        "locationTimeout"
                    );
            }


            /* -------------------------------------------------
               CLEAR LOCATION STATE
            ------------------------------------------------- */

            currentLat =
                null;

            currentLng =
                null;

            currentAccuracy =
                null;

            selectedComplaintLat =
                null;

            selectedComplaintLng =
                null;

            locationConfirmed =
                false;


            /* -------------------------------------------------
               HIDE MAP
            ------------------------------------------------- */

            if (mapElement) {

                mapElement.style.display =
                    "none";
            }


            if ($("locationHint")) {

                $("locationHint")
                    .style.display =
                    "none";
            }


            /* -------------------------------------------------
               HIDE CONFIRMATION
            ------------------------------------------------- */

            if (confirmButton) {

                confirmButton.style.display =
                    "none";

                confirmButton.disabled =
                    false;

                confirmButton.textContent =
                    translate(
                        "confirmProblemLocationButton"
                    );
            }


            /* -------------------------------------------------
               SHOW ERROR
            ------------------------------------------------- */

            setMessage(
                info,
                errorMessage,
                "error"
            );


            /* -------------------------------------------------
               RESTORE GPS BUTTON
            ------------------------------------------------- */

            if (getLocationButton) {

                getLocationButton.disabled =
                    false;

                getLocationButton.textContent =
                    translate("getGps");
            }

        },


        /* -----------------------------------------------------
           GEOLOCATION OPTIONS
        ----------------------------------------------------- */

        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }

    );
}
/* =========================================================
   35A. INITIALIZE COMPLAINT MAP
========================================================= */

function initializeComplaintMap(
    latitude,
    longitude
) {

    const mapElement =
        $("complaintMap");


    const confirmButton =
        $("confirmLocationBtn");


    /*
     * -----------------------------------------------------
     * CHECK MAP ELEMENT
     * -----------------------------------------------------
     */

    if (!mapElement) {

        console.error(
            "complaintMap element not found."
        );

        return;
    }


    /*
     * -----------------------------------------------------
     * CHECK LEAFLET
     * -----------------------------------------------------
     */

    if (
        typeof window.L ===
        "undefined"
    ) {

        console.error(
            "Leaflet library is not loaded."
        );

        setMessage(
            $("locationInfo"),
            translate(
                "mapCouldNotBeLoaded"
            ),
            "error"
        );

        return;
    }


    /*
     * -----------------------------------------------------
     * SHOW MAP CONTAINER
     * -----------------------------------------------------
     */

    mapElement.style.display =
        "block";

    mapElement.style.width =
        "100%";

    mapElement.style.height =
        "300px";


    /*
     * -----------------------------------------------------
     * REMOVE PREVIOUS MAP
     * -----------------------------------------------------
     */

    if (complaintMap) {

        try {

            complaintMap.remove();

        }
        catch (error) {

            console.warn(
                "Previous complaint map could not be removed:",
                error
            );
        }

        complaintMap =
            null;
    }


    complaintMarker =
        null;


    complaintAccuracyCircle =
        null;


    /*
     * Leaflet can retain internal information
     * on the container after a map is removed.
     *
     * Clear the container before creating
     * the new map.
     */

    mapElement.innerHTML =
        "";


    /*
     * -----------------------------------------------------
     * CREATE STREET MAP
     * -----------------------------------------------------
     */

    const streetLayer =
        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                maxZoom: 19,

                attribution:
                    "&copy; OpenStreetMap contributors"
            }
        );


    /*
     * -----------------------------------------------------
     * CREATE SATELLITE MAP
     * -----------------------------------------------------
     */

    const satelliteLayer =
        L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
                maxZoom: 19,

                attribution:
                    "Tiles &copy; Esri"
            }
        );


    /*
     * -----------------------------------------------------
     * CREATE LEAFLET MAP
     * -----------------------------------------------------
     */

    try {

        complaintMap =
            L.map(
                mapElement,
                {
                    zoomControl: true,

                    layers: [
                        streetLayer
                    ]
                }
            );

    }
    catch (error) {

        console.error(
            "Complaint map creation failed:",
            error
        );

        complaintMap =
            null;

        setMessage(
            $("locationInfo"),
            translate(
                "mapCouldNotBeLoaded"
            ),
            "error"
        );

        return;
    }


    /*
     * -----------------------------------------------------
     * SET INITIAL POSITION
     * -----------------------------------------------------
     */

    complaintMap.setView(
        [
            latitude,
            longitude
        ],
        18
    );


    /*
     * -----------------------------------------------------
     * MAP TYPE SWITCHER
     * -----------------------------------------------------
     */

    const baseMaps = {

        "🗺️ Street Map":
            streetLayer,

        "🛰️ Satellite":
            satelliteLayer

    };


    L.control
        .layers(
            baseMaps,
            null,
            {
                collapsed: false
            }
        )
        .addTo(
            complaintMap
        );


    /*
     * -----------------------------------------------------
     * CREATE DRAGGABLE MARKER
     * -----------------------------------------------------
 */

    complaintMarker =
        L.marker(
            [
                latitude,
                longitude
            ],
            {
                draggable: true
            }
        ).addTo(
            complaintMap
        );


    /*
     * -----------------------------------------------------
     * INITIAL LOCATION
     * -----------------------------------------------------
 */

    selectedComplaintLat =
        latitude;

    selectedComplaintLng =
        longitude;

    currentLat =
        latitude;

    currentLng =
        longitude;

    locationConfirmed =
        false;


    /*
     * -----------------------------------------------------
     * INITIAL POPUP
     * -----------------------------------------------------
 */

    complaintMarker
        .bindPopup(
            "<strong>📍 Complaint Location</strong><br>" +
            "Drag the marker or click the map to select the exact problem location."
        )
        .openPopup();


    /*
     * -----------------------------------------------------
     * SHOW CONFIRM BUTTON
     * -----------------------------------------------------
     */

    if (confirmButton) {

        confirmButton.style.display =
            "block";

        confirmButton.disabled =
            false;

        confirmButton.textContent =
            translate(
                "confirmProblemLocationButton"
            );
    }


    /*
     * -----------------------------------------------------
     * MARKER DRAG
     * -----------------------------------------------------
 */

    complaintMarker.on(
        "dragend",
        function () {

            const markerPosition =
                complaintMarker.getLatLng();


            selectedComplaintLat =
                markerPosition.lat;

            selectedComplaintLng =
                markerPosition.lng;


            currentLat =
                selectedComplaintLat;

            currentLng =
                selectedComplaintLng;


            locationConfirmed =
                false;


            updateSelectedLocationInfo();


            if (confirmButton) {

                confirmButton.style.display =
                    "block";

                confirmButton.disabled =
                    false;

                confirmButton.textContent =
                    translate(
                        "confirmProblemLocationButton"
                    );
            }


            complaintMarker
                .bindPopup(
                    "<strong>📍 Selected Problem Location</strong><br>" +
                    "Click Confirm Problem Location to save this position."
                )
                .openPopup();

        }
    );


    /*
     * -----------------------------------------------------
     * MAP CLICK
     * -----------------------------------------------------
 */

    complaintMap.on(
        "click",
        function (event) {

            const clickedLatitude =
                event.latlng.lat;

            const clickedLongitude =
                event.latlng.lng;


            /*
             * Move marker to clicked position.
             */

            if (complaintMarker) {

                complaintMarker.setLatLng(
                    [
                        clickedLatitude,
                        clickedLongitude
                    ]
                );
            }


            /*
             * Save selected coordinates.
             */

            selectedComplaintLat =
                clickedLatitude;

            selectedComplaintLng =
                clickedLongitude;


            currentLat =
                selectedComplaintLat;

            currentLng =
                selectedComplaintLng;


            /*
             * New selection must be confirmed.
             */

            locationConfirmed =
                false;


            /*
             * Update displayed coordinates.
             */

            updateSelectedLocationInfo();


            /*
             * Show confirmation button.
             */

            if (confirmButton) {

                confirmButton.style.display =
                    "block";

                confirmButton.disabled =
                    false;

                confirmButton.textContent =
                    translate(
                        "confirmProblemLocationButton"
                    );
            }


            /*
             * Update popup.
             */

            if (complaintMarker) {

                complaintMarker
                    .bindPopup(
                        "<strong>📍 Selected Problem Location</strong><br>" +
                        "Click Confirm Problem Location to save this position."
                    )
                    .openPopup();
            }

        }
    );


    /*
     * -----------------------------------------------------
     * FIX LEAFLET SIZE
     * -----------------------------------------------------
 */

    setTimeout(
        function () {

            if (complaintMap) {

                complaintMap.invalidateSize(
                    true
                );

                complaintMap.setView(
                    [
                        selectedComplaintLat,
                        selectedComplaintLng
                    ],
                    18
                );
            }

        },
        300
    );


    /*
     * -----------------------------------------------------
     * UPDATE LOCATION TEXT
     * -----------------------------------------------------
 */

    updateSelectedLocationInfo();

}
/* =========================================================
   35B. UPDATE SELECTED LOCATION INFORMATION
========================================================= */

function updateSelectedLocationInfo() {

    const info =
        $("locationInfo");


    /*
     * Make sure the location information
     * element exists.
     */

    if (!info) {

        return;
    }


    /*
     * Make sure selected coordinates exist.
     */

    if (
        selectedComplaintLat === null ||
        selectedComplaintLng === null
    ) {

        return;
    }


    /*
     * Make sure coordinates are valid.
     */

    if (
        !Number.isFinite(selectedComplaintLat) ||
        !Number.isFinite(selectedComplaintLng)
    ) {

        return;
    }


    /*
     * Display selected coordinates.
     */

    let accuracyText =
        "";


    if (
        Number.isFinite(currentAccuracy)
    ) {

        accuracyText =
            ` (GPS Accuracy: ${Math.round(currentAccuracy)} m)`;
    }


    /*
     * Show the currently selected
     * complaint location.
     */

    setMessage(
        info,

        `📍 Selected problem location: ${selectedComplaintLat.toFixed(6)}, ${selectedComplaintLng.toFixed(6)}${accuracyText}`,

        "info"
    );

}

/* =========================================================
   35C. SYNC CONFIRMED COMPLAINT LOCATION
========================================================= */

function syncConfirmedComplaintLocation() {

    /*
     * A complaint location is valid only after
     * the citizen has confirmed the marker.
     */
    if (!locationConfirmed) {

        return false;
    }


    /*
     * Make sure the selected coordinates exist.
     */
    if (
        selectedComplaintLat === null ||
        selectedComplaintLng === null
    ) {

        return false;
    }


    /*
     * Copy the final confirmed marker position
     * into the existing GPS variables.
     */
    currentLat =
        selectedComplaintLat;

    currentLng =
        selectedComplaintLng;


    return true;
}

/* =========================================================
   35D. FINAL SELECTED COMPLAINT LOCATION
========================================================= */

function getFinalComplaintLocation() {

    /*
     * Make sure the citizen has confirmed
     * the problem location.
     */
    if (
        !locationConfirmed ||
        currentLat === null ||
        currentLng === null
    ) {

        return null;
    }


    /*
     * Make sure the coordinates are valid numbers.
     */
    if (
        !Number.isFinite(currentLat) ||
        !Number.isFinite(currentLng)
    ) {

        return null;
    }


    /*
     * Return the final confirmed location.
     *
     * These are the coordinates that should
     * be attached to the complaint.
     */
    return {

        latitude:
            Number(currentLat),

        longitude:
            Number(currentLng)
    };
}

/* =========================================================
   35F. SHOW GPS ACCURACY
========================================================= */

function showComplaintGPSAccuracy(
    latitude,
    longitude,
    accuracy
) {

    /*
     * Make sure the map exists.
     */
    if (
        !complaintMap ||
        !window.L
    ) {

        return;
    }


    /*
     * Remove the previous accuracy circle.
     */
    if (
        complaintAccuracyCircle
    ) {

        complaintMap.removeLayer(
            complaintAccuracyCircle
        );

        complaintAccuracyCircle =
            null;
    }


    /*
     * Accuracy must be a valid
     * positive number.
     */
    if (
        !Number.isFinite(accuracy) ||
        accuracy <= 0
    ) {

        return;
    }


    /*
     * Create a circle around the
     * original GPS position.
     */
    complaintAccuracyCircle =
        L.circle(
            [
                latitude,
                longitude
            ],
            {
                radius: accuracy,

                weight: 2,

                fillOpacity: 0.12
            }
        ).addTo(
            complaintMap
        );


    /*
     * Keep the marker above the circle.
     */
    if (
        complaintMarker
    ) {

        complaintMarker
            .bringToFront();
    }

}


/* =========================================================
   36. OPEN CAMERA
========================================================= */

async function openCamera() {

    const status =
        $("photoStatus");


    try {

        if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia
        ) {

            setMessage(
                status,
                translate("cameraNotSupported"),
                "error"
            );

            return;
        }


        /*
         * Camera normally requires HTTPS on deployed sites.
         * localhost is allowed during development.
         */
        if (
            !window.isSecureContext &&
            location.hostname !== "localhost" &&
            location.hostname !== "127.0.0.1"
        ) {

            setMessage(
                status,
                translate("cameraRequiresHttps"),
                "error"
            );

            return;
        }


        stopCamera();


        setMessage(
            status,
            translate("requestingCameraPermission"),
            "info"
        );


        cameraStream =
            await navigator.mediaDevices
                .getUserMedia({

                    video: {

                        facingMode: {
                            ideal: "environment"
                        },

                        width: {
                            ideal: 1280
                        },

                        height: {
                            ideal: 720
                        }
                    },

                    audio: false
                });


        const video =
            $("cameraVideo");


        if (video) {

            video.srcObject =
                cameraStream;

            video.setAttribute(
                "playsinline",
                ""
            );

            video.muted = true;

            await video.play();
        }


        showElement(
            $("cameraContainer")
        );


        showElement(
            $("capturePhotoBtn")
        );


        showElement(
            $("closeCameraBtn")
        );


        hideElement(
            $("openCameraBtn")
        );


        setMessage(
            status,
            translate("cameraReady"),
            "success"
        );


    } catch (error) {

        console.error(
            "Camera error:",
            error
        );


      let message =
    translate("unableToAccessCamera");

        if (
            error.name ===
            "NotAllowedError"
        ) {

         message =
    translate("cameraPermissionDenied");

        } else if (
            error.name ===
            "NotFoundError"
        ) {

           message =
    translate("noCameraFound");

        } else if (
            error.name ===
            "NotReadableError"
        ) {

          message =
    translate("cameraBusy");
        }


        setMessage(
            status,
            message,
            "error"
        );
    }
}


/* =========================================================
   37. CAPTURE CAMERA PHOTO
========================================================= */

function capturePhoto() {

    const video =
        $("cameraVideo");

    const canvas =
        $("cameraCanvas");

    const status =
        $("photoStatus");


    if (!video || !canvas) {

        setMessage(
            status,
            translate("cameraUnavailable"),
            "error"
        );

        return;
    }


    const width =
        video.videoWidth;

    const height =
        video.videoHeight;


    if (!width || !height) {

        setMessage(
            status,
            translate("cameraNotReady"),
            "error"
        );

        return;
    }


    canvas.width =
        width;

    canvas.height =
        height;


    const context =
        canvas.getContext("2d");


    if (!context) {

        setMessage(
            status,
            translate("unableToPrepareCapture"),
            "error"
        );

        return;
    }


    context.drawImage(
        video,
        0,
        0,
        width,
        height
    );


    canvas.toBlob(

        blob => {

            if (!blob) {

                setMessage(
                    status,
                    translate("failedToCapture"),
                    "error"
                );

                return;
            }


            capturedPhotoBlob =
                blob;


            const preview =
                $("photoPreview");


            if (preview) {

                if (
                    preview.src &&
                    preview.src.startsWith(
                        "blob:"
                    )
                ) {

                    URL.revokeObjectURL(
                        preview.src
                    );
                }


                preview.src =
                    URL.createObjectURL(
                        blob
                    );


                showElement(
                    preview
                );
            }


            showElement(
                $("removePhotoBtn")
            );


            setMessage(
                status,
                translate("photoCaptured"),
                "success"
            );


            stopCamera();


            hideElement(
                $("cameraContainer")
            );


            hideElement(
                $("capturePhotoBtn")
            );


            hideElement(
                $("closeCameraBtn")
            );


            showElement(
                $("openCameraBtn")
            );
        },


        "image/jpeg",

        0.9
    );
}

/* =========================================================
   38. STOP CAMERA
========================================================= */

function stopCamera() {

    if (cameraStream) {

        cameraStream
            .getTracks()
            .forEach(
                track => track.stop()
            );

        cameraStream = null;
    }


    const video =
        $("cameraVideo");


    if (video) {

        video.srcObject = null;
    }
}


/* =========================================================
   39. CLOSE CAMERA
========================================================= */

function closeCamera() {

    stopCamera();


    hideElement(
        $("cameraContainer")
    );


    hideElement(
        $("capturePhotoBtn")
    );


    hideElement(
        $("closeCameraBtn")
    );


    showElement(
        $("openCameraBtn")
    );


    setMessage(
        $("photoStatus"),
        translate("cameraClosed"),
        "info"
    );
}


/* =========================================================
   40. REMOVE PHOTO
========================================================= */

function removePhoto() {

    capturedPhotoBlob =
        null;


    const preview =
        $("photoPreview");


    if (preview) {

        if (
            preview.src &&
            preview.src.startsWith(
                "blob:"
            )
        ) {

            URL.revokeObjectURL(
                preview.src
            );
        }


        preview.src = "";


        hideElement(
            preview
        );
    }


    const input =
        $("photoInput");


    if (input) {

        input.value = "";
    }


    hideElement(
        $("removePhotoBtn")
    );


    setMessage(
        $("photoStatus"),
        translate("photoRemoved"),
        "info"
    );
}

/* =========================================================
   41. GET SELECTED PHOTO
========================================================= */

function getSelectedPhotoFile() {

    /*
     * Camera photo gets priority.
     */
    if (capturedPhotoBlob) {

        return new File(
            [capturedPhotoBlob],

            "complaint-photo.jpg",

            {
                type:
                    capturedPhotoBlob.type ||
                    "image/jpeg"
            }
        );
    }


    const input =
        $("photoInput");


    if (
        input &&
        input.files &&
        input.files.length > 0
    ) {

        return input.files[0];
    }


    return null;
}


/* =========================================================
   42. END OF PART 2
========================================================= */
/* =========================================================
   43. COMPLAINT FORM DATA
========================================================= */

function getComplaintFormValues() {

    const state =
        $("c-state")
            ?.value
            .trim() || "";


    const district =
        $("c-district")
            ?.value
            .trim() || "";


    const taluk =
        $("c-taluk")
            ?.value
            .trim() || "";


    const village =
        $("c-village")
            ?.value
            .trim() || "";


    const problem =
        $("c-problem")
            ?.value
            .trim() || "";


    const description =
        $("c-description")
            ?.value
            .trim() || "";


    return {
        state,
        district,
        taluk,
        village,
        problem,
        description
    };
}
/* =========================================================
   VALIDATE COMPLAINT FORM
========================================================= */

function validateComplaintForm() {

    /* -----------------------------------------------------
       STATE
    ----------------------------------------------------- */

    const state =
        $("c-state");

    if (
        !state ||
        !state.value.trim()
    ) {

        return {
            valid: false,
            message:
                translate("enterState")
        };
    }


    /* -----------------------------------------------------
       DISTRICT
    ----------------------------------------------------- */

    const district =
        $("c-district");

    if (
        !district ||
        !district.value.trim()
    ) {

        return {
            valid: false,
            message:
                translate("enterDistrict")
        };
    }


    /* -----------------------------------------------------
       TALUK
    ----------------------------------------------------- */

    const taluk =
        $("c-taluk");

    if (
        !taluk ||
        !taluk.value.trim()
    ) {

        return {
            valid: false,
            message:
                translate("enterTaluk")
        };
    }


    /* -----------------------------------------------------
       VILLAGE
    ----------------------------------------------------- */

    const village =
        $("c-village");

    if (
        !village ||
        !village.value.trim()
    ) {

        return {
            valid: false,
            message:
                translate(
                    "enterVillageRequired"
                )
        };
    }


    /* -----------------------------------------------------
       PROBLEM
    ----------------------------------------------------- */

    const problem =
        $("c-problem");

    if (
        !problem ||
        !problem.value.trim()
    ) {

        return {
            valid: false,
            message:
                translate(
                    "selectProblemType"
                )
        };
    }


    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    const description =
        $("c-description");

    if (
        !description ||
        !description.value.trim()
    ) {

        return {
            valid: false,
            message:
                translate(
                    "describeProblem"
                )
        };
    }


    /* -----------------------------------------------------
       LOCATION CONFIRMATION
    ----------------------------------------------------- */

    if (!locationConfirmed) {

        return {
            valid: false,
            message:
                translate(
                    "confirmProblemLocation"
                )
        };
    }


    /* -----------------------------------------------------
       SELECTED MARKER COORDINATES
    ----------------------------------------------------- */

    if (
        selectedComplaintLat === null ||
        selectedComplaintLng === null
    ) {

        return {
            valid: false,
            message:
                translate(
                    "selectProblemLocation"
                )
        };
    }


    /* -----------------------------------------------------
       COORDINATE VALIDATION
    ----------------------------------------------------- */

    if (
        !Number.isFinite(
            selectedComplaintLat
        ) ||
        !Number.isFinite(
            selectedComplaintLng
        )
    ) {

        return {
            valid: false,
            message:
                translate(
                    "invalidSelectedLocation"
                )
        };
    }


    /* -----------------------------------------------------
       LATITUDE RANGE
    ----------------------------------------------------- */

    if (
        selectedComplaintLat < -90 ||
        selectedComplaintLat > 90
    ) {

        return {
            valid: false,
            message:
                translate(
                    "invalidLatitude"
                )
        };
    }


    /* -----------------------------------------------------
       LONGITUDE RANGE
    ----------------------------------------------------- */

    if (
        selectedComplaintLng < -180 ||
        selectedComplaintLng > 180
    ) {

        return {
            valid: false,
            message:
                translate(
                    "invalidLongitude"
                )
        };
    }


    /* -----------------------------------------------------
       PHOTO
    ----------------------------------------------------- */

    const selectedPhoto =
        getSelectedPhotoFile();

    if (!selectedPhoto) {

        return {
            valid: false,
            message:
                translate(
                    "photoRequired"
                )
        };
    }


    /* -----------------------------------------------------
       EVERYTHING VALID
    ----------------------------------------------------- */

    return {

        valid: true,

        message:
            translate(
                "complaintFormValid"
            ),

        latitude:
            Number(
                selectedComplaintLat
            ),

        longitude:
            Number(
                selectedComplaintLng
            ),

        photo:
            selectedPhoto
    };
}
/* =========================================================
   45. PHOTO INPUT CHANGE
========================================================= */

function handlePhotoInputChange(
    event
) {

    const input =
        event.target;


    const status =
        $("photoStatus");


    if (
        !input.files ||
        !input.files.length
    ) {

        return;
    }


    const file =
        input.files[0];


    /*
     * Backend accepts JPG / JPEG / PNG.
     */
    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/octet-stream"
    ];


    const extension =
        file.name
            .split(".")
            .pop()
            .toLowerCase();


    const allowedExtensions = [
        "jpg",
        "jpeg",
        "png"
    ];


    if (
        !allowedExtensions.includes(
            extension
        )
    ) {

        input.value = "";


        setMessage(
            status,
            translate(
                "invalidPhotoFormat"
            ),
            "error"
        );

        return;
    }


    /*
     * Maximum size = 5 MB
     */
    if (
        file.size >
        5 * 1024 * 1024
    ) {

        input.value = "";


        setMessage(
            status,
            translate(
                "photoTooLarge"
            ),
            "error"
        );

        return;
    }


    capturedPhotoBlob =
        null;


    const preview =
        $("photoPreview");


    if (preview) {

        if (
            preview.src &&
            preview.src.startsWith(
                "blob:"
            )
        ) {

            URL.revokeObjectURL(
                preview.src
            );
        }


        preview.src =
            URL.createObjectURL(
                file
            );


        showElement(
            preview
        );
    }


    showElement(
        $("removePhotoBtn")
    );


    setMessage(
        status,

        translate(
            "photoSelected"
        ).replace(
            "{filename}",
            file.name
        ),

        "success"
    );
}
/* =========================================================
   46. SUBMIT COMPLAINT
========================================================= */

async function submitComplaint(event) {

    /*
     * Prevent normal HTML form submission.
     */
    if (event) {
        event.preventDefault();
    }


    /*
     * Synchronize the confirmed marker position.
     */
    if (
        typeof syncConfirmedComplaintLocation ===
        "function"
    ) {

        const locationSynced =
            syncConfirmedComplaintLocation();


        if (!locationSynced) {

            setMessage(
                $("complaint-message"),
                translate(
                    "confirmProblemLocation"
                ),
                "error"
            );

            return;
        }
    }


    /*
     * Validate the complete complaint form.
     */
    const validation =
        validateComplaintForm();


    if (!validation.valid) {

        setMessage(
            $("complaint-message"),
            validation.message,
            "error"
        );

        return;
    }


    /*
     * Get submit button.
     */
    const submitButton =
        $("submitComplaintBtn");


    /*
     * Prevent duplicate submissions.
     */
    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.textContent =
            translate(
                "submitting"
            );
    }


    try {

        /*
         * Create form data.
         */
        const formData =
            new FormData();


        /*
         * Add complaint details.
         */
        formData.append(
            "state",
            $("c-state").value
        );


        formData.append(
            "district",
            $("c-district").value
        );


        formData.append(
            "taluk",
            $("c-taluk").value
        );


        formData.append(
            "village",
            $("c-village").value
        );


        formData.append(
            "problem",
            $("c-problem").value
        );


        formData.append(
            "description",
            $("c-description").value
        );


        /*
         * -------------------------------------------------
         * FINAL CONFIRMED LOCATION
         * -------------------------------------------------
         */
        formData.append(
            "latitude",
            String(selectedComplaintLat)
        );


        formData.append(
            "longitude",
            String(selectedComplaintLng)
        );


        /*
         * -------------------------------------------------
         * COMPLAINT PHOTO
         * -------------------------------------------------
         *
         * Supports:
         *
         * 1. Camera captured photo
         * 2. Browse/uploaded photo
         */

        const selectedPhoto =
            getSelectedPhotoFile();


        if (!selectedPhoto) {

            throw new Error(
                translate(
                    "photoRequired"
                )
            );
        }


        formData.append(
            "photo",
            selectedPhoto,
            selectedPhoto.name ||
            "complaint-photo.jpg"
        );


        /*
         * -------------------------------------------------
         * SEND COMPLAINT TO BACKEND
         * -------------------------------------------------
         */

        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/complaints`,
                {
                    method: "POST",
                    body: formData
                }
            );


        /*
         * Read server response.
         */
        const result =
            await response.json();


        /*
         * Handle server error.
         */
        if (!response.ok) {

            throw new Error(
                result.message ||
                translate(
                    "failedToSubmitComplaint"
                )
            );
        }


        /*
         * -------------------------------------------------
         * SUCCESS
         * -------------------------------------------------
         */

        const successMessage =
            result.message ||
            translate(
                "complaintSubmittedSuccessfully"
            );


        const complaintMessage =
            $("complaint-message");


        setMessage(
            complaintMessage,
            successMessage,
            "success"
        );


        /*
         * Display generated complaint ID.
         */
        const generatedComplaintId =
            $("generatedComplaintId");


        if (generatedComplaintId) {

            if (result.complaintId) {

                generatedComplaintId.textContent =
                    `${translate(
                        "complaintId"
                    )}: ${result.complaintId}`;

            }
            else {

                generatedComplaintId.textContent =
                    translate(
                        "complaintSubmittedSuccessfully"
                    );
            }


            showElement(
                generatedComplaintId
            );
        }


        /*
         * -------------------------------------------------
         * RESET FORM FIELDS
         * -------------------------------------------------
         */

        const complaintForm =
            $("complaintForm");


        if (complaintForm) {

            complaintForm.reset();
        }


        /*
         * -------------------------------------------------
         * RESET LOCATION STATE
         * -------------------------------------------------
         */

        currentLat =
            null;

        currentLng =
            null;

        currentAccuracy =
            null;

        selectedComplaintLat =
            null;

        selectedComplaintLng =
            null;

        locationConfirmed =
            false;


        /*
         * -------------------------------------------------
         * REMOVE MAP
         * -------------------------------------------------
         */

        if (complaintMap) {

            complaintMap.remove();

            complaintMap =
                null;
        }


        complaintMarker =
            null;

        complaintAccuracyCircle =
            null;


        /*
         * Hide map.
         */
        if ($("complaintMap")) {

            $("complaintMap")
                .style.display =
                "none";
        }


        /*
         * Hide location instruction.
         */
        if ($("locationHint")) {

            $("locationHint")
                .style.display =
                "none";
        }


        /*
         * Reset confirmation button.
         */
        const confirmButton =
            $("confirmLocationBtn");


        if (confirmButton) {

            confirmButton.style.display =
                "none";

            confirmButton.disabled =
                false;

            confirmButton.textContent =
                `✓ ${translate(
                    "confirmProblemLocationButton"
                )}`;
        }


        /*
         * Reset location information.
         */
        if ($("locationInfo")) {

            $("locationInfo")
                .textContent =
                translate(
                    "locationNotCaptured"
                );

            $("locationInfo")
                .className =
                "";
        }


        /*
         * -------------------------------------------------
         * RESET PHOTO PREVIEW
         * -------------------------------------------------
         */

        if ($("photoPreview")) {

            const preview =
                $("photoPreview");


            if (
                preview.src &&
                preview.src.startsWith(
                    "blob:"
                )
            ) {

                URL.revokeObjectURL(
                    preview.src
                );
            }


            preview.src =
                "";

            preview.style.display =
                "none";
        }


        /*
         * Hide remove-photo button.
         */
        if ($("removePhotoBtn")) {

            $("removePhotoBtn")
                .style.display =
                "none";
        }


        /*
         * Clear photo status.
         */
        if ($("photoStatus")) {

            $("photoStatus")
                .textContent =
                "";
        }


        /*
         * Clear photo input.
         */
        if ($("photoInput")) {

            $("photoInput")
                .value =
                "";
        }


        /*
         * IMPORTANT:
         *
         * Do NOT close the complaint modal.
         *
         * The citizen should remain on the
         * complaint page and see the success message.
         */

    }
    catch (error) {

        console.error(
            "Complaint submission error:",
            error
        );


        /*
         * Show translated error.
         */
        setMessage(
            $("complaint-message"),
            error.message ||
            translate(
                "unableToSubmitComplaint"
            ),
            "error"
        );

    }
    finally {

        /*
         * Re-enable submit button.
         */
        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                translate(
                    "submitComplaint"
                );
        }

    }

}

/* =========================================================
   47. EXTRACT COMPLAINT ARRAY
========================================================= */

function extractComplaints(
    data
) {

    if (Array.isArray(data)) {

        return data;
    }


    if (
        Array.isArray(
            data?.complaints
        )
    ) {

        return data.complaints;
    }


    if (
        Array.isArray(
            data?.data
        )
    ) {

        return data.data;
    }


    return [];
}


/* =========================================================
   48. LOAD CITIZEN DASHBOARD
   GET /api/complaints/my
========================================================= */

/* =========================================================
   LOAD CITIZEN DASHBOARD
========================================================= */

async function loadDashboard() {

    const list =
        $("complaintsList");


    if (!list) {
        return;
    }


    if (!getToken()) {

        showView(
            "view-home"
        );

        return;
    }


    try {

        list.innerHTML =
            `
            <div class="loading-state">
                ${translate("loadingYourComplaints")}
            </div>
            `;


        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/complaints/my`
            );


        const result =
            await readBackendResponse(
                response
            );


        if (
            result.status === 401
        ) {

            clearSession();

            showView(
                "view-home"
            );

            showNotice(
                translate(
                    "sessionExpired"
                )
            );

            return;
        }


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate(
                        "unableToLoadComplaints"
                    )
                )
            );
        }


        const complaints =
            extractComplaints(
                result.data
            );


        renderCitizenComplaints(
            complaints
        );


    } catch (error) {

        console.error(
            "Citizen dashboard error:",
            error
        );


        list.innerHTML =
            `
            <div class="empty-state">
                <p>
                    ${translate(
                        "unableToLoadComplaints"
                    )}
                </p>

                <small>
                    ${escapeHtml(
                        error.message
                    )}
                </small>
            </div>
            `;
    }
}


/* =========================================================
   49. STATUS CLASS
========================================================= */

function getStatusClass(
    status
) {

    return String(
        status || "unknown"
    )
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(
            /[^a-z0-9-]/g,
            ""
        );
}


/* =========================================================
   50. LEVEL LABEL
========================================================= */

function getLevelLabel(
    level
) {

    if (!level) {

        return translate(
            "notAssigned"
        );
    }


    return String(level)
        .toUpperCase();
}


/* =========================================================
   51. ASSIGNED OFFICER NAME
========================================================= */
function getAssignedOfficerName(
    complaint
) {

    const assigned =
        complaint?.assignedTo;


    if (!assigned) {

        return translate(
            "notAssigned"
        );
    }


    if (
        typeof assigned === "string"
    ) {

        return translate(
            "assignedOfficer"
        );
    }


    return (
        assigned.name ||
        assigned.email ||
        translate(
            "assignedOfficer"
        )
    );
}
/* =========================================================
   52. COMPLAINT PHOTO URL
========================================================= */

function getComplaintPhotoUrl(
    complaint
) {

    const photo =
        complaint?.photo;


    if (!photo) {
        return "";
    }


    if (photo.url) {

        if (
            photo.url.startsWith(
                "http://"
            ) ||
            photo.url.startsWith(
                "https://"
            )
        ) {

            return photo.url;
        }


        return `${BACKEND_URL}${photo.url}`;
    }


    if (photo.filePath) {

        let path =
            photo.filePath;


        path =
            path.replace(
                /\\/g,
                "/"
            );


        if (
            !path.startsWith("/")
        ) {

            path =
                "/" + path;
        }


        return `${BACKEND_URL}${path}`;
    }


    return "";
}


/* =========================================================
   53. RENDER CITIZEN COMPLAINTS
========================================================= */

function renderCitizenComplaints(
    complaints
) {

    const list =
        $("complaintsList");


    if (!list) {
        return;
    }


    if (!complaints.length) {

        list.innerHTML =
            `
            <div class="empty-state">
             <h3>${translate("noComplaintsYet")}</h3>
              <p>
    ${translate("noComplaints")}
</p>
              <button
    type="button"
    onclick="openComplaintModal()"
>
    ${translate("submitComplaint")}
</button>
            </div>
            `;

        return;
    }


    list.innerHTML =
        complaints
            .map(
                complaint =>
                    renderCitizenComplaintCard(
                        complaint
                    )
            )
            .join("");
}

function renderCitizenComplaintCard(
    complaint
) {

    const complaintId =
        complaint?.complaintId ||
        complaint?._id ||
        translate("notAvailable");


    const status =
        complaint?.status ||
        translate("submitted");


    const level =
        complaint?.currentLevel ||
        translate("admin");


    const photoUrl =
        getComplaintPhotoUrl(
            complaint
        );


    const assignedName =
        getAssignedOfficerName(
            complaint
        );


    const location =
        [
            complaint?.village,
            complaint?.taluk,
            complaint?.district,
            complaint?.state
        ]
            .filter(Boolean)
            .join(", ");


    return `
        <article
            class="complaint-card"
            data-complaint-id="${escapeHtml(complaintId)}"
        >

            <div class="complaint-card-header">

                <div>

                    <h3>
                        ${escapeHtml(
                            complaint?.problem
                                ? translateProblem(
                                    complaint.problem
                                )
                                : translate("complaint")
                        )}
                    </h3>


                    <p class="complaint-id">

                        ${translate("complaintId")}:

                        <strong>
                            ${escapeHtml(
                                complaintId
                            )}
                        </strong>

                    </p>

                </div>


                <span
                    class="status-badge status-${escapeHtml(
                        getStatusClass(status)
                    )}"
                >
                    ${escapeHtml(
                        translateStatus(status)
                    )}
                </span>

            </div>


            <div class="complaint-card-body">

                <p>
                    <strong>
                        ${translate("problem")}:
                    </strong>

                    ${escapeHtml(
                        complaint?.problem
                            ? translateProblem(
                                complaint.problem
                            )
                            : translate(
                                "notAvailable"
                            )
                    )}
                </p>


                <p>
                    <strong>
                        ${translate("description")}:
                    </strong>

                    ${escapeHtml(
                        complaint?.description ||
                        translate("notAvailable")
                    )}
                </p>


                <p>
                    <strong>
                        ${translate("location")}:
                    </strong>

                    ${escapeHtml(
                        location ||
                        translate("notAvailable")
                    )}
                </p>


                <p>
                    <strong>
                        ${translate("currentLevel")}:
                    </strong>

                    ${escapeHtml(
                        getLevelLabel(level)
                    )}
                </p>


                <p>
                    <strong>
                        ${translate("assignedTo")}:
                    </strong>

                    ${escapeHtml(
                        assignedName
                    )}
                </p>


                <p>
                    <strong>
                        ${translate("submitted")}:
                    </strong>

                    ${escapeHtml(
                        formatDate(
                            complaint?.createdAt
                        )
                    )}
                </p>


                ${
                    complaint?.deadlineAt
                        ? `
                        <p>

                            <strong>
                                ${translate("deadline")}:
                            </strong>

                            ${escapeHtml(
                                formatDate(
                                    complaint.deadlineAt
                                )
                            )}

                        </p>
                        `
                        : ""
                }


                ${
                    complaint?.remarks
                        ? `
                        <p>

                            <strong>
                                ${translate("latestRemarks")}:
                            </strong>

                            ${escapeHtml(
                                complaint.remarks
                            )}

                        </p>
                        `
                        : ""
                }

            </div>

<div class="complaint-card-actions">

    ${
        photoUrl
            ? `
            <button
                type="button"
                onclick="window.open(
                    '${escapeHtml(photoUrl)}',
                    '_blank'
                )"
            >
                ${translate("viewPhoto")}
            </button>
            `
            : ""
    }

    <button
        type="button"
        onclick="viewComplaintDetails('${escapeHtml(
            complaintId
        )}')"
    >
        ${translate("viewDetails")}
    </button>

</div>

        </article>
    `;
}

/* =========================================================
   55. VIEW COMPLAINT DETAILS
   GET /api/complaints/:id
========================================================= */

async function viewComplaintDetails(
    complaintId
) {

    if (!complaintId) {

        showNotice(
            translate(
                "complaintIdMissing"
            )
        );

        return;
    }


    try {

        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/complaints/${encodeURIComponent(
                    complaintId
                )}`
            );


        const result =
            await readBackendResponse(
                response
            );


        if (
            result.status === 401
        ) {

            clearSession();

            showView(
                "view-home"
            );

            showNotice(
                translate(
                    "sessionExpired"
                )
            );

            return;
        }


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate(
                        "unableToLoadComplaintDetails"
                    )
                )
            );
        }


        const complaint =
            result.data?.complaint ||
            result.data?.data ||
            result.data;


        if (!complaint) {

            throw new Error(
                translate(
                    "complaintDetailsUnavailable"
                )
            );
        }


        showComplaintDetails(
            complaint
        );


    }
    catch (error) {

        console.error(
            "Complaint details error:",
            error
        );


        showNotice(
            error.message ||
            translate(
                "unableToLoadComplaintDetails"
            )
        );
    }
}
/* =========================================================
   56. SHOW COMPLAINT DETAILS
========================================================= */

function showComplaintDetails(
    complaint
) {

    const history =
        Array.isArray(
            complaint?.history
        )
            ? complaint.history
            : [];


    const historyHtml =
        history.length
            ? history
                .map(
                    item =>
                        renderHistoryItem(
                            item
                        )
                )
                .join("")
            : `
                <p>
                    ${translate("noHistoryAvailable")}
                </p>
              `;


    const photoUrl =
        getComplaintPhotoUrl(
            complaint
        );


    const location =
        [
            complaint?.village,
            complaint?.taluk,
            complaint?.district,
            complaint?.state
        ]
            .filter(Boolean)
            .join(", ");


    const complaintId =
        complaint?.complaintId ||
        complaint?._id ||
        translate("notAvailable");


    const status =
        complaint?.status
            ? translateStatus(
                complaint.status
            )
            : translate("notAvailable");


    const currentLevel =
        complaint?.currentLevel ||
        translate("notAvailable");


    const assignedTo =
        getAssignedOfficerName(
            complaint
        ) ||
        translate("notAvailable");


    const description =
        complaint?.description ||
        translate("notAvailable");


    const submittedDate =
        formatDate(
            complaint?.createdAt
        );


    const message =
        `
        ${translate("complaintId")}:
        ${complaintId}
        
        ${translate("status")}:
        ${status}
        
        ${translate("currentLevel")}:
        ${currentLevel}
        
        ${translate("assignedTo")}:
        ${assignedTo}
        
        ${translate("location")}:
        ${location || translate("notAvailable")}
        
        ${translate("descriptionLabel")}:
        ${description}
        
        ${translate("submitted")}:
        ${submittedDate}
        
        ${
            complaint?.deadlineAt
                ? `${translate("deadline")}:
                   ${formatDate(
                       complaint.deadlineAt
                   )}`
                : ""
        }
        `;


    /*
     * If the existing dashboard has a detail
     * container, use it.
     */
    const detailContainer =
        $("complaintDetails");


    if (detailContainer) {

        detailContainer.innerHTML =
            `
            <div class="complaint-details">

                <h2>
                    ${escapeHtml(
                        complaint?.problem
                            ? translateProblem(
                                complaint.problem
                            )
                            : translate(
                                "complaintDetails"
                            )
                    )}
                </h2>


                <p>
                    <strong>${translate("complaintId")}:</strong>
                    ${escapeHtml(
                        complaintId
                    )}
                </p>


                <p>
                    <strong>${translate("status")}:</strong>
                    ${escapeHtml(
                        status
                    )}
                </p>


                <p>
                    <strong>${translate("currentLevel")}:</strong>
                    ${escapeHtml(
                        currentLevel
                    )}
                </p>


                <p>
                    <strong>${translate("assignedTo")}:</strong>
                    ${escapeHtml(
                        assignedTo
                    )}
                </p>


                <p>
                    <strong>${translate("location")}:</strong>
                    ${escapeHtml(
                        location ||
                        translate("notAvailable")
                    )}
                </p>


                <p>
                    <strong>${translate("descriptionLabel")}:</strong>
                    ${escapeHtml(
                        description
                    )}
                </p>


                <p>
                    <strong>${translate("submitted")}:</strong>
                    ${escapeHtml(
                        submittedDate
                    )}
                </p>


                ${
                    complaint?.deadlineAt
                        ? `
                        <p>
                            <strong>${translate("deadline")}:</strong>
                            ${escapeHtml(
                                formatDate(
                                    complaint.deadlineAt
                                )
                            )}
                        </p>
                        `
                        : ""
                }


                ${
                    photoUrl
                        ? `
                        <p>
                            <a
                                href="${escapeHtml(
                                    photoUrl
                                )}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ${translate("viewComplaintPhoto")}
                            </a>
                        </p>
                        `
                        : ""
                }


                <h3>
                    ${translate("complaintHistory")}
                </h3>


                <div class="complaint-history">
                    ${historyHtml}
                </div>

            </div>
            `;


        showElement(
            detailContainer
        );


        return;
    }


    /*
     * Fallback for the current dashboard
     * if there is no dedicated detail container.
     *
     * Backend actions are translated.
     * Citizen/officer remarks remain unchanged.
     */
    const historyText =
        history
            .map(
                item =>
                    `${item?.action
                        ? translateHistoryAction(
                            item.action
                        )
                        : ""
                    } - ${
                        item?.remarks || ""
                    } - ${
                        formatDate(
                            item?.createdAt
                        )
                    }`
            )
            .join("\n");


    alert(
        `${message}\n\n${translate("history")}:\n${
            historyText ||
            translate("noHistoryAvailable")
        }`
    );
}
/* =========================================================
   57. HISTORY ITEM
========================================================= */

function renderHistoryItem(
    item
) {

    const officer =
        item?.officer;

    let officerText =
        translate("system");


    if (
        officer &&
        typeof officer === "object"
    ) {

        officerText =
            officer.name ||
            officer.email ||
            translate("officer");

    } else if (
        officer
    ) {

        officerText =
            translate("officer");
    }


    const role =
        item?.role
            ? translateRole(
                item.role
            )
            : translate("system");


    const action =
        item?.action
            ? translateHistoryAction(
                item.action
            )
            : translate("action");


    const fromLevel =
        item?.fromLevel
            ? translateRole(
                item.fromLevel
            )
            : "";


    const toLevel =
        item?.toLevel
            ? translateRole(
                item.toLevel
            )
            : "";


    return `
        <div class="history-item">

            <div class="history-action">
                ${escapeHtml(
                    action
                )}
            </div>


            <div class="history-meta">

                <span>
                    ${escapeHtml(
                        role
                    )}
                </span>

                <span>
                    ${escapeHtml(
                        officerText
                    )}
                </span>

                <span>
                    ${escapeHtml(
                        formatDate(
                            item?.createdAt
                        )
                    )}
                </span>

            </div>


            ${
                item?.fromLevel ||
                item?.toLevel
                    ? `
                    <div>
                        ${escapeHtml(
                            fromLevel
                        )}
                        →
                        ${escapeHtml(
                            toLevel
                        )}
                    </div>
                    `
                    : ""
            }


            ${
                item?.remarks
                    ? `
                    <p>
                        ${escapeHtml(
                            item.remarks
                        )}
                    </p>
                    `
                    : ""
            }

        </div>
    `;
}

/* =========================================================
   58. END OF PART 3
========================================================= */
/* =========================================================
   59. OFFICIAL DASHBOARD
   GET /api/complaints
========================================================= */

async function loadOfficialDashboard() {

    const list =
        $("officialComplaintsList");


    if (!list) {
        return;
    }


    if (!getToken() || !currentUser) {

        showView(
            "view-home"
        );

        return;
    }


    const role =
        normalizeRole(
            currentUser.role
        );


    if (!isOfficialRole(role)) {

        list.innerHTML = `
            <div class="empty-state">
                <p>
                    ${translate(
                        "notAuthorizedToAccessOfficialDashboard"
                    )}
                </p>
            </div>
        `;

        return;
    }


    try {

        list.innerHTML = `
            <div class="loading-state">
                ${translate(
                    "loadingOfficialComplaints"
                )}
            </div>
        `;


        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/complaints`
            );


        const result =
            await readBackendResponse(
                response
            );


        if (
            result.status === 401
        ) {

            clearSession();

            showView(
                "view-home"
            );

            showNotice(
                translate(
                    "loginSessionExpired"
                )
            );

            return;
        }


        if (
            result.status === 403
        ) {

            throw new Error(
                translate(
                    "notAuthorizedToViewOfficialComplaints"
                )
            );
        }


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate(
                        "unableToLoadComplaints"
                    )
                )
            );
        }


        const complaints =
            extractComplaints(
                result.data
            );


        /*
         * ADMIN:
         * See all complaints.
         *
         * GKM / PDO / EO / CEO:
         * Only complaints currently assigned
         * to their account.
         */

        let visibleComplaints =
            complaints;


        if (
            role !== "admin"
        ) {

            visibleComplaints =
                complaints.filter(
                    complaint =>
                        isComplaintAssignedToUser(
                            complaint,
                            currentUser
                        )
                );
        }


        renderOfficialComplaints(
            visibleComplaints,
            role
        );


    } catch (error) {

        console.error(
            "Official dashboard error:",
            error
        );


        list.innerHTML = `
            <div class="empty-state">

                <h3>
                    ${translate(
                        "unableToLoadComplaints"
                    )}
                </h3>

                <p>
                    ${escapeHtml(
                        error?.message ||
                        translate(
                            "unknownError"
                        )
                    )}
                </p>

            </div>
        `;
    }
}


/* =========================================================
   60. CHECK COMPLAINT ASSIGNMENT
========================================================= */

function isComplaintAssignedToUser(
    complaint,
    user
) {

    if (
        !complaint ||
        !user
    ) {

        return false;
    }


    const assigned =
        complaint.assignedTo;


    if (!assigned) {

        return false;
    }


    const userId =
        String(
            user._id ||
            user.id ||
            ""
        );


    if (!userId) {

        return false;
    }


    if (
        typeof assigned === "string"
    ) {

        return (
            String(assigned) ===
            userId
        );
    }


    const assignedId =
        assigned._id ||
        assigned.id ||
        "";


    return (
        String(assignedId) ===
        userId
    );
}


/* =========================================================
   61. RENDER OFFICIAL COMPLAINT CARD
========================================================= */

function renderOfficialComplaintCard(
    complaint,
    role
) {

    /*
     * VERY IMPORTANT
     *
     * Frontend actions MUST use complaintId.
     *
     * Never use complaint._id here.
     */

    const complaintId =
        complaint?.complaintId ||
        "";

    if (!complaintId) {

        console.warn(
            "Complaint has no complaintId:",
            complaint
        );

        return "";
    }


    const status =
        complaint?.status ||
        "Submitted";

    const currentLevel =
        complaint?.currentLevel ||
        "Admin";

    const assignedName =
        getAssignedOfficerName(
            complaint
        ) ||
        translate("notAvailable");

    const photoUrl =
        getComplaintPhotoUrl(
            complaint
        );

    const isAdmin =
        normalizeRole(role) ===
        "admin";

    const isOfficer =
        [
            "gkm",
            "pdo",
            "eo",
            "ceo"
        ].includes(
            normalizeRole(role)
        );

    const assignedToCurrentOfficer =
        isComplaintAssignedToUser(
            complaint,
            currentUser
        );

    let actionHtml =
        "";


    /* =====================================================
       TRANSLATION HELPERS
    ===================================================== */

    const language =
        getSelectedLanguage();

    const t =
        key =>
            translations[language]?.[key] ||
            translations.en?.[key] ||
            key;


    const translateProblemValue =
        value => {

            const problem =
                String(value || "").trim();

            const keyMap = {
                "Road Damage": "roadDamage",
                "Electricity Problem": "electricityProblem",
                "Water Problem": "waterProblem",
                "Government Property Problem": "governmentPropertyProblem",
                "Government Scheme Problem": "governmentSchemeProblem",
                "Drainage Problem": "drainageProblem",
                "Street Light Problem": "streetLightProblem",
                "Garbage / Sanitation Problem": "garbageSanitationProblem",
                "Other": "other"
            };

            return t(
                keyMap[problem] ||
                problem ||
                "complaint"
            );
        };


    const translateStatusValue =
        value => {

            const statusValue =
                String(value || "").trim();

            const keyMap = {
                "Submitted": "submitted",
                "Under Review": "underReview",
                "Assigned": "assigned",
                "In Progress": "inProgress",
                "Resolved": "resolved",
                "Rejected": "rejected",
                "Closed": "closed"
            };

            return t(
                keyMap[statusValue] ||
                statusValue
            );
        };


    const translateLevelValue =
        value => {

            const level =
                String(value || "").trim();

            const keyMap = {
                "Admin": "admin",
                "GKM": "gkm",
                "PDO": "pdo",
                "EO": "eo",
                "CEO": "ceo"
            };

            return t(
                keyMap[level] ||
                level
            );
        };


    const translateVerificationValue =
        value => {

            const verification =
                String(value || "").trim();

            const keyMap = {
                "Pending": "pending",
                "Approved": "approved",
                "Rejected": "rejected"
            };

            return t(
                keyMap[verification] ||
                verification
            );
        };


    /* =====================================================
       ADMIN ACTIONS
    ===================================================== */

    if (isAdmin) {

        const verification =
            String(
                complaint?.adminVerificationStatus ||
                "Pending"
            ).toLowerCase();


        if (
            verification ===
            "pending"
        ) {

            actionHtml = `

                <div class="official-actions">

                    <button
                        type="button"
                        class="approve-btn"
                        data-official-action="approve"
                        data-complaint-id="${escapeHtml(
                            complaintId
                        )}"
                    >
                        ${escapeHtml(
                            t("approve")
                        )}
                    </button>


                    <button
                        type="button"
                        class="reject-btn"
                        data-official-action="reject"
                        data-complaint-id="${escapeHtml(
                            complaintId
                        )}"
                    >
                        ${escapeHtml(
                            t("reject")
                        )}
                    </button>


                    <button
                        type="button"
                        class="delete-btn"
                        data-official-action="delete"
                        data-complaint-id="${escapeHtml(
                            complaintId
                        )}"
                    >
                        ${escapeHtml(
                            t("delete")
                        )}
                    </button>

                </div>

            `;

        } else {

            actionHtml = `

                <div class="official-info">

                    <small>
                        ${escapeHtml(
                            t("adminVerificationCompleted")
                        )}

                        ${escapeHtml(
                            t("complaintHandledByAssignedOfficer")
                        )}
                    </small>

                </div>

            `;
        }
    }


    /* =====================================================
       GKM / PDO / EO / CEO ACTIONS
    ===================================================== */

    if (
        isOfficer &&
        assignedToCurrentOfficer
    ) {

        const normalizedStatus =
            String(
                status
            )
                .trim()
                .toLowerCase();


        const canStart =
            normalizedStatus ===
                "assigned" ||
            normalizedStatus ===
                "under review";


        const canResolve =
            normalizedStatus ===
                "assigned" ||
            normalizedStatus ===
                "under review" ||
            normalizedStatus ===
                "in progress";


        actionHtml = `

            <div class="official-progress">

                <textarea
                    class="official-remarks"
                    data-complaint-id="${escapeHtml(
                        complaintId
                    )}"
                    placeholder="${escapeHtml(
                        t("enterRemarks")
                    )}"
                    rows="3"
                ></textarea>


                <div class="official-actions">

                    ${
                        canStart
                            ? `

                                <button
                                    type="button"
                                    data-official-action="progress"
                                    data-status="In Progress"
                                    data-complaint-id="${escapeHtml(
                                        complaintId
                                    )}"
                                >
                                    ${escapeHtml(
                                        t("startUpdate")
                                    )}
                                </button>

                            `
                            : ""
                    }


                    ${
                        canResolve
                            ? `

                                <button
                                    type="button"
                                    data-official-action="progress"
                                    data-status="Resolved"
                                    data-complaint-id="${escapeHtml(
                                        complaintId
                                    )}"
                                >
                                    ${escapeHtml(
                                        t("markResolved")
                                    )}
                                </button>

                            `
                            : ""
                    }

                </div>

            </div>

        `;

    } else if (isOfficer) {

        actionHtml = `

            <div class="official-info">

                <small>
                    ${escapeHtml(
                        t("complaintNotAssignedToYou")
                    )}
                </small>

            </div>

        `;
    }


    const location =
        [
            complaint?.village,
            complaint?.taluk,
            complaint?.district,
            complaint?.state
        ]
            .filter(Boolean)
            .join(", ");


    const hasGPS =
        complaint?.location?.latitude !== undefined &&
        complaint?.location?.longitude !== undefined;


    const mapsUrl =
        hasGPS
            ? `https://www.google.com/maps?q=${encodeURIComponent(
                `${complaint.location.latitude},${complaint.location.longitude}`
            )}`
            : "";


    return `

        <article
            class="official-complaint-card"
            data-complaint-id="${escapeHtml(
                complaintId
            )}"
        >

            <div class="complaint-card-header">

                <div>

                    <h3>
                        ${escapeHtml(
                            translateProblemValue(
                                complaint?.problem ||
                                ""
                            )
                        )}
                    </h3>


                    <p class="complaint-id">

                        ${escapeHtml(
                            t("complaintId")
                        )}:

                        <strong>
                            ${escapeHtml(
                                complaintId
                            )}
                        </strong>

                    </p>

                </div>


                <span
                    class="status-badge status-${escapeHtml(
                        getStatusClass(status)
                    )}"
                >
                    ${escapeHtml(
                        translateStatusValue(status)
                    )}
                </span>

            </div>


            <div class="complaint-card-body">

                <p>
                    <strong>
                        ${escapeHtml(
                            t("citizen")
                        )}:
                    </strong>

                    ${escapeHtml(
                        complaint?.citizen?.name ||
                        t("citizen")
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("email")
                        )}:
                    </strong>

                    ${escapeHtml(
                        complaint?.citizen?.email ||
                        "-"
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("problem")
                        )}:
                    </strong>

                    ${escapeHtml(
                        translateProblemValue(
                            complaint?.problem ||
                            ""
                        )
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("description")
                        )}:
                    </strong>

                    ${escapeHtml(
                        complaint?.description ||
                        "-"
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("location")
                        )}:
                    </strong>

                    ${escapeHtml(
                        location ||
                        "-"
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("currentLevel")
                        )}:
                    </strong>

                    ${escapeHtml(
                        translateLevelValue(
                            currentLevel
                        )
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("assignedTo")
                        )}:
                    </strong>

                    ${escapeHtml(
                        assignedName
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("adminVerification")
                        )}:
                    </strong>

                    ${escapeHtml(
                        translateVerificationValue(
                            complaint?.adminVerificationStatus ||
                            "Pending"
                        )
                    )}
                </p>


                <p>
                    <strong>
                        ${escapeHtml(
                            t("submitted")
                        )}:
                    </strong>

                    ${escapeHtml(
                        formatDate(
                            complaint?.createdAt
                        )
                    )}
                </p>


                ${
                    complaint?.assignedAt
                        ? `

                            <p>

                                <strong>
                                    ${escapeHtml(
                                        t("assignedAt")
                                    )}:
                                </strong>

                                ${escapeHtml(
                                    formatDate(
                                        complaint.assignedAt
                                    )
                                )}

                            </p>

                        `
                        : ""
                }


                ${
                    complaint?.deadlineAt
                        ? `

                            <p>

                                <strong>
                                    ${escapeHtml(
                                        t("deadline")
                                    )}:
                                </strong>

                                ${escapeHtml(
                                    formatDate(
                                        complaint.deadlineAt
                                    )
                                )}

                            </p>

                        `
                        : ""
                }


                ${
                    complaint?.remarks
                        ? `

                            <p>

                                <strong>
                                    ${escapeHtml(
                                        t("latestRemarks")
                                    )}:
                                </strong>

                                ${escapeHtml(
                                    complaint.remarks
                                )}

                            </p>

                        `
                        : ""
                }


                ${
    photoUrl
        ? `

            <p>

                <strong>
                    ${escapeHtml(
                        t("evidencePhoto")
                    )}:
                </strong>

                <button
                    type="button"
                    class="official-link-btn"
                    onclick="window.open(
                        '${escapeHtml(photoUrl)}',
                        '_blank'
                    )"
                >
                    ${escapeHtml(
                        t("viewPhoto")
                    )}
                </button>

            </p>

        `
        : ""
}


              ${
    hasGPS
        ? `

            <p>

                <strong>
                    ${escapeHtml(
                        t("gps")
                    )}:
                </strong>

                ${escapeHtml(
                    String(
                        complaint.location.latitude
                    )
                )},

                ${escapeHtml(
                    String(
                        complaint.location.longitude
                    )
                )}

                <br>

                <button
                    type="button"
                    class="official-link-btn"
                    onclick="window.open(
                        '${escapeHtml(mapsUrl)}',
                        '_blank'
                    )"
                >
                    ${escapeHtml(
                        t("openGoogleMaps")
                    )}
                </button>

            </p>

        `
        : ""
}

            </div>


            ${actionHtml}


            <div class="official-detail-action">

                <button
                    type="button"
                    data-official-action="view"
                    data-complaint-id="${escapeHtml(
                        complaintId
                    )}"
                >
                    ${escapeHtml(
                        t("viewFullDetails")
                    )}
                </button>

            </div>

        </article>

    `;
}
/* =========================================================
   63. ADMIN VERIFY / REJECT
========================================================= */
async function verifyComplaint(
    complaintId,
    action
) {

    if (!complaintId) {

        showNotice(
            translate(
                "complaintIdMissing"
            )
        );

        return;
    }


    if (
        normalizeRole(
            currentUser?.role
        ) !== "admin"
    ) {

        showNotice(
            translate(
                "onlyAdminCanVerify"
            )
        );

        return;
    }


    if (
        action !== "approve" &&
        action !== "reject"
    ) {

        showNotice(
            translate(
                "invalidVerificationAction"
            )
        );

        return;
    }


    let reason =
        "";


    if (
        action === "reject"
    ) {

        reason =
            window.prompt(
                translate(
                    "enterRejectionReason"
                )
            );


        if (
            reason === null
        ) {

            return;
        }


        reason =
            reason.trim();


        if (!reason) {

            showNotice(
                translate(
                    "rejectionReasonRequired"
                )
            );

            return;
        }
    }


    const confirmed =
        window.confirm(
            action === "approve"
                ? translate(
                    "approveComplaintConfirmation"
                )
                : translate(
                    "rejectComplaintConfirmation"
                )
        );


    if (!confirmed) {

        return;
    }


    try {

        const body =
            action === "approve"
                ? {
                    decision:
                        "approve"
                }
                : {
                    decision:
                        "reject",

                    reason:
                        reason
                };


        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/complaints/${encodeURIComponent(
                    complaintId
                )}/verify`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            body
                        )
                }
            );


        const result =
            await readBackendResponse(
                response
            );


        if (
            result.status === 401
        ) {

            clearSession();

            showView(
                "view-home"
            );

            showNotice(
                translate(
                    "loginSessionExpired"
                )
            );

            return;
        }


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate(
                        "unableToVerifyComplaint"
                    )
                )
            );
        }


        showNotice(
            action === "approve"
                ? translate(
                    "complaintApprovedAssignedGkm"
                )
                : translate(
                    "complaintRejectedSuccessfully"
                )
        );


        await loadOfficialDashboard();

    } catch (error) {

        console.error(
            "Verify complaint error:",
            error
        );


        showNotice(
            error?.message ||
            translate(
                "unableToUpdateComplaint"
            )
        );
    }
}


/* =========================================================
   64. DELETE COMPLAINT
========================================================= */

async function deleteComplaint(
    complaintId
) {

    if (!complaintId) {

        showNotice(
            translate("complaintIdMissing")
        );

        return;
    }


    if (
        normalizeRole(
            currentUser?.role
        ) !== "admin"
    ) {

        showNotice(
            translate("onlyAdminCanDeleteComplaints")
        );

        return;
    }


    const confirmed =
        window.confirm(
            translate("deleteComplaintConfirmation")
        );


    if (!confirmed) {

        return;
    }


    try {

        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/complaints/${encodeURIComponent(
                    complaintId
                )}`,
                {
                    method: "DELETE"
                }
            );


        const result =
            await readBackendResponse(
                response
            );


        if (
            result.status === 401
        ) {

            clearSession();

            showView(
                "view-home"
            );

            showNotice(
                translate("loginSessionExpired")
            );

            return;
        }


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate("unableToDeleteComplaint")
                )
            );
        }


        showNotice(
            translate("complaintDeletedSuccessfully")
        );


        await loadOfficialDashboard();

    } catch (error) {

        console.error(
            "Delete complaint error:",
            error
        );


        showNotice(
            error?.message ||
            translate("unableToDeleteComplaint")
        );
    }
}


/* =========================================================
   65. GET OFFICER REMARKS
========================================================= */

function getOfficerRemarks(
    complaintId
) {

    const field =
        document.querySelector(
            `.official-remarks[data-complaint-id="${CSS.escape(
                String(complaintId)
            )}"]`
        );


    return (
        field?.value?.trim() ||
        ""
    );
}

/* =========================================================
   66. OFFICER PROGRESS
========================================================= */

async function handleProgress(
    complaintId,
    status
) {

    if (!complaintId) {

        showNotice(
            translate("complaintIdMissing")
        );

        return;
    }


    const role =
        normalizeRole(
            currentUser?.role
        );


    if (
        ![
            "gkm",
            "pdo",
            "eo",
            "ceo"
        ].includes(role)
    ) {

        showNotice(
            translate(
                "notAuthorizedToUpdateComplaintProgress"
            )
        );

        return;
    }


    if (
        status !== "In Progress" &&
        status !== "Resolved"
    ) {

        showNotice(
            translate(
                "invalidComplaintStatus"
            )
        );

        return;
    }


    const remarks =
        getOfficerRemarks(
            complaintId
        );


    if (
        status === "Resolved" &&
        !remarks
    ) {

        showNotice(
            translate(
                "pleaseEnterResolutionRemarks"
            )
        );

        return;
    }


    const confirmed =
        window.confirm(
            status === "Resolved"
                ? translate(
                    "markComplaintAsResolved"
                )
                : translate(
                    "updateComplaintAsInProgress"
                )
        );


    if (!confirmed) {

        return;
    }


    try {

        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/complaints/${encodeURIComponent(
                    complaintId
                )}/progress`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            status,
                            remarks
                        })
                }
            );


        const result =
            await readBackendResponse(
                response
            );


        if (
            result.status === 401
        ) {

            clearSession();

            showView(
                "view-home"
            );

            showNotice(
                translate(
                    "loginSessionExpired"
                )
            );

            return;
        }


        if (!result.ok) {

            throw new Error(
                backendErrorMessage(
                    result,
                    translate(
                        "unableToUpdateComplaintProgress"
                    )
                )
            );
        }


        showNotice(
            result.data?.message ||
            translate(
                "complaintProgressUpdated"
            )
        );


        await loadOfficialDashboard();

    }
    catch (error) {

        console.error(
            "Complaint progress error:",
            error
        );

        showNotice(
            error?.message ||
            translate(
                "unableToUpdateComplaintProgress"
            )
        );
    }
}

/* =========================================================
   OFFICIAL BUTTON HANDLING
   DIRECT EVENT LISTENERS
========================================================= */
function bindOfficialComplaintButtons() {

    const container =
        $("officialComplaintsList");


    if (!container) {

        console.warn(
            "officialComplaintsList not found."
        );

        return;
    }


    const buttons =
        container.querySelectorAll(
            "[data-official-action]"
        );


    console.log(
        "Official buttons found:",
        buttons.length
    );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                async function(event) {

                    event.preventDefault();

                    event.stopPropagation();


                    const action =
                        this.dataset.officialAction;


                    const complaintId =
                        this.dataset.complaintId;


                    console.log(
                        "Official button clicked:",
                        action,
                        complaintId
                    );


                    if (!complaintId) {

                        showNotice(
                            translate(
                                "complaintIdMissing"
                            )
                        );

                        return;
                    }


                    /* =====================================
                       VIEW
                    ===================================== */

                    if (
                        action === "view"
                    ) {

                        await viewComplaintDetails(
                            complaintId
                        );

                        return;
                    }


                    /* =====================================
                       APPROVE
                    ===================================== */

                    if (
                        action === "approve"
                    ) {

                        this.disabled =
                            true;


                        try {

                            await verifyComplaint(
                                complaintId,
                                "approve"
                            );

                        } finally {

                            this.disabled =
                                false;
                        }


                        return;
                    }


                    /* =====================================
                       REJECT
                    ===================================== */

                    if (
                        action === "reject"
                    ) {

                        this.disabled =
                            true;


                        try {

                            await verifyComplaint(
                                complaintId,
                                "reject"
                            );

                        } finally {

                            this.disabled =
                                false;
                        }


                        return;
                    }


                    /* =====================================
                       DELETE
                    ===================================== */

                    if (
                        action === "delete"
                    ) {

                        this.disabled =
                            true;


                        try {

                            await deleteComplaint(
                                complaintId
                            );

                        } finally {

                            this.disabled =
                                false;
                        }


                        return;
                    }


                    /* =====================================
                       PROGRESS / RESOLVE
                    ===================================== */

                    if (
                        action === "progress"
                    ) {

                        const status =
                            this.dataset.status;


                        this.disabled =
                            true;


                        try {

                            await handleProgress(
                                complaintId,
                                status
                            );

                        } finally {

                            this.disabled =
                                false;
                        }


                        return;
                    }

                }
            );

        }
    );
}

/* =========================================================
   RENDER + BIND OFFICIAL BUTTONS
========================================================= */
function renderOfficialComplaints(
    complaints,
    role
) {

    const list =
        $("officialComplaintsList");


    if (!list) {

        console.warn(
            "officialComplaintsList not found."
        );

        return;
    }


    if (
        !Array.isArray(complaints) ||
        complaints.length === 0
    ) {

        const message =
            role === "admin"
                ? translate(
                    "noComplaintsCurrentlyAvailable"
                )
                : translate(
                    "noComplaintsAssignedToYou"
                );


        list.innerHTML = `

            <div class="empty-state">

                <h3>
                    ${translate(
                        "noComplaintsTitle"
                    )}
                </h3>

                <p>
                    ${escapeHtml(
                        message
                    )}
                </p>

            </div>

        `;

        return;
    }


    list.innerHTML =
        complaints
            .map(
                complaint =>
                    renderOfficialComplaintCard(
                        complaint,
                        role
                    )
            )
            .join("");


    /*
     * IMPORTANT:
     *
     * Cards were just created with innerHTML.
     * Now attach real click listeners to
     * every official button.
     */

    bindOfficialComplaintButtons();
}


/* =========================================================
   GLOBAL OFFICIAL FUNCTIONS
========================================================= */

window.renderOfficialComplaintCard =
    renderOfficialComplaintCard;


window.renderOfficialComplaints =
    renderOfficialComplaints;
/* =========================================================
   67. END OF PART 4
========================================================= */
/* =========================================================
   68. LOGOUT
========================================================= */

function performLogoutCleanup(
    showLogoutNotice = false
) {

    stopCamera();

    clearSession();

    closeAllModals();

    showView(
        "view-home"
    );


    /*
     * Clear dashboard contents so the next
     * logged-in user never sees old data.
     */

    if ($("complaintsList")) {

        $("complaintsList").innerHTML =
            "";
    }


    if ($("officialComplaintsList")) {

        $("officialComplaintsList").innerHTML =
            "";
    }


    if (showLogoutNotice) {

        showNotice(
            translate("loggedOut")
        );
    }
}


/* =========================================================
   CITIZEN LOGOUT
========================================================= */

function logout() {

    performLogoutCleanup(
        true
    );
}


/* =========================================================
   OFFICIAL LOGOUT
========================================================= */

function officialLogout() {

    performLogoutCleanup(
        true
    );
}


/* =========================================================
   LOGOUT AND RETURN HOME
========================================================= */

function logoutAndHome() {

    performLogoutCleanup(
        false
    );
}
/* =========================================================
   70. RESTORE SAVED SESSION
========================================================= */

function restoreSavedSession() {

    const token =
        getToken();


    const savedUser =
        localStorage.getItem(
            USER_KEY
        );


    if (!token) {

        currentUser = null;
        currentOfficialRole = null;

        return false;
    }


    if (savedUser) {

        try {

            currentUser =
                JSON.parse(
                    savedUser
                );

        } catch (error) {

            console.warn(
                "Saved user data is invalid."
            );

            currentUser = null;
        }
    }


    if (!currentUser) {

        clearSession();

        return false;
    }


    const role =
        normalizeRole(
            currentUser.role
        );


    if (role === "citizen") {

        updateCitizenProfile(
            currentUser
        );


        showView(
            "view-dashboard"
        );


        setTab(
            "citizen"
        );


        loadDashboard()
            .catch(
                error =>
                    console.error(
                        error
                    )
            );


        return true;
    }


    if (
        isOfficialRole(role)
    ) {

        currentOfficialRole =
            role;


        updateOfficialProfile(
            currentUser
        );


        showView(
            "view-official-dashboard"
        );


        setTab(
            "official"
        );


        loadOfficialDashboard()
            .catch(
                error =>
                    console.error(
                        error
                    )
            );


        return true;
    }


    clearSession();

    return false;
}


/* =========================================================
   71. VERIFY CURRENT SESSION
   GET /api/auth/me
========================================================= */

async function verifyCurrentSession() {

    const token =
        getToken();


    if (!token) {

        return null;
    }


    try {

        const response =
            await authenticatedFetch(
                `${BACKEND_URL}/api/auth/me`
            );


        const result =
            await readBackendResponse(
                response
            );


        if (
            !result.ok
        ) {

            clearSession();

            return null;
        }


        const user =
            result.data?.user ||
            result.data?.data ||
            result.data;


        if (!user) {

            clearSession();

            return null;
        }


        currentUser =
            user;


        localStorage.setItem(
            USER_KEY,
            JSON.stringify(
                user
            )
        );


        const role =
            normalizeRole(
                user.role
            );


        if (
            isOfficialRole(role)
        ) {

            currentOfficialRole =
                role;

            updateOfficialProfile(
                user
            );

        } else {

            currentOfficialRole =
                null;

            updateCitizenProfile(
                user
            );
        }


        return user;


    } catch (error) {

        console.warn(
            "Session verification failed:",
            error
        );


        /*
         * Do not immediately delete the token for
         * temporary network errors.
         *
         * The saved session can still be restored
         * when the backend becomes available.
         */
        return currentUser;
    }
}


/* =========================================================
   72. REFRESH CITIZEN DASHBOARD
========================================================= */

async function refreshCitizenDashboard() {

    if (
        normalizeRole(
            currentUser?.role
        ) !== "citizen"
    ) {

        return;
    }


    await loadDashboard();
}


/* =========================================================
   73. REFRESH OFFICIAL DASHBOARD
========================================================= */

async function refreshOfficialDashboard() {

    if (
        !isOfficialRole(
            currentUser?.role
        )
    ) {

        return;
    }


    await loadOfficialDashboard();
}


/* =========================================================
   74. CONTACT FORM
========================================================= */

/*
 * The current backend does not have a contact API route.
 *
 * Therefore this form is kept functional on the frontend
 * without pretending that the message was saved to MongoDB.
 */

async function submitContactForm(
    event
) {

    event?.preventDefault();


    const name =
        $("contactName")
            ?.value
            .trim() || "";


    const email =
        $("contactEmail")
            ?.value
            .trim() || "";


    const message =
        $("contactMessage")
            ?.value
            .trim() || "";


    const status =
        $("contactStatus");


    if (
        !name ||
        !email ||
        !message
    ) {

        setMessage(
            status,
            translate("pleaseFillContactFields"),
            "error"
        );

        return;
    }


    /*
     * No /api/contact endpoint currently exists
     * in the backend.
     */
    setMessage(
        status,
        translate("contactMessagePrepared"),
        "info"
    );


    $("contactForm")
        ?.reset();
}

/* =========================================================
   75. CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

function setupModalOutsideClick() {

    const modalIds = [
        "loginModal",
        "registerModal",
        "complaintModal",
        "officialLoginModal"
    ];


    modalIds.forEach(
        id => {

            const modal =
                $(id);


            if (!modal) {
                return;
            }


            modal.addEventListener(
                "click",
                event => {

                    /*
                     * Only close when the actual
                     * modal background was clicked.
                     */
                    if (
                        event.target ===
                        modal
                    ) {

                        closeModal(
                            id
                        );
                    }
                }
            );
        }
    );
}


/* =========================================================
   76. ESC KEY CLOSE MODALS
========================================================= */

function setupEscapeKey() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {

                return;
            }


            closeAllModals();
        }
    );
}


/* =========================================================
   77. COMPLAINT DESCRIPTION COUNTER
========================================================= */

function setupDescriptionCounter() {

    const textarea =
        $("c-description");


    if (!textarea) {
        return;
    }


    const maxLength =
        2000;


    const updateCounter =
        () => {

            const currentLength =
                textarea.value.length;


            let counter =
                $("descriptionCounter");


            /*
             * If the existing HTML does not have a
             * counter, do not change the dashboard.
             */
            if (!counter) {
                return;
            }


            counter.textContent =
                `${currentLength}/${maxLength}`;
        };


    textarea.maxLength =
        maxLength;


    textarea.addEventListener(
        "input",
        updateCounter
    );


    updateCounter();
}


/* =========================================================
   78. PHOTO PREVIEW CLEANUP
========================================================= */

function setupPhotoPreviewCleanup() {

    const preview =
        $("photoPreview");


    if (!preview) {
        return;
    }


    window.addEventListener(
        "beforeunload",
        () => {

            if (
                preview.src &&
                preview.src.startsWith(
                    "blob:"
                )
            ) {

                URL.revokeObjectURL(
                    preview.src
                );
            }


            stopCamera();
        }
    );
}


/* =========================================================
   79. NAVIGATION TO HOME
========================================================= */

function goHome() {

    closeAllModals();

    showView(
        "view-home"
    );
}


/* =========================================================
   80. NAVIGATION TO CITIZEN DASHBOARD
========================================================= */

async function goToCitizenDashboard() {

    if (!getToken()) {

        openLoginModal();

        return;
    }


    if (
        normalizeRole(
            currentUser?.role
        ) !== "citizen"
    ) {

        showNotice(
            translate("pleaseLoginCitizenAccount")
        );

        return;
    }


    showView(
        "view-dashboard"
    );


    setTab(
        "citizen"
    );


    await loadDashboard();
}

/* =========================================================
   81. NAVIGATION TO OFFICIAL DASHBOARD
========================================================= */

async function goToOfficialDashboard() {

    if (!getToken()) {

        openOfficialLoginModal();

        return;
    }


    if (
        !isOfficialRole(
            currentUser?.role
        )
    ) {

        openOfficialLoginModal();

        return;
    }


    currentOfficialRole =
        normalizeRole(
            currentUser.role
        );


    showView(
        "view-official-dashboard"
    );


    setTab(
        "official"
    );


    await loadOfficialDashboard();
}


/* =========================================================
   82. COMPLAINT ID COPY
========================================================= */

async function copyComplaintId(
    complaintId
) {

    if (!complaintId) {

        showNotice(
            translate("complaintIdNotAvailable")
        );

        return;
    }


    try {

        await navigator.clipboard.writeText(
            complaintId
        );


        showNotice(
            translate("complaintIdCopied")
        );


    } catch (error) {

        /*
         * Clipboard may be unavailable in
         * some browsers or insecure contexts.
         */
        showNotice(
            `${translate("complaintId")}: ${complaintId}`
        );
    }
}

/* =========================================================
   83. COMPLAINT SEARCH BY ID
========================================================= */

async function searchComplaintById() {

    const input =
        $("complaintSearchId");


    if (!input) {

        showNotice(
            translate("complaintSearchFieldUnavailable")
        );

        return;
    }


    const complaintId =
        input.value.trim();


    if (!complaintId) {

        showNotice(
            translate("enterComplaintId")
        );

        return;
    }


    await viewComplaintDetails(
        complaintId
    );
}
/* =========================================================
   84. DEADLINE STATUS
========================================================= */

function getDeadlineStatus(
    deadlineAt
) {

    if (!deadlineAt) {

        return {
            label: translate("noDeadline"),
            className: "deadline-none"
        };
    }


    const deadline =
        new Date(
            deadlineAt
        );


    if (
        Number.isNaN(
            deadline.getTime()
        )
    ) {

        return {
            label: translate("invalidDeadline"),
            className: "deadline-none"
        };
    }


    const now =
        new Date();


    const difference =
        deadline.getTime() -
        now.getTime();


    if (difference <= 0) {

        return {
            label: translate("deadlinePassed"),
            className: "deadline-overdue"
        };
    }


    const hours =
        Math.ceil(
            difference /
            (1000 * 60 * 60)
        );


    if (hours <= 24) {

        return {
            label:
                translate("hoursRemaining")
                    .replace(
                        "{count}",
                        hours
                    ),
            className: "deadline-warning"
        };
    }


    const days =
        Math.ceil(
            hours / 24
        );


    return {
        label:
            translate("daysRemaining")
                .replace(
                    "{count}",
                    days
                ),
        className: "deadline-normal"
    };
}

/* =========================================================
   85. FORMAT DEADLINE BADGE
========================================================= */

function renderDeadlineBadge(
    deadlineAt
) {

    if (!deadlineAt) {

        return "";
    }


    const deadline =
        getDeadlineStatus(
            deadlineAt
        );


    return `
        <span class="deadline-badge ${escapeHtml(
            deadline.className
        )}">
            ${escapeHtml(
                deadline.label
            )}
        </span>
    `;
}


/* =========================================================
   86. AUTO REFRESH TIMER
========================================================= */

let dashboardRefreshTimer =
    null;


function startDashboardRefresh() {

    stopDashboardRefresh();


    /*
     * Refresh every 60 seconds.
     *
     * This is only frontend refreshing.
     * Actual escalation is handled by the
     * backend scheduler.
     */
    dashboardRefreshTimer =
        setInterval(
            async () => {

                if (!getToken()) {
                    return;
                }


                const role =
                    normalizeRole(
                        currentUser?.role
                    );


                try {

                    if (
                        role === "citizen"
                    ) {

                        await loadDashboard();

                    } else if (
                        isOfficialRole(
                            role
                        )
                    ) {

                        await loadOfficialDashboard();
                    }

                } catch (error) {

                    console.warn(
                        "Dashboard refresh failed:",
                        error
                    );
                }

            },
            60000
        );
}


function stopDashboardRefresh() {

    if (
        dashboardRefreshTimer
    ) {

        clearInterval(
            dashboardRefreshTimer
        );

        dashboardRefreshTimer =
            null;
    }
}

/* =========================================================
   87. ONLINE / OFFLINE STATUS
========================================================= */

function setupNetworkStatus() {

    window.addEventListener(
        "offline",
        () => {

            showNotice(
                translate("offlineMessage")
            );
        }
    );


    window.addEventListener(
        "online",
        () => {

            showNotice(
                translate("internetRestored")
            );


            const role =
                normalizeRole(
                    currentUser?.role
                );


            if (
                role === "citizen"
            ) {

                loadDashboard();

            } else if (
                isOfficialRole(role)
            ) {

                loadOfficialDashboard();
            }
        }
    );
}
/* =========================================================
   88. FORM BUTTON STATE
========================================================= */

function restoreButtonText(
    button,
    text
) {

    if (!button) {
        return;
    }


    button.disabled = false;

    button.textContent =
        text;
}


function setupLoginForms() {

    const loginForm =
        $("loginForm");

    if (loginForm) {
        loginForm.addEventListener(
            "submit",
            loginCitizen
        );
    }


    const officialLoginForm =
        $("officialLoginForm");

    if (officialLoginForm) {
        officialLoginForm.addEventListener(
            "submit",
            loginOfficial
        );
    }


    const registerForm =
        $("registerForm");

    if (registerForm) {
        registerForm.addEventListener(
            "submit",
            registerCitizen
        );
    }


    const complaintForm =
        $("complaintForm");

    if (complaintForm) {
        complaintForm.addEventListener(
            "submit",
            submitComplaint
        );
    }


    const contactForm =
        $("contactForm");

    if (contactForm) {
        contactForm.addEventListener(
            "submit",
            submitContactForm
        );
    }


    // =====================================================
    // PUBLIC COMPLAINT TRACKING
    // =====================================================

    const trackingForm =
        $("complaintTrackingForm");

    if (trackingForm) {
        trackingForm.addEventListener(
            "submit",
            trackComplaintById
        );
    }

}
/* =========================================================
   89B. GLOBAL COMPLAINT LOCATION CONFIRMATION
========================================================= */

window.confirmComplaintLocation = function () {

    const info =
        $("locationInfo");

    const confirmButton =
        $("confirmLocationBtn");

    if (
        !complaintMarker ||
        selectedComplaintLat === null ||
        selectedComplaintLng === null
    ) {

        setMessage(
            info,
            translate("pleaseGetGpsLocationFirst"),
            "error"
        );

        return;
    }


    const markerPosition =
        complaintMarker.getLatLng();

    selectedComplaintLat =
        markerPosition.lat;

    selectedComplaintLng =
        markerPosition.lng;


    if (
        !Number.isFinite(selectedComplaintLat) ||
        !Number.isFinite(selectedComplaintLng)
    ) {

        setMessage(
            info,
            translate("invalidProblemLocation"),
            "error"
        );

        return;
    }


    currentLat =
        selectedComplaintLat;

    currentLng =
        selectedComplaintLng;

    locationConfirmed =
        true;


    setMessage(
        info,
        translate("problemLocationConfirmed")
            .replace(
                "{lat}",
                currentLat.toFixed(6)
            )
            .replace(
                "{lng}",
                currentLng.toFixed(6)
            ),
        "success"
    );


    complaintMarker
        .bindPopup(
            `<strong>${translate("confirmedProblemLocation")}</strong><br>` +
            translate("locationAttachedToComplaint")
        )
        .openPopup();


    if (confirmButton) {

        confirmButton.disabled =
            true;

        confirmButton.textContent =
            translate("locationConfirmed");
    }


    if (
        typeof displayFinalComplaintLocation ===
        "function"
    ) {

        displayFinalComplaintLocation();
    }
};
/* =========================================================
   90. BUTTON EVENT SETUP
========================================================= */

function setupButtons() {

    const loginButton =
        $("loginBtn");


    if (loginButton) {

        loginButton.addEventListener(
            "click",
            event => {

                /*
                 * The button may be type="button"
                 * in the existing dashboard.
                 */
                if (
                    loginButton.type ===
                    "button"
                ) {

                    event.preventDefault();

                    loginCitizen(
                        event
                    );
                }
            }
        );
    }


    const officialButton =
        $("adminLoginBtn");


    if (officialButton) {

        officialButton.addEventListener(
            "click",
            event => {

                if (
                    officialButton.type ===
                    "button"
                ) {

                    event.preventDefault();

                    loginOfficial(
                        event
                    );
                }
            }
        );
    }


    const registerButton =
        $("registerBtn");


    if (registerButton) {

        registerButton.addEventListener(
            "click",
            event => {

                if (
                    registerButton.type ===
                    "button"
                ) {

                    event.preventDefault();

                    registerCitizen(
                        event
                    );
                }
            }
        );
    }


    /*
     * -----------------------------------------------------
     * GPS LOCATION BUTTON
     * -----------------------------------------------------
     */

    const gpsButton =
        $("getLocationBtn");


    if (gpsButton) {

        gpsButton.addEventListener(
            "click",
            captureGPSLocation
        );
    }


    /*
     * -----------------------------------------------------
     * CONFIRM COMPLAINT LOCATION BUTTON
     * -----------------------------------------------------
     */

    const confirmLocationButton =
        $("confirmLocationBtn");


    if (confirmLocationButton) {

        confirmLocationButton.addEventListener(
            "click",
            confirmComplaintLocation
        );
    }


    /*
     * -----------------------------------------------------
     * CAMERA BUTTON
     * -----------------------------------------------------
     */

    const cameraButton =
        $("openCameraBtn");


    if (cameraButton) {

        cameraButton.addEventListener(
            "click",
            openCamera
        );
    }


    /*
     * -----------------------------------------------------
     * CAPTURE PHOTO BUTTON
     * -----------------------------------------------------
     */

    const captureButton =
        $("capturePhotoBtn");


    if (captureButton) {

        captureButton.addEventListener(
            "click",
            capturePhoto
        );
    }


    /*
     * -----------------------------------------------------
     * CLOSE CAMERA BUTTON
     * -----------------------------------------------------
     */

    const closeCameraButton =
        $("closeCameraBtn");


    if (closeCameraButton) {

        closeCameraButton.addEventListener(
            "click",
            closeCamera
        );
    }


    /*
     * -----------------------------------------------------
     * REMOVE PHOTO BUTTON
     * -----------------------------------------------------
     */

    const removePhotoButton =
        $("removePhotoBtn");


    if (removePhotoButton) {

        removePhotoButton.addEventListener(
            "click",
            removePhoto
        );
    }


    /*
     * -----------------------------------------------------
     * PHOTO INPUT
     * -----------------------------------------------------
     */

    const photoInput =
        $("photoInput");


    if (photoInput) {

        photoInput.addEventListener(
            "change",
            handlePhotoInputChange
        );
    }

}
/* =========================================================
   91. INITIALIZE APPLICATION
========================================================= */

async function initializeApplication() {

    console.log(
        "E-Panchayat frontend starting..."
    );


    console.log(
        "Backend:",
        BACKEND_URL
    );


    /*
     * IMPORTANT:
     *
     * Show the Home page immediately.
     *
     * This prevents a blank screen while
     * the saved-login/session verification
     * is being performed.
     */

    showView(
        "view-home"
    );


    /*
     * Start normal application setup.
     */

    setupMobileMenu();

    setupModalOutsideClick();

    setupEscapeKey();

    setupLoginForms();

    setupButtons();

    setupDescriptionCounter();

    setupPhotoPreviewCleanup();

    setupNetworkStatus();


    /*
     * Load public homepage complaint statistics.
     *
     * This does NOT require citizen login.
     *
     * It updates:
     *
     * statComplaints -> total registered complaints
     * statResolved   -> total resolved complaints
     */

    loadPublicComplaintStats();


    /*
     * Restore any saved login session.
     */

    const restored =
        restoreSavedSession();


    /*
     * No saved session.
     *
     * Home page is already visible.
     */

    if (!restored) {

        stopDashboardRefresh();


        console.log(
            "E-Panchayat frontend ready."
        );


        return;
    }


    /*
     * A saved session exists.
     *
     * Verify it with the backend.
     */

    try {

        const verifiedUser =
            await verifyCurrentSession();


        /*
         * Session could not be verified.
         *
         * Keep the citizen on Home page.
         */

        if (!verifiedUser) {

            showView(
                "view-home"
            );

            stopDashboardRefresh();


            console.log(
                "E-Panchayat frontend ready."
            );


            return;
        }


        /*
         * Determine the user's role.
         */

        const role =
            normalizeRole(
                verifiedUser.role
            );


        /*
         * Citizen session.
         */

        if (
            role === "citizen"
        ) {

            updateCitizenProfile(
                verifiedUser
            );


            showView(
                "view-dashboard"
            );


            setTab(
                "citizen"
            );


            await loadDashboard();

        }


        /*
         * Official session.
         */

        else if (
            isOfficialRole(role)
        ) {

            currentOfficialRole =
                role;


            updateOfficialProfile(
                verifiedUser
            );


            showView(
                "view-official-dashboard"
            );


            setTab(
                "official"
            );


            await loadOfficialDashboard();

        }


        /*
         * Unknown/invalid role.
         */

        else {

            clearSession();


            showView(
                "view-home"
            );
        }


        /*
         * Start dashboard refresh only
         * after the session has been verified.
         */

        startDashboardRefresh();


        console.log(
            "E-Panchayat frontend ready."
        );


    }
    catch (error) {

        /*
         * If backend/session verification
         * fails, do NOT leave the website blank.
         *
         * Return the user to Home.
         */

        console.error(
            "Session verification error:",
            error
        );


        clearSession();


        showView(
            "view-home"
        );


        stopDashboardRefresh();


        console.log(
            "E-Panchayat frontend ready."
        );
    }
}
/* =========================================================
   92. GLOBAL FUNCTIONS
========================================================= */

/*
 * Your existing index.html uses inline onclick=""
 * functions. These must be available globally.
 */

window.$ =
    $;


window.showView =
    showView;


window.openLoginModal =
    openLoginModal;


window.openRegisterModal =
    openRegisterModal;


window.openComplaintModal =
    openComplaintModal;

    window.openComplaintTrackingModal =
    openComplaintTrackingModal;

window.openOfficialLoginModal =
    openOfficialLoginModal;


window.switchToRegister =
    switchToRegister;


window.closeModal =
    closeModal;


window.closeAllModals =
    closeAllModals;


window.logout =
    logout;


window.logoutAndHome =
    logoutAndHome;


window.goHome =
    goHome;


window.goToCitizenDashboard =
    goToCitizenDashboard;


window.goToOfficialDashboard =
    goToOfficialDashboard;


window.loadDashboard =
    loadDashboard;


window.loadOfficialDashboard =
    loadOfficialDashboard;


window.refreshCitizenDashboard =
    refreshCitizenDashboard;


window.refreshOfficialDashboard =
    refreshOfficialDashboard;


window.setTab =
    setTab;


window.registerCitizen =
    registerCitizen;


window.loginCitizen =
    loginCitizen;


window.loginOfficial =
    loginOfficial;


window.submitComplaint =
    submitComplaint;


window.captureGPSLocation =
    captureGPSLocation;


window.openCamera =
    openCamera;


window.capturePhoto =
    capturePhoto;


window.closeCamera =
    closeCamera;


window.removePhoto =
    removePhoto;


window.verifyComplaint =
    verifyComplaint;


window.deleteComplaint =
    deleteComplaint;


window.handleProgress =
    handleProgress;


window.viewComplaintDetails =
    viewComplaintDetails;


window.searchComplaintById =
    searchComplaintById;


window.copyComplaintId =
    copyComplaintId;


window.showNotice =
    showNotice;


window.submitContactForm =
    submitContactForm;


/* =========================================================
   93. START APPLICATION
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApplication,
        {
            once: true
        }
    );

} else {

    initializeApplication();
}


/* =========================================================
   END OF E-PANCHAYAT SCRIPT
========================================================= */