let origDogs = ["BullDog","Beagle","Labrodar"];
let cats = new Array("Americal curl","Bengal");
let birds = ["Falcons","Ducks","Flamingoes"];

let slicedDogs = origDogs.slice(1,3);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

let pushDog = dogs.push("Golden");
let popDog = dogs.pop();
dogs[dogs.length] = "Poddle";

dogs.splice(2,1,"pug","Boxer");

// practice Problem 1 Get max and min of 10 numbers
let numbers = [];
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
numbers.forEach(p => console.log(p));
let temp = 0;
for(let j = 0; j<10; j++)
{
    for(let i =0;i<10-j;i++)
    {
        if(numbers[i]<numbers[i+1])
        {
            temp = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp;
        }
    }
}
console.log("second maximum number is : "+numbers[1]+" second min number is "+numbers[numbers.length-2]);

// 2. Using array.sort to sort the array
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
numbers.forEach(p => console.log(p));
numbers.sort((a,b) => a-b);
console.log("second maximum number is : "+numbers[numbers.length-2]+" second min number is "+numbers[1]);

// 3. Store all the prime factors of a given number
// function to get all the factors
function primeFactorize(number)
{
    let factors=[];
    for(let k=2;k<=number/2;k++)
    {
        if(number%k===0 && isPrime(k) == true)
        {
            factors.push(k);
        }
    }
    console.log("Factors are : ");
    for(let j=0;j<factors.length;j++)
    {
        console.log(factors[j]+" ");
    }
}

// function to check for prime
let isPrime = function (number)
{ 
    for(let i=2;i<=number/2;i++)
    {
        if(number%i==0)
        {
            return false;
        }
    }
    return true;
}
primeFactorize(54);

// Get all the integers between 0 and 100 that have repititon of digits
console.log("Numbers with same digits are : ")
for(let i = 1; i<100;i++)
{
    let ones = i%10;
    let tens = (i - ones)/10;
    if(ones == tens)
    console.log(i);
}