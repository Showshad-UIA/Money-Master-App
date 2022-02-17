document.getElementById('color').style.color='green';
let balanceLeft;
document.getElementById('calculation').addEventListener('click',function(){
    // total income
    let netIncome =  document.getElementById("income").value;
    const totalIncome=netIncome.value;

       //  error handling part
    if(isNaN(netIncome)|| netIncome<0){
        netIncome.value='';
        return alert('Please input valid amount of money!')
    }
    // get expenses value
    const getFoodAmount = document.getElementById('foodAmount');
    const amountGet=getFoodAmount.value;
    const getRentAmount= document.getElementById('rentAmount');
    const rentAmountGet=getRentAmount.value;
    const getClothAmount= document.getElementById('clothsAmount');
    const clothAmountGet=getClothAmount.value;
 
        // calculation for expenses and balence 
    const total = parseFloat(amountGet) + parseFloat(rentAmountGet) + parseFloat(clothAmountGet);
    balanceLeft = parseFloat(netIncome) - total;
   
    //  net expenses output
    const expenses=document.getElementById('netExpenses');
       // error handling part
       
    expenses.innerText=total;

    // //  balance amount output
    const balance=document.getElementById('netBalance');
    balance.innerText= balanceLeft;
   

})
// saving amount and remaing balence part
function handleOnClick(event){
          // Saving amount
    let netIncome =  document.getElementById("income").value;
    let totalSaving =  document.getElementById("savings").value;
    let savings = (netIncome * totalSaving) / 100;
       // Get the remainning Ballence
    let savingAmount = document.getElementById("savaingAmount");
    if(savingAmount > balance){
        return alert('please reload');
    }
    savingAmount.innerText = savings;
    let remainBalance = document.getElementById("remainBalance");
    
    remainBalance.innerText = (balanceLeft - savings);
   


}


