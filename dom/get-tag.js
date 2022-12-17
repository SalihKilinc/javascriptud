// let intro1 = document.getElementById("intro1")
// let message = document.getElementById("message")
// message.innerHTML = intro1.innerHTML;

// let allList = document.getElementsByTagName("ul");
// let citys = allList[0];

// allEle = citys.getElementsByTagName("li");

// for (i = 0; i < allEle.length; i++) {
//     alert(allEle[i].innerHTML)
// }
// let queryEl = document.querySelectorAll("p.intro1");
// alert(queryEl.length);

// let users = document.getElementsByName("client-Name");
// alert(users[0].value);

let Mehmet = document.getElementById("Mehmet").addEventListener("click", rengiDegistir); // ismin uzerine geldigi zaman kilinc olan event fonction

function rengiDegistir() {
    document.getElementById("div1").style.color = "blue";
    let users = document.getElementsByName("client-Name");
    users[0].value = "KILINC";

}
