;(function () {

  'use strict';

  let player = '';
  let player2 = 'O';
  let one, two, three, four, five, six, seven, eight, nine
  const form = document.querySelector('form');
  let xoArray = [];

  form.addEventListener('submit', () => {

    if (player === '') {
        player = 'X';
    } else if (player === 'O') {
        player = 'X';
    } else {
        player = 'O';
    };

    console.log("player", player);

     one = document.querySelector('input[name="1"]').value
     two = document.querySelector('input[name="2"]').value
     three = document.querySelector('input[name="3"]').value
     four = document.querySelector('input[name="4"]').value
     five = document.querySelector('input[name="5"]').value
     six = document.querySelector('input[name="6"]').value
     seven = document.querySelector('input[name="7"]').value
     eight = document.querySelector('input[name="8"]').value
     nine = document.querySelector('input[name="9"]').value

    xoArray.push(one, two, three, four, five, six, seven, eight, nine);
    console.log("array", xoArray);

    for (var i =0; i< xoArray.length; i++) {
      if(player === xoArray[0] && player === xoArray[1] && player === xoArray[2]) {
          console.log(`${player} wins`);
      } else if( player === xoArray[0] && player === xoArray[3] && player === xoArray[6])  {
          console.log(`${player} wins`);
      } else if(player === xoArray[1] && player === xoArray[4] && player === xoArray[7])  {
          console.log(`${player} wins`);
      } else if(player === xoArray[2] && player === xoArray[5] && player === xoArray[8])  {
          console.log(`${player} wins`);
      } else if(player === xoArray[3] && player === xoArray[4] && player === xoArray[5])  {
          console.log(`${player} wins`);
      } else if(player === xoArray[6] && player === xoArray[7] && player === xoArray[8])  {
          console.log(`${player} wins`);
      } else if(player === xoArray[0] && player === xoArray[4] && player === xoArray[8])  {
          console.log(`${player} wins`);
      } else if(player === xoArray[2] && player === xoArray[4] && player === xoArray[6])  {
          console.log(`${player} wins`);

      // } else if(player2 === xoArray[0] && player2 === xoArray[1] && player2 === xoArray[2]) {
      //     alert(`${player2} wins`);
      // } else if( player2 === xoArray[0] && player2 === xoArray[3] && player2 === xoArray[6])  {
      //     alert(`${player2} wins`);
      // } else if(player2 === xoArray[1] && player2 === xoArray[4] && player2 === xoArray[7])  {
      //     alert(`${player2} wins`);
      // } else if(player2 === xoArray[2] && player2 === xoArray[5] && player2 === xoArray[8])  {
      //     alert(`${player2} wins`);
      // } else if(player2 === xoArray[3] && player2 === xoArray[4] && player2 === xoArray[5])  {
      //     alert(`${player2} wins`);
      // } else if(player2 === xoArray[6] && player2 === xoArray[7] && player2 === xoArray[8])  {
      //     alert(`${player2} wins`);
      // } else if(player2 === xoArray[0] && player2 === xoArray[4] && player2 === xoArray[8])  {
      //     alert(`${player2} wins`);
      // } else if(player2 === xoArray[2] && player2 === xoArray[4] && player2 === xoArray[6])  {
      //     alert(`${player2} wins`);
      } else{
        alert('its a tie!')
      }
    }

    event.preventDefault();
  });


}());
