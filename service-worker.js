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
    "revision": "f12c82e0ad291c433382bc070c1668cf"
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
    "url": "assets/js/15.8bb10096.js",
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
    "url": "assets/js/34.b620bdf3.js",
    "revision": "75b78669aecf52c9820d8d96bee49100"
  },
  {
    "url": "assets/js/35.5af5003d.js",
    "revision": "5506f7ba73a26c94295321805e8ba0a9"
  },
  {
    "url": "assets/js/36.68e64440.js",
    "revision": "b3720f7166f52ab11ae88838689c5a35"
  },
  {
    "url": "assets/js/37.6f35dd65.js",
    "revision": "61de620876cd119b22e663ba83ed0f9c"
  },
  {
    "url": "assets/js/38.488ea8d7.js",
    "revision": "e292c4bb1217da8cf220a72188ae5b83"
  },
  {
    "url": "assets/js/39.7f021fb0.js",
    "revision": "a0cd8c975257f50e64fc1f01753b721e"
  },
  {
    "url": "assets/js/4.ccef0540.js",
    "revision": "554ef5657a28dc08b9bfc21ccd5bf83d"
  },
  {
    "url": "assets/js/40.840aa6e1.js",
    "revision": "ed1a6c0d984c0b3a43e3371e09552595"
  },
  {
    "url": "assets/js/41.61b3b4c9.js",
    "revision": "b053cae02ede02a8cf19f796e9590e11"
  },
  {
    "url": "assets/js/42.366290ba.js",
    "revision": "733a43e8ed95efa2b512eb0ba545f50a"
  },
  {
    "url": "assets/js/43.c9fe4347.js",
    "revision": "5c47a93eb8a6d2d692c81c553be227ef"
  },
  {
    "url": "assets/js/44.130dd179.js",
    "revision": "ec913f03c76a8037414fd53bf1fd73c5"
  },
  {
    "url": "assets/js/45.9fd46c4f.js",
    "revision": "ef430d607c3877848cc6393358bf5cda"
  },
  {
    "url": "assets/js/46.f63298ef.js",
    "revision": "3960b558f5b07e5f8f1e60921f1263ea"
  },
  {
    "url": "assets/js/47.ac8a0f14.js",
    "revision": "696aaceaa273a286f37b26f533407f91"
  },
  {
    "url": "assets/js/48.23b63265.js",
    "revision": "840bce4573344f19ceeeb94f973a1fec"
  },
  {
    "url": "assets/js/49.c5976e82.js",
    "revision": "736edf31485993df7289adfaba87382f"
  },
  {
    "url": "assets/js/5.e7b64380.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/50.5582f243.js",
    "revision": "57a35a108cd68fcd13d0246efbff35c5"
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
    "url": "assets/js/app.b8f5e6bd.js",
    "revision": "3a59c5fd5e8fdb0e4ee3c1c61b677add"
  },
  {
    "url": "front/npm_and_yarn.html",
    "revision": "197a959d4362e6126e2c6a466538f5b7"
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
    "revision": "dd62ca52267159b9934207772d844589"
  },
  {
    "url": "items/compare/compare_html.html",
    "revision": "1ad878f38b10e625220eeb161c2c3a31"
  },
  {
    "url": "items/compare/compare_mybatis.html",
    "revision": "b4a7b2381b4fb9b68e5aca10b18093ad"
  },
  {
    "url": "items/compare/compare_rgb.html",
    "revision": "7a0653dd5baa71704e84434a6b63debf"
  },
  {
    "url": "items/development.html",
    "revision": "b8ef3864d1a2dfc4ccce96402a569d64"
  },
  {
    "url": "items/emoji.html",
    "revision": "0195e474c8ab60450d96038cb91a8b06"
  },
  {
    "url": "items/index.html",
    "revision": "18965a6cda9c80395d52d73881f8c744"
  },
  {
    "url": "items/mac_timemachine.html",
    "revision": "b4a98b15dbd9cd0677ff70206f9089cc"
  },
  {
    "url": "items/magic_problem.html",
    "revision": "059ae8c8e745a3fcf4a69593e473649b"
  },
  {
    "url": "items/markdown.html",
    "revision": "76b669f9d0cf8a1fce9dc23a3c443ea2"
  },
  {
    "url": "server/docker/docker_install.html",
    "revision": "b6c4bad2d39666126f33ce9668c2b032"
  },
  {
    "url": "server/docker/docker_mysql5.7.html",
    "revision": "caf03960babac11cf05b4878b08384c9"
  },
  {
    "url": "server/docker/docker_use.html",
    "revision": "aaf2505d4bc3438006e9f4fa61715853"
  },
  {
    "url": "server/docker/index.html",
    "revision": "c8b2b743c7be5cbf0b92f8bfe5716124"
  },
  {
    "url": "server/golang/index.html",
    "revision": "70c77a16331579c0a9993bc05f58b1d6"
  },
  {
    "url": "server/golang/learning.html",
    "revision": "bca54eb7284796f53cc9cbef237b07cc"
  },
  {
    "url": "server/java/index.html",
    "revision": "4e49f99f203a53d6ccbfd77448f1d717"
  },
  {
    "url": "server/java/optional/optional_commonly.html",
    "revision": "3d4b0c98e48a2c7817380bc9d31c8953"
  },
  {
    "url": "server/java/optional/optional.html",
    "revision": "b8de6926544efbe8329ecf924416d5f4"
  },
  {
    "url": "server/java/stream/stream_commonly.html",
    "revision": "08f660a96db829e7f7985527b3865c4a"
  },
  {
    "url": "server/java/stream/stream.html",
    "revision": "902b770b16b1da9d23d1680cf48d1553"
  },
  {
    "url": "server/linux/command.html",
    "revision": "eb72123c6792992d5496be0573e20df4"
  },
  {
    "url": "server/linux/disk.html",
    "revision": "eaeecd8a849d871596196bd8f4cb2dc2"
  },
  {
    "url": "server/linux/firewall.html",
    "revision": "520eea6193d73149f972b37aa1c7aa43"
  },
  {
    "url": "server/linux/index.html",
    "revision": "c5e1c1be7a92b1a84013bb40007af66c"
  },
  {
    "url": "server/linux/network.html",
    "revision": "5e57f0cf796448c8c336015f33e98c42"
  },
  {
    "url": "stack/index.html",
    "revision": "f3a6348c3e5f2841be523f7edab31b0b"
  },
  {
    "url": "系统架构设计师/index.html",
    "revision": "58e28d897974c0d15c033b89bc49b775"
  },
  {
    "url": "系统架构设计师/开发方法/基于架构的软件设计.html",
    "revision": "9150cc1699640685227c2b49119fd8dd"
  },
  {
    "url": "系统架构设计师/开发方法/形式化方法.html",
    "revision": "7fb6be684ce8972fd6546bd2da2528dd"
  },
  {
    "url": "系统架构设计师/开发方法/敏捷方法.html",
    "revision": "267f3e3ca5f6bca2da7bb5b390c2b904"
  },
  {
    "url": "系统架构设计师/开发方法/统一过程.html",
    "revision": "80ab25eec9c566cc7a4e875a6f3a5012"
  },
  {
    "url": "系统架构设计师/开发方法/软件开发模型.html",
    "revision": "88ef2a57ab77beca5f68885bed480f38"
  },
  {
    "url": "系统架构设计师/开发方法/软件生命周期.html",
    "revision": "99492430cfaf4c2a927e0107c35c47b0"
  },
  {
    "url": "系统架构设计师/开发方法/软件重用.html",
    "revision": "ab3f4ff4f3d81f278591770e1fb99c36"
  },
  {
    "url": "系统架构设计师/操作系统/操作系统基本原理.html",
    "revision": "43337c6c185dec5a94ffefdbf5b847e9"
  },
  {
    "url": "系统架构设计师/操作系统/操作系统的类型与结构.html",
    "revision": "6c01e8874d66acb337f96f4f12030161"
  },
  {
    "url": "网络安全/ctf/ctf基础知识.html",
    "revision": "71b885c9b5becc7f66407a27dce6a107"
  },
  {
    "url": "网络安全/ctf/kali.html",
    "revision": "a5d6e0e605985126f3ef231256d1d07e"
  },
  {
    "url": "网络安全/index.html",
    "revision": "3fc19bc9aac248714f9851d27b71854d"
  },
  {
    "url": "网络安全/网络安全知识/信息安全.html",
    "revision": "1fa4a8f2064640787cfea49e1fb708b9"
  },
  {
    "url": "网络安全/网络安全知识/网络安全基础知识.html",
    "revision": "46a59352a6c30009769dacf6746e5914"
  },
  {
    "url": "网络安全/网络安全知识/网络攻击与防御.html",
    "revision": "7a72e5ea8ee28cec84b1a54b40b3a95d"
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
