var config = {
    apiKey: "AIzaSyD8hrEitkuZ0MJDYzRuXrg_4QB01JZhGyg",
    authDomain: "test-95fae.firebaseapp.com",
    databaseURL: "https://test-95fae.firebaseio.com",
    projectId: "test-95fae",
    storageBucket: "test-95fae.appspot.com",
    messagingSenderId: "94223516871",
    appId: "1:94223516871:web:39666bbb1ef83994d1eae2"
  };
  firebase.initializeApp(config);

  //create firebase references
  var Auth = firebase.auth(); 
  var dbRef = firebase.database

  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
   
    if( $('#loginEmail').val() != '' && $('#loginPassword').val() != '' ){
      //login the user
      var data = {
        email: $('#email').val(),
        password: $('#password').val()
      };
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(function(authData) {
            console.log(authData._lat);
            window.location.replace("dashboard");
        })
        .catch(function(error) {
            alert(error);
        });
    }
  });

