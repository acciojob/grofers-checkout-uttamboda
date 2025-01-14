const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price'); 

  let totalPrice = 0;

  prices.forEach(priceCell => {
    totalPrice += parseFloat(priceCell.textContent);  
  });

  let totalElement = document.getElementById('ans');
  
  if (!totalElement) {
    totalElement = document.createElement('div');
    totalElement.id = 'ans'; 
    document.body.appendChild(totalElement); 
  }

  totalElement.textContent = `Total: Rs ${totalPrice.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);

