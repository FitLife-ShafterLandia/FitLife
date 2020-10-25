var wynik = 0;

function czysc(){


    
    location.reload();
    
    document.getElementById("wynik").innerHTML=wynik;
    

    }



function policz(){
    var g = document.getElementById("XDD").value;

    var g = Number(g);



    if(g<=0 || Number.isInteger(g) == false){
        document.getElementById("wynik").innerHTML="Wpisana wartość jest mniejsza niż 0, bądź nie jest liczbą";
            }
    else{
    var gram = (g/100);
    var e = document.getElementById("lista");
    var result = lista.options[e.selectedIndex].value;
    var mnoznik = 1;
    if(result=="Kurczak"){
        mnoznik= 239;
    }
    else if(result=="Ryż"){
        mnoznik= 130;
    }
    else if(result=="Jabłko"){
        mnoznik= 52;
    }
    else if(result=="Borówka"){
        mnoznik= 57;
    }
    else if(result=="Makaron"){
        mnoznik= 131;
    }
    else if(result=="Pomidor"){
        mnoznik= 18;
    }
    else if(result=="Kajzerka"){
        mnoznik= 310;
    }
    else if(result=="Pierś z kurczaka"){
        mnoznik= 165;
    }
    else if(result=="Sałata"){
        mnoznik= 15;
    }
    else if(result=="Ziemniak"){
        mnoznik= 65;
    }
    else if(result=="Ser"){
        mnoznik= 402;
    }

    wynik = wynik + gram*mnoznik;

    done = Math.round(wynik*1)/1;


    document.getElementById("wynik").innerHTML=done;}



}


var koniec = 0;


function sprawdz(){
    var waga = document.getElementById("XDD3").value;
    var wiek = document.getElementById("XDD2").value;
    var wzrost = document.getElementById("XDD4").value;

    var waga = Number(waga);
    var wiek = Number(wiek);
    var wzrost = Number(wzrost);

    var koniec = 0;


    if(16 > wiek || 100 > wzrost || 30 > waga || Number.isInteger(wiek) == false || Number.isInteger(wzrost) == false || Number.isInteger(waga) == false){
        document.getElementById("wynik2").innerHTML="Przynajmniej jedna z podanych informacji jest mniejsza od wymaganych bądź nie jest liczbą!";
    }
    else{


    var es = document.getElementById("lista2");
    var result2 = lista2.options[es.selectedIndex].value;
    if (result2 == "Mężczyzna"){
        koniec = (13.7 * waga) + (5 * wzrost) - (6.76 * wiek) + 66.47;
        koniec = Math.round(koniec*1)/1;
        document.getElementById("wynik2").innerHTML=koniec;

    }
    else if (result2 == "Kobieta"){
        koniec = (9.567*waga) + (1.85*wzrost) - (4.68*wiek) + 655.1;
        koniec = Math.round(koniec*1)/1;
        document.getElementById("wynik2").innerHTML=koniec;

    }}

    
}

function BMI() {

    var e = document.getElementById("weight").value;
    var f = document.getElementById("tall").value;


    var e = Number(e);
    var f = Number(f);


    if( 100 > f || 30 > e || Number.isInteger(f) == false || Number.isInteger(e) == false){
        document.getElementById("wynik3").innerHTML="Przynajmniej jedna z podanych informacji jest mniejsza od wymaganych bądź nie jest liczbą!";
    }
    else{


    var result = (e / (f * f))*10000;
    result = Math.round(result*100)/100;
   

    if (result < 18.5) {
        document.getElementById("wynik3").innerHTML = result + " Twoje BMI oznacza niedowagę";
    }

    else if (result >= 18.5 && result <= 24.99) {
        document.getElementById("wynik3").innerHTML = result + " Twoje BMI jest prawidłowe";
    }
    else if (result >= 25 && result <= 30) {
        document.getElementById("wynik3").innerHTML = result + " Twoje BMI oznacza nadwagę";
    }
    else {
        document.getElementById("wynik3").innerHTML = result + " Twoje BMI oznacza otyłość";
    }}

}
