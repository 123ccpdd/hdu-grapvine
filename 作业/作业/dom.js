var count = 3; // 初始计数器值为 3
function addRow() {
    var table = document.getElementById("myTable");
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.innerHTML = "栏目一数据" + count; // 拼接计数器值
    var cell2 = document.createElement("td");
    cell2.innerHTML = "栏目二数据" + count;
    var cell3 = document.createElement("td");
    cell3.innerHTML = "栏目三数据" + count;
    var cell4 = document.createElement("td");
    var link = document.createElement("a");
    link.href = "#";
    link.className = "remove";
    link.innerHTML = "删除";
    cell4.appendChild(link);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    table.appendChild(row);
    count++; // 计数器自增
    attachRemoveListeners(); // 添加事件监听器
}
function attachRemoveListeners() {
    var removeLinks = document.getElementsByClassName("remove");
    for (var i = 0; i < removeLinks.length; i++) {
        removeLinks[i].addEventListener("click", function() {
            var row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    }
}
attachRemoveListeners(); // 页面加载时添加事件监听器