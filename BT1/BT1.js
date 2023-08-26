function bubbleSort(arr){
    let n = arr.length;

    for ( let i = 0;i < n -1; i++){
        for(let j = 0 ; j< n -i - 1 ; j++){
            if (arr[j]<arr[j +1]){
                let temp = arr[j]
                arr[j] = arr[j +1];
                arr[j+1] = temp;
            }
        }
    }
}
function findThirdHighestScore(scores){
    if ( scores.length < 3){
        return ' Khong du diem de tim diem cao thu 3';
    }
        bubbleSort(scores);
        return scores[2];
}
    let scores = [ 85, 92 , 78, 90,88, 95,89];
    let thirdHighestScore = findThirdHighestScore(scores);
    document.write('Diem thi cao thu 3 la : ',thirdHighestScore);
