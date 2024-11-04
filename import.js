const mywork = require('./export.js')
let me = mywork.myData;
me.forEach(element => {
    console.log(`my name is ${element.name} ${element.surname}`);
    
});
// console.log(mywork);


