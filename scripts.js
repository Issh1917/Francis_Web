var tabNumeros = ["770948855", "769044135", "776621830", "766393491"];
var tabSoldes = [100000, 20000, 30000, 40000];
var tabCodes = ["123", "1234", "12345", "123456"];

var nbreNum = tabNumeros.length;
var rep;

//Fonction qui demande le retour au menu oui ou non

function etapeSuivant() {
    var proposition = window.confirm(" \n Voulez-vous retourner au menu principal ?");
            if (proposition == true) {
                main();
            }else{
                alert("Au revoir");
            }
}

function main() {
    
    var select = document.getElementById("num");
    numCourant = select.options[select.selectedIndex].text;
    rep = window.prompt("---MENU SENMONEY---\n" +
        "---" + numCourant + "---\n" +
        "Taper le numéro du service choisi\n" +
        "1: Solde de mon compte\n" +
        "2: Transfert d\'argent\n" +
        "3: Paiement de facture\n" +
        "4: Options");
    switch (rep) {
        case "1":
            afficherSolde();
            break;
        case "2":
            transfertArgent();
            break;
        case "3":
            paiementFacture();
            break;
        case "4":
            Options();
            break;
        default:
            etapeSuivant();

    }
}

function afficherSolde() {
    var position = tabNumeros.indexOf(numCourant);
    var solde = tabSoldes[position];
    var codePin = window.prompt("votre code secret");  
    if (codePin == tabCodes[position]){
        var reponse = window.confirm("Vous avez Chosi le numéro du service " + rep + "\n" +
        "Le solde de votre compte est de : " + solde + "F\n Voulez-vous retourner au menu principale?");
        if(reponse == true) {
            main();
        }else{
            alert("Au revoir");
        }
    }else{
        var reponseError = window.confirm("Mot de passe Incorrect!!!\n\nVoulez-vous retourner au menu principale?");
        if(reponseError == true) {
            main();
        }else{
            alert("Au revoir");
        }
    }
      
}
//Fonction transfert d'argent
function transfertArgent(){
    var reponseError = window.confirm("Vous avez choisi le numéro du service "+ rep +"\n\nVoulez-vous retourner au menu principale?");
    if(reponseError == true) {
        main();
    }else{
        alert("Au revoir");
    }
}
//fonction Paiement de facture
function paiementFacture(){
    var reponseError = window.confirm("Vous avez choisi le numéro du service "+ rep +"\n\nVoulez-vous retourner au menu principale?");
    if(reponseError == true) {
        main();
    }else{
        alert("Au revoir");
    }
}

//fonction Options
function Options(){
    var reponseError = window.confirm("Vous avez choisi le numéro du service "+ rep +"\n\nVoulez-vous retourner au menu principale?");
    if(reponseError == true) {
        main();
    }else{
        alert("Au revoir");
    }
}
