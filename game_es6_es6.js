// global variables for multipurpose uses
let i = "Investigate" && "investigate";
let l = "Left" && "left";
// document.getElementById("bodyId").style.backgroundImage = `url"${}"`

const enterCabin = confirm("You come across an abandoned cabin in the woods. Do you enter?");

if (enterCabin == true) { 
	// option to search around the room
  const figurineDirection = prompt("You find yourself in a cozy living room filled with tiny G. I. Joe figurines. Investigate them or look around the room (Left or Right)?");

  if (figurineDirection == l) {
    // you have entered the kitchen
    const kitchenOptions = prompt("You have entered the kitchen, do you want to investigate?");

    if (kitchenOptions == i) {
      //found something something in the kitchen
      const weaponOne = confirm("You found a mousetrap! Grab it?");

      if (weaponOne == true) {
        //collect and skirt
        const mouseYes = confirm("You pocketed the mousetrap. Go back to the living room?");

        if (mouseYes == true) {
          // return to living room, new decision
          const directionTwo = prompt("You have returned to the living room. Do you investigate the right corridor?");
        }
        else {
          // hahaha wrong choice again - now that's just mean
          alert("As you wait in the kitchen, the crackling of something cooking startles you. As you turn around, a shadow from behind suffocates you with cheese. You died!");
        }
      }
    }
  }
} else {
	//if they chicken out
  alert("A figurine flew out of the cabin and hit you in the head. You Died!");
}