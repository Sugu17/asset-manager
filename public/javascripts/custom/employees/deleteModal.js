let currentEmployeeData;

const employeeDeleteModal = document.getElementById("confirmModal");
if (employeeDeleteModal) {
  employeeEditModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    currentEmployeeData = JSON.parse(button.getAttribute("data-bs-data"));
  });
}

function modalTriggered(event) {
  const triggerBtn = event.currentTarget;
  event.preventDefault();
  const employeeId = triggerBtn.nextElementSibling.value;
  const deleteBtn = document.getElementById("deleteEmployeeBtn");
  deleteBtn.onclick = (event) => {
    event.preventDefault();
    // console.log("Deletion request for id", employeeId);
    fetch(`employees/${employeeId}`, {
      method: "DELETE",
    }).then(() => window.location.assign("/employees"));
  };
}
