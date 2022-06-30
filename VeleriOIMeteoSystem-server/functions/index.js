const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var admin = require("firebase-admin");

var serviceAccount = require("./velerioimeteosystem-af6f1-firebase-adminsdk-wnb8t-e872f70179.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://velerioimeteosystem-af6f1.firebaseio.com"
});

const db = admin.firestore()
app.get('/getmeteostation', (request, response) => {
    let res = [];
    db.collection('meteoStation')
    .get()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    let document = {
    id: doc.id,
    data: doc.data()
    }
    res.push(document)
    })
    return response.send(res)
    })
    .catch ((error) => {
    return response.send("Error getting documents: ", error);
    })
   })
   app.listen(3000, () => {
    console.log("Server running on port 3000");
   });
   