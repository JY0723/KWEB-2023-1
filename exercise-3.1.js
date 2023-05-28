const isValidNumber = (num) => {
    if ((num >= 1) && (num <= 9) && (Math.round(num) == num)) {
        console.log('true');
    }
    else {
        console.log('false');
    }
};

isValidNumber(9);
isValidNumber('4');
isValidNumber('abc');
isValidNumber(-5);
isValidNumber(3.5);
isValidNumber(3/0);