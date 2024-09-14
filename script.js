let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0]

console.log(userInput.value)
let button = document.querySelector('button');

button.addEventListener('click', calculateAge);

function calculateAge(){
    let dateOfBirth = new Date(userInput.value);

    let day1 = dateOfBirth.getDate();
    let month1 = dateOfBirth.getMonth() + 1;
    let year1 = dateOfBirth.getFullYear();

    let today = new Date();

    let day2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();
   

    let dayResult, monthResult, yearResult;

   yearResult = year2 - year1;

   if(month2 >= month1){
    monthResult = month2 - month1
   }else{
    monthResult = 12 + month1 - month2;
    yearResult--;
   }

   if(day2 >= day1){
    dayResult = day2 - day1
   }else{
    monthResult--;
    dayResult = getDaysInMonth(year1, month1) + day2 - day1;
   }
   
   if(monthResult<0){
       yearResult--;
       monthResult = 11;
    }
    
   return showResult(yearResult, monthResult, dayResult);
} 

function getDaysInMonth(year,month){
    return new Date(year, month, 0).getDate();
}

function showResult(year,month,day){
    let result = document.createElement('p');
    result.className = 'textResult';
    result.innerHTML = `You are ${year} years, ${month} months, and ${day} days old.`;
let divResult = document.querySelector('.container').appendChild(result);
}
