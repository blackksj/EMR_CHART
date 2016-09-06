//옵션값을 배열로 return
function GetCommandArgs(args, argKeys) {
    var arrKeys = argKeys.toUpperCase().split(',');
    var arrValues = new Array();

    if (args && args.length > 0) {
        var arrVals = args.split('|^@@^|');

        for (var i = 0; i < arrVals.length; i++) {
            var arrVals3 = arrVals[i].split('|^@^|');

            arrValues[arrVals3[0].toUpperCase()] = arrVals3[1];
        }// for i

        for (var i = 0; i < arrKeys.length; i++) {
            arrKeys[i] = arrValues[arrKeys[i]];

            if (!arrKeys[i])
                arrKeys[i] = "";
        }
    } else {
        for (var i = 0; i < arrKeys.length; i++) {
            arrKeys[i] = "";
        }
    }

    return arrKeys;
}