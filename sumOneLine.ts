let sum = function () {
  return Array.prototype.slice
    .call(arguments)
    .reduce((p: number, c: number) => p + c, 0);
};
