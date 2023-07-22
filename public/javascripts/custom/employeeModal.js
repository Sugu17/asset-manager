const employeeEditModal = document.getElementById("editModal");
if (employeeEditModal) {
  employeeEditModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const data = JSON.parse(button.getAttribute("data-bs-data"));
    console.log("curr data", data);
    const idField = document.getElementById("empId");
    const nameField = document.getElementById("editname");
    const phoneField = document.getElementById("editphone");
    const departmentField = document.getElementById("editdepartment");
    const activeField = document.getElementById("editIsActive");
    nameField.value = data["name"];
    phoneField.value = data["phone"];
    departmentField.value = data["department"];
    idField.value = data["id"];
    if (data.isActive === true) {
      activeField.value = true;
      activeField.checked = "true";
    }
  });
}
