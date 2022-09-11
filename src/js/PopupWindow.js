export default class PopupWindow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = /*html*/`
    <style>@import "./dist/popup-window.css";</style>
    <div class="popup">
      <div class="popup__content">
        <div class="popup__title">Alert!</div>
        <div class="popup-msg">You have clicked X times the related button!</div>
      </div>
      <button class="close-button" aria-label="close-button">&times;</button>
    </div>
    <div id="overlay"></div>
    `
  }

  // connectedCallback() {
  //   // const title = this.querySelector("h1"); // TODO
  //   // const msg = this.querySelector("p"); // TODO

  // }
}

customElements.define("popup-window", PopupWindow);
