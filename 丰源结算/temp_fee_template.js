
window.openFeeTemplateModal = function () {
    // Check if modal already exists
    let modal = document.getElementById('fee-template-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'fee-template-modal';
        modal.className = 'modal-overlay';
        modal.style.zIndex = '9999';
        modal.style.position = 'fixed';
        modal.style.inset = '0';
        modal.style.background = 'rgba(0,0,0,0.5)';
        modal.style.display = 'none';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-container" style="width: 1000px; height: 650px; background: white; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); font-family: 'Microsoft YaHei', sans-serif; display: flex; flex-direction: column;">
            <!-- Header -->
            <div class="modal-header" style="padding: 0 16px; height: 48px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #fff;">
                <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: #1e293b;">费用模板</h3>
                <button onclick="document.getElementById('fee-template-modal').classList.remove('show'); document.getElementById('fee-template-modal').style.display='none';" style="border: none; background: transparent; cursor: pointer; color: #94a3b8; transition: color 0.2s;" onmouseover="this.style.color='#64748b'" onmouseout="this.style.color='#94a3b8'">
                    <i data-lucide="x" style="width: 20px; height: 20px;"></i>
                </button>
            </div>

            <!-- Body -->
            <div style="flex: 1; display: flex; overflow: hidden;">
                <!-- Left Sidebar -->
                <div style="width: 240px; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; background: #fff;">
                    <!-- Tabs -->
                    <div style="display: flex; height: 40px; border-bottom: 1px solid #e2e8f0;">
                        <button style="flex: 1; border: none; background: #fff; color: #0284c7; font-weight: 500; font-size: 0.85rem; border-bottom: 2px solid #0284c7; cursor: pointer;">模板列表</button>
                    </div>
                    
                    <!-- Search & Filter -->
                    <div style="padding: 12px; display: flex; flex-direction: column; gap: 8px;">
                        <label style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #475569; cursor: pointer;">
                            <input type="checkbox" checked style="accent-color: #0284c7;"> 显示他人模板
                        </label>
                        <div style="position: relative;">
                            <i data-lucide="search" style="position: absolute; left: 8px; top: 50%; transform: translateY(-50%); width: 14px; height: 14px; color: #94a3b8;"></i>
                            <input type="text" placeholder="搜索模板" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 8px 6px 28px; font-size: 0.85rem; outline: none; background: #f8fafc;">
                        </div>
                    </div>

                    <!-- List Area (Empty State) -->
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #94a3b8; gap: 8px;">
                         <div style="width: 48px; height: 48px; background: #f1f5f9; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="folder-open" style="width: 24px; height: 24px; color: #cbd5e1;"></i>
                         </div>
                         <span style="font-size: 0.8rem;">无数据</span>
                    </div>

                    <!-- Bottom Actions -->
                    <div style="height: 48px; border-top: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-around; padding: 0 8px;">
                        <button style="border: none; background: transparent; cursor: pointer; color: #0284c7;"><i data-lucide="plus" style="width: 18px; height: 18px;"></i></button>
                        <button style="border: none; background: transparent; cursor: pointer; color: #0284c7;"><i data-lucide="edit-3" style="width: 16px; height: 16px;"></i></button>
                        <button style="border: none; background: transparent; cursor: pointer; color: #0284c7;"><i data-lucide="copy" style="width: 16px; height: 16px;"></i></button>
                        <button style="border: none; background: transparent; cursor: pointer; color: #ef4444;"><i data-lucide="trash-2" style="width: 16px; height: 16px;"></i></button>
                    </div>
                </div>

                <!-- Right Content -->
                <div style="flex: 1; display: flex; flex-direction: column; background: #fff;">
                    <!-- Table Header -->
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; white-space: nowrap;">
                            <thead style="background: #f8fafc; color: #475569;">
                                <tr>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #f1f5f9; text-align: left; font-weight: 500;">结算公司类别</th>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #f1f5f9; text-align: left; font-weight: 500;">结算公司</th>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #f1f5f9; text-align: left; font-weight: 500;">费用</th>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #f1f5f9; text-align: left; font-weight: 500;">单位</th>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #f1f5f9; text-align: left; font-weight: 500;">单价</th>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #f1f5f9; text-align: left; font-weight: 500;">币制</th>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #f1f5f9; text-align: left; font-weight: 500;">数量</th>
                                    <th style="padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: left; font-weight: 500;">备注</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    
                    <!-- Empty State -->
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: #bfdbfe;">
                         <div style="width: 80px; height: 80px; background: #f0f9ff; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                             <i data-lucide="search" style="width: 40px; height: 40px; opacity: 0.5;"></i>
                         </div>
                         <span style="font-size: 0.9rem; color: #94a3b8;">暂无数据</span>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div style="padding: 12px 24px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; background: #fff;">
                <button style="padding: 6px 24px; border: none; background: #3b82f6; border-radius: 4px; color: white; font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                    <i data-lucide="import" style="width: 14px; height: 14px;"></i> 导入
                </button>
            </div>
        </div>
    `;

    modal.classList.add('show');
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
};
