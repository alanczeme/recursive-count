function recursiveCount(num = 0) {
  // let count = 0;

  // while (count < 10) {
  //   console.log(count);
  //   ++count;
  // }


  if (num == 10) {
    return
  } else {
    console.log(num);
    num++;
    recursiveCount(num)
  }

}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
