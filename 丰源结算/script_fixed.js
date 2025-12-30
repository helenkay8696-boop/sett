const menuData = [
    {
        title: "搴旀敹搴斾粯",
        icon: "file-text",
        items: ["瀵硅处鍗?, "瀹㈡埛璐﹀崟", "鎺ユ敹璐﹀崟", "鎵归噺纭", "璐圭敤瀹℃牳", "璐圭敤鏄庣粏", "搴旀敹鏄庣粏", "搴斾粯鏄庣粏", "涓氬姟鍛樻垚鏈槑缁?, "浠ｆ敹浠ｄ粯鏄庣粏"]
    },
    {
        title: "鏀朵粯",
        icon: "credit-card",
        items: ["鏀朵粯娆?, "浠樻鐢宠", "璐︽埛鍏呭€?]
    },
    // "鏀惧崟" node will be filtered out as per request
    {
        title: "鏀惧崟",
        icon: "file-check",
        items: ["鏀惧崟", "鏀捐揣"],
        exclude: true
    },
    {
        title: "鍙戠エ",
        icon: "form-input",
        items: ["鍙戠エ绠＄悊", "寮€绁ㄧ敵璇?, "寮€绁ㄨ垂鐢ㄩ厤杞?, "绾㈠瓧鐢宠纭鍗?]
    },
    {
        title: "缁撶畻涓讳綋",
        icon: "building",
        items: ["缁撶畻鍗曚綅"]
    },
    {
        title: "閾朵紒鐩磋繛",
        icon: "landmark",
        items: ["閾惰鏀舵娴佹按", "閾惰浠樻娴佹按", "閾朵紒鐩磋繛閰嶇疆"]
    },
    {
        title: "璁剧疆",
        icon: "settings",
        items: ["缁撶畻璁剧疆"]
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
        { name: "钀ㄥ杈炬媺", count: 0 },
        { name: "娣卞湷甯傝繙鑸揪鍥介檯璐ц繍浠ｇ悊鏈夐檺鍏徃", count: 0 },
        { name: "娣卞湷甯傝矾璺€氳繍杈撴湁闄愬叕鍙?, count: 0 },
        { name: "娣卞湷甯傚ソ杩愭潵璐ц繍浠ｇ悊鏈夐檺鍏徃", count: 1 },
        { name: "娣卞湷杩愮墿浜戠墿娴佺鎶€鏈夐檺鍏徃", count: 0 },
        { name: "璐濆娴嬭瘯绉戞妧鏈夐檺鍏徃", count: 0 },
        { name: "鎷栬溅鍏徃", count: 0 },
        { name: "鍏ㄩ儴澶氫釜", count: 0 },
        { name: "22333344", count: 0 },
        { name: "鏉窞濞冨搱鍝堥泦鍥㈡湁闄愬叕鍙?, count: 0 },
        { name: "骞垮窞蹇嵎鍒板浗闄呰揣杩愪唬鐞嗘湁闄愬叕鍙?, count: 0 },
        { name: "663333", count: 0 },
        { name: "涓婃捣鍝囧搱鍝堝浗闄呯墿娴佹湁闄愬叕鍙告繁鍦冲垎鍏徃", count: 0 },
        { name: "hy", count: 0 },
        { name: "椹＋鍩猴紙涓浗锛夎埅杩愭湁闄愬叕鍙告繁鍦冲垎鍏徃", count: 1 },
        { name: "娆ｆ椇杈炬柊鑳芥簮鍔ㄥ姏姹借溅鏈夐檺鍏徃", count: 0 }
    ];

    openTabs.forEach(tab => {
        const item = document.createElement('div');
        item.className = `tab-item ${tab === activeTab ? 'active' : ''}`;
        item.innerHTML = `<span>${tab}</span><div class="tab-close" onclick="event.stopPropagation(); closeTab('${tab}')"><i data-lucide="x"></i></div>`;
        item.addEventListener('click', () => renderTabs(tab));
        list.appendChild(item);
    });
    if (activeTab === '瀵硅处鍗? || activeTab === '瀹㈡埛璐﹀崟' || activeTab === '鎺ユ敹璐﹀崟' || activeTab === '璐圭敤鏄庣粏' || activeTab === '搴旀敹鏄庣粏' || activeTab === '搴斾粯鏄庣粏' || activeTab === '涓氬姟鍛樻垚鏈槑缁? || activeTab === '浠ｆ敹浠ｄ粯鏄庣粏' || activeTab === '鏀朵粯娆? || activeTab === '浠樻鐢宠' || activeTab === '鍙戠エ绠＄悊' || activeTab === '寮€绁ㄧ敵璇? || activeTab === '寮€绁ㄨ垂鐢ㄩ厤杞? || activeTab === '绾㈠瓧鐢宠纭鍗? || activeTab === '缁撶畻鍗曚綅' || activeTab === '閾惰鏀舵娴佹按' || activeTab === '閾惰浠樻娴佹按' || activeTab === '閾朵紒鐩磋繛閰嶇疆' || activeTab === '鎵归噺纭' || activeTab === '璐圭敤瀹℃牳' || activeTab === '缁撶畻璁剧疆' || activeTab === '璐︽埛鍏呭€?) {


        let mainContent = '';
        if (activeTab === '瀵硅处鍗?) {
            mainContent = `
                <div class="statement-main">
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white;">
                        <div class="internal-tabs">
                            <div class="internal-tab active" onclick="switchInternalTab('reminder')">瀵硅处鎻愰啋 <span class="badge">1</span></div>
                            <div class="internal-tab" onclick="switchInternalTab('list')">瀵硅处鍗?<span class="badge">5</span></div>
                        </div>

                        <!-- Reconciliation Reminder Content (Default) -->
                        <div id="reconciliation-reminder-content">
                            <div class="internal-filter-bar">
                                <div class="internal-input-group">
                                    <label>鍏徃</label>
                                    <div class="select-box" style="width: 120px;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                                <div class="internal-input-group">
                                    <label>缁撶畻鍗曚綅</label>
                                    <input type="text" placeholder="璇疯緭鍏? style="width: 140px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;">
                                </div>
                                <div class="internal-input-group">
                                    <label>缁撶畻鍗曚綅绠€绉?/label>
                                    <input type="text" placeholder="璇疯緭鍏? style="width: 140px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;">
                                </div>
                                <div class="internal-input-group">
                                    <label>瀵硅处鏈熼棿</label>
                                    <div style="display: flex; align-items: center; gap: 4px;">
                                        <input type="date" placeholder="寮€濮嬫棩鏈? style="width: 130px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px;">
                                        <span>-</span>
                                        <input type="date" placeholder="缁撴潫鏃ユ湡" style="width: 130px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px;">
                                    </div>
                                </div>
                                <button class="primary-btn" style="height: 34px; padding: 0 16px;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                                </button>
                            </div>
                        </div>

                        <!-- Statement List Content (Hidden) -->
                        <div id="statement-list-content" style="display: none;">
                            <div class="internal-filter-bar">
                                <div class="internal-input-group">
                                    <label>缁撶畻鍗曚綅</label>
                                    <input type="text" placeholder="璇疯緭鍏? style="width: 120px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;">
                                </div>
                                <div class="internal-input-group">
                                    <label>瀵硅处鍗曞彿</label>
                                    <input type="text" placeholder="璇疯緭鍏? style="width: 120px; height: 34px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 10px;">
                                </div>
                                <div class="internal-input-group">
                                    <label>璐︽湡</label>
                                    <div class="select-box" style="width: 100px;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                                <div class="internal-input-group">
                                    <label>缂栧埗鐘舵€?/label>
                                    <div class="select-box" style="width: 100px;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down"></i>
                                    </div>
                                </div>
                                <div class="internal-input-group">
                                    <input type="checkbox" id="only-my-creation">
                                    <label for="only-my-creation">浠呮樉绀烘垜鍒涘缓鐨?/label>
                                </div>
                                
                                <button class="primary-btn" style="height: 34px; padding: 0 16px;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                                </button>
                                <span style="color: #64748b; font-size: 0.9rem; cursor: pointer;">鏇村(0) <i data-lucide="chevron-down" style="width: 12px; display: inline;"></i></span>
                                <button class="warning-btn" style="height: 34px; padding: 0 16px; background: #f97316; border-color: #f97316; color: white; border-radius: 6px;">
                                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> 鍒犻櫎
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
                                            <th>缁撶畻鍗曚綅</th>
                                            <th>缁撶畻鍗曚綅绠€绉?/th>
                                            <th>绫诲瀷</th>
                                            <th>璐︽湡</th>
                                            <th>缁撶畻鏃ユ湡绫诲瀷</th>
                                            <th>瀵硅处鍗曟彁閱掓潯浠?/th>
                                            <th>搴斿璐︽棩鏈?/th>
                                            <th>瀵硅处鏈熻捣</th>
                                            <th>瀵硅处鏈熸</th>
                                            <th>鎵€灞炲叕鍙?/th>
                                            <th style="width: 80px; text-align: center;">鎿嶄綔</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center;">1</td>
                                            <td>璐濆娴嬭瘯鏈夐檺鍏徃/娓犻亾閮?/td>
                                            <td></td>
                                            <td>鏈堢粨</td>
                                            <td>1涓湀</td>
                                            <td>宸ヤ綔鍗曟棩鏈?/td>
                                            <td>姣忔湀8鍙?/td>
                                            <td>2025-12-08</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>璐濆娴嬭瘯鏈夐檺鍏徃</td>
                                            <td style="text-align: center;"><a href="#" style="color: #2563eb; text-decoration: none;">鐢熸垚瀵硅处鍗?/a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;">2</td>
                                            <td>娣卞湷甯傝繙鑸揪鍥介檯璐ц繍浠ｇ悊鏈夐檺鍏徃</td>
                                            <td>杩滆埅杈?/td>
                                            <td>鏈堢粨</td>
                                            <td>1涓湀</td>
                                            <td>宸ヤ綔鍗曟棩鏈?/td>
                                            <td>姣忔湀10鍙?/td>
                                            <td>2025-12-10</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>涓板洯鐗╂祦</td>
                                            <td style="text-align: center;"><a href="#" style="color: #2563eb; text-decoration: none;">鐢熸垚瀵硅处鍗?/a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;">3</td>
                                            <td>椹＋鍩猴紙涓浗锛夎埅杩愭湁闄愬叕鍙告繁鍦冲垎鍏徃</td>
                                            <td>MSK</td>
                                            <td>鏈堢粨</td>
                                            <td>1涓湀</td>
                                            <td>寮€绁ㄦ棩鏈?/td>
                                            <td>姣忔湀15鍙?/td>
                                            <td>2025-12-15</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>椹＋鍩烘繁鍦?/td>
                                            <td style="text-align: center;"><a href="#" style="color: #2563eb; text-decoration: none;">鐢熸垚瀵硅处鍗?/a></td>
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
                                            <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                            <th style="width: 40px; text-align: center;">#</th>
                                            <th>鍒嗘埛纭</th>
                                            <th>鏀朵粯绫诲瀷</th>
                                            <th>瀵硅处鍗曞彿</th>
                                            <th>缁撶畻鍗曚綅</th>
                                            <th>缁撶畻鍗曚綅绠€绉?/th>
                                            <th>瀵硅处鏈堜唤</th>
                                            <th>缁撶畻瑙勫垯</th>
                                            <th>瀵硅处鏈熻捣</th>
                                            <th>瀵硅处鏈熸</th>
                                            <th>瀵硅处鏂瑰紡</th>
                                            <th style="width: 80px; text-align: center;">鎿嶄綔</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">1</td>
                                            <td>宸茬‘璁?/td>
                                            <td>AR</td>
                                            <td>DZ2025120001</td>
                                            <td>璐濆娴嬭瘯鏈夐檺鍏徃</td>
                                            <td>璐濆</td>
                                            <td>2025-11</td>
                                            <td>鏈堢粨30澶?/td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>閭欢纭</td>
                                            <td style="text-align: center;"><a href="#" style="color: #2563eb; text-decoration: none;">璇︽儏</a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">2</td>
                                            <td>寰呯‘璁?/td>
                                            <td>AR</td>
                                            <td>DZ2025120002</td>
                                            <td>娣卞湷甯傝繙鑸揪鍥介檯璐ц繍浠ｇ悊鏈夐檺鍏徃</td>
                                            <td>杩滆埅杈?/td>
                                            <td>2025-11</td>
                                            <td>鏈堢粨15澶?/td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>骞冲彴纭</td>
                                            <td style="text-align: center;"><a href="#" style="color: #2563eb; text-decoration: none;">璇︽儏</a></td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;"><input type="checkbox"></td>
                                            <td style="text-align: center;">3</td>
                                            <td>宸蹭綔搴?/td>
                                            <td>AR</td>
                                            <td>DZ2025120003</td>
                                            <td>鎷栬溅鍏徃</td>
                                            <td>鎷栬溅</td>
                                            <td>2025-11</td>
                                            <td>鐜扮粨</td>
                                            <td>2025-11-01</td>
                                            <td>2025-11-30</td>
                                            <td>寰俊纭</td>
                                            <td style="text-align: center;"><a href="#" style="color: #2563eb; text-decoration: none;">璇︽儏</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else if (activeTab === '鎺ユ敹璐﹀崟') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Status Tabs -->
                <div style="border-bottom: 1px solid #e2e8f0; padding: 0 24px;">
                    <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">鍏ㄩ儴</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">寰呭鏍?/div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鍚屾剰</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鎷掔粷</div>
                    </div>
                </div>

                <!-- Filter Area -->
                <div class="filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px; background: #fff;">
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <!-- Date Range -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>璐﹀崟鏃ユ湡</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            </div>
                        </div>



                        <!-- Keyword Input -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>鍏抽敭瀛?/span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="璇疯緭鍏? style="width: 200px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Search Button -->
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                    </div>
                </div>

                <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>鐘舵€?/th>
                                <th>鏀朵粯鏂瑰悜</th>
                                <th>璐﹀崟绫诲瀷</th>
                                <th>缁撶畻鍗曚綅</th>
                                <th>鍘熷竵閲戦</th>
                                <th>鎶樺悎甯佸埗</th>
                                <th>鎶樺悎閲戦</th>
                                <th>璐﹀崟鍙?/th>
                                <th>璐﹀崟鏃ユ湡</th>
                                <th>鎴戞柟宸ヤ綔鍗曞彿</th>
                                <th>瀵规柟宸ヤ綔鍗曞彿</th>
                                <th>鎺ㄩ€佹棩鏈?/th>
                                <th>鎺ㄩ€佷汉</th>
                                <th>瀹℃牳鏃ユ湡</th>
                                <th>瀹℃牳浜?/th>
                                <th style="width: 80px; text-align: center;">鎿嶄綔 <i data-lucide="settings" style="width: 12px; height: 12px; display: inline;"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Mock Data -->
                            <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;"><span style="color: #f59e0b;">寰呭鏍?/span></td>
                                <td style="padding: 8px;">搴斾粯</td>
                                <td style="padding: 8px;">鏍囧噯</td>
                                <td style="padding: 8px;">娣卞湷甯傝繙鑸揪</td>
                                <td style="padding: 8px;">USD 100.00</td>
                                <td style="padding: 8px;">CNY</td>
                                <td style="padding: 8px;">710.00</td>
                                <td style="padding: 8px;">ZD20231201001</td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">JOB20231201</td>
                                <td style="padding: 8px;">OPP20231201</td>
                                <td style="padding: 8px;">2023-12-02</td>
                                <td style="padding: 8px;">鏉庡洓</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px; text-align: center;">
                                    <button style="border: none; background: none; color: #3b82f6; cursor: pointer;">璇︽儏</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                     <div class="table-empty-state" style="display:none;">
                        <img src="https://img.icons8.com/ios/100/94a3b8/search--v1.png" alt="no data" style="width: 64px; opacity: 0.5;">
                        <p>鏆傛棤鏁版嵁</p>
                        <span style="font-size: 0.7rem;">No data</span>
                    </div>
                </div>
            </div>`;
        } else if (activeTab === '璐圭敤鏄庣粏') {
            // Expense Detail Content
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Filter Area -->
                <div class="expense-detail-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                    
                    <!-- Date Group -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>宸ヤ綔鍗曟棩鏈?/span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                            <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            <span style="color: #cbd5e1;">-</span>
                            <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                        </div>
                    </div>

                    <!-- Keyword -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>鍏抽敭瀛?/span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <input type="text" placeholder="璇疯緭鍏ョ郴缁熷崟鍙?宸ヤ綔鍗曞彿/瀹㈡埛鍚嶇О" style="width: 280px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                    </div>

                    <!-- Verification Status -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">閿€璐︾姸鎬?/label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="expense-verification-status">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-verification-status', '鏈牳閿€')">鏈牳閿€</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-verification-status', '閮ㄥ垎鏍搁攢')">閮ㄥ垎鏍搁攢</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-verification-status', '宸叉牳閿€')">宸叉牳閿€</div>
                            </div>
                        </div>
                    </div>

                    <!-- Invoice Status -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">寮€绁ㄧ姸鎬?/label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="expense-invoice-status">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-invoice-status', '鏈紑绁?)">鏈紑绁?/div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-invoice-status', '宸插紑绁?)">宸插紑绁?/div>
                            </div>
                        </div>
                    </div>

                    <!-- Expense Template -->
                     <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">璐﹀崟鐘舵€?/label>
                        <div class="relative-container">
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="expense-bill-status">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100%; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-bill-status', '鏈嚭璐﹀崟')">鏈嚭璐﹀崟</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('expense-bill-status', '宸插嚭璐﹀崟')">宸插嚭璐﹀崟</div>
                            </div>
                        </div>
                    </div>


                    <!-- Buttons -->
                    <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                    </button>
                    
                     <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                        鎸夋鐢熸垚璐﹀崟
                    </button>

                     <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #dbeafe; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                        鎻愪氦瀹℃牳 <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                    </button>

                </div>
                 <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>鏉ユ簮</th>
                                <th>AR/AP</th>
                                <th>鍗曟嵁绫诲瀷</th>
                                <th>绯荤粺鍗曞彿</th>
                                <th>缁撶畻鍏徃</th>
                                <th>宸ヤ綔鍗曟棩鏈?/th>
                                <th>璁¤垂鏃ユ湡</th>
                                <th>甯佸埗</th>
                                <th>绋庣巼</th>
                                <th>鏁伴噺</th>
                                <th>鍗曚綅</th>
                                <th>閲戦</th>
                                <th>涓嶅惈绋庨噾棰?/th>
                                <th>鏈綅甯侀噾棰?/th>
                                <th>姹囩巼</th>
                                <th>澧炲噺</th>
                                <th>澶囨敞</th>
                                <th>鏀朵粯娆剧姸鎬?/th>
                                <th>褰曞叆浜?/th>
                                <th>褰曞叆鏃堕棿</th>
                                <th>淇敼浜?/th>
                                <th>淇敼鏃堕棿</th>
                                <th>瀹℃牳浜?/th>
                                <th>瀹℃牳鏃堕棿</th>
                                <th>瀹℃牳鐘舵€?/th>
                                <th>鎿嶄綔</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;">璐圭敤</td>
                                <td style="padding: 8px;">搴旀敹</td>
                                <td style="padding: 8px;">娴疯繍璐?/td>
                                <td style="padding: 8px;">S20231201001</td>
                                <td style="padding: 8px;">娣卞湷甯傝繙鑸揪</td>
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
                                <td style="padding: 8px;">鏈敹浠?/td>
                                <td style="padding: 8px;">寮犱笁</td>
                                <td style="padding: 8px;">2023-12-01 10:00</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;"><span style="color: #f59e0b;">寰呭鏍?/span></td>
                                <td style="padding: 8px;">
                                    <button style="border: none; background: none; color: #3b82f6; cursor: pointer;">璇︽儏</button>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
                </div>
            </div>`;
        } else if (activeTab === '搴旀敹鏄庣粏') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Status Tabs -->
                <div style="border-bottom: 1px solid #e2e8f0; padding: 0 24px;">
                    <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">鍏ㄩ儴</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">寰呭嚭璐﹀崟 (89)</div>
                         <div class="status-tab" style="padding: 12px 0; cursor: pointer;">寰呭璐?(鏈堢粨) (14)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鏈紑绁?(133)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鐢宠寮€绁ㄤ腑 (0)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">宸插紑绁?(5)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鏈牳閿€ (115)</div>
                         <div class="status-tab" style="padding: 12px 0; cursor: pointer;">棰勬敹寰呭埌璐?(0)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">閮ㄥ垎鏍搁攢 (0)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">宸叉牳閿€ (23)</div>
                    </div>
                </div>

                <!-- Filter Area -->
                <div class="receivables-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px; background: #fff;">
                    <!-- Filter Row 1 -->
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Date -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>宸ヤ綔鍗曟棩鏈?/span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            </div>
                        </div>

                         <!-- Keyword -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>鍏抽敭瀛?/span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="璇疯緭鍏ョ郴缁熷崟鍙?宸ヤ綔鍗曞彿/瀹㈡埛鍚嶇О" style="width: 280px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Status Dropdowns -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">閿€璐︾姸鎬?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-verification-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-verification-status-selected', '鏈牳閿€')">鏈牳閿€</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-verification-status-selected', '閮ㄥ垎鏍搁攢')">閮ㄥ垎鏍搁攢</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-verification-status-selected', '宸叉牳閿€')">宸叉牳閿€</div>
                                </div>
                            </div>
                        </div>
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">寮€绁ㄧ姸鎬?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-invoice-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-invoice-status-selected', '鏈紑绁?)">鏈紑绁?/div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-invoice-status-selected', '宸插紑绁?)">宸插紑绁?/div>
                                </div>
                            </div>
                        </div>
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">璐﹀崟鐘舵€?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-bill-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-bill-status-selected', '鏈嚭璐﹀崟')">鏈嚭璐﹀崟</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-bill-status-selected', '宸插嚭璐﹀崟')">宸插嚭璐﹀崟</div>
                                </div>
                            </div>
                        </div>
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">瀵硅处鐘舵€?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="receivables-reconciliation-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-reconciliation-status-selected', '鏈璐?)">鏈璐?/div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('receivables-reconciliation-status-selected', '宸插璐?)">宸插璐?/div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-left: auto;">
                            <span style="color: #3b82f6; cursor: pointer; font-size: 0.8rem;">璧疯崏瀹℃牳 <i data-lucide="chevron-down" style="width: 12px; height: 12px; display: inline;"></i></span>
                        </div>
                    </div>

                    <!-- Filter Row 2 -->
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">璐圭敤瀹℃牳</label>
                             <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span>璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                         <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white;">
                             鐢熸垚璐﹀崟
                        </button>
                         <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white;">
                             鎸夌エ鐢熸垚璐﹀崟
                        </button>
                    </div>
                </div>

                 <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>鏉ユ簮</th>
                                <th>AR/AP</th>
                                <th>鍗曟嵁绫诲瀷</th>
                                <th>绯荤粺鍗曞彿</th>
                                <th>缁撶畻鍏徃</th>
                                <th>宸ヤ綔鍗曟棩鏈?/th>
                                <th>璁¤垂鏃ユ湡</th>
                                <th>甯佸埗</th>
                                <th>绋庣巼</th>
                                <th>鏁伴噺</th>
                                <th>鍗曚綅</th>
                                <th>閲戦</th>
                                <th>涓嶅惈绋庨噾棰?/th>
                                <th>鏈綅甯侀噾棰?/th>
                                <th>姹囩巼</th>
                                <th>澧炲噺</th>
                                <th>澶囨敞</th>
                                <th>鏀朵粯娆剧姸鎬?/th>
                                <th>褰曞叆浜?/th>
                                <th>褰曞叆鏃堕棿</th>
                                <th>淇敼浜?/th>
                                <th>淇敼鏃堕棿</th>
                                <th>瀹℃牳浜?/th>
                                <th>瀹℃牳鏃堕棿</th>
                                <th>瀹℃牳鐘舵€?/th>
                                <th>鎿嶄綔</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;">璐圭敤</td>
                                <td style="padding: 8px;">AR</td>
                                <td style="padding: 8px;">鏁磋溅</td>
                                <td style="padding: 8px;">S20231201001</td>
                                <td style="padding: 8px;">娣卞湷甯傝繙鑸揪</td>
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
                                <td style="padding: 8px;">鏈敹浠?/td>
                                <td style="padding: 8px;">寮犱笁</td>
                                <td style="padding: 8px;">2023-12-01 10:00</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;"><span style="color: #f59e0b;">寰呭鏍?/span></td>
                                <td style="padding: 8px;">
                                    <button style="border: none; background: none; color: #3b82f6; cursor: pointer;">璇︽儏</button>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>`;
        } else if (activeTab === '搴斾粯鏄庣粏') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Status Tabs -->
                <div style="border-bottom: 1px solid #e2e8f0; padding: 0 24px;">
                     <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">鍏ㄩ儴</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">寰呬粯璐﹀崟 (66)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">寰呭璐?(鏈堢粨) (5)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鏈敹绁?(80)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">宸叉敹绁?(2)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">寰呰娆?(64)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">宸茶娆?(7)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鏈牳閿€ (74)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">棰勪粯寰呮牳閿€ (0)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">閮ㄥ垎鏍搁攢 (0)</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">宸叉牳閿€ (8)</div>
                    </div>
                </div>

                 <!-- Filter Area -->
                <div class="payables-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px; background: #fff;">
                    <!-- Filter Row 1 -->
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Date -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>宸ヤ綔鍗曟棩鏈?/span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            </div>
                        </div>

                         <!-- Keyword -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>鍏抽敭瀛?/span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="璇疯緭鍏ョ郴缁熷崟鍙?宸ヤ綔鍗曞彿/瀹㈡埛鍚嶇О" style="width: 280px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Status Dropdowns -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">閿€璐︾姸鎬?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="payables-verification-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-verification-status-selected', '鏈牳閿€')">鏈牳閿€</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-verification-status-selected', '閮ㄥ垎鏍搁攢')">閮ㄥ垎鏍搁攢</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-verification-status-selected', '宸叉牳閿€')">宸叉牳閿€</div>
                                </div>
                            </div>
                        </div>
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">寮€绁ㄧ姸鎬?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="payables-invoice-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-invoice-status-selected', '鏈紑绁?)">鏈紑绁?/div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-invoice-status-selected', '宸插紑绁?)">宸插紑绁?/div>
                                </div>
                            </div>
                        </div>
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">璐﹀崟鐘舵€?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="payables-bill-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-bill-status-selected', '鏈嚭璐﹀崟')">鏈嚭璐﹀崟</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-bill-status-selected', '宸插嚭璐﹀崟')">宸插嚭璐﹀崟</div>
                                </div>
                            </div>
                        </div>
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">瀵硅处鐘舵€?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;" onclick="this.nextElementSibling.classList.toggle('hidden'); event.stopPropagation();">
                                    <span id="payables-reconciliation-status-selected">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 100%; top: calc(100% + 4px); left: 0; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 50;">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-reconciliation-status-selected', '鏈璐?)">鏈璐?/div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('payables-reconciliation-status-selected', '宸插璐?)">宸插璐?/div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-left: auto;">
                            <span style="color: #3b82f6; cursor: pointer; font-size: 0.8rem;">璧疯崏瀹℃牳 <i data-lucide="chevron-down" style="width: 12px; height: 12px; display: inline;"></i></span>
                        </div>
                    </div>

                    <!-- Filter Row 2 -->
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">璐圭敤瀹℃牳</label>
                             <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span>璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                         <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white;">
                             鎵归噺鐢熸垚璐﹀崟
                        </button>
                         <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white;">
                             鎸夌エ鐢熸垚璐﹀崟
                        </button>
                    </div>
                </div>

                 <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>鏉ユ簮</th>
                                <th>AR/AP</th>
                                <th>鍗曟嵁绫诲瀷</th>
                                <th>绯荤粺鍗曞彿</th>
                                <th>缁撶畻鍏徃</th>
                                <th>宸ヤ綔鍗曟棩鏈?/th>
                                <th>璁¤垂鏃ユ湡</th>
                                <th>甯佸埗</th>
                                <th>绋庣巼</th>
                                <th>鏁伴噺</th>
                                <th>鍗曚綅</th>
                                <th>閲戦</th>
                                <th>涓嶅惈绋庨噾棰?/th>
                                <th>鏈綅甯侀噾棰?/th>
                                <th>姹囩巼</th>
                                <th>澧炲噺</th>
                                <th>澶囨敞</th>
                                <th>鏀朵粯娆剧姸鎬?/th>
                                <th>褰曞叆浜?/th>
                                <th>褰曞叆鏃堕棿</th>
                                <th>淇敼浜?/th>
                                <th>淇敼鏃堕棿</th>
                                <th>瀹℃牳浜?/th>
                                <th>瀹℃牳鏃堕棿</th>
                                <th>瀹℃牳鐘舵€?/th>
                                <th>鎿嶄綔</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;">璐圭敤</td>
                                <td style="padding: 8px;">AP</td>
                                <td style="padding: 8px;">鏁磋溅</td>
                                <td style="padding: 8px;">S20231201001</td>
                                <td style="padding: 8px;">娣卞湷甯傝繙鑸揪</td>
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
                                <td style="padding: 8px;">鏈敹浠?/td>
                                <td style="padding: 8px;">寮犱笁</td>
                                <td style="padding: 8px;">2023-12-01 10:00</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;">-</td>
                                <td style="padding: 8px;"><span style="color: #f59e0b;">寰呭鏍?/span></td>
                                <td style="padding: 8px;">
                                    <button style="border: none; background: none; color: #3b82f6; cursor: pointer;">璇︽儏</button>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>`;
        } else if (activeTab === '涓氬姟鍛樻垚鏈槑缁? || activeTab === '浠ｆ敹浠ｄ粯鏄庣粏') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                 <!-- Filter Area -->
                <div class="salesman-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; background: #fff;">
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <!-- Date -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                <span>宸ヤ綔鍗曟棩鏈?/span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                    <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                    <span style="color: #cbd5e1;">-</span>
                                    <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                        <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                    </div>
                            </div>

                            <!-- Keyword -->
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                                <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                    <span>鍏抽敭瀛?/span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <input type="text" placeholder="璇疯緭鍏ュ伐浣滃崟鍙? style="width: 320px; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                            </div>

                            <!-- Salesman Dropdown -->
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">涓氬姟鍛?/label>
                                <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span>璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>

                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem; font-weight: 500;">
                                <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                            </button>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #dbeafe; border: none; border-radius: 4px; color: #3b82f6; font-size: 0.85rem; display: flex; align-items: center; gap: 4px;">
                            鎻愪氦瀹℃牳 <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                        </button>
                    </div>

                    <!-- Table Content Area -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                        <table class="statement-table" style="min-width: max-content;">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>鍗曟嵁绫诲瀷</th>
                                    <th>绯荤粺鍗曞彿</th>
                                    <th>缁撶畻鍏徃</th>
                                    <th>宸ヤ綔鍗曟棩鏈?/th>
                                    <th>璁¤垂鏃ユ湡</th>
                                    <th>甯佸埗</th>
                                    <th>鍗曚綅</th>
                                    <th>閲戦</th>
                                    <th>鏈綅甯侀噾棰?/th>
                                    <th>姹囩巼</th>
                                    <th>鏍搁攢</th>
                                    <th>澶囨敞</th>
                                    <th>鏀朵粯鐘舵€?/th>
                                    <th>褰曞叆浜?/th>
                                    <th>褰曞叆鏃堕棿</th>
                                    <th>淇敼浜?/th>
                                    <th>淇敼鏃堕棿</th>
                                    <th>瀹℃牳浜?/th>
                                    <th>瀹℃牳鏃堕棿</th>
                                    <th style="width: 40px; text-align: center;"><i data-lucide="settings" style="width: 14px; height: 14px; color: #64748b;"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 8px; text-align: center;">1</td>
                                    <td style="padding: 8px;">鏁磋溅</td>
                                    <td style="padding: 8px;">S20231201001</td>
                                    <td style="padding: 8px;">娣卞湷甯傝繙鑸揪</td>
                                    <td style="padding: 8px;">2023-12-01</td>
                                    <td style="padding: 8px;">2023-12-01</td>
                                    <td style="padding: 8px;">CNY</td>
                                    <td style="padding: 8px;">绁?/td>
                                    <td style="padding: 8px;">500.00</td>
                                    <td style="padding: 8px;">500.00</td>
                                    <td style="padding: 8px;">1.00</td>
                                    <td style="padding: 8px;">鏈牳閿€</td>
                                    <td style="padding: 8px;">-</td>
                                    <td style="padding: 8px;">鏈敹浠?/td>
                                    <td style="padding: 8px;">寮犱笁</td>
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
        } else if (activeTab === '鏀朵粯娆?) {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: #fff;">
                <!-- Header Actions Area -->
                <div style="padding: 12px 24px; display: flex; align-items: center; justify-content: flex-end; gap: 8px; background: #fbfcfe; border-bottom: 1px solid #e2e8f0;">
                    <button class="primary-btn" onclick="showNewReceiptModal()" style="height: 32px; padding: 0 12px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                        <i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i> 鏂板缓鏀舵
                    </button>
                    <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                        <i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i> 鏂板缓浠樻
                    </button>
                    <div class="relative-container">
                        <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #e0f2fe; border: none; border-radius: 4px; color: #0369a1; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                            鎵归噺閿€璐?<i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                        </button>
                    </div>
                    <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 4px; color: #475569; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                        <i data-lucide="upload-cloud" style="width: 14px; height: 14px;"></i> 瀵煎嚭
                    </button>
                    <button style="width: 32px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; background: white; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>

                <!-- Filter Area -->
                <div class="receipt-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; background: #fff;">
                    <!-- Direction Filter -->
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 0.8rem; color: #475569;">鏀朵粯鏂瑰悜</span>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem;">
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="direction" checked> 鍏ㄩ儴</label>
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="direction"> 鏀?/label>
                            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="direction"> 浠?/label>
                        </div>
                    </div>

                    <!-- Date Group -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>鏀朵粯鏃ユ湡</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                            <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                            <span style="color: #cbd5e1;">-</span>
                            <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                            <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                        </div>
                    </div>

                    <!-- Large Search Input -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; min-width: 420px; flex-grow: 1;">
                        <input type="text" placeholder="璇疯緭鍏ョ粨绠楀崟浣?娴佹按鍙?鍙戠エ鍙?宸ヤ綔鍗曞彿/鎻愬崟鍙?宸ヤ綔鍗曞弬鑰冨彿/鏍搁攢鍗曞彿/鏌滃彿/SO鍙? style="width: 100%; height: 32px; border: none; padding: 0 12px; font-size: 0.8rem; outline: none;">
                    </div>

                    <!-- Write-off No -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500; white-space: nowrap;">鏍搁攢鍗曞彿</label>
                        <input type="text" placeholder="璇疯緭鍏ユ牳閿€鍗曞彿" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; font-size: 0.8rem; outline: none;">
                    </div>

                    <!-- Status Dropdown -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="font-size: 0.8rem; color: #475569; font-weight: 500; white-space: nowrap;">娴佹按鐘舵€?/label>
                        <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: #fff;">
                            <span>鍏ㄩ儴</span>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                    </div>

                    <!-- Search Button Area -->
                    <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem; font-weight: 500;">
                        <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                    </button>

                    <div style="display: flex; align-items: center; gap: 4px; color: #3b82f6; cursor: pointer; font-size: 0.85rem;">
                        <span>鏇村(0)</span>
                        <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                    </div>

                    <div style="flex-grow: 1;"></div>

                    <!-- End Icons -->
                    <div style="display: flex; align-items: center; gap: 12px; color: #64748b;">
                        <i data-lucide="file-text" style="width: 16px; height: 16px; cursor: pointer;"></i>
                        <i data-lucide="settings" style="width: 16px; height: 16px; cursor: pointer;"></i>
                    </div>
                </div>

                <!-- Table Area Placeholder -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>鏀朵粯鏂瑰悜</th>
                                <th>绁ㄦ嵁绫诲瀷</th>
                                <th>鐘舵€?/th>
                                <th>鍒跺崟鏃ユ湡</th>
                                <th>缁撶畻鍗曚綅</th>
                                <th>閾惰璐︽埛/鐜伴噾璐︽埛</th>
                                <th>甯佺</th>
                                <th>鏀朵粯閲戦</th>
                                <th>宸查攢閲戦</th>
                                <th>鏈攢閲戦</th>
                                <th>鏀朵粯鏃堕棿</th>
                                <th>鍑瘉鍙?/th>
                                <th>娴佹按鍙?/th>
                                <th>鏀エ鍙?/th>
                                <th>鎽樿</th>
                                <th>鍒涘缓浜?/th>
                                <th>鎵€灞炲叕鍙?/th>
                                <th style="width: 40px; text-align: center;"><i data-lucide="settings" style="width: 14px; height: 14px; color: #64748b;"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 8px; text-align: center;">1</td>
                                <td style="padding: 8px;">鏀?/td>
                                <td style="padding: 8px;">鏀エ</td>
                                <td style="padding: 8px;"><span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 99px; font-size: 0.75rem;">宸茬‘璁?/span></td>
                                <td style="padding: 8px;">2023-12-01</td>
                                <td style="padding: 8px;">娣卞湷甯傝繙鑸揪鍥介檯璐ц繍浠ｇ悊鏈夐檺鍏徃</td>
                                <td style="padding: 8px;">鎷涘晢閾惰 123456789</td>
                                <td style="padding: 8px;">CNY</td>
                                <td style="padding: 8px;">1,200.00</td>
                                <td style="padding: 8px;">1,200.00</td>
                                <td style="padding: 8px;">0.00</td>
                                <td style="padding: 8px;">2023-12-01 14:00</td>
                                <td style="padding: 8px;">V001</td>
                                <td style="padding: 8px;">LS202312010001</td>
                                <td style="padding: 8px;">CHQ123</td>
                                <td style="padding: 8px;">璐ф缁撶畻</td>
                                <td style="padding: 8px;">绠＄悊鍛?/td>
                                <td style="padding: 8px;">涓板洯闆嗗洟</td>
                                <td style="padding: 8px; text-align: center;">
                                    <i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>`;
        } else if (activeTab === '瀹㈡埛璐﹀崟') {
            // For '瀹㈡埛璐﹀崟', duplicate the structure but maybe with empty or different main content for now
            // User only requested the sidebar to be copied.
            mainContent = `
                    <div class="statement-main">
                <!-- Status Tabs Header -->
                <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px;">
                    <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">鍏ㄩ儴</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">寰呮敹娆?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">21</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">寰呬粯娆?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">8</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸叉敹娆?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">6</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸蹭粯娆?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">寰呬笟鍔″憳纭 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">21</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸叉彁浜ら閿€ <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">4</span></div>
                        <div class="status-separator" style="padding: 12px 0; color: #cbd5e1;">|</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">寰呯‘璁ら攢璐?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">8</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">璐﹀崟鎻愰啋</div>
                    </div>
                </div>

                <!-- Filter Area -->
                <div class="bill-filter-area" style="padding: 16px 24px; background: white; border-bottom: 1px solid #e2e8f0;">
                    <!-- Combined Row -->
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <!-- Date Group -->
                        <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 110px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; bg: #f8fafc; white-space: nowrap;">
                                <span>璐﹀崟鏃ユ湡</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 100px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem;">
                                <span style="display: flex; align-items: center; color: #cbd5e1;">-</span>
                                <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 100px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem;">
                                </div>

                                <!-- Keyword Input -->
                                <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    <div style="width: 60px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; background: #f8fafc; font-size: 0.8rem;">
                                        <span>鍏抽敭瀛?/span>
                                    </div>
                                    <input type="text" placeholder="璁㈠崟鍙? style="width: 300px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem;">
                                </div>

                                <!-- More Filters -->
                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">鏍搁攢</label>
                                    <div class="select-box" style="width: 100px; height: 34px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">涓氬姟鍛?/label>
                                    <div class="select-box" style="width: 100px; height: 34px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">鎿嶄綔鍛?/label>
                                    <div class="select-box" style="width: 100px; height: 34px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>



                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">閿€鍞儴闂?/label>
                                    <div class="select-box" style="width: 120px; height: 34px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                                    <label style="font-size: 0.8rem; font-weight: bold;">瀹㈡埛纭</label>
                                    <div class="select-box" style="width: 120px; height: 34px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between;">
                                        <span>璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                </div>

                                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #475569;">
                                    <input type="checkbox" id="bill-only-me">
                                        <label for="bill-only-me">浠呮樉绀烘垜鍒涘缓鐨?/label>
                                </div>

                                <div style="flex-grow: 1;"></div>

                                <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                                </button>
                                <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px;">
                                    鎻愪氦棰勯攢
                                </button>
                                <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px;">
                                    鍒涘缓璐﹀崟
                                </button>
                                <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px;">
                                    鐢熸垚瀵硅处鍗?
                                </button>
                        </div>
                    </div>

                    <!-- Empty Table / Content Area -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0;">
                        <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>鏀朵粯鏂瑰悜</th>
                                    <th>璐﹀崟鐘舵€?/th>
                                    <th>璐﹀崟鍙?/th>
                                    <th>缁撶畻鍏徃</th>
                                    <th>鍘熷竵閲戦</th>
                                    <th>鎶樺悎甯佸埗</th>
                                    <th>鎶樺悎閲戦</th>
                                    <th>璐﹀崟鏃ユ湡</th>
                                    <th>鍙戦€佹棩鏈?/th>
                                    <th>宸ヤ綔鍗曞彿</th>
                                    <th>涓氬姟鍛?/th>
                                    <th>鎿嶄綔鍛?/th>
                                    <th>缁撶畻鏃ヨ鍒?/th>
                                    <th>缁撶畻鏃?<i data-lucide="help-circle" style="width: 12px; height: 12px; display: inline; vertical-align: middle; color: #94a3b8;"></i></th>
                                    <th>鏀舵/浠樻瀹屾垚鏃?/th>
                                    <th>瓒呮湡澶╂暟</th>
                                    <th>涓氬姟鍛樼‘璁?/th>
                                    <th>涓氬姟鍛樼‘璁ゆ椂闂?/th>
                                    <th>瀹㈡埛纭鏃堕棿</th>
                                    <th>璐﹀崟鍙傝€冨彿</th>
                                    <th>鍙戠エ鍙风爜</th>
                                    <th>鏍搁攢鍗曞彿</th>
                                    <th>瀹㈡埛纭</th>
                                    <th>澶囨敞</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Data rows will go here -->
                            </tbody>
                        </table>
                    </div>
                </div>`;
        } else if (activeTab === '寮€绁ㄧ敵璇?) {
            mainContent = `
                    <div class="statement-main">
                <!-- Top Tabs Header & Add Button -->
                <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: center;">
                    <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">鍏ㄩ儴</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">鑽夌 <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">瀹℃牳涓?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">宸叉壒澶?/div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸插紑绁?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">宸查┏鍥?宸插彇娑?/div>
                    </div>
                    <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                        <i data-lucide="plus-circle" style="width: 16px; height: 16px;"></i> 鏂板
                    </button>
                </div>

                <!-- Filter Area -->
                <div class="bill-filter-area" style="padding: 16px 24px; background: white; border-bottom: 1px solid #e2e8f0;">
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <!-- Row 1: Filters -->
                        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                             <!-- Application Date -->
                             <div style="display: flex; align-items: center; gap: 8px;">
                                <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">鐢宠鏃ユ湡</label>
                                <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                                     <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 100px; height: 32px; border: none; border-right: 1px solid #e2e8f0; padding: 0 8px; font-size: 0.8rem; outline: none;">
                                     <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 100px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem; outline: none;">
                                     <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-left: 1px solid #e2e8f0;">
                                         <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                     </div>
                                </div>
                            </div>

                            <!-- Keyword -->
                             <div style="display: flex; align-items: center; gap: 8px;">
                                 <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">鍏抽敭瀛?/label>
                                 <input type="text" placeholder="璇疯緭鍏ョ粨绠楀崟浣?鐢宠鍗曞彿" style="width: 200px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 0.8rem; outline: none;">
                             </div>

                             <!-- Applicant -->
                             <div style="display: flex; align-items: center; gap: 8px;">
                                 <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">鐢宠浜?/label>
                                 <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                             </div>

                              <!-- Bill Status -->
                             <div style="display: flex; align-items: center; gap: 8px;">
                                 <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">鍗曟嵁鐘舵€?/label>
                                 <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                             </div>

                             <!-- Only Me -->
                             <div style="display: flex; align-items: center; gap: 4px;">
                                <input type="checkbox" id="only-me-inv" style="width: 14px; height: 14px;">
                                <label for="only-me-inv" style="font-size: 0.8rem; color: #475569;">浠呮樉绀烘垜鍒涘缓鐨?/label>
                             </div>

                             <!-- Work Order No -->
                             <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; align-items: center;">
                                   <div class="select-box-filter" style="width: 90px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; cursor: pointer;">
                                        <span style="font-size: 0.8rem;">宸ヤ綔鍗曞彿</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                   </div>
                                   <input type="text" placeholder="璇疯緭鍏? style="width: 120px; height: 32px; border: none; padding: 0 8px; font-size: 0.8rem; outline: none;">
                             </div>
                             
                             <!-- Customer Contact -->
                             <div style="display: flex; align-items: center; gap: 8px;">
                                 <label style="font-size: 0.8rem; color: #475569; font-weight: bold;">瀹㈡埛鑱旂郴浜?/label>
                                 <input type="text" placeholder="璇疯緭鍏? style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 0.8rem; outline: none;">
                             </div>
                        </div>

                        <!-- Row 2: Action Buttons -->
                        <div style="display: flex; align-items: center; gap: 12px;">
                             <button class="primary-btn" style="height: 32px; padding: 0 24px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; font-size: 0.85rem;">
                                <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                             </button>
                             <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">
                                褰曞叆鍙戠エ
                             </button>
                              <button class="action-btn" style="height: 32px; padding: 0 16px; background: white; color: #475569; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">
                                鏌ョ湅鎴戝緟澶勭悊鐨?
                             </button>
                              <button class="action-btn" style="height: 32px; padding: 0 16px; background: white; color: #475569; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">
                                鏌ョ湅鎴戝凡澶勭悊鐨?
                             </button>
                        </div>
                    </div>
                </div>

                <!-- Table Container -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0;">
                    <table class="statement-table">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>鐘舵€?/th>
                                <th>鍙戠エ鍙?/th>
                                <th>鍙戠エ绫诲瀷</th>
                                <th>缁撶畻鍗曚綅</th>
                                <th>寮€绁ㄦ棩鏈?/th>
                                <th>甯佸埗</th>
                                <th>閲戦</th>
                                <th>绋庨</th>
                                <th>浠风◣鍚堣</th>
                                <th>鏈竵閲戦</th>
                                <th>宸ヤ綔鍗曞彿</th>
                                <th>璐﹀崟鍙?/th>
                                <th>褰曞叆浜?/th>
                                <th>褰曞叆鏃堕棿</th>
                                <th>鎿嶄綔</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">1</td>
                                <td style="padding: 10px;"><span style="background: #fef3c7; color: #d97706; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">寰呭鏍?/span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">鏅エ</td>
                                <td style="padding: 10px;">娣卞湷甯傚ソ杩愭潵璐ц繍浠ｇ悊鏈夐檺鍏徃</td>
                                <td style="padding: 10px;">2023-12-05</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">2,000.00</td>
                                <td style="padding: 10px; text-align: right;">120.00</td>
                                <td style="padding: 10px; text-align: right;">2,120.00</td>
                                <td style="padding: 10px; text-align: right;">2,120.00</td>
                                <td style="padding: 10px;">YO2512-0023</td>
                                <td style="padding: 10px;">B2023120501</td>
                                <td style="padding: 10px;">璧靛叚</td>
                                <td style="padding: 10px;">2023-12-05 11:00</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">2</td>
                                <td style="padding: 10px;"><span style="background: #dbeafe; color: #2563eb; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">宸插紑绁?/span></td>
                                <td style="padding: 10px;">INV20231206001</td>
                                <td style="padding: 10px;">涓撶エ(6%)</td>
                                <td style="padding: 10px;">鍖椾含浜崕鐗╂祦鏈夐檺鍏徃</td>
                                <td style="padding: 10px;">2023-12-06</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">8,000.00</td>
                                <td style="padding: 10px; text-align: right;">480.00</td>
                                <td style="padding: 10px; text-align: right;">8,480.00</td>
                                <td style="padding: 10px; text-align: right;">8,480.00</td>
                                <td style="padding: 10px;">YO2512-0024</td>
                                <td style="padding: 10px;">B2023120601</td>
                                <td style="padding: 10px;">瀛欎竷</td>
                                <td style="padding: 10px;">2023-12-06 15:20</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">3</td>
                                <td style="padding: 10px;"><span style="background: #e2e8f0; color: #475569; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">鑽夌</span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">涓撶エ(13%)</td>
                                <td style="padding: 10px;">澶╂触娓繚绋庡尯鐗╂祦</td>
                                <td style="padding: 10px;">2023-12-07</td>
                                <td style="padding: 10px;">USD</td>
                                <td style="padding: 10px; text-align: right;">1,500.00</td>
                                <td style="padding: 10px; text-align: right;">0.00</td>
                                <td style="padding: 10px; text-align: right;">1,500.00</td>
                                <td style="padding: 10px; text-align: right;">10,800.00</td>
                                <td style="padding: 10px;">YO2512-0025</td>
                                <td style="padding: 10px;">B2023120701</td>
                                <td style="padding: 10px;">鍛ㄥ叓</td>
                                <td style="padding: 10px;">2023-12-07 09:45</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
        } else if (activeTab === '浠樻鐢宠') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: #fff;">
                <!-- Status Tabs Header -->
                <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9;">
                    <div class="status-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569; overflow-x: auto;">
                        <div class="status-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">鍏ㄩ儴</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">鑽夌/閫€鍥?/div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">瀹℃牳涓?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">14</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸叉壒鍑?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">4</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer;">閮ㄥ垎鏍搁攢</div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸叉牳閿€ <span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                        <div class="status-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸查€€鍥?宸插彇娑?<span style="background:#e2e8f0; color:#475569; padding: 1px 6px; border-radius: 99px; font-size: 0.7rem;">1</span></div>
                    </div>
                    <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px; font-size: 0.85rem;">
                        <i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i> 鏂板
                    </button>
                </div>

                <!-- Complex Filter Area -->
                <div class="payment-filter-area" style="padding: 16px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px;">
                    <!-- Row 1 -->
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <!-- Date Group -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">鐢宠鏃ユ湡</label>
                            <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; height: 32px;">
                                <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 80px; border: none; padding: 0 8px; font-size: 0.75rem; outline: none;">
                                <span style="display: flex; align-items: center; color: #cbd5e1; background: white;">-</span>
                                <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 80px; border: none; padding: 0 8px; font-size: 0.75rem; outline: none;">
                            </div>
                        </div>

                        <!-- Keyword -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">鍏抽敭瀛?/label>
                            <input type="text" placeholder="璇疯緭鍏ョ粨绠楀崟浣?鐢宠鍙? style="width: 160px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; font-size: 0.75rem; outline: none;">
                        </div>

                        <!-- Applicant -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">鐢宠浜?/label>
                            <div class="select-box" style="width: 90px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="font-size: 0.75rem;">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Bill Status -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">鍗曟嵁鐘舵€?/label>
                            <div class="select-box" style="width: 90px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="font-size: 0.75rem;">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Water Bill Status -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">姘村崟鐘舵€?/label>
                            <div class="select-box" style="width: 80px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="font-size: 0.75rem;">鍏ㄩ儴</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Attachment Status -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">缁撶畻闄勪欢鐘舵€?/label>
                            <div class="select-box" style="width: 80px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="font-size: 0.75rem;">鍏ㄩ儴</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Invoicing Method -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">寮€绁ㄦ柟寮?/label>
                            <div class="select-box" style="width: 90px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="font-size: 0.75rem;">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- External Order No -->
                        <div class="input-label-group" style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; height: 32px;">
                            <div style="padding: 0 8px; background: #f8fafc; border-right: 1px solid #e2e8f0; height: 100%; display: flex; align-items: center; font-size: 0.75rem; color: #475569; font-weight: 500;">涓婂鍗曞彿</div>
                            <input type="text" placeholder="璇疯緭鍏? style="width: 120px; border: none; padding: 0 8px; font-size: 0.75rem; outline: none;">
                        </div>
                    </div>

                    <!-- Row 2 -->
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <!-- Company -->
                        <div class="input-label-group" style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">鎵€灞炲叕鍙?/label>
                            <div class="select-box" style="width: 150px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white;">
                                <span style="font-size: 0.75rem;">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Checkboxes -->
                        <div style="display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: #475569; margin-left: 8px;">
                            <input type="checkbox" id="to-process">
                            <label for="to-process">浠呮煡鐪嬪緟鎴戝鐞嗙殑</label>
                        </div>
                        <div style="display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: #475569;">
                            <input type="checkbox" id="processed">
                            <label for="processed">浠呮煡鐪嬫垜宸插鐞嗙殑</label>
                        </div>

                        <!-- Buttons -->
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 500;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 500;">
                            浠樻鍙戠エ
                        </button>

                        <div style="flex-grow: 1;"></div>

                        <!-- Right Actions -->
                        <div style="display: flex; align-items: center; gap: 16px; padding-right: 8px;">
                            <i data-lucide="layout" style="width: 18px; height: 18px; color: #64748b; cursor: pointer;"></i>
                            <i data-lucide="upload-cloud" style="width: 18px; height: 18px; color: #64748b; cursor: pointer;"></i>
                            <i data-lucide="settings" style="width: 18px; height: 18px; color: #64748b; cursor: pointer;"></i>
                        </div>
                    </div>
                </div>

                <!-- Table Area Placeholder -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>浠樻鐢宠鍗曞彿</th>
                                <th>鍗曟嵁鐘舵€?/th>
                                <th>浠樻姘村崟闄勪欢</th>
                                <th>姘村崟涓婁紶鏃堕棿</th>
                                <th>鍙戠エ闄勪欢鐘舵€?/th>
                                <th>鍙戠エ涓婁紶鏃堕棿</th>
                                <th>缁撶畻鍗曚綅</th>
                                <th>寮€绁ㄦ柟寮?/th>
                                <th>鐢宠鏃ユ湡</th>
                                <th>搴旀敮浠樻棩鏈?/th>
                                <th>鐢宠閲戦</th>
                                <th>璐圭敤閲戦</th>
                                <th>宸叉牳閿€閲戦</th>
                                <th>鏈攢閲戦</th>
                                <th>鎶樺悎閲戦</th>
                                <th>鐢宠浜?/th>
                                <th>鎵€灞炲叕鍙?/th>
                                <th>宸ヤ綔鍗曞彿</th>
                                <th>璐﹀崟鍙?/th>
                                <th>瀵硅处鍗曞彿</th>
                                <th>鍒涘缓鏃ユ湡</th>
                                <th>澶囨敞</th>
                                <th style="width: 40px; text-align: center;"><i data-lucide="settings" style="width: 14px; height: 14px; color: #64748b;"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr style="background: white; border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">1</td>
                                <td style="padding: 10px; color: #3b82f6;">PAY20231201001</td>
                                <td style="padding: 10px;"><span style="background: #fef3c7; color: #d97706; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">寰呭鎵?/span></td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="file-text" style="width: 14px; height: 14px; color: #94a3b8;"></i></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;"><span style="color: #94a3b8;">鏈笂浼?/span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">娣卞湷甯傚ソ杩愭潵璐ц繍浠ｇ悊鏈夐檺鍏徃</td>
                                <td style="padding: 10px;">涓撶エ(6%)</td>
                                <td style="padding: 10px;">2023-12-01</td>
                                <td style="padding: 10px;">2023-12-15</td>
                                <td style="padding: 10px; font-weight: 600;">5,000.00</td>
                                <td style="padding: 10px;">5,000.00</td>
                                <td style="padding: 10px;">0.00</td>
                                <td style="padding: 10px; color: #ef4444;">5,000.00</td>
                                <td style="padding: 10px;">5,000.00</td>
                                <td style="padding: 10px;">涓氬姟鍛楢</td>
                                <td style="padding: 10px;">涓板洯闆嗗洟</td>
                                <td style="padding: 10px;">YO2512-0019</td>
                                <td style="padding: 10px;">B20231201</td>
                                <td style="padding: 10px;">S20231201</td>
                                <td style="padding: 10px;">2023-12-01</td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px; text-align: center;">
                                    <i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i>
                                </td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>`;
        } else if (activeTab === '鍙戠エ绠＄悊') {
            mainContent = `
            <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Internal Tabs Row -->
                <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: center;">
                    <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                        <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">寰呭紑绁?/div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">鏈嚭绁?/div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">鍑虹エ涓?/div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">鍑虹エ澶辫触</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸插嚭绁?<span style="background: #3b82f6; color: white; border-radius: 10px; padding: 0 6px; font-size: 0.7rem;">5</span></div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer; display: flex; align-items: center; gap: 4px;">宸茬孩鍐?<span style="background: #94a3b8; color: white; border-radius: 10px; padding: 0 6px; font-size: 0.7rem;">?</span></div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">绾㈠瓧鍙戠エ</div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">浣滃簾涓?/div>
                        <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">宸蹭綔搴?/div>
                    </div>
                    <button class="primary-btn" style="height: 32px; padding: 0 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                        鏀惰棌鍙戠エ <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>

                <!-- Filter Area -->
                <div class="invoice-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; background: white;">
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
                        <!-- Date range with selector -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                            <div class="select-box-filter" style="width: 80px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.75rem; cursor: pointer;">
                                <span>宸ヤ綔鏃ユ湡</span>
                                <i data-lucide="chevron-down" style="width: 12px; height: 12px; color: #94a3b8;"></i>
                            </div>
                            <div style="display: flex; align-items: center; padding: 0 8px; gap: 4px;">
                                <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 80px; height: 32px; border: none; font-size: 0.75rem; outline: none;">
                                <i data-lucide="calendar" style="width: 12px; height: 12px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1;">-</span>
                                <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 80px; height: 32px; border: none; font-size: 0.75rem; outline: none;">
                                <i data-lucide="calendar" style="width: 12px; height: 12px; color: #cbd5e1;"></i>
                            </div>
                        </div>

                        <!-- Keyword -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">鍏抽敭瀛?/label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; width: 220px; height: 32px;">
                                <input type="text" placeholder="璇疯緭鍏ョ粨绠楀崟浣?宸ヤ綔鍗曞彿" style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                            </div>
                        </div>

                        <!-- Applicant -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500;">鐢宠浜?/label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; width: 120px; height: 32px; background: white; cursor: pointer;">
                                <span style="color: #cbd5e1; font-size: 0.75rem; flex: 1;">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 12px; height: 12px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Checkbox -->
                        <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #475569; cursor: pointer;">
                            <input type="checkbox"> 浠呮樉绀虹郴缁熻嚜鍔ㄨ繃鐨?
                        </label>

                        <!-- Work No search -->
                        <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden; height: 32px;">
                            <div style="padding: 0 8px; border-right: 1px solid #e2e8f0; font-size: 0.75rem; background: #f8fafc; height: 100%; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                宸ヤ綔鍗曞彿 <i data-lucide="chevron-down" style="width: 12px; height: 12px; color: #94a3b8;"></i>
                            </div>
                            <input type="text" placeholder="璇疯緭鍏? style="border: none; outline: none; padding: 0 8px; font-size: 0.75rem; width: 120px;">
                        </div>

                        <!-- Contact -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.75rem; color: #475569; font-weight: 500; white-space: nowrap;">瀹㈡埛鑱旂郴浜?/label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; width: 120px; height: 32px;">
                                <input type="text" placeholder="璇疯緭鍏? style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                            </div>
                        </div>
                    </div>

                    <!-- Row 2 Buttons -->
                    <div style="display: flex; gap: 8px;">
                        <button class="primary-btn" style="height: 28px; padding: 0 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.75rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                        <button class="primary-btn" style="height: 28px; padding: 0 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.75rem; cursor: pointer;">
                            褰曞叆鍙戠エ
                        </button>
                        <button class="ghost-btn" style="height: 28px; padding: 0 10px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.75rem; background: white; cursor: pointer;">鏌ョ湅鎴戝緟澶勭悊鐨?/button>
                        <button class="ghost-btn" style="height: 28px; padding: 0 10px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 0.75rem; background: white; cursor: pointer;">鏌ョ湅鎴戝凡澶勭悊鐨?/button>
                    </div>
                </div>

                <!-- Table Content Area -->
                <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                    <table class="statement-table" style="min-width: max-content;">
                        <thead>
                            <tr>
                                <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                <th style="width: 40px; text-align: center;">#</th>
                                <th>鐘舵€?/th>
                                <th>鍙戠エ鍙?/th>
                                <th>鍙戠エ绫诲瀷</th>
                                <th>缁撶畻鍗曚綅</th>
                                <th>寮€绁ㄦ棩鏈?/th>
                                <th>甯佸埗</th>
                                <th>閲戦</th>
                                <th>绋庨</th>
                                <th>浠风◣鍚堣</th>
                                <th>鏈竵閲戦</th>
                                <th>宸ヤ綔鍗曞彿</th>
                                <th>璐﹀崟鍙?/th>
                                <th>褰曞叆浜?/th>
                                <th>褰曞叆鏃堕棿</th>
                                <th>鎿嶄綔</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">1</td>
                                <td style="padding: 10px;"><span style="background: #e2e8f0; color: #475569; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">寰呭紑绁?/span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">鏅エ</td>
                                <td style="padding: 10px;">娣卞湷甯傚ソ杩愭潵璐ц繍浠ｇ悊鏈夐檺鍏徃</td>
                                <td style="padding: 10px;">2023-12-01</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">1,000.00</td>
                                <td style="padding: 10px; text-align: right;">60.00</td>
                                <td style="padding: 10px; text-align: right;">1,060.00</td>
                                <td style="padding: 10px; text-align: right;">1,060.00</td>
                                <td style="padding: 10px;">YO2512-0020</td>
                                <td style="padding: 10px;">B2023120101</td>
                                <td style="padding: 10px;">寮犱笁</td>
                                <td style="padding: 10px;">2023-12-01 10:00</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">2</td>
                                <td style="padding: 10px;"><span style="background: #dbeafe; color: #2563eb; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">宸插紑绁?/span></td>
                                <td style="padding: 10px;">INV20231201001</td>
                                <td style="padding: 10px;">涓撶エ(6%)</td>
                                <td style="padding: 10px;">骞垮窞甯傞『椋庣墿娴佹湁闄愬叕鍙?/td>
                                <td style="padding: 10px;">2023-12-02</td>
                                <td style="padding: 10px;">USD</td>
                                <td style="padding: 10px; text-align: right;">500.00</td>
                                <td style="padding: 10px; text-align: right;">0.00</td>
                                <td style="padding: 10px; text-align: right;">500.00</td>
                                <td style="padding: 10px; text-align: right;">3,600.00</td>
                                <td style="padding: 10px;">YO2512-0021</td>
                                <td style="padding: 10px;">B2023120201</td>
                                <td style="padding: 10px;">鏉庡洓</td>
                                <td style="padding: 10px;">2023-12-02 14:30</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 10px; text-align: center;"><input type="checkbox"></td>
                                <td style="padding: 10px; text-align: center;">3</td>
                                <td style="padding: 10px;"><span style="background: #fef3c7; color: #d97706; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">瀹℃牳涓?/span></td>
                                <td style="padding: 10px;">-</td>
                                <td style="padding: 10px;">涓撶エ(13%)</td>
                                <td style="padding: 10px;">涓婃捣甯備笢鏂瑰浗闄呯墿娴侀泦鍥?/td>
                                <td style="padding: 10px;">2023-12-03</td>
                                <td style="padding: 10px;">CNY</td>
                                <td style="padding: 10px; text-align: right;">5,000.00</td>
                                <td style="padding: 10px; text-align: right;">650.00</td>
                                <td style="padding: 10px; text-align: right;">5,650.00</td>
                                <td style="padding: 10px; text-align: right;">5,650.00</td>
                                <td style="padding: 10px;">YO2512-0022</td>
                                <td style="padding: 10px;">B2023120301</td>
                                <td style="padding: 10px;">鐜嬩簲</td>
                                <td style="padding: 10px;">2023-12-03 09:15</td>
                                <td style="padding: 10px; text-align: center;"><i data-lucide="more-horizontal" style="width: 14px; height: 14px; color: #94a3b8; cursor: pointer;"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        else if (activeTab === '寮€绁ㄨ垂鐢ㄩ厤杞?) {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Action Bar -->
                     <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 12px 24px; display: flex; justify-content: flex-end; align-items: center;">
                         <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.85rem; cursor: pointer;">
                            <i data-lucide="plus-circle" style="width: 16px; height: 16px;"></i> 鏂板
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>璐х墿鎴栧簲绋庡姵鍔°€佹湇鍔″悕绉?/th>
                                    <th>绋庢敹鍒嗙被</th>
                                    <th>绋庣巼</th>
                                    <th>鏄惁鍏嶇◣</th>
                                    <th>鎿嶄綔</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                    <td colspan="6" style="height: 300px; text-align: center; color: #94a3b8; vertical-align: middle;">
                                        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                                             <div style="width: 64px; height: 64px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                                <i data-lucide="search" style="width: 32px; height: 32px; color: #cbd5e1;"></i>
                                             </div>
                                             <span>鏆傛棤鏁版嵁</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '绾㈠瓧鐢宠纭鍗?) {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                     <!-- Status Tabs -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px;">
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">寰呭啿绾?/div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">寰呰喘鏂圭‘璁?/div>
                             <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">寰呴攢鏂圭‘璁?/div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">鐢宠涓?/div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">鐢宠澶辫触</div>
                             <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">浣滃簾</div>
                             <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">宸插啿绾?/div>
                        </div>
                    </div>

                    <!-- Filter Area -->
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Application Time -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鐢宠鏃堕棿</label>
                            <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                                <input type="text" placeholder="寮€濮嬫棩鏈? style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none; padding-left: 8px;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1;"></i>
                                <span style="color: #cbd5e1; padding: 0 4px;">-</span>
                                <input type="text" placeholder="缁撴潫鏃ユ湡" style="width: 85px; height: 32px; border: none; font-size: 0.8rem; outline: none;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #cbd5e1; padding-right: 8px;"></i>
                            </div>
                        </div>

                        <!-- Invoice Type -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鍙戠エ绫诲瀷</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #334155; font-size: 0.8rem;">鍏ㄩ儴</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                         <!-- Invoice Medium -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鍙戠エ浠嬭川</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #334155; font-size: 0.8rem;">鍏ㄩ儴</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                         <!-- Search Input -->
                        <div style="display: flex; align-items: center;">
                            <input type="text" placeholder="璇疯緭鍏ヨ喘涔版柟鍚嶇О/钃濆瓧鍙戠エ鍙风爜" style="width: 240px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                         <!-- Applicant -->
                         <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鐢宠浜?/label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th>淇℃伅琛ㄧ紪鍙?/th>
                                    <th>姝ｆ暟鍙戠エ鍙风爜</th>
                                    <th>璐拱鏂瑰悕绉?/th>
                                    <th>璐拱鏂圭◣鍙?/th>
                                    <th>鍙戠エ绫诲瀷</th>
                                    <th>鍙戠エ浠嬭川</th>
                                    <th>鐢宠浜?/th>
                                    <th>鐢宠鏃堕棿</th>
                                    <th>澶嶆牳浜?/th>
                                    <th>鎿嶄綔娴佹按鍙?鏃堕棿</th>
                                    <th>鎿嶄綔鎴愬姛鏃堕棿</th>
                                    <th>鎵€灞炲叕鍙?/th>
                                    <th>鎻忚堪</th>
                                    <th>鎿嶄綔</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                    <td colspan="14" style="height: 300px; text-align: center; color: #94a3b8; vertical-align: middle;">
                                        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                                             <div style="width: 64px; height: 64px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                                <i data-lucide="search" style="width: 32px; height: 32px; color: #cbd5e1;"></i>
                                             </div>
                                             <span>鏆傛棤鏁版嵁</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '缁撶畻鍗曚綅') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Filter Area -->
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
                         <!-- Settlement Unit Search -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">缁撶畻鍗曚綅</label>
                            <div style="position: relative; width: 200px;">
                                <input type="text" placeholder="璇疯緭鍏? style="width: 100%; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 32px 0 12px; font-size: 0.8rem; outline: none;">
                                <i data-lucide="search" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>

                        <!-- Nature -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鎬ц川</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #334155; font-size: 0.8rem;">鍏ㄩ儴</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                         <!-- Type -->
                         <div style="display: flex; align-items: center; gap: 12px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">绫诲瀷</label>
                            <div style="display: flex; gap: 12px; align-items: center; font-size: 0.8rem; color: #334155;">
                                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                    <input type="radio" name="unit-type" checked style="accent-color: #3b82f6;"> 鍏ㄩ儴
                                </label>
                                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                    <input type="radio" name="unit-type" style="accent-color: #3b82f6;"> 澶栭儴
                                </label>
                                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                                    <input type="radio" name="unit-type" style="accent-color: #3b82f6;"> 鍐呴儴
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th>缁撶畻鍗曚綅</th>
                                    <th>鍚嶇О(鑻?</th>
                                    <th>鎵€灞炲叕鍙?/th>
                                    <th>绫诲瀷</th>
                                    <th>鎬ц川</th>
                                    <th>鍏宠仈缁撶畻鍗曚綅</th>
                                    <th>鎿嶄綔</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; color: #334155;">娣卞湷甯傝繙閫氱墿娴佹湁闄愬叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">SHENZHEN YUANTONG LOGISTICS CO., LTD</td>
                                    <td style="padding: 12px; color: #64748b;">涓板崕鐗╂祦</td>
                                    <td style="padding: 12px; color: #64748b;">澶栭儴</td>
                                    <td style="padding: 12px; color: #64748b;">浼佷笟</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">缂栬緫</a>
                                        <a href="#" style="color: #ef4444;">鍒犻櫎</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                    <td style="padding: 12px; color: #334155;">骞垮窞蹇繍杈捐揣杩愪唬鐞嗘湁闄愬叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">GUANGZHOU FAST FREIGHT AGENCY CO., LTD</td>
                                    <td style="padding: 12px; color: #64748b;">涓板崕鐗╂祦</td>
                                    <td style="padding: 12px; color: #64748b;">澶栭儴</td>
                                    <td style="padding: 12px; color: #64748b;">浼佷笟</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">缂栬緫</a>
                                        <a href="#" style="color: #ef4444;">鍒犻櫎</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; color: #334155;">鍐呴儴缁撶畻涓績</td>
                                    <td style="padding: 12px; color: #64748b;">INTERNAL SETTLEMENT CENTER</td>
                                    <td style="padding: 12px; color: #64748b;">涓板崕鐗╂祦</td>
                                    <td style="padding: 12px; color: #64748b;">鍐呴儴</td>
                                    <td style="padding: 12px; color: #64748b;">閮ㄩ棬</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">缂栬緫</a>
                                        <a href="#" style="color: #ef4444;">鍒犻櫎</a>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '閾惰鏀舵娴佹按') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Bar: Status Tabs & Actions -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: flex-end;">
                        <!-- Status Tabs -->
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">瑙勫垯寰呯‘璁?/div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">寰呰棰?/div>
                             <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">宸叉牳閿€</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">鍏跺畠</div>
                        </div>
                        
                         <!-- Action Buttons -->
                        <div style="display: flex; gap: 8px; padding-bottom: 8px;">
                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                瀵煎叆
                            </button>
                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                涓嬭浇娴佹按
                            </button>
                        </div>
                    </div>

                    <!-- Filter Area -->
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Keyword Input -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鍏抽敭瀛?/label>
                            <input type="text" placeholder="浠樻鏂规埛鍚?浠樻閾惰璐﹀彿/鎽樿/娴佹按鍙? style="width: 260px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Receiving Account -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鏀舵璐︽埛</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 150px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>鏀舵鎴峰悕</th>
                                    <th>鏀舵鏀</th>
                                    <th>鏀舵閾惰璐﹀彿</th>
                                    <th>甯佸埗</th>
                                    <th>閾惰娴佹按鍙?/th>
                                    <th>鏀舵閲戦</th>
                                    <th>鏀舵鏃堕棿</th>
                                    <th>浠樻鏂规埛鍚?/th>
                                    <th>缁撶畻鍗曚綅</th>
                                    <th>浠樻閾惰璐﹀彿</th>
                                    <th>浠樻鎽樿</th>
                                    <th>鍖归厤鍗曞彿</th>
                                    <th>鐢靛瓙鍥炴墽</th>
                                    <th>鎿嶄綔</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center; color: #64748b;">1</td>
                                    <td style="padding: 12px; color: #334155;">娣卞湷甯傝繙閫氱墿娴佹湁闄愬叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">鎷涘晢閾惰娣卞湷鍒嗚</td>
                                    <td style="padding: 12px; color: #64748b;">755912345678901</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #64748b;">202512270001</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">50,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">2025-12-27 10:30</td>
                                    <td style="padding: 12px; color: #64748b;">ABC TRADING LTD</td>
                                    <td style="padding: 12px; color: #64748b;">鎬诲叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">6222021234567890</td>
                                    <td style="padding: 12px; color: #64748b;">璐ф</td>
                                    <td style="padding: 12px; color: #64748b;">ORDER-001</td>
                                    <td style="padding: 12px; color: #64748b;">宸茬敓鎴?/td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">璇︽儏</a>
                                        <a href="#" style="color: #2563eb;">璁ら</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                    <td style="padding: 12px; text-align: center; color: #64748b;">2</td>
                                    <td style="padding: 12px; color: #334155;">骞垮窞蹇繍杈捐揣杩愪唬鐞嗘湁闄愬叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">涓浗閾惰骞垮窞鍒嗚</td>
                                    <td style="padding: 12px; color: #64748b;">621234567890123</td>
                                    <td style="padding: 12px; color: #64748b;">USD</td>
                                    <td style="padding: 12px; color: #64748b;">202512270002</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">10,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">2025-12-27 11:15</td>
                                    <td style="padding: 12px; color: #64748b;">XYZ LOGISTICS INC</td>
                                    <td style="padding: 12px; color: #64748b;">骞垮窞鍒嗗叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">4567890123456789</td>
                                    <td style="padding: 12px; color: #64748b;">杩愯垂</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px; color: #64748b;">-</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">璇︽儏</a>
                                        <a href="#" style="color: #2563eb;">璁ら</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center; color: #64748b;">3</td>
                                    <td style="padding: 12px; color: #334155;">娣卞湷甯傝繙閫氱墿娴佹湁闄愬叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">宸ュ晢閾惰娣卞湷鍒嗚</td>
                                    <td style="padding: 12px; color: #64748b;">955880123456789</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #64748b;">202512270003</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">2,500.00</td>
                                    <td style="padding: 12px; color: #64748b;">2025-12-27 14:00</td>
                                    <td style="padding: 12px; color: #64748b;">GLOBAL TRADERS</td>
                                    <td style="padding: 12px; color: #64748b;">鎬诲叕鍙?/td>
                                    <td style="padding: 12px; color: #64748b;">1234567890123456</td>
                                    <td style="padding: 12px; color: #64748b;">鏈嶅姟璐?/td>
                                    <td style="padding: 12px; color: #64748b;">ORDER-002</td>
                                    <td style="padding: 12px; color: #64748b;">宸茬敓鎴?/td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">璇︽儏</a>
                                        <a href="#" style="color: #2563eb;">璁ら</a>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        }

        // Conditional dropdown for Customer Bill
        let sidebarDropdownHTML = '';
        if (activeTab === '鍙戠エ绠＄悊' || activeTab === '瀹㈡埛璐﹀崟' || activeTab === '璐圭敤鏄庣粏' || activeTab === '搴旀敹鏄庣粏' || activeTab === '搴斾粯鏄庣粏' || activeTab === '鏀朵粯娆? || activeTab === '浠樻鐢宠' || activeTab === '寮€绁ㄧ敵璇?) {
            sidebarDropdownHTML = `
                <div class="sidebar-filter-dropdown relative-container" style="padding: 12px 12px 0 12px;">
                    <div class="select-box" style="width: 100%; height: 32px; justify-content: space-between; background: white; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; cursor: pointer;" onclick="this.nextElementSibling.classList.toggle('hidden')">
                        <span id="customer-filter-selected" style="font-size: 0.75rem; color: #334155;">鍏ㄩ儴瀹㈠晢</span>
                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                    </div>
                    <div class="dropdown-menu-custom hidden" style="width: calc(100% - 24px); top: calc(100% + 4px); left: 12px; border-radius: 4px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px;" onclick="selectOption('customer-filter-selected', '鏈夊緟鍑鸿处鍗曡垂鐢ㄥ鍟?)">鏈夊緟鍑鸿处鍗曡垂鐢ㄥ鍟?/div>
                        <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px;" onclick="selectOption('customer-filter-selected', '鏈夋湭閿€浣欓瀹㈠晢')">鏈夋湭閿€浣欓瀹㈠晢</div>
                        <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px;" onclick="selectOption('customer-filter-selected', '鍏ㄩ儴瀹㈠晢')">鍏ㄩ儴瀹㈠晢</div>
                    </div>
                </div>
                `;
        } else if (activeTab === '閾惰浠樻娴佹按') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Bar: Status Tabs & Actions -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px; display: flex; justify-content: space-between; align-items: flex-end;">
                        <!-- Status Tabs -->
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div class="internal-tab active" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">寰呮彁浜?/div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">浠樻澶勭悊涓?/div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">宸蹭粯娆?/div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">宸叉牳閿€</div>
                            <div class="internal-tab" style="padding: 12px 0; cursor: pointer;">鍏跺畠</div>
                        </div>
                        
                         <!-- Action Buttons -->
                        <div style="display: flex; gap: 8px; padding-bottom: 8px;">
                            <button class="action-btn" style="height: 32px; padding: 0 16px; background: #ef4444; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                鍒犻櫎
                            </button>
                             <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                瀵煎叆
                            </button>
                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; cursor: pointer;">
                                鎻愪氦浠樻
                            </button>
                        </div>
                    </div>

                    <!-- Filter Area -->
                    <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                         <!-- Keyword Input -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鍏抽敭瀛?/label>
                            <input type="text" placeholder="鏀舵鏂规埛鍚?鏀舵閾惰璐﹀彿" style="width: 200px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Currency -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">甯佸埗</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span style="color: #cbd5e1; font-size: 0.8rem;">璇烽€夋嫨</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>
                    </div>

                    <!-- Table -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                         <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>浠樻鐢宠鍗曞彿</th>
                                    <th>浠樻鐢宠浜?/th>
                                    <th>缁撶畻鍗曚綅</th>
                                    <th>鏀舵鏂规埛鍚?/th>
                                    <th>瀵规柟鏀舵鏀</th>
                                    <th>甯佸埗</th>
                                    <th>浠樻閲戦</th>
                                    <th>澶囨敞</th>
                                    <th>鎿嶄綔</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 12px; text-align: center; color: #64748b;">1</td>
                                    <td style="padding: 12px; color: #334155;">PAY-20251227-001</td>
                                    <td style="padding: 12px; color: #64748b;">寮犱笁</td>
                                    <td style="padding: 12px; color: #64748b;">鎬诲叕鍙?/td>
                                    <td style="padding: 12px; color: #334155;">娣卞湷甯備緵搴斿晢A鏈夐檺鍏徃</td>
                                    <td style="padding: 12px; color: #64748b;">寤鸿閾惰娣卞湷鍒嗚</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">12,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">閲囪喘娆?/td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">璇︽儏</a>
                                        <a href="#" style="color: #ef4444;">鍒犻櫎</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                    <td style="padding: 12px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 12px; text-align: center; color: #64748b;">2</td>
                                    <td style="padding: 12px; color: #334155;">PAY-20251227-002</td>
                                    <td style="padding: 12px; color: #64748b;">鏉庡洓</td>
                                    <td style="padding: 12px; color: #64748b;">骞垮窞鍒嗗叕鍙?/td>
                                    <td style="padding: 12px; color: #334155;">GLOBAL COMMERCE INC</td>
                                    <td style="padding: 12px; color: #64748b;">HSBC HK</td>
                                    <td style="padding: 12px; color: #64748b;">USD</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">5,000.00</td>
                                    <td style="padding: 12px; color: #64748b;">Service Fee</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">璇︽儏</a>
                                        <a href="#" style="color: #ef4444;">鍒犻櫎</a>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #f1f5f9;">
                                    <td style="padding: 12px; text-align: center;"><input type="checkbox"></td>
                                    <td style="padding: 12px; text-align: center; color: #64748b;">3</td>
                                    <td style="padding: 12px; color: #334155;">PAY-20251227-003</td>
                                    <td style="padding: 12px; color: #64748b;">鐜嬩簲</td>
                                    <td style="padding: 12px; color: #64748b;">鎬诲叕鍙?/td>
                                    <td style="padding: 12px; color: #334155;">涓婃捣鐗╂祦鍚堜綔浼欎即</td>
                                    <td style="padding: 12px; color: #64748b;">鍐滀笟閾惰涓婃捣鍒嗚</td>
                                    <td style="padding: 12px; color: #64748b;">CNY</td>
                                    <td style="padding: 12px; color: #334155; font-weight: 500;">3,500.00</td>
                                    <td style="padding: 12px; color: #64748b;">杩愯垂琛ヨ创</td>
                                    <td style="padding: 12px;">
                                        <a href="#" style="color: #2563eb; margin-right: 8px;">璇︽儏</a>
                                        <a href="#" style="color: #ef4444;">鍒犻櫎</a>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </div>
                </div>`;
        } else if (activeTab === '閾朵紒鐩磋繛閰嶇疆') {
            mainContent = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <!-- Top Status Tabs -->
                    <div style="width: 100%; border-bottom: 1px solid #e2e8f0; background: white; padding: 0 24px;">
                        <div class="internal-tabs" style="display: flex; gap: 24px; font-size: 0.85rem; color: #475569;">
                            <div id="tab-bank-account" class="internal-tab active" onclick="toggleBankConfigTab('account')" style="padding: 12px 0; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer;">閾惰璐︽埛</div>
                            <div id="tab-params-config" class="internal-tab" onclick="toggleBankConfigTab('params')" style="padding: 12px 0; cursor: pointer;">鍙傛暟閰嶇疆</div>
                        </div>
                    </div>

                    <!-- View: Bank Account -->
                    <div id="bank-account-view" style="display: flex; flex-direction: column; flex-grow: 1;">
                        <!-- Filter Area -->
                        <div class="bill-filter-area" style="padding: 12px 24px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                 <!-- Keyword Input -->
                                <div style="display: flex; align-items: center; gap: 8px;">
                                     <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鍏抽敭瀛?/label>
                                    <input type="text" placeholder="閾惰璐﹀彿/璐︽埛鍚嶇О/寮€鎴锋敮琛? style="width: 280px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                                </div>

                                <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                                    <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                                </button>
                            </div>
                            
                            <a href="#" style="font-size: 0.8rem; color: #3b82f6; text-decoration: none;">鎬庢牱寮€閫氶摱浼佺洿杩烇紵</a>
                        </div>

                        <!-- Table -->
                        <div class="statement-table-container" style="flex-grow: 1; background: #fff; padding: 0; overflow: auto;">
                             <table class="statement-table">
                                <thead>
                                    <tr>
                                        <th>寮€鎴疯鍚嶇О</th>
                                        <th>璐︽埛鍚嶇О</th>
                                        <th>閾惰璐﹀彿</th>
                                        <th>甯佸埗</th>
                                        <th>鐘舵€?/th>
                                        <th>鎿嶄綔</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 12px; color: #334155;">寰俊</td>
                                        <td style="padding: 12px; color: #334155;">娣卞湷杩愯緭浜戠墿娴佺鎶€鏈夐檺鍏徃A</td>
                                        <td style="padding: 12px; color: #334155;">342546578687980</td>
                                        <td style="padding: 12px; color: #64748b;">USD</td>
                                        <td style="padding: 12px; color: #64748b; display: flex; align-items: center; gap: 6px;">
                                            <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #3b82f6;"></div> 鏈縺娲?
                                        </td>
                                        <td style="padding: 12px;">
                                            <a href="#" style="color: #2563eb;">婵€娲?/a>
                                        </td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                                        <td style="padding: 12px; color: #334155;">鎷涘晢閾惰</td>
                                        <td style="padding: 12px; color: #334155;">娣卞湷杩愯緭浜戠墿娴佺鎶€鏈夐檺鍏徃A</td>
                                        <td style="padding: 12px; color: #334155;">31425465782423</td>
                                        <td style="padding: 12px; color: #64748b;">CNY</td>
                                        <td style="padding: 12px; color: #64748b; display: flex; align-items: center; gap: 6px;">
                                            <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #3b82f6;"></div> 鏈縺娲?
                                        </td>
                                        <td style="padding: 12px;">
                                            <a href="#" style="color: #2563eb;">婵€娲?/a>
                                        </td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 12px; color: #334155;">鎷涘晢閾惰</td>
                                        <td style="padding: 12px; color: #334155;">娣卞湷杩愯緭浜戠墿娴佺鎶€鏈夐檺鍏徃A</td>
                                        <td style="padding: 12px; color: #334155;">12423546789809</td>
                                        <td style="padding: 12px; color: #64748b;">USD</td>
                                        <td style="padding: 12px; color: #64748b; display: flex; align-items: center; gap: 6px;">
                                            <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #3b82f6;"></div> 鏈縺娲?
                                        </td>
                                        <td style="padding: 12px;">
                                            <a href="#" style="color: #2563eb;">婵€娲?/a>
                                        </td>
                                    </tr>
                                </tbody>
                             </table>
                        </div>
                    </div>

                    <!-- View: Parameter Config -->
                    <div id="parameter-config-view" style="display: none; padding: 24px; flex-direction: column; gap: 20px; max-width: 800px;">
                        
                        <div style="display: flex; align-items: center;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold;"><span style="color: #ef4444;">* </span>瀹㈡埛鍙?/label>
                            <input type="text" placeholder="璇疯緭鍏? style="flex: 1; height: 36px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 0 12px; outline: none;">
                        </div>

                        <div style="display: flex; align-items: flex-start;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold; margin-top: 8px;"><span style="color: #ef4444;">* </span>绉侀挜</label>
                            <textarea placeholder="璇疯緭鍏? style="flex: 1; height: 120px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 12px; outline: none; resize: vertical;"></textarea>
                        </div>

                        <div style="display: flex; align-items: center;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold;"><span style="color: #ef4444;">* </span>appkey</label>
                            <input type="text" placeholder="璇疯緭鍏? style="flex: 1; height: 36px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 0 12px; outline: none;">
                        </div>

                        <div style="display: flex; align-items: center;">
                            <label style="width: 100px; text-align: right; padding-right: 16px; font-size: 0.9rem; color: #334155; font-weight: bold;"><span style="color: #ef4444;">* </span>鍗曚綅浠ｇ爜</label>
                            <input type="text" placeholder="璇疯緭鍏? style="flex: 1; height: 36px; background-color: #ffe4e6; border: 1px solid #fda4af; border-radius: 4px; padding: 0 12px; outline: none;">
                        </div>

                        <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                            <button style="display: flex; align-items: center; gap: 6px; background-color: #2563eb; color: white; padding: 8px 24px; border: none; border-radius: 4px; font-size: 0.9rem; cursor: pointer;">
                                <i data-lucide="save" style="width: 16px; height: 16px;"></i> 淇濆瓨
                            </button>
                        </div>

                    </div>
                </div>
                `;





        } else if (activeTab === '鎵归噺纭') {
            document.querySelector('.page-content').innerHTML = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Filter Area (Replicating Image) -->
                <div class="batch-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                    <!-- Date Group -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>璁¤垂鏃ユ湡</span>
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

                        <!-- Confirm Status -->
                        <div style="display: flex; align-items: center; gap: 8px;" class="relative-container">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">纭鐘舵€?/label>
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="batch-confirm-status">鍏ㄩ儴</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100px; position: absolute; top: 100%; left: 58px; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-confirm-status', '鍏ㄩ儴')">鍏ㄩ儴</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-confirm-status', '宸茬‘璁?)">宸茬‘璁?/div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-confirm-status', '鏈‘璁?)">鏈‘璁?/div>
                            </div>
                        </div>

                        <!-- Type -->
                        <div style="display: flex; align-items: center; gap: 8px;" class="relative-container">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">绫诲瀷</label>
                            <div class="select-box" style="width: 100px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="batch-type">鍏ㄩ儴</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 100px; position: absolute; top: 100%; left: 32px; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '鍏ㄩ儴')">鍏ㄩ儴</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '璐圭敤鍗?)">璐圭敤鍗?/div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '鏁磋溅')">鏁磋溅</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '闆舵媴')">闆舵媴</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '鐭┏')">鐭┏</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-type', '鍏朵粬')">鍏朵粬</div>
                            </div>
                        </div>

                        <!-- Range -->
                        <div style="display: flex; align-items: center; gap: 8px;" class="relative-container">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鑼冨洿</label>
                            <div class="select-box" style="width: 130px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                <span id="batch-range">鍙湅鎴戣礋璐ｇ殑</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                            <div class="dropdown-menu-custom hidden" style="width: 130px; position: absolute; top: 100%; left: 32px; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-range', '鍙湅鎴戣礋璐ｇ殑')">鍙湅鎴戣礋璐ｇ殑</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-range', '鍙湅鏈夎垂鐢ㄧ殑')">鍙湅鏈夎垂鐢ㄧ殑</div>
                                <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('batch-range', '鍙湅鏃犺垂鐢ㄧ殑')">鍙湅鏃犺垂鐢ㄧ殑</div>
                            </div>
                        </div>

                        <!-- Keyword -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鍏抽敭瀛?/label>
                            <input type="text" placeholder="宸ヤ綔鍙? style="width: 150px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>

                        <div class="relative-container">
                            <button class="action-btn" style="height: 32px; padding: 0 12px; display: flex; align-items: center; gap: 4px; border: 1px solid #e2e8f0; background: white; border-radius: 4px; font-size: 0.8rem; cursor: pointer;">
                                鏇村(0) <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                            </button>
                        </div>

                        <div class="relative-container" style="margin-left: auto;">
                            <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #dbeafe; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 4px; display: flex; align-items: center; gap: 8px; font-size: 0.8rem; cursor: pointer;">
                                鎵归噺澶勭悊
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                            </button>
                            <div class="dropdown-menu-custom hidden" style="width: 150px; position: absolute; top: 100%; right: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('璐圭敤纭')">璐圭敤纭</div>
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('鍙栨秷璐圭敤纭')">鍙栨秷璐圭敤纭</div>
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('搴旀敹搴斾粯瀹屾垚')">搴旀敹搴斾粯瀹屾垚</div>
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('搴旀敹瀹屾垚')">搴旀敹瀹屾垚</div>
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('搴斾粯瀹屾垚')">搴斾粯瀹屾垚</div>
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('鍙栨秷搴旀敹搴斾粯瀹屾垚')">鍙栨秷搴旀敹搴斾粯瀹屾垚</div>
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('鍙栨秷搴旀敹瀹屾垚')">鍙栨秷搴旀敹瀹屾垚</div>
                                <div class="dropdown-item-custom" style="padding: 8px 12px; cursor: pointer; font-size: 0.75rem;" onclick="console.log('鍙栨秷搴斾粯瀹屾垚')">鍙栨秷搴斾粯瀹屾垚</div>
                            </div>
                        </div>
                    </div>

                    <!-- Table Content Area -->
                    <div class="statement-table-container" style="flex-grow: 1; background: #f8fafc; padding: 0; overflow: auto;">
                        <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>纭鐘舵€?/th>
                                    <th>搴旀敹纭</th>
                                    <th>搴斾粯纭</th>
                                    <th>宸ヤ綔鍗曞彿</th>
                                    <th>璐圭敤鍚嶇О</th>
                                    <th>鏀朵粯鏂瑰悜</th>
                                    <th>缁撶畻鍗曚綅</th>
                                    <th>缁撶畻鍗曚綅绠€绉?/th>
                                    <th>璁¤垂鏃ユ湡</th>
                                    <th>涓氬姟鏃ユ湡</th>
                                    <th>甯佺</th>
                                    <th>鍗曚环</th>
                                    <th>鏁伴噺</th>
                                    <th>鍗曚綅</th>
                                    <th>姹囩巼</th>
                                    <th>鍘熷竵閲戦</th>
                                    <th>绋庣巼</th>
                                    <th>绋庨</th>
                                    <th>浠风◣鍚堣</th>
                                    <th>鏈竵閲戦</th>
                                    <th>涓氬姟鍛?/th>
                                    <th>瀹㈡埛缁忕悊</th>
                                    <th>鎿嶄綔鍛?/th>
                                    <th>鎵€灞炲叕鍙?/th>
                                    <th>澶囨敞</th>
                                    <th>鑸瑰悕</th>
                                    <th>鑸</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>`;
        } else if (activeTab === '璐圭敤瀹℃牳') {
            document.querySelector('.page-content').innerHTML = `
                    <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                <!-- Filter Area -->
                <div class="audit-filter-area" style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                    <!-- Billing Date Group -->
                    <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; overflow: hidden;">
                        <div class="select-box-filter" style="width: 95px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                            <span>璁¤垂鏃ユ湡</span>
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

                        <!-- Type -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">绫诲瀷</label>
                            <div class="relative-container">
                                <div class="select-box" style="width: 120px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 10px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                                    <span id="audit-type-val">鍏ㄩ儴</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="dropdown-menu-custom hidden" style="width: 120px; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '鍏ㄩ儴')">鍏ㄩ儴</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '璐圭敤鍗?)">璐圭敤鍗?/div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '鏁磋溅')">鏁磋溅</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '闆舵媴')">闆舵媴</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '鐭┏')">鐭┏</div>
                                    <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-type-val', '鍏朵粬')">鍏朵粬</div>
                                </div>
                            </div>
                        </div>

                        <!-- Keywords -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">鍏抽敭瀛?/label>
                            <input type="text" placeholder="宸ヤ綔鍗曞彿" style="width: 150px; height: 32px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 12px; font-size: 0.8rem; outline: none;">
                        </div>

                        <!-- Expense Audit -->
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="font-size: 0.8rem; color: #475569; font-weight: 500;">璐圭敤瀹℃牳</label>
                            <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px;">
                                <div class="select-box-filter" style="width: 70px; height: 32px; border-right: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: #f8fafc; font-size: 0.8rem; cursor: pointer;">
                                    <span>鍖呭惈</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                </div>
                                <div class="relative-container">
                                    <div class="select-box-filter" style="width: 120px; height: 32px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; background: white; font-size: 0.8rem; cursor: pointer;">
                                        <span id="audit-status-val" style="color: #cbd5e1;">璇烽€夋嫨</span>
                                        <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                                    </div>
                                    <div class="dropdown-menu-custom hidden" style="width: 120px; position: absolute; top: 100%; left: 0; z-index: 100; background: white; border: 1px solid #e2e8f0; border-radius: 4px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                        <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '鏈彁浜?)">鏈彁浜?/div>
                                        <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '瀹℃牳涓?)">瀹℃牳涓?/div>
                                        <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '瀹℃牳閫氳繃')">瀹℃牳閫氳繃</div>
                                        <div class="dropdown-item-custom" style="font-size: 0.75rem; padding: 8px 12px; cursor: pointer;" onclick="selectOption('audit-status-val', '瀹℃牳椹冲洖')">瀹℃牳椹冲洖</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; font-size: 0.8rem; cursor: pointer;">
                            <i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ
                        </button>

                        <button class="action-btn" style="height: 32px; padding: 0 12px; display: flex; align-items: center; gap: 4px; border: 1px solid #e2e8f0; background: white; border-radius: 4px; font-size: 0.8rem; cursor: pointer;">
                            鏇村(0) <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                        </button>
                    </div>

                    <!-- Table Content Area -->
                    <div class="statement-table-container" style="flex: none; height: auto; max-height: 150px; background: #f8fafc; padding: 0; overflow: auto;">
                        <table class="statement-table">
                            <thead>
                                <tr>
                                    <th style="width: 40px; text-align: center;"><input type="checkbox"></th>
                                    <th style="width: 40px; text-align: center;">#</th>
                                    <th>宸ヤ綔鍙?/th>
                                    <th>宸ヤ綔鍗曟棩鏈?/th>
                                    <th>绛炬敹鏃ユ湡</th>
                                    <th>浠舵暟</th>
                                    <th>杩愬崟绫诲瀷</th>
                                    <th>姣涢噸</th>
                                    <th>涓氬姟鍛?/th>
                                    <th>浣撶Н</th>
                                    <th>鎿嶄綔鍛?/th>
                                    <th>搴旀敹</th>
                                    <th>搴旀敹锛堝鍑忥級</th>
                                    <th>搴斾粯</th>
                                    <th>搴斾粯锛堝鍑忥級</th>
                                    <th>搴旀敹</th>
                                    <th>搴斾粯</th>
                                    <th>涓氬姟鍛樻垚鏈?/th>
                                    <th>鍏徃姣涘埄</th>
                                    <th>瀹㈡湇</th>
                                    <th>涓氬姟鍛樻瘺鍒?/th>
                                    <th>搴旀敹瀹屾垚</th>
                                    <th>搴斾粯瀹屾垚</th>
                                    <th>鏀舵鐘舵€?/th>
                                    <th>浠樻鐘舵€?/th>
                                    <th>鎵€灞炲叕鍙?/th>
                                    <th>鎿嶄綔</th>
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
                                    <td>鏁磋溅</td>
                                    <td>1200.50</td>
                                    <td>寮犱笁</td>
                                    <td>2.5</td>
                                    <td>鏉庡洓</td>
                                    <td>5000.00</td>
                                    <td>0.00</td>
                                    <td>3500.00</td>
                                    <td>0.00</td>
                                    <td>5000.00</td>
                                    <td>3500.00</td>
                                    <td>3500.00</td>
                                    <td>1500.00</td>
                                    <td>鐜嬩簲</td>
                                    <td>1500.00</td>
                                    <td>宸插畬鎴?/td>
                                    <td>鏈畬鎴?/td>
                                    <td>閮ㄥ垎鏀舵</td>
                                    <td>鏈粯娆?/td>
                                    <td>涓板洯鐗╂祦</td>
                                    <td style="text-align: center;"><a href="#" style="color: #2563eb;">璇︽儏</a></td>
                                </tr>
                                <tr style="background: #f8fafc;">
                                    <td style="text-align: center;"><input type="checkbox"></td>
                                    <td style="text-align: center;">2</td>
                                    <td>YO2512-0020</td>
                                    <td>2025-12-26</td>
                                    <td>2025-12-27</td>
                                    <td>50</td>
                                    <td>闆舵媴</td>
                                    <td>450.00</td>
                                    <td>椹叚</td>
                                    <td>1.2</td>
                                    <td>闄堜竷</td>
                                    <td>8000.00</td>
                                    <td>100.00</td>
                                    <td>6000.00</td>
                                    <td>50.00</td>
                                    <td>8100.00</td>
                                    <td>6050.00</td>
                                    <td>6050.00</td>
                                    <td>2050.00</td>
                                    <td>璧靛叓</td>
                                    <td>2050.00</td>
                                    <td>鏈畬鎴?/td>
                                    <td>鏈畬鎴?/td>
                                    <td>鏈敹娆?/td>
                                    <td>鏈粯娆?/td>
                                    <td>璐濆娴嬭瘯</td>
                                    <td style="text-align: center;"><a href="#" style="color: #2563eb;">璇︽儏</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                    <!-- Expense Detail Section -->
                    <div class="expense-detail-section" style="border-top: 1px solid #e2e8f0; background: white; flex: 1; display: flex; flex-direction: column; overflow: hidden;">
                        <!-- Control Bar -->
                        <div style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: white;">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <a href="#" style="color: #2563eb; display: flex; align-items: center; gap: 4px; text-decoration: none; font-size: 0.9rem;">
                                    鏀惰捣搴旀敹搴斾粯鍗?<i data-lucide="chevron-up" style="width: 14px; height: 14px;"></i>
                                </a>
                                <label style="display: flex; align-items: center; gap: 4px; font-size: 0.9rem; color: #475569;">
                                    <input type="checkbox" checked> 鏄剧ず澧炲噺璐圭敤
                                </label>
                                <div style="display: flex; gap: 8px;">
                                    <button style="background: #22c55e; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; cursor: pointer;">瀹℃牳閫氳繃</button>
                                    <button style="background: #f97316; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; cursor: pointer;">椹冲洖</button>
                                    <button style="background: #ef4444; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; cursor: pointer;">鎾ら攢瀹℃牳</button>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 24px; font-size: 0.9rem; color: #1e293b;">
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <span style="font-size: 0.8rem; color: #64748b;">姣涘埄鐜?/span>
                                    <span style="font-weight: 600;">0%</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: start;">
                                    <span style="font-size: 0.8rem; color: #64748b;">鎶樺悎甯佸埗 <i data-lucide="help-circle" style="width: 12px; height: 12px;"></i></span>
                                    <select style="border: 1px solid #e2e8f0; border-radius: 2px; font-size: 0.8rem; padding: 1px 4px;">
                                        <option>CNY</option>
                                    </select>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">搴旀敹</span>
                                    <span style="font-weight: 600;">700.00</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">搴斾粯</span>
                                    <span style="font-weight: 600;">112.00</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">鍏徃鍒╂鼎</span>
                                    <span style="font-weight: 600;">588.00</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: end;">
                                    <span style="font-size: 0.8rem; color: #64748b;">鍏跺畠璐圭敤</span>
                                    <span style="font-weight: 600;">0</span>
                                </div>
                            </div>
                        </div>

                        <!-- Details Split View -->
                        <div style="flex-grow: 1; display: flex; overflow: hidden;">
                            <!-- Receivables Column -->
                            <div style="flex: 1; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; padding: 12px;">
                                <div style="font-size: 0.9rem; font-weight: 600; color: #65a30d; margin-bottom: 8px;">搴旀敹 (2) 澧炲噺 (0)</div>
                                <div style="flex-grow: 1; overflow: auto; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
                                        <thead style="background: #f8fafc; position: sticky; top: 0;">
                                            <tr>
                                                <th style="padding: 8px; text-align: center; border-bottom: 1px solid #e2e8f0;"><input type="checkbox"></th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">瀹℃牳鐘舵€?/th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">璁¤垂鏃ユ湡</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">璐圭敤浠ｇ爜</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">璐圭敤鍚嶇О</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">鍘熷竵</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">閲戦</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">瀹㈡埛浠ｇ爜</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">瀹㈡埛鍚嶇О</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">鏁伴噺</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                                <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">2025-12-04</td>
                                                <td style="padding: 8px;">DOFC</td>
                                                <td style="padding: 8px;">鏂囦欢鍗曡瘉璐?/td>
                                                <td style="padding: 8px;">CNY</td>
                                                <td style="padding: 8px; text-align: right;">200.00</td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">杩堟牸涔?鎿嶄綔閮?/td>
                                                <td style="padding: 8px; text-align: right;"></td>
                                            </tr>
                                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                                <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">2025-12-04</td>
                                                <td style="padding: 8px;">DOFC</td>
                                                <td style="padding: 8px;">鏂囦欢鍗曡瘉璐?/td>
                                                <td style="padding: 8px;">CNY</td>
                                                <td style="padding: 8px; text-align: right;">500.00</td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">杩堟牸涔?鎿嶄綔閮?/td>
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
                                <div style="font-size: 0.9rem; font-weight: 600; color: #dc2626; margin-bottom: 8px;">搴斾粯 (1) 澧炲噺 (0)</div>
                                <div style="flex-grow: 1; overflow: auto; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
                                        <thead style="background: #f8fafc; position: sticky; top: 0;">
                                            <tr>
                                                <th style="padding: 8px; text-align: center; border-bottom: 1px solid #e2e8f0;"><input type="checkbox"></th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">瀹℃牳鐘舵€?/th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">璁¤垂鏃ユ湡</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">璐圭敤浠ｇ爜</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">璐圭敤鍚嶇О</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">鍘熷竵</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">閲戦</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">瀹㈡埛浠ｇ爜</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">瀹㈡埛鍚嶇О</th>
                                                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e2e8f0;">瀹㈡埛鍚嶇О</th>
                                                <th style="padding: 8px; text-align: right; border-bottom: 1px solid #e2e8f0;">鏁伴噺</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                                <td style="padding: 8px; text-align: center;"><input type="checkbox"></td>
                                                <td style="padding: 8px;"></td>
                                                <td style="padding: 8px;">2025-12-04</td>
                                                <td style="padding: 8px;">TRNF</td>
                                                <td style="padding: 8px;">浜ら€氳垂</td>
                                                <td style="padding: 8px;">CNY</td>
                                                <td style="padding: 8px; text-align: right;">112.00</td>
                                                <td style="padding: 8px;">YIXING</td>
                                                <td style="padding: 8px;">ZIM</td>
                                                <td style="padding: 8px;">浠ユ槦缁煎悎鑸繍...</td>
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

        } else if (activeTab === '缁撶畻璁剧疆') {
            document.querySelector('.page-content').innerHTML = `
                <div class="statement-main" style="width: 100%; height: 100%; display: flex; flex-direction: column; background: white;">
                    <div style="padding: 12px 24px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: flex-end; background: white;">
                        <button class="primary-btn" style="height: 32px; padding: 0 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer;">
                            <i data-lucide="save" style="width: 14px; height: 14px;"></i> 淇濆瓨
                        </button>
                    </div>
                    <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #334155; cursor: pointer;">
                            <input type="checkbox" style="width: 16px; height: 16px; border: 1px solid #cbd5e1; border-radius: 4px;">
                            鍏ㄤ笟鎬佸伐浣滃崟鐨勫簲浠樿垂鐢ㄩ渶瑕佺粡杩囦粯娆剧敵璇峰鏍搁€氳繃鍚庢墠鑳借繘琛屾牳閿€
                        </label>
                         <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #334155; cursor: pointer;">
                            <input type="checkbox" style="width: 16px; height: 16px; border: 1px solid #cbd5e1; border-radius: 4px;">
                            璐圭敤鍗曠殑璐圭敤闇€瑕佺粡杩囪垂鐢ㄧ敵璇峰鏍搁€氳繃鍚庢墠鑳借繘琛屾牳閿€
                        </label>
                    </div>
                </div>`;

        } else if (activeTab === '璐︽埛鍏呭€?) {
            mainContent = `
                <!-- Recharge Container -->
                <div class="recharge-container">
                    <!-- Left Panel -->
                    <div class="left-panel">
                        <!-- User Info Card -->
                        <div class="info-card">
                            <div class="card-header">
                                <h3>璐︽埛淇℃伅</h3>
                                <i data-lucide="user" style="color: #4a9eff; width: 24px; height: 24px;"></i>
                            </div>
                            <div class="balance-display">
                                <div class="balance-label">褰撳墠浣欓</div>
                                <div class="balance-amount">楼8,450.00</div>
                                <div class="balance-label">浜烘皯甯?/div>
                            </div>
                            <div class="user-details">
                                <div class="detail-item">
                                    <h4>鐢ㄦ埛ID</h4>
                                    <p>ERP-2023-0582</p>
                                </div>
                                <div class="detail-item">
                                    <h4>鍏徃鍚嶇О</h4>
                                    <p>鍒涙柊绉戞妧鏈夐檺鍏徃</p>
                                </div>
                                <div class="detail-item">
                                    <h4>璐︽埛绛夌骇</h4>
                                    <p>VIP 2绾?/p>
                                </div>
                                <div class="detail-item">
                                    <h4>鏈€鍚庡厖鍊?/h4>
                                    <p>2023-10-15</p>
                                </div>
                            </div>
                        </div>

                        <!-- Recent Records -->
                        <div class="recent-records">
                            <div class="card-header">
                                <h3>鏈€杩戝厖鍊艰褰?/h3>
                                <i data-lucide="history" style="color: #4a9eff; width: 20px; height: 20px;"></i>
                            </div>
                            <div class="records-list">
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">楼2,000.00</div>
                                        <div class="record-date">鏀粯瀹濆厖鍊?/div>
                                    </div>
                                    <div class="record-date">2023-10-15</div>
                                </div>
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">楼1,500.00</div>
                                        <div class="record-date">寰俊鏀粯</div>
                                    </div>
                                    <div class="record-date">2023-09-28</div>
                                </div>
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">楼3,000.00</div>
                                        <div class="record-date">閾惰杞处</div>
                                    </div>
                                    <div class="record-date">2023-09-10</div>
                                </div>
                                <div class="record-item">
                                    <div>
                                        <div class="record-amount">楼1,000.00</div>
                                        <div class="record-date">鏀粯瀹濆厖鍊?/div>
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
                                <div class="step-text">閫夋嫨閲戦</div>
                            </div>
                            <div class="step">
                                <div class="step-circle">2</div>
                                <div class="step-text">閫夋嫨鏀粯鏂瑰紡</div>
                            </div>
                            <div class="step">
                                <div class="step-circle">3</div>
                                <div class="step-text">纭鏀粯</div>
                            </div>
                        </div>

                        <!-- Amount Selection -->
                        <div class="amount-selection">
                            <h3>閫夋嫨鍏呭€奸噾棰?/h3>
                            <div class="amount-options">
                                <div class="amount-option" data-amount="100">
                                    <div class="amount-value">楼100</div>
                                    <div class="amount-note">鏅€氱敤鎴?/div>
                                </div>
                                <div class="amount-option" data-amount="500">
                                    <div class="amount-value">楼500</div>
                                    <div class="amount-note">璧犻€伮?0</div>
                                </div>
                                <div class="amount-option selected" data-amount="1000">
                                    <div class="amount-value">楼1,000</div>
                                    <div class="amount-note">璧犻€伮?0</div>
                                </div>
                                <div class="amount-option" data-amount="2000">
                                    <div class="amount-value">楼2,000</div>
                                    <div class="amount-note">璧犻€伮?0</div>
                                </div>
                                <div class="amount-option" data-amount="5000">
                                    <div class="amount-value">楼5,000</div>
                                    <div class="amount-note">璧犻€伮?50</div>
                                </div>
                                <div class="amount-option" data-amount="10000">
                                    <div class="amount-value">楼10,000</div>
                                    <div class="amount-note">璧犻€伮?00</div>
                                </div>
                            </div>
                            <div class="custom-amount">
                                <h4>鑷畾涔夐噾棰?/h4>
                                <input type="number" id="customAmount" placeholder="璇疯緭鍏ュ厖鍊奸噾棰濓紙鏈€浣?00鍏冿級" min="100" step="100">
                            </div>
                        </div>

                        <!-- Payment Methods -->
                        <div class="payment-methods">
                            <h3>閫夋嫨鏀粯鏂瑰紡</h3>
                            <div class="payment-options">
                                <div class="payment-option selected" data-method="alipay">
                                    <div class="payment-icon alipay">
                                        <i data-lucide="scan-line"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>鏀粯瀹?/h4>
                                        <p>鎺ㄨ崘浣跨敤锛屽嵆鏃跺埌璐?/p>
                                    </div>
                                </div>
                                <div class="payment-option" data-method="wechat">
                                    <div class="payment-icon wechat">
                                        <i data-lucide="message-circle"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>寰俊鏀粯</h4>
                                        <p>鎵爜鏀粯锛屽畨鍏ㄥ揩鎹?/p>
                                    </div>
                                </div>
                                <div class="payment-option" data-method="bank">
                                    <div class="payment-icon bank">
                                        <i data-lucide="landmark"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>閾惰杞处</h4>
                                        <p>瀵瑰叕璐︽埛锛?-3宸ヤ綔鏃ュ埌璐?/p>
                                    </div>
                                </div>
                                <div class="payment-option" data-method="other">
                                    <div class="payment-icon other">
                                        <i data-lucide="credit-card"></i>
                                    </div>
                                    <div class="payment-info">
                                        <h4>鍏朵粬鏀粯</h4>
                                        <p>閾惰仈銆丳ayPal绛?/p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="action-buttons">
                            <button class="btn btn-secondary" id="cancelBtn">
                                <i data-lucide="x" style="width: 16px; height: 16px;"></i> 鍙栨秷
                            </button>
                            <button class="btn btn-primary" id="nextBtn">
                                涓嬩竴姝?<i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Payment Modal -->
                <div class="modal" id="paymentModal">
                    <div class="modal-content-custom">
                        <div class="modal-header-custom">
                            <h3>鏀粯瀹濇敮浠?/h3>
                            <button class="close-modal-btn" id="closeModal">&times;</button>
                        </div>
                        <div class="payment-qr">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://alipay.com/pay?amount=1000" alt="鏀粯瀹濇敮浠樹簩缁寸爜">
                            <p>璇蜂娇鐢ㄦ敮浠樺疂鎵弿浜岀淮鐮佸畬鎴愭敮浠?/p>
                            <p>鏀粯閲戦锛?strong>楼1,000.00</strong></p>
                        </div>
                        <div class="action-buttons">
                            <button class="btn btn-secondary" id="cancelPayment">鍙栨秷鏀粯</button>
                            <button class="btn btn-success" id="confirmPayment">宸插畬鎴愭敮浠?/button>
                        </div>
                    </div>
                </div>

                <!-- Success Modal -->
                <div class="modal" id="successModal">
                    <div class="modal-content-custom">
                        <div class="modal-header-custom">
                            <h3>鍏呭€兼垚鍔?/h3>
                            <button class="close-modal-btn" id="closeSuccessModal">&times;</button>
                        </div>
                        <div class="success-message">
                            <div class="success-icon">
                                <i data-lucide="check" style="width: 40px; height: 40px;"></i>
                            </div>
                            <h3>鍏呭€兼垚鍔燂紒</h3>
                            <p>鍏呭€奸噾棰濓細<strong>楼1,000.00</strong></p>
                            <p>璧犻€侀噾棰濓細<strong>楼30.00</strong></p>
                            <p>鍒拌处閲戦锛?strong>楼1,030.00</strong></p>
                            <p style="margin-top: 20px; color: #64748b;">鎮ㄧ殑璐︽埛浣欓宸叉洿鏂?/p>
                        </div>
                        <div class="action-buttons">
                            <button class="btn btn-primary" id="backToRecharge">杩斿洖鍏呭€奸〉闈?/button>
                            <button class="btn btn-success" id="viewBalance">鏌ョ湅璐︽埛浣欓</button>
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
            const showSidebar = !['涓氬姟鍛樻垚鏈槑缁?, '浠ｆ敹浠ｄ粯鏄庣粏', '寮€绁ㄨ垂鐢ㄩ厤杞?, '绾㈠瓧鐢宠纭鍗?, '缁撶畻鍗曚綅', '閾惰鏀舵娴佹按', '閾惰浠樻娴佹按', '閾朵紒鐩磋繛閰嶇疆', '鎺ユ敹璐﹀崟', '缁撶畻璁剧疆', '璐︽埛鍏呭€?].includes(activeTab);
            let contentHTML = '';
            if (showSidebar) {
                contentHTML = `
                <div class="statement-container">
                    <div class="customer-sidebar">
                        <div class="sidebar-header">瀹㈡埛鍒楄〃</div>
                        <div class="sidebar-search">
                            <div class="search-input-group">
                                <input type="text" placeholder="璇疯緭鍏?>
                                <i data-lucide="search" class="search-icon"></i>
                            </div>
                            <button class="more-btn" style="white-space: nowrap;">鏇村</button>
                        </div>
                        <div class="customer-list">
                            <div class="customer-item active">
                                <span>鍏ㄩ儴 (94)</span>
                            </div>
                            ${customers.map(c => `
                                <div class="customer-item">
                                    <span>${c.name} (${c.count})</span>
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

        // Add click listeners for customer selection
        if (activeTab === '瀵硅处鍗?) {
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
            if (item.getAttribute('data-title') === '缁撶畻') {
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
                toggleBtn.innerHTML = '鏇村(2) <i data-lucide="chevron-down"></i>';
            } else {
                toggleBtn.innerHTML = '鏀惰捣 <i data-lucide="chevron-up"></i>';
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

// Function to show the "New Receipt" (鏂板缓鏀舵) modal
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
                < div class="modal-container" style = "width: 95vw; max-width: 1600px; height: 95vh; display: flex; flex-direction: column;" >
        < !--Header -->
        <div class="modal-header" style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 0 16px; height: 48px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.85rem; color: #64748b;">鏍搁攢鍗曞彿:</span>
                <span style="background: #3b82f6; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">鏀?/span>
                <span style="font-weight: 600; font-size: 0.85rem;">鑷姩鐢熸垚</span>
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="primary-btn" style="background: #3b82f6; height: 28px; padding: 0 12px; font-size: 0.75rem; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px;"><i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ</button>
                <button class="primary-btn" style="background: #3b82f6; height: 28px; padding: 0 12px; font-size: 0.75rem; border: none; border-radius: 4px; color: white; display: flex; align-items: center; gap: 4px;"><i data-lucide="save" style="width: 14px; height: 14px;"></i> 淇濆瓨</button>
                <button class="ghost-btn" onclick="closeReceiptModal()" style="border: 1px solid #e2e8f0; height: 28px; padding: 0 12px; font-size: 0.75rem; border-radius: 4px; background: white; cursor: pointer;">杩斿洖</button>
            </div>
        </div>

        <div class="modal-content" style="flex-grow: 1; display: flex; flex-direction: column; overflow: hidden; background: #fff; padding: 12px;">
            <!-- Top Panels -->
            <div style="display: flex; gap: 12px; height: 200px; margin-bottom: 12px;">
                <!-- Basic Info -->
                <div style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <label style="width: 60px; font-size: 0.75rem; color: #64748b;">缁撶畻鍗曚綅</label>
                        <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                            <input type="text" placeholder="璇烽€夋嫨" style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                        </div>
                        <span style="background: #f1f5f9; padding: 2px 4px; border-radius: 2px; font-size: 0.7rem; color: #64748b;">NL</span>
                        <span style="background: #f1f5f9; padding: 2px 4px; border-radius: 2px; font-size: 0.7rem; color: #64748b;">鏈堢粨</span>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">璧勯噾绫诲瀷</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <span style="font-size: 0.75rem;">閾惰瀛樻</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                            </div>
                        </div>
                        <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">绁ㄦ嵁绫诲瀷</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <span style="font-size: 0.75rem; color: #cbd5e1;">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px; flex-grow: 1;">
                        <label style="width: 60px; font-size: 0.75rem; color: #64748b; margin-top: 4px;">鎽樿</label>
                        <textarea placeholder="璇疯緭鍏? style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 8px; font-size: 0.75rem; outline: none; height: 100%; resize: none;"></textarea>
                    </div>
                </div>

                <!-- Bank Transaction Flow -->
                <div style="flex: 2; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; flex-direction: column;">
                    <div style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 4px 12px; font-size: 0.75rem; text-align: center; color: #64748b;">閾惰浜ゆ槗娴佹按</div>
                    <div style="padding: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">閾惰璐︽埛</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <span style="font-size: 0.75rem; color: #cbd5e1;">璇烽€夋嫨</span>
                                <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">鏀朵粯鏃堕棿</label>
                            <div style="flex: 1; display: flex; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; align-items: center; height: 28px;">
                                <input type="text" value="2025-12-27" style="border: none; outline: none; flex: 1; font-size: 0.75rem;">
                                <i data-lucide="calendar" style="width: 14px; height: 14px; color: #94a3b8;"></i>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">娴佹按鍙?/label>
                            <input type="text" placeholder="璇疯緭鍏? style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none;">
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">鏀エ鍙?/label>
                            <input type="text" placeholder="璇疯緭鍏? style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none;">
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">鏀朵粯閲戦</label>
                            <input type="text" value="0.00" style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none; text-align: right;">
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">鍙攢浣欓</label>
                            <input type="text" value="0.00" style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 8px; height: 28px; font-size: 0.75rem; outline: none; background: #fbfcfe; text-align: right;">
                        </div>
                        <div style="grid-column: span 2; display: flex; align-items: center; gap: 8px;">
                            <label style="width: 60px; font-size: 0.75rem; color: #64748b;">鍏跺畠璐圭敤</label>
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
                        <label style="display: flex; align-items: center; gap: 4px; color: #64748b; cursor: pointer;"><input type="radio" name="clear_type"> 鎸夊弬鑰冨厬鎹㈢巼鏍搁攢</label>
                        <label style="display: flex; align-items: center; gap: 4px; color: #64748b; cursor: pointer;"><input type="radio" name="clear_type" checked> 鎸夎处鍗曞厬鎹㈢巼鏍搁攢</label>
                    </div>
                    <div style="flex-grow: 1; border: 1px solid #f1f5f9; background: #f8fafc; position: relative; display: flex; flex-direction: column;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <thead style="background: #f1f5f9; color: #64748b;">
                                <tr>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">鍘熷竵</th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">鏍搁攢閲戦</th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">鎶樼畻绗?/th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">鍙傝€冨厬鎹㈢巼</th>
                                    <th style="padding: 4px; border-bottom: 1px solid #e2e8f0;">鎶樺悎(鏈竵)</th>
                                </tr>
                            </thead>
                        </table>
                        <div style="flex-grow: 1; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="search" style="width: 48px; height: 48px; color: #e2e8f0;"></i>
                        </div>
                        <div style="background: #fff; padding: 4px 12px; border-top: 1px solid #e2e8f0; font-size: 0.7rem; color: #64748b; display: flex; justify-content: space-between;">
                            <span>鍚堣</span>
                            <span>0.00</span>
                        </div>
                    </div>
                </div>

                <!-- Attachment Area -->
                <div style="flex: 1; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; flex-direction: column;">
                    <div style="display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                        <div style="padding: 4px 12px; font-size: 0.75rem; border-right: 1px solid #e2e8f0; border-bottom: 2px solid #3b82f6; color: #3b82f6; cursor: pointer;">姘村崟闄勪欢(0)</div>
                        <div style="padding: 4px 12px; font-size: 0.75rem; color: #64748b; cursor: pointer;">鍙戠エ闄勪欢(0)</div>
                    </div>
                    <div style="flex-grow: 1; padding: 12px; display: flex; align-items: center; justify-content: center;">
                        <div style="text-align: center; border: 1px dashed #cbd5e1; background: #eff6ff; border-radius: 4px; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer;">
                            <i data-lucide="paperclip" style="width: 14px; height: 14px; color: #3b82f6; margin-bottom: 8px;"></i>
                            <div style="font-size: 0.75rem; color: #3b82f6;">闄勪欢</div>
                            <i data-lucide="upload-cloud" style="width: 24px; height: 24px; color: #cbd5e1; margin-top: 12px;"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Table Section Header -->
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 0 4px;">
                <div style="display: flex; align-items: center; gap: 8px; border: 1px solid #e2e8f0; border-radius: 16px; padding: 2px 12px; font-size: 0.75rem;">
                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="bottom_toggle"> 搴旀敹</label>
                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="bottom_toggle"> 搴斾粯</label>
                    <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;"><input type="radio" name="bottom_toggle" checked> 鏀?浠?/label>
                </div>
                <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 4px; align-items: center; height: 28px; width: 280px;">
                    <input type="text" placeholder="宸ヤ綔鍙?鍙傝€冨彿/鎻愬崟鍙?鏌滃彿/鍙戠エ鍙?鏍搁攢鍗曞彿" style="border: none; outline: none; flex: 1; padding: 0 12px; font-size: 0.75rem;">
                </div>
                <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; height: 28px;">
                    <div style="padding: 0 8px; border-right: 1px solid #e2e8f0; font-size: 0.75rem; background: #f8fafc; border-radius: 4px 0 0 4px; height: 100%; display: flex; align-items: center;">瀵硅处鍗曞彿 <i data-lucide="chevron-down" style="width: 12px; height: 12px; margin-left: 4px;"></i></div>
                    <input type="text" placeholder="璇疯緭鍏? style="border: none; outline: none; padding: 0 8px; font-size: 0.75rem; width: 120px;">
                </div>
                <div style="display: flex; align-items: center; border: 1px solid #e2e8f0; border-radius: 4px; height: 28px; width: 150px; padding: 0 8px;">
                    <label style="font-size: 0.75rem; color: #64748b; margin-right: 8px;">璐圭敤甯佸埗</label>
                    <span style="font-size: 0.75rem; color: #cbd5e1;">璇烽€夋嫨</span>
                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: #94a3b8; margin-left: auto;"></i>
                </div>
                <button class="primary-btn" style="background: #3b82f6; height: 28px; padding: 0 12px; font-size: 0.75rem; border: none; border-radius: 4px; color: white;"><i data-lucide="search" style="width: 14px; height: 14px;"></i> 鏌ヨ</button>
                <div style="display: flex; align-items: center; gap: 4px; color: #3b82f6; cursor: pointer; font-size: 0.75rem;">
                    <span>鏇村(0)</span>
                    <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                </div>
                <div style="margin-left: auto; display: flex; align-items: center; gap: 12px;">
                    <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #64748b;"><input type="checkbox"> 浠呮樉绀哄凡鍕鹃€?/label>
                    <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #64748b;"><input type="radio" checked> 鍏ㄩ儴</label>
                    <label style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #64748b;"><input type="radio"> 鎸夎垂鐢ㄦ槑缁嗘牳閿€</label>
                    <button style="border: 1px solid #3b82f6; color: #3b82f6; background: white; height: 28px; padding: 0 12px; font-size: 0.75rem; border-radius: 4px; cursor: pointer;">鑷姩鍒嗛厤</button>
                    <button style="border: 1px solid #e2e8f0; color: #64748b; background: white; height: 28px; padding: 0 12px; font-size: 0.75rem; border-radius: 4px; cursor: pointer;">閲嶇疆</button>
                </div>
            </div>

            <!-- Table -->
            <div style="flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 4px; overflow: auto; background: #fff;">
                <table style="width: 100%; border-collapse: collapse; min-width: 2500px; font-size: 0.75rem;">
                    <thead style="background: #f8fafc; color: #1e293b; position: sticky; top: 0; z-index: 10;">
                        <tr>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center; width: 40px;">#</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center; width: 40px;"><input type="checkbox"></th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">宸ヤ綔鍗曞彿</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">鍙戠エ鍙?/th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">璐﹀崟鍙?/th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">璁¤垂鏃ユ湡</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">璐圭敤</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">鍘熷竵</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">鍘熷竵鍓╀綑閲戦</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right; background: #fefce8; border-left: 2px solid #fbbf24;">鏍搁攢閲戦(鍘熷竵)</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center; background: #fefce8;">鎶樼畻绗?/th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right; background: #fefce8;">姹囩巼</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right; background: #fefce8; border-right: 2px solid #fbbf24;">鏍搁攢閲戦(鎶樺悎)</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;">璐﹀崟甯佺</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;">璐﹀崟鎶樼畻绗?/th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">璐﹀崟姹囩巼</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">寰呬粯浣欓</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: left;">浠樻鍗曟嵁娴佹按鍙?/th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">姹囩巼鏀剁泭</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">璁℃彁鍧忚处</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">鍧忚处</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">璁℃彁鍏朵粬璐圭敤</th>
                            <th style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">鍏朵粬璐圭敤</th>
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
                            <td style="padding: 8px;">璐ф</td>
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
    </div >
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
        tabAccount.style.color = '#2563eb';
        tabAccount.style.borderBottom = '2px solid #2563eb';

        tabParams.classList.remove('active');
        tabParams.style.color = '#475569';
        tabParams.style.borderBottom = 'none';

        viewAccount.style.display = 'flex';
        viewParams.style.display = 'none';
    } else {
        tabParams.classList.add('active');
        tabParams.style.color = '#2563eb';
        tabParams.style.borderBottom = '2px solid #2563eb';

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
        if(customAmountInput) customAmountInput.value = '';
        updatePaymentSelection('alipay');
        steps.forEach(step => step.classList.remove('active', 'completed'));
        if(steps[0]) steps[0].classList.add('active');
        if(nextBtn) {
            nextBtn.innerHTML = '下一步 <i data-lucide='arrow-right' style='width: 16px; height: 16px;'></i>';
            nextBtn.id = 'nextBtn';
        }
        lucide.createIcons();
    }

    // Event Listeners
    if(amountOptions) amountOptions.forEach(option => {
        option.addEventListener('click', function() {
            const amount = parseInt(this.getAttribute('data-amount'));
            updateAmountSelection(amount);
            if(customAmountInput) customAmountInput.value = '';
        });
    });

    if(customAmountInput) customAmountInput.addEventListener('input', function() {
        if (this.value) {
            const amount = parseInt(this.value);
            if (amount >= 100) updateAmountSelection(amount);
        }
    });

    if(paymentOptions) paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            const method = this.getAttribute('data-method');
            updatePaymentSelection(method);
        });
    });

    let currentStep = 1;
    if(nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        
        newNextBtn.addEventListener('click', function() {
            if (currentStep === 1) {
                if (selectedAmount < 100) {
                    alert('充值金额不能低于100元');
                    return;
                }
                
                steps[0].classList.remove('active');
                steps[0].classList.add('completed');
                steps[1].classList.add('active');
                
                this.innerHTML = '确认支付 <i data-lucide='check' style='width: 16px; height: 16px;'></i>';
                lucide.createIcons();
                currentStep = 2;
            } else if (currentStep === 2) {
                paymentModal.style.display = 'flex';
                const modalHeader = paymentModal.querySelector('.modal-header-custom h3');
                const qrImg = paymentModal.querySelector('.payment-qr img');
                const amountText = paymentModal.querySelector('.payment-qr p:nth-child(3) strong');
                
                let paymentName = '支付宝';
                if (selectedPaymentMethod === 'wechat') paymentName = '微信';
                else if (selectedPaymentMethod === 'bank') paymentName = '银行转账';
                else if (selectedPaymentMethod === 'other') paymentName = '其他支付';
                
                modalHeader.textContent = ${paymentName}支付;
                qrImg.src = https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://.com/pay?amount=;
                 amountText.textContent = ￥.00;
            }
        });
    }

    if(cancelBtn) cancelBtn.addEventListener('click', function() {
        if (confirm('确定要取消充值吗？')) {
            resetSelections();
            currentStep = 1;
        }
    });

    if(closeModalBtn) closeModalBtn.addEventListener('click', () => paymentModal.style.display = 'none');
    if(cancelPaymentBtn) cancelPaymentBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
        resetSelections();
        currentStep = 1;
    });

    if(confirmPaymentBtn) confirmPaymentBtn.addEventListener('click', () => {
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
            
            rechargeAmount.textContent = ￥.00;
            bonusAmount.textContent = ￥.00;
            totalAmount.textContent = ￥.00;
        }, 500);
    });

    if(closeSuccessModalBtn) closeSuccessModalBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        resetSelections();
        currentStep = 1;
    });

    if(backToRechargeBtn) backToRechargeBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        resetSelections();
        currentStep = 1;
    });

    if(viewBalanceBtn) viewBalanceBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        resetSelections();
        currentStep = 1;
        
        const balanceAmount = document.querySelector('.balance-amount');
        if(balanceAmount) {
            const currentBalance = parseFloat(balanceAmount.textContent.replace(/[^0-9.-]+/g, ''));
            const newBalance = currentBalance + selectedAmount + (selectedAmount === 1000 ? 30 : 0);
            balanceAmount.textContent = ￥.00;
        }

        const recordsList = document.querySelector('.records-list');
        if(recordsList) {
            const newRecord = document.createElement('div');
            newRecord.className = 'record-item';
            const date = new Date();
            const formattedDate = ${date.getFullYear()}--;
            let paymentMethodText = '支付宝充值';
            if (selectedPaymentMethod === 'wechat') paymentMethodText = '微信支付';
            else if (selectedPaymentMethod === 'bank') paymentMethodText = '银行转账';
            
            newRecord.innerHTML = 
                <div>
                    <div class='record-amount'>￥.00</div>
                    <div class='record-date'></div>
                </div>
                <div class='record-date'></div>
            ;
            recordsList.insertBefore(newRecord, recordsList.firstChild);
        }
    });
    
    window.onclick = function(event) {
        if (event.target == paymentModal) paymentModal.style.display = 'none';
        if (event.target == successModal) successModal.style.display = 'none';
    }
}
