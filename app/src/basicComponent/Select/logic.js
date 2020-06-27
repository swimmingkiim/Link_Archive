const Logic = {
	openFilterList: () => {
		document.querySelector("#selected-filter").classList.add("down");
		document.querySelector("#search-filter-list").classList.add("show");
	},
	closeFilterList: () => {
		document.querySelector("#selected-filter").classList.remove("down");
		document.querySelector("#search-filter-list").classList.remove("show");
	},
  dropDownAndUp: (event) => {
		if (event.target.classList.contains("down")) {
			Logic.closeFilterList();
			return ;
		}
		Logic.openFilterList();
	},
	changeFilter: (event) => {
		const filterTypeLabel = document.querySelector("#selected-filter");
		if (filterTypeLabel.dataset.filterType !== event.target.dataset.value) {
			filterTypeLabel.dataset.filterType = event.target.dataset.value;
			filterTypeLabel.innerHTML = event.target.dataset.value;
		}
	}
}

export default Logic;
