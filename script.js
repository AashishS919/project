const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const form = document.getElementById('form');
const list = document.getElementById('list');
const budget = prompt("Enter your budget");
balance.innerText = "$" + budget;


let inc_total=0;
const li=document.getElementsByTagName('li')
for(i=0; i<li.length; i++){
  if(li[i].className.includes("plus")){
    // inc_total += parseInt(li[i].innerHTML);
    console.log(li[i])
  }
}

income.innerText = inc_total;

function onSubmit(event) {
  event.preventDefault();
  reason = document.getElementById('text').value;
  amount = document.getElementById('amount').value;
  const item=document.createElement('li')

  item.classList.add(amount>0 ? "plus" : "substract")

  item.innerHTML=`
  <span>${reason} </span><span class="amtn"> $ ${amount}</span> 
  `
  // Clear the form fields after submission
  document.getElementById('text').value = '';
  document.getElementById('amount').value = '';
  list.appendChild(item)
}

// Add an event listener for form submission
form.addEventListener('submit', onSubmit);


