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
            extensions.forEach((element) => {
                domain4 = domain3+element;
                console.log(domain4)
            });
         });
    });
});
