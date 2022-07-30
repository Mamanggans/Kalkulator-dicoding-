

// contoh prompt cuk 
// const firstName = prompt("Siapa nama depanmu?");
// const lastName = prompt("Siapa nama belakangmu?");
// const language = prompt("Bisa berbahasa apa?");
 
// const user = {
//    name: {
//        first: firstName,
//        last: lastName,
//    },
//    language: language
// };
 
// if (user.language === "English") {
//    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "French") {
//    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "Japanese") {
//    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
// } else {
//    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
// }
const calculator = {
   displayNumber: '0',
   operator: null, 
   firstNumber: null,// kita gunakan nilai null terlebih dahulu karena properti tersebut akan diberikan nilai ketika pengguna melakukan aksi.
   waitingForSecondNumber: false // merupakan kondisi di mana kalkulator sedang menunggu pengguna menentukkan angka kedua dalam melakukan perhitungan.
};

function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
   if (calculator.displayNumber === '0') {
       calculator.displayNumber = digit;
   } else {
       calculator.displayNumber += digit;
   }
}

function inverseNumber() {
   if (calculator.displayNumber === '0') {
       return;
   }
   calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
   if (!calculator.waitingForSecondNumber) {
       calculator.operator = operator;
       calculator.waitingForSecondNumber = true;
       calculator.firstNumber = calculator.displayNumber;
       calculator.displayNumber = '0';
   } else {
       alert('Operator sudah ditetapkan')
   }
}

// else if (calculator.operator === ``) {
//        firstNumber = displayNumber
//    }
//    calculator.operator = Operator
//    displayNumber = `0`

function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;

  }
  let result = 0;
   if (calculator.operator === `+`) {
         result = parseFloat(calculator.firstNumber) + parseFloat(calculator.displayNumber);
   } else if (calculator.operator === `-`){
         result = parseFloat(calculator.firstNumber) - parseFloat(calculator.displayNumber);
   } else if (calculator.operator === `x`){
         result = parseFloat(calculator.firstNumber) * parseFloat(calculator.displayNumber);
   }  else if (calculator.operator === `:`){
    result = parseFloat(calculator.firstNumber) / parseFloat(calculator.displayNumber);
} else {
    result = (parseFloat(calculator.firstNumber) / parseFloat(calculator.displayNumber)) * 100;
}
// else {
//     result = parseInt(calculator.firstNumber) % parseInt(calculator.displayNumber);
// }

     function inputDot(dot) {
        if(displayNumber.includes(`.`)){
            return
        }
        displayNumber += dot
     }

   // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
   const history = {
         firstNumber: calculator.firstNumber,
         secondNumber: calculator.displayNumber,
         operator: calculator.operator,
         result: result
   }
         putHistory(history);
         calculator.displayNumber = result;
         renderHistory();
         }
         



const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function (event) {

       // mendapatkan objek elemen yang diklik
       const target = event.target;

       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }

       if (target.classList.contains('negative')) {
           inverseNumber();
           updateDisplay();
           return;
       }

       if (target.classList.contains('equals')) {
           performCalculation();
           updateDisplay();
           return;
       }

       if (target.classList.contains('operator')) {
           handleOperator(target.innerText)
           return;
       }

       inputDigit(target.innerText);
       updateDisplay()
   });
}