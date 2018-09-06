function cardValidator(cardnumber) {
  if (!cardnumber) throw new Error('Empty parameter.');

  if (typeof cardnumber !== 'number') {
    throw new Error('The parameter is not a number.');
  } else {
    const array = cardnumber.toString().split('').map(cardnumber => parseInt(cardnumber)).reverse();
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