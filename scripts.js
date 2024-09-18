function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('已复制: ' + text);
    }, function(err) {
        console.error('复制失败: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');

    // 示例数据
    const entries = [
        { title: '人物', url: 'person.html' },
        { title: '人学', url: '#science' },
        { title: '人术', url: '#technology' }
    ];

    function searchEntries(query) {
        // 清空之前的搜索结果
        searchResults.innerHTML = '';

        // 如果搜索框为空，则不显示结果
        if (query === '') return;

        // 过滤并显示匹配的结果
        const results = entries.filter(entry => entry.title.toLowerCase().includes(query.toLowerCase()));
        if (results.length === 0) {
            // 如果没有结果，显示提示信息
            const noResultsDiv = document.createElement('div');
            noResultsDiv.textContent = '没有找到相关结果。';
            searchResults.appendChild(noResultsDiv);
        } else {
            results.forEach(result => {
                const resultDiv = document.createElement('div');
                const link = document.createElement('a');
                link.href = result.url;
                link.textContent = result.title;
                link.className = 'search-result-link'; // 为链接添加样式类
                resultDiv.appendChild(link);
                searchResults.appendChild(resultDiv);
            });
        }
    }

    // 绑定搜索按钮点击事件
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        searchEntries(query);
    });

    // 绑定输入框输入事件
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();
        searchEntries(query);
    });
});

// 确保DOM完全加载后再执行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取图片元素
    const clickableImage = document.getElementById('clickable-image');
    const newImage = document.getElementById('new-image');

    // 为点击的图片添加点击事件处理器
    clickableImage.addEventListener('click', function() {
        console.log('Clicked!'); // 添加调试信息

        // 切换图片的显示状态
        if (newImage.style.display === 'none') {
            newImage.style.display = 'block';
            clickableImage.style.display = 'none';
        } else {
            newImage.style.display = 'none';
            clickableImage.style.display = 'block';
        }
    });
});