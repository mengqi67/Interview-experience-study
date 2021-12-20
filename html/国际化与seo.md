<!--
 * @Author: ymq
 * @Date: 2021-12-14 16:12:31
 * @LastEditTime: 2021-12-20 20:06:46
 * @LastEditors: ymq
 * @Description: 
-->

# web站点国际化

想将web站点国际化，有以下几方面内容：

* 服务端下发的数据/文字等
* 前端渲染的文字
* 静态图片

## 服务端下发的数据/文字等

首先前端需要向服务端查询语种列表。
在页面的其他交互时，服务端一般需要前端传用于区分语言的参数，一般是所有接口都需要传。因此可以配置在全局axios上。

## 前端渲染的文字

可以使用vue-i18n<https://vue-i18n.intlify.dev/installation.html#npm>
vue-i18n@next适用于vue3

它的实现原理不是我们想象的自动转换语言，而是需要编写配置，每个单词每个句子都写好对应语言，渲染的时候根据语言取对应的配置。

简单使用可以见我的github <https://github.com/mengqi67/vue3andVite>

对于选择语言，可以使用vuex做管理，保证在全局都可以取得到。

## 静态图片

如果涉及到文字的静态图片，同样也要准备对应语言的。可以使用vuex的状态来判断，取配置

# web站点SEO

## 什么是SEO

利用搜索引擎的规则提高网站在搜索结果中的排名。搜索引擎会爬取页面的内容，与搜索词进行匹配，如果匹配度高则排名靠前。

## 原理

搜索引擎有一个庞大的数据库，并且还有个“蜘蛛”程序，在互联网上爬取各个网页的内容，与关键词进行匹配，储存它认为对用户有用的信息。当用户检索时，就根据这些数据通过算法得出一个排序，展示给用户，也就是我们看到的排名

## 如何

### title标签

字数控制在80字符以内，添加本页的核心关键词

### meta标签优化

meta标签的属性：
discription：页面内容概括
keywords: 列举重要关键词

```html
淘宝的seo
<meta name="keywords" content="淘宝,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺">
<meta name="description" content="淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供退货承诺、破损补寄等消费者保障服务，让你安心享受网上购物乐趣！">

京东的seo
<meta name="description" content="京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。">
<meta name="Keywords" content="网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东">
```

meta标签的其他使用：

http-equiv属性有几个值：

* content-type 规定文档的编码格式

```html
<meta http-equiv="content-type" content="text/html; charset=UTF-8"> (html 4.0)
等价于
<meta charset="UTF-8"> （html5）
```

* default-style 规定要使用的预定义的样式表

```html
<meta http-equiv="default-style" content="the document's preferred stylesheet">
```

* refresh 文档自动刷新的时间间隔 每300秒刷新

```html
<meta http-equiv="refresh" content="300">
```

* X-UA-Compatible 针对IE8以上的Ie浏览器，使它使用最新版本的ie。`content="IE=7`即使使用ie8，也可以使用ie7的渲染模式。`content="IE=edge,chrome=1"`如果安装了chrome内嵌框架，就使用chrome内核模式。

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

viewport content可配置属性值：

* width:设置页面宽度
* initial-scale 设置页面的初始缩放值 eg:1.0
* minimum-scale 允许用户缩放最小值 eg:1.0
* maximum-scale 允许用户缩放最大值 eg:1.0
* user-scalable 是否允许用户缩放 eg:yes

```html
<meta name="viewport" content="width=divice-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

淘宝的其他meta标签

```html
内核类型：
<meta name="renderer" content="webkit">


<meta name="spm-id" content="a21bo">
<meta name="aplus-xplug" content="NONE">
<meta name="def-grey" content="false">
```

### url&导航优化

url控制在3层以内
导航尽量使用文本 不要使用图片

### 图片优化

给图片添加alt属性，写入图片描述，用于浏览器识别图片的作用，可以提高关键词密度

## 总结一下

搜索引擎的蜘蛛爬取程序主要获取网页源代码，分析关键词的匹配度，提升seo的核心思想就是提高关键词匹配度。所以手段就在于添加title，discription；同时需要选择好合适的关键词，不要过度堆砌。另外网页的内容也要与关键词相关，提高关键词密度。

## 引申一下

### 单页面应用不利于seo why？

我们已知蜘蛛爬取的原理，单页面应用一般是通过路由匹配动态展示内容，很多页面内容是通过ajax数据来展示，而爬取程序不会等待我们页面加载完成，所以它抓取到的内容是缺失的。

#### 如何解决？

蜘蛛更擅长对静态内容的抓取，那么我们就尽可能多的生成静态内容，方法有：

* 预渲染
* 服务端渲染（SSR）

##### 预渲染

打包的时候将某些路由输出为html文件，使爬虫在爬取到这些页面时能获得更多的信息
使用[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)可以将某些路由单独打包为html（是不是就变成多页应用了？）
结合[vue-meta-info](https://github.com/monkeyWangs/vue-meta-info)可以实现动态meta标签

##### 服务端渲染（SSR）

先了解一下客户端渲染（CSR）与 服务端渲染（SSR）

###### 客户端渲染

就是我们现在的工作 不多讲了

优点：

* 减轻服务器计算压力
* 前后端分离 开发效率提升

缺点：

* 不利于seo，爬虫抓不到完整代码
* 请求增多，首屏渲染慢，用户等待时间长
* 消耗更多浏览器性能

###### 服务端渲染

服务端直接给出最终html（smarty模版），客户端解析渲染即可

优点：

* 响应快，用户体验好，首屏渲染快
* 引擎爬虫可以看到完整的程序源码，有利于SEO

缺点：

* 增加服务器的计算压力
* 不容易维护，如果不使用node中间层，前后端分工不明，不能进行良好的并行开发

可参考本文件夹下CSR与SSR.png，描述了CSR与SSR加载网页的流程

由以上的介绍可以清晰看出服务端渲染对于seo的优势。但服务端渲染是相对来说更昂贵的，而且使用node中间层的开发成本也要大一些。（虽然我也不知道node中间层怎么使用）

具体是否要使用服务端渲染还是看具体需求情况
