//a function Checking if the arguement is a prime number
function isPrime(inputNumber){
    let i = 1;
    let factors=[]
         
     while(inputNumber>=i) {
         if(inputNumber % i ===0) {
             factors.push(i)
         }
         i++;
     }
    if(factors.length===2){
         return true
    } else {
         return false
    }
}
// calling isPrime function
console.log(isPrime(7), 'Prime number')

// a function Checking if the arguement is a palindrone
const pal = 'Palindrone'
function isPalindrone(inputString) {
 let firstHalf = inputString.slice(0,inputString.length/2)
 let secondHalf = inputString.slice(inputString.length/2)
 let reversedString = '';
 for(let i = secondHalf.length-1;i>=0;i--) {
     reversedString += secondHalf[i];
 }
 if(firstHalf===reversedString) {
     return true
 } else {
     return false
 }
}
console.log(isPalindrone('123443215'), pal);


function moveZeros(nums) {
 if(nums.length>=1 && nums.length<=104) {
     nums.sort((a, b) => a-b);
     for(let i = 0; i <nums.length;i++) {
         if(nums[i]>=(-231) && nums[i]<=(231-1)) {
             if(nums[i] === 0) {
                 let zero = nums[i];
                 nums.push(nums[i]) 
                 nums.splice(i,1);  
                 nums.forEach((element,index) => {
                     if(element===0) {
                         nums.push(element)
                         nums.splice(index,1)
                         
                     }
                 });   
             }
         } else {
             nums=[];
             return 'there is invalid element'
         }
     }
 } else {
     nums =[];
     return 'Invalid length'
 }
 return nums;
}
console.log(moveZeros([0,0,0,0,1,0,3,12]), 'move zeros to the end');

function sortedSquaredArray(array) {
 let arr2 =[];
 array.sort((a,b) => a-b);
 array.forEach((element => {
    arr2.push(element*element) 
    arr2.sort((a,b) => a-b);
 }));
 return arr2
}
console.log(sortedSquaredArray([-4,-3,2,-5,1]), 'square');

function bonusFun(prop) {
 return `My name is ${prop.firstName}, I am a ${prop.collegeName} 
and I can't wait to start at ICA.`;
}
console.log(bonusFun({
 firstName: 'Mahasele',
 collegeName: 'Botho University',
}));