/* De dom (Document object model) elementen opslaan in constants */
/*Constant body element geeft aan dat we een constant variable maken die body element heet en die de waarde heeft van wat er na het = teken komt. 
Wat houdt dat in ?
Dat we in het document opzoek gaan naar een waarde met het element body, en daarvan pakken we de eerste
*/
const BODY_ELEMENT = document.getElementsByTagName("body")[0];
const HAMBURGER_ICON = document.getElementById("hamburger");

/*  Als we op de hamburger icoon klikken wordt de classlist getoggled naar menu-open, 
hiermee bedoel ik dat de class 'menu-open' wordt toegevoegd aan de body.*/
HAMBURGER_ICON.onclick= function(){
  BODY_ELEMENT.classList.toggle("menu-open");
}