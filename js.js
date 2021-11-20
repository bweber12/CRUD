

var arr = [];


document.getElementById("submit").addEventListener("click", () => {
  var tarea = document.getElementById("taskName").value;
  var descripcion = document.getElementById("taskDesc").value;
  arr.push({ tarea, descripcion });
  localStorage.setItem("storage", JSON.stringify(arr));
  let newDiv = document.createElement("div");
  newDiv.id = tarea;
  newDiv.innerHTML =
    `
    <div  class="input-group ans" style="width: 80%;">
    <span class="input-group-text">` +
    tarea +
    ` </span>
    <input type="text" class="form-control" id="edit" placeholder="` +
    descripcion+
    `">
    <button class="btn btn-warning btn-link-hover-color" type="button" placeholder="` +
    tarea +
    `">Editar</button>
    <button class="btn btn-danger" type="button" placeholder="` +
    tarea +
    `" ">Borrar</button>
    </div>;`

  document.getElementById("submit").after(newDiv);
  updateDelete();
  console.log(newDiv)
});

document.querySelectorAll(".edit").forEach((e) => {
    e.addEventListener("click", () => {
      //leer el valor del nombre y la tarea actual
      //buscar en el array el objeto con el nombre y remplazar la tarea
      localStorage.setItem("storage", JSON.stringify(arr));
      document.getElementById(e.placeholder).children();
      //modifico el objeto del dom
    });
  });
  
  function updateDelete() {
    document.querySelectorAll(".delete").forEach((e) => {
      e.addEventListener("click", () => {
        //leer el valor del nombre y eliminar el objeto id del nombre
        //buscar en el array el objeto con el nombre y elimino el objeto del arr
        console.log("delete");
  
        localStorage.setItem("storage", JSON.stringify(arr));
        document.getElementById(e.placeholder).remove();
        //elimino el objeto del dom
      });
    });
  }
  
  //crear todos los divs del local storage si el usuario recarga la pagina.
  function firstLoad() {
    var storage = JSON.parse(localStorage.getItem("storage"));
    storage.forEach((tarea, descripcion) => {});
    //cargar storage en el dom
    updateDelete();
  }
  
  firstLoad();
  

















/*var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["taskName"] = document.getElementById("taskName").value;
    formData["taskDesc"] = document.getElementById("taskDesc").value;
    formData["Delivery"] = document.getElementById("Delivery").value;
    formData["Responsable"] = document.getElementById("Responsable").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.taskName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.taskDesc;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Delivery;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Responsable;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button type="button" class="btn btn-secondary" onClick="onEdit(this)">Editar</button>
                    <button type="button" class="btn btn-danger" onClick="onDelete(this)">Borrar</button>`;
}

function resetForm() {
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("Delivery").value = "";
    document.getElementById("Responsable").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("taskName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("taskDesc").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Delivery").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Responsable").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.taskName;
    selectedRow.cells[1].innerHTML = formData.taskDesc;
    selectedRow.cells[2].innerHTML = formData.Delivery;
    selectedRow.cells[3].innerHTML = formData.Responsable;
}

function onDelete(td) {
    if (confirm('¿Esta seguro que desea borrar el registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("taskName").value == "") {
        isValid = false;
        document.getElementById("taskNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("taskNameValidationError").classList.contains("hide"))
            document.getElementById("taskNameValidationError").classList.add("hide");
    }
    return isValid;
}*/