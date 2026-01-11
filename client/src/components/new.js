function calculateInterest(currentBalance, customerAge){
    try {
        if (customerAge > 150) {
            throw new Error();
        }
        if (currentBalance > 0) {let interest = (currentBalance * 2.5) / 100; if (customerAge > 60) {interest += 50;}
        return interest;
        }
        throw
};