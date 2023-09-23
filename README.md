# box-list
 储物箱清单



家里用了很多储物箱来装东西，但翻找起来很麻烦，所以就想搞个清单页面，方便查找。

当前程序全部由 ChatGPT 编写。



伪静态规则：

     location ~ ^/([0-9]+)$ {
        rewrite ^/([0-9]+)$ /index.php?user=$1 last;
    }


PHP版本当前只有添加物品的功能，local文件夹的html版本有点击添加删除线和右键删除功能。

