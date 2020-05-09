import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
    appId: process.env.FIREBASE_APP_ID,
  };

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//         .on('child_removed',(snapshot) => {
//             console.log(snapshot.key, snapshot.val());
//         })

// database.ref('expenses')
//         .on('child_changed',(snapshot) => {
//             console.log(snapshot.key, snapshot.val());
//         })

// database.ref('expenses')
//         .on('child_added',(snapshot) => {
//             console.log(snapshot.key,snapshot.val());
//         })

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'Medicines',
//         note: 'Paid for medicines',
//         amount: 450,
//         createdAt: 1574545112 
//     })
// },3500)


// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'JigarThanda',
//         note: 'Paid for Jigarthanda',
//         amount: 250,
//         createdAt: 65498744 
//     })
// },8000)
        
// // database.ref('expenses')
// //         .on('value',(snapshot) => {
// //             const expenses = [];
// //             snapshot.forEach((childSnapshot) => {
// //                 expenses.push({
// //                     id: childSnapshot.key,
// //                     ...childSnapshot.val()
// //                 })
// //             })

// //             console.log(expenses);
// //         })
        

// // database.ref('expenses')
// //         .once('value')
// //         .then((snapshot) => {
// //             // const value = snapshot.val();
// //             // console.log(value);
// //             const expenses = [];
// //             snapshot.forEach((childSnapshot) => {
// //                 const key = childSnapshot.key;
// //                 const value = childSnapshot.val();
// //                 // console.log('Key = ',key);
// //                 // console.log('Value = ',value);
// //                 expenses.push({
// //                     id: childSnapshot.key,
// //                     ...value
// //                 });
// //             })

// //             console.log(expenses);
// //         })
// //         .catch((e) => {
// //             console.log(e);
// //         })


// // database.ref('notes/-M6mezsQbhEZZcPK7Y2K')
// //         .once('value')
// //         .then((snapshot) => {
// //             const value = snapshot.val();
// //             console.log(value);
// //         })
// //         .catch((e) => {
// //             console.log(e);
// //         })

// // database.ref('notes').push({
// //     title:'Second Note',
// //     body:'Hello World'
// // })

// // database.ref('expenses').push({
// //     description: 'Telephone Bill',
// //     note: 'Paid Telephone Bill',
// //     amount: 361,
// //     createdAt: 1574112 
// // })

// // const notes = [{
// //     id:'12',
// //     title:'First Note',
// //     body:'This is my first note!'
// // },
// // {
// //     id:'761abr',
// //     title:'Another Note',
// //     body: 'This is my Second Note'
// // }]


// // database.ref('notes').set(notes);


// // database.ref('location/city')
// //         .once('value')
// //         .then((snapshot) => {
// //             const val = snapshot.val();
// //             console.log(val);
// //         })
// //         .catch((e) => {
// //             console.log('Error in Reading Data',e);
// //         })

// //Another way of Reading the data

// //This function will run once and will rerun 
// //every time the data changes
// //You are subscribing to the value event time
// // const onValueChange = database.ref().on('value',(snapshot) => {
// //     const value = snapshot.val();
// //     console.log(value);
// // },(e) => {
// //     console.log('Error in Fetching',e);
// // })

// // setTimeout(() => {
// //     database.ref('age').set(28);
// // },3500);

// // setTimeout(() => {
// //     //You are unsubscribing to the value event
// //     database.ref().off(onValueChange);
// // },7000);

// // setTimeout(() => {
// //     database.ref('age').set(34);
// // },10500);

// // const onValueChange = database.ref().on('value',(snapshot) => {
// //     const value = snapshot.val();    
// //     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// // },(e) =>{
// //     console.log('Error Fetching',e);
// // })

// // setTimeout(() => {
// //     database.ref().update({
// //         name: 'Divya',
// //         job:{
// //             title: 'Legal Associate',
// //             company: 'Reliance Industries Ltd'
// //         }
// //     })
// // },3500);

// // setTimeout(() => {
// //     database.ref().update({
// //         name: 'Subramaniam',
// //         job:{
// //             title: 'Lead Software Developer',
// //             company: 'Cimpress India Pvt Ltd'
// //         }
// //     })
// // },7000);


// // database.ref().set({
// //     name:'Subramaniam Ananthakrishnan',
// //     age:34,
// //     stressLevel:6,
// //     job: {
// //         title: 'Software Developer',
// //         company:'Google'
// //     },    
// //     location:{        
// //         city:'Mumbai',
// //         country:'India',        
// //     }
// // }).then(() => {
// //     console.log('Data is Saved');
// // }).catch((e) => {
// //     console.log('This is failed',e);
// // });

// // database.ref().update({
// //     stressLevel:9,
// //     'job/company':'Amazon',
// //     'location/city':'Seattle'
// // }).then((data) => {
// //     console.log(data);
// // }).catch((e) => {
// //     console.log(e);
// // })

// // database.ref('isSingle').remove().then(() => {
// //     console.log('Remove succeeded');
// // }).catch((e) => {
// //     console.log('Exception = ',e);
// // });


// //Removing data from database using set
// // database.ref('isSingle').set(null)
// //         .then(() => {
// //             console.log('Data is Removed Successfully');
// //         })
// //         .catch((e) => {
// //             console.log('Exception occured',e)
// //         })
