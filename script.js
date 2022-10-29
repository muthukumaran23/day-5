//1. Do the below programs in anonymous function & IIFE:

//Anonymous function:Print odd numbers in an array:
     
var arr;
var temp=[];
var res=function(arr){
for(let i=0;i<arr.length;i++){
if(arr[i]%2!=0){
temp.push(arr[i])
}
}
 return temp
}
 console.log(res([10,11,12,13,14,15]));      
//Output:[11,13,15]


//IFFE function: Print odd numbers
   
  (function odd(arr){
   var temp=[];
   for(let i=0;i<arr.length;i++){
   if(arr[i]%2!=0){
   temp.push(arr[i])
 }
 }       console.log(temp);
 })   ([10,11,12,13,14,15])
 // Output:[11,13,15]


//Convert all the strings to title caps in a string array:
//Anonymous function: Convert string in to title caps
 
  var res=function(arr){
  var temp= arr.split(" ")
  for(let i=0;i<temp.length;i++){
  temp[i]=temp[i].charAt(0).toUpperCase()+temp[i].slice(1)
  }
      return temp.join(" ")
  }
      console.log(res("i am muthukumaran"));
   //Output: I Am Muthukumaran


//IFFE function: Convert all strings in to title caps
 
  (function foo(arr){
   var temp=arr.split(" ")
   for(let i=0;i<temp.length;i++){
   temp[i]=temp[i].charAt(0).toUpperCase()+temp[i].slice(1)
   var res=temp.join(" ")
  }
   console.log(res)
  }) ("i am muthukumaran");
  //Output: I Am Muthukumaran


// Sum of all numbers in an array:
// Anonymous function: Print total sum
  
  var sum=0;
  var total=function(arr){
  for(let i=0;i<arr.length;i++){
  sum=sum+arr[i]
  }   
   return(sum);
  }
  console.log(total([10,11,12,13,14,15]));
 //Output:75


//IFFE function: Print total sum
 
  (function foo(arr){
      var sum=0;
      for(let i=0;i<arr.length;i++){
      sum=sum+arr[i]
    }
       console.log(sum)
 }) ([10,11,12,13,14,15])           
//Output:75


//Return all the prime numbers in an array

let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]  
let resultPrimeArray = (function (arrayNumber) {  
return (arrayNumber.filter((item) => {  
  for (let i = 2; i < item; i++) {           
  if (item % i === 0)               
  return false        
}  
  return true  
})) }) (arrayNumber);  
console.log("Prime numbers in an array: " + resultPrimeArray) ; 

//Output: Prime numbers in an array :1,2,3,5,7,11,13


//Return all the palindromes in an array:
//Anonymous function: Print palindromes in an array

 var temp=[]
 var res=function(num){
 for(let i=0;i<num.length;i++){
 var arr=num[i].split("").reverse().join("")
 if(num[i]===arr){
 temp.push(arr)
 }
 }
  return temp
 }
console.log(res(["madam","apple","txt"]))
//Output:[“madam”,”txt”]

//IFFE function: Print Palindromes in an array
  
  (function(num){
   var temp=[]
   for(let i=0;i<num.length;i++){
   var arr=num[i].split("").reverse().join("")
   if(num[i]===arr){
  temp.push(arr)
 }
 }
 console.log(temp)
}) (["madam","apple","txt"]);
 //Output:[“madam”,”txt”]
 
//Return median of two sorted arrays of the same size:
//By use Anonymous function:

 var arr1=[1,12,15,26,38];
 var arr2=[2,13,17,30];

 var median=function(arr1,arr2){
 var arr3=[...arr1,...arr2]
 var res=arr3.sort((a,b)=>(a-b))

 if(res.length%2!=0){
 var result=res[Math.floor(arr3.length/2)]
 console.log(result);
}
 else{
 var result=Math.floor((res[arr3.length/2]+res[arr3.length/2-1])/2)
 console.log(result);
}
}
median(arr1,arr2);
//Output:15


//By use IIFE: 
 var arr1=[1,12,15,26,38];
 var arr2=[2,13,17,30];
 
 (function foo(arr1,arr2){
   var arr3=[...arr1,...arr2]
   var res=arr3.sort((a,b)=>(a-b))
  
  if(res.length%2!=0){
    var result=res[Math.floor(arr3.length/2)]
    console.log(result);
  }
  else{
    var result=Math.floor((res[arr3.length/2]+res[arr3.length/2-1])/2)
    console.log(result);
  }
 })
 (arr1,arr2);

//Output:15


// Remove duplicates from an array:
// Anonymous function: Remove duplicates from an array
  
    var res=function(arr){
    return[...new Set(arr)]
   }
   console.log(res(["apple","orange","mango","orange","banana","apple"]));
 
 //Output:[“apple”,”orange”,”mango”,”banana”]
 

//IFFE function: Remove duplicates from an array
  
   (function foo(arr){
       
   console.log([...new Set(arr)]);
    
  })(["apple","orange","mango","orange","banana","apple"]);
     
//Output:[“apple”,”orange”,”mango”,”banana”]


// Anonymous function: Rotate an array by K-times
  
  var res = function(arr, k) {  
  for (let i = 0; i < k; i++) {        
     let temp = arr.shift()        
     arr.push(temp)     
  }    	
     return arr
  }
    console.log(res([0, 1, 5, 6, 7, 9],3));
  //Output;[6,7,9,0,1,5]

  
//IFFE function: Rotate an array by K-times
  
  (function foo(arr, k) {  
    for (let i = 0; i < k; i++) {        
    let temp = arr.shift()        
    arr.push(temp)     
  }    
   console.log(arr)
}) ([0, 1, 5, 6, 7, 9],3);
 //Output:[6,7,9,0,1,5]

// 2.Do the below programs in arrow functions.
 
//Print odd numbers in an array:
//Arrow function: Print Odd Numbers
 var arr;
 var temp=[];
 var res=(arr)=>{
 for(let i=0;i<arr.length;i++){
   if(arr[i]%2!=0){
   temp.push(arr[i]);
   }
   }
  return temp
 } 
  console.log(res([10,11,12,13,14,15]))
//Output:[11,13,15]


//Convert all the strings to title caps in a string array:
//Arrow function: Convert all strings in to title caps

 var res=(arr)=>{
 var temp= arr.split(" ")
 for(let i=0;i<temp.length;i++){
 temp[i]=temp[i].charAt(0).toUpperCase()+temp[i].slice(1)
 }
  return temp.join(" ")
 }
 console.log(res("i am muthukumaran"))

//Output;I Am Muthukumaran


//Sum of all numbers in an array:
//Arrow function: Print total sum

  var sum=0;
  var res=(a)=>{
  for(let i=0;i<a.length;i++){
  sum=sum+a[i]
  }
  return sum;
} 
  console.log(res([10,11,12,13,14,15]));
  //Output:75


//Return all the palindromes in an array:
//Arrow function: Print Palindromes in an array
  
  var temp=[]; 
  var res=(num)=>{
  for(let i=0;i<num.length;i++){
  var arr=num[i].split("").reverse().join("")
      if(num[i]===arr){
      temp.push(arr)
      }
   }
  return temp
  }
  console.log(res(["madam","apple","txt"]));
          
  //Output:[“madam”,”txt”]
         


 

       


         