let duplicateArr: Array<number> = [1,1,11,1,2,2,2,4,4,4,4,4,4,5,6,7,8,9,10,10]; 

function checkduplicates(arr :Array<number>){
    let newArr:Array<number> = [];
    for(let i:number = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function ExactSort(arrOfNums:Array<number>){
    if(Array.isArray(arrOfNums)){
        return checkduplicates(arrOfNums.sort((a:number, b:number)=> a-b))
    }
}

let av: Array<number> = [6969, 2343, 12121, 67, 77744, 4744, 1, 2, 34, 5, 6, 6, 7, 7, 8, 9, 9, 10, 30, 38, 43 , 500]
console.log(ExactSort(duplicateArr));
console.log(ExactSort(av));



// a function that takes in two strings and compares the two strings
function compare(password: string, prev: string){
    if(!password.localeCompare(prev)){
        console.log('match');
    } else {
        console.log('no match');
    }
}

interface users {
    name: string,
    lastname: string,
    email: string,
    password: string,
    age: number,
    active: boolean
}

const user: users = {
    name: "brandon",
    lastname: "nolast",
    email: "b@gmail.com",
    password: "1234",
    age: 20,
    active: true
}

function initUsers(obj: users){
    return obj
}

enum track {
    LOCATION,
    MAP,
    STATE,
    ADDRESS,
    ROAD
}

const geoLocate = track.ROAD;




// let myname: string = 'brandon'

// console.log(compare('brandon', myname));


export {}