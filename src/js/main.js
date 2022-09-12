import SectionCommon from "./SectionCommon.js";
import Popup from "./PopupWindow.js";

const openPopupButtons = document.querySelectorAll("[data-target=popup]");

// Adding individual click counting for popup buttons (data is stored inside session)
openPopupButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let currentClickCount = sessionStorage.getItem("clickCount" + index);
    if (!currentClickCount) {
      currentClickCount = 0;
      sessionStorage.setItem("clickCount" + index, currentClickCount);
    }
    currentClickCount ++;
    sessionStorage.setItem("clickCount" + index, currentClickCount);
    const handleResetClickCounter = () => {
      sessionStorage.setItem("clickCount" + index, 0);
    }
    const popup = new Popup(
      currentClickCount,
      handleResetClickCounter,
      getEndpointData
      );
    const body = document.querySelector("body");
  body.appendChild(popup);  
  })
})

const getEndpointData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}
