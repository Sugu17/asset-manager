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

// const updateForm = document.getElementById("update-form");
// updateForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const updatedData = {
//     id: formData.get("id"),
//     name: formData.get("name"),
//     phone: formData.get("phone"),
//     department: formData.get("department"),
//     isActive: formData.get("isActive"),
//   };
//   fetch("/employees", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(updatedData),
//   }).then(() => {
//     console.log("Data submitted");
//     location.reload();
//   });
// });
