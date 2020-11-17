// Roll a die 
let DieMap = new Map();
let chanceNumber = 0;
let DieNumberMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
while(!checkDictionary())
{
    let dieNumber = Math.floor(Math.random()*100)%7;
    if(dieNumber > 0)
    {
        chanceNumber++
        DieMap.set(chanceNumber,dieNumber);
        DieNumberMap.set(dieNumber,DieNumberMap.get(dieNumber) + 1) ;
    }
}
const mapSort = new Map([...DieNumberMap.entries()].sort((a, b) => a[1] - b[1]));
console.log("Total no of chances are : "+DieMap.size);
console.log("Maximum repeated : "+ Array.from(mapSort.keys())[5]);
console.log("Minimum repeated : "+ Array.from(mapSort.keys())[0]);

function checkDictionary()
{
    let counter = 0;
    for(i=1;i<=6;i++)
    {
        counter = 0;
        for([key,value] of DieMap)
        {
            if(value == i)
            counter++
        }

        if(counter == 10)
            break;
    }
    if(counter == 10)
    return true;
    return false;
}

// Individual birthday
let birthMonthMap = new Map();
for(i=0;i<50;i++)
{
    let birthMonth = Math.ceil(Math.random()*100)%12;
    if(birthMonth > 0)
    {
        if(birthMonthMap.has(birthMonth))
        birthMonthMap.get(birthMonth).push(i);
    
        else
        {
            let x = new Array();
            birthMonthMap.set(birthMonth,new Array());
            birthMonthMap.get(birthMonth).push(i);
        }
    }
}
let mapSort1 = new Map([...birthMonthMap.entries()].sort((a,b) => a[0]-b[0]));
for([key,value] of mapSort1)
{
    console.log("Induvidual id for persons with birthMonth "+key+" is "+value);
}




