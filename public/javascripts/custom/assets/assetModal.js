const assetEditModal = document.getElementById("editModal");
if (assetEditModal) {
  assetEditModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const asset = JSON.parse(button.getAttribute("data-bs-asset"));
    const categories = JSON.parse(button.getAttribute("data-bs-categories"));
    const idField = document.getElementById("assetId");
    const categoryField = document.getElementById("editcategory");
    const makeField = document.getElementById("editmodel");
    const modelField = document.getElementById("editmake");
    const seriesField = document.getElementById("editseries");
    const serialNumberField = document.getElementById("editserial");
    for (const category of categories) {
      const option = new Option(category.name, category.id);
      if (category.id === asset.CategoryId) {
        option.selected = true;
      }
      categoryField.appendChild(option);
    }
    makeField.value = asset["make"];
    modelField.value = asset["model"];
    seriesField.value = asset["series"];
    serialNumberField.value = asset["serialNumber"];
    idField.value = asset["id"];
  });
}
