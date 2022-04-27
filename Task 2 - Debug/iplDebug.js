/*
A cricket player gets a contract of 3 years to play for a
team in IPL. He has an option to choose how he want to get
paid. It could be weekly or monthly.
10% of the total amount will be paid at the time of signing
the contract and remaining will be paid trough installments.
The payment can be completed before the contract ends but
cannot exceed more than contract period. Weekly payment can
be multiple of 50 and monthly payment can be multiple of 100.
Example: if weekly amounts happens to be $122 round it to
$150. If monthly amounts happens to be $122 round it to
$200.
Here is the function which calculates the amount to be paid.
Your task will be to find mistakes and improve the code
efficiency.
Feel free to change code structure and variable names as you
see fit.
*/
const formulatePayment = (choice, amount) => {
  const initialPayment = ((10 / 100) * amount).toFixed(2);
  const remainingTotal = amount - initialPayment;
  if (choice == "weekly") {
    let weeklyAmountPayment = 0;
    let weekly = remainingTotal / weeklyAmountPayment;
    while (weekly > 156) {
      weeklyAmountPayment = weeklyAmountPayment + 50;
      let weeks = remainingTotal / weeklyAmountPayment;

      weekly = Math.ceil(weeks);
    }
    console.log(`You will be paid ${weeklyAmountPayment} for
    ${weekly} weeks.`);
    return { time: weekly, amount: weeklyAmountPayment };
  } else if (choice == "monthly") {
    let monthlyPrice = 0;
    let monthly = remainingTotal / monthlyPrice;
    while (monthly > 36) {
      monthlyPrice = monthlyPrice + 100;
      let months = remainingTotal / monthlyPrice;

      monthly = Math.ceil(months);
    }
    console.log(`You will be paid ${monthlyPrice} for $
    {monthly} months.`);
    return { time: monthly, amount: monthlyPrice };
  } else {
    return null;
  }
};
