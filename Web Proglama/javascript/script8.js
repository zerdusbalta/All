
// Koşullu Durumlar ( if-else )

const firstName = "Çağla";
const userName = "caglayilmaz";
const age = 20;
const isStudent = true;
const school = "university";

if (userName == "caglayilmaz"){
    console.log("Merhaba Çağla");
}else{
    console.log("Kullanıcı bulunamadı")
}

// if (age === 20 ){
//     console.log("Yaşınız : 20")
// }

if (isStudent){
 console.log("Hangi bölümde okuyorsun?")
}else{
    console.log("Hangi mesleği yapıyorsunuz?")
}

if (age>=18){
    if (school == "university"){
        console.log("Ehliyet Alabilirsin.")
    }
    else{
        console.log("Eğitim durumun ehliyet almak için yetersiz.")
    }
}else{
    console.log("Yaşınız ehliyet almak için yetersiz.")
}

let id = "222333"

if (typeof id != "undefined"){
    console.log("id: "+ id);
}else{
    console.log("no id")
}