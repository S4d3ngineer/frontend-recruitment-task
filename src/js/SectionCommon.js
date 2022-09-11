  export default class SectionCommon extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'}); 
      this.render();
    }

    render = () => {
      this.shadowRoot.innerHTML = /*html*/`
          <style>@import "./dist/section-common.css";</style>
          <div class="container-common">
            <slot name="image"></slot>
            <div class="container-common__content">
              <slot name="heading"></slot>
              <slot name="paragraph"></slot>
              <slot name="button"></slot>
            </div>
      `

      // Adding classes to the elements inserted in place of slots
      const img = this.querySelector("img");
      img?.classList.add("container-common__img");

      const heading = this.querySelector("h1");
      heading?.classList.add("heading");

      const paragraph = this.querySelector("p");
      paragraph?.classList.add("paragraph");

      const button = this.querySelector("button");
      button?.classList.add("btn", "btn--primary", "container-common__button");
    }
}

customElements.define('section-common', SectionCommon);