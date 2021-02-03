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
    "revision": "678d81f856dd92410ede1113c5aa8389"
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
    "url": "assets/js/15.c18e04ac.js",
    "revision": "7b669b74b7c747dbc67211f6fc879782"
  },
  {
    "url": "assets/js/16.3dc554c1.js",
    "revision": "3ae3e75be4f372b9ae257ee770f7c8df"
  },
  {
    "url": "assets/js/17.540eb8fa.js",
    "revision": "6a3cdd5982e8751fc1f6a6e0cc00efd9"
  },
  {
    "url": "assets/js/18.7ee84047.js",
    "revision": "812fc24e15e1ce66bcb5940611a2ac8f"
  },
  {
    "url": "assets/js/19.6d893ddf.js",
    "revision": "1c8d686ddad8725aeb59b6fb2f79e2e8"
  },
  {
    "url": "assets/js/2.b09e1784.js",
    "revision": "1ec18a9a61408994848775974b2d09bf"
  },
  {
    "url": "assets/js/20.01ed9330.js",
    "revision": "2d5d549d45fedefb05d5640e6fad0271"
  },
  {
    "url": "assets/js/21.57bee78e.js",
    "revision": "4f11a2969eb079306b5015f30d5a7366"
  },
  {
    "url": "assets/js/22.e100d86d.js",
    "revision": "15669e27515831c7aee3f859e6eb9395"
  },
  {
    "url": "assets/js/23.cc9b2be2.js",
    "revision": "5df8a464b78bf32e70dc4e5a0ece7d5d"
  },
  {
    "url": "assets/js/24.28eb29d1.js",
    "revision": "9f70ba062d993c724c92b078cd377ba3"
  },
  {
    "url": "assets/js/25.db2e465e.js",
    "revision": "23be2ca85edf9e4af8f208a2c01063a9"
  },
  {
    "url": "assets/js/26.07410f1e.js",
    "revision": "e3c7948fe4eed637a75d6154964f328b"
  },
  {
    "url": "assets/js/27.efb3f6ca.js",
    "revision": "27ebc2bee46c2138fdefbd15327123ec"
  },
  {
    "url": "assets/js/28.7927a837.js",
    "revision": "b945cc8385f5a3e0867f900f659d1089"
  },
  {
    "url": "assets/js/29.16405edb.js",
    "revision": "9795abb65143f2e6804f9174ea0c051f"
  },
  {
    "url": "assets/js/3.3eb71d08.js",
    "revision": "7b5551aa0c0382746be700fe2e02f7de"
  },
  {
    "url": "assets/js/30.b91d068e.js",
    "revision": "60ef52b1bcb3fd16c0b7b197261869b2"
  },
  {
    "url": "assets/js/31.e430cd51.js",
    "revision": "4d77d09e47d8a9cdb51587d2df85a455"
  },
  {
    "url": "assets/js/32.feccc505.js",
    "revision": "229976b6410cf291a379b91a0aa3437a"
  },
  {
    "url": "assets/js/33.b8fc3e1f.js",
    "revision": "87758b804b35d38c03ea84bf3b257af8"
  },
  {
    "url": "assets/js/34.9e218d44.js",
    "revision": "d6b8494fc095c220cc76938ebe7fb9e4"
  },
  {
    "url": "assets/js/35.a756301c.js",
    "revision": "e4e6d7830ac165c8bd7f23c8fc2c5aa5"
  },
  {
    "url": "assets/js/36.8301d9ab.js",
    "revision": "2f2e3071566974128151df03276593fa"
  },
  {
    "url": "assets/js/37.0102f04c.js",
    "revision": "dec166afbc3889e6240cc29985e89a95"
  },
  {
    "url": "assets/js/38.bd4625a2.js",
    "revision": "7e8678d88c068964a6a27c177d50bee8"
  },
  {
    "url": "assets/js/39.7045c3a1.js",
    "revision": "ce148017bc4bb82d1290a72f3196d0b3"
  },
  {
    "url": "assets/js/4.07154b0c.js",
    "revision": "8e56962c2935c890b405d8beb6a23134"
  },
  {
    "url": "assets/js/40.45f82cba.js",
    "revision": "020053dc4ee663c33ea7fc5e9ee4d835"
  },
  {
    "url": "assets/js/41.a5ebee49.js",
    "revision": "6d641625ad5e340263f263a18f530534"
  },
  {
    "url": "assets/js/42.5ab2b19e.js",
    "revision": "bbcd5a9fcd57bc8e81a7b6359e0f66bc"
  },
  {
    "url": "assets/js/43.ca6f2dbb.js",
    "revision": "4b964068429002217b5e126fe1757619"
  },
  {
    "url": "assets/js/44.45f14a4b.js",
    "revision": "4845e3e303ba918bddbb4df3e087c203"
  },
  {
    "url": "assets/js/45.99fc5427.js",
    "revision": "a2df8c2afffc37063b58adf68133de62"
  },
  {
    "url": "assets/js/46.002a393d.js",
    "revision": "e09b8311702a21cc0262c5f77ae38869"
  },
  {
    "url": "assets/js/47.db778dec.js",
    "revision": "f15a5191ff28b18f6da072d1df6b7fbb"
  },
  {
    "url": "assets/js/48.9ef52d72.js",
    "revision": "d67f044f62a33946fa2719ef9adcb2fa"
  },
  {
    "url": "assets/js/49.e5b9a982.js",
    "revision": "ebf641569d4f6d88248748a4a0677563"
  },
  {
    "url": "assets/js/5.e7b64380.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/50.6bb92218.js",
    "revision": "42e868ed13920b2687714acf69b2cec7"
  },
  {
    "url": "assets/js/51.e98a18fd.js",
    "revision": "3ad9cee60e7f0ec3218a500c9f9d2877"
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
    "url": "assets/js/app.830c5deb.js",
    "revision": "6b4ac153a4f2c9e345a327294cf07154"
  },
  {
    "url": "front/npm_and_yarn.html",
    "revision": "5777de6f5df68a5f90999b105a84257e"
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
    "revision": "fddc1d402fcac250bfe62cd67556b391"
  },
  {
    "url": "items/compare/compare_html.html",
    "revision": "e61aeec0a390da2ca806971abc296f1c"
  },
  {
    "url": "items/compare/compare_mybatis.html",
    "revision": "301647e083146635cdadd5325e4eeece"
  },
  {
    "url": "items/compare/compare_rgb.html",
    "revision": "97ad9c8f53b619265bfe671211b52630"
  },
  {
    "url": "items/development.html",
    "revision": "a25211cc27f9dbfcaf6f8ba9aa360b4c"
  },
  {
    "url": "items/emoji.html",
    "revision": "12d1848e54b0a6d0c353c804d5db9293"
  },
  {
    "url": "items/index.html",
    "revision": "0de98bb668b530275311d4684d9f1ab8"
  },
  {
    "url": "items/mac_timemachine.html",
    "revision": "5362ca6e81cc08cc2ba3b6c8771c03e9"
  },
  {
    "url": "items/magic_problem/bigsur_l2tp.html",
    "revision": "d90b94412b1659153075beeb33fa964c"
  },
  {
    "url": "items/markdown.html",
    "revision": "baf527b7cb088147a7fa7941a1c10726"
  },
  {
    "url": "server/docker/docker_install.html",
    "revision": "69812b156a3f0dd2de868614b899b3ab"
  },
  {
    "url": "server/docker/docker_mysql5.7.html",
    "revision": "382173cb8e4955ab52396e8091866c55"
  },
  {
    "url": "server/docker/docker_use.html",
    "revision": "e6eb49a3e899a95d454d405b22477283"
  },
  {
    "url": "server/docker/index.html",
    "revision": "0cd71a4773abc73589532f6edd29ff7e"
  },
  {
    "url": "server/golang/index.html",
    "revision": "84a1960e9b96ed83399e017bca418a35"
  },
  {
    "url": "server/golang/learning.html",
    "revision": "877358dbaf722cd4c6f398d510d56d72"
  },
  {
    "url": "server/java/index.html",
    "revision": "0f200139997c6482b7bc7040c4ad869a"
  },
  {
    "url": "server/java/optional/optional_commonly.html",
    "revision": "bfbb8ca46c4d41c4f6aa2461cf701af8"
  },
  {
    "url": "server/java/optional/optional.html",
    "revision": "7a78ed25d0f8d1eca4514beea1cbe1a5"
  },
  {
    "url": "server/java/stream/stream_commonly.html",
    "revision": "d848c60079388c4d3929af3a7a3e737e"
  },
  {
    "url": "server/java/stream/stream.html",
    "revision": "4053f29bf3ce9f09f69156f6edb6749c"
  },
  {
    "url": "server/linux/command.html",
    "revision": "1fe4afcb6101631aeff9a929605f3e1d"
  },
  {
    "url": "server/linux/disk.html",
    "revision": "7739019f0448245e17e61d6621b85e01"
  },
  {
    "url": "server/linux/firewall.html",
    "revision": "8f6a933dda921c62559a22a4aecb89c8"
  },
  {
    "url": "server/linux/index.html",
    "revision": "4f5c7a4192d4a1fce2ffdd73fe839722"
  },
  {
    "url": "server/linux/network.html",
    "revision": "cf33a27b5f87841b0beaee45c8652342"
  },
  {
    "url": "stack/index.html",
    "revision": "731c4d81cc53dc1c464adc773341a585"
  },
  {
    "url": "网络安全/ctf/ctf基础知识.html",
    "revision": "135d2689ed0a51f13f583b18341a657e"
  },
  {
    "url": "网络安全/ctf/kali.html",
    "revision": "362ba8530e522f5fbd099105996f6705"
  },
  {
    "url": "网络安全/index.html",
    "revision": "1f807c390a29ba4c4b4c91af7b4d6b3d"
  },
  {
    "url": "网络安全/网络安全知识/信息安全.html",
    "revision": "b05a87453bc0410ca5386cbc8df59f20"
  },
  {
    "url": "网络安全/网络安全知识/网络安全基础知识.html",
    "revision": "9869448e9f09bfffe76dfac297723407"
  },
  {
    "url": "网络安全/网络安全知识/网络攻击与防御.html",
    "revision": "95a4f8144fa4d85ba7203cb1eb4eaf8b"
  },
  {
    "url": "软考/信息系统项目管理师/index.html",
    "revision": "49a083b0d5a7274e579d6173c019a70c"
  },
  {
    "url": "软考/系统架构设计师/index.html",
    "revision": "effaa20f941f31cc177ca4451d9f01bc"
  },
  {
    "url": "软考/系统架构设计师/开发方法/基于架构的软件设计.html",
    "revision": "17560adf7ed9e0abfdfd81fbe87744f8"
  },
  {
    "url": "软考/系统架构设计师/开发方法/形式化方法.html",
    "revision": "1a32095ed1d09d999d155b92e5e98233"
  },
  {
    "url": "软考/系统架构设计师/开发方法/敏捷方法.html",
    "revision": "575be50e4de9d1745c161dce1d134069"
  },
  {
    "url": "软考/系统架构设计师/开发方法/统一过程.html",
    "revision": "fc5c693b95ac9bf0325435c21accfd0a"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件开发模型.html",
    "revision": "ea775801b7a94ea74f6e45ddb917b6e1"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件生命周期.html",
    "revision": "692dd13fa8f88b0b3a555b4ed4c03ef3"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件重用.html",
    "revision": "6d294df59b01ce8a166cc2ed723b9dfd"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统基本原理.html",
    "revision": "4a155888f14ff3f782367861e782d422"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统的类型与结构.html",
    "revision": "250405f3500db107dcbda4bcbae3d0dd"
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
