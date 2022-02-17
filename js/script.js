// document.getElementById('color').style.color='green';
// let balanceLeft;
// document.getElementById('calculation').addEventListener('click',function(){
//     // total income
//     let netIncome =  document.getElementById("income").value;
//     const totalIncome=netIncome.value;

//        //  error handling part
//     if(isNaN(netIncome)|| netIncome<0){
//         netIncome.value='';
//         return alert('Please input valid amount !')
//     }
    
//     // get expenses value
//     const getFoodAmount = document.getElementById('foodAmount');
//     const foodAmountGet=getFoodAmount.value;
//     const getRentAmount= document.getElementById('rentAmount');
//     const rentAmountGet=getRentAmount.value;
//     const getClothAmount= document.getElementById('clothsAmount');
//     const clothAmountGet=getClothAmount.value;
//         // calculation for expenses and balence 
//     const total = parseFloat(foodAmountGet) + parseFloat(rentAmountGet) + parseFloat(clothAmountGet);
//     balanceLeft = parseFloat(netIncome) - total;
   
//     //  net expenses output
//     const expenses=document.getElementById('netExpenses');
       
//     expenses.innerText=total;

//     // balance amount output
//     const balance=document.getElementById('netBalance')
//     balance.innerText= balanceLeft;
 
   

// })
// // saving amount and remaing balence part
// function handleOnClick(event){
//           // Saving amount
//     let netIncome =  document.getElementById("income").value;
//     let totalSaving =  document.getElementById("savings").value;
//     let savings = (netIncome * totalSaving) / 100;
//        // Get the remainning Ballence
//     let savingAmount = document.getElementById("savaingAmount");
   
//     savingAmount.innerText = savings;
//     let remainBalance = document.getElementById("remainBalance");
    
//     remainBalance.innerText = (balanceLeft - savings);
// }



// heading style by id
document.getElementById('heading').style.color='green';
function subAmount(number1,number2){
    let totalSub  = number1 - number2;
    return totalSub;
}
function totalPercent(amount,percent){
   var percentSubTotal = amount *(percent/100);
   return percentSubTotal;
    
}
// error handling start
function show(){
    document.getElementById('lessAmount').style.display = 'block';
}
function hide(){
    document.getElementById('lessAmount').style.display = 'none';
}

function error2show(){
    document.getElementById('saving').style.display = 'block';
}
function error2Hide(){
    document.getElementById('saving').style.display = 'none';
}

  
// form calculation start here
document.getElementById('calculate-button').addEventListener('click',function(){
    // get income input field and value 
    const incomeField = document.getElementById('income-field');
    const incomeAmount = parseFloat(incomeField.value);
    // user input the value
    const foodField = document.getElementById('food-field');
    const foodAmount =parseFloat(foodField.value);
    const rentField = document.getElementById('rent-field');
    const rentAmount = parseFloat(rentField.value);
    const clothesField = document.getElementById('clothes-field');
    const clothesAmount = parseFloat(clothesField.value);
    // expenses showing
    const expensesField = document.getElementById('total-expenses');
    const balanceField = document.getElementById('balance');

    // calculate button error handle 
    if(incomeAmount>=0 && foodAmount>=0 && rentAmount>=0 && clothesAmount>=0){
        // total expenses calculate here
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        expensesField.innerText = totalExpenses;
        error2Hide();

        // error handle 
        if(incomeAmount>totalExpenses){
        
            const balance =subAmount(incomeAmount,totalExpenses);
            balanceField.innerText = balance;
            hide();
        }
        else{
            error2show();
            hide();
        }        
    }
    else{
        show();
        error2Hide();
        expensesField.innerText='00';
        balanceField.innerText='00';
    }
    
})
// save button action form 
document.getElementById('save-button').addEventListener('click',function(){
    //get income 
    const incomeAmount = document.getElementById('income-field').value;
    //get balence
    const afterExpensesBalance =parseFloat(document.getElementById('balance').innerText);
    // save input field part
    const saveInputField = document.getElementById('save-input-field');
    const savePercentageValue = parseFloat(saveInputField.value);

    // result of savings amount and remainging field
    const savingsField = document.getElementById('savings-amount');
    const remaingingField = document.getElementById('remaining-balance');
    if(savePercentageValue>=0){

        // out of calculation 
        const savingsAmount = totalPercent(incomeAmount,savePercentageValue);
        savingsField.innerText= savingsAmount;
            if( afterExpensesBalance < savingsAmount){
                error2show();
                hide(); 
            }
            else{   
                const remaingingbalance =subAmount(afterExpensesBalance,savingsAmount);
                remaingingField.innerText = remaingingbalance;
                hide(); 
            }    
    }
    else{
        show();
       error2Hide();
    }    
})
