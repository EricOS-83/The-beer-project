var bottles_of_beer = 99;


function beer (){

    while(bottles_of_beer > 0){

        if(bottles_of_beer == 1){
            console.log( bottles_of_beer + " bottle of beer on the wall," + bottles_of_beer +  " bottle of beer.");
            bottles_of_beer-- ;
            console.log("Take one down and pass it around, no more bottles of beer on the wall. \n");
            console.log("No more bottles of beer on the wall, no more bottles of beer." );
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.\n");
            break;
        }

    console.log( bottles_of_beer + " bottles of beer on the wall," + bottles_of_beer +  " bottles of beer.");
    bottles_of_beer -- ;
    console.log("Take one down and pass it around," + bottles_of_beer +" bottles of beer on the wall. \n");
    }

}

beer(bottles_of_beer);