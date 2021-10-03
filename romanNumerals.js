const arguments = process.arvg;

const getCharFromNumber = (number) => {
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

const compoundCharacters = (numb) => {
  const castAsString = `${numb}`
  const length = castAsString.split().length;
  let resultString = ''
  for (const [index, value] of `${numb}`.split()) {
    if (parseInt(value) === 1 || parseInt(value) === 5) {
      // is single char, easy
      resultString = resultString + getCharFromNumber(value * Math.pow(10, `${numb}`.length - (index + 1)))
    }
    else {
      // is multi-char
      if (value === 4 || value === 9) {
        // 4 and 9 are special cases
        resultString = resultString 
          + getCharFromNumber(1 * Math.pow(10, `${numb}`.length - (index + 1))) 
          + getCharFromNumber((5 * Math.floor(10 / value)) * Math.pow(10, `${numb}`.length - (index + 1)))
      }
      else {
        
      }
    }
  }
}

const convertToRomanNumeral = (numb) => {
  if (typeof numb !== 'number' || !Number.isInteger(numb)) {
    console.log('that is not an integer')
    return 
  }
  // say the year is 2021
  // the roman numeral would be... 
  // MMXXI 
  // 0's are skipped

  // 49 is XLIX
  // 10 subtracted from 50 plus 9
  // X < L > I < X
  // 40 is XL
  // 4 is IV
  // 90 is XC?
  const numberArr = (number + '').split('');
  const numberOfPositions = numberArr.length // 4
  let romanNumeralArray = [];
  for (const [index, value] of numberArr.entries()) {
    if (value === 0) continue
    if (value === 4 || value === 9) {
      // 4 and 9 are special cases
      
    }
    if (value % 5 === value) {
      // number is between 0-5
      // say value is 2, and index is 0
      // I would need 2000
      // index is 0, numberOfPositions is 4
      // I need 2 * Math.pow(10, numberOfPositions - (index + 1))

    }
  }
}

