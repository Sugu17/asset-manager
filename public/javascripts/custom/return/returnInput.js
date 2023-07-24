// SideInput Fields
const selEmployeeName = document.getElementById("selEmpName");
const selEmpPhone = document.getElementById("selEmpNum");
const selEmployeeDepartment = document.getElementById("selEmpDep");

// Submit form
const selEmployeeIdField = document.getElementById("selEmployeeId");
const selectToggleBtns = document.getElementsByClassName("selectorBtn");

function resetStyle() {
  for (const btn of selectToggleBtns) {
    btn.innerText = "Select";
    if (btn.classList.contains("btn-primary")) {
      btn.classList.replace("btn-primary", "btn-success");
    }
  }
}

// Populate assets
const assetSelector = document.getElementById("assetSel");

function populateAssetSelection(assets) {
  assetSelector.removeAttribute("disabled");
  assetSelector.replaceChildren();
  if (assets.length === 0) {
    assetSelector.appendChild(new Option("No assets found!", null, true));
    assetSelector.setAttribute("disabled", "true");
    return;
  }
  for (const asset of assets) {
    const optionText = `${asset.make} ${asset.model} ${asset.series} #${asset.serialNumber}`;
    const option = new Option(optionText, asset.id);
    assetSelector.appendChild(option);
  }
}

function handleReturnSelect(event) {
  event.preventDefault();
  resetStyle();
  // Button state
  const triggerBtn = event.currentTarget;
  triggerBtn.innerText = "Selected";
  triggerBtn.classList.replace("btn-success", "btn-primary");

  // Selected data
  const selEmpData = JSON.parse(triggerBtn.getAttribute("data-selectedEmp"));
  selEmployeeName.innerText = selEmpData.name;
  selEmpPhone.innerText = selEmpData.phone;
  selEmployeeDepartment.innerText = selEmpData.department;

  // set id for employee to be returned
  selEmployeeIdField.value = selEmpData.id;
  const assetList = document.getElementById("returnAssetList");
  assetList.replaceChildren();
  const assets = selEmpData.Assets;
  populateAssetSelection(assets);

  // Issued assets
  if (assets.length != 0) {
    for (const asset of assets) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.innerText = `${asset.make} ${asset.model} ${asset.series} SN#${asset.serialNumber}`;
      assetList.appendChild(li);
    }
  } else {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-warning";
    li.innerText = "No assets issued to this user !";
    assetList.appendChild(li);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  console.log(formData.get("employeeId"));
  console.log(formData.getAll("assetId"));
  console.log(formData.get("returnReason"));
}
