'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ab7bb713ec98ef616bb142355176b7ec",
".git/config": "6c179bdeed3c719d48f635c0c6895aeb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d541899f873009fdfbbb0c7b1e3ed92b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42abfd4bc395db97d4e943fad1916620",
".git/logs/refs/heads/main": "8a66d42f35b271691566c678f9fc175d",
".git/logs/refs/remotes/origin/main": "1b810335fd8c6a423dbcdced89f74fd6",
".git/objects/02/96f5b5185e0c6a75890ef87085bd5399636c4a": "ae5b913094e085cfcc6ba090813f2021",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/12/fcb83b43e38271abc2340000e92fbeb1e9df67": "8e8ea8158f0cab504514cb208471b65d",
".git/objects/17/f63aaef40026effec28562c7acfe55e82fa0e8": "b3ee6e8fd4123551a3cdb5917a701293",
".git/objects/27/00af902b6601b0dd21a52f0882157699fe0373": "313c52e0197af3f763f2eea02db44dbf",
".git/objects/29/f1b998466bc2eb58019de0396511d88da8eda8": "4a6d00608985df5d512135da2d5b91dd",
".git/objects/32/a5236405916b059374eac951cc06fbb656b784": "da0165887cde1e638a2fa3e11cab1946",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/6947631f2cfd2bcfa3511dbef099029ae6a930": "202699ea4717cda6bc761955a6128b91",
".git/objects/3e/918b2672748fdb21a461c84084d02d15a5f839": "db694365ef1914415bb178ebb0035c9b",
".git/objects/40/bbc65574add1d49a3a9c7d0cdf05c38d877af9": "bfe7f1f79aea1da068ecd677323e6e43",
".git/objects/43/5bfd8b88222a801442b60256c57a84a1a0fbc6": "a56b902f2eedaf4b2613f42b43562105",
".git/objects/45/fb6e2879308e7ca853dcc15f9f0991f7863310": "f0dcb44e8e565382b15e3b8b6ed50bb6",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/2119558b8ed85bb42def09fafec0fafa02efb4": "32d08616e53a029f25906da5ac71b889",
".git/objects/57/1c55372d53f10f007ec819d416c2d1ec60e031": "68a15a1cdd2a5ae9da2fe666fe073928",
".git/objects/57/ccd30c9c0c0df8a307db2d0e718bb3f2610c60": "eaba1970a6c863d4cd6d5b254933b049",
".git/objects/5f/035a0870537f791a78b4e25e2a161ab89c3553": "9f531569b34370e4a79878420c2c131c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/f33d1eebac3f0aa8c77df54d981afac10a8ef3": "de0bd4d63fb3be0661f30dfdc313a3e1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/40a40aab55849fd94d6d8c4ec9ce64e0200e92": "0b436585251592ab3b7d3bbd61b0a050",
".git/objects/79/2497b3a408edd57605184bade290528428c496": "14343da0d06e7a7cf4f285a940d786cc",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/30840e418b88de2da9042fff3d4d86e1890c67": "47db977460566c162c480a9b9e3da17c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/35bd2b900619127a471348ad4d10b810a7608d": "b4e3c4b0d8ab10ff851ed7bbae789874",
".git/objects/8a/2544263bee7e330f92dd4bfe402de997238efd": "cf6e8bdd413402ff480a0f9c08883fb9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d5238acb5c0c00aad55cb6f4ea27648e3ba42a": "b2512506dc9806d5ea0f6af8eb7a3320",
".git/objects/8d/1b819869ce19f860962410e09f19f433d746e3": "78409dd0615bd069f73ab8057ce08153",
".git/objects/8d/755ae354bab00034db3d1a8993093c2bf513b6": "72f26cabb71794fe7f19215847c8599f",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/97/d0f6fffb5dc2eabe60c7df6292c97105ca7cda": "744661f2fa0e57897b841d7f25ae1a18",
".git/objects/a1/541efc180684322eb88f293e1bfa7bf6d43aca": "b17c624f64d1949eef563da7868e2c18",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/470f0c99e76a1b9f35ee97b4e6d69bfb7d6a0a": "3d846b1202777177b90fd4b0cf73d220",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b3/10d150ba19e8fc359ed1a41450c547c9afab8e": "484aa75c819dda583ffe824cc92a86c2",
".git/objects/b5/505e6786fd98c24c32c461268eb0b430431579": "e7897d8a4f9fe1e9b64d1a751046e6fc",
".git/objects/b5/a059bfc2851b24c9eebcbdaad14474208ed61d": "6e05b3ef5aaa4bac86e5142bf0c3782f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/6cc5cefca9f9367abf516542fdd250d51feaec": "26797fed92746fbe0e7f722f464c673e",
".git/objects/c2/293d5c8b81de044a73eeb80e461d7df177e726": "015cfeec435cdff4a547c1416f2cee14",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/359192398595eb57a289a5e6446955a2e59518": "46ca8b089020240ef88cf04f336876bf",
".git/objects/cb/344e2b125183978a7b52199f95c2f254d687f0": "7e25d52c758fbb0b6a3614e96ab9ffa7",
".git/objects/d2/0339b39dfb94563bdf6999207678789b9283fc": "421df144ddc01fec3faf3f36c2f75b00",
".git/objects/d3/4c00f3e1c8bd766b37e99c94958f782fa6ce30": "80cd4ee9eefdd8a79f23f88e4ed62393",
".git/objects/d3/abdf1ba99b3d99dddddaf990e773e87fd01a5e": "fe33f082df67ddeed1e3b5b55db52d40",
".git/objects/d4/2183b5cbbd57dc98107f5d1f772aa29268490a": "a8a6a835d8fba4bc455e46f4c5457d2d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/dcfa228f4190eabe12ff9d731bc6d3c18ed1d5": "a6b43c2a5e633c2fc1c75b61f090f5f5",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/7132179a35cea39900b429e3d9f1194dfc9e91": "d934e9af9af18c74e1f4a34c43aa2596",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4e0a0b03c8dbe14ff96fc79187b9258615a129": "e251b37f91215dcf43c83c11e897de24",
".git/objects/f0/42ce5690cb4c70d9ff45a432988fcbbfd9dfbd": "8595f9a5fb4b5d74270b1ecd84a0e3b6",
".git/objects/f0/fabacb41165de65e21bf7fb420adc1a38c8659": "956d3670735a9750494b3bd42246d3d4",
".git/objects/f0/fd7b6ebf0f761cd4b09fe0aa8504dcbc15b6c7": "e36600749e044ad2c81dde4b41edb3a1",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "cc1a8e2312f08f8596859ae51ddefe01",
".git/refs/remotes/origin/main": "cc1a8e2312f08f8596859ae51ddefe01",
"404.html": "9057b9295a6cd846eba8587db5f49995",
"assets/AssetManifest.bin": "9bbcf007f59a3aa3b22719bd2be75b4f",
"assets/AssetManifest.bin.json": "f2a2f1bce5016578520e8b2cde588b04",
"assets/assets/fonts/MPLUSRounded1c-Black.ttf": "ceb26eef143b584d1d318072fffd8849",
"assets/assets/fonts/MPLUSRounded1c-Bold.ttf": "6a44f1807ec0f774813384d54001e2cc",
"assets/assets/fonts/MPLUSRounded1c-ExtraBold.ttf": "070ba39fd31cbff04a0b2377899deeac",
"assets/assets/fonts/MPLUSRounded1c-Light.ttf": "ec543b0fc0c6095c4a6d21e9b927fa53",
"assets/assets/fonts/MPLUSRounded1c-Medium.ttf": "dfc47fb41d92acd02fb4e88b3d7f7f4a",
"assets/assets/fonts/MPLUSRounded1c-Regular.ttf": "91f3570e9bdbd961f2db14ab7a60c171",
"assets/assets/fonts/MPLUSRounded1c-Thin.ttf": "2768c65494d4a1d81c1d9a1e0bed3dd7",
"assets/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu-Regular.ttf": "2bbbdb8c03d2056361ebdf3d31c6d03f",
"assets/assets/images/construction.png": "4327f58ea90d3c4805b284016b81764b",
"assets/assets/images/empty_search.png": "d6c3340e44c7f10e231e7c1027f912ed",
"assets/assets/images/icon.png": "6b6b8955aaeea531c78cc31cf502fc64",
"assets/assets/images/land.png": "61e9ae39aba1d85346d296265013a2be",
"assets/assets/images/logo_dark.png": "8f88110866845deb604791fe20c13492",
"assets/assets/images/logo_light.png": "a826a08d349528e10cf72113dbc9c920",
"assets/assets/images/type_dark.png": "e54f60b2e76320e67880355853adf674",
"assets/assets/images/type_light.png": "11b11726a25c2230d6e046c616533f43",
"assets/FontManifest.json": "6bc5d3f15f5920225ea0c4c55b8ff04d",
"assets/fonts/MaterialIcons-Regular.otf": "f2843b4677e467e09b4bc3d9dbbccdbd",
"assets/fonts/MPLUSRounded1c-Black.ttf": "ceb26eef143b584d1d318072fffd8849",
"assets/fonts/MPLUSRounded1c-Bold.ttf": "6a44f1807ec0f774813384d54001e2cc",
"assets/fonts/MPLUSRounded1c-ExtraBold.ttf": "070ba39fd31cbff04a0b2377899deeac",
"assets/fonts/MPLUSRounded1c-Light.ttf": "ec543b0fc0c6095c4a6d21e9b927fa53",
"assets/fonts/MPLUSRounded1c-Medium.ttf": "dfc47fb41d92acd02fb4e88b3d7f7f4a",
"assets/fonts/MPLUSRounded1c-Regular.ttf": "91f3570e9bdbd961f2db14ab7a60c171",
"assets/fonts/MPLUSRounded1c-Thin.ttf": "2768c65494d4a1d81c1d9a1e0bed3dd7",
"assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/fonts/Ubuntu-BoldItalic.ttf": "4b926632fb7674f562c821d7d881f11a",
"assets/fonts/Ubuntu-Italic.ttf": "54ed64df032e0c0d1dd36c2839890d69",
"assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/fonts/Ubuntu-LightItalic.ttf": "267b80deff5315fc57e39bc7d26e9fcf",
"assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/fonts/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/fonts/Ubuntu-Regular.ttf": "2bbbdb8c03d2056361ebdf3d31c6d03f",
"assets/images/construction.png": "4327f58ea90d3c4805b284016b81764b",
"assets/images/empty_search.png": "d6c3340e44c7f10e231e7c1027f912ed",
"assets/images/icon.png": "6b6b8955aaeea531c78cc31cf502fc64",
"assets/images/land.png": "61e9ae39aba1d85346d296265013a2be",
"assets/images/logo_dark.png": "8f88110866845deb604791fe20c13492",
"assets/images/logo_light.png": "a826a08d349528e10cf72113dbc9c920",
"assets/images/type_dark.png": "e54f60b2e76320e67880355853adf674",
"assets/images/type_light.png": "11b11726a25c2230d6e046c616533f43",
"assets/NOTICES": "e732580bd25ae3078d41ed66069ef312",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "bfbb6ec3d6f013d2b76dfea91a9016c9",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "44e98c3e5c0bff1e8b84aa8c45f98005",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo_dark.png": "8f88110866845deb604791fe20c13492",
"index.html": "9057b9295a6cd846eba8587db5f49995",
"/": "9057b9295a6cd846eba8587db5f49995",
"main.dart.js": "2d4761946ab22fc092d64d39de00a1de",
"manifest.json": "c10ef5b9f7409ce0056a89444694ea04",
"version.json": "ea81f3e05cdf9fa24341cb9906eac25e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
