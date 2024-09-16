// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');

    // 示例数据
    const entries = [
        { title: '人物', url: 'person.html' },
        { title: '科学', url: '#science' },
        { title: '技术', url: '#technology' }
    ];

    function searchEntries(query) {
        // 清空之前的搜索结果
        searchResults.innerHTML = '';

        // 过滤并显示匹配的结果
        const results = entries.filter(entry => entry.title.toLowerCase().includes(query.toLowerCase()));
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            const link = document.createElement('a');
            link.href = result.url;
            link.textContent = result.title;
            resultDiv.appendChild(link);
            searchResults.appendChild(resultDiv);
        });
    }

    // 绑定搜索按钮点击事件
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query === '') return;
        searchEntries(query);
    });

    // 绑定输入框输入事件
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();
        if (query === '') {
            searchResults.innerHTML = '';
        } else {
            searchEntries(query);
        }
    });
});