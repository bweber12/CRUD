var sb = document.getElementById("submit");
var arr = [];


sb.addEventListener('click', () => {
    var node = document.getElementById("ans");

    var myValue = document.getElementById("taskName").value;
    var myValue = document.getElementById("taskDesc").value;
    arr.push(myValue);
    localStorage.setItem('storage', JSON.stringify(arr)); //agregar o modificar

    var div = document.createElement('div');
    div.classList.add('d-block');
    div.innerText = myValue;
    //newDiv.value = myValue;
    node.appendChild(div);
    localStorage.removeItem(myValue); //remover

});


function loadStorage() {
    var parse = JSON.parse(localStorage.getItem('storage'));
    if (parse === null) 
        return;
    parse.forEach(e => {
        arr.push(e);
    });
    console.log(arr);
}

loadStorage();

document.getElementById('clean').addEventListener('click', () => {
    localStorage.clear();
});



















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