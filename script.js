function calculate() {
  const currentAge = parseFloat(document.getElementById("currentAge").value);
  const retirementAge = parseFloat(
    document.getElementById("retirementAge").value
  );
  const lifeExpectancy = parseFloat(
    document.getElementById("lifeExpectancy").value
  );
  const monthlyExpenses = parseFloat(
    document.getElementById("monthlyExpenses").value
  );
  const inflationRate =
    parseFloat(document.getElementById("inflationRate").value) / 100;

  const yearsUntilRetirement = retirementAge - currentAge;
  const yearsInRetirement = lifeExpectancy - retirementAge;

  // Calculate the future value of monthly expenses during retirement
  const futureMonthlyExpenses =
    monthlyExpenses * Math.pow(1 + inflationRate, yearsInRetirement);

  // Calculate total required retirement savings in rupees
  const totalRequiredSavings = futureMonthlyExpenses * 12 * yearsInRetirement;

  // Format the result with commas and display in rupees
  const formattedSavings = totalRequiredSavings.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  document.getElementById(
    "result"
  ).innerText = `You need to save ${formattedSavings} for retirement.`;
}
