let user = [
    {marka : "asus zenbook computer" , price:450 },
    {marka : "asus notebook computer" , price:200 }
]

let users = [
    {marka : "asus zenbook computer" , cash:"it economic" },
    {marka : "asus notebook computer" , cash: "It's expencive"},
    {marka : "asus zenbook computer" , cash: "This is very beauteful" }
  

]

var marka = prompt("marka?")
var price = prompt("sifre?")

function enter(){
    if ((marka== user [0].marka && price == user[0].price ) || 
    (marka == user[1].user && price ==user [1].price )){
        console.log(users)
    }else{
        console.log("Please try again")
    }
  
}  enter(marka,price)