document.getElementById('color').style.color='green';


document.getElementById('calculation').addEventListener('click',function(){

    // total income
const getIncomeAmount= document.getElementById('netIncome');
 const totalIncome=getIncomeAmount.value;


// get expenses value
 const getFoodAmount= document.getElementById('foodAmount');
 const amountGet=getFoodAmount.value;
 const getRentAmount= document.getElementById('rentAmount');
 const rentAmountGet=getRentAmount.value;
 const getClothAmount= document.getElementById('clothsAmount');
 const clothAmountGet=getFoodAmount.value;
     
 const total= parseFloat(amountGet) + parseFloat(rentAmountGet) + parseFloat(clothAmountGet);
 const balanceLeft=parseFloat(totalIncome) - total;
//  const balanceLeft=parseFloat(totalIncome) - total;
//  net expenses output
 const expenses=document.getElementById('netExpenses');
 expenses.innerText=total;

// //  balance amount output
    const balance=document.getElementById('netBalance');
    balance.innerText=balanceLeft;
    const savings= balance/20;
})

document.getElementById('totalSave').addEventListener('click',function(){
    const amountSaving=document.getElementById('inputTex');
    const totalTax= amountSaving.value ;
    const finalSaving=document.getElementById('savaingAmount');
    finalSaving.innerText=savings;
    
})