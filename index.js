const label = document.querySelector('label');

const inputs = document. querySelectorAll('input');
const spans = document.querySelectorAll('h1 span')
// let year = document.querySelector("#year-info span");
// let month = document.querySelector("#month-info span");
// let day = document.querySelector("#day-info span");
let button = document.querySelector('button')
const errorMsg= document.querySelectorAll('.error');
 



const todayDate = new Date();
let currentDay = todayDate.getDate();
let currentMonth = todayDate.getMonth()+1;
let currentYear = todayDate.getFullYear();

const noOfMonths= [31, 28, 31,30,31,30,31,31, 30,31,30,31];

const calculateAge = ()=>{
    let y =currentDay - inputs[2].value
    let m =currentMonth - inputs[1].value;
    let d = currentDay - inputs[0].value;
   
    if(d < 0){
        m-=1;
        d += noOfMonths[Number(inputs[1].value)-1]
    }

    if(m < 0){
        y -= 1;
        m += 12
    }
    spans[2].innerHTML = d;
    spans[1].innerHTML =m;
    spans[0].innerHTML =y;

   
    validateInputs()
}


// validating age input
const validateInputs = ()=>{
    if(inputs[1].value){
        errorMsg[1].textContent= 'this field is reaquired'
    }

}

// submitting form
button.addEventListener('click', calculateAge)