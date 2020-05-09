const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This data is from 1st promise');
        //reject('Something went wrong!!!');
    }, 5000);
    
})

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This data is from the second promise');            
        }, 5000);
        
    });
}).then((data) => {
   
    console.log('Does this run ?',data);
})
.catch((error) => {
    console.log(error);
});

//Another way of consuming promise is as follows

// promise.then((data) => {
//     console.log(data);
// },(error) => {
//     console.log(error);
// });

console.log('after');