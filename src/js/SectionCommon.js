  export default class SectionCommon extends HTMLElement {
    constructor(img, imgAlt, heading, paragraph) {
      super();
      this.img = img;
      this.imgAlt = imgAlt;
      this.heading = heading;
      this.paragraph = paragraph;
      // this.attachShadow({mode: 'open'});
      this.render();
    }

    render = () => {
    //   const response = await fetch("./dist/section-common.css");
    //   const text = await response.text();

      // this.shadowRoot.innerHTML = /*html*/`
      //   <style>${text}</style>
      //   <div class="container-common">
      //     <slot name="image"></slot>
      //     <div class="container-common__content">
      //       <slot name="heading"></slot>
      //       <slot name="paragraph"></slot>
      //       <slot name="button"></slot>
      //     </div>
      // `

    //   const img = this.querySelector("img");
    //   img?.classList.add("container-common__img");

    //   const heading = this.querySelector("h1");
    //   heading?.classList.add("heading");

    //   const paragraph = this.querySelector("p");
    //   paragraph?.classList.add("paragraph");

    //   const button = this.querySelector("button");
    //   button?.classList.add("btn", "btn--primary", "container-common__button");

    this.innerHTML = /*html*/`
    <link rel="stylesheet" href="./dist/section-common.css">
    <div class="container-common">
      <img src=${this.img} alt=${this.imgAlt} class="container-commin__img">
      <div class="container-common__content">
        <h1 class="heading">${this.heading}</h1>
        <p class="paragraph">${this.paragraph}</p>
        <button class="btn btn--primary container-common__button" data-target="popup">Button</button>
      </div>
  `
  }
}

customElements.define('section-common', SectionCommon);