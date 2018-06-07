// function diamond(val){
//   var y, w, shape = '';
//
//   for(y = 0; y < val * 2 - 1; y++) {
//     w = y < val ? y : val * 2 - y - 2;
//     shape += Array(val - w).join(' ') + Array(w + 1).join('* ') + '*\n';
//   }
//   console.log(' ' + shape + ' ');
// }
// diamond(5); //Tudo ok, mas precisa melhorar...

function diamond(val){
  var diam;

  if (val <= 0 || val % 2 === 0) {
    return null;
  } else {
    var asteriskAmount = val;
    var spaces = 0;
    var diamArr = [];

    while (asteriskAmount >= 1) {
      if (asteriskAmount === val) {
        var initialString = "";
        for (i = 0; i < asteriskAmount; i++) {
          initialString += "*";
        }
        initialString += "\n";
        diamArr.push(initialString);
        asteriskAmount -= 2;
        spaces += 1;
      } else {
        var stringTemp = "";
        for (j = 0; j < spaces; j++) {
          stringTemp += " ";
        }
        for (l = 0; l < asteriskAmount; l++) {
          stringTemp += "*";
        }
        stringTemp += "\n";
        diamArr.unshift(stringTemp);
        diamArr.push(stringTemp);
        asteriskAmount -= 2;
        spaces += 1;
      }
    }
    diam = diamArr.join('');
  }
  console.log(diam);
}

diamond(5);
