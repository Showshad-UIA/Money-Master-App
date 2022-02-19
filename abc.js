// const change =document.getElementsByClassName('change');
// document.getElementById('prime');
// // console.log(change[0]);
// for(const item of change){
//     item.addEventListener('click',function(e){
//         if(e.target.id=='prime'){
//             document.getElementById('clicked').style.color='red';
//         }
//         else{
//             document.getElementById('clicked').style.color='green';
//         }
//     } )
// }

let clicked=0;

// this steps for addition
// document.getElementById('plus').addEventListener('click',function(e){
  
//     // document.getElementById('clicked').innerText=clicked;
// })
   function add(e){
    clicked ++;
    shortCode('clicked');
   }

// this part for minus

// document.getElementById('minus').addEventListener('click',function(e){
   
// })
    function sub(e){
    clicked=clicked-1;
    shortCode('clicked');
//     if(clicked>0){
//     return ;
// }
// else {
//     return false;
// }
    }
function shortCode(min){
    document.getElementById(min).innerText=clicked;
    
}

