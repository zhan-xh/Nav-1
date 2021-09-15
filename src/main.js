const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.Last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [{
        logo: 'A',
        url: 'https://www.acfun.cn',
    },
    {
        logo: 'B',
        url: 'https://www.bilibili.com',
    },
]
const simplifyUrl = (url) => {
    return url.replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .replace(/\/.*/, '') //删除以/开头的东西
}
const render = () => {
    $siteList.find('li:not(.Last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
        <div class="site">
            <div class="logo">${node.logo[0]}</div>
            <div class="link">${ simplifyUrl(node.url )}</div>
            <div class="close">
            <svg class="icon" >
        <use xlink:href="#icon-searchclose"></use>
           </svg></div>
        </div>
        </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation() //阻止冒泡，防止点击close也点击li然后跳转页面
            hashMap.splice(index, 1)
            render() //删除后重新渲染
        })
    })
}

render()
$('.addButton')
    .on('click', () => {
        let url = window.prompt("请输入你想要添加的网址：")

        if (url.indexOf('http') !== 0) {
            url = 'https://' + url

        }
        console.log(url)
        hashMap.push({
            logo: simplifyUrl(url)[0].toUpperCase(),
            logoType: 'text',
            url: url,
        })

        render()
    })

window.onbeforeunload = () => {
    console.log('pages will close')
    const string = JSON.stringify(hashMap)

    localStorage.setItem('x', string)
}
$(document).on('keypress', (e) => {
    const key = e.key
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url)
        }
    }
})