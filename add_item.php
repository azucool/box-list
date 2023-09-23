<?php
require_once 'database.php';

$pdo = get_pdo();

$userId = $_GET['user'] ?? null;
$item = $_GET['item'] ?? null;

if ($userId && $item) {
    $stmt = $pdo->prepare("INSERT INTO items (user_id, item_name) VALUES (:userId, :item)");
    $stmt->execute(['userId' => $userId, 'item' => $item]);
}
