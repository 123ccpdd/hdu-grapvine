<?php
// 获取表单提交的数据
$name = $_POST['name'];
$description = $_POST['description'];
$category = $_POST['category'];

// 处理文件上传
$uploadDirectory = "uploads/"; // 上传文件保存的目录

$file = $_FILES['file']; // 获取上传的文件信息
$fileName = $file['name']; // 上传文件的名称
$fileTmpName = $file['tmp_name']; // 上传文件的临时存储路径
$fileType = $file['type']; // 上传文件的类型
$fileSize = $file['size']; // 上传文件的大小

$targetFilePath = $uploadDirectory . basename($fileName); // 上传文件的保存路径

// 进行文件移动操作
if (move_uploaded_file($fileTmpName, $targetFilePath)) {
    echo "文件上传成功<br>";
} else {
    echo "文件上传失败<br>";
}

// 显示客户端发送的数据
echo "名称：" . $name . "<br>";
echo "描述：" . $description . "<br>";
echo "分类：" . $category . "<br>";
echo "文件名称：" . $fileName . "<br>";
echo "文件类型：" . $fileType . "<br>";
echo "文件大小：" . $fileSize . " bytes<br>";
?>