(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Bk9X:function(t,e,a){},Q6or:function(t,e,a){"use strict";a.r(e);var i=a("KHd+"),s=(a("07d7"),{props:{items:Array},components:{Carousel:function(){return a.e(2).then(a.t.bind(null,"CmN8",7)).then((function(t){return t.Carousel})).catch()},Slide:function(){return a.e(2).then(a.t.bind(null,"CmN8",7)).then((function(t){return t.Slide})).catch()}}}),o=(a("iL9O"),Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ClientOnly",[a("carousel",{attrs:{perPage:1}},t._l(t.items,(function(e){return a("slide",{key:e},[a("img",{staticClass:"slide-image",attrs:{src:e.image}}),a("p",{staticClass:"slide-title"},[e.title?a("b",[t._v(t._s(e.title))]):t._e()]),e.desc?a("p",{staticClass:"slide-desc"},[t._v(t._s(e.desc))]):t._e()])})),1)],1)}),[],!1,null,null,null).exports),n=a("UQSp"),r=a("Kw5r");function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var d={Carousel:o,VueRemarkRoot:n.a},c=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(d).forEach((function(t){"object"===l(d[t])&&"function"==typeof d[t].render||"function"==typeof d[t]&&"function"==typeof d[t].options.render?e[t]=d[t]:a[t]=function(){return d[t]}}))},p=r.a.config.optionMergeStrategies,g="__vueRemarkFrontMatter",h={excerpt:null,title:"Reader settings",description:"Reader settings for Tachiyomi.",sidebar:"default",prev:"/help/guides/reading-local-manga/",next:"/help/guides/categories/"};var u=function(t){t.options[g]&&(t.options[g]=h),r.a.util.defineReactive(t.options,g,h),t.options.computed=p.computed({$frontmatter:function(){return t.options[g]}},t.options.computed)},v=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"reader-settings"}},[a("a",{attrs:{href:"#reader-settings","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Reader settings")]),a("p",[t._v("This section relates to the reading experience in the app and navigating the reader.")]),a("h2",{attrs:{id:"default-reading-mode-badge-textright-to-left-"}},[a("a",{attrs:{href:"#default-reading-mode-badge-textright-to-left-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Default reading mode "),a("Badge",{attrs:{text:"Right to left"}})],1),a("p",[t._v("This setting sets the reader's default direction when you open a manga.")]),a("p",[a("strong",[t._v("Left to right")])]),a("ul",[a("li",[t._v("Swipe left for next page. Swipe right for previous page.")])]),a("p",[a("strong",[t._v("Right to left")])]),a("ul",[a("li",[t._v("Swipe right for next page. Swipe left for previous page. Default way of reading Manga.")])]),a("p",[a("strong",[t._v("Vertical")])]),a("ul",[a("li",[t._v("Swipe up for next page. Swipe down for previous.")])]),a("p",[a("strong",[t._v("Webtoon")])]),a("ul",[a("li",[t._v("Webtoon is like vertical but stitches all the images together into one stream.")])]),a("p",[a("strong",[t._v("Continuous vertical")])]),a("ul",[a("li",[t._v("Similar to webtoon but with a little space between pages.")])]),a("div",{staticClass:"custom-block c-tip c-empty"},[a("p",[t._v("You can change viewer for different series by going to the series, opening a chapter, tapping the middle of the screen, pressing the gear icon, and selecting a different viewer in "),a("strong",[t._v("Viewer for this series")]),t._v(".")])]),a("h2",{attrs:{id:"double-tap-animation-speed-badge-textnormal-"}},[a("a",{attrs:{href:"#double-tap-animation-speed-badge-textnormal-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Double tap animation speed "),a("Badge",{attrs:{text:"Normal"}})],1),a("p",[t._v("Double tap animation speed changes the speed in which the zoom happens when double tapping.")]),a("h2",{attrs:{id:"show-reading-mode-badge-texttrue-"}},[a("a",{attrs:{href:"#show-reading-mode-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Show reading mode "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("Briefly show current mode when reader is opened")]),a("h2",{attrs:{id:"32-bit-color-badge-textfalse-"}},[a("a",{attrs:{href:"#32-bit-color-badge-textfalse-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("32-bit color "),a("Badge",{attrs:{text:"False"}})],1),a("p",[t._v("This setting decodes images in ARGB888 format to allow the reader to display more colors.")]),a("div",{staticClass:"custom-block c-warning c-empty"},[a("p",[t._v("This setting will only show up on smartphones running "),a("strong",[t._v("Android 8.0")]),t._v(" or higher.")])]),a("h2",{attrs:{id:"animate-page-transitions-badge-texttrue-"}},[a("a",{attrs:{href:"#animate-page-transitions-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Animate page transitions "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("This setting applies a smooth transition when tapping to change page.")]),a("h2",{attrs:{id:"rotation-badge-textfree-"}},[a("a",{attrs:{href:"#rotation-badge-textfree-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Rotation "),a("Badge",{attrs:{text:"Free"}})],1),a("p",[t._v("This allows you to control how the screen is going to be oriented.")]),a("ul",[a("li",[a("strong",[t._v("Free")]),t._v(" lets you rotate the screen between portrait and landscape.")]),a("li",[a("strong",[t._v("Lock")]),t._v(" will lock the orientation to whatever orientation you had before entering the reader.")]),a("li",[a("strong",[t._v("Force Portrait")]),t._v(" forces the reader to be in portrait.")]),a("li",[a("strong",[t._v("Force Landscape")]),t._v(" forces the reader to be in landscape.")])]),a("h2",{attrs:{id:"background-color-badge-textblack-"}},[a("a",{attrs:{href:"#background-color-badge-textblack-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Background color "),a("Badge",{attrs:{text:"Black"}})],1),a("p",[t._v("This allows you to control what color the background should be in reader. Background color can either be "),a("strong",[t._v("Black")]),t._v(", "),a("strong",[t._v("Gray")]),t._v(" or\n"),a("strong",[t._v("White")]),t._v(".\n"),a("Carousel",{attrs:{items:[{title:"Black",image:"https://tachiyomi.org/icons/logo.svg",desc:"Surrounds page with black. With an AMOLED screen you can save battery by using this."},{title:"Gray",image:"https://tachiyomi.org/icons/logo.svg",desc:"Surrounds page with gray."},{title:"White",image:"https://tachiyomi.org/icons/logo.svg",desc:"Surrounds page with white. Makes pages seemless with the screen."}]}})],1),a("h2",{attrs:{id:"fullscreen-badge-texttrue-"}},[a("a",{attrs:{href:"#fullscreen-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Fullscreen "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("This setting specifies if the notification and navigation bar are to be hidden while in the reader.")]),a("h2",{attrs:{id:"show-content-in-cutout-area-badge-texttrue-"}},[a("a",{attrs:{href:"#show-content-in-cutout-area-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Show content in cutout area "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("Lets reader use all screen space even that around punch hole camera and camera notch")]),a("h2",{attrs:{id:"keep-screen-on-badge-texttrue-"}},[a("a",{attrs:{href:"#keep-screen-on-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Keep screen on "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("This setting determines if the device should be allowed to go to sleep while reading a manga.")]),a("h2",{attrs:{id:"show-page-number-badge-texttrue-"}},[a("a",{attrs:{href:"#show-page-number-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Show page number "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("This settings shows the page number at the bottom of the page in current page/total page format.")]),a("h2",{attrs:{id:"skip-chapters-marked-read-badge-textfalse-"}},[a("a",{attrs:{href:"#skip-chapters-marked-read-badge-textfalse-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Skip chapters marked read "),a("Badge",{attrs:{text:"False"}})],1),a("p",[t._v("This setting allows the chapters marked as read to be skipped during reading. This setting can be useful if a series has multiple scanlation groups and you want to hide one's chapters during reading.")]),a("h2",{attrs:{id:"skip-filtered-chapters-badge-texttrue-"}},[a("a",{attrs:{href:"#skip-filtered-chapters-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Skip filtered chapters "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("This setting allows filtered chapters to be skipped during reading.")]),a("h2",{attrs:{id:"always-show-chapter-transition-badge-texttrue-"}},[a("a",{attrs:{href:"#always-show-chapter-transition-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Always show chapter transition "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("Chapter transition is the area between chapters that shows the names of current and next chapters. When this option is disabled, the reader will hide this area only if the next chapter is loaded.")]),a("h2",{attrs:{id:"scale-type-badge-textfit-screen-"}},[a("a",{attrs:{href:"#scale-type-badge-textfit-screen-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Scale type "),a("Badge",{attrs:{text:"Fit screen"}})],1),a("p",[t._v("Scale type lets you choose how the page fits in your screen.")]),a("h3",{attrs:{id:"examples"}},[a("a",{attrs:{href:"#examples","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Examples")]),a("p",[t._v("All examples are illustrations and may not reflect what actually happens.")]),a("Carousel",{attrs:{items:[{title:"Fit screen",image:"https://tachiyomi.org/icons/logo.svg"},{title:"Stretch",image:"https://tachiyomi.org/icons/logo.svg"},{title:"Fit width",image:"https://tachiyomi.org/icons/logo.svg"},{title:"Fit height",image:"https://tachiyomi.org/icons/logo.svg"},{title:"Original size",image:"https://tachiyomi.org/icons/logo.svg",desc:"Will be either zoom in or out depending on image resolution"},{title:"Smart fit",image:"https://tachiyomi.org/icons/logo.svg",desc:"Fits to the longest side of the image"}]}}),a("div",{staticClass:"custom-block c-tip c-empty"},[a("p",[t._v("You can change scale type when reading a chapter. Tap the middle of the screen, press the gear icon at the top, select a different scale type under "),a("strong",[t._v("Scale type")]),t._v(". This will change Scale type for all series.")])]),a("h2",{attrs:{id:"zoom-start-position-badge-textautomatic-typedefault-indicator-verticalmiddle-"}},[a("a",{attrs:{href:"#zoom-start-position-badge-textautomatic-typedefault-indicator-verticalmiddle-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Zoom start position "),a("Badge",{attrs:{text:"Automatic",type:"default-indicator",vertical:"middle"}})],1),a("p",[t._v("Depending on your scale type the page can be wider than the screen, and with zoom start position you can choose where\nTachiyomi will start on that zoomed in page.")]),a("h3",{attrs:{id:"examples-1"}},[a("a",{attrs:{href:"#examples-1","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Examples")]),a("p",[t._v("All examples are illustrations")]),a("Carousel",{attrs:{items:[{title:"Left",image:"https://tachiyomi.org/icons/logo.svg",desc:"Will start at the left side of the page."},{title:"Right",image:"https://tachiyomi.org/icons/logo.svg",desc:"Will start at the right side of the page."},{title:"Center",image:"https://tachiyomi.org/icons/logo.svg",desc:"Will start at the center of the page."}]}}),a("h2",{attrs:{id:"crop-borders-badge-textfalse-"}},[a("a",{attrs:{href:"#crop-borders-badge-textfalse-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Crop borders "),a("Badge",{attrs:{text:"False"}})],1),a("p",[t._v("Tries to remove excess white borders")]),a("Carousel",{attrs:{name:"carousel-crop-borders"}},[a("Slide",[a("figure",{staticClass:"centered"},[a("h4",[t._v("With Crop borders on")]),a("img",{attrs:{height:"400",intrinsicsize:"208x500",width:"260",src:"https://tachiyomi.org/icons/logo.svg"}})])]),a("Slide",[a("figure",{staticClass:"centered"},[a("h4",[t._v("With Crop borders off")]),a("img",{attrs:{height:"400",intrinsicsize:"208x500",width:"260",src:"https://tachiyomi.org/icons/logo.svg"}})])])],1),a("h2",{attrs:{id:"side-padding-badge-textwebtoon-colorgray--badge-textnone-typedefault-indicator-verticalmiddle-"}},[a("a",{attrs:{href:"#side-padding-badge-textwebtoon-colorgray--badge-textnone-typedefault-indicator-verticalmiddle-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Side padding "),a("Badge",{attrs:{text:"Webtoon",color:"gray"}}),a("Badge",{attrs:{text:"None",type:"default-indicator",vertical:"middle"}})],1),a("p",[t._v("Adds a percentage side padding to the sides of the page")]),a("h2",{attrs:{id:"tapping-badge-texttrue-"}},[a("a",{attrs:{href:"#tapping-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Tapping "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("This setting enables switching pages by tapping the sides of the screen.")]),a("h2",{attrs:{id:"invert-tapping-badge-textnone-"}},[a("a",{attrs:{href:"#invert-tapping-badge-textnone-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Invert Tapping "),a("Badge",{attrs:{text:"None"}})],1),a("p",[t._v("Inverts the tapping position depending on which setting you choose.")]),a("p",[a("strong",[t._v("None")])]),a("ul",[a("li",[t._v("Tapping left goes to the next page, and tapping right goes to the previous page")]),a("li",[t._v("Tapping bottom goes to the next page, and tapping top goes to the previous page")])]),a("p",[a("strong",[t._v("Horizontal")])]),a("ul",[a("li",[t._v("Tapping left goes to the previous page, and tapping right goes to the next page")])]),a("p",[a("strong",[t._v("Vertical")])]),a("ul",[a("li",[t._v("Tapping bottom goes to the previous page, and tapping top goes to the next page")])]),a("p",[a("strong",[t._v("Both")])]),a("ul",[a("li",[t._v("Applies the two previous mentioned settings")])]),a("div",{staticClass:"custom-block c-warning c-empty"},[a("p",[t._v("This setting can only be used when Tapping is enabled.")])]),a("h2",{attrs:{id:"long-tap-dialog-badge-texttrue-"}},[a("a",{attrs:{href:"#long-tap-dialog-badge-texttrue-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Long tap dialog "),a("Badge",{attrs:{text:"True"}})],1),a("p",[t._v("If enabled, you can long tap on the screen to get the options to set the current page as cover, share it, or save it.")]),a("h2",{attrs:{id:"volume-keys-badge-textfalse-"}},[a("a",{attrs:{href:"#volume-keys-badge-textfalse-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Volume keys "),a("Badge",{attrs:{text:"False"}})],1),a("p",[t._v("This setting allows you to flip pages using the volume keys, with the volume up button going to the previous page, and volume down going to next page.")]),a("h2",{attrs:{id:"invert-volume-keys-badge-textfalse-"}},[a("a",{attrs:{href:"#invert-volume-keys-badge-textfalse-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Invert volume keys "),a("Badge",{attrs:{text:"False"}})],1),a("p",[t._v("Reverses the Volume keys function of volume up going to the next page and volume down going to the last page.")]),a("div",{staticClass:"custom-block c-warning c-empty"},[a("p",[t._v("This setting can only be used when Volume keys setting is enabled.")])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(v),"function"==typeof u&&u(v);e.default=v.exports},UQSp:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},iL9O:function(t,e,a){"use strict";a("Bk9X")}}]);