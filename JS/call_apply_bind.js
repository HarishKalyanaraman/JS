// var pokemon = {
//     firstName: 'Pika',
//     lastName:'Chu',
//     getPokeName: function(){
//         var fullName = this.firstName+ ' '+ this.lastName;
//         return fullName;
//     }
// }

// var pokemonName = function(snack, hobby){
//     console.log(this.getPokeName()+ ' I chose you')
//     console.log(this.getPokeName()+ ' loves '+ snack+ ' and '+ hobby)
// }

// //bind -- used in react also
// var bindPokemon = pokemonName.bind(pokemon);
// //100 lines of code
// bindPokemon('sushi', 'javascript')






//2. ------------------CALL
var pokemon = {
    firstName: 'Pika',
    lastName:'Chu',
    getPokeName: function(){
        var fullName = this.firstName+ ' '+ this.lastName;
        return fullName;
    }
}

var pokemonName = function(snack, hobby){
    console.log(this.getPokeName()+ ' loves '+ snack+ ' and '+ hobby)
}

pokemonName.call(pokemon,'sushi', 'javascript' ) //executes immediately unlike bind, which requires a call after binding the function and the object
pokemonName.apply(pokemon,['sushi', 'javascript'] ) //argument sent in as an array for apply
