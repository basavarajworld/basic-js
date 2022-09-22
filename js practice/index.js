
function double(x){
    return x*2;
}
const arr=[1,2,4,5,6]
const output=arr.map(double)
console.log(output)
const bin=arr.map(function(x){
    return x.toString(2)
})
console.log(bin)

//filter
const filt=arr.filter(function(x){
    return x%2===0; //x%2 for odd numbers
})
console.log(filt)

//using reduce
const sis=[
    { fname:"basavaraj",lname:"NM",age:21},
    { fname:"msr",lname:"it",age:23},
    { fname:"basava",lname:"M",age:21},
    { fname:"raj",lname:"N",age:24},
    { fname:"basu",lname:"NM",age:31}
]
const value=sis.reduce(function(acc,curr){
      if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age]
      }
      else{
        acc[curr.age]=1
      }
      return acc;

},{}) 
console.log(value)

//map
const ageless=sis.filter((x)=> x.age<23).map((x)=>x.fname)
console.log(ageless)

//settimeout
function set(){
     var i=0;
     setTimeout(function(){
      console.log(i)
     })
     console.log("namaste")
}
set();

//closure in js
function outer(){
  let a=10
  function inner(){
    console.log(a)
  }
  return inner;
}
outer()();