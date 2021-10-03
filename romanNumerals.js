const numberToConvert = parseInt(process.argv[2]) 

const getCharFromNumber = (number) => {
  if (number >= 10000) {
    
  }
  switch (number) {
    case 1:
      return 'I';
    case 5:
      return 'V';
    case 10:
      return 'X';
    case 50:
      return 'L';
    case 100:
      return 'C';
    case 500:
      return 'D';
    case 1000:
      return 'M';
    default: return null;
  }
}

/^[0-9]*$/ // match only numbers with no letters

const convertToRomanNumeral = (numb) => {
  if (!/^[0-9]*$/.test(numb)) {
    console.log(numb, ' is not a number');
    return;
  }
  let resultString = ''
  for (const [index, v] of `${numb}`.split('').entries()) {
    let pwr = `${numb}`.length - (index + 1);
    let value = parseInt(v)
    if (value === 0) continue
    if (value === 1 || value === 5) {
      // is single char, easy
      resultString = resultString + getCharFromNumber(value * Math.pow(10, pwr))
    }
    else {
      // is multi-char
      if (value === 4 || value === 9) {
        console.log('matched!!')
        // 4 and 9 are special cases
        resultString = resultString 
          + getCharFromNumber(1 * Math.pow(10, pwr)) 
          + getCharFromNumber((value + 1) * Math.pow(10, pwr))
      }
      else {
        resultString = resultString + getCharFromNumber(1 * Math.pow(10, pwr)).repeat(value > 5 ? value - 5 : value);
      }
    }
    console.log('at the end of the loop, resultstring is ', resultString)
  }
  return resultString;
}

console.log(convertToRomanNumeral(numberToConvert));