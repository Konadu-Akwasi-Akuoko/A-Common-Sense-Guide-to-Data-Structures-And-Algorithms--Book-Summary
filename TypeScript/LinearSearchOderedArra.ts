function linearSearch(array: any[], searchValue: any): number | null {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element === searchValue) {
      return i;
    } else if (element > searchValue) {
      break;
    }
  }

  return null;
}

console.log(linearSearch([17,3,75,202,80],22))