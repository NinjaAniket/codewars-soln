function bmi(weight, height) {
  const result = parseFloat(weight / (height * height)).toFixed(1);

  switch (true) {
    case result <= 18.5:
      return 'Underweight';
    case result <= 25.0:
      return 'Normal';
    case result <= 30.0:
      return 'Overweight';
    case result > 30:
      return 'Obese';

    default:
      return 'Fit';
  }
}
console.log(bmi(80, 1.8));
