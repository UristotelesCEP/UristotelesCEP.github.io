const Nombres = new Array("Primer exercisi","Dades primitives","Dades complexes","Innher Html, Document.Write","Window methods","ConsoleLog","Formularis","Condicional If","Condicional Switch","Objeces JS - Numeros","Objeces JS - Strings","Objeces JS - Arrays","Objeces JS - Dates","Objectes - Map()", "Objectes - includes()","Arrays - Sort()","Cookies en JS");

const IndexTables = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
const jsons= new Array("1-Primer_exercisi.json","2-SegundoEjemplo.json","3-Dades_complexes.json","4-InnerHtml_i_DocumentWrite.json","5-window_methods.json","6-ConsoleLog.json","7-Formularis.json","8-IF.json","9-Switch.json","10-Number.json","11-Strings.json","12-Arrays.json","13-DateClass.json","14-MapExample.json","15-includesMethod.json","16-Sort_Method.json","17-Cookies_js.json");



function GetEnlaces()
{
    let array = new Array();
    for (let index = 0; index < Nombres.length; index++) {
        array.push("https://uristotelescep.github.io/Exemples/#"+index);        
    }
    return array;
    
}



const Llenguatges = new Array("");
Llenguatges[0] = new Array("Php","JS","Css","Personal");
Llenguatges[1] = new Array("primary","warning","info","dark");

const IndexPhp = 0; //
const IndexJS = 1;
const IndexCss = 2; 
const IndexPersonal = 3; 

const NombresGit = new Array("Pagina incial","Proyecto Pokemons","UristotelesCEP.github.io");
const EnlacesGit = new Array("https://github.com/UristotelesCEP","https://github.com/UristotelesCEP/ExercisiPokemones","https://github.com/UristotelesCEP/UristotelesCEP.github.io");
const IndexTables2 = new Array(3,0,3);



const EnlaceImagen = "./media/GoodJfiddle.png";