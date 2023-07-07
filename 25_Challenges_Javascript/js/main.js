//challenge 1
function multiply(a, b){
    return a * b
   }
   //console.log(multiply(4,7))

//challenge 2
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
         break;
      case 3:
        name = 'Earth'
         break;
      case 4:
        name = 'Mars'
         break;
      case 5:
        name = 'Jupiter'
         break;
      case 6:
        name = 'Saturn'
         break;
      case 7:
        name = 'Uranus'
         break;
      case 8:
        name = 'Neptune'
         
    }
    
    return name;
  }
  //console.log(getPlanetName(6))


  //challenge 3
  function solution(str){
    return str.split('').reverse().join('')
    
  }
  //console.log(solution('Prajwal'))

  //challenge 4
  function getCount(str) {
    let vowelscount=0;
    const arr= str.split("");
    for(let i=0;i<arr.length;i++){
      switch(arr[i]){
          case 'a':
          vowelscount++;
          break;
          
          case 'e':
          vowelscount++;
          break;
          
          case 'i':
          vowelscount++;
          break;
          
          case 'o':
          vowelscount++;
          break;
          
          case 'u':
          vowelscount++;
          
      }
    }
    return vowelscount;
  }

  //challenge 6
  function greet(name){
  
    if(name === "Johnny"){
      
      return "Hello, my love!";
      }
    return "Hello, " + name + "!";
  }

  //challenge 7
  function isDivisible(n, x, y) {
    var result1=n/x;
   var result2=n/y;
   if(result1 % 1===0 && result2 %1===0){
     return true;
   }
   return false;
 }

 //challenge 8
 function makeNegative(num) {
  if(num<0){
    return num;
  }
  else{
    return num* -1;
  }
}

//challenge 9
class SmallestIntegerFinder {
  findSmallestInt(arrayofnumbers) {
    
    let smallnumber;
    for( let i=0;i<arrayofnumbers.length;i++){
      const arrnumber = arrayofnumbers[i];
      
      if(i===0){
        smallnumber=arrnumber;
      }
      if(arrnumber<smallnumber){
        smallnumber=arrnumber;
      }
    }
    return smallnumber;
  }
}

//challenge 10
var summation = function (num) {
  var sum=0;
  for(let i=0;i<=num;i++){
    sum=sum+i;
  }
  return sum;
}

//challenge 11
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  
  var count=marks.length;
  let sum=0;
  
  for(i=0;i<count;i++){
    sum=sum+marks[i];
  }
  const avg=sum/count;
  const roundeddown=Math.floor(avg);
  return roundeddown; 
}

//challenge 12
const rps = (p1, p2) => {
  
  if(p1===p2) return "Draw!";
    var rules={ rock:"scissors", paper:"rock", scissors:"paper"};
    if(p2===rules[p1]){
      return "Player 1 won!";
    }
    else{
       return "Player 2 won!";
    }
     
};

//challenge 13
function removeChar(str){
  var length=str.length;
   return str.substr(1, length-2);
 
 };

//challenge 14
function positiveSum(arr) {
  let sum=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
      sum=sum+arr[i];
    }
  }
  return sum;
}

//challenge 15
function basicOp(operation, value1, value2)

{
  let result;
  switch(operation){
      case'+':
      result=value1+value2;
      break;
      case'-':
      result=value1-value2;
      break;
      case'*':
      result=value1*value2;
      break;
      case'/':
      result=value1/value2;
     
      
  }
  return result;
}

//challenge 16
function repeatStr (n, s) {
  
  let startstring='';
  for(let i=0;i<n;i++){
    startstring=startstring+s;
  }
  return startstring;
}

//challenge 17
function stringToArray(string){

	return string.split(" ")

}

//challenge 18
function noSpace(str){
  const arr=str.split(" ");
  let newarray=[];
  
  for(let i=0;i<arr.length;i++){
    const trimmedstring=arr[i].trim();
    newarray.push(trimmedstring);
  }
  const finalstring=newarray.join("");
  return finalstring;
}

//challenge 19
function maps(arr){
  const result=arr.map((arrItem)=>{
    return arrItem*2;
  });
  return result;
}

//challenge 20
function hero(bullets, dragons){
  return result =bullets/dragons>=2?true:false;
  
  }

//challenge 21
function arrayPlusArray(arr1, arr2) {
  
  var sum=0;
  for(let i=0;i<arr1.length;i++)
     {
    var arrvalue1=arr1[i];
       var arrvalue2=arr2[i];
     var  addedvalue=arrvalue1+arrvalue2;
       sum=sum+addedvalue;
  }
  return sum; //something went wrong
}

//challenge 23
function century(year) {
  // Finish this :)
  return Math.ceil(year/100);
}

//challenge 24
var humanYearsCatYearsDogYears = function(humanYears) {
  if(humanYears===1){
    return[humanYears,15, 15]
  }
  if(humanYears===2){
    return[humanYears,24, 24]
  }
  var excessyears=humanYears -2;
  var catyear=excessyears*4;
  var dogyear=excessyears*5;
  return [humanYears,24+catyear,24+dogyear];
}

//challenge 25
function points(gamesArray) {
  let totalPoints=0;
  for(let i=0;i<gamesArray.length;i++){
    
    var value=gamesArray[i];
    
    const parts=value.split(":");
    
    const x=parts[0];
    const y=parts[1];
    
    if(x>y){
      totalPoints= totalPoints+3;
      
    }else if(x===y){
      totalPoints+=1;
    }
  }
  return totalPoints;
}


 
  
   
    
