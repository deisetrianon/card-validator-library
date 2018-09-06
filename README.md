# Credit Card Library v.1.0.2
Credit Card Library is a JavaScript Library that can be used to validate a credit card number through the Luhn algorithm.

### Version 1.0.2
Returns true for valid card numbers and false to invalid card numbers.

### Method
cardValidator(cardNumber);

# Usage
### Installation
`$npm install credit-card-library`

### Examples
```
$node
> let validator = require("credit-card-library")
> validator(36490102462661); // true
```
```
$node
> let validator = require("credit-card-library")
> validator(4112344112344114); // false
```