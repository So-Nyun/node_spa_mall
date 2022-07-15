// A에게 우선권이 있으며 각 플레이어는 자신이 고른 항아리 다음의 항아리에 들어있는 금화의 양까지 고려해야한다.
// 예를 들어 항아리의 금화의 양이 9 10 . . . . .  7 8 일 때는 양끝만 비교하면 안될 것이다.
// 여기서 핵심은 각 플레이어 모두 놓여져있는 금화의 양을 알 수 있다는 점이다.
// 항아리의 개수가 2N개일 때 각 플레이어는 N번의 선택을 할 것이며 
// s = 0, e = arr.length() - 1
// s, s+1  |  e-1, e
// s + s+1  e-1+ e
// 5 20  11 10
// 10 20 8  3 11 5
// A 10 8 11  -> 29 
// B 20 5 3   -> 28
// s - e, s+1 - (e-1)  ->    5  ,  9
// left , right , next
// if  left ->  rigth , left.next
// else if rigth -> left, rigth.next


// big, small, next
// if big -> big.next, small                 9   x  5  ( big을 택했다는 것은 현재 small의 뒤가 지금 얻을 이득보다 안좋단 뜻)
// else if small -> big, small.next          5   9  y  ( small을 택했다는 것은 현재 big의 뒤가 짊어진 리스크(4)보다 좋단 뜻)

// 지금 얻을 이득과 다음에 올 값을 통해 상대방이 얻을 이득을 계산

arr = [1,2,3,4,5,6,7,8,9,10] // 연결리스트
len = arr.length
A = new Array(len/2), B = new Array(len/2)
console.log(len)
console.log(A.length)
for (i=0;i<len/2;i++){
    s = arr[i]
    e = arr[len-1]
    //var [big, small] = [3, 4]
    var [big, small] = returnBig(s,e)
    console.log(big, small)
    benefit = big - small
    benefit_B = s
    lisk_small = e
}

const returnBig = (s,e) => { 
    if (s > e) {
        big = s
        samll = e
    }else {
        big = e
        small = s
    }
    return [1, 2]
}



function selectCoin(value){


}