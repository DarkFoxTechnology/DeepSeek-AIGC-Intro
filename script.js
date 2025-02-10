// 如果需要更复杂的交互，可以单独创建JavaScript文件 

// 初始化函数
function init() {
    // 处理FAQ点击事件
    document.querySelectorAll('.question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // 处理图片占位符
    document.querySelectorAll('.image-placeholder').forEach(placeholder => {
        const imgSrc = placeholder.getAttribute('data-src');
        if (imgSrc) {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = placeholder.textContent.trim();
            placeholder.innerHTML = '';
            placeholder.appendChild(img);
        }
    });
}

// 文档加载完成后初始化
document.addEventListener('DOMContentLoaded', init); 