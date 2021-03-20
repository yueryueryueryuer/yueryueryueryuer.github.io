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
    "revision": "a63e01dc9cc7c158f73e07cf0f90391e"
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
    "url": "assets/js/16.56813fc2.js",
    "revision": "c37bd2a0453d13a4cf3921fb3c1745a2"
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
    "url": "assets/js/52.4359a49d.js",
    "revision": "1e619ca56c35a48ceda9c76139b32c8b"
  },
  {
    "url": "assets/js/53.cd92bfcd.js",
    "revision": "8a7027b2a5fa414da5ff595f7760d6b7"
  },
  {
    "url": "assets/js/54.01cc27af.js",
    "revision": "22d9caee46851043c38154588fa6a376"
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
    "url": "assets/js/app.960c2c74.js",
    "revision": "6ddc5622eed990f66938b0413d2dbbfb"
  },
  {
    "url": "front/npm_and_yarn.html",
    "revision": "09dd3b1fcc0c427b85a6939e3f49a387"
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
    "revision": "4fa5a8939dad74617c8fb585fdbeb5ce"
  },
  {
    "url": "items/compare/compare_html.html",
    "revision": "39acbe84cc678abae0262d0179e22400"
  },
  {
    "url": "items/compare/compare_mybatis.html",
    "revision": "93b901fadf9ac4124b961ad6777e8a75"
  },
  {
    "url": "items/compare/compare_rgb.html",
    "revision": "6cf5cdf77ff0326c3181ecbbaf43c821"
  },
  {
    "url": "items/development.html",
    "revision": "7d18c47107936d72a245bf4ac2be2c8d"
  },
  {
    "url": "items/emoji.html",
    "revision": "4c06ddf0c6293f8c2e7fa7f739bf7470"
  },
  {
    "url": "items/index.html",
    "revision": "ee52588124c912885ee0f66b2f257df1"
  },
  {
    "url": "items/mac_timemachine.html",
    "revision": "4d8205d3a0ad51c3fb866dc93ea71b1d"
  },
  {
    "url": "items/magic_problem/bigsur_l2tp.html",
    "revision": "fdc764b4efc5d5cd466a2bcd4bfb3ab6"
  },
  {
    "url": "items/magic_problem/parallels_desktop_15.html",
    "revision": "dda5917cc1bc79d3b222acb228a546f4"
  },
  {
    "url": "items/markdown.html",
    "revision": "41ca2e782d2b335732e17b6fe911ac21"
  },
  {
    "url": "server/docker/docker_install.html",
    "revision": "0466d8b8de0c28d07ea46badaa25aa64"
  },
  {
    "url": "server/docker/docker_mysql5.7.html",
    "revision": "5d3fd918d97192d4273e3b880b076dc8"
  },
  {
    "url": "server/docker/docker_use.html",
    "revision": "774ed3076890a76316a01e0e64810bd2"
  },
  {
    "url": "server/docker/index.html",
    "revision": "658a17a91b014d5db3e6d94d15fe746e"
  },
  {
    "url": "server/golang/index.html",
    "revision": "b9913d254a6ec078f40daa07f6dc7de9"
  },
  {
    "url": "server/golang/learning.html",
    "revision": "2c9594c62397e196929c17d6d73e49db"
  },
  {
    "url": "server/java/index.html",
    "revision": "ccdf2362cb6f05d612ba420a8c10dd55"
  },
  {
    "url": "server/java/optional/optional_commonly.html",
    "revision": "7f481afa6e52d1790064985e1b40f1eb"
  },
  {
    "url": "server/java/optional/optional.html",
    "revision": "0806518e1e4cea5305919ac73dce2355"
  },
  {
    "url": "server/java/stream/stream_commonly.html",
    "revision": "a4b83123820353921ddeef6988a2a417"
  },
  {
    "url": "server/java/stream/stream.html",
    "revision": "836e22911325d187a456f5aca9c3dc10"
  },
  {
    "url": "server/linux/command.html",
    "revision": "388f3f8f3ae5d9073a6ba90f4f84bc63"
  },
  {
    "url": "server/linux/date.html",
    "revision": "787a6e64c3381d803b5cb4d9820b7aa7"
  },
  {
    "url": "server/linux/disk.html",
    "revision": "fad2e97e04d896cb83954cc6b962d36a"
  },
  {
    "url": "server/linux/firewall.html",
    "revision": "eecb5749bdefca69ad6465c94b694017"
  },
  {
    "url": "server/linux/index.html",
    "revision": "0feaf09a82fc3a92d7abfebe8f3d7dc1"
  },
  {
    "url": "server/linux/network.html",
    "revision": "916835de8a7b93284dfc0a356a3621e4"
  },
  {
    "url": "server/mysql/date.html",
    "revision": "3660a4b14b6b02294d07ac0298aeced1"
  },
  {
    "url": "server/mysql/index.html",
    "revision": "92ca19bbb42abfbbfc8c5526aab6aa30"
  },
  {
    "url": "stack/index.html",
    "revision": "1887183fdfb09c1cee9b702d850fcba4"
  },
  {
    "url": "网络安全/ctf/ctf基础知识.html",
    "revision": "0089c9d60420a7f6a9d0e1c88662b97c"
  },
  {
    "url": "网络安全/ctf/kali.html",
    "revision": "e03aea82855dbfa53b2d1e654af83b6b"
  },
  {
    "url": "网络安全/index.html",
    "revision": "17c2aa1ee28607c791527f8821347188"
  },
  {
    "url": "网络安全/网络安全知识/信息安全.html",
    "revision": "a12ae85c216d38f56ec1eb950434e951"
  },
  {
    "url": "网络安全/网络安全知识/网络安全基础知识.html",
    "revision": "f33ce0ef996630e74c3d9a0afbac7ca0"
  },
  {
    "url": "网络安全/网络安全知识/网络攻击与防御.html",
    "revision": "0977f4751d3bd34f5c47847dc308f4db"
  },
  {
    "url": "软考/信息系统项目管理师/index.html",
    "revision": "47e120a48b5bd82e0fad38ddebc348bb"
  },
  {
    "url": "软考/系统架构设计师/index.html",
    "revision": "bd3906d035020a24f477f7b52ba51770"
  },
  {
    "url": "软考/系统架构设计师/开发方法/基于架构的软件设计.html",
    "revision": "c50e4157d14e985a552b61153c3e4e73"
  },
  {
    "url": "软考/系统架构设计师/开发方法/形式化方法.html",
    "revision": "aed5c1b13659990e15ee4c4c696f937f"
  },
  {
    "url": "软考/系统架构设计师/开发方法/敏捷方法.html",
    "revision": "015fed7fb53e721b409cee55706a81f4"
  },
  {
    "url": "软考/系统架构设计师/开发方法/统一过程.html",
    "revision": "c654ed3685f64b4d9a5400e61f394ceb"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件开发模型.html",
    "revision": "e240d58e8a1170bb04b4914bd903cac9"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件生命周期.html",
    "revision": "0493647a7c81f93fe3030b5f9cd1f87c"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件重用.html",
    "revision": "f378a642fd8b0be2fd95dcea82f1dafb"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统基本原理.html",
    "revision": "64e61008859ce54eb58f405b6838c22c"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统的类型与结构.html",
    "revision": "ef928e19f21ffaa999183039daf5f6fe"
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
