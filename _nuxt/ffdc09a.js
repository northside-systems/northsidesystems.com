(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{224:function(t,e,n){var content=n(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("6ec2f454",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("30ddea8e",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n(224)},229:function(t,e,n){(e=n(59)(!1)).push([t.i,".fade-enter-active[data-v-cd598712],.fade-leave-active[data-v-cd598712]{transition:all .3s ease}.fade-enter[data-v-cd598712],.fade-leave-to[data-v-cd598712]{opacity:0;filter:blur(12px);transform:translateX(100vw)}",""]),t.exports=e},230:function(t,e,n){"use strict";n(225)},231:function(t,e,n){(e=n(59)(!1)).push([t.i,".submit-button-enter-active[data-v-0283af39],.submit-button-leave-active[data-v-0283af39]{transition:transform .3s ease}.submit-button-enter[data-v-0283af39],.submit-button-leave-to[data-v-0283af39]{transform:scale(0)}.submit-button-move[data-v-0283af39]{transition:transform .3s ease}.checkmark__circle[data-v-0283af39]{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:6;stroke-miterlimit:10;stroke:#7ac142;fill:none;-webkit-animation:stroke-data-v-0283af39 .6s cubic-bezier(.65,0,.45,1) forwards;animation:stroke-data-v-0283af39 .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark[data-v-0283af39]{border-radius:50%;display:block;stroke-width:4;stroke:#fff;stroke-miterlimit:10;box-shadow:inset 0 0 0 #7ac142;-webkit-animation:fill-data-v-0283af39 .4s ease-in-out .4s forwards,scale-data-v-0283af39 .3s ease-in-out .9s both;animation:fill-data-v-0283af39 .4s ease-in-out .4s forwards,scale-data-v-0283af39 .3s ease-in-out .9s both}.checkmark__check[data-v-0283af39]{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;stroke-width:4;-webkit-animation:stroke-data-v-0283af39 .3s cubic-bezier(.65,0,.45,1) .8s forwards;animation:stroke-data-v-0283af39 .3s cubic-bezier(.65,0,.45,1) .8s forwards}@-webkit-keyframes stroke-data-v-0283af39{to{stroke-dashoffset:0}}@keyframes stroke-data-v-0283af39{to{stroke-dashoffset:0}}@-webkit-keyframes scale-data-v-0283af39{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes scale-data-v-0283af39{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@-webkit-keyframes fill-data-v-0283af39{to{box-shadow:inset 0 0 0 30px #7ac142}}@keyframes fill-data-v-0283af39{to{box-shadow:inset 0 0 0 30px #7ac142}}",""]),t.exports=e},243:function(t,e,n){"use strict";n.r(e);n(84),n(50);var r=n(80),l=n(226),o=n.n(l),c={props:["headingOne","headingTwo","image"],data:function(){return{isOpen:!1,current:0,intervalTime:4e3,interval:null,paused:!1}},mounted:function(){var t=this;this.interval=setInterval((function(){return!t.paused&&t.advance()}),this.intervalTime)},beforeDestroy:function(){clearInterval(this.interval)},computed:{shuffledItems:function(){return"string"==typeof this.headingTwo?[this.headingTwo]:[o.a.head(this.headingTwo)].concat(Object(r.a)(o.a.shuffle(o.a.tail(this.headingTwo))))}},methods:{advance:function(){this.current===this.shuffledItems.length-1?this.current=0:this.current=this.current+1}}},d=(n(228),n(10)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-gray-900 overflow-hidden"},[n("div",{staticClass:"max-w-screen-xl mx-auto"},[n("div",{staticClass:"relative z-10 pb-8 bg-red sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32"},[n("div",{staticClass:"relative pt-12 lg:pt-6"}),t._v(" "),n("main",{staticClass:"mt-20 mb-8 sm:mb-0 mx-auto max-w-screen-xl px-4 sm:mt-20 sm:px-6 md:mt-20 lg:mt-40 lg:mb-16 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[n("h2",{staticClass:"text-2xl tracking-tight leading-none font-extrabold font-headline text-gray-200 sm:text-4xl md:text-5xl"},[t._v("\n            "+t._s(t.headingOne)+"\n\n            "),n("div",{staticClass:"relative text-primary-lighter h-16 sm:h-12 md:h-20 lg:h-12 lg:whitespace-no-wrap",on:{click:function(e){return t.advance()},mouseover:function(e){t.paused=!0},mouseleave:function(e){t.paused=!1}}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("span",{key:t.current},[t._v(t._s(t.shuffledItems[t.current]))])])],1)]),t._v(" "),n("p",{staticClass:"mt-0 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._t("default")],2),t._v(" "),n("GetInTouch")],1)])])]),t._v(" "),n("div",{staticClass:"absolute inset-y-0 right-0 w-full opacity-25"},[n("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.image,alt:""}})])])}),[],!1,null,"cd598712",null);e.default=component.exports;installComponents(component,{GetInTouch:n(246).default})},244:function(t,e,n){"use strict";n.r(e);var r={props:["headingOne","headingTwo","primaryButton","primaryUrl","secondaryButton","secondaryUrl"]},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-200"},[n("div",{staticClass:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 md:flex md:items-center md:justify-between"},[n("h2",{staticClass:"text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},[t._v("\n      "+t._s(t.headingOne)+"\n      "),t.headingTwo?n("br"):t._e(),t._v(" "),n("span",{staticClass:"text-indigo-600"},[t._v(t._s(t.headingTwo))])]),t._v(" "),n("div",{staticClass:"mt-8 flex md:flex-shrink-0 md:mt-0"},[n("div",{staticClass:"inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",attrs:{to:t.primaryUrl}},[t._v("\n          "+t._s(t.primaryButton)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"ml-3 inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",attrs:{to:t.secondaryUrl}},[t._v("\n          "+t._s(t.secondaryButton)+"\n        ")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,n){"use strict";n.r(e);n(11);var r={data:function(){return{privacyShowing:!1,loading:!1,success:!1,email:""}},methods:{showPrivacy:function(){this.privacyShowing=!0},submit:function(){var t=this;this.loading||(this.email?(this.email||(this.focus=!0),this.loading=!0,this.success=!1,fetch("https://script.google.com/macros/s/AKfycbxFrs1uXWU0bKYPxktGqpDe6EUwhT7Q73YaemJ5AGB0D6HJs85j/exec",{method:"POST",mode:"cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({Email:this.email})}).then((function(){t.loading=!1,t.success=!0,t.email=""})).catch((function(e){t.loading=!1,t.success=!1,alert("Something went wrong. Please try again.")}))):this.$refs.email.focus())}}},l=(n(230),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[n("div",{staticClass:"mt-5 sm:mt-8 sm:max-w-xl sm:flex sm:mx-auto lg:mx-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"email",staticClass:"w-full bg-primary-white focus:bg-white px-4 py-2 rounded-sm sm:rounded-r-none sm:rounded-l-md border-transparent focus:outline-none focus:border-primary-dark focus:shadow-outline-indigo disabled:opacity-75",attrs:{disabled:t.loading,type:"email",placeholder:"Email address"},domProps:{value:t.email},on:{focus:function(e){t.showPrivacy(),t.success=!1},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("button",{staticClass:"w-full whitespace-no-wrap sm:w-56 mt-3 sm:mt-0 rounded-md sm:rounded-l-none sm:rounded-r-md shadow flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-white bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline-indigo md:py-3 md:text-lg md:px-3 disabled:opacity-75",attrs:{disabled:t.loading,type:"submit"}},[n("transition-group",{staticClass:"flex items-center",attrs:{name:"submit-button",mode:""}},[n("span",{key:"label"},[t._v("Get in touch")]),t._v(" "),t.loading||t.success?n("span",{key:"icon",staticClass:"ml-2 -mr-3 h-5 w-5"},[t.loading?n("svg",{staticClass:"animate-spin text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._e(),t._v(" "),t.success?n("svg",{staticClass:"checkmark ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[n("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),t._v(" "),n("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})]):t._e()]):t._e()])],1)]),t._v(" "),n("div",{staticClass:"w-full text-sm text-gray-400 mt-1 transition ease-in duration-150",class:t.privacyShowing?"opacity-100":"opacity-0"},[t._v("We will not share your email address"),n("span",{staticClass:"hidden sm:inline"},[t._v(" with anyone")]),t._v(".")])])}),[],!1,null,"0283af39",null);e.default=component.exports},248:function(t,e,n){"use strict";n.r(e);n(27);var r=n(5),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("settings","hero").fetch();case 3:return r=e.sent,l=r.items,e.abrupt("return",{items:l});case 6:case"end":return e.stop()}}),e)})))()}},o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero",{attrs:{image:"/images/background.jpg",headingOne:"We can build your next",headingTwo:t.items}},[t._v("\n    Whatever you are planning, we can help you get there.\n    We have deep experience building software in a variety of\n    business domains and across the full stack.\n  ")]),t._v(" "),n("Section",{attrs:{type:"light"}},[n("div",{staticClass:"prose"},[n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")])]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),t._v(" "),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")]),n("p",[t._v("blah blah blah")])]),t._v(" "),n("CallToAction",{attrs:{headingOne:"Ready to get started?",headingTwo:"Let's get in touch.",primaryButton:"Contact us",primaryUrl:"/contact",secondaryButton:"Learn more",secondaryUrl:"/about"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(243).default,Section:n(169).default,CallToAction:n(244).default})}}]);