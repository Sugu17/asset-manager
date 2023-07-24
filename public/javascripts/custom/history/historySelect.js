// SideDisplay Fields
const selAssetMake = document.getElementById("selAssetMake");
const selAssetModel = document.getElementById("selAssetModel");
const selAssetSnNum = document.getElementById("selAssetSerial");

const selectToggleBtns = document.getElementsByClassName("selectorBtn");

function resetStyle() {
  for (const btn of selectToggleBtns) {
    btn.innerText = "Select";
    if (btn.classList.contains("btn-primary")) {
      btn.classList.replace("btn-primary", "btn-success");
    }
  }
}

function handleAssetSelect(event) {
  event.preventDefault();
  resetStyle();
  // Button state
  const triggerBtn = event.currentTarget;
  triggerBtn.innerText = "Selected";
  triggerBtn.classList.replace("btn-success", "btn-primary");

  // Selected data
  const selAssetData = JSON.parse(
    triggerBtn.getAttribute("data-selectedAsset")
  );
  selAssetMake.innerText = selAssetData.make;
  selAssetModel.innerText = selAssetData.model;
  selAssetSnNum.innerText = selAssetData.serialNumber;

  const historyList = document.getElementById("assetHistoryList");
  historyList.replaceChildren();
  const histories = selAssetData.Events;

  // Asset history
  if (histories.length != 0) {
    for (const history of histories) {
      const li = document.createElement("li");
      li.innerText = `${history.eventMessage}`;
      if (history.eventMessage.includes("created")) {
        li.className = "list-group-item list-group-item-success";
      } else if (history.eventMessage.includes("issued")) {
        li.className = "list-group-item list-group-item-secondary";
      } else if (history.eventMessage.includes("returned")) {
        li.className = "list-group-item list-group-item-info";
      }
      historyList.appendChild(li);
    }
  } else {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-warning";
    li.innerText = "No history found for this asset !";
    historyList.appendChild(li);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  for (const [key, value] of formData) {
    console.log(key, value);
  }
}
