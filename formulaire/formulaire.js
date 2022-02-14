function verif_formulaire()
{
   if(document.formulaire.prenom.value == "")  {
   alert("Veuillez entrer votre Prénom!");
   document.formulaire.prenom.focus();
   return false;
  }
   if(document.formulaire.nom.value == "")  {
   alert("Veuillez entrer votre nom!");
   document.formulaire.nom.focus();
   return false;
  }
   if(document.formulaire.sexe.value == "") {
   alert("Veuillez entrer votre sexe!");
   document.formulaire.sexe.focus();
   return false;
  }
   if(document.formulaire.mail.value == "") {
   alert("Veuillez entrer votre adresse électronique!");
   document.formulaire.mail.focus();
   return false;
  }
   if(document.formulaire.mail.value.indexOf('@') == -1) {
   alert("Ce n'est pas une adresse électronique!");
   document.formulaire.mail.focus();
   return false;
  }
 if(document.formulaire.adresse.value == "") {
   alert("Veuillez entrer votre lieu de résidence!");
   document.formulaire.adresse.focus();
   return false;
  }
}