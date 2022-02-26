
function updateProductNumber(product ,price, isIncreasing){
    let productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);

    if(isIncreasing){
        productInput.value = productNumber + 1;
        productNumber++;

    }else if( productNumber > 0) {
    productInput.value = productNumber - 1;
    productNumber--;
        
    }
    // update caseTotal 

    const productTotal =  document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // sub total count 

    calculateTotal();
}

function getInputValue(product){
    const productInput =  document.getElementById(product + '-number');
    return   parseInt(productInput.value); 

}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice =  subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    
}

// handle phone increase decress events 
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
 })

 document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
 })

// handle case increase decress events 
document.getElementById('case-plus').addEventListener('click',function(){
   updateProductNumber('case',59,true);
})

document.getElementById('case-minus').addEventListener('click',function(){

  updateProductNumber('case',59,false);
})

// delete item 

function deleteMe(itemNumber){

    if(itemNumber == 1){
        document.getElementById('single-item1').style.display = "none";

    }else if(itemNumber == 2){
        document.getElementById('single-item2').style.display = "none";

    }
    
    // console.log(e);
}