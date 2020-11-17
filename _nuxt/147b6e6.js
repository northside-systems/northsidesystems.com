(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1b7833da",content,!0,{sourceMap:!1})},222:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("42bf1c40",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";n(221)},224:function(t,e,n){(e=n(59)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},225:function(t,e,n){"use strict";n(222)},226:function(t,e,n){(e=n(59)(!1)).push([t.i,".transition-bg{transition-property:background-color,background-opacity,-webkit-backdrop-filter;transition-property:background-color,background-opacity,backdrop-filter;transition-property:background-color,background-opacity,backdrop-filter,-webkit-backdrop-filter}.bg-blur{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}@supports not ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){.bg-blur{--bg-opacity:0.90}}",""]),t.exports=e},238:function(t,e,n){"use strict";n.r(e);var l={props:["title","logo"],data:function(){return{isOpen:!1,bg:!1}},created:function(){"undefined"!=typeof window&&(window.addEventListener("scroll",this.handleScroll),this.handleScroll())},destroyed:function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>0?this.bg||(this.bg=!0):this.bg&&(this.bg=!1)}}},r=(n(225),n(21)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex items-center justify-between flex-wrap transition-bg ease-in duration-100 bg-indigo-900 p-4 fixed w-full z-40 top-0",class:t.bg||t.isOpen?"bg-opacity-25 bg-blur":"bg-opacity-0"},[n("div",{staticClass:"flex items-center flex-shrink-0 text-white mr-6 max-w-full"},[n("a",{staticClass:"text-white no-underline hover:text-white hover:no-underline",attrs:{href:"#"}},[t.logo?n("img",{staticClass:"h-12 max-w-full",attrs:{src:t.logo,title:t.title}}):t._e(),t._v(" "),t.logo?t._e():n("span",{staticClass:"text-2xl pl-2"},[t._v("\n        "+t._s(t.title)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"block lg:hidden"},[n("button",{staticClass:"flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white",attrs:{id:"nav-toggle"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[t._v("Menu")]),n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),t._v(" "),n("div",{staticClass:"w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0",class:t.isOpen?"":"hidden",attrs:{id:"nav-content"}},[t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-reset lg:flex justify-end flex-1 items-center"},[e("li",{staticClass:"mr-3"},[e("a",{staticClass:"inline-block py-2 px-4 text-white no-underline",attrs:{href:"#"}},[this._v("Active")])]),this._v(" "),e("li",{staticClass:"mr-3"},[e("a",{staticClass:"inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4",attrs:{href:"#"}},[this._v("link")])]),this._v(" "),e("li",{staticClass:"mr-3"},[e("a",{staticClass:"inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4",attrs:{href:"#"}},[this._v("link")])]),this._v(" "),e("li",{staticClass:"mr-3"},[e("a",{staticClass:"inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4",attrs:{href:"#"}},[this._v("link")])])])}],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);var l={props:["headingOne","headingTwo","image"],data:function(){return{isOpen:!1}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-black overflow-hidden"},[n("div",{staticClass:"max-w-screen-xl mx-auto"},[n("div",{staticClass:"relative z-10 pb-8 bg-red sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32"},[n("div",{staticClass:"relative pt-12 lg:pt-6"}),t._v(" "),n("main",{staticClass:"mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-40 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[n("h2",{staticClass:"text-2xl tracking-tight leading-10 font-extrabold font-headline text-gray-200 sm:text-4xl sm:leading-none md:text-5xl"},[t._v("\n            "+t._s(t.headingOne)+"\n            "),n("br",{staticClass:"xl:hidden"}),t._v(" "),n("span",{staticClass:"text-indigo-500"},[t._v(t._s(t.headingTwo))])]),t._v(" "),n("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._t("default")],2),t._v(" "),t._m(0)])])])]),t._v(" "),n("div",{staticClass:"absolute inset-y-0 right-0 w-full opacity-25"},[n("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.image,alt:""}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[e("div",{staticClass:"rounded-md shadow"},[e("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10",attrs:{href:"#"}},[this._v("\n                Get started\n              ")])]),this._v(" "),e("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[e("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10",attrs:{href:"#"}},[this._v("\n                Live demo\n              ")])])])}],!1,null,null,null);e.default=component.exports},240:function(t,e,n){"use strict";n.r(e);var l={props:["type"],data:function(){return{}},computed:{bgClass:function(){switch(this.type){case"dark":return"bg-gray-900 text-gray-100";case"light":return"bg-gray-100 text-gray-900";case"medium":return"bg-gray-500 text-black";default:return""}}}},r=n(21),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.bgClass},[e("div",{staticClass:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);var l=n(21),component=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-200"},[e("div",{staticClass:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},[e("h2",{staticClass:"text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},[this._v("\n      Ready to dive in?\n      "),e("br"),this._v(" "),e("span",{staticClass:"text-indigo-600"},[this._v("Start your free trial today.")])]),this._v(" "),e("div",{staticClass:"mt-8 flex lg:flex-shrink-0 lg:mt-0"},[e("div",{staticClass:"inline-flex rounded-md shadow"},[e("a",{staticClass:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",attrs:{href:"#"}},[this._v("\n          Get started\n        ")])]),this._v(" "),e("div",{staticClass:"ml-3 inline-flex rounded-md shadow"},[e("a",{staticClass:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",attrs:{href:"#"}},[this._v("\n          Learn more\n        ")])])])])])}],!1,null,null,null);e.default=component.exports},243:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({asyncData:function(){return{pages:[{name:"foo"},{name:"bar"}]}}}),r=(n(223),n(21)),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navigation",{attrs:{logo:"/images/logo-white-solo.svg",title:"Northside Systems"}}),this._v(" "),e("Hero",{attrs:{image:"/images/background.jpg",headingOne:"We can build your next",headingTwo:"Fault-Tolerant System"}},[this._v("\n    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.\n  ")]),this._v(" "),e("GetStarted"),this._v(" "),e("Section",{attrs:{type:"dark"}},[this._v("\n    blah blah blah\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(238).default,Hero:n(239).default,GetStarted:n(241).default,Section:n(240).default})}}]);