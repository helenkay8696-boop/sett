
window.copyToReceivable = function () {
    const tbody = document.getElementById('expense-receivable-tbody');
    if (!tbody) return;

    // Find all checked rows in the receivable table
    const checkedRows = Array.from(tbody.querySelectorAll('tr')).filter(row => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        return checkbox && checkbox.checked;
    });

    if (checkedRows.length === 0) {
        alert('请先勾选需要复制的数据');
        return;
    }

    checkedRows.forEach(row => {
        // Create a new row by cloning the existing one
        const newRow = row.cloneNode(true);

        // Update the checkbox to be unchecked for the new row
        const newCheckbox = newRow.querySelector('input[type="checkbox"]');
        if (newCheckbox) newCheckbox.checked = false;

        // Copy values from original inputs/selects to new inputs/selects
        // cloneNode(true) copies attributes but NOT the current value of inputs if changed by user
        const originalInputs = row.querySelectorAll('input, select');
        const newInputs = newRow.querySelectorAll('input, select');

        originalInputs.forEach((input, index) => {
            if (newInputs[index]) {
                newInputs[index].value = input.value;
            }
        });

        // Append the new row
        tbody.appendChild(newRow);
    });

    // Update indices for all rows
    Array.from(tbody.children).forEach((row, index) => {
        // Assuming the index is in the second column (index 1)
        if (row.cells[1]) {
            row.cells[1].textContent = index + 1;
        }
    });

    if (window.lucide) window.lucide.createIcons();
    alert(`成功复制 ${checkedRows.length} 条数据`);
};
