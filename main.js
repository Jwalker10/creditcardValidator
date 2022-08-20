// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

/* mystery 2 and 5 are  true, the rest are false */


// Add your functions below:

/* Global variables */
const cardValidStatusGlobal = [];
const invalidCardsGlobal = [];
/* Functions */

const validateCredit = (arr) => {
    const cardValidStatus = [];

    const luhnAlgorithm = (nestedArr) => {

        /* seperates batch arrays to isolated tempArr so that originals are unaltered */
        let tempArr = [];
        for (let c = 0; c < nestedArr.length; c++) {
            tempArr.push(nestedArr[c]);
        };

        /* code reverses array and iterates through every other number conducting first step of luhns algorithm before re-orienting the array 
        and test logging to console to check operation has been completed. */
        tempArr.reverse();
        for (let i = 1; i < nestedArr.length; i++) {
            if (tempArr[i] * 2 > 9) {
                tempArr[i] = tempArr[i] * 2 - 9;
            } else {
                tempArr[i] = tempArr[i] * 2;
            };
            i++;
        };
        tempArr.reverse();
        // console.log(tempArr);

        /* luhns algorithm part 2 reduces tempArr to its sum then checks if sum % 10 is 0 returning true or not return false 
        and test logging to console to check operation has been completed accurately.*/
        let digitSum;
        tempArr.reduce((accumulator, currentValue, currentIndex, tempArr) => {
            return digitSum = accumulator += currentValue;
        });
        // console.log(digitSum);

        let modulo = digitSum % 10;
        if (modulo === 0) {
            cardValidStatus.push('true');
        } else {
            cardValidStatus.push('false');
        };
    };

    /* call the nested function luhnAlgorithm for each array nested within the batch array for easy mass testing */
    arr.forEach(luhnAlgorithm);
    // console.log(cardValidStatus);

    /* pushes cardValidStatus array to a global array so that it can be referenced in multiuple seperate functions without complex nesting */
    for (let v = 0; v < cardValidStatus.length; v++) {
        cardValidStatusGlobal.push(cardValidStatus[v]);
    };
};

/* finds invalid cards and pushes them to arrays to be accesible */
const findInvalidCards = (validatedArr, arr) => {
    const invalidCardIndexNums = [];
    const invalidCards = [];
    
    /* creates array of index numbers for every invalid card
    and test logging to console to check operation has been completed */
    for (let b = 0; b < validatedArr.length; b++) {
        if (validatedArr[b] === 'false') {
            invalidCardIndexNums.push(b)
        };
    };
    // console.log(invalidCardIndexNums);

    /* returns all invalid cards in batch array by looping through retrieved index numbers then accessing batch array, nesting all to invalidCard array 
    and test logging to console to check operation has been completed */
    for (let a = 0; a < invalidCardIndexNums.length; a++) {
        invalidCards.push(arr[invalidCardIndexNums[a]]);
    };
    // console.log(invalidCards);

    for (let d = 0; d < invalidCards.length; d++) {
        invalidCardsGlobal.push(invalidCards[d]);
    };
};

/* accesses invalidCards from its global position, identifies and pushes the companies who issued the invalid cards to an array (with no duplicates) 
and test logging to console to check operation has been completed */
const idInvalidCardCompanies = (arr) => {
    const cardCompanies = ['Amex', 'Visa', 'Mastercard', 'Discover'];
    const companiesOnInvalidCards = [];
    const companiesOnInvalidCardsCondensed = [];

    /* iterates through all of the invalid cards retrieving the first digit in the card number, using that to identify the company who issued the card
    the code pushes this to the companiesOnInvalidCards array 
    and test logging to console to check operation has been completed */
    arr.forEach(arrNested => {
        switch (arrNested[0]) {
            case 3:
                companiesOnInvalidCards.push('Amex');
                break;
            case 4:
                companiesOnInvalidCards.push('Visa');
                break;
            case 5:
                companiesOnInvalidCards.push('Mastercard');
                break;
            case 6:
                companiesOnInvalidCards.push('Discover');
                break;
            default:
                console.log('Company not found');
        };
    });
    // console.log(companiesOnInvalidCards);

    /* interates through all possible card companies and searches through companiesOnInvalidCards array returning index of first instance of a company using that to 
    access companiesOnInvalidCards and push the first instance element to the array companiesOnInvalidCardsCondensed, allowing the display of a condensed list of 
    companies that have issued invalid cards (without duplicates) (the if statements checks if there is no instance of a company in companiesOnInvalidCards, if there is none then the 
    code continues to its next iteration) 
    and test logging to console to check operation has been completed */
    cardCompanies.forEach(element => {
        if (companiesOnInvalidCards.indexOf(element) !== -1) {
            companiesOnInvalidCardsCondensed.push(companiesOnInvalidCards[companiesOnInvalidCards.indexOf(element)]);
        };
    })
    // console.log(companiesOnInvalidCardsCondensed);
};

validateCredit(batch);

/* verifies that cardValidStatus array has reached global position in the cardValidStatusGlobal array */
// console.log(cardValidStatusGlobal)

findInvalidCards(cardValidStatusGlobal, batch);

/* verifies that invalidCards array has reached global position in the invalidCardsGlobal array */
// console.log(invalidCardsGlobal);

idInvalidCardCompanies(invalidCardsGlobal);