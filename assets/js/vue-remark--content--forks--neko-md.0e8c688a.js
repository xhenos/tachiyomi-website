(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2IDF":function(t,e,s){"use strict";s("mRH6"),s("ls82");var a=s("HaE+"),n=s("wd/R"),o=s.n(n),r={components:{DownloadButton:s("W3K2").a},props:{fork:{type:String},isPreview:{type:Boolean,default:!1},isGithub:{type:Boolean,default:!1}},data:function(){return{data:{body:"",date:o()(0).fromNow(),downloadUrl:"",version:"v0.00.0"},link:""}},mounted:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.fork,e.next="az"===e.t0?3:"j2k"===e.t0?5:"sy"===e.t0?7:"neko"===e.t0?9:11;break;case 3:return s=t.$fetchers.tachiyomiaz(),e.abrupt("break",13);case 5:return s=t.$fetchers.tachiyomij2k(),e.abrupt("break",13);case 7:return s=t.$fetchers.tachiyomisy(),e.abrupt("break",13);case 9:return s=t.$fetchers.neko(),e.abrupt("break",13);case 11:throw new Error("Unknown fork");case 13:return t.link=s.githubUrl,a=t.isPreview?s.preview(t.$store):s.stable(t.$store),e.next=17,a;case 17:t.data=e.sent.data;case 18:case"end":return e.stop()}}),e)})))()}},i=s("KHd+"),c=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.isGithub?e("button",{staticClass:"rounded-md my-2 md:mx-2 px-20 py-2 bg-indigo-800"},[e("a",{attrs:{href:this.link}},[e("p",{staticClass:"font-bold text-white mb-0"},[this._v("GitHub")])])]):e("download-button",{class:"fork-"+this.fork,attrs:{title:this.isPreview?"Preview":"Stable",data:this.data}})}),[],!1,null,null,null);e.a=c.exports},MRi9:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/website/assets/static/forks_banner-neko.63305e4.31fc0fefde4a8cfe84adf24c2b5212ff.png",size:{width:1125,height:750},sizes:"(max-width: 1125px) 100vw, 1125px",srcset:["/website/assets/static/forks_banner-neko.82a2fbd.31fc0fefde4a8cfe84adf24c2b5212ff.png 480w","/website/assets/static/forks_banner-neko.63305e4.31fc0fefde4a8cfe84adf24c2b5212ff.png 1125w"]}},PRKo:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/website/assets/static/forks_logo-neko.6e7923b.734838dc2705fa1be971146aba9c52c8.png",size:{width:64,height:64},sizes:"(max-width: 64px) 100vw, 64px",srcset:["/website/assets/static/forks_logo-neko.6e7923b.734838dc2705fa1be971146aba9c52c8.png 64w"]}},Q8ce:function(t,e,s){},RnhZ:function(t,e,s){var a={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function n(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="RnhZ"},T0XE:function(t,e,s){"use strict";s("Q8ce")},UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},W3K2:function(t,e,s){"use strict";var a={props:{title:String,color:{type:String,default:"blue"},variant:{type:String,default:"800"},data:Object}},n=s("KHd+"),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"rounded-md my-2 md:mx-2 px-20 py-2",class:"bg-"+t.color+"-"+t.variant},[s("p",{staticClass:"font-bold text-white mb-0"},[t._v(t._s(t.title))]),t.data?s("p",{staticClass:"text-sm font-light text-white m-0"},[t._v(t._s(t.data.version))]):t._e()])}),[],!1,null,null,null);e.a=o.exports},XcK3:function(t,e,s){"use strict";s.r(e);var a=s("KHd+"),n=s("oHnZ"),o=s("2IDF"),r=s("UQSp"),i=s("Kw5r");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var l={DownloadButtons:n.a,ForkButton:o.a,VueRemarkRoot:r.a},f=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===c(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:s[t]=function(){return l[t]}}))},u=i.a.config.optionMergeStrategies,j="__vueRemarkFrontMatter",d={excerpt:null,title:"Neko",description:"MangaDex specific fork of Tachiyomi and TachiyomiJ2K. This contains features specific to MangaDex that those versions cannot offer.",metaImage:"/ogimage_large-neko.png",metaImageType:"summary_large_image",metaColor:"#38CA79",onThisPage:!1,path:"/forks/Neko/"};var p=function(t){t.options[j]&&(t.options[j]=d),i.a.util.defineReactive(t.options,j,d),t.options.computed=u.computed({$frontmatter:function(){return t.options[j]}},t.options.computed)},h=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"g-image-classheaderlogo-srcimagesforks_logo-nekopng-width64-height64-fitcontain-immediate--neko"}},[a("a",{attrs:{href:"#g-image-classheaderlogo-srcimagesforks_logo-nekopng-width64-height64-fitcontain-immediate--neko","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),a("g-image",{staticClass:"headerLogo",attrs:{src:s("PRKo"),width:"64",height:"64",fit:"contain",immediate:""}}),t._v(" Neko")],1),a("DownloadButtons",[a("ForkButton",{attrs:{fork:"neko"}}),a("ForkButton",{attrs:{fork:"neko",isGithub:""}})],1),a("h2",{attrs:{id:"about"}},[a("a",{attrs:{href:"#about","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("About")]),a("p",[t._v("This is a "),a("a",{attrs:{href:"https://mangadex.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("MangaDex")]),t._v(" specific fork of "),a("strong",[t._v("Tachiyomi")]),t._v(" and "),a("a",{attrs:{href:"/forks/TachiyomiJ2K/"}},[t._v("TachiyomiJ2K")]),t._v(". This contains features specific to "),a("strong",[t._v("MangaDex")]),t._v(" that those versions cannot offer. It also features almost every feature that "),a("strong",[t._v("J2K")]),t._v(" has except for extensions (aka other sources), custom covers, and local manga.")]),a("h2",{attrs:{id:"screenshots"}},[a("a",{attrs:{href:"#screenshots","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Screenshots")]),a("g-image",{staticClass:"zoomable",attrs:{src:s("MRi9"),immediate:""}}),a("h2",{attrs:{id:"mangadex-specific-features"}},[a("a",{attrs:{href:"#mangadex-specific-features","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Mangadex specific features:")]),a("ul",[a("li",[t._v("Supports native login to "),a("strong",[t._v("MangaDex")]),t._v(" and supports 2FA")]),a("li",[t._v("MDList support")]),a("li",[t._v("Similar Manga recommendations")]),a("li",[t._v("Manually sync of Manga to and from "),a("strong",[t._v("MangaDex")]),t._v(" follows list")]),a("li",[t._v("MDList tracked manga can be auto marked read in app after reading on the website")]),a("li",[t._v("Ability to filter chapters and skip by scanlator group")])]),a("h2",{attrs:{id:"credits"}},[a("a",{attrs:{href:"#credits","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Credits")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/inorichi/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Inorichi")]),t._v(" for making the original "),a("strong",[t._v("Tachiyomi")])]),a("li",[a("a",{attrs:{href:"https://github.com/Jays2Kings/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Jays2Kings")]),t._v(" for the wonderful new UI of "),a("strong",[t._v("J2K")])])]),a("h2",{attrs:{id:"disclaimer"}},[a("a",{attrs:{href:"#disclaimer","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Disclaimer")]),a("p",[t._v("The developer of this application does not have any affiliation with the content providers available.")])],1)}),[],!1,null,null,null);"function"==typeof f&&f(h),"function"==typeof p&&p(h);e.default=h.exports},oHnZ:function(t,e,s){"use strict";var a={},n=(s("T0XE"),s("KHd+")),o=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" content-center text-center my-8"},[e("div",{staticClass:"buttons-container flex justify-center flex-col flex-wrap xxl:flex-row"},[this._t("default")],2),this._t("footer")],2)}),[],!1,null,null,null);e.a=o.exports}}]);