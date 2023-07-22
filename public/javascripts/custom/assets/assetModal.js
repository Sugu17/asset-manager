const assetEditModal = document.getElementById("editModal");
if (assetEditModal) {
  assetEditModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const data = JSON.parse(button.getAttribute("data-bs-data"));
    const idField = document.getElementById("assetId");
    const makeField = document.getElementById("editmodel");
    const modelField = document.getElementById("editmake");
    const seriesField = document.getElementById("editseries");
    const serialNumberField = document.getElementById("editserial");
    makeField.value = data["make"];
    modelField.value = data["model"];
    seriesField.value = data["series"];
    serialNumberField.value = data["serialNumber"];
    idField.value = data["id"];
  });
}
