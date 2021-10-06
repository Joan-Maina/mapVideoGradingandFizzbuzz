const score = (Grading) =>{
    if(Grading <= 30 && Grading > 25){
       console.log('A');
   }else if( Grading <= 25 && Grading > 20){
       console.log('B')
   }
   else if(Grading <= 20 && Grading > 15){
       console.log('C');
   }
   else if(Grading <= 15 && Grading > 10){
       console.log('D')
   }
   else if(Grading <= 10 && Grading > 5){
       console.log('E');
   }
   else if(Grading <= 5 && Grading >= 0){
       console.log('F');
   }else{
       console.log('Input appropriate marks');
   } 
}
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout

});

rl.question(">>Enter your score  ", (answer)=>{
   score(answer);
   rl.close();
} 
 //  console.log("you scored" + Grading);
   
);
//var marks = readline();
