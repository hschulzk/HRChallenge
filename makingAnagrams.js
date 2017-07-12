//it's removing characters that don't appear in both strings and returning a correct count for those, but when a character does appear in both but in unequal numbers, it's not being adequately accounted for
function main() {
    var a = readLine();
    var b = readLine();
    a = a.split('');
    b = b.split('');
    a.sort();
    b.sort();
    function checkTwoArrays(a1, a2) {
        var returnArray = [];
        for (index = 0; index < a1.length; index += 1) {
            let element = a1[index]; 
            if (a2.indexOf(element) < 0) {
                a1.slice(index,1);                
            } else {
                returnArray.push(element);                
            }            
        }
        return returnArray;
    }
    let totalLength = a.length + b.length;
    console.log(totalLength);
    a = checkTwoArrays(a, b);
    b = checkTwoArrays(b, a);
    totalLength = totalLength  - (a.length + b.length);
    console.dir(a);
    console.dir(b);
    console.log(totalLength);
}