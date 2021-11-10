function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0;
  let years = 0;

  while (principal <= desired) {
    let totalInterestGained = principal * interest;
    let totalInterst = totalInterestGained * tax;

    principal = principal + (totalInterestGained - totalInterst);
    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
