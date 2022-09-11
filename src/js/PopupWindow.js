export default class PopupWindow extends HTMLElement {
  constructor(clickCount) {
    super();
    this.clickCount = clickCount;
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = /*html*/`
    <style>@import "./dist/popup-window.css";</style>
    <div class="popup">
      <div class="popup__content">
        <div class="popup__title">Alert!</div>
        <div class="popup-msg">You have clicked <b>${clickCount} times</b> the related button!</div>
      </div>
      <button class="close-button" aria-label="close-button">&times;</button>
    </div>
    `
  }

  handleDeleteButtonClick = () => {
    this.remove();
  }

  handleOutsidePopupClick = (e) => {
    if (e.target !== this) {
      this.remove();
    }
  }


  connectedCallback() {
    // const title = this.querySelector("h1"); // TODO
    // const msg = this.querySelector("p"); // TODO
    // const overlay = document.createElement("div");
    // overlay.classList.add("active");
    // overlay.id = "overlay"; 
    // const body = document.querySelector("body");
    // body.appendChild(overlay); 

    const closeButon = this.shadowRoot.querySelector(".close-button");
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("active");
    closeButon.addEventListener("click", this.handleDeleteButtonClick);
    overlay.addEventListener("click", this.handleOutsidePopupClick);
  }

  disconnectedCallback() {
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("active");
    // overlay.remove();
  }
}

customElements.define("popup-window", PopupWindow);
