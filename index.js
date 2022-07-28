//                                                            FONCTION CALLBACK


// Fonction Callback --> tu crée une fonction principale , et une 2eme fonction a l exterieur du scope de celle ci . tu peux appeler la 2eme fonction via la 1ere fonction 

//Exemple



//function qui sera appeler en deuxieme (la fonction de callback)

const func01 = () => {
  console.log("je suis la fonction func01 , appelé par la fonction principale");
};

const func02 = () => {
  console.log("je suis la fonction func02 , appelé par la fonction principale");
};

const func03 = () => {
  console.log("je suis la fonction func03 , appelé par la fonction principale");
};

//FUNCTION PRINCIPALE      --> prend callback en argument , tu appelles la callback dans une fonction anonyme ds ce cas ci , puis 1ere fonction appelle la 2eme fonction secondaire 

function principale(callback) {
console.log("je suis la fonction principale");
callback();
};

principale(func02);  // ou appeler func02 ou  func03 ;) 




                                           //* FONCTION callback avec plusieurs parametres 

//  FONCTION SECONDAIRE 

    const func001 = (app ) => {
    console.log( app + "je suis la fonction func001 , appelé par la fonction principale");
    };

//  FONCTION PRINCIPALE 

    function principalee(coucou , a, callback) {                                    // --> 2 parametres , appelé arguments 
        console.log( coucou + "je suis la fonction principaleee");
        callback(a);                                                       //  --> appel ces 2 parametres 
        };
principalee( "kevin" ,"my app" , func001);                                          //  --> applique ces 2 parametres 

// 1)il va faire le premier argument coucou qui correspond a "kevin" 
// 2)je suis la fonction principaleee 
// 3)va mettre le 2eme arguemnts dans le fonction secondaire  "my app"   
 //4) lis la suite de la fonction secondaire je suis la fonction 001 , appelé par la fonction principale 








