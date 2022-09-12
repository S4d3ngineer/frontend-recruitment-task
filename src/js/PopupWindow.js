export default class PopupWindow extends HTMLElement {
	constructor(clickCount, resetSessionCounter, getTableData) {
		super();
		this.clickCount = clickCount;
		this.resetSessionCounter = resetSessionCounter;
		this.getTableData = getTableData;
		// this.attachShadow({ mode: "open" });
		this.render();
		if (this.clickCount > 5) {
			const resetButton = document.createElement("button");
			resetButton.classList.add("btn", "btn--reset");
			resetButton.innerText = "Reset";
			const popupContent = this.querySelector(".popup__content");
			popupContent.appendChild(resetButton);
			resetButton.addEventListener("click", this.handleResetClick);
		}
	}

	disconnectedCallback() {
		const overlay = document.querySelector("#overlay");
		overlay.classList.remove("active");
	}

	render = () => {
		this.innerHTML = /*html*/ `
    <div class="popup">
      <div class="popup__content">
        <div class="popup__title">Alert!</div>
        <div class="popup-msg">You have clicked <b>${this.clickCount} times</b> the related button!</div>
      </div>
      <button class="close-button" aria-label="close-button">&times;</button>
      </div>
    `;
		const overlay = document.querySelector("#overlay");
		overlay.classList.add("active");
		const closeButon = this.querySelector(".close-button");
		closeButon.addEventListener("click", this.handleDeleteButtonClick);
		overlay.addEventListener("click", this.handleOutsidePopupClick);

		this.renderTableData();
	};

	renderTableData = async () => {
		const tableData = await this.getTableData();
		const popupContent = this.querySelector(".popup__content");
		const loader = document.createElement("div");
		loader.classList.add("loader");
		popupContent.appendChild(loader);
    
		// seTimeout is called in order to show loader in case,
		// data is fetched too fast for the loader to be visible long enough
		setTimeout(() => {
			const table = document.createElement("table");
      table.classList.add("popup__table")
			table.innerHTML = /*html*/ `
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Company Name</th>
          <tr>
        </thead>
      `;
      const tBody = table.createTBody();
			tableData.forEach((person) => {
				const row = tBody.insertRow();
				const fullName = row.insertCell();
				fullName.innerHTML = person.name;
				const email = row.insertCell();
				email.innerHTML = person.email;
				const address = row.insertCell();
				address.innerHTML =
					person.address.street +
					" " +
					person.address.suite +
					", " +
					person.address.city;
				const phoneNumber = row.insertCell();
				phoneNumber.innerHTML = person.phone.split(" ")[0];
				const companyName = row.insertCell();
				companyName.innerHTML = person.company.name;
			});
			popupContent.appendChild(table);
			loader.remove();
		}, 2000);
	};

	handleDeleteButtonClick = () => {
		this.remove();
	};

	handleOutsidePopupClick = (e) => {
		if (e.target !== this) {
			this.remove();
		}
	};

	handleResetClick = () => {
		this.resetSessionCounter();
		this.clickCount = 0;
		this.render();
	};
}

customElements.define("popup-window", PopupWindow);
