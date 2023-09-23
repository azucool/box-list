<?php
function get_pdo() {
    $host = "172.18.0.2";
    $db = "box-assets";
    $user = "box-assets";
    $pass = "wsJzJiyhR67x7ETf";
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        die("数据库连接失败: " . $e->getMessage());
    }
}
