const assetDeleteModal = document.getElementById("confirmModal");
if (assetDeleteModal) {
  assetEditModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    currentassetData = JSON.parse(button.getAttribute("data-bs-data"));
  });
}

function modalTriggered(event) {
  const triggerBtn = event.currentTarget;
  event.preventDefault();
  const assetId = triggerBtn.nextElementSibling.value;
  const deleteBtn = document.getElementById("deleteAssetBtn");
  deleteBtn.onclick = (event) => {
    event.preventDefault();
    // console.log("Deletion request for id", assetId);
    fetch(`assets/${assetId}`, {
      method: "DELETE",
    }).then(() => window.location.assign("/assets"));
  };
}
