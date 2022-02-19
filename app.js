let count=0;

document.getElementById('btn').addEventListener('click',function(){
count=count+1;
    
const inputValue=document.getElementById('inputField').value;
if(inputValue==''){
    alert("please enter value!");
}
else{

    const contentRaw=document.getElementById('content-raw');
    const tableContent=document.createElement('tr');
    tableContent.innerHTML = ` <th>${count}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-danger delete-button">Delete</button>
    <button class="btn btn-success done-button">Done</button>
    </td>
    `;
    contentRaw.appendChild(tableContent);
    document.getElementById('inputField').value='';

    const deleteButton = document.getElementsByClassName(' delete-button');
    const doneButton = document.getElementsByClassName('done-button');
    for(const button of deleteButton ){
        button.addEventListener('click',function(e){
            // e.target.parentNode.parenetNode.style.display='none';
            console.log(e.target.parentNode.parenetNode);
        });
    }
}
    });

