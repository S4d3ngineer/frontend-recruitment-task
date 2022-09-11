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
    <div id="overlay"></div>
    `
  }

  handleRemovePopup = () => {
    this.remove();
  }

  


  connectedCallback() {
  //   // const title = this.querySelector("h1"); // TODO
  //   // const msg = this.querySelector("p"); // TODO
    const closeButon = this.shadowRoot.querySelector(".close-button");
    const overlay = this.shadowRoot.querySelector("#overlay");
    console.log(overlay);
    closeButon.addEventListener("click", this.handleRemovePopup);
    overlay.addEventListener("click", this.handleRemovePopup);
  }
}

customElements.define("popup-window", PopupWindow);
