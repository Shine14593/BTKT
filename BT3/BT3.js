function isSubstring(str1, str2) {
    let x = str1.length;
    let y = str2.length;
    for(let i = 0; i <= y - x; i++) {
        for(let j = 0; j < x; j++) {
            if(str1[j]!== str2[i + j]) {
                break;
            }
            if(j === x) {
                return true;
            }
        }
        return false;
    }       
        
}
let str1 = 'abc';
let str2 = 'defghabcxyz';
let result = isSubstring(str1, str2);
document.write(result);