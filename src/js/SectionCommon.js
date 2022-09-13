  export default class SectionCommon extends HTMLElement {
    constructor(img, imgAlt, heading, paragraph) {
      super();
      this.img = this.getAttribute('img') || img;
      this.imgAlt = this.getAttribute('img-alt') || imgAlt;
      this.paragraph = this.getAttribute('paragraph') || paragraph;
      this.heading = this.getAttribute('heading') || heading;

      this.render();

      this.imgEl = this.querySelector('img');
      this.pEl = this.querySelector('p');
      this.headingEl = this.querySelector('h1');
    }
    
    // Alter component's elements on theese attributes change
    static get observedAttributes() {
      return ['heading', 'img', 'img-alt', 'paragraph'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

      switch(name){
        case 'heading': {
          this.heading = newVal;
          this.headingEl.innerHTML = this.heading;
          break;
        }
        case 'img': {
          this.img = newVal;
          this.imgEl.setAttribute('src', newVal);
          break;
        }
        case 'img-alt': {
          this.imgAlt = newVal;
          this.imgEl.setAttribute('alt', newVal);
          break;
        }
        case 'paragraph': {
          this.paragraph = newVal;
          this.pEl.innerHTML = newVal;
          break;
        }
      }
    }

    render() {
    this.innerHTML = /*html*/`
    <link rel="stylesheet" href="./dist/section-common.css">
    <div class="container-common">
      <img src=${this.img} alt=${this.imgAlt} class="container-common__img">
      <div class="container-common__content">
        <h1 class="heading">${this.heading}</h1>
        <p class="paragraph">${this.paragraph}</p>
        <button class="btn btn--primary container-common__button" data-target="popup">Button</button>
      </div>
  `
  }
}

customElements.define('section-common', SectionCommon);