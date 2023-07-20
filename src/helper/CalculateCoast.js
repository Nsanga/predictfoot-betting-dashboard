

function calculateTotalCoast(predicts) {
  if (!Array.isArray(predicts)) {
    return 0; // Return 0 or any default value depending on your use case
  }

  let totalCoast = 0;

  predicts.forEach((predict) => {
    totalCoast += predict.coast;
  });

  const roundedTotalCoast = Number(totalCoast.toFixed(3));

  return roundedTotalCoast;
}

export default calculateTotalCoast;
