function cardValidator(cardNumber) {
  if (!cardNumber) throw new Error('The card number is empty.');

  if (typeof cardNumber !== 'number') {
    throw new Error('The card number is not a number.');
  } else {
    const array = cardNumber.toString().split('').map(cardNumber => parseInt(cardNumber)).reverse();
    if (array.length === 1) {
      throw new Error('The card number is a one-digit number.');
    } else {
      return array.map((value, index) => {
        if (index % 2 !== 0) {
          if (value * 2 >= 10) {
            return value * 2 - 9;
          } else {
            return value * 2;
          }
        } else {
          return value;
        }
      }).reduce((total, value) => total + value) % 10 === 0;
    }
  }
}

module.exports = cardValidator;