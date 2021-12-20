## parcel打包
parcel build src/index.html --no-minify --public-url ./

## 引入bootstrap
```html
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
```

## taobao触屏meta
```html
 <meta name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
```

## 引入iconfont 的代码
1. 找到目标icon，加入购物车
2. 点击购物车，加入项目
3. 点击更新代码
4. 复制代码到index.html中，形如
```html
 <script src="//at.alicdn.com/t/font_2807068_buedau9big.js"></script>
```
5. symbol svg引用icon代码
   * 加入通用css代码（引入一次就行）
    ```html
        <style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
        </style>
    ```
    * 挑选相应图标并获取类名，应用于页面：
    ```javascript
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xxx"></use>
    </svg>
    ```
   