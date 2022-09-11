export default class PopupWindow extends HTMLElement {
  constructor(clickCount, resetSessionCounter) {
    super();
    this.clickCount = clickCount;
    this.resetSessionCounter = resetSessionCounter;
    this.attachShadow({mode: "open"});
    this.render();
    if (this.clickCount > 5) {
      const resetButton = document.createElement("button");
      resetButton.classList.add("btn", "btn--reset");
      resetButton.innerText = "Reset";
      const popupContent = this.shadowRoot.querySelector(".popup__content");
      popupContent.appendChild(resetButton);
      resetButton.addEventListener("click", this.handleResetClick);
    }
  }
  
  disconnectedCallback() {
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("active");
  }

  render = () => {
    this.shadowRoot.innerHTML = /*html*/`
    <style>@import "./dist/popup-window.css";</style>
    <div class="popup">
      <div class="popup__content">
        <div class="popup__title">Alert!</div>
        <div class="popup-msg">You have clicked <b>${this.clickCount} times</b> the related button!</div>
      </div>
      <button class="close-button" aria-label="close-button">&times;</button>
    </div>
    `
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("active");
    const closeButon = this.shadowRoot.querySelector(".close-button");
    closeButon.addEventListener("click", this.handleDeleteButtonClick);
    overlay.addEventListener("click", this.handleOutsidePopupClick);
  }

  handleDeleteButtonClick = () => {
    this.remove();
  }

  handleOutsidePopupClick = (e) => {
    if (e.target !== this) {
      this.remove();
    }
  }

  handleResetClick = () => {
    this.resetSessionCounter();
    this.clickCount = 0;
    this.render();
  }
}

customElements.define("popup-window", PopupWindow);
