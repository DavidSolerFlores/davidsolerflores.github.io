var hora;
function inici(){
    var dia = prompt ("Escriu el dia que vols veure l'horari")
dia = dia.toLowerCase();
 hora = prompt ("Escriu el número de la franja de hores: \n1: 8:00 - 9:00 \n2: 9:00 - 10:00 \n3: 10:25 - 11:25\n4: 11:25 - 12:25\n5: 12:45 - 13:45\n6:13:45 - 14:40 \n O escriu \"TOTES\" per veure l'horari complert d'aquest dia")
if (dia == "dilluns"){
    dilluns()
}else if (dia == "dimarts"){
    dimarts()
}else if (dia == "dimecres"){
    dimecres()
}else if (dia == "dijous"){
    dijous();
}else if (dia == "divendres"){
    divendres()
}else{
    alert("Introdueix un dia de la setmana Dilluns - Divendres")
    inici();
}


}
inici()
function dilluns(){
if (hora == 1){
    alert ("Mates")
    
}else if (hora == 2){
    alert ("Història")
    
}else if (hora == 3){
    alert ("Filosofia")
}else if (hora == 4){
    alert ("Castellà")
}else if (hora == 5){
    alert ("Dibuix")
}else if (hora == 6){
    alert ("Anglès")
}else if ((hora == "TOTES")||(hora == "totes")||(hora == "Totes")){
    alert ("Mates\nHistòria\nFilosofia\nCastellà\nDibuix\nAnglès")
}
inici();
}
function dimarts(){
    if (hora == 1){
        alert ("Dibuix")
        
    }else if (hora == 2){
        alert ("Tecno")
        
    }else if (hora == 3){
        alert ("Fisica")
    }else if (hora == 4){
        alert ("Anglès")
    }else if (hora == 5){
        alert ("Castellà")
    }else if (hora == 6){
        alert ("Català")
    }else if ((hora == "TOTES")||(hora == "totes")||(hora == "Totes")){
        alert ("Dibuix\nTecno\nFisica\nAnglès\nCastellà\nCatalà")
    }
    inici();
}
function dimecres(){
    if (hora == 1){
        alert ("Fisica")
        
    }else if (hora == 2){
        alert ("Tecno")
        
    }else if (hora == 3){
        alert ("Filosofia")
    }else if (hora == 4){
        alert ("Mates")
    }else if (hora == 5){
        alert ("Català")
    }else if (hora == 6){
        alert ("Història")
    }else if ((hora == "TOTES")||(hora == "totes")||(hora == "Totes")){
        alert ("Fisica\nTecno\nFilosofia\nMates\nCatalà\nHistòria")
    }
    inici();
}
function dijous(){
    if (hora == 1){
        alert ("Tecno")
        
    }else if (hora == 2){
        alert ("Mates")
        
    }else if (hora == 3){
        alert ("Dibuix")
    }else if (hora == 4){
        alert ("Filosofia")
    }else if (hora == 5){
        alert ("Anglès")
    }else if (hora == 6){
        alert ("Fisica")
    }else if ((hora == "TOTES")||(hora == "totes")||(hora == "Totes")){
        alert ("Tecno\nMates\nDibuix\nFilosofia\nAnglès\nFisica")
    }
    inici();
}
function divendres(){
    if (hora == 1){
        alert ("Història")
        
    }else if (hora == 2){
        alert ("Dibuix")
        
    }else if (hora == 3){
        alert ("Fisica")
    }else if (hora == 4){
        alert ("Tutoria")
    }else if (hora == 5){
        alert ("Mates")
    }else if (hora == 6){
        alert ("Tecnologia")
    }else if ((hora == "TOTES")||(hora == "totes")||(hora == "Totes")){
        alert ("Història\nDibuix\nFísica\nTutoria\nMates\n Tecnologia")
    }
    inici();
}