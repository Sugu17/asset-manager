const categoryEditModal = document.getElementById("editModal");
if (categoryEditModal) {
  categoryEditModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const data = JSON.parse(button.getAttribute("data-bs-data"));
    const idField = document.getElementById("categoryId");
    const nameField = document.getElementById("editname");
    nameField.value = data["name"];
    idField.value = data["id"];
  });
}
