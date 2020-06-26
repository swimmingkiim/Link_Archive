const Logic = {
  save: () => {
    window.location.href = "/";
  },
  goBack: () => {
    window.history.back();
  },
  edit: () => {
    document.getElementById("main-list").classList.add("edit-mode");
  },
  update: (event) => {
    window.location.replace(`/post/${event.target.dataset.postId}`);
  },
  delete: () => {
    if (window.confirm("Do you really want to delete this link?")) {
      // do the deletion
      return (window.location.href = "/");
    }
    return;
  },
};

export default Logic;
