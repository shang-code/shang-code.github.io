/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/08/20/Mysql基础操作/index.html","1af57c92fac8cdb58ff69db340730cb0"],["/2019/08/22/Hexo-NexT的相关配置/index.html","4014af711b7083e46b03fecf7df1953c"],["/2019/08/24/CentOS下安装Python/index.html","28cb1ff38b4a396824e7f5ef48cd75e3"],["/2019/08/25/Mysql查询-基础查询/index.html","f04ba7901a17875ac6b811d266c74264"],["/2019/08/26/Mysql查询-条件查询/index.html","ac4249f07b5bf1ae740ea7b66b49ac1d"],["/2019/09/05/awk的使用方法/index.html","cf6a06cf46abeba7267fda52183f7de4"],["/2019/09/29/Linux笔记/index.html","86b19770d8a7253822dc348d2158c4af"],["/2019/10/08/Linux笔记扩展/index.html","54629392eb60e738211ddbd35d0cff78"],["/2020/09/01/正则表达式/index.html","6cae46a26e4a1e4ff87a02881c5cc14a"],["/2020/09/16/shell的使用方法/index.html","985f3ef2be011605914613bd79e32200"],["/2021/01/18/zabbix部署与使用记录/index.html","88313c5db26097da7c70ee6c0152dd30"],["/2021/09/21/Docker学习笔记-基础篇/index.html","7b4f431581e01f5b1df096ada46f8f6a"],["/2021/09/21/Docker学习笔记-进阶篇/index.html","b7eb2952aac97eb05c0fc55bbe03bd8e"],["/2021/10/31/Linux-top命令详解/index.html","fb166420f588d7f51868b6df0a7e6a42"],["/2022/02/03/sed的使用方法/index.html","94441dca5f371729bd56c6d69b6c27cb"],["/2022/03/24/vim的使用方法-相关配置/index.html","294030a20b6ad7301e50e0dfd51d6284"],["/2022/04/20/HTML-基础篇/index.html","d4e9196fa77d4fa1d7d0b6a7d7c1c32f"],["/2022/05/01/Linux运维常见问题/index.html","370af9df097452e87ec20923d4a98c27"],["/2022/06/02/Golang学习笔记/index.html","fd6f9b4ade338724ddd53e4a6a196ad2"],["/2022/09/05/shell命令记录/index.html","a5b4bbc918c9b24cee908ab64b2d0d4f"],["/2022/09/06/grep的使用方法/index.html","2ea0c8c025ae4dcde6c117dc31f50074"],["/2022/09/07/Rsync-inotify实时备份/index.html","95f5e7adac8c3a1cb94fb63074896f56"],["/about/index.html","b5fda86a9fd9d456f0e782811342944e"],["/archives/2019/08/index.html","6869cbee830922fa3a911f9f765d10b9"],["/archives/2019/09/index.html","d2308580c32941b0a0576cf25358c107"],["/archives/2019/10/index.html","6076f15955b719843c34ceb80e050a4b"],["/archives/2019/index.html","8a4f825027cba3eceda795cc91e31e87"],["/archives/2020/09/index.html","237b4c3e8964f1e6392919b52dd23a7a"],["/archives/2020/index.html","29540147af32be92969ff598b08dd082"],["/archives/2021/01/index.html","5260a09a2775279b55236f696ec3e1b1"],["/archives/2021/09/index.html","a25058ac9e3b559fd595cfa73ed3054f"],["/archives/2021/10/index.html","b83ff95f933ca2fe70d069568a148c5c"],["/archives/2021/index.html","29cd6b30899cdd7f2297ed4df39ab010"],["/archives/2022/02/index.html","98a17eb1fc5dbe52f1820af77046a5cd"],["/archives/2022/03/index.html","a55179feb9b7c27744466e620b2ff9c1"],["/archives/2022/04/index.html","e9f360f18c553f52b72a8057e51b9421"],["/archives/2022/05/index.html","4c8ffe51e0248ed0a62783fd6387e489"],["/archives/2022/06/index.html","a7d3876a4b41367ad0620e93228b9d07"],["/archives/2022/09/index.html","fed6b50d46fead32429bd655ea487929"],["/archives/2022/index.html","b9a44b70306af5f1fe4c29d97c2e97b5"],["/archives/index.html","bf549077ab84392162be97a7d144b1b5"],["/archives/page/2/index.html","18f7ca920956633834eb7c63a0ecf6e0"],["/archives/page/3/index.html","b0e949446ad5ac792c7244df74a10ecf"],["/categories/Docker/index.html","97ac48d55779ea7691679a6c19807d64"],["/categories/Linux/CentOS/index.html","38ab46d23012668ed3d02a93ac22cf0e"],["/categories/Linux/Vim/index.html","3526be2eadc9c2248bc0f853711af314"],["/categories/Linux/index.html","8208aec7267d8666f301ff52587f46a7"],["/categories/Linux/page/2/index.html","a09d95a5fde519acfbd8515097f588a6"],["/categories/Linux/shell/index.html","ba4f0112949c6615e53de724338f8b80"],["/categories/Linux/命令/index.html","d2135aa957d71816319d4571dfc47b3a"],["/categories/index.html","065b5b35bf6e2515f02d4350e349b2e4"],["/categories/博客/index.html","0989273ce39aab4ec51ca3079562e8c1"],["/categories/开发/Golang/index.html","7541b43244db48ffd5e0b9f609f5c82f"],["/categories/开发/HTML/index.html","5eb1476f313725cf20e75b1bae3fd9a3"],["/categories/开发/index.html","a8f1f23b12f593e5b8207bd9d6640da0"],["/categories/数据备份/Rsync-inotify/index.html","47b242e8f5245f6ac5cd2e6cdb1484c2"],["/categories/数据备份/index.html","a392fe059391c020b73648cbcf3e017b"],["/categories/数据库/Mysql/index.html","fb40238936d90528d4f9bfda51303ad3"],["/categories/数据库/index.html","15392dab9aa9c5adadaea750a1a25820"],["/categories/正则表达式/index.html","58d84599626e0e20a546080b62bd2d89"],["/categories/监控/Zabbix/index.html","f67ce6c2058a9aa78b8da6d36bc607de"],["/categories/监控/index.html","e0fad59b091034c565c9a754d98d3524"],["/css/main.css","806f5455b181aff723b975c25efcddcb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/aliyun_jiasu.png","7e52b0bf5ab6a4257f5cb01ad4a6c2ca"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background15.png","e07f9c2b7acd7fc42e78a5e827304b84"],["/images/background29.png","cff45a0f1299a5c49f64cdbe1751ee09"],["/images/background3.png","ba10878d334398904d749981267cdf41"],["/images/background31.png","7018de2425fa6ae5501795ec0b889dc2"],["/images/background33.png","8c098c05953f726e6ba876c85cb33038"],["/images/background4.png","d86a4062957da4803ee098865b08f75c"],["/images/background41.png","f19a3e718c328405d49113fb936980e2"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","8098c9bd6c349124db1a6d1cf8e294ef"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/mysql.png","0693ef5040ad9268dec250d1b2aad78c"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/shubiao.png","2c681a380a1bddf4dbf4ea46cc9399a8"],["/images/syz.png","70697703584075765e712c833a9a7f49"],["/images/tag.png","e7de31b9b97c13e8c021ab9175bcec61"],["/images/vim-startify.png","8528acbc67671c8137fbe6d392412313"],["/images/weixin.png","647e1ddcb40db3153ca5ee6043be7194"],["/images/wt.png","a4deb4a2a4742c8f0675af7795b85307"],["/images/zhifubao.png","d088b54318934f83f1fadadef4ec4e4f"],["/index.html","760d5fc78e2a8095e90c1e2c431d0e99"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/custom.js","aea68c90e111d8b40fa06420f83781f5"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.js","0721863189b8dc67fffc3a75d946f6be"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9c6bc3126d8029c1b067d59f1ebbd0b6"],["/page/3/index.html","a3df86aca6b9d28d237ed3703c546575"],["/sw-register.js","51db04a69db449d687b1a81667ab0277"],["/tags/CentOS/index.html","d66c20d10b6f9f247324b5efbfac5da6"],["/tags/Docker/index.html","587639f868ae1f21aa06e9a344afda00"],["/tags/Golang/index.html","7b43175411b59221d6a98afc2a06fe8f"],["/tags/HTML/index.html","661634a7b867e9ab18190f50979eaf69"],["/tags/Hexo/index.html","be04024b000931087d83085973b715a8"],["/tags/Linux/index.html","6d9ba941182ec189c1a5e7a014914916"],["/tags/Mysql开篇/index.html","602daf60f0fbf6eabe3d54809bd11421"],["/tags/Mysql查询/index.html","bfa6b31b8b9fcbd96bed36e0019b2ae8"],["/tags/Python/index.html","40b0a00abad066b908f94a8572c1dfd9"],["/tags/Rsync/index.html","8714eff05edf90b439ed58a3b582daf6"],["/tags/awk/index.html","251025d300aa7b986f468d5fe731e69d"],["/tags/index.html","90f5f2525c87f277641b3e6140212f2e"],["/tags/inotify/index.html","649d47e09a7a13d5f960fab51473bbc9"],["/tags/sed/index.html","797b47afc461eef5bca5c680d899c968"],["/tags/shell/index.html","caec3cabbb34f8fabf0f6c1b1f6291be"],["/tags/vim/index.html","999a0448a5bbcd87ad34892e648ea918"],["/tags/zabbix/index.html","83a609e6a297e5d79481143b7b8c4aaf"],["/tags/前端/index.html","3e05c9ab07a61f626894af66129d5eed"],["/tags/开发/index.html","cd0449d03debd434c88a95d86286fb66"],["/tags/数据备份/index.html","6020a4171f606f278ff36d1bc920b112"],["/tags/正则表达式/index.html","6f9514e56e03f2e309f3ecb81e7d4808"],["/tags/笔记/index.html","e9be4c0fb25f5a97505eab8884f31c5b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
