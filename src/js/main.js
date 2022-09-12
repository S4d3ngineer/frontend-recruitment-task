import SectionCommon from "./SectionCommon.js";
import Popup from "./PopupWindow.js";

const body = document.querySelector("body");

const sampleImgURL = "/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg";
const sampleImgAltText = "Beach Image";
const sampleHeading = "Lorem Ipsum";
const sampleParagraph = `
  Infinitely scalable, feature-rich and cloud-native data management and protection 
  for modern and legacy infrastructures and SaaS platforms,
  managed via a single app with no hardware required.
`
const sampleCommonSection = new SectionCommon(
  sampleImgURL,
  sampleImgAltText,
  sampleHeading,
  sampleParagraph
);
body.appendChild(sampleCommonSection);

// Adding individual click-counting for popup buttons (data is stored inside session)
const openPopupButtons = document.querySelectorAll("[data-target=popup]");
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
