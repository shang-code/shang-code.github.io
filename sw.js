/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/08/20/Mysql基础操作/index.html","32ad9b8eea9e2bb5e1d6b4f527999236"],["/2019/08/22/Hexo-NexT的相关配置/index.html","10f4d06ab8f765a089d4e1e7f93b3dd6"],["/2019/08/24/CentOS下安装Python/index.html","b0ad6184dde6816a10349fc25c36c81d"],["/2019/08/25/Mysql查询-基础查询/index.html","566850d123009890d46dc95a09cb1b1a"],["/2019/08/26/Mysql查询-条件查询/index.html","6b75d3353f8d15b348d2aee80cc14915"],["/2019/09/05/awk的使用方法/index.html","a27fdb11e958bf65f903de37cbe5af09"],["/2019/09/29/Linux笔记/index.html","e1ea30c6c72937df8e3269ba3e563403"],["/2019/10/08/Linux笔记扩展/index.html","cd18fd6630cc2948b0c8ea6378aa07fe"],["/2020/09/01/正则表达式/index.html","932acf628ef304fce36286e6d41aa756"],["/2020/09/16/shell的使用方法/index.html","d18efeb9a6a11bfc88284e2544bc8a59"],["/2021/01/18/zabbix部署与使用记录/index.html","47f2b51054d0c42ec9b57417ead73d78"],["/2021/09/21/Docker学习笔记-基础篇/index.html","d35d3a77c33d4a3f76d2f452844b6691"],["/2021/09/21/Docker学习笔记-进阶篇/index.html","876a2dc7a0050f654d111b90ce9e1bc6"],["/2021/10/31/Linux-top命令详解/index.html","b264dde869a20fb983058eec522ecf4c"],["/2022/02/03/sed的使用方法/index.html","635c83abb0d61e00b63e63518c2b63cf"],["/2022/03/24/vim的使用方法-相关配置/index.html","ac1fcec25155281d4a5a4ed5be84f629"],["/2022/04/20/HTML-基础篇/index.html","65704751242d98041409037caa1ec442"],["/2022/05/01/Linux运维常见问题/index.html","a6630e282a8081243717a006fd40412c"],["/2022/06/02/Golang学习笔记/index.html","efc4f30b8d86e8e581d138aee13a2d7d"],["/2022/09/05/shell命令记录/index.html","36ca669be831287aece12f11416869f3"],["/2022/09/06/grep的使用方法/index.html","54bd5511f2a635924d32c37d2f8c29d8"],["/2022/09/07/Rsync-inotify实时备份/index.html","77064f4433095695c31fcd3e8ac4d408"],["/about/index.html","4d3d90b9694900aa6231306a1cda9c49"],["/archives/2019/08/index.html","9908d909c3f8b78cd816770c02611ec3"],["/archives/2019/09/index.html","e9f71eb63b1ab3558a1ac5179f3b9876"],["/archives/2019/10/index.html","7faad5414deafed86a3bf6b93994b824"],["/archives/2019/index.html","79aee6d1d97739bfd519bdcee99abcd0"],["/archives/2020/09/index.html","f27253b40421a9a5d926d3162b90953f"],["/archives/2020/index.html","27868ce518fc5fa18628449c4004167e"],["/archives/2021/01/index.html","b0232cc16a83e4f6fc384185b5536300"],["/archives/2021/09/index.html","7f5cc2f2acb8a271c438a913948a8f55"],["/archives/2021/10/index.html","676ac25df62ae4e42c972b8b9860c113"],["/archives/2021/index.html","693b72b09c092b6a9810a5b96c53b789"],["/archives/2022/02/index.html","7dbd6cfaeec45e291e8f7b2c2e203163"],["/archives/2022/03/index.html","afea53a250001892db5e7f8406a36f28"],["/archives/2022/04/index.html","4a806e0a9eb53552c97509fb83b35b7d"],["/archives/2022/05/index.html","d8f1575d2d3934acff130a5fa25c866a"],["/archives/2022/06/index.html","05a47856f92dba245e227c5f2edf700c"],["/archives/2022/09/index.html","3db11d56fb8a2037e40db3562b667d33"],["/archives/2022/index.html","b61f10670661e07d1d7bff009f1cc769"],["/archives/index.html","c52ae6dc874e2c9bb9922848593cf022"],["/archives/page/2/index.html","efda7a78b33a2185cc675e203b2df80b"],["/archives/page/3/index.html","6a28802fdbfa16b3f1250315ba226757"],["/categories/Docker/index.html","b8bb390f7915cd36d4d150b110a9ecda"],["/categories/Linux/CentOS/index.html","7bd34898e3513ad06f6d176021423240"],["/categories/Linux/Vim/index.html","c376560e1c7cdae66676387700bef2da"],["/categories/Linux/index.html","3851d4897e7d8efad21310238ef71544"],["/categories/Linux/page/2/index.html","3d5bee631a698f0305d6b9e8bc1b331c"],["/categories/Linux/shell/index.html","9b11de8eea815b7876e21cf3042e9cca"],["/categories/Linux/命令/index.html","6efee8dd475a71dec0862d2884cffa59"],["/categories/index.html","0724590b4bdaf76efce916e62759bc9b"],["/categories/博客/index.html","ee45a52419ffacfe960910cbdba06d23"],["/categories/开发/Golang/index.html","13646ab969e86077ed0171f59e48bd0f"],["/categories/开发/HTML/index.html","393dd5e5ca925a6fe52743b23d31abba"],["/categories/开发/index.html","201c53c7ecf0ca905d2cd893c4a3e448"],["/categories/数据备份/Rsync-inotify/index.html","9a77d722fc545d189a97ba49e9e1712b"],["/categories/数据备份/index.html","4a72146726cccd8aad6c57ef7cb579d7"],["/categories/数据库/Mysql/index.html","dc1c5b9df4d91a714d429c318efbccc5"],["/categories/数据库/index.html","61fbce69e68a3bcf33efc3001a3133d1"],["/categories/正则表达式/index.html","307b42ed23acab33b0180a887eee2770"],["/categories/监控/Zabbix/index.html","d2251ad1821be4d7862a2189c3cea228"],["/categories/监控/index.html","6bb340464b0aa33b288de229f3384a17"],["/css/main.css","806f5455b181aff723b975c25efcddcb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/aliyun_jiasu.png","7e52b0bf5ab6a4257f5cb01ad4a6c2ca"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background15.png","e07f9c2b7acd7fc42e78a5e827304b84"],["/images/background29.png","cff45a0f1299a5c49f64cdbe1751ee09"],["/images/background3.png","ba10878d334398904d749981267cdf41"],["/images/background31.png","7018de2425fa6ae5501795ec0b889dc2"],["/images/background33.png","8c098c05953f726e6ba876c85cb33038"],["/images/background4.png","d86a4062957da4803ee098865b08f75c"],["/images/background41.png","f19a3e718c328405d49113fb936980e2"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","8098c9bd6c349124db1a6d1cf8e294ef"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/mysql.png","0693ef5040ad9268dec250d1b2aad78c"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/shubiao.png","2c681a380a1bddf4dbf4ea46cc9399a8"],["/images/syz.png","70697703584075765e712c833a9a7f49"],["/images/tag.png","e7de31b9b97c13e8c021ab9175bcec61"],["/images/vim-startify.png","8528acbc67671c8137fbe6d392412313"],["/images/weixin.png","647e1ddcb40db3153ca5ee6043be7194"],["/images/wt.png","a4deb4a2a4742c8f0675af7795b85307"],["/images/zhifubao.png","d088b54318934f83f1fadadef4ec4e4f"],["/index.html","c418a586289ff983d745c8b792948e73"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/custom.js","aea68c90e111d8b40fa06420f83781f5"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.js","0721863189b8dc67fffc3a75d946f6be"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","70d1f6dc409af90617668902cd9a1723"],["/page/3/index.html","a3bfbb0cc8b36e6bded9f87020484d5a"],["/sw-register.js","a67d95540a4187164f2a6cfca5494782"],["/tags/CentOS/index.html","c350c3c9547ed4bebba7d368f8b2b87e"],["/tags/Docker/index.html","7f86496d8079dd6342f1096b7ce07893"],["/tags/Golang/index.html","0c213e234885f9c6a8db32643172a1e1"],["/tags/HTML/index.html","b216ae2444edd27d64cc2748b12170df"],["/tags/Hexo/index.html","34b536cee5777b61405baaac35214755"],["/tags/Linux/index.html","f4a3a785e3d6a36bb5eed23d206576af"],["/tags/Mysql开篇/index.html","82e204b86432f0b6b83d75d72be671de"],["/tags/Mysql查询/index.html","76539feaf7237b48992b59d2d57e2d60"],["/tags/Python/index.html","6cabcf8eada5cdd527fbeff589bcaf01"],["/tags/Rsync/index.html","59d1f38a49e1b2ad08b24296d864b604"],["/tags/awk/index.html","3ac2a0fee8264240dfdb151f8a152dd3"],["/tags/index.html","938dd967eef6f496d53e7d2f369f33db"],["/tags/inotify/index.html","4924f985dc3407cbff592481355f591a"],["/tags/sed/index.html","04107571bbcb39768160e6005f305816"],["/tags/shell/index.html","8efa30cc11ba52a85f2832d9068fda1f"],["/tags/vim/index.html","7f3155854b516a0e717c568a333549ec"],["/tags/zabbix/index.html","d9d7e16288b958f52a1ef7db08ba3314"],["/tags/前端/index.html","cac16ba55675ad4dd1b82e032317416a"],["/tags/开发/index.html","7685f10912203dadc4382a2b83f91029"],["/tags/数据备份/index.html","6594f27e48a65c3c260d5583e5444880"],["/tags/正则表达式/index.html","cbc8e06ad79df129585b5e4441600de4"],["/tags/笔记/index.html","b494c8e318de1a0b1c8bcfd81c6a0b2f"]];
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
