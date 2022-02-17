document.getElementById('color').style.color='green';
let balanceLeft;

document.getElementById('calculation').addEventListener('click',function(){
    // total income
    // const getIncomeAmount= document.getElementById('netIncome');
    let netIncome =  document.getElementById("income").value;
    const totalIncome=netIncome.value;


    // get expenses value
    const getFoodAmount = document.getElementById('foodAmount');
    const amountGet=getFoodAmount.value;
    const getRentAmount= document.getElementById('rentAmount');
    const rentAmountGet=getRentAmount.value;
    const getClothAmount= document.getElementById('clothsAmount');
    const clothAmountGet=getClothAmount.value;
        
    const total = parseFloat(amountGet) + parseFloat(rentAmountGet) + parseFloat(clothAmountGet);
    balanceLeft = parseFloat(netIncome) - total;
    //  const balanceLeft=parseFloat(totalIncome) - total;
    //  net expenses output
    const expenses=document.getElementById('netExpenses');
    expenses.innerText=total;

    // //  balance amount output
    const balance=document.getElementById('netBalance');
    balance.innerText= balanceLeft;
 

})

function handleOnClick(event){
    let netIncome =  document.getElementById("income").value;
    let y =  document.getElementById("savings").value;
    let savings = (netIncome * y) / 100;
    let savingAmount = document.getElementById("savaingAmount")
    savingAmount.innerText = savings
    let remainBalance = document.getElementById("remainBalance")
    remainBalance.innerText = (balanceLeft - savings)


}


