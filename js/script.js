
/*Use the powers of the Document Object Model (DOM) to complete the following exercises below:*/

//1. Ronald McDonald
//Find the div with the id of "first1" and replace the 'Robert' with the 'Ronald'
let divElem = document.getElementById('first1');
divElem.innerHTML = 'Ronald';


//Find the div id of 'favFood1' and replace 'Favorite Food: Whoppers' with 'Favorite Food: Big Macs'
let divFood = document.getElementById('favFood1');
divFood.innerHTML = 'Favorite Food: Whoppers';

//Find the div id of 'shoe1' and replace 'Shoe: n/a' with 'Shoe: Clown'
let divShoe = document.getElementById('shoe1');
divShoe.innerHTML = 'Shoe: Clown';


//2. Evil Grimmace
//Find the div with the id of "last2" and replace 'Grimmmmmmace' with the 'Grimmace': 
let divEvil = document.getElementById('last2');
divEvil.innerHTML = 'Grimmace';


//Find the div with the id of 'position2' and replace 'Point Guard' with 'Power Foward'
let divPos = document.getElementById('position2');
divPos.innerHTML = 'Power Forward';


//Find the div id of 'nickName2' and replace 'aka:The Purple Monster' with 'The Poor Man's Barney'
let divName = document.getElementById('nickName2');
divName.innerHTML = "The Poor Man's Barney";


//3. Mayor McCheese

//Find the div with the id of 'nickName3' and replace 'aka: Mister President' with 'aka: Da Mayah'
let divMayor = document.getElementById('nickName3');
divMayor.innerHTML = 'aka: Da Mayah';


//Find the div with the id of 'favFood3' and replace 'Favorite Food: Kale Salad' with 'Favorite Food: Cheeseburgers';
let divFavs = document.getElementById('favFood3');
divFavs.innerHTML = 'Favorite Food: Cheeseburgers';


//Find the div with the id of 'shoe3' and replace 'Shoe: Jordan Brand' with 'Shoe: Li-Ning'
let divShoes = document.getElementById('shoe3');
divShoes.innerHTML = 'Shoe: Li-Ning';


//4. Player cards 
//The player cards needs an artistic update. Change the following:
//4.1 background color to 'red'
//4.2 border style to 'solid'
//4.3 border color to 'gold'
let list = document.getElementsByClassName('playerCard');

/* list.getElementsByClassName('playerCard')[0].style.background = 'red';
list.getElementsByClassName('playerCard')[0].style.borderStyle = 'solid';
list.getElementsByClassName('playerCard')[0].style.borderColor = 'gold';

list.getElementsByClassName('playerCard')[1].style.background = 'red'; */
 
for (let i = 0; i < list.length; i++) {
      list[i].style.background = 'red';
      list[i].style.borderStyle = 'solid';
      list[i].style.borderColor = 'gold';
}


//5. Uncle O'Grimacey
//Create the following for each element:

/*5.1 Create a div element with:
      id of 'position7'
      innerHTML of 'Coach'
      add this newly created div element to Uncle's player card
*/

let player = document.getElementsByClassName('playerCard');

let unc = document.createElement('div');
unc.id = 'position7';
unc.innerHTML = 'Coach';
player[6].prepend(unc);


/*5.2 Create a h1 element with:
    id of 'last7'
    innerHTML of "O'Grimacey"
    add this newly created h1 element to Uncle's player card
*/

let lastName = document.createElement('h1');
lastName.id = 'last7';
lastName.innerHTML = "O'Grimmacey";
player[6].prepend(lastName);

/*5.3 Create a h2 element with:
    id of 'first7'
    innerHTML of 'Uncle'
    add this newly created h2 element to Uncle's player card
*/

let firstName = document.createElement('h2');
firstName.id = 'first7';
firstName.innerHTML = 'Uncle';
player[6].prepend(firstName);

//6. Fry Guys

/*6.1 Create a div element with:
      id of 'nickName8'
      innerHTML of 'aka: Pom-poms'
      add this newly created div element to Fry Guys player card
*/ 

let fryGuys = document.createElement('div');
fryGuys.id = 'nickName8';
fryGuys.innerHTML = 'aka: Pom-poms';
player[7].appendChild(fryGuys);


/*6.2 Create a div element with:
      id of 'favFood8'
      innerHTML of 'Favorite Food: French Fries'
      add this newly created div element to Fry Guys player card
*/

let favFood8 = document.createElement('div');
favFood8.id = 'favFood8';
favFood8.innerHTML = 'Favorite Food: French Fries';
player[7].appendChild(favFood8);

/*6.3 Create a div element with:
      id of 'shoe8'
      innerHTML of 'Shoe: Puma'
      add this newly created div element to Fry Guys player card
*/

let favsShoe8 = document.createElement('div');
favsShoe8.id = 'shoe8';
favsShoe8.innerHTML = 'Shoe: Puma';
player[7].appendChild(favsShoe8);


//7. Birdie the Early Bird

/*7.1 Create a div element with:
      id of 'position9'
      innerHTML of 'Head Scout'
      add this newly created div element to Birdie's player card
*/

let birdie = document.createElement('div');
birdie.id = 'position9';
birdie.innerHTML = 'Head Scout';
player[8].prepend(birdie);

/*7.2 Create a h1 element with:
    id of 'last9'
    innerHTML of 'Early Bird'
    add this newly created h1 element to Birdie's player card
*/

let lastName9 = document.createElement('h1');
lastName9.id = 'last9';
lastName9.innerHTML = 'Early Bird';
player[8].prepend(lastName9);

/*7.3 Create a h2 element with:
    id of 'first9'
    innerHTML of 'Birdie the'
    add this newly created h2 element to Birdie's player card
*/

let firstName9 = document.createElement('h2');
firstName9.id = 'first9';
firstName9.innerHTML = 'Birdie the';
player[8].prepend(firstName9);

/*7.4 Create a div element with:
      id of 'nickName9'
      innerHTML of 'aka: ODB'
      add this newly created div element to Birdie's player card
*/

let nickName9 = document.createElement('div');
nickName9.id = 'nickName9';
nickName9.innerHTML = 'aka: ODB';
player[8].appendChild(nickName9);


/*7.5 Create a div element with:
      id of 'favFood9'
      innerHTML of 'Favorite Food: The other white meat'
      add this newly created div element to Birdie's player card
*/

let favFood9 = document.createElement('div');
favFood9.id = 'favFood9';
favFood9.innerHTML = 'Favorite Food: The other white meat';
player[8].appendChild(favFood9);


/*7.6 Create a div element with:
      id of 'shoe9'
      innerHTML of 'Shoe: allbirds'
      add this newly created div element to Birdie's player card
*/

let shoe = document.createElement('div');
shoe.id = 'shoe9';
shoe.innerHTML = 'Show: allbirds';
player[8].appendChild(shoe);