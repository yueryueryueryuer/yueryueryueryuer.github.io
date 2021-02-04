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
    "revision": "c4e6bea18e68517715f70762ab825af2"
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
    "url": "assets/js/2.91d4e44f.js",
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
    "url": "assets/js/app.31adb63d.js",
    "revision": "0f97630bb5d6f7fcc3db748565451907"
  },
  {
    "url": "front/npm_and_yarn.html",
    "revision": "b424184401eee769863b603f37b62ba5"
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
    "revision": "8dce685075f09ea9e910727f21713220"
  },
  {
    "url": "items/compare/compare_html.html",
    "revision": "b3b3d8d86c7631cc02bb9e45e62ba794"
  },
  {
    "url": "items/compare/compare_mybatis.html",
    "revision": "9379a1cf872f1a970bf4385754723eec"
  },
  {
    "url": "items/compare/compare_rgb.html",
    "revision": "67d5acad09d70331f597d7d268ab8afa"
  },
  {
    "url": "items/development.html",
    "revision": "31075b2871f768270a4d0256a9113e66"
  },
  {
    "url": "items/emoji.html",
    "revision": "aed72b65a21fd1068b9835e5ce791b2d"
  },
  {
    "url": "items/index.html",
    "revision": "7e2df6cfb8d58d9dad32aade86cb3cde"
  },
  {
    "url": "items/mac_timemachine.html",
    "revision": "0dd1b8447d21e5cdb873cc3a4bc1f557"
  },
  {
    "url": "items/magic_problem/bigsur_l2tp.html",
    "revision": "c36ad26cacbab513de64861053de8c85"
  },
  {
    "url": "items/markdown.html",
    "revision": "e8cbec8d618286bc249485773f5fd253"
  },
  {
    "url": "server/docker/docker_install.html",
    "revision": "b3f0eda3742f878744da01d6db70148a"
  },
  {
    "url": "server/docker/docker_mysql5.7.html",
    "revision": "5e652d9e4cb9a220751b7fa034328a3f"
  },
  {
    "url": "server/docker/docker_use.html",
    "revision": "42e087452fc0e4244406425ae002194d"
  },
  {
    "url": "server/docker/index.html",
    "revision": "3cc7e05ee5660c698f049b686863ab9c"
  },
  {
    "url": "server/golang/index.html",
    "revision": "cb768f3f80a0ca88c2fcf73fe6055bb2"
  },
  {
    "url": "server/golang/learning.html",
    "revision": "7efa5c951a6798b6bb11aa6c7b7b9a0d"
  },
  {
    "url": "server/java/index.html",
    "revision": "61d3138f10440dd0cae9f713a0fd6a37"
  },
  {
    "url": "server/java/optional/optional_commonly.html",
    "revision": "b1e227719d63d28bae8914f6ec263f03"
  },
  {
    "url": "server/java/optional/optional.html",
    "revision": "5d6606f4b4976718b15ec5cdfa2cac79"
  },
  {
    "url": "server/java/stream/stream_commonly.html",
    "revision": "b0576b90dda1b28e48c52307496e30e8"
  },
  {
    "url": "server/java/stream/stream.html",
    "revision": "e6f1292ed8453df334faf03c82de720d"
  },
  {
    "url": "server/linux/command.html",
    "revision": "a898890bd4db7c12a3f162cf56d9dcce"
  },
  {
    "url": "server/linux/disk.html",
    "revision": "af8dd3eab881c1b71861df5519626590"
  },
  {
    "url": "server/linux/firewall.html",
    "revision": "822e45afbf52101e82c7c2d44294f0e4"
  },
  {
    "url": "server/linux/index.html",
    "revision": "b8ea8309db4dbd72bc1d90440d269c70"
  },
  {
    "url": "server/linux/network.html",
    "revision": "220b9b1ec6bd2f98eeae59013008346c"
  },
  {
    "url": "stack/index.html",
    "revision": "c045af7526fee8c251061a529a2e8e84"
  },
  {
    "url": "网络安全/ctf/ctf基础知识.html",
    "revision": "d5c4474d923dcfabe41629f10aa69331"
  },
  {
    "url": "网络安全/ctf/kali.html",
    "revision": "b4cf44cfa480d06e29b8550c766f66ac"
  },
  {
    "url": "网络安全/index.html",
    "revision": "9fa195cd8dfd15c5f3f0ed156297a8a3"
  },
  {
    "url": "网络安全/网络安全知识/信息安全.html",
    "revision": "d61fb2ea83423f79356bca8d24528aac"
  },
  {
    "url": "网络安全/网络安全知识/网络安全基础知识.html",
    "revision": "1295fe67e97a0631bb0ffd638dfdde70"
  },
  {
    "url": "网络安全/网络安全知识/网络攻击与防御.html",
    "revision": "c1ffba19e330571e2d788bd4436d5717"
  },
  {
    "url": "软考/信息系统项目管理师/index.html",
    "revision": "57b2b80836b8b5a0bde586f30bda5e28"
  },
  {
    "url": "软考/系统架构设计师/index.html",
    "revision": "301e6851160dc1bdfbbfd84941f9a3bf"
  },
  {
    "url": "软考/系统架构设计师/开发方法/基于架构的软件设计.html",
    "revision": "46278de112e9901b23c1a0bc14efcf52"
  },
  {
    "url": "软考/系统架构设计师/开发方法/形式化方法.html",
    "revision": "9920e91ae2cd72770700c94cc9433b7d"
  },
  {
    "url": "软考/系统架构设计师/开发方法/敏捷方法.html",
    "revision": "9d1d260ee6447f11eaeb54e11552b177"
  },
  {
    "url": "软考/系统架构设计师/开发方法/统一过程.html",
    "revision": "05188f793947fc848993830f2af52556"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件开发模型.html",
    "revision": "36f8cfd7510dc2a88c7b03a4a302cca3"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件生命周期.html",
    "revision": "912acae21341890e4528ec94888e12be"
  },
  {
    "url": "软考/系统架构设计师/开发方法/软件重用.html",
    "revision": "ce9be277eb413ef2460d38f47b5a6834"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统基本原理.html",
    "revision": "b3d0c7966184189c0ad68ed9bd989a3a"
  },
  {
    "url": "软考/系统架构设计师/操作系统/操作系统的类型与结构.html",
    "revision": "43939ef74ec50e888f73248ecc01a698"
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
