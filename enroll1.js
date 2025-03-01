
        document.getElementById('paymentForm').onsubmit = function() {
            var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
            if (paymentMethod === "netbanking") {
                window.location.href = "netbanking.html"; // Redirect to Netbanking page
            } else if (paymentMethod === "razorpay") {
                window.location.href = "razorpay.html"; // Redirect to Razorpay page
            }
            return false; // Prevent actual form submission for demonstration purposes
        };
    