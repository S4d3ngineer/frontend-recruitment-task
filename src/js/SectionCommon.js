  export default class SectionCommon extends HTMLElement {
    constructor(img, imgAlt, heading, paragraph) {
      super();
      this.img = img;
      this.imgAlt = imgAlt;
      this.heading = heading;
      this.paragraph = paragraph;
      this.render();
    }

    render = () => {
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