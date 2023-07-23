const clickMap = new Map();

// SideInput Fields
const selEmployeeName = document.getElementById("selEmpName");
const selEmpPhone = document.getElementById("selEmpNum");
const selEmployeeDepartment = document.getElementById("selEmpDep");

function handleIssueSelect(event) {
  event.preventDefault();
  const triggerBtn = event.currentTarget;
  if (clickMap.has(triggerBtn.id)) {
    return;
  }
  const selEmpData = JSON.parse(triggerBtn.getAttribute("data-selectedEmp"));
  selEmployeeName.innerText = selEmpData.name;
  selEmpPhone.innerText = selEmpData.phone;
  selEmployeeDepartment.innerText = selEmpData.department;
  const assetList = document.getElementById("issueAssetList");
  const assets = selEmpData.Assets;

  if (assets.length != 0) {
    for (const asset of assets) {
      const li = document.createElement("li");
      li.className = "list-group-item fs-5";
      li.innerText = asset.make;
      assetList.appendChild(li);
    }
  } else {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-warning fs-5";
    li.innerText = "No assets issued to this user !";
    assetList.appendChild(li);
  }
  clickMap.set(triggerBtn.id, "Added");
}

// Populate assets
const allAssets = JSON.parse(document.getElementById("allAssets").value);
const assetSelector = document.getElementById("assetSel");

function populateAssetSelection(assets) {
  assetSelector.replaceChildren();
  assetSelector.appendChild(new Option("Select an asset!", null, true));
  for (const asset of assets) {
    const optionText = `${asset.make} ${asset.model} ${asset.series} #${asset.serialNumber}`;
    const option = new Option(optionText, asset.id);
    assetSelector.appendChild(option);
  }
}

populateAssetSelection(allAssets);

function handleCategoryChange(event) {
  event.preventDefault();
  const category = JSON.parse(
    event.currentTarget.getAttribute("data-category")
  );
  const filterAsset = allAssets.filter(
    (asset) => asset.CategoryId === category
  );
  populateAssetSelection(filterAsset);
}
