const countOccurrences = function(arr, val){
    return arr.reduce((acc, elem) => {
      return (val === elem ? acc + 1 : acc)
    }, 0);
  };

export { countOccurrences }