
        function validateForm() {
            var firstName = document.getElementById('firstname').value;
            var lastName = document.getElementById('lastname').value;
            var password = document.getElementById('password').value;
            if(firstName === "" || lastName === "" || password === "") {
                alert("All fields must be filled out");
                return false;
            }
            return true;
        }
