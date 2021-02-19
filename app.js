// Variables iniciales del ejercicio.
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
// Variable para ejercicios adicionalesgit 
const extensions = ['.com', '.net', '.us', '.io'];
const specialDomains = ['on','us'];
// Variables que guardan cada paso.
let domain = "";
let domain2 = "";
let domain3 = "";
let domain4= "";
// Recorre cada elemento para formar el string final.
pronoun.forEach((element) => {
    domain = element;
    adj.forEach((element) => {
        domain2 = domain+element;
        noun.forEach((element) => {
            domain3 = domain2+element;
            // dominios especiales, Ofrece dominio especial cuando el nombre termina en alguno de los special domains en Array specialDomains
                let dominiofinal = domain3.split("");
                let newDomain = (dominiofinal[dominiofinal.length-2]+dominiofinal[dominiofinal.length-1])
                specialDomains.forEach((element) => {
                    if (newDomain===element){
                        dominiofinal.pop();
                        dominiofinal.pop();
                        console.log('Your domain ends in "'+ element + '" here is a special domain for you: ' +dominiofinal.join("")+'.'+newDomain)
                    }
                });
            // Agrega todas las extensiones disponibles de un nuevo array.
            extensions.forEach((element) => {
                domain4 = domain3+element;
                console.log(domain4)
            });
         });
    });
});
