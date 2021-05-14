var buttons = document.querySelectorAll(".button");
const sound = (key) => {
  switch (key) {
    case "w":
      var sound1 = document.querySelector(`[data-sound='${key}']`);
      sound1.play();
      break;
    case "W":
      var sound1 = document.querySelector(
        `[data-sound='${key.toLowerCase()}']`
      );
      sound1.play();
      break;

    case "a":
      var sound2 = document.querySelector(`[data-sound='${key}']`);
      sound2.play();
      break;
    case "A":
      var sound2 = document.querySelector(
        `[data-sound='${key.toLowerCase()}']`
      );
      sound2.play();
      break;

    case "s":
      var sound3 = document.querySelector(`[data-sound='${key}']`);
      sound3.play();
      break;
    case "S":
      var sound3 = document.querySelector(
        `[data-sound='${key.toLowerCase()}']`
      );
      sound3.play();
      break;

    case "d":
      var sound4 = document.querySelector(`[data-sound='${key}']`);
      sound4.play();
      break;
    case "D":
      var sound4 = document.querySelector(
        `[data-sound='${key.toLowerCase()}']`
      );
      sound4.play();
      break;

    case "j":
      var sound5 = document.querySelector(`[data-sound='${key}']`);
      sound5.play();
      break;
    case "J":
      var sound5 = document.querySelector(
        `[data-sound='${key.toLowerCase()}']`
      );
      sound5.play();
      break;

    case "k":
      var sound6 = document.querySelector(`[data-sound='${key}']`);
      sound6.play();
      break;
    case "K":
      var sound6 = document.querySelector(
        `[data-sound='${key.toLowerCase()}']`
      );
      sound6.play();
      break;

    case "l":
      var sound7 = document.querySelector(`[data-sound='${key}']`);
      sound7.play();
      break;
    case "L":
      var sound7 = document.querySelector(
        `[data-sound='${key.toLowerCase()}']`
      );
      sound7.play();
      break;

    default:
      console.log(key);
  }
};
const animation = (key) => {
    let buttonSelect;
    if(key==='w' || key==='a' || key==='s' || key==='d' || key==='j' || key==='k' || key==='l'){
        buttonSelect=document.querySelector(`[data-key='${key}']`);
    }else if(key==='W' || key==='A' || key==='S' || key==='D' || key==='J' || key==='K' || key==='L'){
        buttonSelect=document.querySelector(`[data-key='${key.toLowerCase()}']`);
    }else{
        return;
    }
    buttonSelect.classList.add('animation');
    setTimeout(() => {
        buttonSelect.classList.remove('animation');
    }, 600);
}
for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", (event) => {
    // console.log(event.target.dataset.key);
    const buttonStyle = event.target.dataset.key;
    // console.log(buttonStyle);
    sound(buttonStyle);
    animation(buttonStyle);
    
  });
}

document.addEventListener("keypress", function (event) {
  sound(event.key);
  animation(event.key);
});
