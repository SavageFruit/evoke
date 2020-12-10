console.log('Hello World!');

let toggle = 'on';
function ui_menu_toggle() {
  if(toggle === 'on') {
    let menu = document.getElementById("jsmenu");
    menu.style.opacity = "1";
    toggle = 'off'
  } else if(toggle === 'off') {
    let menu = document.getElementById("jsmenu");
    menu.style.opacity = "0";
    toggle = 'on';
  }
}

function search() {
  let input = document.getElementById('id-input-search');
  let inputV = input.value;
}
