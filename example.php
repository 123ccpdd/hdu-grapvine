<?php
// 获取表单数据
$name = $_POST['name'];
$description = $_POST['description'];
$category = $_POST['category'];

// 验证表单数据
if (empty($name) || empty($description)) {
    // 如果有任何一个必填字段为空，则跳转回表单页面并提示错误信息
    header("Location: form.php?error=emptyfields");
    exit();
} else {
    // 处理文件上传
    $file = $_FILES['file'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileError = $file['error'];

    // 检查是否有文件上传错误
    if ($fileError !== UPLOAD_ERR_OK) {
        // 根据错误码进行相应的处理
        switch ($fileError) {
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                // 文件大小超过限制
                header("Location: form.php?error=filesize");
                exit();
            case UPLOAD_ERR_PARTIAL:
                // 文件只有部分被上传
                header("Location: form.php?error=partialupload");
                exit();
            case UPLOAD_ERR_NO_FILE:
                // 没有文件被上传
                header("Location: form.php?error=nofile");
                exit();
            case UPLOAD_ERR_NO_TMP_DIR:
                // 找不到临时文件夹
                header("Location: form.php?error=notmp");
                exit();
            case UPLOAD_ERR_CANT_WRITE:
                // 文件写入失败
                header("Location: form.php?error=writefailed");
                exit();
            case UPLOAD_ERR_EXTENSION:
                // 文件上传被 PHP 扩展中断
                header("Location: form.php?error=extensioninterrupted");
                exit();
            default:
                // 其他上传错误
                header("Location: form.php?error=unknownerror");
                exit();
        }
    }

    // 移动上传文件到指定位置
    $uploadDir = 'uploads/';
    $destination = $uploadDir . $fileName;
    if (move_uploaded_file($fileTmpName, $destination)) {
        // 文件移动成功，执行您的逻辑处理
        // 这里可以将文件信息和其他表单数据插入数据库，或者进行其他操作

        // 示例：将表单数据写入数据库（请根据实际情况自行编写代码）
        $data = array(
            'name' => $name,
            'description' => $description,
            'category' => $category,
            'file_path' => $destination
        );

        // 执行插入操作，或者调用其他函数进行处理
        // $result = insertDataIntoDatabase($data);
        // if ($result) {
        //     // 成功处理数据并插入到数据库
        //     header("Location: success.php");
        //     exit();
        // } else {
        //     // 处理数据插入过程中出错
        //     header("Location: form.php?error=database");
        //     exit();
        // }

        // 可选：如果您想在成功后跳转到其他页面，您可以取消下面注释并修改对应的跳转地址
        // header("Location: success.php");
        // exit();
    } else {
        // 文件移动失败
        header("Location: form.php?error=uploadfailed");
        exit();
    }
}