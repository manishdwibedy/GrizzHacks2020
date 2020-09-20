var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require(".\\serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://grizzhacks2020.firebaseio.com"
});

var db = admin.database();
d85bafb1562f4bc1a592c0fd8da94ade646aed5c
module.exports = db;