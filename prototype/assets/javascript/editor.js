/*
1、实现 textarea text 高亮功能，用途是为「艾特」和「话题」增加高亮样式。
2、实现 textarea 显示图片功能，用途是直接解析表情符号，显示表情图。
3、实时保存编辑器内容到日志表（草稿）。
*/

/* Tooltips */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
