var inputDataPlanner;

// Initialize Firebase
var config = {    
    apiKey: "AIzaSyDQy8-ccco8YnSTZwnFdYvBUsqI7Mbi1Ww",    
    authDomain: "test-log-in-page.firebaseapp.com",    
    databaseURL: "https://test-log-in-page.firebaseio.com",    
    projectId: "test-log-in-page",    storageBucket: "test-log-in-page.appspot.com",    
    messagingSenderId: "776948577191"
};

firebase.initializeApp(config);

var database = firebase.database();

function saveData(value){
    
    var ref = database.ref('application-data');
    
    inputDataPlanner = value;
    
    console.log(value);
    
    var data = {
        subject: inputDataPlanner,
        assignment: 'PLACEHOLDER 2'
    }
    
    ref.push(data);
    
}