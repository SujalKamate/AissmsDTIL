
        function validateForm() {
            var bankName = document.getElementById('bankname').value;
            var accountNumber = document.getElementById('accountnumber').value;
            var ifsc = document.getElementById('ifsc').value;
            if(bankName === "" || accountNumber === "" || ifsc === "") {
                alert("All fields must be filled out");
                return false;
            }
            return true;
        }
    