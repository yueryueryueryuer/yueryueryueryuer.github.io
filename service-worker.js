/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fd23b8154d963e5bfd46f279d2f13278"
  },
  {
    "url": "assets/css/0.styles.e223730f.css",
    "revision": "3727727e5aadbf32e2ac0c0d7d947831"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.69041cee.js",
    "revision": "96abe3719d6e6904f35d24f2192f1402"
  },
  {
    "url": "assets/js/11.ae380320.js",
    "revision": "266ac6fe9b807e2a853c3aad480b5670"
  },
  {
    "url": "assets/js/12.93974dc1.js",
    "revision": "327a8cb81f67dd7c7025f87b2c6f431e"
  },
  {
    "url": "assets/js/13.f3693fd1.js",
    "revision": "ecd726739f5213e45842f49cb5874050"
  },
  {
    "url": "assets/js/14.6b6be5ce.js",
    "revision": "11d05bd6e34686037a11a5f6142a4a57"
  },
  {
    "url": "assets/js/15.e0674b48.js",
    "revision": "de810ea4bcfe67f180ec2b0775ef68a5"
  },
  {
    "url": "assets/js/16.3f01d811.js",
    "revision": "63ab574de1081b787726ac0e895f277d"
  },
  {
    "url": "assets/js/17.7774b4bd.js",
    "revision": "445368367dcd5aca9704d384afef4866"
  },
  {
    "url": "assets/js/18.5050352d.js",
    "revision": "1209a841454bff1a6642e740a39ede8b"
  },
  {
    "url": "assets/js/19.1495b296.js",
    "revision": "62779463cd9c1c613cfa72ffeae4c985"
  },
  {
    "url": "assets/js/2.91d4e44f.js",
    "revision": "1ec18a9a61408994848775974b2d09bf"
  },
  {
    "url": "assets/js/20.5afdaf99.js",
    "revision": "209ad3cbefbe1f6abc24dfbff90bbe07"
  },
  {
    "url": "assets/js/21.2e183291.js",
    "revision": "af3050d5ef839dfae7feeb1596732d68"
  },
  {
    "url": "assets/js/22.41150275.js",
    "revision": "2efd003eca49192ea9a47a2f029b9c94"
  },
  {
    "url": "assets/js/23.93b736a6.js",
    "revision": "cda634a705c9e6024f20d69bd2304adb"
  },
  {
    "url": "assets/js/24.702d5110.js",
    "revision": "93348b30209c70a4e746f7233084c982"
  },
  {
    "url": "assets/js/25.ed459cf5.js",
    "revision": "fc3223e51dfe52e2512b4c6caafd5e7b"
  },
  {
    "url": "assets/js/26.3c3ce7b7.js",
    "revision": "4166419d3d1c81d034eaab941a65bce5"
  },
  {
    "url": "assets/js/27.9ef984f4.js",
    "revision": "232752251e57e8eaf9e72ec4c96e2f70"
  },
  {
    "url": "assets/js/28.7542e269.js",
    "revision": "fc16c883edf55a7443ea3a75a9ed75dd"
  },
  {
    "url": "assets/js/29.6a36af2c.js",
    "revision": "a368fe8afb78daa5e087337568db9c81"
  },
  {
    "url": "assets/js/3.3eb71d08.js",
    "revision": "7b5551aa0c0382746be700fe2e02f7de"
  },
  {
    "url": "assets/js/30.b8cfbdc9.js",
    "revision": "a5a23a3380cf17ee8d06791d7dc099bc"
  },
  {
    "url": "assets/js/31.0d4d202c.js",
    "revision": "4bbf271669a12e8a5587adf63bdafe38"
  },
  {
    "url": "assets/js/32.96124cf3.js",
    "revision": "9e09968274546944c3cfa00e300f73c9"
  },
  {
    "url": "assets/js/33.dc3b5b40.js",
    "revision": "6fb337f38b7dc6644eb253c5df51055a"
  },
  {
    "url": "assets/js/34.0f7ca3ec.js",
    "revision": "72844a492a23e998cbb5372c1681e3d5"
  },
  {
    "url": "assets/js/35.67a3a77a.js",
    "revision": "31f7a9cec2e0b9a6f318b4dd0ade753e"
  },
  {
    "url": "assets/js/36.45908a37.js",
    "revision": "aa95b0cdfd18278726be664a7a253c7d"
  },
  {
    "url": "assets/js/37.f27d2a6b.js",
    "revision": "845daf134c2b0608f2c84c484562e997"
  },
  {
    "url": "assets/js/38.acef500f.js",
    "revision": "4a52f8486bb4b935c8f3171aaccb2260"
  },
  {
    "url": "assets/js/39.ae96d610.js",
    "revision": "730c25aed81be945270c43bd2460b3c9"
  },
  {
    "url": "assets/js/4.4006191b.js",
    "revision": "1eba7ec6ed4a175565ad31d953478c4c"
  },
  {
    "url": "assets/js/40.e74f9353.js",
    "revision": "415a7b35b9cc29408691585850f8145f"
  },
  {
    "url": "assets/js/41.4d9450ec.js",
    "revision": "fee685e33a4d00e0f157a18660e325b4"
  },
  {
    "url": "assets/js/42.1040cc60.js",
    "revision": "32b6b47f2ac837f6012a8b38a8e72fb6"
  },
  {
    "url": "assets/js/43.e2a7fe6a.js",
    "revision": "9a9070f3b69456eee4341b3cb2c0d724"
  },
  {
    "url": "assets/js/44.bcab9fa6.js",
    "revision": "3bfc2d776de6af539778e0422a2e4db5"
  },
  {
    "url": "assets/js/45.35c9bc17.js",
    "revision": "3286c3dc57c1cdafc6a0f6e03fbb92dd"
  },
  {
    "url": "assets/js/46.4e64b706.js",
    "revision": "6fb3a1aa904fac18321a8b57e371d807"
  },
  {
    "url": "assets/js/47.c8afce5b.js",
    "revision": "a4c44a9238265832e53783c4e00c0c98"
  },
  {
    "url": "assets/js/48.7146eecc.js",
    "revision": "d67f044f62a33946fa2719ef9adcb2fa"
  },
  {
    "url": "assets/js/49.8962faf9.js",
    "revision": "6fa58bc481b2e4607f35d16eda67095e"
  },
  {
    "url": "assets/js/5.e7b64380.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/50.462ff4b6.js",
    "revision": "b7111bd55cc413292270fe6858dfb3e9"
  },
  {
    "url": "assets/js/51.8759ca84.js",
    "revision": "82e10cd4a91685d6921d7aa6d288d359"
  },
  {
    "url": "assets/js/52.a2ba567a.js",
    "revision": "f2ed76859aa689f677320bf4fc09f037"
  },
  {
    "url": "assets/js/53.cd92bfcd.js",
    "revision": "8a7027b2a5fa414da5ff595f7760d6b7"
  },
  {
    "url": "assets/js/54.079750a9.js",
    "revision": "7d6aed25f20d57e2235790cc27d61249"
  },
  {
    "url": "assets/js/55.dc3c0b1e.js",
    "revision": "0b3945c6ff1342668a66b62b658541df"
  },
  {
    "url": "assets/js/6.ba32861a.js",
    "revision": "690076d7f009d8b8fae3ac60c692a8a4"
  },
  {
    "url": "assets/js/7.2e3e487d.js",
    "revision": "855c2faa921c2cf5ff4f2f7faeb3daf8"
  },
  {
    "url": "assets/js/8.c97170c2.js",
    "revision": "ffb3ea0be8d1125624b7e732ab21eaac"
  },
  {
    "url": "assets/js/9.e5cbbf7d.js",
    "revision": "93459245a560459f265a943ef3f1b1e3"
  },
  {
    "url": "assets/js/app.6a7378a1.js",
    "revision": "55bfcca2229c28fd3096839236c733c8"
  },
  {
    "url": "front/npm_and_yarn.html",
    "revision": "4f48faaa900ae9df815eee31de89aded"
  },
  {
    "url": "icons/128.png",
    "revision": "d7eb27560a3b8ab4c51c50bf474bf12e"
  },
  {
    "url": "icons/144.png",
    "revision": "60cda4d67be37b7e12ceab35a3e8244d"
  },
  {
    "url": "icons/192.png",
    "revision": "f7504a6cbf052e3dd2225a0fe774c787"
  },
  {
    "url": "icons/256.png",
    "revision": "3b4cfe310d145470c2b91347009ac679"
  },
  {
    "url": "icons/512.png",
    "revision": "f415a9c0a65fbd4e420872ef393781a3"
  },
  {
    "url": "icons/logo.svg",
    "revision": "c536c9b40f748b37974347f0978b5a8f"
  },
  {
    "url": "img/logo.png",
    "revision": "24fc46c9d871682e53b7500ca82b4658"
  },
  {
    "url": "img/系统架构设计师/开发方法/瀑布V模型.png",
    "revision": "13fed1d7a2872212107c23cf2ff05c78"
  },
  {
    "url": "img/系统架构设计师/开发方法/瀑布模型.png",
    "revision": "a6da2c6ec54b6507878beb1d7b88560b"
  },
  {
    "url": "img/系统架构设计师/开发方法/螺旋模型.png",
    "revision": "df911006618e009afbc9f72402b8e3cc"
  },
  {
    "url": "img/系统架构设计师/操作系统/三级索引结构图.png",
    "revision": "58bcfa852c5ee7125b9e8ad8d0d020cc"
  },
  {
    "url": "img/系统架构设计师/操作系统/作业的状态及转换.png",
    "revision": "dad507e6147f6145dce25811bf67dc42"
  },
  {
    "url": "img/系统架构设计师/操作系统/存储器的层次结构.png",
    "revision": "0252c5e20ef6dd0755b9ac6632ee5816"
  },
  {
    "url": "img/系统架构设计师/操作系统/操作系统与计算机软硬件关系.png",
    "revision": "b692b71bb046078ca32a1d3c5068e821"
  },
  {
    "url": "img/系统架构设计师/操作系统/进程三态模型.png",
    "revision": "f875ebd229b8542f81cb54869aedeb76"
  },
  {
    "url": "img/系统架构设计师/操作系统/进程五态模型.png",
    "revision": "bdcae84defb944a726cce022e67b6636"
  },
  {
    "url": "img/系统架构设计师/考点.png",
    "revision": "2235e6dc98c8b5e4fa699937b91723b4"
  },
  {
    "url": "img/网络安全/对称加密.png",
    "revision": "5584d4221ec53c07a80ff3bab2bfccf6"
  },
  {
    "url": "img/网络安全/数字签名.png",
    "revision": "ffa14599040499f2cf2afa6751b78db0"
  },
  {
    "url": "img/网络安全/非对称加密.png",
    "revision": "791294e887828e9c133b7fe29b73e709"
  },
  {
    "url": "index.html",
    "revision": "2813cef7735fccb55bc6d3347dac8da1"
  },
  {
    "url": "items/compare/compare_html.html",
    "revision": "677f2993a4ff7462aff9d14d24f1ebf6"
  },
  {
    "url": "items/compare/compare_mybatis.html",
    "revision": "add2c498b9cea14319e32ec8e21a77f3"
  },
  {
    "url": "items/compare/compare_rgb.html",
    "revision": "4f1d57f7ff2a8a668c4a6d9cae63dd68"
  },
  {
    "url": "items/development.html",
    "revision": "33ca19198dbc143e06ab488e17f2bf6f"
  },
  {
    "url": "items/emoji.html",
    "revision": "d7685fc4d9b42ac5b50da88934a108dc"
  },
  {
    "url": "items/index.html",
    "revision": "204f6714dbfa9d0d2f6fee1732978cc5"
  },
  {
    "url": "items/mac_timemachine.html",
    "revision": "369a1d058c3a4f8f4be1d8c9526913a9"
  },
  {
    "url": "items/magic_problem/bigsur_l2tp.html",
    "revision": "2d8fec5c12bc95afce3fa10b0b1b125d"
  },
  {
    "url": "items/magic_problem/parallels_desktop_15.html",
    "revision": "e2c973f03f923ea284f450e656f77ce5"
  },
  {
    "url": "items/markdown.html",
    "revision": "995206254e1d53cc5bca2bae33bd85e7"
  },
  {
    "url": "server/docker/docker_install.html",
    "revision": "9327b26707c055fa269627183197e8e2"
  },
  {
    "url": "server/docker/docker_mysql5.7.html",
    "revision": "f33e518479a71cf494dec84d9e144faf"
  },
  {
    "url": "server/docker/docker_use.html",
    "revision": "0fa523a9a2316a12f47af24fe483893e"
  },
  {
    "url": "server/docker/index.html",
    "revision": "94ae74806e61b63090df2afe050e0585"
  },
  {
    "url": "server/golang/index.html",
    "revision": "b6c8b93578de39551a8683054ee18565"
  },
  {
    "url": "server/golang/learning.html",
    "revision": "4e509a969a6a289a44328a43f481752f"
  },
  {
    "url": "server/java/index.html",
    "revision": "01cb8c57f57c291b509596dde06aa644"
  },
  {
    "url": "server/java/optional/optional_commonly.html",
    "revision": "070a798037abc6dea46964f650231c1e"
  },
  {
    "url": "server/java/optional/optional.html",
    "revision": "6eeff4c40fb043024f4b620a65b970f2"
  },
  {
    "url": "server/java/stream/stream_commonly.html",
    "revision": "757479d1945a3bcb8cf6e23b52e58ee5"
  },
  {
    "url": "server/java/stream/stream.html",
    "revision": "14956cae0ab95d99166fc50f2ac69bae"
  },
  {
    "url": "server/linux/command.html",
    "revision": "d2882963ad270f6bcc371ae62ee28b75"
  },
  {
    "url": "server/linux/date.html",
    "revision": "8fa70732d98287917e238fbdb1aca220"
  },
  {
    "url": "server/linux/disk.html",
    "revision": "10b0829b3288d81cdda3502c60c1122e"
  },
  {
    "url": "server/linux/firewall.html",
    "revision": "63f7116ab51177d8931cd26ca4c9a632"
  },
  {
    "url": "server/linux/index.html",
    "revision": "d78add8e096631f5024f8dd24f318a1f"
  },
  {
    "url": "server/linux/network.html",
    "revision": "38e44708a5f2c2f68c5071c13ff0a2ec"
  },
  {
    "url": "server/mysql/date.html",
    "revision": "9a58e2d6b3665baa1187692ed3cfed86"
  },
  {
    "url": "server/mysql/index.html",
    "revision": "c1ebf748e9229357c1d81a4c17ae3e9a"
  },
  {
    "url": "stack/index.html",
    "revision": "d7e97a82c29a180fa65ae8060e328e1f"
  },
  {
    "url": "网络安全/ctf/ctf基础知识.html",
    "revision": "d27162b004cf3366fb3340513afebf5a"
  },
  {
    "url": "网络安全/ctf/kali.html",
    "revision": "c561b969bf6f62ef49b7c601d60745c0"
  },
  {
    "url": "网络安全/index.html",
    "revision": "71f4cbcd005caa03c922f3c0f32de1e6"
  },
  {
    "url": "网络安全/网络安全知识/信息安全.html",
    "revision": "a368bfa5ee891728982022c289e1b405"
  },
  {
    "url": "网络安全/网络安全知识/网络安全基础知识.html",
    "revision": "4a48599b5764a48fd91c8fb5b34a9f84"
  },
  {
    "url": "网络安全/网络安全知识/网络攻击与防御.html",
    "revision": "d8dd68b5889606dd14df3959d1353ae9"
  },
  {
    "url": "软考/信息系统项目管理师/index.html",
    "revision": "282b4666b2d1279de8bef831a1313aa4"
  },
  {
    "url": "软考/系统架构设计师/index.html",
    "revision": "f86c5880167ea86a658fa71ce08bd493"
  },
  {
    "url": "软考/系统架构设计师/开发方法/基于架构的软件设计.html",
    "revision": "cd2c753ad258354732a76cb8a24235f8"
  },
  {
    "url": "软考/系统架构设计师/开发方法/形式化方法.html",
    "revision": "606ef507a9e2e791d1ed1bd09367c530"
  },
  {
    "url": "软考/系统架构设计师/开发方法/敏捷方法.html",
    "revision": "09c1d1986e36265f8b66ed3ca9df6ca8"
  },
  {
    "url": "软考/系统架构设计师/开发方法/统一过程.html",
    "revision": "a8eb16ea714a6d8db747c15615bd966e"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件开发模型.html",
    "revision": "852821316fba2998fbe7f73816fc2ca6"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件生命周期.html",
    "revision": "ee14d594b01934365eb3fa1c31b93efb"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件重用.html",
    "revision": "5ce6e7d84031e3771aed54874b7e50cf"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统基本原理.html",
    "revision": "ce4df3a09d6a4ad4c5cebef79e2c69f9"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统的类型与结构.html",
    "revision": "4786cf238f512ebc6aecdfbec4c899b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
