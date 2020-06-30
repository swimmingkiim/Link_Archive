const Logic = {
	emptyFields: () => {
		document.querySelector("#title").value = "";
		document.querySelector("#link").value = "";
		document.querySelector("#tags").value = "";
	},
  save: (data, linkList) => {
    if (linkList.globalUpdateId) {
			linkList.updateLink(data);
		} else {
			linkList.addLink(data);
		}
		linkList.updateGlobalUpdateId(null);
		Logic.emptyFields();
  },
  edit: () => {
		if (document.querySelector("main").classList.contains("edit-mode")) {
    	document.querySelector("main").classList.remove("edit-mode");
			return ;
		}
		document.querySelector("main").classList.add("edit-mode");
  },
  update: (updateId, linkList) => {
		const { title, link, tags } = linkList.getLinkData(updateId);
		linkList.updateGlobalUpdateId(updateId);
		document.querySelector("#title").value = title;
		document.querySelector("#link").value = link;
		document.querySelector("#tags").value = tags;
		Logic.edit();
  },
  delete: (deleteId, linkList) => {
    if (window.confirm("Do you really want to delete this link?")) {
			linkList.deleteLink(deleteId);
    }
		Logic.edit();
    return;
  },
};

export default Logic;
