<?php
require_once 'database.php';

$pdo = get_pdo();

$userId = $_GET['user'] ?? '未知';

$items = [];
if ($userId !== '未知') {
    $stmt = $pdo->prepare("SELECT item_name FROM items WHERE user_id = :userId");
    $stmt->execute(['userId' => $userId]);
    $items = $stmt->fetchAll(PDO::FETCH_COLUMN);
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>储物箱</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
    <p id="storageBoxId">储物箱编号：<span id="userId"><?php echo htmlspecialchars($userId); ?></span></p>
    <div class="input-group">
        <input type="text" id="inputTask" placeholder="请填写物品名称...">
        <button id="addButton">添加</button>
    </div>
    <ul id="taskList">
        <?php foreach ($items as $item): ?>
            <li><?php echo htmlspecialchars($item); ?></li>
        <?php endforeach; ?>
    </ul>
</div>
<script src="scripts.js"></script>
</body>
</html>
