let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

let domain = "";
let domain2 = "";
let domain3 = "";
let domain4= "";
pronoun.forEach((element) => {
    domain = element;
    adj.forEach((element) => {
        domain2 = domain+element;
        noun.forEach((element) => {
            domain3 = domain2+element;
            // dominios especiales
            let dominiofinal = domain3.split("");
            //console.log(dominiofinal)
            //if (dominiofinal[dominiofinal.length-1]="r"){
            //    console.log("Yes")
            let newDomain = (dominiofinal[dominiofinal.length-2]+dominiofinal[dominiofinal.length-1])
            dominiofinal.pop();
            dominiofinal.pop();
            console.log('Fancy Domain Name: '+dominiofinal.join("")+'.'+newDomain)
            console.log('Regular Domain Names: ')

            extensions.forEach((element) => {
                domain4 = domain3+element;
                console.log(domain4)
            });
         });
    });
});
