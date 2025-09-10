let mydate = new Date()
console.log(mydate.toString().split("Sep"));
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let mycreatedate = new Date(25, 0, 2025)
//  let mycreatedate = new Date(2023, 0, 23)
//  let mycreatedate = new Date(2023, 0, 23, 5, 3)
 let mycreatedate = new Date("2023-01-14")

console.log(mycreatedate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})





