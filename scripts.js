'use strict'
document.getElementById('calculate-button').onclick = function(){
    getData()
}

function getData(){
    const bill = document.getElementById('billingAmountInput');
    const qualityOfService = document.getElementById('serviceQualityInput');
    const peopleSharingTheBill = document.getElementById('peopleSharingBillInput');
    const totalTipSpan = document.getElementById('totalTipSpan');
    const tipPerPersonSpan = document.getElementById('tipPerPersonSpan');
    const tipResultsDisplay = document.getElementById('tipResultsDivDisplay');
    if (validateForm(bill, qualityOfService, peopleSharingTheBill)){
        calculateTip(bill, qualityOfService, peopleSharingTheBill, totalTipSpan, tipPerPersonSpan, tipResultsDisplay)
    }
    else{
        alert('The form data is invalid.');
    }
}

function validateForm(bill, qualityOfService, peopleSharingTheBill){
    if (bill.value < 0 || isNaN(bill.value)){
        return false;
    }
    if (qualityOfService.value < 0 || qualityOfService.value > 0.30){
        return false;
    }
    if (isNaN(peopleSharingTheBill.value) || peopleSharingTheBill.value < 0){
        return false;
    }
    return true;
}

function calculateTip(bill, qualityOfService, peopleSharingTheBill, totalTipSpan, tipPerPersonSpan, tipResultsDisplay){
    let tipPerPerson = calculateTipPerPerson(bill.value, qualityOfService.value, peopleSharingTheBill.value);
    let totalTip = tipPerPerson * peopleSharingTheBill.value;
    console.log(peopleSharingTheBill);
    console.log('Total tip:' + totalTip);

    showResults(tipPerPersonSpan, totalTipSpan, tipPerPerson, totalTip, tipResultsDisplay);
}

function calculateTipPerPerson(bill, qualityOfService, peopleSharingTheBill){
    return (bill * qualityOfService) / peopleSharingTheBill;
}

function showResults(tipPerPersonSpan, totalTipSpan, tipPerPerson, totalTip, tipResultsDisplay){
    tipResultsDisplay.style.display = "block";
    tipPerPersonSpan.innerHTML = tipPerPerson;
    totalTipSpan.innerHTML = totalTip;
}