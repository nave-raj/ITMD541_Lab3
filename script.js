
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('billCalculatorForm');
    form.addEventListener('input', calculateTotalBill);
    form.addEventListener('change', calculateTotalBill);

    function calculateTotalBill () {
        const billTotal = parseFloat(document.getElementById('billTotal').value);
        const tip = parseFloat(document.getElementById('tip').value);
        const tipAmount = (billTotal * tip) / 100;
        const totalBillWithTip = billTotal + tipAmount;

        if((billTotal <=0 || billTotal == null)){
            alert("Please Enter a Valid Bill Amount");
            document.getElementById('tip').value = 0;
            document.getElementById('tipPercentage').value = "";
            document.getElementById('billTotal').value = "";
            document.getElementById('tipAmount').value = "";
            document.getElementById('totalBillWithTip').value = "";
            return;
        }   

        document.getElementById('tipPercentage').value = tip.toFixed(2);
        document.getElementById('tipAmount').value = tipAmount.toFixed(2);
        document.getElementById('totalBillWithTip').value = totalBillWithTip.toFixed(2);
    }

});

