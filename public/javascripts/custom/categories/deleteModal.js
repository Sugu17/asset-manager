const categoryDeleteModal = document.getElementById("confirmModal");
if (categoryDeleteModal) {
  categoryEditModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    currentcategoryData = JSON.parse(button.getAttribute("data-bs-data"));
  });
}

function modalTriggered(event) {
  const triggerBtn = event.currentTarget;
  event.preventDefault();
  const categoryId = triggerBtn.nextElementSibling.value;
  const deleteBtn = document.getElementById("deletecategoryBtn");
  deleteBtn.onclick = (event) => {
    event.preventDefault();
    // console.log("Deletion request for id", categoryId);
    fetch(`categories/${categoryId}`, {
      method: "DELETE",
    }).then(() => window.location.assign("/categories"));
  };
}
