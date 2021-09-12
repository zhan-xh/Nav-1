const hashMap = [
    {logo: 'A',url:"https://www.acfun.cn/"},
    {logo:'./images/bilibili.jpg',url:"https://www.bilibili.com/"},
    {}
]


$('.addButton')
.on('click',()=>{
 let url= window.prompt("请输入你想要添加的网址：")
 console.log(url)
if(url.indexOf('http')!==0){
url='https://'+url
}
const $lastLi=$siteList.find('li.Last')
const $siteList=$('.siteList')
const $li=$(`<li>
<a href="${url}">
<div class="site">
    <div class="logo"> ${url[0]}</div>
    <duv class="link">${url}</duv>
</div>
</a></li>`).insertBefore($lastLi)
})
