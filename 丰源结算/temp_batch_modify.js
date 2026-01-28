
window.batchModifyReceivable = function () {
    const tbody = document.getElementById('expense-receivable-tbody');
    if (!tbody) return;

    // Check checkboxes inside the tbody, avoiding the header checkbox if mistakenly grabbed
    const checkedBoxes = tbody.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        alert('请先勾选需要批量修改的数据');
        return;
    }

    // Check if modal already exists
    let modal = document.getElementById('batch-modify-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'batch-modify-modal';
        modal.className = 'modal-overlay';
        modal.style.zIndex = '9999'; // Ensure it's on top
        modal.style.position = 'fixed';
        modal.style.inset = '0';
        modal.style.background = 'rgba(0,0,0,0.5)';
        modal.style.display = 'none'; // Initially hidden
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-container" style="width: 400px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div class="modal-header" style="padding: 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: #1e293b;">批量修改</h3>
                <button onclick="window.closeBatchModifyModal()" style="border: none; background: transparent; cursor: pointer; color: #64748b;">
                    <i data-lucide="x" style="width: 20px; height: 20px;"></i>
                </button>
            </div>
            <div class="modal-content" style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; flex-direction: column; gap: 6px;">
                    <label style="font-size: 0.85rem; color: #64748b;">结算公司</label>
                    <select id="batch-settlement-company" style="width: 100%; border: 1px solid #cbd5e1; border-radius: 4px; padding: 6px; font-size: 0.85rem;">
                        <option value="">(不修改)</option>
                        <option value="深圳市土源物流有限公司">深圳市土源物流有限公司</option>
                        <option value="东莞市测试物流有限公司">东莞市测试物流有限公司</option>
                    </select>
                </div>
                <div style="display: flex; gap: 16px;">
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 6px;">
                        <label style="font-size: 0.85rem; color: #64748b;">单价</label>
                        <input type="number" id="batch-unit-price" placeholder="不修改" style="width: 100%; border: 1px solid #cbd5e1; border-radius: 4px; padding: 6px; font-size: 0.85rem;">
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 6px;">
                        <label style="font-size: 0.85rem; color: #64748b;">数量</label>
                        <input type="number" id="batch-quantity" placeholder="不修改" style="width: 100%; border: 1px solid #cbd5e1; border-radius: 4px; padding: 6px; font-size: 0.85rem;">
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="padding: 16px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 12px; background: #f8fafc;">
                <button onclick="window.closeBatchModifyModal()" style="padding: 6px 16px; border: 1px solid #cbd5e1; background: white; border-radius: 4px; color: #64748b; font-size: 0.85rem; cursor: pointer;">取消</button>
                <button onclick="window.saveBatchModify()" style="padding: 6px 16px; border: none; background: #4f46e5; border-radius: 4px; color: white; font-size: 0.85rem; cursor: pointer;">保存</button>
            </div>
        </div>
    `;

    modal.classList.add('show');
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
};

window.closeBatchModifyModal = function () {
    const modal = document.getElementById('batch-modify-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
};

window.saveBatchModify = function () {
    const company = document.getElementById('batch-settlement-company').value;
    const price = document.getElementById('batch-unit-price').value;
    const quantity = document.getElementById('batch-quantity').value;

    const tbody = document.getElementById('expense-receivable-tbody');
    if (!tbody) return;
    const checkedBoxes = tbody.querySelectorAll('input[type="checkbox"]:checked');

    checkedBoxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        if (!row) return;

        // Settlement Company (Index 3) - Select
        if (company) {
            const companySelect = row.cells[3].querySelector('select');
            if (companySelect) companySelect.value = company;
        }

        // Unit Price (Index 6)
        if (price !== '') {
            const priceInput = row.cells[6].querySelector('input');
            if (priceInput) priceInput.value = price;
        }

        // Quantity (Index 7)
        if (quantity !== '') {
            const qtyInput = row.cells[7].querySelector('input');
            if (qtyInput) qtyInput.value = quantity;
        }

        // Recalculate Amount (Index 5) = Price * Qty
        const priceInput = row.cells[6].querySelector('input');
        const qtyInput = row.cells[7].querySelector('input');
        // Amount cell is index 5. Check if it's input or text. From previous view_file it seemed to have input.
        const amountInput = row.cells[5].querySelector('input');

        if (priceInput && qtyInput && amountInput) {
            const p = parseFloat(priceInput.value) || 0;
            const q = parseFloat(qtyInput.value) || 0;
            amountInput.value = (p * q).toFixed(2);
        }
    });

    alert('修改成功');
    window.closeBatchModifyModal();
};
