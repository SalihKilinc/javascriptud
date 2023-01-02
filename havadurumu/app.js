const url = "https://api.openweathermap.org/data/2.5/"  
// api kullanmak icin api ye ihtiyacimiz olacak
// api aldik  q parametresini mecbur alacagiz sehri almak icin
//units kismi ise derecenin ne ile yapilacagini gosterir default degr derece olarak gelir
// kullanici isminin altindan api keys kismini al

const myap = "e986d0bb542ff0d95aa38eb4582ad882"






// IKINCI BOLUM
const setQuery = (e) => {   // klavyedeb gelen parametreyi yakalamam icin event degerini almam gerekli
if(e.keyCode == "13")  // yakaladigim even uzerinden key code arastiracagim 133 enter anlamina gelir
getResult(searcBar.value) // bu fonksiyon altinda sehir ismini gonderdim ve sehre gore sonuca erisebilelim
}


//UCUNCU BOLUM

const getResult = (cityName) => {
    // console.log(cityName)  kontrol ettik consoldan sehri alabildikmi diye 
    let query = `${url}weather?q=${cityName}&appid=${myap}&units=metric&lang=tr`  // key geliyormu kontrol ettik konsolda
   // console.log(query)
   fetch(query)  // istegimizi gonderdik url almak icin
   .then(weather => {        // ilk olarak donene degeri yakalamak icin weather isimli degisken yaptik
    return weather.json()    // promis yapisiyla calismasindan dolayi return yapiyoruz ve json formatina cevirme istegi olusturuyoruz
   })
   .then(displayResult)   // donen degeride istedigim yapiyla istedigim gibi kullaniyorum 
}

//Dorduncu bolum

const displayResult =(weather) => {  // degisken atayarak goruntuleme islemini yapiyorum burdaki amac yukarda olusan weather i yakalamak 
  //  console.log(weather)  kontrol ettik konsolda
  let city = document.querySelector(".city")
  city.innerText = `${weather.name},${weather.sys.country}`  // konsoldan sehir ve ulke ismini aldik
 
  let temp = document.querySelector(".temp")  // sicaklik almak icin olusturduk 
  temp.innerText = `${weather.main.temp}`   //  `${Math.round(weather.main.temp)}`   yuvarladik random ile sicaklik aldik

  let desc =document.querySelector(".desc")
  desc.innerText=weather.weather[0].description  // aciklama kismini aldik bultlu  gnesli vs

  let minmax = document.querySelector(".minmax")   // maximum ve minimum sicaklik degerlerini aldik
  minmax.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max} °c`   // ${Math.round(weather.main.temp_min)}
}

// BIRINCI BOLUM 
// ilk olarak sehir inputunu almak gerekli istek alacagimizdan dolayi

const searcBar = document.getElementById("searchBar")  // sehri aldik
searcBar.addEventListener("keypress" , setQuery)  // sehre tiklandiginda olacak islemlere gectik , daha sonra yukaridan bu islemi cagiracagiz