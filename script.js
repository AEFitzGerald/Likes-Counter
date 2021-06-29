var likesUser1 = document.querySelector("#likes-user-1")
var likesUser2 = document.querySelector("#likes-user-2")
var likesUser3 = document.querySelector("#likes-user-3")
var counter = [9, 12, 9];

//when button is clicked increment the innerText likes by 1 for that user's comment. 

function updateLikes1() {
    counter[0]++
    likesUser1.innerHTML = counter[0];
}
function updateLikes2(){
    counter[1]++
    likesUser2.innerHTML = counter[1];
}
function updateLikes3() {
    counter[2]++
    likesUser3.innerHTML = counter[2];
}
