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
    "revision": "0afb014cfb6f90162afcd5b497eadaac"
  },
  {
    "url": "网络安全/网络安全知识/网络安全基础知识.html",
    "revision": "d3bed8c8f556b63e26374a89c148fad2"
  },
  {
    "url": "网络安全/网络安全知识/网络攻击与防御.html",
    "revision": "bb5166da8ce86c477f61b8f30bce5031"
  },
  {
    "url": "网络安全/网络安全知识/信息安全.html",
    "revision": "9521e0a716c09f31f5a801cdd8e69ff4"
  },
  {
    "url": "网络安全/ctf/ctf基础知识.html",
    "revision": "20396d222334fa8288373c877b3a6492"
  },
  {
    "url": "网络安全/ctf/kali.html",
    "revision": "e3c43e14f5bb6b5c26aeaeaff0b0b918"
  },
  {
    "url": "网络安全/index.html",
    "revision": "847c70265fc6f0dde879ad942069a15f"
  },
  {
    "url": "系统架构设计师/操作系统/操作系统的类型与结构.html",
    "revision": "0a593e23c09faf429fbb303807ff460e"
  },
  {
    "url": "系统架构设计师/操作系统/操作系统基本原理.html",
    "revision": "53ce488be29ff3b2ffb7a0c248fdab59"
  },
  {
    "url": "系统架构设计师/开发方法/基于架构的软件设计.html",
    "revision": "f5fe994c387f0dffbc141769e31ae36c"
  },
  {
    "url": "系统架构设计师/开发方法/敏捷方法.html",
    "revision": "ad739c0fd35a2fed7d360175332e32ae"
  },
  {
    "url": "系统架构设计师/开发方法/软件开发模型.html",
    "revision": "af4271a999a2c64f80f53e4f1b22c3d7"
  },
  {
    "url": "系统架构设计师/开发方法/软件生命周期.html",
    "revision": "f9e6f6e845789b14565161a57eaade3a"
  },
  {
    "url": "系统架构设计师/开发方法/软件重用.html",
    "revision": "acd9253632a2bc9282a8cc5c0afb71e1"
  },
  {
    "url": "系统架构设计师/开发方法/统一过程.html",
    "revision": "58e9738e8c0fb8c07fb3e95dd2c8116f"
  },
  {
    "url": "系统架构设计师/开发方法/形式化方法.html",
    "revision": "e947d2bcaeee966345eacca4506bb138"
  },
  {
    "url": "系统架构设计师/index.html",
    "revision": "bd9b151417cd3b34fe5088a546452cb3"
  },
  {
    "url": "assets/css/0.styles.854d9a62.css",
    "revision": "f26e7c3ff4461f674096230fdc0c230c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b8bdb1b6.js",
    "revision": "a11120c17863f30b43c31424d3c2bf64"
  },
  {
    "url": "assets/js/11.ca26ac69.js",
    "revision": "1967b5aed767daae376687ff9739b330"
  },
  {
    "url": "assets/js/12.7d116de9.js",
    "revision": "68b4664af944bb4e8ca163f5bc8165f8"
  },
  {
    "url": "assets/js/13.d293981f.js",
    "revision": "4f9bef83747b3044bbe4473a8caf6b7c"
  },
  {
    "url": "assets/js/14.1d2563d7.js",
    "revision": "fdbebfb8ae57bef97c6075f6666867e4"
  },
  {
    "url": "assets/js/15.395eb3b5.js",
    "revision": "3b73dea9553e0dcf3aacb1669fd70e2f"
  },
  {
    "url": "assets/js/16.00ab602e.js",
    "revision": "9e1a419e725f4d7bea226f39f2b9c637"
  },
  {
    "url": "assets/js/17.0f6ee311.js",
    "revision": "5b4038707f4373cfb410e62c6cb2d434"
  },
  {
    "url": "assets/js/18.9689f9c4.js",
    "revision": "0c67e5cb11708f208a77ab4ac07bc7d6"
  },
  {
    "url": "assets/js/19.d8ab1b75.js",
    "revision": "237a2c694f335f1c77d612a928cbbe87"
  },
  {
    "url": "assets/js/2.2ce72ce0.js",
    "revision": "e0b90233189ad64a787b27fdf4a1bb64"
  },
  {
    "url": "assets/js/20.afc70309.js",
    "revision": "fc8e244947bc406b6ef7884a74ba1357"
  },
  {
    "url": "assets/js/21.65348a06.js",
    "revision": "6682e0280e0a1a190a2a56f35c5bb557"
  },
  {
    "url": "assets/js/22.325f5dac.js",
    "revision": "01e7f26abc4f031bdc3a0732ec24c84d"
  },
  {
    "url": "assets/js/23.728db6df.js",
    "revision": "d0c93a1ab5bfa5503a77b331f29334c7"
  },
  {
    "url": "assets/js/24.90cfd1a8.js",
    "revision": "475e9d175ee983d7eaa9a9764c3492af"
  },
  {
    "url": "assets/js/25.e5a59868.js",
    "revision": "8931f63aa4c61fbee2a071ef5896b557"
  },
  {
    "url": "assets/js/26.0b1a6351.js",
    "revision": "e36bbfb8bbd097578a673618e156e35f"
  },
  {
    "url": "assets/js/27.0c1a22e1.js",
    "revision": "4a6112f18516e6b272ff059fbfd5362d"
  },
  {
    "url": "assets/js/28.24f1f935.js",
    "revision": "723051996c99bd99c1396e15a944f0f0"
  },
  {
    "url": "assets/js/29.c8e2b180.js",
    "revision": "1331a4f683cb6a8aaed983778ac72161"
  },
  {
    "url": "assets/js/3.2b87fdfa.js",
    "revision": "6db9720699cfdfcf7a1977c2ae6bd17d"
  },
  {
    "url": "assets/js/30.4f78c2c6.js",
    "revision": "0475a83907e664455c561ae5e886175b"
  },
  {
    "url": "assets/js/31.d15da23e.js",
    "revision": "53d100077d402d8e9636077eb27fdba7"
  },
  {
    "url": "assets/js/32.71100f08.js",
    "revision": "879015bd7a808067398c6d1bea9277a8"
  },
  {
    "url": "assets/js/33.652025c1.js",
    "revision": "c823be536441262dba317ac37bf7c8ba"
  },
  {
    "url": "assets/js/34.1044114e.js",
    "revision": "5d88c7b9a8dde8d18d144431ddc53239"
  },
  {
    "url": "assets/js/35.9caa62d3.js",
    "revision": "2558fc7273c0fe64d5c43eb0f3167678"
  },
  {
    "url": "assets/js/36.84fd031e.js",
    "revision": "20f0816dac8ffafa8ce0f17e9296cc5b"
  },
  {
    "url": "assets/js/37.7f53ed3a.js",
    "revision": "b7c8534f8672512f92c629572d147a8e"
  },
  {
    "url": "assets/js/38.9e970519.js",
    "revision": "b448b29bf68f955d8d1929afe017f87c"
  },
  {
    "url": "assets/js/39.321366ae.js",
    "revision": "f80aa8d8d186ba58a4c7d664a0fa2c8b"
  },
  {
    "url": "assets/js/4.fe015733.js",
    "revision": "c1d078aed3dbdb3345bff9b7ddbf2f74"
  },
  {
    "url": "assets/js/40.4290e9b8.js",
    "revision": "00c4aa36b2c464432f4071b49552a449"
  },
  {
    "url": "assets/js/41.05b297ac.js",
    "revision": "d1168d9f722a19945c1a86b795448b8a"
  },
  {
    "url": "assets/js/42.1f6cdfaa.js",
    "revision": "f4c1fc2b40ed6c1d874dcf8c7078702a"
  },
  {
    "url": "assets/js/43.96ec85ed.js",
    "revision": "223107f0512ba2bfd9722f98717b258d"
  },
  {
    "url": "assets/js/44.18294f12.js",
    "revision": "a6f74bcfaa8b720958aa6176cecd09a5"
  },
  {
    "url": "assets/js/45.e37971ae.js",
    "revision": "010b539c79d1f5ee34cf218782ea741f"
  },
  {
    "url": "assets/js/46.8bb0ae1f.js",
    "revision": "0a3f2395750986d2b19e3c6c912377ea"
  },
  {
    "url": "assets/js/47.cd9bb279.js",
    "revision": "9d9acb632ece77c33c15f291d1e6cc07"
  },
  {
    "url": "assets/js/48.2c994fe8.js",
    "revision": "ea4e8596545442542bdf4b96d0a375c4"
  },
  {
    "url": "assets/js/49.5b604b45.js",
    "revision": "43bf0e40b62e927537f22ace35c925f5"
  },
  {
    "url": "assets/js/5.4f2e9337.js",
    "revision": "b91aac527b3c018656a8f43069004626"
  },
  {
    "url": "assets/js/50.b4f5fc9a.js",
    "revision": "bde8cddfa81bceeeede8cc6c63bc9390"
  },
  {
    "url": "assets/js/51.f701473f.js",
    "revision": "9189ccffc8c1401275a1a4aafb42161a"
  },
  {
    "url": "assets/js/6.4e59c99f.js",
    "revision": "6c61b34ea16a588f25b89fe55d10f208"
  },
  {
    "url": "assets/js/7.8378210a.js",
    "revision": "7c5a9dfb4473a6e9b40e4141db823513"
  },
  {
    "url": "assets/js/8.490f3f56.js",
    "revision": "809679f7ff4820ac0652fa9100306056"
  },
  {
    "url": "assets/js/9.fb0182c2.js",
    "revision": "620f60024aa6dbb81622d6c4fda8c156"
  },
  {
    "url": "assets/js/app.da0b4243.js",
    "revision": "e5393827ce770f66189b7b65ddf25f5b"
  },
  {
    "url": "front/npm_and_yarn.html",
    "revision": "4b980e6e5b22a3a174fb692d4fb077cb"
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
    "url": "img/网络安全/对称加密.png",
    "revision": "5584d4221ec53c07a80ff3bab2bfccf6"
  },
  {
    "url": "img/网络安全/非对称加密.png",
    "revision": "791294e887828e9c133b7fe29b73e709"
  },
  {
    "url": "img/网络安全/数字签名.png",
    "revision": "ffa14599040499f2cf2afa6751b78db0"
  },
  {
    "url": "img/系统架构设计师/操作系统/操作系统与计算机软硬件关系.png",
    "revision": "b692b71bb046078ca32a1d3c5068e821"
  },
  {
    "url": "img/系统架构设计师/操作系统/存储器的层次结构.png",
    "revision": "0252c5e20ef6dd0755b9ac6632ee5816"
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
    "url": "img/系统架构设计师/操作系统/三级索引结构图.png",
    "revision": "58bcfa852c5ee7125b9e8ad8d0d020cc"
  },
  {
    "url": "img/系统架构设计师/操作系统/作业的状态及转换.png",
    "revision": "dad507e6147f6145dce25811bf67dc42"
  },
  {
    "url": "img/系统架构设计师/开发方法/螺旋模型.png",
    "revision": "df911006618e009afbc9f72402b8e3cc"
  },
  {
    "url": "img/系统架构设计师/开发方法/瀑布模型.png",
    "revision": "a6da2c6ec54b6507878beb1d7b88560b"
  },
  {
    "url": "img/系统架构设计师/开发方法/瀑布V模型.png",
    "revision": "13fed1d7a2872212107c23cf2ff05c78"
  },
  {
    "url": "img/系统架构设计师/考点.png",
    "revision": "2235e6dc98c8b5e4fa699937b91723b4"
  },
  {
    "url": "img/logo.png",
    "revision": "24fc46c9d871682e53b7500ca82b4658"
  },
  {
    "url": "index.html",
    "revision": "80c027cd4b1f89cd298f697711ecec88"
  },
  {
    "url": "items/compare/compare_html.html",
    "revision": "ff35ee3c135ab8610b1bc5a189e603e7"
  },
  {
    "url": "items/compare/compare_mybatis.html",
    "revision": "6b49ceb37f17450f2f8b48eb8cb6b27f"
  },
  {
    "url": "items/compare/compare_rgb.html",
    "revision": "556572f4c4eb1e35e7025449b27affa2"
  },
  {
    "url": "items/development.html",
    "revision": "5492d1b4a7172169273578c35c2de7ed"
  },
  {
    "url": "items/emoji.html",
    "revision": "9e179d2772cddce978c9fed8b002020c"
  },
  {
    "url": "items/index.html",
    "revision": "dacd5ebad8c3e441091497d3c363ce0b"
  },
  {
    "url": "items/mac_timemachine.html",
    "revision": "335ae66dc1a7b1f598d5a879264cb9fb"
  },
  {
    "url": "items/magic_problem.html",
    "revision": "e3ab4ea9014e356475d6072251352c1c"
  },
  {
    "url": "items/markdown.html",
    "revision": "31cb5b19dbf79c2afd25323b6f351990"
  },
  {
    "url": "server/docker/docker_install.html",
    "revision": "32fcc421d99c9f4ca76251c008f7c2de"
  },
  {
    "url": "server/docker/docker_mysql5.7.html",
    "revision": "a6cb53d766fca06a25d4dc24907583ed"
  },
  {
    "url": "server/docker/docker_use.html",
    "revision": "4f363190a32cb42e9c7b5db5b06a25f9"
  },
  {
    "url": "server/docker/index.html",
    "revision": "aad1d9c70b398af142ed3aa7cf32c60f"
  },
  {
    "url": "server/golang/index.html",
    "revision": "78e890cdea2bc3ba7c955ecf7d60ed66"
  },
  {
    "url": "server/golang/learning.html",
    "revision": "f2f0f9611c8e6913bb6d0e72725e11b4"
  },
  {
    "url": "server/java/index.html",
    "revision": "7d91638b6f68d523b0c74785808245cf"
  },
  {
    "url": "server/java/optional/optional_commonly.html",
    "revision": "96568e24f340cc016043847d61e48ac3"
  },
  {
    "url": "server/java/optional/optional.html",
    "revision": "f93b4ad8be631bebd298c8b624264550"
  },
  {
    "url": "server/java/stream/stream_commonly.html",
    "revision": "6e918aee07d96b87201b62b919673c49"
  },
  {
    "url": "server/java/stream/stream.html",
    "revision": "7496f748287f3607ee6ea6f18dc85965"
  },
  {
    "url": "server/linux/command.html",
    "revision": "1469d6778beb098fa7f3810051345953"
  },
  {
    "url": "server/linux/disk.html",
    "revision": "840e71d3f13fc9172ce481a4fd421c0c"
  },
  {
    "url": "server/linux/firewall.html",
    "revision": "6a93449f380e6352caa9fd76a851ac69"
  },
  {
    "url": "server/linux/index.html",
    "revision": "2932d63bbfea063fce4eb1095d5ec933"
  },
  {
    "url": "server/linux/network.html",
    "revision": "bfee242f51079f25e60cc97e86be74c9"
  },
  {
    "url": "stack/index.html",
    "revision": "da46fd3bae01bd740cacbbfcee0e3d39"
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
