function calculateTotalCoast(predicts) {
    let totalCoast = 0;
  console.log(predicts, 'ffffffff')
    predicts.forEach((predict) => {
      totalCoast += predict.coast;
    });
    console.log(totalCoast, 'ffffffff')
    return totalCoast;
  }
  export default calculateTotalCoast