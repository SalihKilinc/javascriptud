let user = [
    {email : "asus zenbook computer" , sifre:450 },
    {email : "asus notebook computer" , sifre:200 }
]

let rate = [
    {email : "asus zenbook computer" , cash:"it economic" },
    {email : "asus notebook computer" , cash: "It's expencive"},
    {email : "asus zenbook computer" , cash: "This is very beauteful" }
  

]

var email = prompt("email?")
var sifre = prompt("sifre?")
function userWho(email,sifre){
    console.log(email)
    console.log(sifre)
    for(i=0; i<user.length; i++){
        if( user[i].email==email && user[i].sifre==sifre){
            return true;
        }
    }
    return false;
}

function enter(){
    if (userWho(email,sifre))
    {
        console.log(rate)
    }else{
        console.log("Please try again")
    }
  
}  enter(email,sifre)