const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price'); 
  
  let totalPrice = 0;
  
  prices.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent); 
  });
  
  const table = document.querySelector('table');  
  const newRow = document.createElement('tr');    
  
  // Step 5: Create a new cell for the total price
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');  
  totalCell.style.fontWeight = 'bold';     
  totalCell.textContent = `Total: Rs ${totalPrice.toFixed(2)}`;  
  
  newRow.appendChild(totalCell);
  
  table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

