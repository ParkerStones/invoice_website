//ADD NEW ROW for ADDING ITEM DETAILS
const tablebody = document.getElementById("table_body");

addNewRow = () => {
    const row = document.createElement("tr");
    row.className = "single_row";
    row.innerHTML = `<td><input type="text" placeholder="Enter Product Name" class="product_name"></td>
                    <td><input type="number" min="0" placeholder="0" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                    <td><input type="number" min="0" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                    <td style="text-align: right;"><button class="deleteBtn">DELETE</button></td>`;
    tablebody.insertBefore(row, tablebody.lastElementChild.previousSibling);
}

document.getElementById("add_row").addEventListener("click", (e) => {
    e.preventDefault();
    addNewRow();
});

//GET INPUTS from USER and CALCULATE and GET individual ITEM PRICE
getInput = () => {
    var rows = document.querySelectorAll("tr.single_row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#unit").value;
        var price = currentRow.querySelector("#price").value;

        amount = unit * price;
        currentRow.querySelector("#amount").value = amount;
        overallSum();
    });
};

//Get OVERALL TOTAL of ITEMS
overallSum = () => {
    var arr = document.getElementsByName("amount");
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].value) {
            total += +arr[i].value;
        }
        document.getElementById("total").value = total;
    }
}

//DELETE ROW from TABLE
const tableEl = document.querySelector("table");
function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}

tableEl.addEventListener("click", onDeleteRow);