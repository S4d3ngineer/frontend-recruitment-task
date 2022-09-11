import SectionCommon from "./SectionCommon.js";
import Popup from "./PopupWindow.js";

// const clickCount = sessionStorage.getItem("clickCount");
// if (!clickCount) {
//   sessionStorage.setItem("clickCount", 0)
// };

const openPopupButtons = document.querySelectorAll("[data-popup-target]");

openPopupButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // TODO Make every button store data independently
    let currentClickCount = sessionStorage.getItem("clickCount" + index);
    if (!currentClickCount) {
      currentClickCount = 0;
      sessionStorage.setItem("clickCount" + index, currentClickCount);
    }
    currentClickCount ++;
    sessionStorage.setItem("clickCount" + index, currentClickCount);
    const popup = new Popup(currentClickCount);
    const body = document.querySelector("body");
  body.appendChild(popup);  
  })
})

// function handleButtonClick() {
//   const popup = new Popup(); // pass click count
//   const body = document.querySelector("body");
//   body.appendChild(popup);
// }

// function handlePopupClose() {

// }

// document.addEventListener("click", (e) => {
//   console.log(e.target);
// }) 
