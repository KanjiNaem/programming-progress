const lengthOfLastWord = (str: string): number => {
  let strArr = str.split(" ").filter((el) => el);
  return strArr[strArr.length - 1].length;
};

console.log(lengthOfLastWord(" fly me to the moon "));
