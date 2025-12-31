window.invoiceExpenseConfigs = [
    { code: "1060101010000000000", name: "运输服务", taxName: "运输服务", rate: "9", isTaxFree: "否" }
];

const menuData = [
    {
        title: "应收应付",
        icon: "file-text",
        items: ["对账单", "客户账单", "接收账单", "批量确认", "费用审核", "费用明细", "应收明细", "应付明细", "业务员成本明细", "代收代付明细"]
    },
    {
        title: "收付",
        icon: "credit-card",
        items: ["收付款", "付款申请"]
    },
    {
        title: "放单",
        icon: "file-check",
        items: ["放单", "放货"],
        exclude: true
    },
    {
        title: "发票",
        icon: "form-input",
        items: ["发票管理", "开票申请", "开票费用配置", "红字申请确认单"]
    },
    {
        title: "结算主体",
        icon: "building",
        items: ["结算单位"]
    },
    {
        title: "银企直连",
        icon: "landmark",
        items: ["银行收款流水", "银行付款流水", "银企直连配置"]
    },
    {
        title: "充值管理",
        icon: "wallet",
        items: ["账户充值", "后台管理"]
    },
    {
        title: "设置",
        icon: "settings",
        items: ["结算设置"]
    }
];

function renderMenu() {
    const container = document.getElementById('secondary-content');
    container.innerHTML = '';

    // Filter out restricted nodes
    const filteredData = menuData.filter(section => !section.exclude);

    filteredData.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'menu-section';

        const header = document.createElement('div');
        header.className = 'section-header';
        header.innerHTML = `
            <i data-lucide="${section.icon}"></i>
            <span>${section.title}</span>
        `;
        sectionDiv.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        section.items.forEach(item => {
            const link = document.createElement('a');
            link.className = 'menu-link';
            link.textContent = item;
            link.addEventListener('click', () => addTab(item));
            grid.appendChild(link);
        });

        sectionDiv.appendChild(grid);
        container.appendChild(sectionDiv);
    });

    lucide.createIcons();
}

function initSidebar() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const title = item.getAttribute('data-title');

            if (title === '工作台') {
                addTab('工作台');
            } else if (title === '结算' || title === '充值管理') {
                document.querySelector('.sub-sidebar').classList.remove('hidden');
                document.getElementById('menu-mask').classList.add('show');
                renderMenu();
            } else {
                // For other main categories, show a placeholder or just open secondary menu if applicable
                alert('正在开发中...');
            }
        });
    });
}

// Initialize "Workbench" by default
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    addTab('工作台');
});

let openTabs = [];

function addTab(title) {
    if (!openTabs.includes(title)) openTabs.push(title);
    renderTabs(title);
    document.querySelector('.sub-sidebar').classList.add('hidden');
    document.getElementById('menu-mask').classList.remove('show'); // Hide mask when tab is selected
    document.getElementById('tabs-bar').style.display = 'flex';
}

function renderTabs(activeTab) {
    const list = document.getElementById('tabs-list');
    list.innerHTML = '';

    const customers = [
        { name: "萨姆达拉", count: 0 },
        { name: "深圳市远航达国际货运代理有限公司", count: 0 },
        { name: "深圳市路路通运输有限公司", count: 0 },
        { name: "深圳市好运来货运代理有限公司", count: 1 },
        { name: "深圳运物云物流科技有限公司", count: 0 },
        { name: "贝塔测试科技有限公司", count: 0 },
        { name: "拖车公司", count: 0 },
        { name: "全部多个", count: 0 },
        { name: "22333344", count: 0 },
        { name: "杭州娃哈哈集团有限公司", count: 0 },
        { name: "广州快捷到国际货运代理有限公司", count: 0 },
        { name: "663333", count: 0 },
        { name: "上海哇哈哈国际物流有限公司深圳分公司", count: 0 },
        { name: "hy", count: 0 },
        { name: "马士基（中国）航运有限公司深圳分公司", count: 1 },
        { name: "欣旺达新能源动力汽车有限公司", count: 0 }
    ];

    openTabs.forEach(tab => {
        const item = document.createElement('div');
        item.className = `tab-item ${tab === activeTab ? 'active' : ''}`;
        item.innerHTML = `<span>${tab}</span><div class="tab-close" onclick="event.stopPropagation(); closeTab('${tab}')"><i data-lucide="x"></i></div>`;
        item.addEventListener('click', () => renderTabs(tab));
        list.appendChild(item);
    });
    if (activeTab === '工作台' || activeTab === '对账单' || activeTab === '客户账单' || activeTab === '接收账单' || activeTab === '费用明细' || activeTab === '应收明细' || activeTab === '应付明细' || activeTab === '业务员成本明细' || activeTab === '代收代付明细' || activeTab === '收付款' || activeTab === '付款申请' || activeTab === '发票管理' || activeTab === '开票申请' || activeTab === '开票费用配置' || activeTab === '红字申请确认单' || activeTab === '结算单位' || activeTab === '银行收款流水' || activeTab === '银行付款流水' || activeTab === '银企直连配置' || activeTab === '批量确认' || activeTab === '费用审核' || activeTab === '结算设置' || activeTab === '账户充值' || activeTab === '后台管理') {


        let mainContent = '';
        if (activeTab === '工作台') {
            mainContent = `
                <div style="padding: 2rem; background: var(--bg-main); min-height: 100%;">
                    <div style="margin-bottom: 2rem;">
                        <h2 style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.5rem;">运营概览</h2>
                        <p style="color: var(--text-secondary); font-size: 0.875rem;">欢迎回来，这是您今日的数据分析。</p>
                    </div>
                    
                    <div class="dashboard-grid">
                        <div class="stats-card">
                            <div class="card-header">
                                <div class="icon-box"><i data-lucide="truck"></i></div>
                                <span class="trend up">+12%</span>
                            </div>
                            <div class="card-label">今日发货量</div>
                            <div class="card-value">128</div>
                        </div>
                        <div class="stats-card">
                            <div class="card-header">
                                <div class="icon-box"><i data-lucide="package"></i></div>
                                <span class="trend up">+5%</span>
                            </div>
                            <div class="card-label">在途车辆</div>
                            <div class="card-value">45</div>
                        </div>
                        <div class="stats-card">
                            <div class="card-header">
                                <div class="icon-box"><i data-lucide="check-circle"></i></div>
                                <span class="trend up">+8%</span>
                            </div>
                            <div class="card-label">今日已完结</div>
                            <div class="card-value">86</div>
                        </div>
                        <div class="stats-card">
                            <div class="card-header">
                                <div class="icon-box"><i data-lucide="banknote"></i></div>
                                <span class="trend down">-2.4%</span>
                            </div>
                            <div class="card-label">待结清金额</div>
                            <div class="card-value">¥24.8k</div>
                        </div>
                    </div>

                    <div style="background: white; border-radius: var(--radius-lg); padding: 1.5rem; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                            <h3 style="font-size: 1.1rem; color: var(--text-primary);">实时运单动态</h3>
                            <span style="color: var(--primary); font-size: 0.875rem; cursor: pointer;">查看全部</span>
                        </div>
                        <table class="data-table" style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="text-align: left; color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; border-bottom: 1px solid var(--border-color);">
                                    <th style="padding: 1rem;">运单号</th>
                                    <th style="padding: 1rem;">线路</th>
                                    <th style="padding: 1rem;">货物</th>
                                    <th style="padding: 1rem;">状态</th>
                                    <th style="padding: 1rem;">更新时间</th>
                                </tr>
                            </thead>
                            <tbody style="font-size: 0.875rem; color: var(--text-primary);">
                                <tr style="border-bottom: 1px solid var(--border-color);">
                                    <td style="padding: 1rem; font-weight: 600;">#ORD-8829</td>
                                    <td style="padding: 1rem;">广州 → 上海</td>
                                    <td style="padding: 1rem;">精密电子 (2.5吨)</td>
                                    <td style="padding: 1rem;"><span class="badge badge-blue">运输中</span></td>
                                    <td style="padding: 1rem;">10:24</td>
                                </tr>
                                <tr style="border-bottom: 1px solid var(--border-color);">
                                    <td style="padding: 1rem; font-weight: 600;">#ORD-8825</td>
                                    <td style="padding: 1rem;">深圳 → 成都</td>
                                    <td style="padding: 1rem;">日化用品 (8吨)</td>
                                    <td style="padding: 1rem;"><span class="badge badge-green">待提货</span></td>
                                    <td style="padding: 1rem;">09:15</td>
                                </tr>
                                <tr style="border-bottom: 1px solid var(--border-color);">
                                    <td style="padding: 1rem; font-weight: 600;">#ORD-8821</td>
                                    <td style="padding: 1rem;">北京 → 杭州</td>
                                    <td style="padding: 1rem;">生鲜蔬果 (5吨)</td>
                                    <td style="padding: 1rem;"><span class="badge badge-blue">运输中</span></td>
                                    <td style="padding: 1rem;">08:45</td>
                                </tr>
                                <tr>
                                    <td style="padding: 1rem; font-weight: 600;">#ORD-8818</td>
                                    <td style="padding: 1rem;">上海 → 苏州</td>
                                    <td style="padding: 1rem;">机械零件 (1.2吨)</td>
                                    <td style="padding: 1rem;"><span class="badge badge-yellow">待派货</span></td>
                                    <td style="padding: 1rem;">08:12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        } else if (activeTab === '对账单') {
            mainContent = `
                <div class="statement-main" style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                    <!-- List View Wrapper -->
                    <div id="statement-list-view" style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                        <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; flex-shrink: 0;">
                        <div class="internal-tabs">
                            <div class="internal-tab active" onclick="switchInternalTab('reminder')">对账提醒 <span class="badge">1</span></div>
                            <div class="internal-tab" onclick="switchInternalTab('list')">对账单 <span class="badge">5</span></div>
                        </div>

                        <!-- Reconciliation Reminder Content (Default) -->
                        <div id="reconciliation-reminder-content">
                            <div class="internal-filter-bar">
                                <div class="internal-input-group">
                                    <label>公司</label>
                                    <div class="select-box" style="width: 120px;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                                <div class="internal-input-group">
                                     <label>结算单位</label>
                                    <input type="text" placeholder="请输入" style="width: 140px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;" />
                                </div>
                                <div class="internal-input-group">
                                    <label>结算单位简称</label>
                                    <input type="text" placeholder="请输入" style="width: 140px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;" />
                                </div>
                                <div class="internal-input-group">
                                    <label>对账期间</label>
                                    <div style="display: flex; align-items: center; gap: 4px;">
                                        <input type="date" placeholder="开始日期" style="width: 130px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px;" />
                                        <span>-</span>
                                        <input type="date" placeholder="结束日期" style="width: 130px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px;" />
                                    </div>
                                </div>
                                <button class="primary-btn" style="height: 34px; padding: 0 16px;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                                </button>
                            </div>
                        </div>

                        <!-- Statement List Content (Hidden) -->
                        <div id="statement-list-content" style="display: none;">
                            <div class="internal-filter-bar">
                                <div class="internal-input-group">
                                     <label>结算单位</label>
                                    <input type="text" placeholder="请输入" style="width: 200px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;" />
                                </div>
                                <div class="internal-input-group">
                                    <label>对账单号</label>
                                    <input type="text" placeholder="请输入" style="width: 200px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;" />
                                </div>
                                <div class="internal-input-group">
                                    <label>超期</label>
                                    <div class="relative-container">
                                        <div class="select-box" style="width: 200px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                            <span id="statement-overdue-status">请选择</span>
                                            <i data-lucide="chevron-down"></i>
                                        </div>
                                        <div class="dropdown-menu-custom hidden" style="width: 200px;">
                                            <div class="dropdown-item-custom" onclick="selectOption('statement-overdue-status', '包含超期')">包含超期</div>
                                            <div class="dropdown-item-custom" onclick="selectOption('statement-overdue-status', '只显示超期且有余额')">只显示超期且有余额</div>
                                            <div class="dropdown-item-custom" onclick="selectOption('statement-overdue-status', '只显示超期且没有余额')">只显示超期且没有余额</div>
                                            <div class="dropdown-item-custom" onclick="selectOption('statement-overdue-status', '不含超期')">不含超期</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="internal-input-group">
                                    <label>销账状态</label>
                                    <div class="relative-container">
                                        <div class="select-box" style="width: 200px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                            <span id="statement-writeoff-status">请选择</span>
                                            <i data-lucide="chevron-down"></i>
                                        </div>
                                         <div class="dropdown-menu-custom hidden" style="width: 200px;">
                                            <div class="dropdown-item-custom" onclick="selectOption('statement-writeoff-status', '未核销')">未核销</div>
                                            <div class="dropdown-item-custom" onclick="selectOption('statement-writeoff-status', '部分核销')">部分核销</div>
                                            <div class="dropdown-item-custom" onclick="selectOption('statement-writeoff-status', '已核销')">已核销</div>
                                        </div>
                                    </div>
                                </div>
                                 <div class="internal-input-group">
                                    <input type="checkbox" id="only-my-creation" />
                                    <label for="only-my-creation">仅显示我创建的</label>
                                </div>
                                <button class="primary-btn" style="height: 34px; padding: 0 16px;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                                </button>
                                <button class="primary-btn" style="height: 34px; padding: 0 16px; background-color: #ef4444; border-color: #ef4444; margin-left: 8px;" onclick="deleteSelectedItems()">
                                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> 删除
                                </button>
                                <button class="primary-btn" style="height: 34px; padding: 0 16px; margin-left: 8px;" onclick="showCreateStatement()">
                                    <i data-lucide="plus" style="width: 14px; height: 14px;"></i> 新建
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Content Area for Tables -->
                    <div style="flex-grow: 1; overflow: auto; padding: 16px 24px; background: #f8fafc;">
                        
                        <!-- Reminder Table -->
                        <div id="reminder-table-wrapper">
                            <div class="statement-table-container" style="padding: 0; background: transparent;">
                                <table class="statement-table">
                                    <thead>
                                        <tr>
                                            <th style="width: 40px; text-align: center;">#</th>
                                            <th>结算单位</th>
                                            <th>结算单位简称</th>
                                            <th>类型</th>
                                            <th>账期</th>
                                            <th>结算日期类型</th>
                                            <th>对账单号提醒条件</th>
                                            <th>应对账日期</th>
                                            <th>对账期起</th>
                                            <th>对账期止</th>
                                            <th>所属公司</th>
                                            <th style="width: 80px; text-align: center;">操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center;">1</td>
                                            <td>贝塔测试有限公司/渠道部</td>
                                            <td></td>
                                            <td>月结</td>
                                            <td>1个月</td>
                                            <td>工作单日期</td>
                                            <td>每月8号</td>
                                            <td>2025-12-08</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>贝塔测试有限公司</td>
                                            <td style="text-align: center;"><a href="#" style="color: #4f46e5; text-decoration: none;" onclick="showCreateStatement(); return false;">生成对账单</a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;">2</td>
                                            <td>深圳市远航达国际货运代理有限公司</td>
                                            <td>远航达</td>
                                            <td>月结</td>
                                            <td>1个月</td>
                                            <td>工作单日期</td>
                                            <td>每月10号</td>
                                            <td>2025-12-10</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>丰源物流</td>
                                            <td style="text-align: center;"><a href="#" style="color: #4f46e5; text-decoration: none;" onclick="showCreateStatement(); return false;">生成对账单</a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;">3</td>
                                            <td>马士基（中国）航运有限公司深圳分公司</td>
                                            <td>MSK</td>
                                            <td>月结</td>
                                            <td>1个月</td>
                                            <td>开票日期</td>
                                            <td>每月15号</td>
                                            <td>2025-12-15</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>马士基深圳</td>
                                            <td style="text-align: center;"><a href="#" style="color: #4f46e5; text-decoration: none;" onclick="showCreateStatement(); return false;">生成对账单</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Statement List Table -->
                        <div id="statement-list-table-wrapper" style="display: none;">
                            <div class="statement-table-container" style="padding: 0; background: transparent;">
                                <table class="statement-table">
                                    <thead>
                                        <tr>
                                            <th style="width: 40px; text-align: center;"><input type="checkbox" /></th>
                                            <th style="width: 40px; text-align: center;">#</th>
                                            <th>分户确认</th>
                                            <th>收付类型</th>
                                            <th>对账单号</th>
                                            <th>结算单位</th>
                                            <th>结算单位简称</th>
                                            <th>对账月份</th>
                                            <th>结算规则</th>
                                            <th>对账期起</th>
                                            <th>对账期止</th>
                                            <th>对账方式</th>
                                            <th style="width: 80px; text-align: center;">操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">1</td>
                                            <td>已确认</td>
                                            <td>AR</td>
                                            <td>DZ2025120001</td>
                                            <td>贝塔测试有限公司</td>
                                            <td>贝塔</td>
                                            <td>2025-11</td>
                                            <td>月结30天</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>邮件确认</td>
                                            <td style="text-align: center;"><a href="#" style="color: #4f46e5; text-decoration: none;">详情</a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">2</td>
                                            <td>待确认</td>
                                            <td>AR</td>
                                            <td>DZ2025120002</td>
                                            <td>深圳市远航达国际货运代理有限公司</td>
                                            <td>远航达</td>
                                            <td>2025-11</td>
                                            <td>月结15天</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>平台确认</td>
                                            <td style="text-align: center;"><a href="#" style="color: #4f46e5; text-decoration: none;">详情</a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">3</td>
                                            <td>已作废</td>
                                            <td>AR</td>
                                            <td>DZ2025120003</td>
                                            <td>拖车公司</td>
                                            <td>拖车</td>
                                            <td>2025-11</td>
                                            <td>现结</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>微信确认</td>
                                            <td style="text-align: center;"><a href="#" style="color: #4f46e5; text-decoration: none;">详情</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div> <!-- End of statement-list-view -->

                    <!-- Create Statement View (Hidden) -->
                     <div id="statement-create-view" style="display: none; flex-direction: column; width: 100%; height: 100%; background: #f8fafc;">
                        <!-- Header -->
                        <div style="height: 50px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; flex-shrink: 0;">
                            <div style="font-size: 14px; color: #64748b;">对账单号: <span style="color: #94a3b8;">自动生成</span></div>
                            <div style="display: flex; gap: 8px;">
                                <button class="primary-btn" style="height: 30px; padding: 0 16px;">保存</button>
                                <button class="secondary-btn" style="height: 30px; padding: 0 16px; background: white; border: 1px solid #e2e8f0; color: #64748b;" onclick="hideCreateStatement()">返回</button>
                            </div>
                        </div>

                        <!-- Content Area -->
                        <div style="flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
                            <!-- Form Section -->
                            <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                                <div style="display: flex; gap: 24px;">
                                    <!-- Left Column -->
                                    <div style="flex: 1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px 24px;">
                                        <!-- Row 1 -->
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">结算单位</label>
                                            <div style="flex: 1; display: flex; gap: 8px;">
                                                <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                                <div style="display: flex; align-items: center; background: #f1f5f9; border-radius: 4px; padding: 0 8px; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0;">NL</div>
                                                <div style="display: flex; align-items: center; background: #f1f5f9; border-radius: 4px; padding: 0 8px; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0;">月结</div>
                                            </div>
                                        </div>
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">工作单日期</label>
                                             <div style="flex: 1; display: flex; align-items: center; gap: 4px;">
                                                <input type="date" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                                <span style="color: #94a3b8;">-</span>
                                                 <input type="date" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                            </div>
                                        </div>

                                        <!-- Row 2 -->
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">对账方式</label>
                                            <div class="relative-container" style="flex: 1;">
                                                <div class="select-box" style="width: 100%; height: 32px; display: flex; align-items: center; justify-content: space-between;" onclick="toggleDropdown(this)">
                                                    <span id="create-statement-recon-type">按费用对账</span>
                                                    <i data-lucide="chevron-down"></i>
                                                </div>
                                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: 100%; left: 0;">
                                                    <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type', '按费用对账')">按费用对账</div>
                                                    <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type', '按账单对账')">按账单对账</div>
                                                    <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type', '按工作单对账')">按工作单对账</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">折合金额</label>
                                              <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                                <div class="select-box" style="width: 70px; height: 32px;"><span>CNY</span><i data-lucide="chevron-down"></i></div>
                                                <input type="text" value="未收: 0.00" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; background: #f8fafc; color: #94a3b8; font-size: 13px;" disabled />
                                            </div>
                                        </div>

                                        <!-- Row 3 -->
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">预收次余额</label>
                                            <div style="flex: 1;"></div>
                                        </div>
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">预付次余额</label>
                                            <div style="flex: 1;"></div>
                                        </div>

                                        <!-- Row 4 -->
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">公司抬头</label>
                                            <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                        </div>
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">说明</label>
                                            <input type="text" placeholder="请输入" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;">
                                        </div>
                                    </div>

                                    <!-- Middle Column -->
                                    <div style="width: 320px; border-left: 1px solid #f1f5f9; padding-left: 20px;">
                                         <div style="margin-bottom: 12px; display: flex; gap: 16px;">
                                            <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #64748b; cursor: pointer;">
                                                <input type="radio" name="recon-type" /> 按参考凭证号对账
                                            </label>
                                            <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #64748b; cursor: pointer;">
                                                <input type="radio" name="recon-type" checked /> 按账单号对账
                                            </label>
                                        </div>
                                         <div style="border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; margin-bottom: 12px; height: 80px; background: #f8fafc; display: flex; align-items: center; justify-content: center;">
                                            <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; color: #cbd5e1;">
                                                <i data-lucide="search" style="width: 20px; height: 20px;"></i>
                                                <span style="font-size: 12px;">No data</span>
                                            </div>
                                         </div>
                                    </div>

                                    <!-- Right Column -->
                                    <div style="width: 280px; padding-left: 20px;">
                                         <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                            <label style="width: 60px; text-align: right; color: #64748b; font-size: 13px;">银行账户</label>
                                            <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                         </div>
                                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 12px; height: 80px; color: #64748b; font-size: 12px; position: relative;">
                                            0 个账户
                                            <a href="#" style="position: absolute; bottom: 12px; right: 12px; color: #4f46e5; text-decoration: none;">选择账户></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Filter & Table Section -->
                            <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); flex: 1; display: flex; flex-direction: column;">
                                 <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
                                     <div style="display: flex; gap: 12px; font-size: 13px; color: #475569; margin-right: 8px;">
                                        <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type" checked /> 应收</label>
                                        <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type" /> 应付</label>
                                        <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type" /> 收付</label>
                                     </div>
                                     <input type="text" placeholder="请输入订单号" style="width: 240px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                     <span style="font-size: 13px; color: #64748b;">费用名称</span>
                                     <div class="select-box" style="width: 100px; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                     <button class="primary-btn" style="height: 32px; padding: 0 12px;">
                                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                                     </button>
                                     <button class="secondary-btn" style="height: 32px; padding: 0 12px; display: flex; align-items: center; gap: 4px; background: white; border: 1px solid #e2e8f0; color: #64748b;">
                                        更多(1) <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                                     </button>
                                      <div style="display: flex; align-items: center; gap: 12px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; height: 32px; background: white; margin-left: auto;">
                                         <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #475569; cursor: pointer;">
                                            <input type="radio" name="display-mode" /> 仅显示已勾选
                                         </label>
                                         <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #475569; cursor: pointer;">
                                            <input type="radio" name="display-mode" checked /> 全部
                                         </label>
                                      </div>
                                 </div>

                                 <div class="statement-table-container" style="flex: 1; padding: 0; background: transparent;">
                                    <table class="statement-table">
                                        <thead>
                                            <tr>
                                                 <th style="width: 40px; text-align: center;"><input type="checkbox" /></th>
                                                 <th style="width: 40px; text-align: center;">#</th>
                                                 <th>AR/AP</th>
                                                 <th>对账状态</th>
                                                 <th>工作单号</th>
                                                 <th>账单号</th>
                                                 <th>计费日期</th>
                                                 <th>工作单日期</th>
                                                 <th>账单日期</th>
                                                 <th>审核状态</th>
                                                 <th>费用项</th>
                                                 <th>币别</th>
                                                 <th>数量</th>
                                                 <th>单价</th>
                                                 <th>原币金额</th>
                                                 <th>对账金额</th>
                                                 <th>折合金额</th>
                                                 <th>账单日期截止日期</th>
                                                 <th>账单金额</th>
                                                 <th>未核销</th>
                                                 <th>所属公司</th>
                                                 <th>出单单位</th>
                                                 <th>委托人/换单人</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">1</td>
                                            <td>AR</td>
                                            <td>未对账</td>
                                            <td>OTH202312009</td>
                                            <td>BILL20231201</td>
                                            <td>2023-12-01</td>
                                            <td>2023-12-05</td>
                                            <td>2023-12-10</td>
                                            <td>已审核</td>
                                            <td>运费</td>
                                            <td>USD</td>
                                            <td>1</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>3500.00</td>
                                            <td>2023-12-31</td>
                                            <td>3500.00</td>
                                            <td>3500.00</td>
                                            <td>丰源物流</td>
                                            <td>深圳分公司</td>
                                            <td>张三</td>
                                            <td>张三</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">2</td>
                                            <td>AP</td>
                                            <td>部分对账</td>
                                            <td>OTH202312010</td>
                                            <td>BILL20231202</td>
                                            <td>2023-12-02</td>
                                            <td>2023-12-06</td>
                                            <td>2023-12-11</td>
                                            <td>审核中</td>
                                            <td>派车费</td>
                                            <td>CNY</td>
                                            <td>1</td>
                                            <td>1200.00</td>
                                            <td>1200.00</td>
                                            <td>1200.00</td>
                                            <td>1200.00</td>
                                            <td>2023-12-31</td>
                                            <td>1200.00</td>
                                            <td>600.00</td>
                                            <td>丰源物流</td>
                                            <td>广州分公司</td>
                                            <td>李四</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">3</td>
                                            <td>AR</td>
                                            <td>已对账</td>
                                            <td>OTH202312011</td>
                                            <td>BILL20231203</td>
                                            <td>2023-12-03</td>
                                            <td>2023-12-07</td>
                                            <td>2023-12-12</td>
                                            <td>未审核</td>
                                            <td>文件费</td>
                                            <td>CNY</td>
                                            <td>1</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>2023-12-31</td>
                                            <td>500.00</td>
                                            <td>0.00</td>
                                            <td>丰源物流</td>
                                            <td>上海分公司</td>
                                            <td>王五</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else if (activeTab === '接收账单') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Status Tabs -->
                <div style="border-bottom: 1px solid #e2e8f0; padding: 0 24px;">
                    <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">全部</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">待审核</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">同意</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">拒绝</div>
                    </div>
                </div>

                <!-- Filter Area -->
                <div class="filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px; background: #fff;">
                    <div class="persistent-filter-row">
                        <!-- Date Range -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>账单日期</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="开始日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="结束日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            </div>
                        </div>

                        <!-- Customer Input -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 0.85rem; color: #475569; white-space: nowrap;">客户</span>
                            <input type="text" placeholder="请输入" style="width: 250px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Keyword Input -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>关键字</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="请输入" style="width: 250px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Search Button -->
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>
                    </div>
                </div>

                <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>状态</th>
                                <th>收付方向</th>
                                <th>账单类型</th>
                                <th>结算单位</th>
                                <th>原币金额</th>
                                <th>折合币制</th>
                                <th>折合金额</th>
                                <th>账单号</th>
                                <th>账单日期</th>
                                <th>我方工作单号</th>
                                <th>对方工作单号</th>
                                <th>推送日期</th>
                                <th>推送人</th>
                                <th>审核日期</th>
                                <th>审核人</th>
                                <th style="width: 80px; text-align: center;">操作 <i data-lucide="settings" style="width: 12px; height: 12px; display: inline;"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Mock Data -->
                            <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;"><span style="color: #f59e0b;">待审核</span></td>
                                <td style="padding: 8px;">应付</td>
                                <td style="padding: 8px;">标准</td>
                                <td style="padding: 8px;">深圳市远航达</td>
                                <td style="padding: 8px;">USD 100.00</td>
                                <td style="padding: 8px;">CNY</td>
                                <td style="padding: 8px;">710.00</td>
                                <td style="padding: 8px;">ZD20231201001</td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">JOB20231201</td>
                                <td style="padding: 8px;">OPP20231201</td>
                                <td style="padding: 8px;">2023-12-02</td>
                                <td style="padding: 8px;">李四</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px; text-align: center;">
                                    <button style="border: none; background: none; color: #4f46e5; cursor: pointer;">详情</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                     <div class="table-empty-state" style="display:none;">
                        <img src="https://img.icons8.com/ios/100/94a3b8/search--v1.png" alt="no data" style="width: 64px; opacity: 0.5;">
                        <p>暂无数据</p>
                        <span style="font-size: 0.7rem;">No data</span>
                    </div>
                </div>
            </div>`;
        } else if (activeTab === '费用明细') {
            // Expense Detail Content
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Filter Area -->
                <div class="expense-detail-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background: #fff;">
                    <!-- Date Group -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>工作单日期</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                            <input type="text" placeholder="开始日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            <span style="color: #cbd5e1;">-</span>
                            <input type="text" placeholder="结束日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                        </div>
                    </div>

                    <!-- Keyword -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>关键字</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <input type="text" placeholder="请输入系统单号/工作单号/客户名称" style="width: 250px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                    </div>

                    <!-- Verification Status -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">销账状态</label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="expense-verification-status">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-verification-status', '未核销')">未核销</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-verification-status', '部分核销')">部分核销</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-verification-status', '已核销')">已核销</div>
                            </div>
                        </div>
                    </div>

                    <!-- Invoice Status -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">开票状态</label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="expense-invoice-status">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-invoice-status', '未开票')">未开票</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-invoice-status', '已开票')">已开票</div>
                            </div>
                        </div>
                    </div>

                    <!-- Bill Status -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">账单状态</label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="expense-bill-status">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-bill-status', '未出账单')">未出账单</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-bill-status', '已出账单')">已出账单</div>
                            </div>
                        </div>
                    </div>

                    <!-- Search Button -->
                    <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                    </button>

                    <!-- Generate Bill Button -->
                    <button id="expense-detail-generate-bill-btn" disabled class="secondary-btn" onclick="showGenerateBillModal()" style="height: 32px; padding: 0 16px; background: #f1f5f9; color: #94a3b8; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: not-allowed; transition: all 0.2s;">
                        <i data-lucide="file-plus" style="width: 14px; height: 14px;"></i> 按票生成账单
                    </button>
                </div>

                 <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox" onclick="toggleAllExpenseCheckboxes(this)"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>来源</th>
                                <th>AR/AP</th>
                                <th>单据类型</th>
                                <th>系统单号</th>
                                <th>结算公司</th>
                                <th>工作单日期</th>
                                <th>计费日期</th>
                                <th>币制</th>
                                <th>税率</th>
                                <th>数量</th>
                                <th>单位</th>
                                <th>金额</th>
                                <th>不含税金额</th>
                                <th>本位币金额</th>
                                <th>汇率</th>
                                <th>增减</th>
                                <th>备注</th>
                                <th>收付款状态</th>
                                <th>录入人</th>
                                <th>录入时间</th>
                                <th>修改人</th>
                                <th>修改时间</th>
                                <th>审核人</th>
                                <th>审核时间</th>
                                <th>审核状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;"><input type="checkbox" class="expense-row-checkbox" onclick="updateGenerateBillButtonState()"></td>
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;">费用</td>
                                <td style="padding: 8px;">应收</td>
                                <td style="padding: 8px;">运费</td>
                                <td style="padding: 8px;">S20231201001</td>
                                <td style="padding: 8px;">深圳市远航达</td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">USD</td>
                                <td style="padding: 8px;">6%</td>
                                <td style="padding: 8px;">1</td>
                                <td style="padding: 8px;">BOX</td>
                                <td style="padding: 8px;">1000.00</td>
                                <td style="padding: 8px;">943.40</td>
                                <td style="padding: 8px;">7100.00</td>
                                <td style="padding: 8px;">7.1</td>
                                <td style="padding: 8px;">0.00</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">未收付</td>
                                <td style="padding: 8px;">张三</td>
                                <td style="padding: 8px;">2023-12-01 10:00</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;"><span style="color: #f59e0b;">待审核</span></td>
                                <td style="padding: 8px;">
                                    <button style="border: none; background: none; color: #4f46e5; cursor: pointer;">详情</button>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
                </div>
            </div>`;
        } else if (activeTab === '后台管理') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: #f8fafc; padding: 24px;">
                <!-- Header -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <i data-lucide="users" style="width: 24px; height: 24px; color: var(--text-primary);"></i>
                        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary);">后台充值管理</h2>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; background: white; padding: 6px 16px 6px 6px; border-radius: 50px; box-shadow: var(--shadow-sm);">
                        <div style="width: 32px; height: 32px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">管</div>
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">管理员</span>
                            <span style="font-size: 0.7rem; color: var(--text-secondary);">系统管理员</span>
                        </div>
                    </div>
                </div>

                <!-- Stats Cards -->
                <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr) 1fr; gap: 20px; margin-bottom: 24px;">
                    <!-- Balance -->
                    <div class="stats-card" style="flex-direction: row; align-items: center; justify-content: space-between; padding: 24px;">
                        <div>
                            <div class="card-label" style="margin-bottom: 8px;">总账户余额</div>
                            <div class="card-value" style="font-size: 1.8rem;">¥1,248,500</div>
                        </div>
                        <div class="icon-box" style="width: 56px; height: 56px; background: #dbeafe; color: #3b82f6; border-radius: 12px;">
                            <i data-lucide="wallet" style="width: 28px; height: 28px;"></i>
                        </div>
                    </div>
                    <!-- Today Recharge -->
                    <div class="stats-card" style="flex-direction: row; align-items: center; justify-content: space-between; padding: 24px;">
                        <div>
                            <div class="card-label" style="margin-bottom: 8px;">今日充值总额</div>
                            <div class="card-value" style="font-size: 1.8rem;">¥42,800</div>
                        </div>
                        <div class="icon-box" style="width: 56px; height: 56px; background: #dcfce7; color: #22c55e; border-radius: 12px;">
                            <i data-lucide="trending-up" style="width: 28px; height: 28px;"></i>
                        </div>
                    </div>
                    <!-- Active Users -->
                    <div class="stats-card" style="flex-direction: row; align-items: center; justify-content: space-between; padding: 24px;">
                        <div>
                            <div class="card-label" style="margin-bottom: 8px;">活跃账户数</div>
                            <div class="card-value" style="font-size: 1.8rem;">1,248</div>
                        </div>
                        <div class="icon-box" style="width: 56px; height: 56px; background: #ffedd5; color: #f97316; border-radius: 12px;">
                            <i data-lucide="users" style="width: 28px; height: 28px;"></i>
                        </div>
                    </div>
                    <!-- Low Balance -->
                    <div class="stats-card" style="flex-direction: row; align-items: center; justify-content: space-between; padding: 24px;">
                        <div>
                            <div class="card-label" style="margin-bottom: 8px;">低余额账户</div>
                            <div class="card-value" style="font-size: 1.8rem;">24</div>
                        </div>
                        <div class="icon-box" style="width: 56px; height: 56px; background: #f3e8ff; color: #a855f7; border-radius: 12px;">
                            <i data-lucide="alert-circle" style="width: 28px; height: 28px;"></i>
                        </div>
                    </div>
                </div>

                <!-- Filter Bar -->
                <div style="display: flex; gap: 12px; margin-bottom: 24px; align-items: center;">
                    <div style="position: relative; flex-grow: 1; max-width: 400px;">
                        <i data-lucide="search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: #94a3b8;"></i>
                        <input type="text" placeholder="搜索用户ID、用户名或公司名称..." style="width: 100%; height: 42px; padding: 0 12px 0 36px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; outline: none; background: white;">
                    </div>
                     <div style="flex-grow: 1;"></div>
                    <div class="relative-container" style="width: 140px; height: 42px; border-radius: 8px; border: 1px solid #e2e8f0; background: white; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; cursor: pointer; position: relative;">
                        <span id="backend-status-select">所有状态</span>
                        <i data-lucide="chevron-down" style="width: 16px; height: 16px; color: #64748b;"></i>
                        <div class="dropdown-menu-custom hidden" style="position: absolute; top: calc(100% + 4px); left: 0; width: 100%; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50; overflow: hidden;">
                            <div class="dropdown-item-custom" onclick="selectOption('backend-status-select', '所有状态')" style="padding: 10px 12px; font-size: 0.85rem; color: #1e293b; cursor: pointer;">所有状态</div>
                            <div class="dropdown-item-custom" onclick="selectOption('backend-status-select', '活跃账户')" style="padding: 10px 12px; font-size: 0.85rem; color: #1e293b; cursor: pointer;">活跃账户</div>
                            <div class="dropdown-item-custom" onclick="selectOption('backend-status-select', '冻结账户')" style="padding: 10px 12px; font-size: 0.85rem; color: #1e293b; cursor: pointer;">冻结账户</div>
                            <div class="dropdown-item-custom" onclick="selectOption('backend-status-select', '低余额账户')" style="padding: 10px 12px; font-size: 0.85rem; color: #1e293b; cursor: pointer;">低余额账户</div>
                        </div>
                    </div>
                    <div class="relative-container" style="width: 160px; height: 42px; border-radius: 8px; border: 1px solid #e2e8f0; background: white; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; cursor: pointer; position: relative;">
                        <span id="backend-sort-select">余额从高到低</span>
                        <i data-lucide="chevron-down" style="width: 16px; height: 16px; color: #64748b;"></i>
                        <div class="dropdown-menu-custom hidden" style="position: absolute; top: calc(100% + 4px); left: 0; width: 100%; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50; overflow: hidden;">
                            <div class="dropdown-item-custom" onclick="selectOption('backend-sort-select', '余额从高到低')" style="padding: 10px 12px; font-size: 0.85rem; color: #1e293b; cursor: pointer;">余额从高到低</div>
                            <div class="dropdown-item-custom" onclick="selectOption('backend-sort-select', '余额从低到高')" style="padding: 10px 12px; font-size: 0.85rem; color: #1e293b; cursor: pointer;">余额从低到高</div>
                            <div class="dropdown-item-custom" onclick="selectOption('backend-sort-select', '最近充值')" style="padding: 10px 12px; font-size: 0.85rem; color: #1e293b; cursor: pointer;">最近充值</div>
                        </div>
                    </div>
                     <button class="primary-btn" style="height: 42px; padding: 0 20px; border-radius: 8px; display: flex; align-items: center; gap: 8px; background: #3b82f6; color: white; border: none; font-weight: 500; cursor: pointer;">
                        <i data-lucide="file-down" style="width: 18px; height: 18px;"></i> 导出数据
                    </button>
                </div>

                <!-- User Table Section -->
                <div style="background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="font-size: 1rem; font-weight: 600; color: var(--text-primary);">用户账户管理</h3>
                        <span style="font-size: 0.85rem; color: var(--text-secondary);">共 1,248 个账户</span>
                    </div>
                    
                    <div style="overflow-x: auto;">
                        <table class="data-table" style="width: 100%;">
                            <thead>
                                <tr style="background: #f8fafc;">
                                    <th style="padding: 16px 24px; text-align: left; font-weight: 600; color: #64748b;">用户信息</th>
                                    <th style="padding: 16px 24px; text-align: left; font-weight: 600; color: #64748b;">用户ID</th>
                                    <th style="padding: 16px 24px; text-align: left; font-weight: 600; color: #64748b;">账户余额</th>
                                    <th style="padding: 16px 24px; text-align: left; font-weight: 600; color: #64748b;">账户状态</th>
                                    <th style="padding: 16px 24px; text-align: left; font-weight: 600; color: #64748b;">最后充值时间</th>
                                    <th style="padding: 16px 24px; text-align: left; font-weight: 600; color: #64748b;">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Row 1 -->
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; align-items: center; gap: 12px;">
                                            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">张</div>
                                            <div>
                                                <div style="font-weight: 600; color: #1e293b; font-size: 0.95rem;">张三</div>
                                                <div style="font-size: 0.8rem; color: #94a3b8;">创新科技有限公司</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">ERP-2023-0582</td>
                                    <td style="padding: 16px 24px; font-weight: 700; color: #10b981; font-size: 1rem;">¥8,450</td>
                                    <td style="padding: 16px 24px;">
                                        <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600;">活跃</span>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">2023-10-15</td>
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; gap: 8px;">
                                            <button class="btn-recharge" data-id="ERP-2023-0582" data-name="张三" data-company="创新科技有限公司" data-balance="8,450" style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0f2fe; color: #0ea5e9; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button class="btn-view-details" style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0e7ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 2 -->
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; align-items: center; gap: 12px;">
                                            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">李</div>
                                            <div>
                                                <div style="font-weight: 600; color: #1e293b; font-size: 0.95rem;">李四</div>
                                                <div style="font-size: 0.8rem; color: #94a3b8;">未来科技有限公司</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">ERP-2023-0421</td>
                                    <td style="padding: 16px 24px; font-weight: 700; color: #10b981; font-size: 1rem;">¥15,200</td>
                                    <td style="padding: 16px 24px;">
                                        <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600;">活跃</span>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">2023-10-14</td>
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; gap: 8px;">
                                            <button class="btn-recharge" data-id="ERP-2023-0421" data-name="李四" data-company="未来科技有限公司" data-balance="15,200" style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0f2fe; color: #0ea5e9; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0e7ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 3 -->
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; align-items: center; gap: 12px;">
                                            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">王</div>
                                            <div>
                                                <div style="font-weight: 600; color: #1e293b; font-size: 0.95rem;">王五</div>
                                                <div style="font-size: 0.8rem; color: #94a3b8;">智云网络有限公司</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">ERP-2023-0367</td>
                                    <td style="padding: 16px 24px; font-weight: 700; color: #10b981; font-size: 1rem;">¥3,200</td>
                                    <td style="padding: 16px 24px;">
                                        <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600;">活跃</span>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">2023-10-12</td>
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; gap: 8px;">
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0f2fe; color: #0ea5e9; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0e7ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                 <!-- Row 4 -->
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; align-items: center; gap: 12px;">
                                            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">赵</div>
                                            <div>
                                                <div style="font-weight: 600; color: #1e293b; font-size: 0.95rem;">赵六</div>
                                                <div style="font-size: 0.8rem; color: #94a3b8;">星辰信息技术</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">ERP-2023-0198</td>
                                    <td style="padding: 16px 24px; font-weight: 700; color: #ef4444; font-size: 1rem;">¥120</td>
                                    <td style="padding: 16px 24px;">
                                        <span style="background: #fef3c7; color: #b45309; padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600;">低余额</span>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">2023-09-28</td>
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; gap: 8px;">
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0f2fe; color: #0ea5e9; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0e7ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 5 -->
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; align-items: center; gap: 12px;">
                                            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">刘</div>
                                            <div>
                                                <div style="font-weight: 600; color: #1e293b; font-size: 0.95rem;">刘七</div>
                                                <div style="font-size: 0.8rem; color: #94a3b8;">华通集团</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">ERP-2023-0789</td>
                                    <td style="padding: 16px 24px; font-weight: 700; color: #10b981; font-size: 1rem;">¥25,600</td>
                                    <td style="padding: 16px 24px;">
                                        <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600;">活跃</span>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">2023-10-16</td>
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; gap: 8px;">
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0f2fe; color: #0ea5e9; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0e7ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 6 -->
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; align-items: center; gap: 12px;">
                                            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">陈</div>
                                            <div>
                                                <div style="font-weight: 600; color: #1e293b; font-size: 0.95rem;">陈八</div>
                                                <div style="font-size: 0.8rem; color: #94a3b8;">易联科技有限公司</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">ERP-2023-0654</td>
                                    <td style="padding: 16px 24px; font-weight: 700; color: #ef4444; font-size: 1rem;">¥0</td>
                                    <td style="padding: 16px 24px;">
                                        <span style="background: #fee2e2; color: #b91c1c; padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600;">冻结</span>
                                    </td>
                                    <td style="padding: 16px 24px; color: #64748b;">2023-08-15</td>
                                    <td style="padding: 16px 24px;">
                                        <div style="display: flex; gap: 8px;">
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0f2fe; color: #0ea5e9; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: none; background: #e0e7ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
                                            </button>
                                            <button style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                         <div style="padding: 12px 24px; display: flex; justify-content: center; border-top: 1px solid #e2e8f0;">
                            <span style="font-size: 0.8rem; color: #94a3b8; cursor: pointer;">加载更多...</span>
                        </div>
                    </div>
                </div>

                <!-- Recharge Modal -->
                <div id="backend-recharge-modal-v2" class="modal-overlay hidden" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1000; display: none; align-items: center; justify-content: center;">
                    <div class="modal-content" style="background: white; border-radius: 12px; width: 300px; padding: 24px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b;">账户充值</h3>
                            <button onclick="closeBackendRechargeModal()" style="background: none; border: none; cursor: pointer; color: #64748b;">
                                <i data-lucide="x" style="width: 24px; height: 24px;"></i>
                            </button>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #f1f5f9;">
                            <div id="modal-user-avatar" style="width: 56px; height: 56px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.25rem;">
                                张
                            </div>
                            <div>
                                <h4 id="modal-user-name" style="font-size: 1.1rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">张三</h4>
                                <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 2px;">用户ID: <span id="modal-user-id">ERP-2023-0582</span></div>
                                <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 2px;">公司名称: <span id="modal-user-company">创新科技有限公司</span></div>
                                <div style="font-size: 0.85rem; color: #64748b;">当前余额: <span id="modal-user-balance" style="font-weight: 700; color: #64748b;">¥10,450</span></div>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 16px;">
                            <div>
                                <label style="display: block; font-size: 0.85rem; font-weight: 500; color: #64748b; margin-bottom: 8px;">充值金额 (元)</label>
                                <input id="recharge-amount-input" type="number" value="1000" style="width: 100%; height: 40px; padding: 0 12px; border: 1px solid #e2e8f0; border-radius: 6px; outline: none; font-size: 0.9rem;">
                            </div>
                            <div>
                                <label style="display: block; font-size: 0.85rem; font-weight: 500; color: #64748b; margin-bottom: 8px;">支付方式</label>
                                <div class="relative-container" style="width: 100%; height: 40px; border: 1px solid #e2e8f0; border-radius: 6px; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; cursor: pointer; position: relative;" onclick="document.getElementById('modal-payment-menu').classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="modal-payment-select">支付宝</span>
                                    <i data-lucide="chevron-down" style="width: 16px; height: 16px; color: #94a3b8;"></i>
                                    <div id="modal-payment-menu" class="dropdown-menu-custom hidden" style="position: absolute; top: calc(100% + 4px); left: 0; width: 100%; background: white; border: 1px solid #e2e8f0; border-radius: 6px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50; overflow: hidden;">
                                        <div class="dropdown-item-custom" onclick="selectOption('modal-payment-select', '支付宝')" style="padding: 10px 12px; font-size: 0.9rem; color: #1e293b; cursor: pointer;">支付宝</div>
                                        <div class="dropdown-item-custom" onclick="selectOption('modal-payment-select', '微信支付')" style="padding: 10px 12px; font-size: 0.9rem; color: #1e293b; cursor: pointer;">微信支付</div>
                                        <div class="dropdown-item-custom" onclick="selectOption('modal-payment-select', '银行转账')" style="padding: 10px 12px; font-size: 0.9rem; color: #1e293b; cursor: pointer;">银行转账</div>
                                        <div class="dropdown-item-custom" onclick="selectOption('modal-payment-select', '手动调整')" style="padding: 10px 12px; font-size: 0.9rem; color: #1e293b; cursor: pointer;">手动调整</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="margin-bottom: 24px;">
                            <label style="display: block; font-size: 0.85rem; font-weight: 500; color: #64748b; margin-bottom: 8px;">备注信息</label>
                            <textarea placeholder="请输入充值备注信息..." style="width: 100%; height: 120px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; outline: none; font-size: 0.9rem; resize: none;"></textarea>
                        </div>

                        <div style="display: flex; justify-content: flex-end; gap: 12px;">
                            <button onclick="closeBackendRechargeModal()" style="height: 40px; padding: 0 20px; border: 1px solid #e2e8f0; border-radius: 6px; background: white; color: #64748b; cursor: pointer; font-size: 0.9rem;">取消</button>
                            <button id="btn-confirm-recharge" onclick="confirmBackendRecharge()" style="height: 40px; padding: 0 20px; border: none; border-radius: 6px; background: #10b981; color: white; cursor: pointer; font-size: 0.9rem; font-weight: 500;">确认充值</button>
                        </div>
                    </div>
                </div>
            </div>
                <!-- Account Details Modal -->
                <div id="backend-account-details-modal" class="modal-overlay hidden" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1000; display: none; align-items: center; justify-content: center;">
                    <div class="modal-content" style="background: white; border-radius: 12px; width: 600px; padding: 32px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); max-height: 90vh; overflow-y: auto;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                            <h3 style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">账户详情</h3>
                            <button onclick="closeBackendDetailsModal()" style="background: none; border: none; cursor: pointer; color: #64748b;">
                                <i data-lucide="x" style="width: 24px; height: 24px;"></i>
                            </button>
                        </div>

                        <div style="display: flex; gap: 24px; margin-bottom: 32px;">
                            <div id="details-user-avatar" style="width: 80px; height: 80px; background: #3b82f6; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 2rem; flex-shrink: 0;">张</div>
                            <div style="flex: 1;">
                                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                                    <h4 id="details-user-name" style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">张三</h4>
                                </div>
                                <div style="color: #64748b; margin-bottom: 4px;">用户ID: <span id="details-user-id">ERP-2023-0582</span></div>
                                <div style="color: #64748b; margin-bottom: 4px;">公司名称: <span id="details-user-company">创新科技有限公司</span></div>
                                <div style="color: #64748b; margin-bottom: 4px;">账户状态: <span style="background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 600;">活跃</span></div>
                                <div style="color: #64748b; margin-bottom: 4px;">当前余额: <span id="details-user-balance" style="font-weight: 700; color: #1e293b; font-size: 1.1rem;">¥10,450</span></div>
                                <div style="color: #64748b;">账户等级: VIP 2级</div>
                            </div>
                        </div>

                        <h4 style="font-size: 1.1rem; font-weight: 600; color: #1e293b; margin-bottom: 16px;">最近交易记录</h4>
                        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                            <thead>
                                <tr style="background: #f8fafc; color: #64748b; font-size: 0.85rem; text-align: left;">
                                    <th style="padding: 12px;">时间</th>
                                    <th style="padding: 12px;">类型</th>
                                    <th style="padding: 12px;">金额</th>
                                    <th style="padding: 12px;">支付方式</th>
                                    <th style="padding: 12px;">备注</th>
                                </tr>
                            </thead>
                            <tbody id="details-transaction-list" style="font-size: 0.9rem; color: #1e293b;">
                                <!-- Mock Data rows will be injected here -->
                            </tbody>
                        </table>

                        <div style="display: flex; justify-content: flex-end;">
                            <button id="btn-details-recharge" onclick="switchToRechargeFromDetails()" style="height: 48px; padding: 0 32px; border: none; border-radius: 6px; background: #3b82f6; color: white; cursor: pointer; font-size: 1rem; font-weight: 500;">为此账户充值</button>
                        </div>
                    </div>
                </div>
            </div>`;
        } else if (activeTab === '应收明细') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- List View Wrapper -->
                <div id="statement-list-view" style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                    <!-- Status Tabs -->
                    <div style="border-bottom: 1px solid #e2e8f0; padding: 0 24px;">
                        <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                            <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">全部</div>
                            <div class="status-tab" style="padding: 12px 0; cursor: pointer;">待出账单 (89)</div>
                             <div class="status-tab" style="padding: 12px 0; cursor: pointer;">待对账(月结) (14)</div>
                            <div class="status-tab" style="padding: 12px 0; cursor: pointer;">未开票 (133)</div>
                            <div class="status-tab" style="padding: 12px 0; cursor: pointer;">申请开票中 (0)</div>
                            <div class="status-tab" style="padding: 12px 0; cursor: pointer;">已开票 (5)</div>
                            <div class="status-tab" style="padding: 12px 0; cursor: pointer;">未核销 (115)</div>
                             <div class="status-tab" style="padding: 12px 0; cursor: pointer;">预收待到账 (0)</div>
                            <div class="status-tab" style="padding: 12px 0; cursor: pointer;">部分核销 (0)</div>
                            <div class="status-tab" style="padding: 12px 0; cursor: pointer;">已核销 (23)</div>
                        </div>
                    </div>

                    <!-- Filter Area -->
                    <div class="receivables-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background: #fff;">
                        <!-- Date -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>工作单日期</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="开始日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="结束日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            </div>
                        </div>

                        <!-- Keyword -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>关键字</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="请输入系统单号/工作单号/客户名称" style="width: 280px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Status Dropdowns -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">销账状态</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-verification-status-selected">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-verification-status-selected', '未核销')">未核销</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-verification-status-selected', '部分核销')">部分核销</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-verification-status-selected', '已核销')">已核销</div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">开票状态</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-invoice-status-selected">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-invoice-status-selected', '未开票')">未开票</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-invoice-status-selected', '已开票')">已开票</div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">账单状态</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-bill-status-selected">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-bill-status-selected', '未出账单')">未出账单</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-bill-status-selected', '已出账单')">已出账单</div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">对账状态</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-reconciliation-status-selected">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-reconciliation-status-selected', '未对账')">未对账</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-reconciliation-status-selected', '已对账')">已对账</div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">费用审核</label>
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span>请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Search Button -->
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>

                        <!-- Create Bill Button -->
                        <button id="receivables-create-bill-btn" class="primary-btn" onclick="showCreateStatement()" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: 1px solid #4f46e5; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; margin-left: 8px; transition: all 0.2s;">
                            <i data-lucide="plus" style="width: 14px; height: 14px;"></i> 创建账单
                        </button>

                        <!-- Generate Bill by Ticket Button -->
                        <button id="receivables-generate-bill-btn" disabled class="secondary-btn" onclick="showGenerateBillModal()" style="height: 32px; padding: 0 16px; background: #f1f5f9; color: #94a3b8; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: not-allowed; margin-left: 8px; transition: all 0.2s;">
                            <i data-lucide="file-plus" style="width: 14px; height: 14px;"></i> 按票生成账单
                        </button>
                    </div>

                     <!-- Table Content Area -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                        <table class="statement-table" style="min-width: max-content;">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox" onchange="toggleAllReceivablesCheckboxes(this)"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>来源</th>
                                    <th>AR/AP</th>
                                    <th>单据类型</th>
                                    <th>系统单号</th>
                                    <th>结算公司</th>
                                    <th>工作单日期</th>
                                    <th>计费日期</th>
                                    <th>币制</th>
                                    <th>税率</th>
                                    <th>数量</th>
                                    <th>单位</th>
                                    <th>金额</th>
                                    <th>不含税金额</th>
                                    <th>本位币金额</th>
                                    <th>汇率</th>
                                    <th>增减</th>
                                    <th>备注</th>
                                    <th>收付款状态</th>
                                    <th>录入人</th>
                                    <th>录入时间</th>
                                    <th>修改人</th>
                                    <th>修改时间</th>
                                    <th>审核人</th>
                                    <th>审核时间</th>
                                    <th>审核状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 8px; text-align: center;"><input type="checkbox" class="receivables-row-checkbox" onchange="updateReceivablesGenerateBillButtonState()"></td>
                                    <td style="padding: 8px; text-align: center;">1</td>
                                    <td style="padding: 8px;">费用</td>
                                    <td style="padding: 8px;">AR</td>
                                    <td style="padding: 8px;">整车</td>
                                    <td style="padding: 8px;">S20231201001</td>
                                    <td style="padding: 8px;">深圳市远航达</td>
                                    <td style="padding: 8px;">2023-12-01</td>
                                    <td style="padding: 8px;">2023-12-01</td>
                                    <td style="padding: 8px;">USD</td>
                                    <td style="padding: 8px;">6%</td>
                                    <td style="padding: 8px;">1</td>
                                    <td style="padding: 8px;">BOX</td>
                                    <td style="padding: 8px;">1000.00</td>
                                    <td style="padding: 8px;">943.40</td>
                                    <td style="padding: 8px;">7100.00</td>
                                    <td style="padding: 8px;">7.1</td>
                                    <td style="padding: 8px;">0.00</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">未收付</td>
                                    <td style="padding: 8px;">张三</td>
                                    <td style="padding: 8px;">2023-12-01 10:00</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;"><span style="color: #f59e0b;">待审核</span></td>
                                    <td style="padding: 8px;">
                                        <button style="border: none; background: none; color: #4f46e5; cursor: pointer;">详情</button>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div> <!-- End of statement-list-view -->

                <!-- Create Statement View (Hidden) -->
                <div id="statement-create-view" style="display: none; flex-direction: column; width: 100%; height: 100%; background: #f8fafc;">
                    <!-- Header -->
                    <div style="height: 50px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; flex-shrink: 0;">
                        <div style="font-size: 14px; color: #64748b;">对账单号: <span style="color: #94a3b8;">自动生成</span></div>
                        <div style="display: flex; gap: 8px;">
                            <button class="primary-btn" style="height: 30px; padding: 0 16px;">保存</button>
                            <button class="secondary-btn" style="height: 30px; padding: 0 16px; background: white; border: 1px solid #e2e8f0; color: #64748b;" onclick="hideCreateStatement()">返回</button>
                        </div>
                    </div>

                    <!-- Content Area -->
                    <div style="flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
                        <!-- Form Section -->
                        <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                            <div style="display: flex; gap: 24px;">
                                <!-- Left Column -->
                                <div style="flex: 1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px 24px;">
                                    <!-- Row 1 -->
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">结算单位</label>
                                        <div style="flex: 1; display: flex; gap: 8px;">
                                            <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                            <div style="display: flex; align-items: center; background: #f1f5f9; border-radius: 4px; padding: 0 8px; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0;">NL</div>
                                            <div style="display: flex; align-items: center; background: #f1f5f9; border-radius: 4px; padding: 0 8px; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0;">月结</div>
                                        </div>
                                    </div>
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">工作单日期</label>
                                         <div style="flex: 1; display: flex; align-items: center; gap: 4px;">
                                            <input type="date" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                            <span style="color: #94a3b8;">-</span>
                                             <input type="date" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                        </div>
                                    </div>

                                    <!-- Row 2 -->
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">对账方式</label>
                                        <div class="relative-container" style="flex: 1;">
                                            <div class="select-box" style="width: 100%; height: 32px; display: flex; align-items: center; justify-content: space-between;" onclick="toggleDropdown(this)">
                                                <span id="create-statement-recon-type-receivables">按费用对账</span>
                                                <i data-lucide="chevron-down"></i>
                                            </div>
                                            <div class="dropdown-menu-custom hidden" style="width: 100%; top: 100%; left: 0;">
                                                <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type-receivables', '按费用对账')">按费用对账</div>
                                                <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type-receivables', '按账单对账')">按账单对账</div>
                                                <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type-receivables', '按工作单对账')">按工作单对账</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">折合金额</label>
                                         <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                            <div class="select-box" style="width: 70px; height: 32px;"><span>CNY</span><i data-lucide="chevron-down"></i></div>
                                            <input type="text" value="未收: 0.00" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; background: #f8fafc; color: #94a3b8; font-size: 13px;" disabled />
                                        </div>
                                    </div>

                                    <!-- Row 3 -->
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">预收次余额</label>
                                        <div style="flex: 1;"></div>
                                    </div>
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">预付次余额</label>
                                        <div style="flex: 1;"></div>
                                    </div>

                                    <!-- Row 4 -->
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">公司抬头</label>
                                        <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                    </div>
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">说明</label>
                                        <input type="text" placeholder="请输入" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                    </div>
                                </div>

                                <!-- Middle Column -->
                                <div style="width: 320px; border-left: 1px solid #f1f5f9; padding-left: 20px;">
                                    <div style="margin-bottom: 12px; display: flex; gap: 16px;">
                                        <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #64748b; cursor: pointer;">
                                            <input type="radio" name="recon-type-receivables" /> 按参考凭证号对账
                                        </label>
                                        <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #64748b; cursor: pointer;">
                                            <input type="radio" name="recon-type-receivables" checked /> 按账单号对账
                                        </label>
                                    </div>
                                     <div style="border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; margin-bottom: 12px; height: 80px; background: #f8fafc; display: flex; align-items: center; justify-content: center;">
                                        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; color: #cbd5e1;">
                                            <i data-lucide="search" style="width: 20px; height: 20px;"></i>
                                            <span style="font-size: 12px;">No data</span>
                                        </div>
                                     </div>
                                </div>

                                <!-- Right Column -->
                                <div style="width: 280px; padding-left: 20px;">
                                     <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                        <label style="width: 60px; text-align: right; color: #64748b; font-size: 13px;">银行账户</label>
                                        <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                     </div>
                                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 12px; height: 80px; color: #64748b; font-size: 12px; position: relative;">
                                        0 个账户
                                        <a href="#" style="position: absolute; bottom: 12px; right: 12px; color: #4f46e5; text-decoration: none;">选择账户></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Filter & Table Section -->
                        <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); flex: 1; display: flex; flex-direction: column;">
                             <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
                                 <div style="display: flex; gap: 12px; font-size: 13px; color: #475569; margin-right: 8px;">
                                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type-receivables" checked /> 应收</label>
                                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type-receivables" /> 应付</label>
                                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type-receivables" /> 收付</label>
                                 </div>
                                 <input type="text" placeholder="请输入订单号" style="width: 240px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                 <span style="font-size: 13px; color: #64748b;">费用名称</span>
                                 <div class="select-box" style="width: 100px; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                 <button class="primary-btn" style="height: 32px; padding: 0 12px;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                                 </button>
                                 <button class="secondary-btn" style="height: 32px; padding: 0 12px; display: flex; align-items: center; gap: 4px; background: white; border: 1px solid #e2e8f0; color: #64748b;">
                                    更多(1) <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                                 </button>
                                  <div style="display: flex; align-items: center; gap: 12px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; height: 32px; background: white; margin-left: auto;">
                                     <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #475569; cursor: pointer;">
                                        <input type="radio" name="display-mode-receivables" /> 仅显示已勾选
                                     </label>
                                     <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #475569; cursor: pointer;">
                                        <input type="radio" name="display-mode-receivables" checked /> 全部
                                     </label>
                                  </div>
                             </div>

                             <div class="statement-table-container" style="flex: 1; padding: 0; background: transparent;">
                                <table class="statement-table">
                                    <thead>
                                        <tr>
                                             <th style="width: 40px; text-align: center;"><input type="checkbox" /></th>
                                             <th style="width: 40px; text-align: center;">#</th>
                                             <th>AR/AP</th>
                                             <th>对账状态</th>
                                             <th>工作单号</th>
                                             <th>账单号</th>
                                             <th>计费日期</th>
                                             <th>工作单日期</th>
                                             <th>账单日期</th>
                                             <th>审核状态</th>
                                             <th>费用项</th>
                                             <th>币别</th>
                                             <th>数量</th>
                                             <th>单价</th>
                                             <th>原币金额</th>
                                             <th>对账金额</th>
                                             <th>折合金额</th>
                                             <th>账单日期截止日期</th>
                                             <th>账单金额</th>
                                             <th>未核销</th>
                                             <th>所属公司</th>
                                             <th>出单单位</th>
                                             <th>委托人/换单人</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td style="text-align: center;"><input type="checkbox" /></td>
                                        <td style="text-align: center;">1</td>
                                        <td>AR</td>
                                        <td>未对账</td>
                                        <td>OTH202312009</td>
                                        <td>BILL20231201</td>
                                        <td>2023-12-01</td>
                                        <td>2023-12-05</td>
                                        <td>2023-12-10</td>
                                        <td>已审核</td>
                                        <td>运费</td>
                                        <td>USD</td>
                                        <td>1</td>
                                        <td>500.00</td>
                                        <td>500.00</td>
                                        <td>3500.00</td>
                                        <td>2023-12-31</td>
                                        <td>3500.00</td>
                                        <td>3500.00</td>
                                        <td>丰源物流</td>
                                        <td>深圳分公司</td>
                                        <td>张三</td>
                                        <td>张三</td>
                                    </tr>
                                    </tbody>
                                </table>
                             </div>
                        </div>
                    </div>
                </div>
            </div>`;
        } else if (activeTab === '应付明细') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Status Tabs -->
                <div style="border-bottom: 1px solid #e2e8f0; padding: 0 24px;">
                     <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">全部</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">待付账单 (66)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">待对账(月结) (5)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">未收票 (80)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">已收票 (2)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">待请款 (64)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">已请款 (7)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">未核销 (74)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">预付待核销 (0)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">部分核销 (0)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">已核销 (8)</div>
                    </div>
                </div>

                 <!-- Filter Area -->
                <div class="payables-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background: #fff;">
                    <!-- Date -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>工作单日期</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                            <input type="text" placeholder="开始日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <span style="color: #cbd5e1;">-</span>
                            <input type="text" placeholder="结束日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                        </div>
                    </div>

                    <!-- Keyword -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>关键字</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <input type="text" placeholder="请输入系统单号/工作单号/客户名称" style="width: 280px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                    </div>

                    <!-- Status Dropdowns -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">销账状态</label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                <span id="payables-verification-status-selected">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-verification-status-selected', '未核销')">未核销</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-verification-status-selected', '部分核销')">部分核销</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-verification-status-selected', '已核销')">已核销</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">开票状态</label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                <span id="payables-invoice-status-selected">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-invoice-status-selected', '未开票')">未开票</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-invoice-status-selected', '已开票')">已开票</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">账单状态</label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                <span id="payables-bill-status-selected">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-bill-status-selected', '未出账单')">未出账单</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-bill-status-selected', '已出账单')">已出账单</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">对账状态</label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                <span id="payables-reconciliation-status-selected">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-reconciliation-status-selected', '未对账')">未对账</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-reconciliation-status-selected', '已对账')">已对账</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">费用审核</label>
                        <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                            <span>请选择</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                    </div>

                    <!-- Search Button -->
                    <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                    </button>

                    <!-- Generate Bill by Ticket Button -->
                    <button id="payables-generate-bill-btn" disabled class="secondary-btn" onclick="showGenerateBillModal()" style="height: 32px; padding: 0 16px; background: #f1f5f9; color: #94a3b8; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: not-allowed; transition: all 0.2s;">
                        <i data-lucide="file-plus" style="width: 14px; height: 14px;"></i> 按票生成账单
                    </button>
                </div>

                 <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox" onchange="toggleAllPayablesCheckboxes(this)"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>来源</th>
                                <th>AR/AP</th>
                                <th>单据类型</th>
                                <th>系统单号</th>
                                <th>结算公司</th>
                                <th>工作单日期</th>
                                <th>计费日期</th>
                                <th>币制</th>
                                <th>税率</th>
                                <th>数量</th>
                                <th>单位</th>
                                <th>金额</th>
                                <th>不含税金额</th>
                                <th>本位币金额</th>
                                <th>汇率</th>
                                <th>增减</th>
                                <th>备注</th>
                                <th>收付款状态</th>
                                <th>录入人</th>
                                <th>录入时间</th>
                                <th>修改人</th>
                                <th>修改时间</th>
                                <th>审核人</th>
                                <th>审核时间</th>
                                <th>审核状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;"><input type="checkbox" class="payables-row-checkbox" onchange="updatePayablesGenerateBillButtonState()"></td>
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;">费用</td>
                                <td style="padding: 8px;">AP</td>
                                <td style="padding: 8px;">整车</td>
                                <td style="padding: 8px;">S20231201001</td>
                                <td style="padding: 8px;">深圳市远航达</td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">USD</td>
                                <td style="padding: 8px;">6%</td>
                                <td style="padding: 8px;">1</td>
                                <td style="padding: 8px;">BOX</td>
                                <td style="padding: 8px;">1000.00</td>
                                <td style="padding: 8px;">943.40</td>
                                <td style="padding: 8px;">7100.00</td>
                                <td style="padding: 8px;">7.1</td>
                                <td style="padding: 8px;">0.00</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">未收付</td>
                                <td style="padding: 8px;">张三</td>
                                <td style="padding: 8px;">2023-12-01 10:00</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;"><span style="color: #f59e0b;">待审核</span></td>
                                <td style="padding: 8px;">
                                    <button style="border: none; background: none; color: #4f46e5; cursor: pointer;">详情</button>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>`;
        } else if (activeTab === '业务员成本明细' || activeTab === '代收代付明细') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                 <!-- Filter Area -->
                <div class="salesman-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background: #fff;">
                    <!-- Date -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>工作单日期</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                            <input type="text" placeholder="开始日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;" />
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="结束日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;" />
                                    <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                </div>
                        </div>

                        <!-- Keyword -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>关键字</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                                <input type="text" placeholder="请输入工作单号" style="width: 320px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;" />
                        </div>

                        <!-- Salesman Dropdown -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">业务员</label>
                            <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span>请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Search Button -->
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem; font-weight: 500; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>
                </div>

                    <!-- Table Content Area -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                        <table class="statement-table" style="min-width: max-content;">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>单据类型</th>
                                    <th>系统单号</th>
                                    <th>结算公司</th>
                                    <th>工作单日期</th>
                                    <th>计费日期</th>
                                    <th>币制</th>
                                    <th>单位</th>
                                    <th>金额</th>
                                    <th>本位币金额</th>
                                    <th>汇率</th>
                                    <th>核销</th>
                                    <th>备注</th>
                                    <th>收付状态</th>
                                    <th>录入人</th>
                                    <th>录入时间</th>
                                    <th>修改人</th>
                                    <th>修改时间</th>
                                    <th>审核人</th>
                                    <th>审核时间</th>
                                    <th style="width: 40px; text-align: center;"><i data-lucide="settings" style="width: 14px; height: 14px; color: #64748b;"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 8px; text-align: center;"><input type="checkbox" class="payables-row-checkbox" onchange="updatePayablesGenerateBillButtonState()"></td>
                                    <td style="padding: 8px; text-align: center;">1</td>
                                    <td style="padding: 8px;">整车</td>
                                    <td style="padding: 8px;">S20231201001</td>
                                    <td style="padding: 8px;">深圳市远航达</td>
                                    <td style="padding: 8px;">2023-12-01</td>
                                    <td style="padding: 8px;">2023-12-01</td>
                                    <td style="padding: 8px;">CNY</td>
                                    <td style="padding: 8px;">票</td>
                                    <td style="padding: 8px;">500.00</td>
                                    <td style="padding: 8px;">500.00</td>
                                    <td style="padding: 8px;">1.00</td>
                                    <td style="padding: 8px;">未核销</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">未收付</td>
                                    <td style="padding: 8px;">张三</td>
                                    <td style="padding: 8px;">2023-12-01 11:30</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px; text-align: center;">
                                        <i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;
        } else if (activeTab === '收付款') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: #fff;">
                <!-- Header Actions Area -->
                <div style="padding: 12px 24px; display: flex; align-items: center; justify-content: flex-end; gap: 8px; background: #fbfcfe; border-bottom: 1px solid #e2e8f0;">
                    <button class="primary-btn" onclick="showNewReceiptModal()" style="height: 32px; padding: 0 12px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                        <i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i> 新建收款
                    </button>
                    <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                        <i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i> 新建付款
                    </button>
                    <div class="relative-container">
                        <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #e0f2fe; border: none; border-radius: 4px; color: #0369a1; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                            批量销账<i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                        </button>
                    </div>
                    <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 4px; color: #475569; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                        <i data-lucide="upload-cloud" style="width: 14px; height: 14px;"></i> 导出
                    </button>
                    <button style="width: 32px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>

                <!-- Filter Area -->
                <!-- Filter Area -->
                <div class="receipt-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background: #fff;">
                    
                    <!-- Direction Filter -->
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 0.8rem; color: #475569;">收付方向</span>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem;">
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="direction" checked /> 全部</label>
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="direction" /> 收</label>
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="direction" /> 付</label>
                        </div>
                    </div>

                    <!-- Date Group -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>收付日期</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                            <input type="text" placeholder="开始日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            <span style="color: #cbd5e1;">-</span>
                            <input type="text" placeholder="结束日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                        </div>
                    </div>

                    <!-- Large Search Input -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; flex-grow: 1; min-width: 200px;">
                            <input type="text" placeholder="请输入结算单位/流水号/发票号/工作单号/工作单参考号/核销单号" style="width: 100%; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;" />
                    </div>

                    <!-- Write-off No -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500; white-space: nowrap;">核销单号</label>
                            <input type="text" placeholder="请输入核销单号" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; font-size: 0.8rem; outline: none;" />
                    </div>

                    <!-- Status Dropdown -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500; white-space: nowrap;">流水状态</label>
                        <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: #fff;">
                            <span>全部</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                    </div>

                    <!-- Search Button Area -->
                    <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem; font-weight: 500; cursor: pointer;">
                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                    </button>
                    
                </div>

                <!-- Table Area Placeholder -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                 <th style="width: 40px; text-align: center;"><input type="checkbox" /></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>收付方向</th>
                                <th>票据类型</th>
                                <th>状态</th>
                                <th>制单日期</th>
                                <th>结算单位</th>
                                <th>银行账户/现金账户</th>
                                <th style="width: 40px; text-align: center;"><i data-lucide="settings" style="width: 14px; height: 14px; color: #64748b;"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                 <td style="padding: 8px; text-align: center;"><input type="checkbox" /></td>
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;">收</td>
                                <td style="padding: 8px;">支票</td>
                                <td style="padding: 8px;"><span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 99px; font-size: 0.75rem;">已确认</span></td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">深圳市远航达国际货运代理有限公司</td>
                                <td style="padding: 8px;">招商银行 123456789</td>
                                <td style="padding: 8px;">CNY</td>
                                <td style="padding: 8px;">1,200.00</td>
                                <td style="padding: 8px;">1,200.00</td>
                                <td style="padding: 8px;">0.00</td>
                                <td style="padding: 8px;">2023-12-01 14:00</td>
                                <td style="padding: 8px;">V001</td>
                                <td style="padding: 8px;">LS202312010001</td>
                                <td style="padding: 8px;">CHQ123</td>
                                <td style="padding: 8px;">贷款结算</td>
                                <td style="padding: 8px;">管理员</td>
                                <td style="padding: 8px;">丰园集团</td>                                <td style="padding: 8px; text-align: center;">
                                    <i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>`;
        } else if (activeTab === '客户账单') {
            // For '客户账单', integrate list view and creation view
            mainContent = `
                <div class="statement-main" style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                    <!-- List View Wrapper -->
                    <div id="statement-list-view" style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                        <!-- Status Tabs Header -->
                        <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px;">
                            <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                                <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">全部</div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">待收款 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">21</span></div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">待付款 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">8</span></div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">已收款 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">6</span></div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">已付款 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">待业务员确认 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">21</span></div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">已提交预销 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">4</span></div>
                                <div class="status-separator" style="padding: 12px 0; color: #cbd5e1;">|</div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">待确认销账 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">8</span></div>
                                <div class="status-tab" style="padding: 12px 0; cursor: pointer;">账单提醒</div>
                            </div>
                        </div>

                        <!-- Filter Area -->
                        <div class="bill-filter-area" style="padding: 16px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px;">
                            <div class="persistent-filter-row">
                                <!-- Date Group -->
                                <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                                    <div class="select-box-filter" style="width: 110px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; white-space: nowrap; cursor: pointer;">
                                        <span>账单日期</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                    <input type="text" placeholder="开始日期" style="width: 100px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                                        <span style="display: flex; align-items: center; color: #cbd5e1;">-</span>
                                        <input type="text" placeholder="结束日期" style="width: 100px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                                </div>

                                <!-- Keyword Input -->
                                <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    <div style="width: 60px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; background: #f8fafc; font-size: 0.8rem;">
                                        <span>关键字</span>
                                    </div>
                                    <input type="text" placeholder="订单号" style="width: 200px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                                </div>

                                <!-- Overdue -->
                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">超期</label>
                                    <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <!-- Salesman -->
                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">业务员</label>
                                    <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <!-- Operator -->
                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">操作员</label>
                                    <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <!-- Department -->
                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">销售部门</label>
                                    <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <!-- Customer Confirmation -->
                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">客户确认</label>
                                    <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #475569;">
                                    <input type="checkbox" id="bill-only-me" />
                                        <label for="bill-only-me">仅显示我创建的</label>
                                </div>

                                <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                                </button>
                                 <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #10b981; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; margin-left: 8px;" onclick="showPreWriteOffModal()">
                                     <i data-lucide="check-square" style="width: 14px; height: 14px;"></i> 提交预销
                                 </button>
                                <button id="customer-bill-create-btn" class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: 1px solid #4f46e5; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; margin-left: 8px; transition: all 0.2s;" onclick="showCreateStatement()">
                                    <i data-lucide="plus" style="width: 14px; height: 14px;"></i> 创建账单
                                </button>
                            </div>

                        </div>

                        <!-- Empty Table / Content Area -->
                        <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0;">
                            <table class="statement-table">
                                <thead>
                                    <tr>
                                        <th style="width: 40px; text-align: center;"><input type="checkbox" onchange="toggleAllCustomerBillCheckboxes(this)" /></th>
                                        <th style="width: 40px; text-align: center;">#</th>
                                        <th>收付方向</th>
                                        <th>账单状态</th>
                                        <th>账单号</th>
                                        <th>结算公司</th>
                                        <th>原币金额</th>
                                        <th>折合币制</th>
                                        <th>折合金额</th>
                                        <th>账单日期</th>
                                        <th>发送日期</th>
                                        <th>工作单号</th>
                                        <th>业务员</th>
                                        <th>操作员</th>
                                        <th>结算日规则</th>
                                        <th>结算日<i data-lucide="help-circle" style="width: 12px; height: 12px; display: inline; vertical-align: middle; color: #94a3b8;"></i></th>
                                        <th>收款/付款完成日</th>
                                        <th>超期天数</th>
                                        <th>业务员确认</th>
                                        <th>业务员确认时间</th>
                                        <th>客户确认时间</th>
                                        <th>账单参考号</th>
                                        <th>发票号码</th>
                                        <th>核销单号</th>
                                        <th>客户确认</th>
                                        <th>备注</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 8px; text-align: center;"><input type="checkbox" class="customer-bill-row-checkbox" /></td>
                                        <td style="padding: 8px; text-align: center;">1</td>
                                        <td style="padding: 8px;">收</td>
                                        <td style="padding: 8px;"><span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 99px; font-size: 0.75rem;">已确认</span></td>
                                        <td style="padding: 8px;">BILL20231201</td>
                                        <td style="padding: 8px;">深圳市远航达国际货运代理有限公司</td>
                                        <td style="padding: 8px;">USD 500.00</td>
                                        <td style="padding: 8px;">CNY</td>
                                        <td style="padding: 8px;">3,560.00</td>
                                        <td style="padding: 8px;">2023-12-10</td>
                                        <td style="padding: 8px;">2023-12-11</td>
                                        <td style="padding: 8px;">OTH202312009</td>
                                        <td style="padding: 8px;">张三</td>
                                        <td style="padding: 8px;">管理员</td>
                                        <td style="padding: 8px;">月结</td>
                                        <td style="padding: 8px;">2023-12-31</td>
                                        <td style="padding: 8px;">2023-12-30</td>
                                        <td style="padding: 8px;">0</td>
                                        <td style="padding: 8px;">已确认</td>
                                        <td style="padding: 8px;">2023-12-12</td>
                                        <td style="padding: 8px;">2023-12-13</td>
                                        <td style="padding: 8px;">REF123456</td>
                                        <td style="padding: 8px;">INV-001</td>
                                        <td style="padding: 8px;">HX202312001</td>
                                        <td style="padding: 8px;">已确认</td>
                                        <td style="padding: 8px;">-</td>
                                    </tr>
                                    <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 8px; text-align: center;"><input type="checkbox" /></td>
                                        <td style="padding: 8px; text-align: center;">2</td>
                                        <td style="padding: 8px;">付</td>
                                        <td style="padding: 8px;"><span style="background: #fffbeb; color: #d97706; padding: 2px 8px; border-radius: 99px; font-size: 0.75rem;">待付款</span></td>
                                        <td style="padding: 8px;">BILL20231202</td>
                                        <td style="padding: 8px;">丰源物流有限公司</td>
                                        <td style="padding: 8px;">CNY 1,200.00</td>
                                        <td style="padding: 8px;">CNY</td>
                                        <td style="padding: 8px;">1,200.00</td>
                                        <td style="padding: 8px;">2023-12-15</td>
                                        <td style="padding: 8px;">2023-12-16</td>
                                        <td style="padding: 8px;">OTH202312010</td>
                                        <td style="padding: 8px;">李四</td>
                                        <td style="padding: 8px;">管理员</td>
                                        <td style="padding: 8px;">周结</td>
                                        <td style="padding: 8px;">2023-12-22</td>
                                        <td style="padding: 8px;">-</td>
                                        <td style="padding: 8px;">5</td>
                                        <td style="padding: 8px;">待确认</td>
                                        <td style="padding: 8px;">-</td>
                                        <td style="padding: 8px;">-</td>
                                        <td style="padding: 8px;">REF789012</td>
                                        <td style="padding: 8px;">INV-002</td>
                                        <td style="padding: 8px;">-</td>
                                        <td style="padding: 8px;">待确认</td>
                                        <td style="padding: 8px;">紧急支付</td>
                                    </tr>
                                    <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 8px; text-align: center;"><input type="checkbox" /></td>
                                        <td style="padding: 8px; text-align: center;">3</td>
                                        <td style="padding: 8px;">收</td>
                                        <td style="padding: 8px;"><span style="background: #fef2f2; color: #dc2626; padding: 2px 8px; border-radius: 99px; font-size: 0.75rem;">已逾期</span></td>
                                        <td style="padding: 8px;">BILL20231128</td>
                                        <td style="padding: 8px;">环球贸易有限公司</td>
                                        <td style="padding: 8px;">USD 1,000.00</td>
                                        <td style="padding: 8px;">CNY</td>
                                        <td style="padding: 8px;">7,120.00</td>
                                        <td style="padding: 8px;">2023-11-28</td>
                                        <td style="padding: 8px;">2023-11-29</td>
                                        <td style="padding: 8px;">OTH202311025</td>
                                        <td style="padding: 8px;">王五</td>
                                        <td style="padding: 8px;">管理员</td>
                                        <td style="padding: 8px;">月结</td>
                                        <td style="padding: 8px;">2023-12-25</td>
                                        <td style="padding: 8px;">-</td>
                                        <td style="padding: 8px;">15</td>
                                        <td style="padding: 8px;">已确认</td>
                                        <td style="padding: 8px;">2023-11-30</td>
                                        <td style="padding: 8px;">-</td>
                                        <td style="padding: 8px;">REF654321</td>
                                        <td style="padding: 8px;">INV-003</td>
                                        <td style="padding: 8px;">-</td>
                                        <td style="padding: 8px;">待确认</td>
                                        <td style="padding: 8px;">催款中</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> <!-- End of statement-list-view -->

                    <!-- Create Statement View (Hidden) -->
                    <div id="statement-create-view" style="display: none; flex-direction: column; width: 100%; height: 100%; background: #f8fafc;">
                        <!-- Header -->
                        <div style="height: 50px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; flex-shrink: 0;">
                            <div style="font-size: 14px; color: #64748b;">对账单号: <span style="color: #94a3b8;">自动生成</span></div>
                            <div style="display: flex; gap: 8px;">
                                <button class="primary-btn" style="height: 30px; padding: 0 16px;">保存</button>
                                <button class="secondary-btn" style="height: 30px; padding: 0 16px; background: white; border: 1px solid #e2e8f0; color: #64748b;" onclick="hideCreateStatement()">返回</button>
                            </div>
                        </div>

                        <!-- Content Area -->
                        <div style="flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
                            <!-- Form Section -->
                            <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                                <div style="display: flex; gap: 24px;">
                                    <!-- Left Column -->
                                    <div style="flex: 1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px 24px;">
                                        <!-- Row 1 -->
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">结算单位</label>
                                            <div style="flex: 1; display: flex; gap: 8px;">
                                                <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                                <div style="display: flex; align-items: center; background: #f1f5f9; border-radius: 4px; padding: 0 8px; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0;">NL</div>
                                                <div style="display: flex; align-items: center; background: #f1f5f9; border-radius: 4px; padding: 0 8px; font-size: 12px; color: #64748b; border: 1px solid #e2e8f0;">月结</div>
                                            </div>
                                        </div>
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">工作单日期</label>
                                             <div style="flex: 1; display: flex; align-items: center; gap: 4px;">
                                                <input type="date" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                                <span style="color: #94a3b8;">-</span>
                                                 <input type="date" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                            </div>
                                        </div>

                                        <!-- Row 2 -->
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">对账方式</label>
                                            <div class="relative-container" style="flex: 1;">
                                                <div class="select-box" style="width: 100%; height: 32px; display: flex; align-items: center; justify-content: space-between;" onclick="toggleDropdown(this)">
                                                    <span id="create-statement-recon-type-bill">按费用对账</span>
                                                    <i data-lucide="chevron-down"></i>
                                                </div>
                                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: 100%; left: 0;">
                                                    <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type-bill', '按费用对账')">按费用对账</div>
                                                    <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type-bill', '按账单对账')">按账单对账</div>
                                                    <div class="dropdown-item-custom" onclick="selectOption('create-statement-recon-type-bill', '按工作单对账')">按工作单对账</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">折合金额</label>
                                             <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                                <div class="select-box" style="width: 70px; height: 32px;"><span>CNY</span><i data-lucide="chevron-down"></i></div>
                                                <input type="text" value="未收: 0.00" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; background: #f8fafc; color: #94a3b8; font-size: 13px;" disabled />
                                            </div>
                                        </div>

                                        <!-- Row 3 -->
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">预收次余额</label>
                                            <div style="flex: 1;"></div>
                                        </div>
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">预付次余额</label>
                                            <div style="flex: 1;"></div>
                                        </div>

                                        <!-- Row 4 -->
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 70px; text-align: right; color: #64748b; font-size: 13px;">公司抬头</label>
                                            <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                        </div>
                                         <div style="display: flex; align-items: center; gap: 8px;">
                                            <label style="width: 80px; text-align: right; color: #64748b; font-size: 13px;">说明</label>
                                            <input type="text" placeholder="请输入" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                        </div>
                                    </div>

                                    <!-- Middle Column -->
                                    <div style="width: 320px; border-left: 1px solid #f1f5f9; padding-left: 20px;">
                                        <div style="margin-bottom: 12px; display: flex; gap: 16px;">
                                            <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #64748b; cursor: pointer;">
                                                <input type="radio" name="recon-type-bill" /> 按参考凭证号对账
                                            </label>
                                            <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #64748b; cursor: pointer;">
                                                <input type="radio" name="recon-type-bill" checked /> 按账单号对账
                                            </label>
                                        </div>
                                         <div style="border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; margin-bottom: 12px; height: 80px; background: #f8fafc; display: flex; align-items: center; justify-content: center;">
                                            <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; color: #cbd5e1;">
                                                <i data-lucide="search" style="width: 20px; height: 20px;"></i>
                                                <span style="font-size: 12px;">No data</span>
                                            </div>
                                         </div>
                                    </div>

                                    <!-- Right Column -->
                                    <div style="width: 280px; padding-left: 20px;">
                                         <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                            <label style="width: 60px; text-align: right; color: #64748b; font-size: 13px;">银行账户</label>
                                            <div class="select-box" style="flex: 1; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                         </div>
                                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 12px; height: 80px; color: #64748b; font-size: 12px; position: relative;">
                                            0 个账户
                                            <a href="#" style="position: absolute; bottom: 12px; right: 12px; color: #4f46e5; text-decoration: none;">选择账户></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Filter & Table Section -->
                            <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); flex: 1; display: flex; flex-direction: column;">
                                 <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
                                     <div style="display: flex; gap: 12px; font-size: 13px; color: #475569; margin-right: 8px;">
                                        <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type-bill" checked /> 应收</label>
                                        <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type-bill" /> 应付</label>
                                        <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="fee-type-bill" /> 收付</label>
                                     </div>
                                     <input type="text" placeholder="请输入订单号" style="width: 240px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 13px;" />
                                     <span style="font-size: 13px; color: #64748b;">费用名称</span>
                                     <div class="select-box" style="width: 100px; height: 32px;"><span>请选择</span><i data-lucide="chevron-down"></i></div>
                                     <button class="primary-btn" style="height: 32px; padding: 0 12px;">
                                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                                     </button>
                                     <button class="secondary-btn" style="height: 32px; padding: 0 12px; display: flex; align-items: center; gap: 4px; background: white; border: 1px solid #e2e8f0; color: #64748b;">
                                        更多(1) <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                                     </button>
                                      <div style="display: flex; align-items: center; gap: 12px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; height: 32px; background: white; margin-left: auto;">
                                         <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #475569; cursor: pointer;">
                                            <input type="radio" name="display-mode-bill" /> 仅显示已勾选
                                         </label>
                                         <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #475569; cursor: pointer;">
                                            <input type="radio" name="display-mode-bill" checked /> 全部
                                         </label>
                                      </div>
                                 </div>

                                 <div class="statement-table-container" style="flex: 1; padding: 0; background: transparent;">
                                    <table class="statement-table">
                                        <thead>
                                            <tr>
                                                 <th style="width: 40px; text-align: center;"><input type="checkbox" /></th>
                                                 <th style="width: 40px; text-align: center;">#</th>
                                                 <th>AR/AP</th>
                                                 <th>对账状态</th>
                                                 <th>工作单号</th>
                                                 <th>账单号</th>
                                                 <th>计费日期</th>
                                                 <th>工作单日期</th>
                                                 <th>账单日期</th>
                                                 <th>审核状态</th>
                                                 <th>费用项</th>
                                                 <th>币别</th>
                                                 <th>数量</th>
                                                 <th>单价</th>
                                                 <th>原币金额</th>
                                                 <th>对账金额</th>
                                                 <th>折合金额</th>
                                                 <th>账单日期截止日期</th>
                                                 <th>账单金额</th>
                                                 <th>未核销</th>
                                                 <th>所属公司</th>
                                                 <th>出单单位</th>
                                                 <th>委托人/换单人</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox" /></td>
                                            <td style="text-align: center;">1</td>
                                            <td>AR</td>
                                            <td>未对账</td>
                                            <td>OTH202312009</td>
                                            <td>BILL20231201</td>
                                            <td>2023-12-01</td>
                                            <td>2023-12-05</td>
                                            <td>2023-12-10</td>
                                            <td>已审核</td>
                                            <td>运费</td>
                                            <td>USD</td>
                                            <td>1</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>3500.00</td>
                                            <td>2023-12-31</td>
                                            <td>3500.00</td>
                                            <td>3500.00</td>
                                            <td>丰源物流</td>
                                            <td>深圳分公司</td>
                                            <td>张三</td>
                                            <td>张三</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox" /></td>
                                            <td style="text-align: center;">2</td>
                                            <td>AP</td>
                                            <td>部分对账</td>
                                            <td>OTH202312010</td>
                                            <td>BILL20231202</td>
                                            <td>2023-12-02</td>
                                            <td>2023-12-06</td>
                                            <td>2023-12-11</td>
                                            <td>审核中</td>
                                            <td>派车费</td>
                                            <td>CNY</td>
                                            <td>1</td>
                                            <td>1200.00</td>
                                            <td>1200.00</td>
                                            <td>1200.00</td>
                                            <td>1200.00</td>
                                            <td>2023-12-31</td>
                                            <td>1200.00</td>
                                            <td>600.00</td>
                                            <td>丰源物流</td>
                                            <td>广州分公司</td>
                                            <td>李四</td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox" /></td>
                                            <td style="text-align: center;">3</td>
                                            <td>AR</td>
                                            <td>已对账</td>
                                            <td>OTH202312011</td>
                                            <td>BILL20231203</td>
                                            <td>2023-12-03</td>
                                            <td>2023-12-07</td>
                                            <td>2023-12-12</td>
                                            <td>未审核</td>
                                            <td>文件费</td>
                                            <td>CNY</td>
                                            <td>1</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>500.00</td>
                                            <td>2023-12-31</td>
                                            <td>500.00</td>
                                            <td>0.00</td>
                                            <td>丰源物流</td>
                                            <td>上海分公司</td>
                                            <td>王五</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else if (activeTab === '开票申请') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; position: relative;">
                    <!-- List View -->
                    <div id="invoice-application-list-view" style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                <!-- Top Tabs Header & Add Button -->
                <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: center;">
                    <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">全部</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">草稿 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">审核中 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">已批准</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">已开票 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">已驳回/已取消</div>
                    </div>
                    <button class="primary-btn" onclick="document.getElementById('invoice-application-list-view').style.display='none';document.getElementById('invoice-application-create-view').style.display='flex';document.querySelector('.customer-sidebar').style.display='none';" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                        <i data-lucide="plus-circle" style="width: 16px; height: 16px;"></i> 新增
                    </button>
                </div>

                <!-- Filter Area -->
                <div class="bill-filter-area" style="padding: 16px 24px; background: white; border-bottom: 1px solid #e2e8f0;">
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <!-- Application Date -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">申请日期</label>
                            <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                                     <input type="text" placeholder="开始日期" style="width: 100px; height: 32px; border: none; border-right: 1px solid #e2e8f0; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                                     <input type="text" placeholder="结束日期" style="width: 100px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                                    <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-left: 1px solid #e2e8f0;">
                                        <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                    </div>
                            </div>
                        </div>

                        <!-- Keyword -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">关键字</label>
                             <input type="text" placeholder="请输入结算单位/申请单号" style="width: 200px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                        </div>

                        <!-- Applicant -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">申请人</label>
                             <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="color: #cbd5e1; font-size: 0.8rem;">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                         </div>

                          <!-- Bill Status -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">单据状态</label>
                             <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="color: #cbd5e1; font-size: 0.8rem;">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                         </div>

                         <!-- Only Me -->
                         <div style="display: flex; align-items: center; gap: 4px;">
                             <input type="checkbox" id="only-me-inv" style="width: 14px; height: 14px;" />
                            <label for="only-me-inv" style="font-size: 0.8rem; color: #475569;">仅显示我创建的</label>
                         </div>

                         <!-- Work Order No -->
                         <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; align-items: center;">
                               <div class="select-box-filter" style="width: 90px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; cursor: pointer;">
                                    <span style="font-size: 0.8rem;">工作单号</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                               </div>
                                <input type="text" placeholder="请输入" style="width: 120px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                         </div>
                         
                         <!-- Customer Contact -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">客户联系人</label>
                              <input type="text" placeholder="请输入" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 0.8rem; outline: none;" />
                         </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 24px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; font-size: 0.85rem;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>

                         <button class="action-btn" style="height: 32px; padding: 0 16px; background: white; color: #475569; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">
                            查看我已处理的
                         </button>
                    </div>
                </div>

                <!-- Table Container -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0;">
                    <table class="statement-table">
                        <thead>
                            <tr>
                                 <th style="width: 40px; text-align: center;"><input type="checkbox" /></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>状态</th>
                                <th>发票号</th>
                                <th>发票类型</th>
                                <th>结算单位</th>
                                <th>开票日期</th>
                                <th>币制</th>
                                <th>金额</th>
                                <th>税额</th>
                                <th>价税合计</th>
                                <th>本币金额</th>
                                <th>工作单号</th>
                                <th>账单号</th>
                                <th>录入人</th>
                                <th>录入时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                 <td style="padding: 10px; text-align: center;"><input type="checkbox" /></td>
                                <td style="padding: 10px; text-align: center;">1</td>
                                <td style="padding: 10px;"><span style="background: #fef3c7; color: #d97706; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">待审核</span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">普票</td>
                                <td style="padding: 10px;">深圳市好运来货运代理有限公司</td>
                                <td style="padding: 10px;">2023-12-05</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">2,000.00</td>
                                <td style="padding: 10px; text-align: right;">120.00</td>
                                <td style="padding: 10px; text-align: right;">2,120.00</td>
                                <td style="padding: 10px; text-align: right;">2,120.00</td>
                                <td style="padding: 10px;">YO2512-0023</td>
                                <td style="padding: 10px;">B2023120501</td>
                                <td style="padding: 10px;">赵六</td>                                <td style="padding: 10px;">2023-12-05 11:00</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">2</td>
                                <td style="padding: 10px;"><span style="background: #dbeafe; color: #4f46e5; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">已开票</span></td>
                                <td style="padding: 10px;">INV20231206001</td>
                                <td style="padding: 10px;">专票(6%)</td>
                                <td style="padding: 10px;">北京京华物流有限公司</td>                                <td style="padding: 10px;">2023-12-06</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">8,000.00</td>
                                <td style="padding: 10px; text-align: right;">480.00</td>
                                <td style="padding: 10px; text-align: right;">8,480.00</td>
                                <td style="padding: 10px; text-align: right;">8,480.00</td>
                                <td style="padding: 10px;">YO2512-0024</td>
                                <td style="padding: 10px;">B2023120601</td>
                                <td style="padding: 10px;">孙七</td>                                <td style="padding: 10px;">2023-12-06 15:20</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">3</td>
                                <td style="padding: 10px;"><span style="background: #e2e8f0; color: #475569; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">草稿</span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">专票(13%)</td>
                                <td style="padding: 10px;">天津港保税区物流</td>                                <td style="padding: 10px;">2023-12-07</td>
                                <td style="padding: 10px;">USD</td>
                                <td style="padding: 10px; text-align: right;">1,500.00</td>
                                <td style="padding: 10px; text-align: right;">0.00</td>
                                <td style="padding: 10px; text-align: right;">1,500.00</td>
                                <td style="padding: 10px; text-align: right;">10,800.00</td>
                                <td style="padding: 10px;">YO2512-0025</td>
                                <td style="padding: 10px;">B2023120701</td>
                                <td style="padding: 10px;">周八</td>                                <td style="padding: 10px;">2023-12-07 09:45</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Creation View (New) -->
            <div id="invoice-application-create-view" style="display: none; flex-direction: column; width: 100%; height: 100%; background: #f8fafc; overflow: auto;">
                         <!-- Top Action Bar -->
                        <div style="width: 100%; padding: 12px 24px; border-bottom: 1px solid #e2e8f0; background: white; display: flex; justify-content: space-between; align-items: center;">
                             <div style="font-size: 0.85rem; color: #334155; font-weight: 600;">申请单号: 自动生成</div>
                             <div style="display: flex; gap: 8px;">
                                 <button class="primary-btn" style="height: 30px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px;">提交审核</button>
                                 <button style="height: 30px; padding: 0 16px; background: white; border: 1px solid #e2e8f0; color: #475569; border-radius: 4px;">暂存草稿</button>
                                 <button onclick="document.getElementById('invoice-application-list-view').style.display='flex';document.getElementById('invoice-application-create-view').style.display='none';document.querySelector('.customer-sidebar').style.display='flex';" style="height: 30px; padding: 0 16px; background: white; border: 1px solid #e2e8f0; color: #475569; border-radius: 4px;">返回</button>
                            </div>
                        </div>

                         <!-- Form Section -->
                        <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                            <!-- Row 1 -->
                            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 16px; align-items: center;">
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label class="required" style="white-space: nowrap;">客户</label>
                                    <div class="select-box" style="width: 100%;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <div style="display: flex; gap: 8px; width: 100%;">
                                        <div class="select-box" style="flex: 1;"><span style="font-size: 0.75rem;">NL</span></div>
                                        <div class="select-box" style="flex: 1;"><span style="font-size: 0.75rem;">月结</span></div>
                                    </div>
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label class="required" style="white-space: nowrap;">发票类型</label>
                                     <div class="select-box" style="width: 100%;">
                                        <span>普通发票</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">发票介质</label>
                                    <div style="display: flex; gap: 12px; align-items: center; height: 32px;">
                                        <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; margin: 0;"><input type="radio" name="inv-medium"> 纸质发票</label>
                                        <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; margin: 0;"><input type="radio" name="inv-medium" checked> 电子发票</label>
                                    </div>
                                </div>
                                 <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">发票形式</label>
                                    <div style="display: flex; gap: 12px; align-items: center; height: 32px;">
                                        <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; margin: 0;"><input type="radio" name="inv-form" checked> 税务发票</label>
                                        <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; margin: 0;"><input type="radio" name="inv-form"> INVOICE</label>
                                    </div>
                                </div>
                            </div>
                             <!-- Row 2 -->
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 2fr; gap: 16px;">
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">联系人</label>
                                    <input type="text" placeholder="请输入" class="form-input" style="width: 100%;">
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">电话</label>
                                    <input type="text" placeholder="请输入" class="form-input" style="width: 100%;">
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">邮箱</label>
                                    <input type="text" placeholder="请输入" class="form-input" style="width: 100%;">
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">邮寄地址</label>
                                    <input type="text" placeholder="请输入" class="form-input" style="width: 100%;">
                                </div>
                            </div>
                             <!-- Purchaser Details (Gray box) -->
                            <div style="background: #f1f5f9; padding: 16px; border-radius: 4px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                                 <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label class="required" style="white-space: nowrap;">抬头</label>
                                    <div class="select-box" style="width: 100%;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                                 <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label class="required" style="white-space: nowrap;">纳税人识别号</label>
                                    <input type="text" placeholder="请输入" class="form-input" style="background: white; width: 100%;">
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">地址</label>
                                    <input type="text" placeholder="请输入" class="form-input" style="background: white; width: 100%;">
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                     <label style="white-space: nowrap;">电话</label>
                                    <input type="text" placeholder="请输入" class="form-input" style="background: white; width: 100%;">
                                </div>
                                <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="white-space: nowrap;">开户行及账号</label>
                                     <div class="select-box" style="width: 100%;">
                                        <span>请选择</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                            </div>

                             <!-- Middle Controls -->
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <button class="primary-btn" style="height: 28px; padding: 0 12px; font-size: 0.8rem;">选择开票费用</button>
                                    <span style="font-size: 0.8rem; color: #64748b;">已选工作单 0项，费用 0项</span>
                                </div>
                                 <div style="display: flex; gap: 12px; align-items: center;">
                                     <div class="input-label-group">
                                        <label>申请金额折合</label>
                                        <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; height: 28px;">
                                             <div style="width: 50px; background: #f8fafc; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 0.75rem;">CNY</div>
                                              <input type="text" value="0.00" style="width: 80px; border: none; padding: 0 8px; font-size: 0.8rem; text-align: right; outline: none;">
                                        </div>
                                    </div>
                                     <div class="input-label-group">
                                        <label>汇率</label>
                                         <input type="text" class="form-input" style="width: 60px; height: 28px;">
                                    </div>
                                </div>
                            </div>

                             <!-- Expense Table -->
                            <div style="border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; background: white;">
                                <table class="statement-table">
                                    <thead>
                                        <tr>
                                            <th style="width: 40px; text-align: center;">#</th>
                                            <th style="text-align: left;">费用名称</th>
                                            <th style="text-align: left;">费用开票名称</th>
                                            <th style="text-align: center;">单位</th>
                                            <th style="text-align: right;">数量</th>
                                            <th style="text-align: right;">不含税单价</th>
                                            <th style="text-align: right;">不含税金额</th>
                                            <th style="text-align: center;">税率</th>
                                            <th style="text-align: right;">单价税额</th>
                                            <th style="text-align: right;">含税单价</th>
                                            <th style="text-align: right;">含税金额</th>
                                            <th style="text-align: center;">币种</th>
                                            <th style="text-align: left;">说明</th>
                                            <th style="text-align: left;">备注</th>
                                            <th style="text-align: center;">操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center;">1</td>
                                            <td>运输费</td>
                                            <td>*运输服务*货运服务费</td>
                                            <td style="text-align: center;">次</td>
                                            <td style="text-align: right;">1.00</td>
                                            <td style="text-align: right;">1,000.00</td>
                                            <td style="text-align: right;">1,000.00</td>
                                            <td style="text-align: center;">9%</td>
                                            <td style="text-align: right;">90.00</td>
                                            <td style="text-align: right;">1,090.00</td>
                                            <td style="text-align: right;">1,090.00</td>
                                            <td style="text-align: center;">CNY</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td style="text-align: center;"><i data-lucide="trash-2" style="width: 14px; height: 14px; color: #ef4444; cursor: pointer;"></i></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;">2</td>
                                            <td>装卸费</td>
                                            <td>*物流辅助服务*装卸搬运</td>
                                            <td style="text-align: center;">吨</td>
                                            <td style="text-align: right;">10.00</td>
                                            <td style="text-align: right;">50.00</td>
                                            <td style="text-align: right;">500.00</td>
                                            <td style="text-align: center;">6%</td>
                                            <td style="text-align: right;">30.00</td>
                                            <td style="text-align: right;">530.00</td>
                                            <td style="text-align: right;">530.00</td>
                                            <td style="text-align: center;">CNY</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td style="text-align: center;"><i data-lucide="trash-2" style="width: 14px; height: 14px; color: #ef4444; cursor: pointer;"></i></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;">3</td>
                                            <td>保险费</td>
                                            <td>*金融服务*保险服务</td>
                                            <td style="text-align: center;">项</td>
                                            <td style="text-align: right;">1.00</td>
                                            <td style="text-align: right;">200.00</td>
                                            <td style="text-align: right;">200.00</td>
                                            <td style="text-align: center;">6%</td>
                                            <td style="text-align: right;">12.00</td>
                                            <td style="text-align: right;">212.00</td>
                                            <td style="text-align: right;">212.00</td>
                                            <td style="text-align: center;">CNY</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td style="text-align: center;"><i data-lucide="trash-2" style="width: 14px; height: 14px; color: #ef4444; cursor: pointer;"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <!-- Bottom Summaries -->
                            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; border-top: 1px solid #e2e8f0; padding-top: 12px;">
                                 <div style="font-weight: bold;">原币合计: 1,832.00</div>
                                 <div style="font-weight: bold;">不含税金额合计: 1,700.00</div>
                                 <div style="font-weight: bold;">纳税金额合计: 1,832.00</div>
                                 <div style="font-weight: bold;">税额合计: 132.00</div>
                            </div>

                             <!-- Footer Info -->
                             <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 12px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                     <label style="font-size: 0.8rem; color: #64748b;">备注</label>
                                     <textarea placeholder="请输入" style="width: 100%; height: 60px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 8px; font-size: 0.8rem; resize: none;"></textarea>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 8px;">
                                     <div style="display: flex; gap: 24px;">
                                        <div style="display: flex; gap: 8px; font-size: 0.8rem; color: #64748b;">
                                            <span>创建日期</span>
                                            <span style="color: #334155;">2025-12-31</span>
                                        </div>
                                         <div style="display: flex; gap: 8px; font-size: 0.8rem; color: #64748b;">
                                            <span>创建人</span>
                                            <span style="color: #334155;">limquan</span>
                                        </div>
                                    </div>
                                    <a href="#" style="font-size: 0.8rem; color: #4f46e5; display: flex; align-items: center; gap: 4px;">
                                        <i data-lucide="paperclip" style="width: 14px; height: 14px;"></i> 附件
                                    </a>
                                </div>
                             </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>`;
        } else if (activeTab === '发票管理') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Internal Tabs Row -->
                <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: center;">
                    <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                        <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">待开票</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">未出票</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">出票中</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">出票失败</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">已出票<span style="background: #4f46e5; color: white; border-radius: 10px; padding: 0 6px; font-size: 0.7rem;">5</span></div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">已红冲<span style="background: #94a3b8; color: white; border-radius: 10px; padding: 0 6px; font-size: 0.7rem;">?</span></div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">红字发票</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">作废中</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">已作废</div>
                    </div>
                    <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #4f46e5; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                        收藏发票 <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>

                <!-- Filter Area -->
                <div class="invoice-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; background: white;">
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
                        <!-- Date range with selector -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.75rem; cursor: pointer;">
                                <span>工作日期</span>
                                <i data-lucide="chevron-down" style="width: 12px; height: 12px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="开始日期" style="width: 80px; height: 32px; border: none; font-size: 0.75rem; outline: none;">
                                <i data-lucide="calendar" style="width: 12px; height: 12px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="结束日期" style="width: 80px; height: 32px; border: none; font-size: 0.75rem; outline: none;">
                                <i data-lucide="calendar" style="width: 12px; height: 12px; color: #cbd5e1;"></i>
                            </div>
                        </div>

                        <!-- Keyword -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">关键字</label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; width: 220px; height: 32px;">
                                <input type="text" placeholder="请输入结算单位/工作单号" style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                            </div>
                        </div>

                        <!-- Applicant -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">申请人</label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; width: 120px; height: 32px; background: white; cursor: pointer;">
                                <span style="color: #cbd5e1; font-size: 0.75rem; flex: 1;">请选择</span>
                                <i data-lucide="chevron-down" style="width: 12px; height: 12px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Checkbox -->
                        <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #475569; cursor: pointer;">
                            <input type="checkbox"> 仅显示系统自动过的
                        </label>

                        <!-- Work No search -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; height: 32px;">
                            <div style="padding: 0 8px; border-right: 1px solid #e2e8f0; font-size: 0.75rem; background: #f8fafc; height: 100%; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                工作单号 <i data-lucide="chevron-down" style="width: 12px; height: 12px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="请输入" style="border: none; outline: none; padding: 0 8px; font-size: 0.75rem; width: 120px;">
                        </div>

                        <!-- Contact -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500; white-space: nowrap;">客户联系人</label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; width: 120px; height: 32px;">
                                <input type="text" placeholder="请输入" style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                            </div>
                        </div>
                    </div>

                    <!-- Row 2 Buttons -->
                    <div style="display: flex; gap: 8px;">
                        <button class="primary-btn" style="height: 28px; padding: 0 12px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.75rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>
                        <button class="primary-btn" style="height: 28px; padding: 0 12px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.75rem; cursor: pointer;">
                            录入发票
                        </button>
                        <button class="ghost-btn" style="height: 28px; padding: 0 10px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.75rem; background: white; cursor: pointer;">查看我待处理的</button>
                        <button class="ghost-btn" style="height: 28px; padding: 0 10px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.75rem; background: white; cursor: pointer;">查看我已处理的</button>
                    </div>
                </div>

                <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>状态</th>
                                <th>发票号</th>
                                <th>发票类型</th>
                                <th>结算单位</th>
                                <th>开票日期</th>
                                <th>币制</th>
                                <th>金额</th>
                                <th>税额</th>
                                <th>价税合计</th>
                                <th>本币金额</th>
                                <th>工作单号</th>
                                <th>账单号</th>
                                <th>录入人</th>
                                <th>录入时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">1</td>
                                <td style="padding: 10px;"><span style="background: #e2e8f0; color: #475569; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">待开票</span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">普票</td>
                                <td style="padding: 10px;">深圳市好运来货运代理有限公司</td>
                                <td style="padding: 10px;">2023-12-01</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">1,000.00</td>
                                <td style="padding: 10px; text-align: right;">60.00</td>
                                <td style="padding: 10px; text-align: right;">1,060.00</td>
                                <td style="padding: 10px; text-align: right;">1,060.00</td>
                                <td style="padding: 10px;">YO2512-0020</td>
                                <td style="padding: 10px;">B2023120101</td>
                                <td style="padding: 10px;">张三</td>
                                <td style="padding: 10px;">2023-12-01 10:00</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">2</td>
                                <td style="padding: 10px;"><span style="background: #dbeafe; color: #4f46e5; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">已开票</span></td>
                                <td style="padding: 10px;">INV20231201001</td>
                                <td style="padding: 10px;">专票(6%)</td>
                                <td style="padding: 10px;">广州市顺风物流有限公司</td>
                                <td style="padding: 10px;">2023-12-02</td>
                                <td style="padding: 10px;">USD</td>
                                <td style="padding: 10px; text-align: right;">500.00</td>
                                <td style="padding: 10px; text-align: right;">0.00</td>
                                <td style="padding: 10px; text-align: right;">500.00</td>
                                <td style="padding: 10px; text-align: right;">3,600.00</td>
                                <td style="padding: 10px;">YO2512-0021</td>
                                <td style="padding: 10px;">B2023120201</td>
                                <td style="padding: 10px;">李四</td>
                                <td style="padding: 10px;">2023-12-02 14:30</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">3</td>
                                <td style="padding: 10px;"><span style="background: #fef3c7; color: #d97706; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">审核中</span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">专票(13%)</td>
                                <td style="padding: 10px;">上海市东方国际物流集团</td>
                                <td style="padding: 10px;">2023-12-03</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">5,000.00</td>
                                <td style="padding: 10px; text-align: right;">650.00</td>
                                <td style="padding: 10px; text-align: right;">5,650.00</td>
                                <td style="padding: 10px; text-align: right;">5,650.00</td>
                                <td style="padding: 10px;">YO2512-0022</td>
                                <td style="padding: 10px;">B2023120301</td>
                                <td style="padding: 10px;">王五</td>
                                <td style="padding: 10px;">2023-12-03 09:15</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
        } else if (activeTab === '开票费用配置') {
            let rowsHtml = '';
            if (window.invoiceExpenseConfigs && window.invoiceExpenseConfigs.length > 0) {
                rowsHtml = window.invoiceExpenseConfigs.map((config, index) => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                        <td style="text-align: center; padding: 10px;">${index + 1}</td>
                        <td style="padding: 10px;">${config.name}</td>
                        <td style="padding: 10px;">${config.taxName} (${config.code})</td>
                        <td style="padding: 10px; text-align: right;">${config.rate}%</td>
                        <td style="padding: 10px; text-align: center;">${config.isTaxFree}</td>
                        <td style="padding: 10px; text-align: center;">
                            <i data-lucide="trash-2" onclick="deleteInvoiceExpenseConfig(${index})" style="width: 16px; height: 16px; color: #ef4444; cursor: pointer;"></i>
                        </td>
                    </tr>
                `).join('');
            } else {
                rowsHtml = `
                    <tr>
                        <td colspan="6" style="height: 300px; text-align: center; color: #94a3b8; vertical-align: middle;">
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                                 <div style="width: 64px; height: 64px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <i data-lucide="search" style="width: 32px; height: 32px; color: #cbd5e1;"></i>
                                 </div>
                                 <span>暂无数据</span>
                            </div>
                        </td>
                    </tr>`;
            }

            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Action Bar -->
                     <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 12px 24px; display: flex; justify-content: flex-end; align-items: center;">
                         <button class="primary-btn" onclick="showInvoiceExpenseModal()" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.85rem; cursor: pointer;">
                            <i data-lucide="plus-circle" style="width: 16px; height: 16px;"></i> 新增
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0;">
                         <table class="statement-table" style="width: 100%; border-collapse: collapse; font-size: 13px;">
                            <thead>
                                <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                                    <th style="width: 40px; text-align: center; padding: 10px;">#</th>
                                    <th style="padding: 10px; text-align: left;">货物或应税劳务、服务名称</th>
                                    <th style="padding: 10px; text-align: left;">税收分类</th>
                                    <th style="padding: 10px; text-align: right;">税率</th>
                                    <th style="padding: 10px; text-align: center;">是否免税</th>
                                    <th style="padding: 10px; text-align: center;">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                 ${rowsHtml}
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '红字申请确认单') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                     <!-- Status Tabs -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px;">
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">待冲红</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">待购方确认</div>
                             <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">待销方确认</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">申请中</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">申请失败</div>
                             <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">作废</div>
                             <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">已冲红</div>
                        </div>
                    </div>

                    <!-- Filter Area -->
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Application Time -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">申请时间</label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                                <input type="text" placeholder="开始日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none; padding-left: 8px;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1; padding: 0 4px;">-</span>
                                <input type="text" placeholder="结束日期" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1; padding-right: 8px;"></i>
                            </div>
                        </div>

                        <!-- Invoice Type -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">发票类型</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #334155; font-size: 0.8rem;">全部</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                         <!-- Invoice Medium -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">发票介质</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #334155; font-size: 0.8rem;">全部</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                         <!-- Search Input -->
                        <div style="display: flex; align-items: center;">
                            <input type="text" placeholder="请输入购买方名称/蓝字发票号码" style="width: 240px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                         <!-- Applicant -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">申请人</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th>信息表编码</th>
                                    <th>正数发票号码</th>
                                    <th>购买方名称</th>
                                    <th>购买方税号</th>
                                    <th>发票类型</th>
                                    <th>发票介质</th>
                                    <th>申请人</th>
                                    <th>申请时间</th>
                                    <th>复核人</th>
                                    <th>操作流水号/时间</th>
                                    <th>操作成功时间</th>
                                    <th>所属公司</th>
                                    <th>描述</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                    <td colspan="14" style="height: 300px; text-align: center; color: #94a3b8; vertical-align: middle;">
                                        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                                             <div style="width: 64px; height: 64px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                                <i data-lucide="search" style="width: 32px; height: 32px; color: #cbd5e1;"></i>
                                             </div>
                                             <span>暂无数据</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '结算单位') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Filter Area -->
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
                         <!-- Settlement Unit Search -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">结算单位</label>
                            <div style="position: relative; width: 200px;">
                                <input type="text" placeholder="请输入" style="width: 100%; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 32px 0 12px; font-size: 0.8rem; outline: none;">
                                <i data-lucide="search" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Nature -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">性质</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #334155; font-size: 0.8rem;">全部</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                         <!-- Type -->
                         <div style="display: flex; align-items: center; gap: 12px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">类型</label>
                            <div style="display: flex; gap: 12px; align-items: center; font-size: 0.8rem; color: #334155;">
                                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                    <input type="radio" name="unit-type" checked style="accent-color: #4f46e5;"> 全部
                                </label>
                                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                    <input type="radio" name="unit-type" style="accent-color: #4f46e5;"> 外部
                                </label>
                                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                    <input type="radio" name="unit-type" style="accent-color: #4f46e5;"> 内部
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th>结算单位</th>
                                    <th>名称(英)</th>
                                    <th>所属公司</th>
                                    <th>类型</th>
                                    <th>性质</th>
                                    <th>关联结算单位</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; color: #334155;">深圳市远通物流有限公司</td>
                                    <td style="padding: 12px; color: #64748b;">SHENZHEN YUANTONG LOGISTICS CO., LTD</td>
                                    <td style="padding: 12px; color: #64748b;">丰华物流</td>
                                    <td style="padding: 12px; color: #64748b;">外部</td>
                                    <td style="padding: 12px; color: #64748b;">企业</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">编辑</a>
                                        <a href="#" style="color: #ef4444;">删除</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                    <td style="padding: 12px; color: #334155;">广州快运达货运代理有限公司</td>
                                    <td style="padding: 12px; color: #64748b;">GUANGZHOU FAST FREIGHT AGENCY CO., LTD</td>
                                    <td style="padding: 12px; color: #64748b;">丰华物流</td>
                                    <td style="padding: 12px; color: #64748b;">外部</td>
                                    <td style="padding: 12px; color: #64748b;">企业</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">编辑</a>
                                        <a href="#" style="color: #ef4444;">删除</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; color: #334155;">内部结算中心</td>
                                    <td style="padding: 12px; color: #64748b;">INTERNAL SETTLEMENT CENTER</td>
                                    <td style="padding: 12px; color: #64748b;">丰华物流</td>
                                    <td style="padding: 12px; color: #64748b;">内部</td>
                                    <td style="padding: 12px; color: #64748b;">部门</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">编辑</a>
                                        <a href="#" style="color: #ef4444;">删除</a>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '银行收款流水') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Bar: Status Tabs & Actions -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: flex-end;">
                        <!-- Status Tabs -->
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">销账待确认</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">待认领</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">已销账</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">其他</div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div style="display: flex; gap: 8px; padding-bottom: 8px;">
                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                同步流水
                            </button>
                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                导入
                            </button>
                        </div>
                    </div>
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Keyword Input -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">关键字</label>
                            <input type="text" placeholder="付款方户名/付款银行账号/摘要/流水号" style="width: 260px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Receiving Account -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">收款账户</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 150px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>收款户名</th>
                                    <th>收款支行</th>
                                    <th>收款银行账号</th>
                                    <th>币制</th>
                                    <th>银行流水号</th>
                                    <th>收款金额</th>
                                    <th>收款时间</th>
                                    <th>付款方户名</th>
                                    <th>结算单位</th>
                                    <th>付款银行账号</th>
                                    <th>付款摘要</th>
                                    <th>匹配单号</th>
                                    <th>电子回执</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center; color: #64748b;">1</td>
                                    <td style="padding: 12px; color: #334155;">深圳市远通物流有限公司</td>
                                    <td style="padding: 12px; color: #64748b;">招商银行深圳分行</td>
                                    <td style="padding: 12px; color: #64748b;">755912345678901</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #64748b;">202512270001</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">50,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">2025-12-27 10:30</td>
                                    <td style="padding: 12px; color: #64748b;">ABC TRADING LTD</td>
                                    <td style="padding: 12px; color: #64748b;">总公司</td>
                                    <td style="padding: 12px; color: #64748b;">6222021234567890</td>
                                    <td style="padding: 12px; color: #64748b;">货款</td>
                                    <td style="padding: 12px; color: #64748b;">ORDER-001</td>
                                    <td style="padding: 12px; color: #64748b;">已生成</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">详情</a>
                                        <a href="#" style="color: #4f46e5;">认领</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                    <td style="padding: 12px; text-align: center; color: #64748b;">2</td>
                                    <td style="padding: 12px; color: #334155;">广州快运达货运代理有限公司</td>
                                    <td style="padding: 12px; color: #64748b;">中国银行广州分行</td>
                                    <td style="padding: 12px; color: #64748b;">621234567890123</td>
                                    <td style="padding: 12px; color: #64748b;">USD</td>
                                    <td style="padding: 12px; color: #64748b;">202512270002</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">10,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">2025-12-27 11:15</td>
                                    <td style="padding: 12px; color: #64748b;">XYZ LOGISTICS INC</td>
                                    <td style="padding: 12px; color: #64748b;">广州分公司</td>
                                    <td style="padding: 12px; color: #64748b;">4567890123456789</td>
                                    <td style="padding: 12px; color: #64748b;">运费</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">详情</a>
                                        <a href="#" style="color: #4f46e5;">认领</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center; color: #64748b;">3</td>
                                    <td style="padding: 12px; color: #334155;">深圳市远通物流有限公司</td>
                                    <td style="padding: 12px; color: #64748b;">工商银行深圳分行</td>
                                    <td style="padding: 12px; color: #64748b;">955880123456789</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #64748b;">202512270003</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">2,500.00</td>
                                    <td style="padding: 12px; color: #64748b;">2025-12-27 14:00</td>
                                    <td style="padding: 12px; color: #64748b;">GLOBAL TRADERS</td>
                                    <td style="padding: 12px; color: #64748b;">总公司</td>
                                    <td style="padding: 12px; color: #64748b;">1234567890123456</td>
                                    <td style="padding: 12px; color: #64748b;">服务费</td>
                                    <td style="padding: 12px; color: #64748b;">ORDER-002</td>
                                    <td style="padding: 12px; color: #64748b;">已生成</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">详情</a>
                                        <a href="#" style="color: #4f46e5;">认领</a>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '银行付款流水') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Bar: Status Tabs & Actions -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: flex-end;">
                        <!-- Status Tabs -->
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">待提交</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">付款处理中</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">已付款</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">已核销</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">其他</div>
                        </div>
                        
                         <!-- Action Buttons -->
                        <div style="display: flex; gap: 8px; padding-bottom: 8px;">
                            <button class="action-btn" style="height: 32px; padding: 0 16px; background: #ef4444; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                删除
                            </button>
                             <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                导入
                            </button>
                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                提交付款
                            </button>
                        </div>
                    </div>

                    <!-- Filter Area -->
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Keyword Input -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">关键字</label>
                            <input type="text" placeholder="收款方户名/收款银行账号" style="width: 200px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Currency -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">币制</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>付款申请单号</th>
                                    <th>付款申请人</th>
                                    <th>结算单位</th>
                                    <th>收款方户名</th>
                                    <th>对方收款支行</th>
                                    <th>币制</th>
                                    <th>付款金额</th>
                                    <th>备注</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 12px; text-align: center; color: #64748b;">1</td>
                                    <td style="padding: 12px; color: #334155;">PAY-20251227-001</td>
                                    <td style="padding: 12px; color: #64748b;">张三</td>
                                    <td style="padding: 12px; color: #64748b;">总公司</td>
                                    <td style="padding: 12px; color: #334155;">深圳市供应商A有限公司</td>
                                    <td style="padding: 12px; color: #64748b;">建设银行深圳分行</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">12,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">采购款</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">详情</a>
                                        <a href="#" style="color: #ef4444;">删除</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                    <td style="padding: 12px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 12px; text-align: center; color: #64748b;">2</td>
                                    <td style="padding: 12px; color: #334155;">PAY-20251227-002</td>
                                    <td style="padding: 12px; color: #64748b;">李四</td>
                                    <td style="padding: 12px; color: #64748b;">广州分公司</td>
                                    <td style="padding: 12px; color: #334155;">GLOBAL COMMERCE INC</td>
                                    <td style="padding: 12px; color: #64748b;">HSBC HK</td>
                                    <td style="padding: 12px; color: #64748b;">USD</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">5,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">Service Fee</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">详情</a>
                                        <a href="#" style="color: #ef4444;">删除</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 12px; color: #64748b;">3</td>
                                    <td style="padding: 12px; color: #334155;">PAY-20251227-003</td>
                                    <td style="padding: 12px; color: #64748b;">王五</td>
                                    <td style="padding: 12px; color: #64748b;">总公司</td>
                                    <td style="padding: 12px; color: #334155;">上海物流合作伙伴</td>
                                    <td style="padding: 12px; color: #64748b;">农业银行上海分行</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">3,500.00</td>
                                    <td style="padding: 12px; color: #64748b;">运费补贴</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #4f46e5; margin-right: 8px;">详情</a>
                                        <a href="#" style="color: #ef4444;">删除</a>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '银企直连配置') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Status Tabs -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px;">
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div id="tab-bank-account" class="internal-tab active" onclick="toggleBankConfigTab('account')" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">银行账户</div>
                            <div id="tab-params-config" class="internal-tab" onclick="toggleBankConfigTab('params')" style="padding: 12px 0; cursor: pointer;">参数配置</div>
                        </div>
                    </div>

                    <!-- View: Bank Account -->
                    <div id="bank-account-view" style="display: flex; flex-direction: column; flex-grow: 1;">
                        <!-- Filter Area -->
                        <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                 <!-- Keyword Input -->
                                <div style="display: flex; align-items: center; gap: 8px;">
                                     <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">关键字</label>
                                    <input type="text" placeholder="银行账户/账户名称/开户支行" style="width: 280px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                                </div>

                                <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                                </button>
                            </div>
                            
                            <a href="#" style="font-size: 0.8rem; color: #4f46e5; text-decoration: none;">怎样开通银企直连？</a>
                        </div>

                        <!-- Table -->
                        <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                             <table class="statement-table">
                                <thead>
                                    <tr>
                                        <th>开户行名称</th>
                                        <th>账户名称</th>
                                        <th>银行账户</th>
                                        <th>币制</th>
                                        <th>状态</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 12px; color: #334155;">微信</td>
                                        <td style="padding: 12px; color: #334155;">深圳运输云物流科技有限公司A</td>
                                        <td style="padding: 12px; color: #334155;">342546578687980</td>
                                        <td style="padding: 12px; color: #64748b;">USD</td>
                                        <td style="padding: 12px; color: #64748b; display: flex; align-items: center; gap: 6px;">
                                            <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #4f46e5;"></div> 未激活
                                        </td>
                                        <td style="padding: 12px;">
                                            <a href="#" style="color: #4f46e5;">激活</a>
                                        </td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                        <td style="padding: 12px; color: #334155;">招商银行</td>
                                        <td style="padding: 12px; color: #334155;">深圳运输云物流科技有限公司A</td>
                                        <td style="padding: 12px; color: #334155;">31425465782423</td>
                                        <td style="padding: 12px; color: #64748b;">CNY</td>
                                        <td style="padding: 12px; color: #64748b; display: flex; align-items: center; gap: 6px;">
                                            <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #4f46e5;"></div> 未激活
                                        </td>
                                        <td style="padding: 12px;">
                                            <a href="#" style="color: #4f46e5;">激活</a>
                                        </td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 12px; color: #334155;">招商银行</td>
                                        <td style="padding: 12px; color: #334155;">深圳运输云物流科技有限公司A</td>
                                        <td style="padding: 12px; color: #334155;">12423546789809</td>
                                        <td style="padding: 12px; color: #64748b;">USD</td>
                                        <td style="padding: 12px; color: #64748b; display: flex; align-items: center; gap: 6px;">
                                            <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #4f46e5;"></div> 未激活
                                        </td>
                                        <td style="padding: 12px;">
                                            <a href="#" style="color: #4f46e5;">激活</a>
                                        </td>
                                    </tr>
                                </tbody>
                             </table>
                        </div>
                    </div>

                    <!-- View: Parameter Config -->
                    <div id="parameter-config-view" style="display: none; padding: 24px; flex-direction: column; gap: 20px; max-width: 800px;">
                        
                        <div style="display: flex; align-items: center;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold;"><span style="color: #ef4444;">* </span>客户号</label>
                            <input type="text" placeholder="请输入" style="flex: 1; height: 36px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 0 12px; outline: none;">
                        </div>

                        <div style="display: flex; align-items: flex-start;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold; margin-top: 8px;"><span style="color: #ef4444;">* </span>私钥</label>
                            <textarea placeholder="请输入" style="flex: 1; height: 120px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 12px; outline: none; resize: vertical;"></textarea>
                        </div>

                        <div style="display: flex; align-items: center;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold;"><span style="color: #ef4444;">* </span>appkey</label>
                            <input type="text" placeholder="请输入" style="flex: 1; height: 36px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 0 12px; outline: none;">
                        </div>

                        <div style="display: flex; align-items: center;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold;"><span style="color: #ef4444;">* </span>单位代码</label>
                            <input type="text" placeholder="请输入" style="flex: 1; height: 36px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 0 12px; outline: none;">
                        </div>

                        <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                            <button style="display: flex; align-items: center; gap: 6px; background-color: #4f46e5; color: white; padding: 8px 24px; border: none; border-radius: 4px; font-size: 0.9rem; cursor: pointer;">
                                <i data-lucide="save" style="width: 16px; height: 16px;"></i> 保存
                            </button>
                        </div>

                    </div>
                </div>
                `;





        } else if (activeTab === '批量确认') {
            document.querySelector('.page-content').innerHTML = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Filter Area (Merged into one row) -->
                <div class="batch-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background: white;">
                        <!-- Date Group -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>计费日期</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" value="2025-12-01" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none; color: #334155;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" value="2025-12-31" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none; color: #334155;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            </div>
                        </div>

                        <!-- Keyword -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">关键字</label>
                            <input type="text" placeholder="工作号" style="width: 150px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Confirm Status -->
                        <div style="display: flex; align-items: center; gap: 8px; position: relative;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">确认状态</label>
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="batch-confirm-status">全部</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100px; position: absolute; top: 100%; left: 58px; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-confirm-status', '全部')">全部</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-confirm-status', '已确认')">已确认</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-confirm-status', '未确认')">未确认</div>
                            </div>
                        </div>

                        <!-- Type -->
                        <div style="display: flex; align-items: center; gap: 8px; position: relative;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">类型</label>
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="batch-type">全部</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100px; position: absolute; top: 100%; left: 32px; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '全部')">全部</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '费用单')">费用单</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '整车')">整车</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '零担')">零担</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '短驳')">短驳</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '其他')">其他</div>
                            </div>
                        </div>

                        <!-- Range -->
                        <div style="display: flex; align-items: center; gap: 8px; position: relative;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">范围</label>
                            <div class="select-box" style="width: 130px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="batch-range">只看我负责的</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 130px; position: absolute; top: 100%; left: 32px; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-range', '只看我负责的')">只看我负责的</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-range', '只看有费用的')">只看有费用的</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-range', '只看无费用的')">只看无费用的</div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                        </button>

                        <div style="height: 32px; width: 1px; background: #e2e8f0; margin: 0 8px;"></div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            批量确认
                        </button>
                        <button class="ghost-btn" style="height: 32px; padding: 0 12px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.8rem; background: white; cursor: pointer;">批量导出</button>
                </div>

                    <!-- Table Content Area -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                        <table class="statement-table" style="width: max-content; min-width: 100%;">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">工作号</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">工作单日期</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">委托人(英)</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">签收日期</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">运单类型</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">业务员</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">操作员</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应收</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应收（增减）</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应付</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应付（增减）</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应收</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">费用确认</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">费用确认人</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应付</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">费用确认时间</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">增减费用确认</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">业务员成本</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">增减费用确认人</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">增减费用确认时间</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">公司毛利</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">客服确认</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">客服确认人</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">业务员毛利客服确认时间</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">业务员确认</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应收完成</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">业务员确认人</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">应付完成</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">业务员确认时间</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">收款状态</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">付款状态</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">所属公司</th>
                                    <th style="white-space: nowrap; padding: 0 12px;">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white;">
                                    <td style="text-align: center;"><input type="checkbox"></td>
                                    <td style="text-align: center;">1</td>
                                    <td>YO2512-0019</td>
                                    <td>2025-12-25</td>
                                    <td>MSC ISABELLA</td>
                                    <td>2025-12-26</td>
                                    <td>整车</td>
                                    <td>张三</td>
                                    <td>李四</td>
                                    <td style="color: #4f46e5; font-weight: 500;">1200.00</td>
                                    <td>0.00</td>
                                    <td style="color: #ef4444; font-weight: 500;">1000.00</td>
                                    <td>0.00</td>
                                    <td>1200.00</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>-</td>
                                    <td>1000.00</td>
                                    <td>-</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>800.00</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>400.00</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>否</td>
                                    <td>-</td>
                                    <td>否</td>
                                    <td>-</td>
                                    <td>未收款</td>
                                    <td>未付款</td>
                                    <td>丰源物流</td>
                                    <td><button style="color: #4f46e5; background: none; border: none; cursor: pointer; font-size: 0.75rem;">查看</button></td>
                                </tr>
                                <tr style="background: #f8fafc;">
                                    <td style="text-align: center;"><input type="checkbox"></td>
                                    <td style="text-align: center;">2</td>
                                    <td>YO2512-0020</td>
                                    <td>2025-12-26</td>
                                    <td>EVER GIVEN</td>
                                    <td>2025-12-27</td>
                                    <td>零担</td>
                                    <td>马六</td>
                                    <td>赵八</td>
                                    <td style="color: #4f46e5; font-weight: 500;">530.00</td>
                                    <td>30.00</td>
                                    <td style="color: #ef4444; font-weight: 500;">400.00</td>
                                    <td>10.00</td>
                                    <td>500.00</td>
                                    <td><span style="color: #10b981;">已确认</span></td>
                                    <td>陈七</td>
                                    <td>400.00</td>
                                    <td>2025-12-26 15:30</td>
                                    <td><span style="color: #10b981;">已确认</span></td>
                                    <td>350.00</td>
                                    <td>陈七</td>
                                    <td>2025-12-26 15:30</td>
                                    <td>180.00</td>
                                    <td><span style="color: #10b981;">已确认</span></td>
                                    <td>陈七</td>
                                    <td>2025-12-26 15:30</td>
                                    <td><span style="color: #10b981;">已确认</span></td>
                                    <td>是</td>
                                    <td>马六</td>
                                    <td>是</td>
                                    <td>2025-12-26 16:00</td>
                                    <td>已收款</td>
                                    <td>已付款</td>
                                    <td>丰源物流</td>
                                    <td><button style="color: #4f46e5; background: none; border: none; cursor: pointer; font-size: 0.75rem;">查看</button></td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="text-align: center;"><input type="checkbox"></td>
                                    <td style="text-align: center;">3</td>
                                    <td>YO2512-0021</td>
                                    <td>2025-12-27</td>
                                    <td>COSCO SHIPPING</td>
                                    <td>2025-12-28</td>
                                    <td>费用单</td>
                                    <td>王五</td>
                                    <td>张三</td>
                                    <td style="color: #4f46e5; font-weight: 500;">356.17</td>
                                    <td>0.00</td>
                                    <td style="color: #ef4444; font-weight: 500;">300.00</td>
                                    <td>0.00</td>
                                    <td>356.17</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>-</td>
                                    <td>300.00</td>
                                    <td>-</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>250.00</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>106.17</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><span style="color: #ef4444;">未确认</span></td>
                                    <td>否</td>
                                    <td>-</td>
                                    <td>否</td>
                                    <td>-</td>
                                    <td>部分收款</td>
                                    <td>未付款</td>
                                    <td>丰源物流</td>
                                    <td><button style="color: #4f46e5; background: none; border: none; cursor: pointer; font-size: 0.75rem;">查看</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;
        } else if (activeTab === '费用审核') {
            document.querySelector('.page-content').innerHTML = `
                    <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Filter Area (Merged into one row) -->
                <div class="audit-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background: white;">
                    <!-- Billing Date Group -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>计费日期</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                            <input type="text" value="2025-12-01" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none; color: #334155;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            <span style="color: #cbd5e1;">-</span>
                            <input type="text" value="2025-12-31" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none; color: #334155;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                        </div>
                    </div>

                    <!-- Type Group -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">类型</label>
                        <div class="relative-container">
                            <div class="select-box-filter" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: white; font-size: 0.8rem; cursor: pointer;">
                                <span id="audit-type-val" style="color: #334155;">全部</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100px; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '全部')">全部</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '整车')">整车</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '零担')">零担</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '短驳')">短驳</div>
                            </div>
                        </div>
                    </div>

                    <!-- Keywords -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">关键字</label>
                        <input type="text" placeholder="工作单号" style="width: 150px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                    </div>

                    <!-- Expense Audit Select -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">费用审核</label>
                        <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px;">
                            <div class="select-box-filter" style="width: 70px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>包含</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="relative-container">
                                <div class="select-box-filter" style="width: 120px; height: 32px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: white; font-size: 0.8rem; cursor: pointer;">
                                    <span id="audit-status-val" style="color: #cbd5e1;">请选择</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 120px; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '未提交')">未提交</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '审核中')">审核中</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '审核通过')">审核通过</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '审核驳回')">审核驳回</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                    </button>
                </div>

                    <!-- Table Content Area -->
                    <div class="statement-table-container" style="flex: none; height: auto; max-height: 150px; background: #f8fafc; padding: 0; overflow: auto;">
                        <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>工作号</th>
                                    <th>工作单日期</th>
                                    <th>签收日期</th>
                                    <th>件数</th>
                                    <th>运单类型</th>
                                    <th>毛重</th>
                                    <th>业务员</th>
                                    <th>体积</th>
                                    <th>操作员</th>
                                    <th>应收</th>
                                    <th>应收（增减）</th>
                                    <th>应付</th>
                                    <th>应付（增减）</th>
                                    <th>应收</th>
                                    <th>应付</th>
                                    <th>业务员成本</th>
                                    <th>公司毛利</th>
                                    <th>客服</th>
                                    <th>业务员毛利</th>
                                    <th>应收完成</th>
                                    <th>应付完成</th>
                                    <th>收款状态</th>
                                    <th>付款状态</th>
                                    <th>所属公司</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Placeholder row -->
                                <tr style="background: white;">
                                    <td style="text-align: center;"><input type="checkbox"></td>
                                    <td style="text-align: center;">1</td>
                                    <td>YO2512-0019</td>
                                    <td>2025-12-25</td>
                                    <td>2025-12-26</td>
                                    <td>100</td>
                                    <td>整车</td>
                                    <td>1200.50</td>
                                    <td>张三</td>
                                    <td>2.5</td>
                                    <td>李四</td>
                                    <td>5000.00</td>
                                    <td>0.00</td>
                                    <td>3500.00</td>
                                    <td>0.00</td>
                                    <td>5000.00</td>
                                    <td>3500.00</td>
                                    <td>3500.00</td>
                                    <td>1500.00</td>
                                    <td>王五</td>
                                    <td>1500.00</td>
                                    <td>已完成</td>
                                    <td>未完成</td>
                                    <td>部分收款</td>
                                    <td>未付款</td>
                                    <td>丰园物流</td>
                                    <td style="text-align: center;"><a href="#" style="color: #4f46e5;">详情</a></td>
                                </tr>
                                <tr style="background: #f8fafc;">
                                    <td style="text-align: center;"><input type="checkbox"></td>
                                    <td style="text-align: center;">2</td>
                                    <td>YO2512-0020</td>
                                    <td>2025-12-26</td>
                                    <td>2025-12-27</td>
                                    <td>50</td>
                                    <td>零担</td>
                                    <td>450.00</td>
                                    <td>马六</td>
                                    <td>1.2</td>
                                    <td>陈七</td>
                                    <td>8000.00</td>
                                    <td>100.00</td>
                                    <td>6000.00</td>
                                    <td>50.00</td>
                                    <td>8100.00</td>
                                    <td>6050.00</td>
                                    <td>6050.00</td>
                                    <td>2050.00</td>
                                    <td>赵八</td>
                                    <td>2050.00</td>
                                    <td>未完成</td>
                                    <td>未完成</td>
                                    <td>未收款</td>
                                    <td>未付款</td>
                                    <td>贝塔测试</td>
                                    <td style="text-align: center;"><a href="#" style="color: #4f46e5;">详情</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                    <!-- Expense Detail Section -->
                    <div class="expense-detail-section" style="border-top: 1px solid #e2e8f0; background: white; flex: 1; display: flex; flex-direction: column; overflow: hidden;">
                        <!-- Control Bar -->
                        <div style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: white;">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <a href="#" style="color: #4f46e5; display: flex; align-items: center; gap: 4px; text-decoration: none; font-size: 0.9rem;">
                                    收起应收应付单<i data-lucide="chevron-up" style="width: 14px; height: 14px;"></i>
                                </a>
                                <label style="display: flex; align-items: center; gap: 4px; font-size: 0.9rem; color: #475569;">
                                    <input type="checkbox" checked> 显示增减费用
                                </label>
                                <div style="display: flex; gap: 8px;">
                                    <button style="background: #22c55e; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; cursor: pointer;">审核通过</button>
                                    <button style="background: #f97316; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; cursor: pointer;">驳回</button>
                                    <button style="background: #ef4444; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; cursor: pointer;">撤销审核</button>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 24px; font-size: 0.9rem; color: #1e293b;">
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <span style="font-size: 0.8rem; color: #64748b;">毛利率</span>
                                    <span style="font-weight: 600;">0%</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: start;">
                                    <span style="font-size: 0.8rem; color: #64748b;">折合币制 <i data-lucide="help-circle" style="width: 12px; height: 12px;"></i></span>
                                    <select style="border: 1px solid #e2e8f0; border-radius: 2px; font-size: 0.8rem; padding: 1px 4px;">
                                        <option>CNY</option>
                                    </select>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">应收</span>
                                    <span style="font-weight: 600;">700.00</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">应付</span>
                                    <span style="font-weight: 600;">112.00</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">公司利润</span>
                                    <span style="font-weight: 600;">588.00</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">其他费用</span>
                                    <span style="font-weight: 600;">0</span>
                                </div>
                            </div>
                        </div>

                        <!-- Details Split View -->
                        <div style="flex-grow: 1; display: flex; overflow: hidden;">
                            <!-- Receivables Column -->
                            <div style="flex: 1; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; padding: 12px;">
                                <div style="font-size: 0.9rem; font-weight: 600; color: #65a30d; margin-bottom: 8px;">应收 (2) 增减 (0)</div>
                                <div style="flex-grow: 1; overflow: auto; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
                                        <thead style="background: #f8fafc; position: sticky; top: 0;">
                                            <tr>
                                                <th style="padding: 8px; text-align: center; border-bottom: 1px solid #e2e8f0;"><input type="checkbox"></th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">审核状态</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">计费日期</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">费用代码</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">费用名称</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">原币</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">金额</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">客户代码</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">客户名称</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">数量</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                                <td style="padding: 8px; text-align: center;"><input type="checkbox" class="payables-row-checkbox" onchange="updatePayablesGenerateBillButtonState()"></td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">2025-12-04</td>
                                                <td style="padding: 8px;">DOFC</td>
                                                <td style="padding: 8px;">文件单证费</td>
                                                <td style="padding: 8px;">CNY</td>
                                                <td style="padding: 8px; text-align: right;">200.00</td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">麦格亿-操作部</td>
                                                <td style="padding: 8px; text-align: right;"></td>
                                            </tr>
                                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                                <td style="padding: 8px; text-align: center;"><input type="checkbox" class="payables-row-checkbox" onchange="updatePayablesGenerateBillButtonState()"></td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">2025-12-04</td>
                                                <td style="padding: 8px;">DOFC</td>
                                                <td style="padding: 8px;">文件单证费</td>
                                                <td style="padding: 8px;">CNY</td>
                                                <td style="padding: 8px; text-align: right;">500.00</td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">麦格亿-操作部</td>
                                                <td style="padding: 8px; text-align: right;"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style="margin-top: 8px; font-size: 0.85rem; color: #16a34a; font-weight: 600;">
                                    CNY: 700.00
                                </div>
                            </div>

                            <!-- Payables Column -->
                            <div style="flex: 1; display: flex; flex-direction: column; padding: 12px;">
                                <div style="font-size: 0.9rem; font-weight: 600; color: #dc2626; margin-bottom: 8px;">应付 (1) 增减 (0)</div>
                                <div style="flex-grow: 1; overflow: auto; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
                                        <thead style="background: #f8fafc; position: sticky; top: 0;">
                                            <tr>
                                                <th style="padding: 8px; text-align: center; border-bottom: 1px solid #e2e8f0;"><input type="checkbox"></th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">审核状态</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">计费日期</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">费用代码</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">费用名称</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">原币</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">金额</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">客户代码</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">客户名称</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">客户名称</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">数量</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                                <td style="padding: 8px; text-align: center;"><input type="checkbox" class="payables-row-checkbox" onchange="updatePayablesGenerateBillButtonState()"></td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">2025-12-04</td>
                                                <td style="padding: 8px;">TRNF</td>
                                                <td style="padding: 8px;">交通费</td>
                                                <td style="padding: 8px;">CNY</td>
                                                <td style="padding: 8px; text-align: right;">112.00</td>
                                                <td style="padding: 8px;">YIXING</td>
                                                <td style="padding: 8px;">ZIM</td>
                                                <td style="padding: 8px;">以星综合航运...</td>
                                                <td style="padding: 8px; text-align: right;"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style="margin-top: 8px; font-size: 0.85rem; color: #dc2626; font-weight: 600;">
                                    CNY: 112.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

        } else if (activeTab === '付款申请') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: #fff;">
                <!-- List View -->
                <div id="payment-application-list-view" style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                    <!-- Status Tabs (Simplified based on Image 1) -->
                    <div style="background: #fff; padding: 0 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div class="active" style="padding: 12px 0; border-bottom: 2px solid #4f46e5; color: #4f46e5; font-weight: 500; cursor: pointer;">全部</div>
                            <div style="padding: 12px 0; cursor: pointer;">草稿/驳回</div>
                            <div style="padding: 12px 0; cursor: pointer;">审核中 <span style="background:#f1f5f9; px-1; rounded">56</span></div>
                            <div style="padding: 12px 0; cursor: pointer;">已批准 <span style="background:#f1f5f9; px-1; rounded">4</span></div>
                             <div style="padding: 12px 0; cursor: pointer;">部分核销</div>
                             <div style="padding: 12px 0; cursor: pointer;">已核销 <span style="background:#f1f5f9; px-1; rounded">1</span></div>
                             <div style="padding: 12px 0; cursor: pointer;">已过期已取消 <span style="background:#f1f5f9; px-1; rounded">1</span></div>
                        </div>
                    </div>

                    <!-- Filter Area -->
                     <div style="padding: 12px 24px; background: #fff; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px;">
                        <!-- Row 1 -->
                        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; font-size: 0.8rem;">
                             <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">申请日期</label>
                                <div style="border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; padding: 0 8px; height: 32px; background: #fff;">
                                    <input type="text" placeholder="开始日期" style="border: none; width: 80px; outline: none; font-size: 0.8rem;">
                                    <span style="color: #cbd5e1;">-</span>
                                    <input type="text" placeholder="结束日期" style="border: none; width: 80px; outline: none; font-size: 0.8rem;">
                                </div>
                            </div>
                            <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">关键字</label>
                                <input type="text" placeholder="请输入提单号/申请号" style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 32px; width: 200px; outline: none;">
                            </div>
                             <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">申请人</label>
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; cursor: pointer;"><span>请选择</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                            </div>
                             <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">审核状态</label>
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; cursor: pointer;"><span>请选择</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                            </div>
                             <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">水单状态</label>
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; cursor: pointer;"><span>全部</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                            </div>
                             <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">核销附件状态</label>
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; cursor: pointer;"><span>全部</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                            </div>
                             <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">开票方式</label>
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; cursor: pointer;"><span>请选择</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                            </div>
                        </div>

                        <!-- Row 2 -->
                         <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; font-size: 0.8rem;">
                            <div class="input-group" style="display: flex; align-items: center; gap: 8px;">
                                <label style="color: #64748b;">所属公司</label>
                                <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; cursor: pointer;"><span>请选择</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                            </div>
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; color: #64748b;">
                                <input type="checkbox"> 仅查看待我处理的
                            </label>
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; color: #64748b;">
                                <input type="checkbox"> 仅查看已过期已失效
                            </label>
                             <button style="background: #4f46e5; color: white; border: none; padding: 0 16px; height: 32px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                                 <i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询
                             </button>
                             <button style="background: #4f46e5; color: white; border: none; padding: 0 16px; height: 32px; border-radius: 4px; cursor: pointer;">付款报表</button>
                             <div style="flex: 1;"></div>
                             <!-- Create Button (New) -->
                             <button onclick="document.getElementById('payment-application-list-view').style.display='none';document.getElementById('payment-application-create-view').style.display='flex';document.querySelector('.customer-sidebar').style.display='none';" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                 <i data-lucide="plus-circle" style="width: 16px; height: 16px;"></i> 新增
                            </button>
                         </div>
                    </div>

                    <!-- Table -->
                    <div style="flex: 1; overflow: auto; background: #f8fafc; padding: 0;">
                         <table class="statement-table" style="width: 100%; min-width: max-content;">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th style="text-align: left;">付款申请单号</th>
                                    <th style="text-align: left;">单据状态</th>
                                    <th style="text-align: center;">付款单附件</th>
                                    <th style="text-align: left;">水单上传时间</th>
                                    <th style="text-align: left;">发票预核状态</th>
                                    <th style="text-align: left;">结算单位</th>
                                    <th style="text-align: left;">开票方式</th>
                                    <th style="text-align: left;">申请日期</th>
                                    <th style="text-align: left;">应支付日期</th>
                                    <th style="text-align: right;">申请金额</th>
                                    <th style="text-align: right;">费用金额</th>
                                    <th style="text-align: right;">已核销金额</th>
                                    <th style="text-align: right;">本期金额</th>
                                    <th style="text-align: right;">折合金额</th>
                                    <th style="text-align: left;">申请人</th>
                                    <th style="text-align: left;">所属公司</th>
                                    <th style="text-align: left;">工作单号</th>
                                    <th style="text-align: left;">账单号</th>
                                    <th style="text-align: left;">对账单号</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 8px; text-align: center;">1</td>
                                    <td style="padding: 8px; color: #4f46e5;">PAY20231201001</td>
                                    <td style="padding: 8px;"><span style="background: #fef9c3; color: #ca8a04; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">待审批</span></td>
                                    <td style="padding: 8px; text-align: center;"><i data-lucide="file-text" style="width: 14px; height: 14px; color: #cbd5e1;"></i></td>
                                    <td style="padding: 8px;">未上传</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">深圳市好运来货运代理有限公司</td>
                                    <td style="padding: 8px;">专票(6%)</td>
                                    <td style="padding: 8px;">2023-12-01</td>
                                    <td style="padding: 8px;">2023-12-15</td>
                                    <td style="padding: 8px; text-align: right;">5,000.00</td>
                                    <td style="padding: 8px; text-align: right;">5,000.00</td>
                                    <td style="padding: 8px; text-align: right;">0.00</td>
                                     <td style="padding: 8px; text-align: right; color: #dc2626;">5,000.00</td>
                                      <td style="padding: 8px; text-align: right;">5,000.00</td>
                                    <td style="padding: 8px;">业务员A</td>
                                    <td style="padding: 8px;">丰源集团</td>
                                    <td style="padding: 8px;">Y02512-0019</td>
                                    <td style="padding: 8px;">B20231201</td>
                                    <td style="padding: 8px;">S20231201</td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>

                <!-- Create View (Hidden) -->
                <div id="payment-application-create-view" style="display: none; flex-direction: column; width: 100%; height: 100%; background: #f8fafc;">
                    <!-- Header -->
                     <div style="height: 50px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; flex-shrink: 0;">
                        <div style="font-size: 14px; color: #64748b;">申请单号: <span style="background: #84cc16; color: white; padding: 1px 6px; border-radius: 4px; font-size: 11px;">自动生成</span></div>
                        <div style="display: flex; gap: 8px;">
                              <button class="primary-btn" style="height: 30px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center;"><i data-lucide="plus" style="width: 14px; height: 14px; margin-right: 4px;"></i> 新增</button>
                              <button class="primary-btn" style="height: 30px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center;"><i data-lucide="check-square" style="width: 14px; height: 14px; margin-right: 4px;"></i> 提交审核</button>
                             <button style="height: 30px; padding: 0 16px; background: white; border: 1px solid #e2e8f0; color: #475569; border-radius: 4px;">暂存草稿</button>
                             <button onclick="document.getElementById('payment-application-list-view').style.display='flex';document.getElementById('payment-application-create-view').style.display='none';document.querySelector('.customer-sidebar').style.display='flex';" style="height: 30px; padding: 0 16px; background: white; border: 1px solid #e2e8f0; color: #475569; border-radius: 4px;">返回</button>
                        </div>
                    </div>
                    
                    <!-- Content -->
                    <div style="flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
                        <!-- Form Area -->
                         <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px 24px;">
                                <!-- Col 1 -->
                                <div style="display: flex; flex-direction: column; gap: 12px;">
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;"><span style="color: red">*</span> 结算单位</label>
                                        <div style="flex: 1; display: flex; gap: 8px;">
                                              <div class="select-box" style="flex: 1; height: 32px; border: 1px solid #ffddd; background: #fff1f2; display: flex; align-items: center; justify-content: space-between; padding: 0 8px;"><span>请选择</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                                              <div style="border: 1px solid #e2e8f0; background: #f1f5f9; padding: 0px 8px; border-radius: 4px; font-size: 12px; color: #64748b; display: flex; align-items: center;">NL</div>
                                              <div style="border: 1px solid #e2e8f0; background: #f1f5f9; padding: 0px 8px; border-radius: 4px; font-size: 12px; color: #64748b; display: flex; align-items: center;">月结</div>
                                        </div>
                                     </div>
                                      <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">类型</label>
                                        <div style="flex: 1; display: flex; gap: 8px;">
                                             <div class="select-box" style="width: 80px; height: 32px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; border: 1px solid #e2e8f0; border-radius: 4px;"><span>折合</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                                             <div class="select-box" style="width: 80px; height: 32px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; border: 1px solid #e2e8f0; border-radius: 4px;"><span>CNY</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                                             <input type="text" value="0" style="width: 60px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; text-align: right; padding: 0 4px; outline: none;">
                                             <a href="#" style="font-size: 12px; color: #4f46e5; display: flex; align-items: center;">汇率</a>
                                        </div>
                                     </div>
                                      <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">备注</label>
                                        <input type="text" placeholder="请输入" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; outline: none;">
                                     </div>
                                </div>
                                
                                <!-- Col 2 -->
                                <div style="display: flex; flex-direction: column; gap: 12px;">
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">预付款余额</label>
                                        <span style="font-size: 12px;">-</span>
                                     </div>
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">对方银行账户</label>
                                         <div class="select-box" style="flex: 1; height: 32px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; border: 1px solid #e2e8f0; border-radius: 4px;"><span>请选择</span><i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i></div>
                                     </div>
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                         <div style="flex: 1; height: 32px; border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 4px; margin-left: 78px;"></div>
                                     </div>
                                </div>
                                
                                <!-- Col 3 -->
                                <div style="display: flex; flex-direction: column; gap: 12px;">
                                     <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">应支付日期</label>
                                        <input type="date" value="2025-12-31" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; outline: none; font-size: 0.8rem; font-family: inherit;">
                                     </div>
                                      <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">开票方式</label>
                                        <div style="flex: 1; display: flex; gap: 12px; font-size: 12px; align-items: center;">
                                            <label style="display: flex; align-items: center; gap: 4px;"><input type="radio" name="inv-type" checked> 先票后付</label>
                                            <label style="display: flex; align-items: center; gap: 4px;"><input type="radio" name="inv-type"> 先付后票</label>
                                            <label style="display: flex; align-items: center; gap: 4px;"><input type="radio" name="inv-type"> 不开票</label>
                                        </div>
                                     </div>
                                      <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">发票号</label>
                                        <input type="text" placeholder="请输入" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; outline: none;">
                                     </div>
                                      <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">开票日期</label>
                                        <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                             <input type="date" style="flex: 1; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; outline: none; font-size: 0.8rem; font-family: inherit;">
                                        </div>
                                     </div>
                                      <div style="display: flex; align-items: center; gap: 8px;">
                                        <label style="width: 70px; text-align: right; color: #64748b; font-size: 12px;">发票文件</label>
                                       <a href="#" style="color: #4f46e5; display: flex; align-items: center; gap: 4px; font-size: 12px;"><i data-lucide="paperclip" style="width: 12px; height: 12px;"></i> 附件</a>
                                     </div>
                                </div>
                            </div>
                         </div>
                         
                         <!-- Filter Bar -->
                         <div style="background: white; border-radius: 8px; padding: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                             <label style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #64748b;"><input type="radio" name="item-type"> 应收</label>
                             <label style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #64748b;"><input type="radio" name="item-type" checked> 应付</label>
                             <label style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #64748b;"><input type="radio" name="item-type"> 收付</label>
                             <input type="text" placeholder="请输入订单号/工作单号/账单号..." style="width: 250px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 12px; outline: none;">
                             <button style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; font-size: 12px; display: flex; align-items: center; gap: 4px; cursor: pointer;"><i data-lucide="search" style="width: 12px; height: 12px;"></i> 查询</button>
                             <a href="#" style="font-size: 12px; color: #4f46e5; display: flex; align-items: center;">更多(3) <i data-lucide="chevron-down" style="width: 10px; height: 10px;"></i></a>
                             <div style="flex: 1;"></div>
                             <label style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #64748b;"><input type="radio" name="view-type"> 仅显示已勾选</label>
                             <label style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #64748b;"><input type="radio" name="view-type" checked> 全部</label>
                              <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; font-size: 12px;"><span>结算币种组</span><i data-lucide="chevron-down" style="width: 12px; height: 12px; color: #94a3b8;"></i></div>
                         </div>
                         
                         <!-- Table -->
                         <div style="flex: 1; background: white; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden; display: flex; flex-direction: column;">
                             <table class="statement-table" style="width: 100%; min-width: max-content;">
                                 <thead>
                                     <tr>
                                         <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                         <th>账单号</th>
                                         <th>工作单号</th>
                                         <th>结算单位</th>
                                         <th>计费日期</th>
                                         <th>费用</th>
                                         <th>原币制</th>
                                         <th>数量</th>
                                         <th>单价</th>
                                         <th>金额</th>
                                         <th>未申请金额</th>
                                         <th>申请付款(原币)</th>
                                         <th>申请付款(折合)</th>
                                         <th>工作单日期</th>
                                         <th>费用参考号</th>
                                         <th>工作单参考号</th>
                                         <th>中转单号</th>
                                         <th>所属公司</th>
                                         <th>委托人</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                         <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                         <td style="padding: 10px;">B2023120101</td>
                                         <td style="padding: 10px;">Y02512-0030</td>
                                         <td style="padding: 10px;">上海市东方国际物流集团</td>
                                         <td style="padding: 10px;">2023-12-01</td>
                                         <td style="padding: 10px;">运费</td>
                                         <td style="padding: 10px;">USD</td>
                                         <td style="padding: 10px;">1</td>
                                         <td style="padding: 10px;">500.00</td>
                                         <td style="padding: 10px;">500.00</td>
                                         <td style="padding: 10px;">500.00</td>
                                         <td style="padding: 10px;">500.00</td>
                                         <td style="padding: 10px;">3500.00</td>
                                         <td style="padding: 10px;">2023-12-01</td>
                                         <td style="padding: 10px;">-</td>
                                         <td style="padding: 10px;">REF123456</td>
                                         <td style="padding: 10px;">-</td>
                                         <td style="padding: 10px;">丰源集团</td>
                                         <td style="padding: 10px;">-</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                         <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                         <td style="padding: 10px;">B2023120202</td>
                                         <td style="padding: 10px;">Y02512-0031</td>
                                         <td style="padding: 10px;">深圳市好运来货运代理有限公司</td>
                                         <td style="padding: 10px;">2023-12-02</td>
                                         <td style="padding: 10px;">操作费</td>
                                         <td style="padding: 10px;">CNY</td>
                                         <td style="padding: 10px;">1</td>
                                         <td style="padding: 10px;">200.00</td>
                                         <td style="padding: 10px;">200.00</td>
                                         <td style="padding: 10px;">200.00</td>
                                         <td style="padding: 10px;">200.00</td>
                                         <td style="padding: 10px;">200.00</td>
                                         <td style="padding: 10px;">2023-12-02</td>
                                         <td style="padding: 10px;">-</td>
                                         <td style="padding: 10px;">REF123457</td>
                                         <td style="padding: 10px;">-</td>
                                         <td style="padding: 10px;">丰源集团</td>
                                         <td style="padding: 10px;">-</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                         <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                         <td style="padding: 10px;">B2023120303</td>
                                         <td style="padding: 10px;">Y02512-0032</td>
                                         <td style="padding: 10px;">广州市顺风物流有限公司</td>
                                         <td style="padding: 10px;">2023-12-03</td>
                                         <td style="padding: 10px;">文件费</td>
                                         <td style="padding: 10px;">CNY</td>
                                         <td style="padding: 10px;">1</td>
                                         <td style="padding: 10px;">50.00</td>
                                         <td style="padding: 10px;">50.00</td>
                                         <td style="padding: 10px;">50.00</td>
                                         <td style="padding: 10px;">50.00</td>
                                         <td style="padding: 10px;">50.00</td>
                                         <td style="padding: 10px;">2023-12-03</td>
                                         <td style="padding: 10px;">-</td>
                                         <td style="padding: 10px;">REF123458</td>
                                         <td style="padding: 10px;">-</td>
                                         <td style="padding: 10px;">丰源集团</td>
                                         <td style="padding: 10px;">-</td>
                                    </tr>
                                 </tbody>
                             </table>
                         </div>
                    </div>
                </div>
            </div>`;

        } else if (activeTab === '结算设置') {
            document.querySelector('.page-content').innerHTML = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <div style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: flex-end; background: white;">
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                            <i data-lucide="save" style="width: 14px; height: 14px;"></i> 保存
                        </button>
                    </div>
                    <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #334155; cursor: pointer;">
                            <input type="checkbox" style="width: 16px; height: 16px; border: 1px solid #cbd5e1; border-radius: 4px;">
                            全业态工作单的应付费用需要经过付款申请审核通过后才能进行核销
                        </label>
                         <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #334155; cursor: pointer;">
                            <input type="checkbox" style="width: 16px; height: 16px; border: 1px solid #cbd5e1; border-radius: 4px;">
                            费用单的费用需要经过费用申请审核通过后才能进行核销
                        </label>
                    </div>
                </div>`;

        } else if (activeTab === '账户充值') {
            mainContent = `
                <!-- Recharge Container -->
                <div class="recharge-container">
                    <!-- Left Panel -->
                    <div class="left-panel">
                        <!-- User Info Card -->
                        <div class="info-card">
                            <div class="card-header">
                                <h3>账户信息</h3>
                                <i data-lucide="user" style="color: #4a9eff; width: 24px; height: 24px;"></i>
                            </div>
                            <div class="balance-display">
                                <div class="balance-label">当前余额</div>
                                <div class="balance-amount">¥8,450.00</div>
                                <div class="balance-label">人民币</div>
                            </div>
                            <div class="user-details">
                                <div class="detail-item">
                                    <h4>用户ID</h4>
                                    <p>ERP-2023-0582</p>
                                </div>
                                <div class="detail-item">
                                    <h4>公司名称</h4>
                                    <p>创新科技有限公司</p>
                                </div>
                                <div class="detail-item">
                                    <h4>账户等级</h4>
                                    <p>VIP 2级</p>
                                </div>
                                <div class="detail-item">
                                    <h4>最后充值</h4>
                                    <p>2023-10-15</p>
                                </div>
                            </div>
                        </div>

                        <!-- Recent Records -->
                        <div class="recent-records">
                            <div class="card-header">
                                <h3>最近流水记录</h3>
                                <i data-lucide="history" style="color: #4a9eff; width: 20px; height: 20px;"></i>
                            </div>
                            <div class="records-list">
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount" style="color: #ef4444;">-¥2,000.00</div>
                                        <div class="record-date">整车运输</div>
                                    </div>
                                    <div class="record-date">2025-12-29</div>
                                </div>
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">¥2,000.00</div>
                                        <div class="record-date">支付宝充值</div>
                                    </div>
                                    <div class="record-date">2023-10-15</div>
                                </div>
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">¥1,500.00</div>
                                        <div class="record-date">微信支付</div>
                                    </div>
                                    <div class="record-date">2023-09-28</div>
                                </div>
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">¥3,000.00</div>
                                        <div class="record-date">银行转账</div>
                                    </div>
                                    <div class="record-date">2023-09-10</div>
                                </div>
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">¥1,000.00</div>
                                        <div class="record-date">支付宝充值</div>
                                    </div>
                                    <div class="record-date">2023-08-25</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Panel -->
                    <div class="recharge-panel">
                        <!-- Steps -->
                        <div class="step-indicator">
                            <div class="step active">
                                <div class="step-circle">1</div>
                                <div class="step-text">选择金额</div>
                            </div>
                            <div class="step">
                                <div class="step-circle">2</div>
                                <div class="step-text">选择支付方式</div>
                            </div>
                            <div class="step">
                                <div class="step-circle">3</div>
                                <div class="step-text">确认支付</div>
                            </div>
                        </div>

                        <!-- Amount Selection -->
                        <div class="amount-selection">
                            <h3>选择充值金额</h3>
                            <div class="amount-options">
                                <div class="amount-option" data-amount="100">
                                    <div class="amount-value">¥100</div>
                                    <div class="amount-note">普通用户</div>
                                </div>
                                <div class="amount-option" data-amount="500">
                                    <div class="amount-value">¥500</div>
                                    <div class="amount-note">赠送¥10</div>
                                </div>
                                <div class="amount-option selected" data-amount="1000">
                                    <div class="amount-value">¥1,000</div>
                                    <div class="amount-note">赠送¥30</div>
                                </div>
                                <div class="amount-option" data-amount="2000">
                                    <div class="amount-value">¥2,000</div>
                                    <div class="amount-note">赠送¥60</div>
                                </div>
                                <div class="amount-option" data-amount="5000">
                                    <div class="amount-value">¥5,000</div>
                                    <div class="amount-note">赠送¥150</div>
                                </div>
                                <div class="amount-option" data-amount="10000">
                                    <div class="amount-value">¥10,000</div>
                                    <div class="amount-note">赠送¥300</div>
                                </div>
                            </div>
                            <div class="custom-amount">
                                <h4>自定义金额</h4>
                                <input type="number" id="customAmount" placeholder="请输入充值金额（最低100元）" min="100" step="100">
                            </div>
                        </div>

                        <!-- Payment Methods -->
                        <div class="payment-methods">
                            <h3>选择支付方式</h3>
                            <div class="payment-options">
                                <div class="payment-option selected" data-method="alipay">
                                    <div class="payment-icon alipay">
                                        <i data-lucide="scan-line"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>支付宝</h4>
                                        <p>推荐使用，即时到账</p>
                                    </div>
                                </div>
                                <div class="payment-option" data-method="wechat">
                                    <div class="payment-icon wechat">
                                        <i data-lucide="message-circle"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>微信支付</h4>
                                        <p>扫码支付，安全快捷</p>
                                    </div>
                                </div>
                                <div class="payment-option" data-method="bank">
                                    <div class="payment-icon bank">
                                        <i data-lucide="landmark"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>银行转账</h4>
                                        <p>下载导入模板对公账户，1-3工作日到账</p>
                                    </div>
                                </div>
                                <div class="payment-option" data-method="other">
                                    <div class="payment-icon other">
                                        <i data-lucide="credit-card"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>其他支付</h4>
                                        <p>银联、PayPal等</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="action-buttons">
                            <button class="btn btn-secondary" id="cancelBtn">
                                <i data-lucide="x" style="width: 16px; height: 16px;"></i> 取消
                            </button>
                            <button class="btn btn-primary" id="nextBtn">
                                下一步<i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Payment Modal -->
                <div class="modal" id="paymentModal">
                    <div class="modal-content-custom">
                        <div class="modal-header-custom">
                            <h3>支付宝支付</h3>
                            <button class="close-modal-btn" id="closeModal">&times;</button>
                        </div>
                        <div class="payment-qr">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://alipay.com/pay?amount=1000" alt="支付宝支付二维码">
                            <p>请使用支付宝扫描二维码完成支付</p>
                            <p>支付金额：<strong>¥1,000.00</strong></p>
                        </div>
                        <div class="action-buttons">
                            <button class="btn btn-secondary" id="cancelPayment">取消支付</button>
                            <button class="btn btn-success" id="confirmPayment">已完成支付</button>
                        </div>
                    </div>
                </div>

                <!-- Success Modal -->
                <div class="modal" id="successModal">
                    <div class="modal-content-custom">
                        <div class="modal-header-custom">
                            <h3>充值成功</h3>
                            <button class="close-modal-btn" id="closeSuccessModal">&times;</button>
                        </div>
                        <div class="success-message">
                            <div class="success-icon">
                                <i data-lucide="check" style="width: 40px; height: 40px;"></i>
                            </div>
                            <h3>充值成功！</h3>
                            <p>充值金额：<strong>¥1,000.00</strong></p>
                            <p>赠送金额：<strong>¥30.00</strong></p>
                            <p>到账金额：<strong>¥1,030.00</strong></p>
                            <p style="margin-top: 20px; color: #64748b;">您的账户余额已更新</p>
                        </div>
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="backToRecharge">返回充值页面</button>
                            <button class="btn btn-success" id="viewBalance">查看账户余额</button>
                        </div>
                    </div>
                </div>`;

        } else {
            document.querySelector('.page-content').innerHTML = `
                    <div style="background: white; padding: 2rem; border-radius: 8px; border: 1px solid #e2e8f0; height: 100%;">
                <h2 style="color: #1e293b; margin-bottom: 1rem;">${activeTab} Content</h2>
                <p style="color: #64748b;">This is a demonstration of the ${activeTab} page view.</p>
                </div>`;
        }

        if (mainContent) {
            const showSidebar = !['业务员成本明细', '代收代付明细', '开票费用配置', '红字申请确认单', '结算单位', '银行收款流水', '银行付款流水', '银企直连配置', '接收账单', '结算设置', '账户充值', '后台管理'].includes(activeTab);
            let contentHTML = '';
            if (showSidebar) {
                contentHTML = `
                <div class="statement-container">
                    <div class="customer-sidebar">
                        <div class="sidebar-header">客户列表</div>
                        <div class="sidebar-search">
                            <div class="search-input-group">
                                <input type="text" placeholder="请输入">
                                <i data-lucide="search" class="search-icon"></i>
                            </div>
                            <button class="more-btn" style="white-space: nowrap;">更多</button>
                        </div>
                        <div class="customer-list">
                            <div class="customer-item active" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; width: 100%;">
                                <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">全部 (94)</span>
                            </div>
                            ${customers.map(c => `
                                <div class="customer-item" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; width: 100%;">
                                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.name} (${c.count})</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ${mainContent}
                </div>`;
            } else {
                contentHTML = `
                <div class="statement-container">
                    ${mainContent}
                </div>`;
            }
            document.querySelector('.page-content').innerHTML = contentHTML;
        }

        lucide.createIcons();

        if (activeTab === '账户充值') {
            if (typeof initRechargePage === 'function') {
                initRechargePage();
            }
        }

        if (activeTab === '费用明细') {
            updateGenerateBillButtonState();
        }

        if (activeTab === '应收明细') {
            // updateReceivablesCreateBillButtonState(); // Logic removed as per user request to make it permanently enabled
            updateReceivablesGenerateBillButtonState();
        }

        if (activeTab === '客户账单') {
            // updateCustomerBillCreateButtonState(); // Logic removed as per user request to make it permanently enabled
        }

        if (activeTab === '应付明细') {
            updatePayablesGenerateBillButtonState();
        }

        if (activeTab === '后台管理') {
            // Attach listeners for Backend Recharge Modal
            const rechargeBtns = document.querySelectorAll('.btn-recharge');
            const modal = document.getElementById('backend-recharge-modal-v2');

            window.closeBackendRechargeModal = function () {
                if (modal) {
                    modal.style.display = 'none'; // Using style display for simplicity or class toggle
                    modal.classList.add('hidden');
                }
            };

            rechargeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const name = btn.getAttribute('data-name');
                    const id = btn.getAttribute('data-id');
                    const company = btn.getAttribute('data-company');
                    const balance = btn.getAttribute('data-balance');

                    if (modal) {
                        modal.style.display = 'flex';
                        modal.classList.remove('hidden');

                        // Store specific current row elements to update later
                        window.currentRowBalanceElement = btn.closest('tr').querySelector('td:nth-child(3)');
                        window.currentUserBalanceRaw = parseFloat(balance.replace(/,/g, ''));

                        document.getElementById('modal-user-name').textContent = name;
                        document.getElementById('modal-user-id').textContent = id;
                        document.getElementById('modal-user-company').textContent = company;
                        document.getElementById('modal-user-balance').textContent = '¥' + balance;
                    }
                });
            });

            window.confirmBackendRecharge = function () {
                const amountInput = document.getElementById('recharge-amount-input');
                const amount = parseFloat(amountInput.value);

                if (isNaN(amount) || amount <= 0) {
                    alert('请输入有效的充值金额');
                    return;
                }

                if (window.currentRowBalanceElement) {
                    const newBalance = window.currentUserBalanceRaw + amount;
                    // Format number with commas
                    const formattedBalance = newBalance.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }); // Assuming integer display based on previous
                    // Or strictly match existing format which seems to have comma but maybe no decimals based on "¥10,450"
                    // Let's safe bet check widely. Actually the example was "¥8,450". 
                    // Wait, if I look at my read file, it was ¥8,450. NO decimals.
                    window.currentRowBalanceElement.textContent = '¥' + newBalance.toLocaleString();

                    // Update data attribute on the button itself so next time it opens it has new balance
                    const btn = window.currentRowBalanceElement.parentElement.querySelector('.btn-recharge');
                    if (btn) {
                        btn.setAttribute('data-balance', newBalance.toLocaleString());
                    }
                }

                closeBackendRechargeModal();
                // Optional: Show success message
                // alert('充值成功');
            };

            // Account Details Modal Logic
            const detailsBtns = document.querySelectorAll('.btn-view-details');

            // Assuming the eye icon buttons are part of the table rows and need the class 'btn-view-details'.
            // This change is made by adding a placeholder for where such buttons would be generated,
            // as the actual HTML for the table rows is not present in the provided content.
            // If the table rows are dynamically generated, ensure the generation logic adds this class.
            // Example of how such a button might look in HTML:
            // <button class="btn-icon btn-view-details" title="查看详情"><i data-lucide="eye"></i></button>

            const detailsModal = document.getElementById('backend-account-details-modal');

            window.closeBackendDetailsModal = function () {
                if (detailsModal) {
                    detailsModal.style.display = 'none';
                    detailsModal.classList.add('hidden');
                }
            };

            window.switchToRechargeFromDetails = function () {
                closeBackendDetailsModal();
                // We need to trigger the recharge modal for the current user.
                // We stored the context in window.currentDetailsContext when opening details.
                if (window.currentDetailsContext) {
                    const { btn } = window.currentDetailsContext;
                    // Find the recharge button for this row
                    const rechargeBtn = btn.closest('tr').querySelector('.btn-recharge');
                    if (rechargeBtn) {
                        rechargeBtn.click();
                    }
                }
            };

            detailsBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tr = btn.closest('tr');
                    // Scrape data from the row or the sibling recharge button
                    const rechargeBtn = tr.querySelector('.btn-recharge');
                    const name = rechargeBtn.getAttribute('data-name');
                    const id = rechargeBtn.getAttribute('data-id');
                    const company = rechargeBtn.getAttribute('data-company');
                    // For balance, we should get the current live text content as it might have been updated
                    const balanceText = tr.querySelector('td:nth-child(3)').textContent.trim();

                    window.currentDetailsContext = { btn };

                    document.getElementById('details-user-avatar').textContent = name.charAt(0);
                    document.getElementById('details-user-name').textContent = name;
                    document.getElementById('details-user-id').textContent = id;
                    document.getElementById('details-user-company').textContent = company;
                    document.getElementById('details-user-balance').textContent = balanceText;

                    // Inject Mock Data
                    const mockData = [
                        { time: '2023-10-15 14:30', type: '充值', amount: '+¥2,000', method: '支付宝', note: '余额充值', color: '#10b981' },
                        { time: '2023-09-28 10:15', type: '充值', amount: '+¥1,500', method: '微信支付', note: '账户充值', color: '#10b981' },
                        { time: '2023-09-10 16:45', type: '充值', amount: '+¥3,000', method: '银行转账', note: '对公账户转账', color: '#10b981' },
                        { time: '2023-08-25 09:20', type: '充值', amount: '+¥1,000', method: '支付宝', note: '余额充值', color: '#10b981' },
                        { time: '2023-08-05 11:30', type: '消费', amount: '¥850', method: '系统扣费', note: '月度服务费', color: '#ef4444' }
                    ];

                    const tbody = document.getElementById('details-transaction-list');
                    tbody.innerHTML = mockData.map(item => `
                       <tr style="border-bottom: 1px solid #f1f5f9;">
                           <td style="padding: 12px;">${item.time}</td>
                           <td style="padding: 12px;">${item.type}</td>
                           <td style="padding: 12px; font-weight: 600; color: ${item.color};">${item.amount}</td>
                           <td style="padding: 12px;">${item.method}</td>
                           <td style="padding: 12px; color: #64748b;">${item.note}</td>
                       </tr>
                   `).join('');

                    if (detailsModal) {
                        detailsModal.style.display = 'flex';
                        detailsModal.classList.remove('hidden');
                    }
                });
            });
        }

        // Add click listeners for customer selection
        if (activeTab === '客户账单' || activeTab === '对账单') {
            const customerItems = document.querySelectorAll('.customer-item');
            customerItems.forEach(item => {
                item.addEventListener('click', () => {
                    customerItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');

                    // Update main content based on selection (optional but good for UX)
                    // const name = item.querySelector('span').textContent;
                    // document.querySelector('.statement-main').innerHTML = ... (removed)

                });
            });

            // Modal Open Logic
            const moreBtn = document.querySelector('.more-btn');
            const modal = document.getElementById('statement-modal');
            if (moreBtn && modal) {
                moreBtn.addEventListener('click', () => {
                    modal.classList.add('show');
                });
            }
        }
    }

}

function closeTab(title) {
    openTabs = openTabs.filter(t => t !== title);
    if (openTabs.length > 0) {
        renderTabs(openTabs[openTabs.length - 1]);
    } else {
        document.querySelector('.sub-sidebar').classList.remove('hidden');
        document.getElementById('menu-mask').classList.add('show');
        document.getElementById('tabs-bar').style.display = 'none';
        document.querySelector('.page-content').innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();

    // Add interactivity to sidebar
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Ensure sub-sidebar is shown when clicking primary nav
            document.querySelector('.sub-sidebar').classList.remove('hidden');
            document.getElementById('menu-mask').classList.add('show');

            // In a real app, this would change the content
            if (item.getAttribute('data-title') === '结算') {
                renderMenu();
            } else {
                document.getElementById('secondary-content').innerHTML = `
                <div style="padding: 2rem; color: #64748b; font-size: 1.2rem;">
                    ${item.getAttribute('data-title')} content loading...
                </div>
                `;
            }
        });
    });

    // Mask Click to close
    document.getElementById('menu-mask').addEventListener('click', () => {
        document.querySelector('.sub-sidebar').classList.add('hidden');
        document.getElementById('menu-mask').classList.remove('show');
    });

    // Search Dropdown Logic
    const searchDropdown = document.getElementById('search-dropdown');
    const selectedTypeText = document.getElementById('selected-type');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    if (searchDropdown) {
        searchDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            searchDropdown.classList.toggle('open');
        });

        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const value = item.getAttribute('data-value');
                selectedTypeText.textContent = value;

                // Update active state
                dropdownItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                searchDropdown.classList.remove('open');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            searchDropdown.classList.remove('open');
        });
    }
    // Modal Close Logic
    const statementModal = document.getElementById('statement-modal');
    const closeModal = document.getElementById('close-modal');

    if (closeModal && statementModal) {
        closeModal.addEventListener('click', () => {
            statementModal.classList.remove('show');
        });

        statementModal.addEventListener('click', (e) => {
            if (e.target === statementModal) {
                statementModal.classList.remove('show');
            }
        });
    }
});
// Custom Dropdown Logic
document.addEventListener('click', function (e) {
    // Check if clicked inside a relative-container (dropdown trigger)
    const container = e.target.closest('.relative-container');

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
        if (!container || !container.contains(menu)) {
            menu.classList.add('hidden');
        }
    });

    if (container) {
        const menu = container.querySelector('.dropdown-menu-custom');
        if (menu) {
            // If clicking the item itself, don't toggle immediately (handled by selectOption)
            // But if clicking the header/box
            if (!e.target.classList.contains('dropdown-item-custom')) {
                menu.classList.toggle('hidden');
            }
        }
    }
});

function selectOption(spanId, value) {
    const span = document.getElementById(spanId);
    if (span) {
        span.textContent = value;
        // Close menu (handled by click listener or explicitly here)
        const menu = span.closest('.relative-container').querySelector('.dropdown-menu-custom');
        if (menu) menu.classList.add('hidden');
    }
}

// Modal Interaction Logic
document.addEventListener('DOMContentLoaded', () => {
    // Close Modal Button
    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const modal = document.getElementById('statement-modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // Toggle Filters Button
    const toggleBtn = document.getElementById('toggle-filter-btn');
    const expandableArea = document.getElementById('expandable-filter-area');

    if (toggleBtn && expandableArea) {
        toggleBtn.addEventListener('click', () => {
            expandableArea.classList.toggle('collapsed');

            const isCollapsed = expandableArea.classList.contains('collapsed');

            // Simple text toggle, keep icon if possible
            if (isCollapsed) {
                toggleBtn.innerHTML = '更多(2) <i data-lucide="chevron-down"></i>';
            } else {
                toggleBtn.innerHTML = '收起 <i data-lucide="chevron-up"></i>';
            }
            if (window.lucide) window.lucide.createIcons();
        });
    }
});

// Function to handle internal tab switching
function switchInternalTab(tabType) {
    const tabs = document.querySelectorAll('.internal-tabs .internal-tab');
    const reminderContent = document.getElementById('reconciliation-reminder-content');
    const listContent = document.getElementById('statement-list-content');
    const reminderTable = document.getElementById('reminder-table-wrapper');
    const listTable = document.getElementById('statement-list-table-wrapper');

    if (tabType === 'reminder') {
        if (tabs.length > 0) {
            tabs[0].classList.add('active');
            tabs[1].classList.remove('active');
        }

        if (reminderContent) reminderContent.style.display = 'block';
        if (listContent) listContent.style.display = 'none';

        if (reminderTable) reminderTable.style.display = 'block';
        if (listTable) listTable.style.display = 'none';

    } else if (tabType === 'list') {
        if (tabs.length > 0) {
            tabs[0].classList.remove('active');
            tabs[1].classList.add('active');
        }

        if (reminderContent) reminderContent.style.display = 'none';
        if (listContent) listContent.style.display = 'block';

        if (reminderTable) reminderTable.style.display = 'none';
        if (listTable) listTable.style.display = 'block';
    }

    // Refresh icons since we made HTML changes could potentially affect lucide (newly visible)
    setTimeout(() => {
        if (window.lucide) window.lucide.createIcons();
    }, 50);
}

// Function to show the "New Receipt" (新建收款) modal
function showNewReceiptModal() {
    // Create modal overlay if it doesn't exist
    let modal = document.getElementById('receipt-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'receipt-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
                <div class="modal-container" style="width: 95vw; max-width: 1600px; height: 95vh; display: flex; flex-direction: column;">
        <!-- Header -->
        <div class="modal-header" style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 0 16px; height: 48px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.85rem; color: #64748b;">核销单号:</span>
                <span style="background: #4f46e5; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">收</span>
                <span style="font-weight: 600; font-size: 0.85rem;">自动生成</span>
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="primary-btn" style="background: #4f46e5; height: 28px; padding: 0 12px; font-size: 0.75rem; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px;"><i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询</button>
                <button class="primary-btn" style="background: #4f46e5; height: 28px; padding: 0 12px; font-size: 0.75rem; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px;"><i data-lucide="save" style="width: 14px; height: 14px;"></i> 保存</button>
                <button class="ghost-btn" onclick="closeReceiptModal()" style="border: 1px solid #e2e8f0; height: 28px; padding: 0 12px; font-size: 0.75rem; border-radius: 4px; background: white; cursor: pointer;">返回</button>
            </div>
        </div>

        <div class="modal-content" style="flex-grow: 1; display: flex; flex-direction: column; overflow: hidden; background: #fff; padding: 12px;">
            <!-- Top Panels -->
            <div style="display: flex; gap: 12px; height: 200px; margin-bottom: 12px;">
                <!-- Basic Info -->
                <div style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="width: 60px; font-size: 0.75rem; color: #64748b;">结算单位</label>
                        <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                            <input type="text" placeholder="请选择" style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <span style="background: #f1f5f9; padding: 2px 4px; border-radius: 2px; font-size: 0.7rem; color: #64748b;">NL</span>
                        <span style="background: #f1f5f9; padding: 2px 4px; border-radius: 2px; font-size: 0.7rem; color: #64748b;">月结</span>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">资金类型</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <span style="font-size: 0.75rem;">银行存款</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                            </div>
                        </div>
                        <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">票据类型</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <span style="font-size: 0.75rem; color: #cbd5e1;">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px; flex-grow: 1;">
                        <label style="width: 60px; font-size: 0.75rem; color: #64748b; margin-top: 4px;">摘要</label>
                        <textarea placeholder="请输入" style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 8px; font-size: 0.75rem; outline: none; height: 100%; resize: none;"></textarea>
                    </div>
                </div>

                <!-- Bank Transaction Flow -->
                <div style="flex: 2; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; flex-direction: column;">
                    <div style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 4px 12px; font-size: 0.75rem; text-align: center; color: #64748b;">银行交易流水</div>
                    <div style="padding: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">银行账户</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <span style="font-size: 0.75rem; color: #cbd5e1;">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">收付时间</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <input type="text" value="2025-12-27" style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">流水号</label>
                            <input type="text" placeholder="请输入" style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none;">
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">支票号</label>
                            <input type="text" placeholder="请输入" style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none;">
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">收付金额</label>
                            <input type="text" value="0.00" style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none; text-align: right;">
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">可销余额</label>
                            <input type="text" value="0.00" style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none; background: #fbfcfe; text-align: right;">
                        </div>
                        <div style="grid-column: span 2; display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">其它费用</label>
                            <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px; width: 200px;">
                                <input type="text" value="0" style="border: none; outline: none; flex: 1; font-size: 0.75rem; text-align: right;">
                                <i data-lucide="calculator" style="width: 14px; height: 14px; color: #94a3b8; margin-left: 8px; cursor: pointer;"></i>
                            </div>
                            <i data-lucide="help-circle" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                    </div>
                </div>

                <!-- Clearance Strategy -->
                <div style="flex: 1.5; border: 1px solid #e2e8f0; border-radius: 4px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; gap: 16px; font-size: 0.75rem;">
                        <label style="display: flex; align-items: center; gap: 4px; color: #64748b; cursor: pointer;"><input type="radio" name="clear_type"> 按参考兑换率核销</label>
                        <label style="display: flex; align-items: center; gap: 4px; color: #64748b; cursor: pointer;"><input type="radio" name="clear_type" checked> 按账单兑换率核销</label>
                    </div>
                    <div style="flex-grow: 1; border: 1px solid #f1f5f9; background: #f8fafc; position: relative; display: flex; flex-direction: column;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <thead style="background: #f1f5f9; color: #64748b;">
                                <tr>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">原币</th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">核销金额</th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">折算符</th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">参考兑换率</th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">折合(本币)</th>
                                </tr>
                            </thead>
                        </table>
                        <div style="flex-grow: 1; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="search" style="width: 48px; height: 48px; color: #e2e8f0;"></i>
                        </div>
                        <div style="background: #fff; padding: 4px 12px; border-top: 1px solid #e2e8f0; font-size: 0.7rem; color: #64748b; display: flex; justify-content: space-between;">
                            <span>合计</span>
                            <span>0.00</span>
                        </div>
                    </div>
                </div>

                <!-- Attachment Area -->
                <div style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; flex-direction: column;">
                    <div style="display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                        <div style="padding: 4px 12px; font-size: 0.75rem; border-right: 1px solid #e2e8f0; border-bottom: 2px solid #4f46e5; color: #4f46e5; cursor: pointer;">水单附件(0)</div>
                        <div style="padding: 4px 12px; font-size: 0.75rem; color: #64748b; cursor: pointer;">发票附件(0)</div>
                    </div>
                    <div style="flex-grow: 1; padding: 12px; display: flex; align-items: center; justify-content: center;">
                        <div style="text-align: center; border: 1px dashed #cbd5e1; background: #eff6ff; border-radius: 4px; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer;">
                            <i data-lucide="paperclip" style="width: 14px; height: 14px; color: #4f46e5; margin-bottom: 8px;"></i>
                             <div style="font-size: 0.75rem; color: #4f46e5;">附件</div>
                            <i data-lucide="upload-cloud" style="width: 24px; height: 24px; color: #cbd5e1; margin-top: 12px;"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Table Section Header -->
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 0 4px;">
                <div style="display: flex; align-items: center; gap: 8px; border: 1px solid #e2e8f0; border-radius: 16px; padding: 2px 12px; font-size: 0.75rem;">
                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="bottom_toggle"> 应收</label>
                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="bottom_toggle"> 应付</label>
                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="bottom_toggle" checked> 收/付</label>
                </div>
                <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; align-items: center; height: 28px; width: 280px;">
                    <input type="text" placeholder="工作号/参考号/提单号/柜号/发票号/核销单号" style="border: none; outline: none; flex: 1; padding: 0 12px; font-size: 0.75rem;">
                </div>
                <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; height: 28px;">
                    <div style="padding: 0 8px; border-right: 1px solid #e2e8f0; font-size: 0.75rem; background: #f8fafc; border-radius: 4px 0 0 4px; height: 100%; display: flex; align-items: center;">对账单号 <i data-lucide="chevron-down" style="width: 12px; height: 12px; margin-left: 4px;"></i></div>
                    <input type="text" placeholder="请输入" style="border: none; outline: none; padding: 0 8px; font-size: 0.75rem; width: 120px;">
                </div>
                <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; height: 28px; width: 150px; padding: 0 8px;">
                    <label style="font-size: 0.75rem; color: #64748b; margin-right: 8px;">费用币制</label>
                    <span style="font-size: 0.75rem; color: #cbd5e1;">请选择</span>
                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                </div>
                <button class="primary-btn" style="background: #4f46e5; height: 28px; padding: 0 12px; font-size: 0.75rem; border: none; border-radius: 4px; color: white;"><i data-lucide="search" style="width: 14px; height: 14px;"></i> 查询</button>
                <div style="display: flex; align-items: center; gap: 4px; color: #4f46e5; cursor: pointer; font-size: 0.75rem;">
                    <span>更多(0)</span>
                    <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                </div>
                <div style="margin-left: auto; display: flex; align-items: center; gap: 12px;">
                    <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #64748b;"><input type="checkbox"> 仅显示已勾选</label>
                    <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #64748b;"><input type="radio" checked> 全部</label>
                    <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #64748b;"><input type="radio"> 按费用明细核销</label>
                    <button style="border: 1px solid #4f46e5; color: #4f46e5; background: white; height: 28px; padding: 0 12px; font-size: 0.75rem; border-radius: 4px; cursor: pointer;">自动分配</button>
                    <button style="border: 1px solid #e2e8f0; color: #64748b; background: white; height: 28px; padding: 0 12px; font-size: 0.75rem; border-radius: 4px; cursor: pointer;">重置</button>
                </div>
            </div>

            <!-- Table -->
            <div style="flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 4px; overflow: auto; background: #fff;">
                <table style="width: 100%; border-collapse: collapse; min-width: 2500px; font-size: 0.75rem;">
                    <thead style="background: #f8fafc; color: #1e293b; position: sticky; top: 0; z-index: 10;">
                        <tr>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center; width: 40px;">#</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center; width: 40px;"><input type="checkbox"></th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">工作单号</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">发票号</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">账单号</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">计费日期</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">费用</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">原币</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">原币剩余金额</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right; background: #fefce8; border-left: 2px solid #fbbf24;">核销金额(原币)</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center; background: #fefce8;">折算符</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right; background: #fefce8;">汇率</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right; background: #fefce8; border-right: 2px solid #fbbf24;">核销金额(折合)</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;">账单币种</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;">账单折算符</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">账单汇率</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">待付余额</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">付款单据流水号</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">汇率收益</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">计提坏账</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">坏账</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">计提其他费用</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">其他费用</th>
                            <th style="width: 40px; text-align: center;"><i data-lucide="settings" style="width: 14px; height: 14px; color: #64748b;"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Mock row -->
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 8px; text-align: center;">1</td>
                            <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                            <td style="padding: 8px;">YO231201-001</td>
                            <td style="padding: 8px;">-</td>
                            <td style="padding: 8px;">ST231201-001</td>
                            <td style="padding: 8px;">2023-12-01</td>
                            <td style="padding: 8px;">货款</td>
                            <td style="padding: 8px; text-align: right;">1,200.00</td>
                            <td style="padding: 8px; text-align: right;">1,200.00</td>
                            <td style="padding: 8px; text-align: right; background: #fffbeb;">0.00</td>
                            <td style="padding: 8px; text-align: center; background: #fffbeb;">*</td>
                            <td style="padding: 8px; text-align: right; background: #fffbeb;">1.00</td>
                            <td style="padding: 8px; text-align: right; background: #fffbeb;">0.00</td>
                            <td style="padding: 8px; text-align: center;">CNY</td>
                            <td style="padding: 8px; text-align: center;">*</td>
                            <td style="padding: 8px; text-align: right;">1.00</td>
                            <td style="padding: 8px; text-align: right;">1,200.00</td>
                            <td style="padding: 8px;">-</td>
                            <td style="padding: 8px; text-align: right;">0.00</td>
                            <td style="padding: 8px; text-align: right;">0.00</td>
                            <td style="padding: 8px; text-align: right;">0.00</td>
                            <td style="padding: 8px; text-align: right;">0.00</td>
                            <td style="padding: 8px; text-align: right;">0.00</td>
                            <td style="padding: 8px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8;"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
                `;

    modal.classList.add('show');
    if (window.lucide) window.lucide.createIcons();
}

// Function to close the "New Receipt" modal
function closeReceiptModal() {
    const modal = document.getElementById('receipt-modal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Helper function for Bank-Enterprise Direct Config tab switching
function toggleBankConfigTab(tab) {
    const tabAccount = document.getElementById('tab-bank-account');
    const tabParams = document.getElementById('tab-params-config');
    const viewAccount = document.getElementById('bank-account-view');
    const viewParams = document.getElementById('parameter-config-view');

    if (tab === 'account') {
        tabAccount.classList.add('active');
        tabAccount.style.color = '#4f46e5';
        tabAccount.style.borderBottom = '2px solid #4f46e5';

        tabParams.classList.remove('active');
        tabParams.style.color = '#475569';
        tabParams.style.borderBottom = 'none';

        viewAccount.style.display = 'flex';
        viewParams.style.display = 'none';
    } else {
        tabParams.classList.add('active');
        tabParams.style.color = '#4f46e5';
        tabParams.style.borderBottom = '2px solid #4f46e5';

        tabAccount.classList.remove('active');
        tabAccount.style.color = '#475569';
        tabAccount.style.borderBottom = 'none';

        viewParams.style.display = 'flex';
        viewAccount.style.display = 'none';
    }
}

/* Account Recharge Page Logic */
function initRechargePage() {
    const amountOptions = document.querySelectorAll('.amount-option');
    const customAmountInput = document.getElementById('customAmount');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const nextBtn = document.getElementById('nextBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const paymentModal = document.getElementById('paymentModal');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    const cancelPaymentBtn = document.getElementById('cancelPayment');
    const confirmPaymentBtn = document.getElementById('confirmPayment');
    const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
    const backToRechargeBtn = document.getElementById('backToRecharge');
    const viewBalanceBtn = document.getElementById('viewBalance');
    const steps = document.querySelectorAll('.step');

    let selectedAmount = 1000;
    let selectedPaymentMethod = 'alipay';

    // Helper functions
    function updateAmountSelection(amount) {
        selectedAmount = amount;
        amountOptions.forEach(option => {
            const optionAmount = parseInt(option.getAttribute('data-amount'));
            if (optionAmount === amount) option.classList.add('selected');
            else option.classList.remove('selected');
        });
        const isPresetAmount = Array.from(amountOptions).some(option => parseInt(option.getAttribute('data-amount')) === amount);
        if (!isPresetAmount) amountOptions.forEach(option => option.classList.remove('selected'));
    }

    function updatePaymentSelection(method) {
        selectedPaymentMethod = method;
        paymentOptions.forEach(option => {
            if (option.getAttribute('data-method') === method) option.classList.add('selected');
            else option.classList.remove('selected');
        });
    }

    function resetSelections() {
        updateAmountSelection(1000);
        if (customAmountInput) customAmountInput.value = '';
        updatePaymentSelection('alipay');
        steps.forEach(step => step.classList.remove('active', 'completed'));
        if (steps[0]) steps[0].classList.add('active');
        if (nextBtn) {
            nextBtn.innerHTML = '下一步 <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>';
            nextBtn.id = 'nextBtn';
        }
        lucide.createIcons();
    }

    // Event Listeners
    if (amountOptions) amountOptions.forEach(option => {
        option.addEventListener('click', function () {
            const amount = parseInt(this.getAttribute('data-amount'));
            updateAmountSelection(amount);
            if (customAmountInput) customAmountInput.value = '';
        });
    });

    if (customAmountInput) customAmountInput.addEventListener('input', function () {
        if (this.value) {
            const amount = parseInt(this.value);
            if (amount >= 100) updateAmountSelection(amount);
        }
    });

    if (paymentOptions) paymentOptions.forEach(option => {
        option.addEventListener('click', function () {
            const method = this.getAttribute('data-method');
            updatePaymentSelection(method);
        });
    });

    let currentStep = 1;
    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

        newNextBtn.addEventListener('click', function () {
            if (currentStep === 1) {
                if (selectedAmount < 100) {
                    alert('充值金额不能低于100元');
                    return;
                }

                steps[0].classList.remove('active');
                steps[0].classList.add('completed');
                steps[1].classList.add('active');

                this.innerHTML = '确认支付 <i data-lucide="check" style="width: 16px; height: 16px;"></i>';
                lucide.createIcons();
                currentStep = 2;
            } else if (currentStep === 2) {
                paymentModal.style.display = 'flex';
                // Trigger reflow/animation if needed, but flex is enough here

                const modalHeader = paymentModal.querySelector('.modal-header-custom h3');
                const qrImg = paymentModal.querySelector('.payment-qr img');
                const amountText = paymentModal.querySelector('.payment-qr p:nth-child(3) strong');

                let paymentName = '支付宝';
                if (selectedPaymentMethod === 'wechat') paymentName = '微信';
                else if (selectedPaymentMethod === 'bank') paymentName = '银行转账';
                else if (selectedPaymentMethod === 'other') paymentName = '其他支付';

                modalHeader.textContent = `${paymentName}支付`;
                // Mock QR code
                qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://pay.com/${selectedPaymentMethod}?amount=${selectedAmount}`;
                amountText.textContent = `¥${selectedAmount.toFixed(2)}`;
            }
        });
    }

    if (cancelBtn) cancelBtn.addEventListener('click', function () {
        if (confirm('确定要取消充值吗？')) {
            resetSelections();
            currentStep = 1;
        }
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', () => paymentModal.style.display = 'none');
    if (cancelPaymentBtn) cancelPaymentBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
        resetSelections();
        currentStep = 1;
    });

    if (confirmPaymentBtn) confirmPaymentBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';

        steps[1].classList.remove('active');
        steps[1].classList.add('completed');
        steps[2].classList.add('active');

        setTimeout(() => {
            successModal.style.display = 'flex';
            const rechargeAmount = successModal.querySelector('.success-message p:nth-child(3) strong');
            const bonusAmount = successModal.querySelector('.success-message p:nth-child(4) strong');
            const totalAmount = successModal.querySelector('.success-message p:nth-child(5) strong');

            let bonus = 0;
            if (selectedAmount === 500) bonus = 10;
            else if (selectedAmount === 1000) bonus = 30;
            else if (selectedAmount === 2000) bonus = 80;
            else if (selectedAmount === 5000) bonus = 250;
            else if (selectedAmount === 10000) bonus = 600;

            rechargeAmount.textContent = `¥${selectedAmount.toFixed(2)}`;
            bonusAmount.textContent = `¥${bonus.toFixed(2)}`;
            totalAmount.textContent = `¥${(selectedAmount + bonus).toFixed(2)}`;
        }, 500);
    });

    if (closeSuccessModalBtn) closeSuccessModalBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        resetSelections();
        currentStep = 1;
    });

    if (backToRechargeBtn) backToRechargeBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        resetSelections();
        currentStep = 1;
    });

    if (viewBalanceBtn) viewBalanceBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        resetSelections();
        currentStep = 1;

        const balanceAmount = document.querySelector('.balance-amount');
        if (balanceAmount) {
            const currentBalance = parseFloat(balanceAmount.textContent.replace(/[^0-9.-]+/g, ''));
            const newBalance = currentBalance + selectedAmount + (selectedAmount === 1000 ? 30 : 0);
            balanceAmount.textContent = `¥${newBalance.toFixed(2)}`;
        }

        const recordsList = document.querySelector('.records-list');
        if (recordsList) {
            const newRecord = document.createElement('div');
            newRecord.className = 'record-item';
            const date = new Date();
            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            let paymentMethodText = '支付宝充值';
            if (selectedPaymentMethod === 'wechat') paymentMethodText = '微信支付';
            else if (selectedPaymentMethod === 'bank') paymentMethodText = '银行转账';

            newRecord.innerHTML = `
                <div>
                    <div class="record-amount">¥${selectedAmount.toFixed(2)}</div>
                    <div class="record-date">${paymentMethodText}</div>
                </div>
                <div class="record-date">${formattedDate}</div>
            `;
            recordsList.insertBefore(newRecord, recordsList.firstChild);
        }
    });

    window.onclick = function (event) {
        if (event.target == paymentModal) paymentModal.style.display = 'none';
        if (event.target == successModal) successModal.style.display = 'none';
    }
}

/**
 * Switches between internal tabs (e.g., in the Reconciliation page).
 * @param {string} tab - The identifier of the tab to switch to.
 */
function switchInternalTab(tab) {
    const reminderContent = document.getElementById('reconciliation-reminder-content');
    const listContent = document.getElementById('statement-list-content');
    const reminderTable = document.getElementById('reminder-table-wrapper');
    const listTable = document.getElementById('statement-list-table-wrapper');
    const tabs = document.querySelectorAll('.internal-tab');

    if (tab === 'reminder') {
        if (reminderContent) reminderContent.style.display = 'block';
        if (listContent) listContent.style.display = 'none';
        if (reminderTable) reminderTable.style.display = 'block';
        if (listTable) listTable.style.display = 'none';
        if (tabs[0]) tabs[0].classList.add('active');
        if (tabs[1]) tabs[1].classList.remove('active');
    } else if (tab === 'list') {
        if (reminderContent) reminderContent.style.display = 'none';
        if (listContent) listContent.style.display = 'block';
        if (reminderTable) reminderTable.style.display = 'none';
        if (listTable) listTable.style.display = 'block';
        if (tabs[0]) tabs[0].classList.remove('active');
        if (tabs[1]) tabs[1].classList.add('active');
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

/**
 * Toggles the visibility of expanded filter areas in tabs.
 * @param {HTMLElement} btn - The button/element clicked to toggle.
 */
function toggleTabFilters(btn) {
    const filterArea = btn.closest('.internal-filter-bar') || btn.closest('.filter-area') || btn.closest('.expense-detail-filter-area') || btn.closest('.payables-filter-area');
    if (!filterArea) return;

    const expandableArea = filterArea.querySelector('.expandable-filter-area-tab');
    if (!expandableArea) return;

    const isCollapsed = expandableArea.classList.toggle('collapsed');

    if (isCollapsed) {
        btn.innerHTML = `更多(0) <i data-lucide="chevron-down" style="width: 12px; display: inline;"></i>`;
    } else {
        btn.innerHTML = `收起 <i data-lucide="chevron-up" style="width: 12px; display: inline;"></i>`;
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Global click listener for filter toggles (handles both modal and dynamic tabs)
document.addEventListener('click', (e) => {
    // Handle modal filter toggle
    if (e.target.id === 'toggle-filter-btn' || e.target.closest('#toggle-filter-btn')) {
        const btn = e.target.id === 'toggle-filter-btn' ? e.target : e.target.closest('#toggle-filter-btn');
        const expandableArea = document.getElementById('expandable-filter-area');
        if (expandableArea) {
            const isCollapsed = expandableArea.classList.toggle('collapsed');
            if (isCollapsed) {
                btn.innerHTML = `More(2) <i data-lucide="chevron-down"></i>`;
            } else {
                btn.innerHTML = `Less <i data-lucide="chevron-up"></i>`;
            }
            if (window.lucide) window.lucide.createIcons();
        }
        return;
    }

    // Handle tab filter toggle (using class for delegation if needed, but currently handled via onclick in HTML)
});

/**
 * Deletes selected items from the statement list table.
 */
window.deleteSelectedItems = function () {
    const tableWrapper = document.getElementById('statement-list-table-wrapper');
    if (!tableWrapper || tableWrapper.style.display === 'none') {
        alert('请先切换到列表视图');
        return;
    }

    // Find all checkboxes in the table body that are checked
    const checkboxes = tableWrapper.querySelectorAll('tbody tr td:first-child input[type="checkbox"]:checked');

    if (checkboxes.length === 0) {
        alert('请选择要删除的数据');
        return;
    }

    if (confirm(`确定要删除选中的 ${checkboxes.length} 条数据吗？`)) {
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            if (row) {
                row.remove();
            }
        });

        // Uncheck "select all" if it exists/checked
        const headerCheckbox = tableWrapper.querySelector('thead tr th:first-child input[type="checkbox"]');
        if (headerCheckbox) headerCheckbox.checked = false;
    }
};


/**
 * Shows the Create Statement view and hides the List view.
 */
window.showCreateStatement = function () {
    const listView = document.getElementById('statement-list-view');
    const createView = document.getElementById('statement-create-view');
    const sidebar = document.querySelector('.customer-sidebar');
    if (listView) listView.style.display = 'none';
    if (createView) createView.style.display = 'flex';
    if (sidebar) sidebar.style.display = 'none';
};

/**
 * Hides the Create Statement view and shows the List view.
 */
window.hideCreateStatement = function () {
    const listView = document.getElementById('statement-list-view');
    const createView = document.getElementById('statement-create-view');
    const sidebar = document.querySelector('.customer-sidebar');
    if (listView) listView.style.display = 'flex';
    if (createView) createView.style.display = 'none';
    if (sidebar) sidebar.style.display = 'flex';
};

/**
 * Shows the Pre-write-off Modal.
 */
window.showPreWriteOffModal = function () {
    const modal = document.getElementById('pre-write-off-modal');
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'flex';
        if (window.lucide) window.lucide.createIcons();
    }
};

/**
 * Closes the Pre-write-off Modal.
 */
window.closePreWriteOffModal = function () {
    const modal = document.getElementById('pre-write-off-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
};

/**
 * Updates the state of the "按票生成账单" button based on checkbox selection.
 */
window.updateGenerateBillButtonState = function () {
    const checkboxes = document.querySelectorAll('.expense-row-checkbox:checked');
    const btn = document.getElementById('expense-detail-generate-bill-btn');
    if (btn) {
        if (checkboxes.length > 0) {
            btn.disabled = false;
            btn.style.background = '#4f46e5';
            btn.style.color = 'white';
            btn.style.cursor = 'pointer';
            btn.style.borderColor = '#4f46e5';
        } else {
            btn.disabled = true;
            btn.style.background = '#f1f5f9';
            btn.style.color = '#94a3b8';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = '#e2e8f0';
        }
    }
};

/**
 * Toggles all checkboxes in the expense detail table.
 */
window.toggleAllExpenseCheckboxes = function (master) {
    const checkboxes = document.querySelectorAll('.expense-row-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = master.checked;
    });
    updateGenerateBillButtonState();
};

/**
 * Shows the "Generate Bill" Modal.
 */
window.showGenerateBillModal = function () {
    let modal = document.getElementById('generate-bill-modal');
    if (!modal) {
        // Create modal if it doesn't exist
        modal = document.createElement('div');
        modal.id = 'generate-bill-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-container" style="max-width: 1000px; height: auto; max-height: 90vh;">
                <div class="modal-header">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span>账单信息</span>
                    </div>
                    <i data-lucide="x" class="header-icon" onclick="closeGenerateBillModal()"></i>
                </div>
                <div class="modal-content" style="padding: 24px; gap: 20px;">
                    <!-- Row 1 -->
                    <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.85rem; color: #475569; white-space: nowrap;">结算公司</label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; background: white; height: 32px;">
                                <div class="select-box-inline" style="width: 250px; border: none; height: 100%; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span id="bill-settlement-company">丰源物流有限公司</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div style="display: flex; align-items: center; gap: 4px; padding: 0 8px; border-left: 1px solid #e2e8f0; background: #f8fafc;">
                                    <span style="font-size: 0.75rem; color: #4b5563; font-weight: 600;">NL</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 4px; padding: 0 8px; border-left: 1px solid #e2e8f0; background: #f8fafc;">
                                    <span style="font-size: 0.75rem; color: #4b5563; font-weight: 600;">票结</span>
                                </div>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.85rem; color: #475569; white-space: nowrap;">账单类型</label>
                            <div class="select-box" style="width: 180px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="bill-type">原币</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.85rem; color: #475569; white-space: nowrap;">账单日期</label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; background: white; height: 32px; width: 160px; padding: 0 10px;">
                                <input type="text" value="2025-12-31" style="width: 100%; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Row 2 -->
                    <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 300px;">
                            <label style="font-size: 0.85rem; color: #475569; white-space: nowrap;">抬头</label>
                            <div class="select-box" style="width: 100%; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="bill-header">贝塔测试科技有限公司</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 300px;">
                            <label style="font-size: 0.85rem; color: #475569; white-space: nowrap;">银行账号</label>
                            <div class="select-box" style="width: 100%; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="bill-bank-account">请选择</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="padding: 16px 24px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 12px; background: #fff;">
                    <button class="secondary-btn" onclick="closeGenerateBillModal()" style="height: 32px; padding: 0 20px; border: 1px solid #e2e8f0; background: white; color: #475569; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">取消</button>
                    <button class="primary-btn" onclick="closeGenerateBillModal()" style="height: 32px; padding: 0 20px; border: none; background: #4f46e5; color: white; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">确认</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.classList.add('show');
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
};

/**
 * Closes the "Generate Bill" Modal.
 */
window.closeGenerateBillModal = function () {
    const modal = document.getElementById('generate-bill-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
};

/**
 * Updates the state of the "创建账单" button in Receivables Detail based on checkbox selection.
 */
window.updateReceivablesCreateBillButtonState = function () {
    const checkboxes = document.querySelectorAll('.receivables-row-checkbox:checked');
    const btn = document.getElementById('receivables-create-bill-btn');
    if (btn) {
        if (checkboxes.length > 0) {
            btn.disabled = false;
            btn.style.background = '#4f46e5';
            btn.style.color = 'white';
            btn.style.cursor = 'pointer';
            btn.style.borderColor = '#4f46e5';
        } else {
            btn.disabled = true;
            btn.style.background = '#f1f5f9';
            btn.style.color = '#94a3b8';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = '#e2e8f0';
        }
    }
};

/**
 * Toggles all checkboxes in the receivables detail table.
 */
window.toggleAllReceivablesCheckboxes = function (master) {
    const checkboxes = document.querySelectorAll('.receivables-row-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = master.checked;
    });
    updateReceivablesGenerateBillButtonState();
};

/**
 * Updates the state of the "按票生成账单" button in Receivables Detail based on checkbox selection.
 */
window.updateReceivablesGenerateBillButtonState = function () {
    const checkboxes = document.querySelectorAll('.receivables-row-checkbox:checked');
    const btn = document.getElementById('receivables-generate-bill-btn');
    if (btn) {
        if (checkboxes.length > 0) {
            btn.disabled = false;
            btn.style.background = '#4f46e5';
            btn.style.color = 'white';
            btn.style.cursor = 'pointer';
            btn.style.borderColor = '#4f46e5';
        } else {
            btn.disabled = true;
            btn.style.background = '#f1f5f9';
            btn.style.color = '#94a3b8';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = '#e2e8f0';
        }
    }
};

/**
 * Updates the state of the "创建账单" button in Customer Bill based on checkbox selection.
 */
window.updateCustomerBillCreateButtonState = function () {
    const checkboxes = document.querySelectorAll('.customer-bill-row-checkbox:checked');
    const btn = document.getElementById('customer-bill-create-btn');
    if (btn) {
        if (checkboxes.length > 0) {
            btn.disabled = false;
            btn.style.background = '#4f46e5';
            btn.style.color = 'white';
            btn.style.cursor = 'pointer';
            btn.style.borderColor = '#4f46e5';
        } else {
            btn.disabled = true;
            btn.style.background = '#f1f5f9';
            btn.style.color = '#94a3b8';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = '#e2e8f0';
        }
    }
};

/**
 * Toggles all checkboxes in the customer bill table.
 */
window.toggleAllCustomerBillCheckboxes = function (master) {
    const checkboxes = document.querySelectorAll('.customer-bill-row-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = master.checked;
    });
    // updateCustomerBillCreateButtonState();
};

/**
 * Updates the state of the "按票生成账单" button in Payables Detail based on checkbox selection.
 */
window.updatePayablesGenerateBillButtonState = function () {
    const checkboxes = document.querySelectorAll('.payables-row-checkbox:checked');
    const btn = document.getElementById('payables-generate-bill-btn');
    if (btn) {
        if (checkboxes.length > 0) {
            btn.disabled = false;
            btn.style.background = '#4f46e5';
            btn.style.color = 'white';
            btn.style.cursor = 'pointer';
            btn.style.borderColor = '#4f46e5';
        } else {
            btn.disabled = true;
            btn.style.background = '#f1f5f9';
            btn.style.color = '#94a3b8';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = '#e2e8f0';
        }
    }
};

/**
 * Toggles all checkboxes in the payables detail table.
 */
window.toggleAllPayablesCheckboxes = function (master) {
    const checkboxes = document.querySelectorAll('.payables-row-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = master.checked;
    });
    updatePayablesGenerateBillButtonState();
};

/**
 * Shows the Invoicing Expense Configuration modal.
 */
window.showInvoiceExpenseModal = function () {
    const modal = document.getElementById('invoice-expense-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        // Initialize Lucide icons in the modal
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
};

/**
 * Closes the Invoicing Expense Configuration modal.
 */
window.closeInvoiceExpenseModal = function () {
    const modal = document.getElementById('invoice-expense-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
};

// Add event listener for close button after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-expense-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeInvoiceExpenseModal);
    }
});

/**
 * Saves the invoice expense configuration from the modal to the list.
 */
window.saveInvoiceExpenseConfig = function () {
    const code = document.getElementById('invoice-tax-code').value;
    const taxName = document.getElementById('invoice-tax-name').value;
    const name = document.getElementById('invoice-service-name').value;
    const rate = document.getElementById('invoice-tax-rate').value;
    const isTaxFree = document.querySelector('input[name="tax-free"]:checked').value;

    if (!code || !taxName || !name || !rate) {
        alert('请填写完整必填信息');
        return;
    }

    const newConfig = {
        code,
        taxName,
        name,
        rate,
        isTaxFree
    };

    window.invoiceExpenseConfigs.push(newConfig);

    // Close modal
    closeInvoiceExpenseModal();

    // Clear inputs for next time
    document.getElementById('invoice-tax-code').value = '';
    document.getElementById('invoice-tax-name').value = '';
    document.getElementById('invoice-service-name').value = '';
    document.getElementById('invoice-tax-rate').value = '';

    // Refresh the tab
    renderTabs('开票费用配置');
};

/**
 * Deletes an invoice expense configuration from the list.
 */
window.deleteInvoiceExpenseConfig = function (index) {
    if (confirm('确定要删除这条配置吗？')) {
        window.invoiceExpenseConfigs.splice(index, 1);
        renderTabs('开票费用配置');
    }
};
