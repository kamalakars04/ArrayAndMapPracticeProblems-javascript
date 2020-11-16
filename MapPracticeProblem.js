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
console.log("Maximum repeated : "+ Array.from(DieNumberMap.keys())[5]);
console.log("Minimum repeated : "+ Array.from(DieNumberMap.keys())[0]);

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



