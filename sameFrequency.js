function sameFrequency(first, second){
    first = first.toString();
    first = first.split('');
    second = second.toString();
    second = second.split('');
    if (first.length !== second.length) {
        return false
    }

    let firstFreq = {};
    let secondFreq = {};

    for (let num of first) {
        firstFreq[num] = (firstFreq[num] || 0) + 1;
    }

    for (let num of second) {
        secondFreq[num] = (secondFreq[num] || 0) + 1;
    }

    for (let key in firstFreq) {
        if (!key in secondFreq) {
            return false
        }

        if (secondFreq[key] !== firstFreq[key]) {
            return false
        }
    }

    return true
  }

  console.log(sameFrequency(182, 281));
  console.log(sameFrequency(34, 14));
  
  
//   const validAnagram = (first, second) => {
//       if (first.length !== second.length) {
//           return false
//       }
  
//       let firstCount = {};
//       let secondCount = {};
  
//       for (let char of first) {
//           firstCount[char] = (firstCount[char] || 0) + 1;
//       }
  
//       for (let char of second) {
//           secondCount[char] = (secondCount[char] || 0) + 1;
//       }
  
//      for (let key in firstCount) {
//           if (!(key in secondCount)) {
//               return false
//           }
  
//           if(firstCount[key] !== secondCount[key]) {
//               return false
//           }
//      }
  
//      return true
//   }