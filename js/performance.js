/*
 * @Author: ymq
 * @Date: 2021-12-30 15:14:43
 * @LastEditTime: 2021-12-31 13:57:15
 * @LastEditors: ymq
 * @Description: 
 */
function PerformanceTiming(params) {
    if (!window.performance) {
        console.warn('该浏览器无法使用performance性能监控')
        return
    }
    const { timing } = window.performance
    let loadTime = timing.loadEventEnd - timing.navigationStart
    if (loadTime < 0) {
        setTimeout(() => {
            PerformanceTiming()
        }, 200);
        return
    }
    const result = {
        "重定向耗时": timing.redirectEnd - timing.redirectStart,
        "Appcache耗时": timing.domainLookupStart - timing.fetchStart,
        "DNS查询耗时": timing.domainLookupEnd - timing.domainLookupStart,
        "TCP链接耗时": timing.connectEnd - timing.connectStart,
        "HTTP请求耗时": timing.responseEnd - timing.responseStart,
        "请求完毕到DOM加载耗时": timing.domInteractive - timing.responseEnd,
        "解析DOM树耗时": timing.domComplete - timing.domInteractive,
        "白屏时间耗时": timing.responseStart - timing.navigationStart,
        "load事件耗时": timing.loadEventEnd - timing.loadEventStart,
        "页面加载完成的时间": timing.loadEventEnd - timing.navigationStart
    }
    console.table(result)
}

function getSourceTime(params) {
    const source = window.performance.getEntriesByType('resource')
    let result = []
    source.map((item) => {
        var d = {
            '资源名称': item.name,
            "资源类型": getSourceType(item.name),
            'HTTP协议类型' : item.nextHopProtocol,
            "TCP链接耗时" : item.connectEnd - item.connectStart,
            "加载时间" : item.duration
        };

        result.push(d)
    })
    console.table(result)
}

function getSourceType(name) {
    const jsExp = /\.js/
    const cssExp = /\.css/
    const imgExp = /\.(gif|jpg|jpeg|png|webp|svg)/
    const videoExp = /\.(mp4|rm|rmvb|mkv|avi|flv|ogv|webm)/

    if(jsExp.test(name)){
        return 'js'
    } else if(cssExp.test(name)) {
        return 'css'
    } else if (imgExp.test(name)) {
        return 'image'
    } else if(videoExp.test(name)) {
        return 'video'
    } else{
        return 'other'
    }
}