
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('billCalculatorForm');
    form.addEventListener('input', calculateTotalBill);
    form.addEventListener('change', calculateTotalBill);

    function calculateTotalBill () {
        let billTotal = document.getElementById('billTotal').value;
        const regex1 = /[a-zA-Z]/;
        const regex2 = /[+-]/;
        if(billTotal.match(regex1) || billTotal.match(regex2) || billTotal === ""){
            alert("Please Enter a Valid Bill Amount");
            document.getElementById('tip').value = 0;
            document.getElementById('tipPercentage').value = "";
            document.getElementById('billTotal').value = "";
            document.getElementById('tipAmount').value = "";
            document.getElementById('totalBillWithTip').value = "";
            event.stopPropogation();
            return;
        }
        billTotal = isNaN(parseFloat(billTotal)) ? 0 : parseFloat(billTotal);
        const tip = parseFloat(document.getElementById('tip').value);
        const tipAmount = (billTotal * tip) / 100;
        const totalBillWithTip = billTotal + tipAmount;
``
        document.getElementById('tipPercentage').value = tip.toFixed(2);
        document.getElementById('tipAmount').value = tipAmount.toFixed(2);
        document.getElementById('totalBillWithTip').value = totalBillWithTip.toFixed(2);
    }

});
