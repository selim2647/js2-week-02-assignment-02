                       //****** LEVEL 1 ******* *//

const myArray = [
  "Switzerland55@gmail.com",
  "Zurich4155@gmail.com",
  "HiCoders41@gmail.com",
];
const changeEmailFromGmailToHicoders = (pArray) => {
  let result = pArray.map((item) => {
    return item.toLowerCase().replace("gmail.com", "hicoders.ch");
  });
  return result.reverse();
};

console.log(changeEmailFromGmailToHicoders(myArray));

                       //******** LEVEL 2 ********** *//

const newArray = [455, 789, 153];

const findSuperNumbers = (pSNumbers) => {
  const superNumbers = [];
  pSNumbers.map((item) => {
    const total = item
      .toString()
      .split("")
      .map((x) => Math.pow(Number(x), 3))
      .reduce((x, y) => x + y);
    if (total === item) {
      superNumbers.push(item);
    }
  });
  return superNumbers;
};

console.log(findSuperNumbers(newArray));

                       //***********  END ***********//

export { changeEmailFromGmailToHicoders, findSuperNumbers };
