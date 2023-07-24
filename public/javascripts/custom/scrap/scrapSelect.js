const selectToggleBtns = document.getElementsByClassName("selectorBtn");

// Assign btn style based on marking
function assignStyle() {
  for (const btn of selectToggleBtns) {
    const btnText = btn.innerText;
    if (btnText === "Make Active") {
      btn.classList.add("btn-secondary");
    } else {
      btn.classList.add("btn-danger");
    }
  }
}
assignStyle();

// Mark action trigger
const assetMarkModal = document.getElementById("confirmModal");
const modalBody = document.getElementById("confirmModalText");

function modalTriggered(event) {
  event.preventDefault();
  const triggerBtn = event.currentTarget;
  const selAssetData = JSON.parse(
    triggerBtn.getAttribute("data-selectedAsset")
  );
  if (selAssetData.isObsolete) {
    modalBody.innerText = "Do you want to mark the asset as Active?";
  } else {
    modalBody.innerText = "Do you want to mark the asset as Obsolete?";
  }

  // Form action
  const markBtn = document.getElementById("markAssetBtn");
  const assetIdField = document.getElementById("assetIdField");
  const obsoleteField = document.getElementById("obsoleteField");
  const markForm = document.getElementById("assetMarkForm");
  markBtn.onclick = (event) => {
    event.preventDefault();
    assetIdField.value = selAssetData.id;
    obsoleteField.value = selAssetData.isObsolete;
    markForm.submit();
  };
}

// fetch("/scrap", {
//   headers: { "Content-Type": "application/json" },
//   method: "POST",
//   body: JSON.stringify(sendData),
// }).then(() => location.reload());
