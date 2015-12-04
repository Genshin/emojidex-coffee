/*
 * jQuery emojidex - v0.5.1
 * emojidex plugin for jQuery/Zepto and compatible
 * https://github.com/emojidex/emojidex-web
 *
 * Includes:
 *   emojidexReplace, emojidexAutocomplete
 *
 * =LICENSE=
 * Licensed under the emojidex Open License
 * https://www.emojidex.com/emojidex/emojidex_open_license
 *
 * Copyright 2013 Genshin Souzou Kabushiki Kaisha
 *
 *
 * Includes:
 * --------------------------------
 * emojidex client - v0.4.0
 * * Provides search, index caching and combining and asset URI resolution
 * https://github.com/emojidex/emojidex-web-client
 *
 * =LICENSE=
 * Licensed under the emojidex Open License
 * https://www.emojidex.com/emojidex/emojidex_open_license
 *
 * Copyright 2013 Genshin Souzou Kabushiki Kaisha
 *
 *
 * Includes:
 * --------------------------------
 * jQuery Storage API Plugin
 *
 * Copyright (c) 2013 Julien Maurel
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 * https://github.com/julien-maurel/jQuery-Storage-API
 *
 * Version: 1.7.5
 *
 * --------------------------------
 * --------------------------------
!
 * clipboard.js v1.5.5
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 * --------------------------------
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js
  Copyright (c) 2013 chord.luo@gmail.com
  Licensed under the MIT license.
* --------------------------------
! jquery.atwho - v0.5.1 - 2014-09-14
 * Copyright (c) 2014 chord.luo <chord.luo@gmail.com>;
 * homepage: http://ichord.github.com/At.js* Licensed MIT
* --------------------------------
 */
/*! bootstrap-window 0.2.2 2013-11-29 */
var Window=null;!function(a){"use strict";Window=function(b){b=b||{};var c={selectors:{handle:".window-header",title:".window-title",body:".window-body",footer:".window-footer"},elements:{handle:null,title:null,body:null,footer:null},references:{body:a("body"),window:a(window)},parseHandleForTitle:!0,title:"No Title",bodyContent:"",footerContent:""};return this.options=a.extend(!0,{},c,b),this.initialize(this.options),this},Window.prototype.initialize=function(b){var c=this;if(b.fromElement)this.$el=b.fromElement instanceof jQuery?b.fromElement:b.fromElement instanceof Element?a(b.fromElement):a(b.fromElement);else{if(!b.template)throw new Error("No template specified for window.");this.$el=a(b.template)}b.elements.handle=this.$el.find(b.selectors.handle),b.elements.title=this.$el.find(b.selectors.title),b.elements.body=this.$el.find(b.selectors.body),b.elements.footer=this.$el.find(b.selectors.footer),b.elements.title.html(b.title),b.fromElement&&c.$el.find("[data-dismiss=window]").length<=0&&b.elements.title.append('<button class="close" data-dismiss="window">x</button>'),b.elements.body.html(b.bodyContent),b.elements.footer.html(b.footerContent),this.undock(),this.setSticky(b.sticky)},Window.prototype.undock=function(){this.$el.css("visibility","hidden"),this.$el.appendTo("body"),this.centerWindow(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.options.references.window.bind("orientationchange resize",function(){_this.centerWindow()}),this.$el.on("touchmove",function(a){a.stopPropagation()}),this.initHandlers(),this.$el.hide(),this.id=this.options.id?this.options.id:"",this.show()},Window.prototype.show=function(){this.$el.css("visibility","visible"),this.$el.fadeIn()},Window.prototype.centerWindow=function(){var a,b,c,d=parseInt(this.options.references.body.position().top,10)+parseInt(this.options.references.body.css("paddingTop"),10);this.options.sticky?(b=this.options.references.window.width()/2-this.$el.width()/2,a=this.options.references.window.height()/2-this.$el.height()/2):(b=this.options.references.window.width()/2-this.$el.width()/2,a=this.options.references.window.height()/2-this.$el.height()/2),d>a&&(a=d),c=this.options.references.window.height()-d-(parseInt(this.options.elements.handle.css("height"),10)+parseInt(this.options.elements.footer.css("height"),10))-45,this.options.elements.body.css("maxHeight",c),this.$el.css("left",b),this.$el.css("top",a)},Window.prototype.close=function(){var a=this;this.$el.trigger("close"),this.options.parent?(this.options.parent.clearBlocker(),this.options.window_manager&&this.options.window_manager.setFocused(this.options.parent)):this.options.window_manager&&this.options.window_manager.windows.length>0&&this.options.window_manager.setNextFocused(),this.$el.fadeOut(function(){a.$el.remove()}),this.$windowTab&&this.$windowTab.fadeOut(400,function(){a.$windowTab.remove()})},Window.prototype.setActive=function(a){a?(this.$el.addClass("active"),this.$windowTab&&this.$windowTab.addClass("label-primary")):(this.$el.removeClass("active"),this.$windowTab&&(this.$windowTab.removeClass("label-primary"),this.$windowTab.addClass("label-default")))},Window.prototype.setIndex=function(a){this.$el.css("zIndex",a)},Window.prototype.setWindowTab=function(a){this.$windowTab=a},Window.prototype.getWindowTab=function(){return this.$windowTab},Window.prototype.getTitle=function(){return this.options.title},Window.prototype.getElement=function(){return this.$el},Window.prototype.setSticky=function(a){this.options.sticky=a,a===!1?this.$el.css({position:"absolute"}):this.$el.css({position:"fixed"})},Window.prototype.getSticky=function(){return this.options.sticky},Window.prototype.setManager=function(a){this.options.window_manager=a},Window.prototype.initHandlers=function(){var b=this;this.$el.find("[data-dismiss=window]").on("click",function(){b.options.blocker||b.close()}),this.$el.off("mousedown"),this.$el.on("mousedown",function(){return b.options.blocker?(b.options.blocker.getElement().trigger("focused"),b.options.blocker.blink(),void 0):(b.$el.trigger("focused"),(b.$el.hasClass("ns-resize")||b.$el.hasClass("ew-resize"))&&(a("body > *").addClass("disable-select"),b.resizing=!0,b.offset={},b.offset.x=event.pageX,b.offset.y=event.pageY,b.window_info={top:b.$el.position().top,left:b.$el.position().left,width:b.$el.width(),height:b.$el.height()},event.offsetY<5&&b.$el.addClass("north"),event.offsetY>b.$el.height()-5&&b.$el.addClass("south"),event.offsetX<5&&b.$el.addClass("west"),event.offsetX>b.$el.width()-5&&b.$el.addClass("east")),void 0)}),b.options.references.body.on("mouseup",function(){b.resizing=!1,a("body > *").removeClass("disable-select"),b.$el.removeClass("west"),b.$el.removeClass("east"),b.$el.removeClass("north"),b.$el.removeClass("south")}),b.options.elements.handle.off("mousedown"),b.options.elements.handle.on("mousedown",function(c){b.options.blocker||(b.moving=!0,b.offset={},b.offset.x=c.pageX-b.$el.position().left,b.offset.y=c.pageY-b.$el.position().top,a("body > *").addClass("disable-select"))}),b.options.elements.handle.on("mouseup",function(){b.moving=!1,a("body > *").removeClass("disable-select")}),b.options.references.body.on("mousemove",function(a){if(b.moving){{b.options.elements.handle.position().top,b.options.elements.handle.position().left}b.$el.css("top",a.pageY-b.offset.y),b.$el.css("left",a.pageX-b.offset.x)}b.options.resizable&&b.resizing&&(b.$el.hasClass("east")&&b.$el.css("width",a.pageX-b.window_info.left),b.$el.hasClass("west")&&(b.$el.css("left",a.pageX),b.$el.css("width",b.window_info.width+(b.window_info.left-a.pageX))),b.$el.hasClass("south")&&b.$el.css("height",a.pageY-b.window_info.top),b.$el.hasClass("north")&&(b.$el.css("top",a.pageY),b.$el.css("height",b.window_info.height+(b.window_info.top-a.pageY))))}),this.$el.on("mousemove",function(a){b.options.blocker||b.options.resizable&&(a.offsetY>b.$el.height()-5||a.offsetY<5?b.$el.addClass("ns-resize"):b.$el.removeClass("ns-resize"),a.offsetX>b.$el.width()-5||a.offsetX<5?b.$el.addClass("ew-resize"):b.$el.removeClass("ew-resize"))})},Window.prototype.resize=function(a){a=a||{},a.top&&this.$el.css("top",a.top),a.left&&this.$el.css("left",a.left),a.height&&this.$el.css("height",a.height),a.width&&this.$el.css("width",a.width)},Window.prototype.setBlocker=function(a){this.options.blocker=a,this.$el.find(".disable-shade").remove();var b='<div class="disable-shade"></div>';this.options.elements.body.append(b),this.options.elements.body.addClass("disable-scroll"),this.options.elements.footer.append(b),this.$el.find(".disable-shade").fadeIn(),this.options.blocker.getParent()||this.options.blocker.setParent(this)},Window.prototype.getBlocker=function(){return this.options.blocker},Window.prototype.clearBlocker=function(){this.options.elements.body.removeClass("disable-scroll"),this.$el.find(".disable-shade").fadeOut(function(){this.remove()}),delete this.options.blocker},Window.prototype.setParent=function(a){this.options.parent=a,this.options.parent.getBlocker()||this.options.parent.setBlocker(this)},Window.prototype.getParent=function(){return this.options.parent},Window.prototype.blink=function(){{var a=this,b=this.$el.hasClass("active"),c=setInterval(function(){a.$el.toggleClass("active")},250);setTimeout(function(){clearInterval(c),b&&a.$el.addClass("active")},1e3)}},a.fn.window=function(b){b=b||{};var c,d=a.extend({fromElement:this,selectors:{}},b||{});if("object"==typeof b)d.selectors.handle&&this.find(d.selectors.handle).css("cursor","move"),a(this).hasClass("window")||a(this).addClass("window"),c=new Window(a.extend({},d,d)),this.data("window",c);else if("string"==typeof b)switch(b){case"close":this.data("window").close();break;case"show":this.data("window").show()}return this},a("[data-window-target]").off("click"),a("[data-window-target]").on("click",function(){var b=a(this),c={selectors:{}};b.data("windowTitle")&&(c.title=b.data("windowTitle")),b.data("titleHandle")&&(c.selectors.title=b.data("titleHandle")),b.data("windowHandle")&&(c.selectors.handle=b.data("windowHandle")),a(b.data("windowTarget")).window(c)})}(jQuery);var WindowManager=null;!function(a){"use strict";WindowManager=function(a){return this.windows=[],a=a||{},this.initialize(a),this},WindowManager.prototype.findWindowByID=function(b){var c=null;return a.each(this.windows,function(a,d){console.log(arguments),d.id===b&&(c=d)}),c},WindowManager.prototype.destroyWindow=function(b){var c=this;a.each(this.windows,function(a,d){d===b&&(c.windows.splice(a,1),c.resortWindows())})},WindowManager.prototype.resortWindows=function(){var b=900;a.each(this.windows,function(a,c){c.setIndex(b+a)})},WindowManager.prototype.setFocused=function(b){for(var c;b.getBlocker();)b=b.getBlocker();a.each(this.windows,function(a,d){d.setActive(!1),d===b&&(c=a)}),this.windows.push(this.windows.splice(c,1)[0]),b.setActive(!0),this.resortWindows()},WindowManager.prototype.initialize=function(b){this.options=b,this.options.container&&a(this.options.container).addClass("window-pane")},WindowManager.prototype.setNextFocused=function(){this.setFocused(this.windows[this.windows.length-1])},WindowManager.prototype.addWindow=function(b){var c=this;return b.getElement().on("focused",function(){c.setFocused(b)}),b.getElement().on("close",function(){c.destroyWindow(b),b.getWindowTab()&&b.getWindowTab().remove()}),this.options.container&&(b.setWindowTab(a('<span class="label label-default">'+b.getTitle()+'<button class="close">x</button></span>')),b.getWindowTab().find(".close").on("click",function(){b.close()}),b.getWindowTab().on("click",function(){c.setFocused(b),b.getSticky()&&window.scrollTo(0,b.getElement().position().top)}),a(this.options.container).append(b.getWindowTab())),this.windows.push(b),b.setManager(this),this.setFocused(b),b},WindowManager.prototype.createWindow=function(a){var b=Object.create(a);this.options.windowTemplate&&!b.template&&(b.template=this.options.windowTemplate);var c=new Window(b);return this.addWindow(c)}}(jQuery);
/*! jquery.caret 2014-09-14 */
(function(){!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l;return k="caret",b=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.setPos=function(){return this.domInputor},b.prototype.getIEPosition=function(){return this.getPosition()},b.prototype.getPosition=function(){var a,b;return b=this.getOffset(),a=this.$inputor.offset(),b.left-=a.left,b.top-=a.top,b},b.prototype.getOldIEPos=function(){var a,b;return b=h.selection.createRange(),a=h.body.createTextRange(),a.moveToElementText(this.domInputor),a.setEndPoint("EndToEnd",b),a.text.length},b.prototype.getPos=function(){var a,b,c;return(c=this.range())?(a=c.cloneRange(),a.selectNodeContents(this.domInputor),a.setEnd(c.endContainer,c.endOffset),b=a.toString().length,a.detach(),b):h.selection?this.getOldIEPos():void 0},b.prototype.getOldIEOffset=function(){var a,b;return a=h.selection.createRange().duplicate(),a.moveStart("character",-1),b=a.getBoundingClientRect(),{height:b.bottom-b.top,left:b.left,top:b.top}},b.prototype.getOffset=function(){var b,c,d,e;if(j.getSelection&&(d=this.range())){if(d.endOffset-1<0)return null;b=d.cloneRange(),b.setStart(d.endContainer,d.endOffset-1),b.setEnd(d.endContainer,d.endOffset),e=b.getBoundingClientRect(),c={height:e.height,left:e.left+e.width,top:e.top},b.detach()}else h.selection&&(c=this.getOldIEOffset());return c&&(c.top+=a(j).scrollTop(),c.left+=a(j).scrollLeft()),c},b.prototype.range=function(){var a;if(j.getSelection)return a=j.getSelection(),a.rangeCount>0?a.getRangeAt(0):null},b}(),c=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.getIEPos=function(){var a,b,c,d,e,f,g;return b=this.domInputor,f=h.selection.createRange(),e=0,f&&f.parentElement()===b&&(d=b.value.replace(/\r\n/g,"\n"),c=d.length,g=b.createTextRange(),g.moveToBookmark(f.getBookmark()),a=b.createTextRange(),a.collapse(!1),e=g.compareEndPoints("StartToEnd",a)>-1?c:-g.moveStart("character",-c)),e},b.prototype.getPos=function(){return h.selection?this.getIEPos():this.domInputor.selectionStart},b.prototype.setPos=function(a){var b,c;return b=this.domInputor,h.selection?(c=b.createTextRange(),c.move("character",a),c.select()):b.setSelectionRange&&b.setSelectionRange(a,a),b},b.prototype.getIEOffset=function(a){var b,c,d,e;return c=this.domInputor.createTextRange(),a||(a=this.getPos()),c.move("character",a),d=c.boundingLeft,e=c.boundingTop,b=c.boundingHeight,{left:d,top:e,height:b}},b.prototype.getOffset=function(b){var c,d,e;return c=this.$inputor,h.selection?(d=this.getIEOffset(b),d.top+=a(j).scrollTop()+c.scrollTop(),d.left+=a(j).scrollLeft()+c.scrollLeft(),d):(d=c.offset(),e=this.getPosition(b),d={left:d.left+e.left-c.scrollLeft(),top:d.top+e.top-c.scrollTop(),height:e.height})},b.prototype.getPosition=function(b){var c,e,f,g,h,i,j;return c=this.$inputor,g=function(b){return a("<div></div>").text(b).html()},void 0===b&&(b=this.getPos()),j=c.val().slice(0,b),f=c.val().slice(b),h="<span style='position: relative; display: inline;'>"+g(j)+"</span>",h+="<span id='caret' style='position: relative; display: inline;'>|</span>",h+="<span style='position: relative; display: inline;'>"+g(f)+"</span>",i=new d(c),e=i.create(h).rect()},b.prototype.getIEPosition=function(a){var b,c,d,e,f;return d=this.getIEOffset(a),c=this.$inputor.offset(),e=d.left-c.left,f=d.top-c.top,b=d.height,{left:e,top:f,height:b}},b}(),d=function(){function b(a){this.$inputor=a}return b.prototype.css_attr=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopWidth","boxSizing","fontFamily","fontSize","fontWeight","height","letterSpacing","lineHeight","marginBottom","marginLeft","marginRight","marginTop","outlineWidth","overflow","overflowX","overflowY","paddingBottom","paddingLeft","paddingRight","paddingTop","textAlign","textOverflow","textTransform","whiteSpace","wordBreak","wordWrap"],b.prototype.mirrorCss=function(){var b,c=this;return b={position:"absolute",left:-9999,top:0,zIndex:-2e4},"TEXTAREA"===this.$inputor.prop("tagName")&&this.css_attr.push("width"),a.each(this.css_attr,function(a,d){return b[d]=c.$inputor.css(d)}),b},b.prototype.create=function(b){return this.$mirror=a("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(b),this.$inputor.after(this.$mirror),this},b.prototype.rect=function(){var a,b,c;return a=this.$mirror.find("#caret"),b=a.position(),c={left:b.left,top:b.top,height:a.height()},this.$mirror.remove(),c},b}(),e={contentEditable:function(a){return!(!a[0].contentEditable||"true"!==a[0].contentEditable)}},g={pos:function(a){return a||0===a?this.setPos(a):this.getPos()},position:function(a){return h.selection?this.getIEPosition(a):this.getPosition(a)},offset:function(a){var b;return b=this.getOffset(a)}},h=null,j=null,i=null,l=function(a){var b;return(b=null!=a?a.iframe:void 0)?(i=b,j=b.contentWindow,h=b.contentDocument||j.document):(i=void 0,j=window,h=document)},f=function(a){var b;h=a[0].ownerDocument,j=h.defaultView||h.parentWindow;try{return i=j.frameElement}catch(c){b=c}},a.fn.caret=function(d,f,h){var i;return g[d]?(a.isPlainObject(f)?(l(f),f=void 0):l(h),i=e.contentEditable(this)?new b(this):new c(this),g[d].apply(i,[f])):a.error("Method "+d+" does not exist on jQuery.caret")},a.fn.caret.EditableCaret=b,a.fn.caret.InputCaret=c,a.fn.caret.Utils=e,a.fn.caret.apis=g})}).call(this);
(function(){!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){var b,c,d,e,f,g,h,i=[].slice;c=function(){function b(b){this.current_flag=null,this.controllers={},this.alias_maps={},this.$inputor=a(b),this.setIframe(),this.listen()}return b.prototype.createContainer=function(b){return 0===(this.$el=a("#atwho-container",b)).length?a(b.body).append(this.$el=a("<div id='atwho-container'></div>")):void 0},b.prototype.setIframe=function(a,b){var c;return null==b&&(b=!1),a?(this.window=a.contentWindow,this.document=a.contentDocument||this.window.document,this.iframe=a):(this.document=document,this.window=window,this.iframe=null),(this.iframeStandalone=b)?(null!=(c=this.$el)&&c.remove(),this.createContainer(this.document)):this.createContainer(document)},b.prototype.controller=function(a){var b,c,d,e;if(this.alias_maps[a])c=this.controllers[this.alias_maps[a]];else{e=this.controllers;for(d in e)if(b=e[d],d===a){c=b;break}}return c?c:this.controllers[this.current_flag]},b.prototype.set_context_for=function(a){return this.current_flag=a,this},b.prototype.reg=function(a,b){var c,e;return c=(e=this.controllers)[a]||(e[a]=new d(this,a)),b.alias&&(this.alias_maps[b.alias]=a),c.init(b),this},b.prototype.listen=function(){return this.$inputor.on("keyup.atwhoInner",function(a){return function(b){return a.on_keyup(b)}}(this)).on("keydown.atwhoInner",function(a){return function(b){return a.on_keydown(b)}}(this)).on("scroll.atwhoInner",function(a){return function(b){var c;return null!=(c=a.controller())?c.view.hide(b):void 0}}(this)).on("blur.atwhoInner",function(a){return function(b){var c;return(c=a.controller())?c.view.hide(b,c.get_opt("display_timeout")):void 0}}(this)).on("click.atwhoInner",function(a){return function(b){var c;return null!=(c=a.controller())?c.view.hide(b):void 0}}(this))},b.prototype.shutdown=function(){var a,b,c;c=this.controllers;for(b in c)a=c[b],a.destroy(),delete this.controllers[b];return this.$inputor.off(".atwhoInner"),this.$el.remove()},b.prototype.dispatch=function(){return a.map(this.controllers,function(a){return function(b){var c;return(c=b.get_opt("delay"))?(clearTimeout(a.delayedCallback),a.delayedCallback=setTimeout(function(){return b.look_up()?a.set_context_for(b.at):void 0},c)):b.look_up()?a.set_context_for(b.at):void 0}}(this))},b.prototype.on_keyup=function(b){var c;switch(b.keyCode){case f.ESC:b.preventDefault(),null!=(c=this.controller())&&c.view.hide();break;case f.DOWN:case f.UP:case f.CTRL:a.noop();break;case f.P:case f.N:b.ctrlKey||this.dispatch();break;default:this.dispatch()}},b.prototype.on_keydown=function(b){var c,d;if(c=null!=(d=this.controller())?d.view:void 0,c&&c.visible())switch(b.keyCode){case f.ESC:b.preventDefault(),c.hide(b);break;case f.UP:b.preventDefault(),c.prev();break;case f.DOWN:b.preventDefault(),c.next();break;case f.P:if(!b.ctrlKey)return;b.preventDefault(),c.prev();break;case f.N:if(!b.ctrlKey)return;b.preventDefault(),c.next();break;case f.TAB:case f.ENTER:if(!c.visible())return;b.preventDefault(),c.choose(b);break;default:a.noop()}},b}(),d=function(){function b(b,c){this.app=b,this.at=c,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||this.uid(),this.setting=null,this.query=null,this.pos=0,this.cur_rect=null,this.range=null,0===(this.$el=a("#atwho-ground-"+this.id,this.app.$el)).length&&this.app.$el.append(this.$el=a("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new g(this),this.view=new h(this)}return b.prototype.uid=function(){return(Math.random().toString(16)+"000000000").substr(2,8)+(new Date).getTime()},b.prototype.init=function(b){return this.setting=a.extend({},this.setting||a.fn.atwho["default"],b),this.view.init(),this.model.reload(this.setting.data)},b.prototype.destroy=function(){return this.trigger("beforeDestroy"),this.model.destroy(),this.view.destroy(),this.$el.remove()},b.prototype.call_default=function(){var b,c,d;d=arguments[0],b=2<=arguments.length?i.call(arguments,1):[];try{return e[d].apply(this,b)}catch(f){return c=f,a.error(""+c+" Or maybe At.js doesn't have function "+d)}},b.prototype.trigger=function(a,b){var c,d;return null==b&&(b=[]),b.push(this),c=this.get_opt("alias"),d=c?""+a+"-"+c+".atwho":""+a+".atwho",this.$inputor.trigger(d,b)},b.prototype.callbacks=function(a){return this.get_opt("callbacks")[a]||e[a]},b.prototype.get_opt=function(a){var b;try{return this.setting[a]}catch(c){return b=c,null}},b.prototype.content=function(){return this.$inputor.is("textarea, input")?this.$inputor.val():this.$inputor.text()},b.prototype.catch_query=function(){var a,b,c,d,e,f;return b=this.content(),a=this.$inputor.caret("pos",{iframe:this.app.iframe}),f=b.slice(0,a),d=this.callbacks("matcher").call(this,this.at,f,this.get_opt("start_with_space")),"string"==typeof d&&d.length<=this.get_opt("max_len",20)?(e=a-d.length,c=e+d.length,this.pos=e,d={text:d,head_pos:e,end_pos:c},this.trigger("matched",[this.at,d.text])):(d=null,this.view.hide()),this.query=d},b.prototype.rect=function(){var b,c,d;if(b=this.$inputor.caret("offset",this.pos-1,{iframe:this.app.iframe}))return this.app.iframe&&!this.app.iframeStandalone&&(c=a(this.app.iframe).offset(),b.left+=c.left,b.top+=c.top),"true"===this.$inputor.attr("contentEditable")&&(b=this.cur_rect||(this.cur_rect=b)),d=this.app.document.selection?0:2,{left:b.left,top:b.top,bottom:b.top+b.height+d}},b.prototype.reset_rect=function(){return"true"===this.$inputor.attr("contentEditable")?this.cur_rect=null:void 0},b.prototype.mark_range=function(){return"true"===this.$inputor.attr("contentEditable")&&(this.app.window.getSelection&&(this.range=this.app.window.getSelection().getRangeAt(0)),this.app.document.selection)?this.ie8_range=this.app.document.selection.createRange():void 0},b.prototype.insert_content_for=function(b){var c,d,e;return d=b.data("value"),e=this.get_opt("insert_tpl"),this.$inputor.is("textarea, input")||!e?d:(c=a.extend({},b.data("item-data"),{"atwho-data-value":d,"atwho-at":this.at}),this.callbacks("tpl_eval").call(this,e,c))},b.prototype.insert=function(b){var c,d,e,f,g,h,i,j,k;return c=this.$inputor,k=this.callbacks("inserting_wrapper").call(this,c,b,this.get_opt("suffix")),c.is("textarea, input")?(h=c.val(),i=h.slice(0,Math.max(this.query.head_pos-this.at.length,0)),j=""+i+k+h.slice(this.query.end_pos||0),c.val(j),c.caret("pos",i.length+k.length,{iframe:this.app.iframe})):(f=this.range)?(e=f.startOffset-(this.query.end_pos-this.query.head_pos)-this.at.length,f.setStart(f.endContainer,Math.max(e,0)),f.setEnd(f.endContainer,f.endOffset),f.deleteContents(),d=a(k,this.app.document)[0],f.insertNode(d),f.setEndAfter(d),f.collapse(!1),g=this.app.window.getSelection(),g.removeAllRanges(),g.addRange(f)):(f=this.ie8_range)&&(f.moveStart("character",this.query.end_pos-this.query.head_pos-this.at.length),f.pasteHTML(k),f.collapse(!1),f.select()),c.is(":focus")||c.focus(),c.change()},b.prototype.render_view=function(a){var b;return b=this.get_opt("search_key"),a=this.callbacks("sorter").call(this,this.query.text,a.slice(0,1001),b),this.view.render(a.slice(0,this.get_opt("limit")))},b.prototype.look_up=function(){var b,c;if(b=this.catch_query())return c=function(a){return a&&a.length>0?this.render_view(a):this.view.hide()},this.model.query(b.text,a.proxy(c,this)),b},b}(),g=function(){function b(a){this.context=a,this.at=this.context.at,this.storage=this.context.$inputor}return b.prototype.destroy=function(){return this.storage.data(this.at,null)},b.prototype.saved=function(){return this.fetch()>0},b.prototype.query=function(a,b){var c,d,e;return c=this.fetch(),d=this.context.get_opt("search_key"),c=this.context.callbacks("filter").call(this.context,a,c,d)||[],e=this.context.callbacks("remote_filter"),c.length>0||!e&&0===c.length?b(c):e.call(this.context,a,b)},b.prototype.fetch=function(){return this.storage.data(this.at)||[]},b.prototype.save=function(a){return this.storage.data(this.at,this.context.callbacks("before_save").call(this.context,a||[]))},b.prototype.load=function(a){return!this.saved()&&a?this._load(a):void 0},b.prototype.reload=function(a){return this._load(a)},b.prototype._load=function(b){return"string"==typeof b?a.ajax(b,{dataType:"json"}).done(function(a){return function(b){return a.save(b)}}(this)):this.save(b)},b}(),h=function(){function b(b){this.context=b,this.$el=a("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),this.timeout_id=null,this.context.$el.append(this.$el),this.bind_event()}return b.prototype.init=function(){var a;return a=this.context.get_opt("alias")||this.context.at.charCodeAt(0),this.$el.attr({id:"at-view-"+a})},b.prototype.destroy=function(){return this.$el.remove()},b.prototype.bind_event=function(){var b;return b=this.$el.find("ul"),b.on("mouseenter.atwho-view","li",function(c){return b.find(".cur").removeClass("cur"),a(c.currentTarget).addClass("cur")}).on("click",function(a){return function(b){return a.choose(b),b.preventDefault()}}(this))},b.prototype.visible=function(){return this.$el.is(":visible")},b.prototype.choose=function(a){var b,c;return(b=this.$el.find(".cur")).length&&(c=this.context.insert_content_for(b),this.context.insert(this.context.callbacks("before_insert").call(this.context,c,b),b),this.context.trigger("inserted",[b,a]),this.hide(a)),this.context.get_opt("hide_without_suffix")?this.stop_showing=!0:void 0},b.prototype.reposition=function(b){var c,d,e,f;return f=this.context.app.iframeStandalone?this.context.app.window:window,b.bottom+this.$el.height()-a(f).scrollTop()>a(f).height()&&(b.bottom=b.top-this.$el.height()),b.left>(d=a(f).width()-this.$el.width()-5)&&(b.left=d),c={left:b.left,top:b.bottom},null!=(e=this.context.callbacks("before_reposition"))&&e.call(this.context,c),this.$el.offset(c),this.context.trigger("reposition",[c])},b.prototype.next=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.next(),b.length||(b=this.$el.find("li:first")),b.addClass("cur")},b.prototype.prev=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.prev(),b.length||(b=this.$el.find("li:last")),b.addClass("cur")},b.prototype.show=function(){var a;return this.stop_showing?void(this.stop_showing=!1):(this.context.mark_range(),this.visible()||(this.$el.show(),this.context.trigger("shown")),(a=this.context.rect())?this.reposition(a):void 0)},b.prototype.hide=function(a,b){var c;if(this.visible())return isNaN(b)?(this.context.reset_rect(),this.$el.hide(),this.context.trigger("hidden",[a])):(c=function(a){return function(){return a.hide()}}(this),clearTimeout(this.timeout_id),this.timeout_id=setTimeout(c,b))},b.prototype.render=function(b){var c,d,e,f,g,h,i;if(!(a.isArray(b)&&b.length>0))return void this.hide();for(this.$el.find("ul").empty(),d=this.$el.find("ul"),g=this.context.get_opt("tpl"),h=0,i=b.length;i>h;h++)e=b[h],e=a.extend({},e,{"atwho-at":this.context.at}),f=this.context.callbacks("tpl_eval").call(this.context,g,e),c=a(this.context.callbacks("highlighter").call(this.context,f,this.context.query.text)),c.data("item-data",e),d.append(c);return this.show(),this.context.get_opt("highlight_first")?d.find("li:first").addClass("cur"):void 0},b}(),f={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13,CTRL:17,P:80,N:78},e={before_save:function(b){var c,d,e,f;if(!a.isArray(b))return b;for(f=[],d=0,e=b.length;e>d;d++)c=b[d],f.push(a.isPlainObject(c)?c:{name:c});return f},matcher:function(a,b,c){var d,e;return a=a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),c&&(a="(?:^|\\s)"+a),e=new RegExp(a+"([A-Za-z0-9_+-]*)$|"+a+"([^\\x00-\\xff]*)$","gi"),d=e.exec(b),d?d[2]||d[1]:null},filter:function(a,b,c){var d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],~new String(d[c]).toLowerCase().indexOf(a.toLowerCase())&&g.push(d);return g},remote_filter:null,sorter:function(a,b,c){var d,e,f,g;if(!a)return b;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],d.atwho_order=new String(d[c]).toLowerCase().indexOf(a.toLowerCase()),d.atwho_order>-1&&g.push(d);return g.sort(function(a,b){return a.atwho_order-b.atwho_order})},tpl_eval:function(a,b){var c;try{return a.replace(/\$\{([^\}]*)\}/g,function(a,c){return b[c]})}catch(d){return c=d,""}},highlighter:function(a,b){var c;return b?(c=new RegExp(">\\s*(\\w*?)("+b.replace("+","\\+")+")(\\w*)\\s*<","ig"),a.replace(c,function(a,b,c,d){return"> "+b+"<strong>"+c+"</strong>"+d+" <"})):a},before_insert:function(a){return a},inserting_wrapper:function(a,b,c){var d,e;return d=""===c?c:c||" ",a.is("textarea, input")?""+b+d:"true"===a.attr("contentEditable")?(d=""===c?c:c||"&nbsp;",/firefox/i.test(navigator.userAgent)?e="<span>"+b+d+"</span>":(c="<span contenteditable='false'>"+d+"<span>",e="<span contenteditable='false'>"+b+c+"</span>"),this.app.document.selection&&(e="<span contenteditable='true'>"+b+"</span>"),e):void 0}},b={load:function(a,b){var c;return(c=this.controller(a))?c.model.load(b):void 0},setIframe:function(a,b){return this.setIframe(a,b),null},run:function(){return this.dispatch()},destroy:function(){return this.shutdown(),this.$inputor.data("atwho",null)}},a.fn.atwho=function(d){var e,f;return f=arguments,e=null,this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function(){var g,h;return(h=(g=a(this)).data("atwho"))||g.data("atwho",h=new c(this)),"object"!=typeof d&&d?b[d]&&h?e=b[d].apply(h,Array.prototype.slice.call(f,1)):a.error("Method "+d+" does not exist on jQuery.caret"):h.reg(d.at,d)}),e||this},a.fn.atwho["default"]={at:void 0,alias:void 0,data:null,tpl:"<li data-value='${atwho-at}${name}'>${name}</li>",insert_tpl:"<span id='${id}'>${atwho-data-value}</span>",callbacks:e,search_key:"name",suffix:void 0,hide_without_suffix:!1,start_with_space:!0,highlight_first:!0,limit:5,max_len:20,display_timeout:300,delay:null}})}).call(this);
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(b){var c,d,e,f=arguments.length,g=window[b],h=arguments,i=h[1];if(2>f)throw new Error("Minimum 2 arguments must be given");if(a.isArray(i)){d={};for(var j in i){c=i[j];try{d[c]=JSON.parse(g.getItem(c))}catch(k){d[c]=g.getItem(c)}}return d}if(2!=f){try{d=JSON.parse(g.getItem(i))}catch(k){throw new ReferenceError(i+" is not defined in this storage")}for(var j=2;f-1>j;j++)if(d=d[h[j]],void 0===d)throw new ReferenceError([].slice.call(h,1,j+1).join(".")+" is not defined in this storage");if(a.isArray(h[j])){e=d,d={};for(var l in h[j])d[h[j][l]]=e[h[j][l]];return d}return d[h[j]]}try{return JSON.parse(g.getItem(i))}catch(k){return g.getItem(i)}}function c(b){var c,d,e=arguments.length,f=window[b],g=arguments,h=g[1],i=g[2],j={};if(2>e||!a.isPlainObject(h)&&3>e)throw new Error("Minimum 3 arguments must be given or second parameter must be an object");if(a.isPlainObject(h)){for(var k in h)c=h[k],a.isPlainObject(c)?f.setItem(k,JSON.stringify(c)):f.setItem(k,c);return h}if(3==e)return"object"==typeof i?f.setItem(h,JSON.stringify(i)):f.setItem(h,i),i;try{d=f.getItem(h),null!=d&&(j=JSON.parse(d))}catch(l){}d=j;for(var k=2;e-2>k;k++)c=g[k],d[c]&&a.isPlainObject(d[c])||(d[c]={}),d=d[c];return d[g[k]]=g[k+1],f.setItem(h,JSON.stringify(j)),j}function d(b){var c,d,e=arguments.length,f=window[b],g=arguments,h=g[1];if(2>e)throw new Error("Minimum 2 arguments must be given");if(a.isArray(h)){for(var i in h)f.removeItem(h[i]);return!0}if(2==e)return f.removeItem(h),!0;try{c=d=JSON.parse(f.getItem(h))}catch(j){throw new ReferenceError(h+" is not defined in this storage")}for(var i=2;e-1>i;i++)if(d=d[g[i]],void 0===d)throw new ReferenceError([].slice.call(g,1,i).join(".")+" is not defined in this storage");if(a.isArray(g[i]))for(var k in g[i])delete d[g[i][k]];else delete d[g[i]];return f.setItem(h,JSON.stringify(c)),!0}function e(b,c){var e=h(b);for(var f in e)d(b,e[f]);if(c)for(var f in a.namespaceStorages)i(f)}function f(c){var d=arguments.length,e=arguments,g=(window[c],e[1]);if(1==d)return 0==h(c).length;if(a.isArray(g)){for(var i=0;i<g.length;i++)if(!f(c,g[i]))return!1;return!0}try{var j=b.apply(this,arguments);a.isArray(e[d-1])||(j={totest:j});for(var i in j)if(!(a.isPlainObject(j[i])&&a.isEmptyObject(j[i])||a.isArray(j[i])&&!j[i].length)&&j[i])return!1;return!0}catch(k){return!0}}function g(c){var d=arguments.length,e=arguments,f=(window[c],e[1]);if(2>d)throw new Error("Minimum 2 arguments must be given");if(a.isArray(f)){for(var h=0;h<f.length;h++)if(!g(c,f[h]))return!1;return!0}try{var i=b.apply(this,arguments);a.isArray(e[d-1])||(i={totest:i});for(var h in i)if(void 0===i[h]||null===i[h])return!1;return!0}catch(j){return!1}}function h(c){var d=arguments.length,e=window[c],f=arguments,g=(f[1],[]),h={};if(h=d>1?b.apply(this,f):e,h&&h._cookie)for(var i in a.cookie())""!=i&&g.push(i.replace(h._prefix,""));else for(var j in h)g.push(j);return g}function i(b){if(!b||"string"!=typeof b)throw new Error("First parameter must be a string");m?(window.localStorage.getItem(b)||window.localStorage.setItem(b,"{}"),window.sessionStorage.getItem(b)||window.sessionStorage.setItem(b,"{}")):(window.localCookieStorage.getItem(b)||window.localCookieStorage.setItem(b,"{}"),window.sessionCookieStorage.getItem(b)||window.sessionCookieStorage.setItem(b,"{}"));var c={localStorage:a.extend({},a.localStorage,{_ns:b}),sessionStorage:a.extend({},a.sessionStorage,{_ns:b})};return a.cookie&&(window.cookieStorage.getItem(b)||window.cookieStorage.setItem(b,"{}"),c.cookieStorage=a.extend({},a.cookieStorage,{_ns:b})),a.namespaceStorages[b]=c,c}function j(a){var b="jsapi";try{return window[a]?(window[a].setItem(b,b),window[a].removeItem(b),!0):!1}catch(c){return!1}}var k="ls_",l="ss_",m=j("localStorage"),n={_type:"",_ns:"",_callMethod:function(a,b){var c=[this._type],b=Array.prototype.slice.call(b),d=b[0];return this._ns&&c.push(this._ns),"string"==typeof d&&-1!==d.indexOf(".")&&(b.shift(),[].unshift.apply(b,d.split("."))),[].push.apply(c,b),a.apply(this,c)},get:function(){return this._callMethod(b,arguments)},set:function(){var b=arguments.length,d=arguments,e=d[0];if(1>b||!a.isPlainObject(e)&&2>b)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(a.isPlainObject(e)&&this._ns){for(var f in e)c(this._type,this._ns,f,e[f]);return e}var g=this._callMethod(c,d);return this._ns?g[e.split(".")[0]]:g},remove:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return this._callMethod(d,arguments)},removeAll:function(a){return this._ns?(c(this._type,this._ns,{}),!0):e(this._type,a)},isEmpty:function(){return this._callMethod(f,arguments)},isSet:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return this._callMethod(g,arguments)},keys:function(){return this._callMethod(h,arguments)}};if(a.cookie){window.name||(window.name=Math.floor(1e8*Math.random()));var o={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(b,c){a.cookie(this._prefix+b,c,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(b){return a.cookie(this._prefix+b)},removeItem:function(b){return a.removeCookie(this._prefix+b)},clear:function(){for(var b in a.cookie())""!=b&&(!this._prefix&&-1===b.indexOf(k)&&-1===b.indexOf(l)||this._prefix&&0===b.indexOf(this._prefix))&&a.removeCookie(b)},setExpires:function(a){return this._expires=a,this},setPath:function(a){return this._path=a,this},setDomain:function(a){return this._domain=a,this},setConf:function(a){return a.path&&(this._path=a.path),a.domain&&(this._domain=a.domain),a.expires&&(this._expires=a.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};m||(window.localCookieStorage=a.extend({},o,{_prefix:k,_expires:3650}),window.sessionCookieStorage=a.extend({},o,{_prefix:l+window.name+"_"})),window.cookieStorage=a.extend({},o),a.cookieStorage=a.extend({},n,{_type:"cookieStorage",setExpires:function(a){return window.cookieStorage.setExpires(a),this},setPath:function(a){return window.cookieStorage.setPath(a),this},setDomain:function(a){return window.cookieStorage.setDomain(a),this},setConf:function(a){return window.cookieStorage.setConf(a),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}a.initNamespaceStorage=function(a){return i(a)},m?(a.localStorage=a.extend({},n,{_type:"localStorage"}),a.sessionStorage=a.extend({},n,{_type:"sessionStorage"})):(a.localStorage=a.extend({},n,{_type:"localCookieStorage"}),a.sessionStorage=a.extend({},n,{_type:"sessionCookieStorage"})),a.namespaceStorages={},a.removeAllStorages=function(b){a.localStorage.removeAll(b),a.sessionStorage.removeAll(b),a.cookieStorage&&a.cookieStorage.removeAll(b),b||(a.namespaceStorages={})}}),function(){var a,b,c,d,e,f,g,h,i,j=function(a,b){return function(){return a.apply(b,arguments)}};this.EmojidexClient=function(){function g(g){this.options=g,this.env={api_ver:1,cdn_addr:"cdn.emojidex.com",s_cdn_addr:"",asset_addr:"assets.emojidex.com",s_asset_addr:""},this.defaults={locale:"en",api_url:"https://www.emojidex.com/api/v1/",cdn_url:"http://"+this.env.cdn_addr+"/emoji/",closed_net:!1,min_query_len:4,size_code:"px32",detailed:!1,limit:32},this.options=$.extend({},this.defaults,this.options),this.closed_net=this.options.closed_net,this.api_url=this.options.api_url,this.cdn_url=this.options.cdn_url,this.size_code=this.options.size_code,this.detailed=this.options.detailed,this.limit=this.options.limit,this.locale=this.options.locale,this.Data=new b(this),this.Categories=new a(this),this.User=new f(this),this.Indexes=new d(this),this.Util=new i(this),this.Search=new e(this),this.Emoji=new c(this)}return g}(),a=function(){function a(a){var b;this.EC=a,this._categories=this.EC.Data.categories(),b=this.EC.Data.categories(),0===b&&this.sync()}return a.prototype._categoriesAPI=function(a,b,c,d){var e,f=this;return e={page:1,limit:this.EC.limit,detailed:this.EC.detailed},$.extend(e,c),this.called_func=d,this.called_data={category_name:a,callback:b,param:e},$.ajax({url:""+this.EC.api_url+"categories/"+a+"/"+e.type,dataType:"json",data:e,success:function(a){return f.meta=a.meta,f.results=a.emoji,f.cur_page=a.meta.page,f.count=a.meta.count,f.EC.Emoji.combine(a.emoji),"function"==typeof b?b(a.emoji):void 0}})},a.prototype.getEmoji=function(a,b,c){var d;return d={type:"emoji"},$.extend(d,c),this._categoriesAPI(a,b,d,this.getEmoji)},a.prototype.getNewest=function(a,b,c){var d;return d={type:"newest"},$.extend(d,c),this._categoriesAPI(a,b,d,this.getNewest)},a.prototype.next=function(){return this.count===this.called_data.param.limit&&this.called_data.param.page++,this.called_func(this.called_data.category_name,this.called_data.callback,this.called_data.param,{ajax:this.called_func})},a.prototype.prev=function(){return this.called_data.param.page>1&&this.called_data.param.page--,this.called_func(this.called_data.category_name,this.called_data.callback,this.called_data.param,{ajax:this.called_func})},a.prototype.sync=function(a,b){var c=this;return null==b&&(b=this.EC.locale),$.ajax({url:this.EC.api_url+"categories",dataType:"json",data:{locale:b},success:function(b){return c._categories,"function"==typeof a?a(b.categories):void 0}})},a.prototype.all=function(){return this._categories},a}(),b=function(){function a(a){var b=this;this.EC=a,this._def_auth_info={status:"none",user:"",token:null},this.storage=$.localStorage,this.storage.isSet("emojidex")||this.storage.set("emojidex",{}),this.storage.isSet("emojidex.emoji")||this.storage.set("emojidex.emoji",this.EC.options.emoji||[]),this.storage.isSet("emojidex.history")||this.storage.set("emojidex.history",this.EC.options.history||[]),this.storage.isSet("emojidex.favorites")||this.storage.set("emojidex.favorites",this.EC.options.favorites||[]),this.storage.isSet("emojidex.auth_info")||this.storage.set("emojidex.categories",this.EC.options.categories||[]),this.storage.isSet("emojidex.auth_info")||this.storage.set("emojidex.auth_info",this.EC.options.auth_info||this._def_auth_info),this.storage.get("emojidex.cdn_url")?this.EC.cdn_url=this.storage.get("emojidex.cdn_url"):this.EC.cdn_url===this.EC.defaults.cdn_url&&this.EC.closed_net===!1&&$.ajax({url:this.EC.api_url+"/env",dataType:"json",success:function(a){return b.EC.env=a,b.EC.cdn_url="https://"+b.EC.env.s_cdn_addr+"/emoji/",b.EC.Data.storage.set("emojidex.cdn_url",b.EC.cdn_url)}})}return a.prototype.emoji=function(a){var b,c,d,e,f,g,h;if(null!=a)if(this.storage.isEmpty("emojidex.emoji"))this.storage.set("emojidex.emoji",a);else{for(c=this.storage.get("emojidex.emoji"),e=0,g=a.length;g>e;e++)for(d=a[e],f=0,h=c.length;h>f;f++){if(b=c[f],d.code===b.code){c.splice(c.indexOf(b),1,d);break}b===c[c.length-1]&&c.push(d)}this.storage.set("emojidex.emoji",c)}return this.storage.get("emojidex.emoji")},a.prototype.favorites=function(a){return null!=a&&this.storage.set("emojidex.favorites",a),this.storage.get("emojidex.favorites")},a.prototype.history=function(a){return null!=a&&this.storage.set("emojidex.history",a),this.storage.get("emojidex.history")},a.prototype.categories=function(a){return null!=a&&this.storage.set("emojidex.categories",a),this.storage.get("emojidex.categories")},a.prototype.auth_info=function(a){return null!=a&&this.storage.set("emojidex.auth_info",a),this.storage.get("emojidex.auth_info")},a}(),c=function(){function a(a){this.EC=a,this.combine=j(this.combine,this),this._emoji_instance=null}return a.prototype._emoji=function(){return null!=this._emoji_instanc?this._emoji_instance:this.checkUpdate()?this._emoji_instance=this.EC.Data.storage.get("emojidex.emoji"):(this.EC.Data.storage.set("emojidex.seedUpdated",(new Date).toString()),this.seed())},a.prototype.checkUpdate=function(){var a,b;return this.EC.Data.storage.isSet("emojidex.seedUpdated")?(a=new Date,b=new Date(this.EC.Data.storage.get("emojidex.seedUpdated")),1728e5>=a-b?!0:!1):!1},a.prototype.seed=function(a){var b;return b=navigator.language||navigator.userLanguage,this.EC.Indexes["static"](["utf_emoji","extended_emoji"],b,a)},a.prototype.all=function(){return this._emoji()},a.prototype.search=function(a,b){var c,d;return d=function(){var b,d,e,f;for(e=this._emoji(),f=[],b=0,d=e.length;d>b;b++)c=e[b],c.code.match(a)&&f.push(c);return f}.call(this),"function"==typeof b&&b(d),d},a.prototype.starting=function(a,b){var c,d;return d=function(){var b,d,e,f;for(e=this._emoji(),f=[],b=0,d=e.length;d>b;b++)c=e[b],c.code.match("^"+a)&&f.push(c);return f}.call(this),"function"==typeof b&&b(d),d},a.prototype.ending=function(a,b){var c,d;return d=function(){var b,d,e,f;for(e=this._emoji(),f=[],b=0,d=e.length;d>b;b++)c=e[b],c.code.match(a+"$")&&f.push(c);return f}.call(this),"function"==typeof b&&b(d),d},a.prototype.tags=function(a,b){var c,d,e,f,g,h;for(a=this.EC.Util.breakout(a),e=b.selection||this._emoji(),c=[],g=0,h=a.length;h>g;g++)f=a[g],c.concat(function(){var a,b,c;for(c=[],a=0,b=e.length;b>a;a++)d=e[a],$.inArray(f,d.tags)>=0&&c.push(d);return c}());return c},a.prototype.categories=function(a,b){var c,d,e,f,g,h;for(a=this.EC.Util.breakout(a),f=b.selection||this._emoji(),d=[],g=0,h=a.length;h>g;g++)c=a[g],d.concat(function(){var a,b,d;for(d=[],a=0,b=f.length;b>a;a++)e=f[a],e.category===c&&d.push(e);return d}());return d},a.prototype.advanced=function(a){return this.categories(a.categories,{selection:this.tags(a.tags,{selection:this.search(a.term)})})},a.prototype.combine=function(a){return this._emoji_instance=this.EC.Data.emoji(a)},a.prototype.flush=function(){return this._emoji_instance=this.EC.Data.emoji([])},a}(),d=function(){function a(a){this.EC=a,this.results=[],this.cur_page=1,this.count=0}return a.prototype._indexesAPI=function(a,b,c,d){var e,f=this;return e={page:1,limit:this.EC.limit,detailed:this.EC.detailed},$.extend(e,c),null!=d&&(this.indexed_func=d,this.indexed={query:a,callback:b,param:e}),$.ajax({url:this.EC.api_url+a,dataType:"json",data:e,success:function(a){return f.results=a.emoji,f.cur_page=a.meta.page,f.count=a.meta.count,f.EC.Emoji.combine(a.emoji),"function"==typeof b?b(a.emoji):void 0},error:function(a){return f.results=[]}})},a.prototype.index=function(a,b){return this._indexesAPI("emoji",a,b,this.index)},a.prototype.newest=function(a,b){return this._indexesAPI("newest",a,b,this.newest)},a.prototype.popular=function(a,b){return this._indexesAPI("popular",a,b,this.popular)},a.prototype.user=function(a,b,c){return this._indexesAPI("users/"+a+"/emoji",b,c)},a.prototype["static"]=function(a,b,c){var d,e,f,g,h,i,j,k=this;for(f=function(){return++e===a.length?c():void 0},d=function(a){return $.ajax({url:a,dataType:"json",success:function(a){return console.count(),k.EC.Emoji.combine(a),f()}})},e=0,j=[],h=0,i=a.length;i>h;h++)g=a[h],b?j.push(d(""+(this.EC.api_url+g)+"?locale="+b)):j.push(d(""+(this.EC.api_url+g)));return j},a.prototype.select=function(a,b,c){return this.EC.Search.find(a,b,c)},a.prototype.next=function(){return this.count===this.indexed.param.limit&&this.indexed.param.page++,this.indexed_func(this.indexed.data,this.indexed.callback,this.indexed.param,this.indexed_func)},a.prototype.prev=function(){return this.indexed.param.page>1&&this.indexed.param.page--,this.indexed_func(this.indexed.data,this.indexed.callback,this.indexed.param,this.indexed_func)},a}(),e=function(){function a(a){this.EC=a,this.Util=new i,this.results=[],this.cur_page=1,this.count=0}return a.prototype._searchAPI=function(a,b,c,d){var e,f=this;return e={page:1,limit:this.EC.limit,detailed:this.EC.detailed},$.extend(e,c),this.searched_func=d.ajax,this.searched={data:a,callback:b,param:e},this.EC.closed_net?"function"==typeof d.storage?d.storage(a,b):void 0:$.ajax({url:this.EC.api_url+"search/emoji",dataType:"json",data:e,success:function(a){return f.meta=a.meta,f.results=a.emoji,f.cur_page=a.meta.page,f.count=a.meta.count,f.EC.Emoji.combine(a.emoji),"function"==typeof b?b(a.emoji):void 0},error:function(a){return f.results=[]}})},a.prototype.search=function(a,b,c){return c=$.extend({code_cont:this.EC.Util.escape_term(a)},c),this._searchAPI(a,b,c,{ajax:this.search,storage:this.EC.Emoji.search})},a.prototype.starting=function(a,b,c){return c=$.extend({code_sw:this.Util.escape_term(a)},c),this._searchAPI(a,b,c,{ajax:this.starting,storage:this.EC.Emoji.starting})},a.prototype.ending=function(a,b,c){return c=$.extend({code_ew:this.Util.escape_term(a)},c),this._searchAPI(a,b,c,{ajax:this.ending,storage:this.EC.Emoji.ending})},a.prototype.tags=function(a,b,c){return c=$.extend({"tags[]":this.Util.breakout(a)},c),this._searchAPI(a,b,c,{ajax:this.tags,storage:this.EC.Emoji.tags})},a.prototype.advanced=function(a,b,c){var d;return d={code_cont:this.Util.escape_term(a.term),"tags[]":this.Util.breakout(a.tags),"categories[]":this.Util.breakout(a.categories)},$.extend(d,c),this._searchAPI(a,b,d,{ajax:this.advanced,storage:this.EC.Emoji.advanced})},a.prototype.find=function(a,b,c){var d,e=this;return d={detailed:this.EC.detailed},$.extend(d,c),this.EC.closed_net?void 0:$.ajax({url:this.EC.api_url+("/emoji/"+a),dataType:"json",data:d,success:function(a){return e.EC.Emoji.combine([a]),"function"==typeof b?b(a):void 0}})},a.prototype.next=function(){return this.count===this.searched.param.limit&&this.searched.param.page++,this.searched_func(this.searched.data,this.searched.callback,this.searched.param,{ajax:this.searched_func})},a.prototype.prev=function(){return this.searched.param.page>1&&this.searched.param.page--,this.searched_func(this.searched.data,this.searched.callback,this.searched.param,{ajax:this.searched_func})},a}(),f=function(){function a(a){this.EC=a,this.auth_info=this.EC.Data._def_auth_info,this.History=new h(this.EC),this.Favorites=new g(this.EC),this._auto_login()}return a.prototype._auto_login=function(){return this.closed_net?void 0:(this.auth_info=this.EC.Data.auth_info(),null!=this.auth_info.token?this.sync_user_data():this.logout())},a.prototype.login=function(a){switch(a.authtype){case"plain":return this.plain_auth(a.username,a.password,a.callback);case"basic":return this.basic_auth(a.user,a.pass,a.callback);case"google":return this.google_auth(a.callback);default:return this._auto_login()}},a.prototype.logout=function(){return this.EC.Data.auth_info(this.EC.Data._def_auth_info)},a.prototype.plain_auth=function(a,b,c){var d=this;return null==c&&(c=null),$.ajax({url:this.EC.api_url+"users/authenticate",dataType:"json",data:{username:a,password:b},success:function(a){return d._set_auth_from_response(a),"function"==typeof c?c(d.auth_info):void 0},error:function(a){return d.auth_info=d.EC.Data.auth_info({status:a.auth_status,token:null,user:""})}})},a.prototype.basic_auth=function(a,b,c){return null==c&&(c=null),!1},a.prototype.google_auth=function(a){return null==a&&(a=null),!1},a.prototype.set_auth=function(a,b){return this.auth_info=this.EC.Data.auth_info({status:"verified",token:b,user:a}),this.sync_user_data()},a.prototype._set_auth_from_response=function(a){return this.auth_info=this.EC.Data.auth_info({status:a.auth_status,token:a.auth_token,user:a.auth_user}),this.sync_user_data()},a.prototype.sync_user_data=function(){return this.History.token=this.Favorites.token=this.auth_info.token,this.Favorites.sync(),this.History.sync()},a}(),g=function(){function a(a,b){this.EC=a,null==b&&(b=null),this.token=b,this._favorites=this.EC.Data.favorites()}return a.prototype._favoritesAPI=function(a){var b;return null!=this.token?(b={url:this.EC.api_url+"users/favorites",dataType:"json"},$.ajax($.extend(b,a))):void 0},a.prototype.get=function(a){var b,c=this;return b={data:{auth_token:this.token},success:function(b){return c._favorites=c.EC.Data.favorites(b),"function"==typeof a?a(c._favorites):void 0}},this._favoritesAPI(b)},a.prototype.set=function(a){var b,c=this;return b={type:"POST",data:{auth_token:this.token,emoji_code:a},success:function(a){return c._favorites.push(a),c.EC.Data.favorites(c._favorites)}},this._favoritesAPI(b)},a.prototype.unset=function(a){var b,c=this;return b={type:"DELETE",data:{auth_token:this.token,emoji_code:a},success:function(a){return c.sync()}},this._favoritesAPI(b)},a.prototype.sync=function(){return this.get()},a.prototype.all=function(){return this._favorites},a}(),h=function(){function a(a,b){this.EC=a,null==b&&(b=null),this.token=b,this._history=this.EC.Data.history()}return a.prototype._historyAPI=function(a){var b;return null!=this.token?(b={url:this.EC.api_url+"users/history",dataType:"json"},$.ajax($.extend(b,a))):void 0},a.prototype.get=function(){var a,b=this;return a={data:{auth_token:this.token},success:function(a){return b._history=b.EC.Data.history(a)}},this._historyAPI(a)},a.prototype.set=function(a){var b,c=this;return b={type:"POST",data:{auth_token:this.token,emoji_code:a},success:function(a){var b,d,e,f,g;for(g=c._history,d=e=0,f=g.length;f>e;d=++e)if(b=g[d],b.emoji_code===a.emoji_code)return c._history[d]=a,c.EC.Data.history(c._history),a}},this._historyAPI(b)},a.prototype.sync=function(){return this.get()},a.prototype.all=function(){return this._history},a}(),i=function(){function a(a){this.EC=a}return a.prototype.escape_term=function(a){return a.replace(/\s/g,"_").replace(/(\(|\))/g,"\\$1")},a.prototype.de_escape_term=function(a){return a.replace(/_/g," ")},a.prototype.breakout=function(a){return null!=a?a instanceof Array?a:[a]:[]},a.prototype.simplify=function(a,b){var c,d,e,f;for(null==a&&(a=this.results),null==b&&(b=this.EC.size_code),f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push({code:this.escape_term(c.code),img_url:""+this.EC.cdn_url+"/"+b+"/"+this.escape_term(c.code)+".png"});return f},a}()}.call(this);
/*!
 * clipboard.js v1.5.5
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){var r=t("matches-selector");e.exports=function(t,e,n){for(var o=n?t:t.parentNode;o&&o!==document;){if(r(o,e))return o;o=o.parentNode}}},{"matches-selector":2}],2:[function(t,e,n){function r(t,e){if(i)return i.call(t,e);for(var n=t.parentNode.querySelectorAll(e),r=0;r<n.length;++r)if(n[r]==t)return!0;return!1}var o=Element.prototype,i=o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;e.exports=r},{}],3:[function(t,e,n){function r(t,e,n,r){var i=o.apply(this,arguments);return t.addEventListener(n,i),{destroy:function(){t.removeEventListener(n,i)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e,!0),n.delegateTarget&&r.call(t,n)}}var i=t("closest");e.exports=r},{closest:1}],4:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.function=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],5:[function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.function(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return o(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=t("./is"),s=t("delegate");e.exports=r},{"./is":4,delegate:3}],6:[function(t,e,n){function r(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),e=n.toString()}return e}e.exports=r},{}],7:[function(t,e,n){function r(){}r.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;o>r;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;a>i;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},e.exports=r},{}],8:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.__esModule=!0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=t("select"),c=r(a),s=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');if(this.text)this.selectFake();else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"');this.selectTarget()}},t.prototype.selectFake=function t(){var e=this;this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=c.default(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=c.default(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},i(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!=typeof e||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');this._target=e}},get:function t(){return this._target}}]),t}();n.default=s,e.exports=n.default},{select:6}],9:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}n.__esModule=!0;var c=t("./clipboard-action"),s=r(c),u=t("tiny-emitter"),l=r(u),f=t("good-listener"),d=r(f),h=function(t){function e(n,r){o(this,e),t.call(this),this.resolveOptions(r),this.listenClick(n)}return i(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=d.default(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return a("action",e)},e.prototype.defaultTarget=function t(e){var n=a("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return a("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(l.default);n.default=h,e.exports=n.default},{"./clipboard-action":8,"good-listener":5,"tiny-emitter":7}]},{},[9])(9)});
(function() {
  var AutoComplete;

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "emojidexAutocomplete";
    defaults = {
      listLimit: 10,
      insertImg: true
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.autocomplete = new AutoComplete(this);
        this.autocomplete.setAutoComplete();
      }

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

  AutoComplete = (function() {
    function AutoComplete(plugin) {
      this.plugin = plugin;
      this.searching_num = 0;
    }

    AutoComplete.prototype.setAutoComplete = function() {
      var at_init, ec, getMatchString, getRegexp, onHighlighter, setAtwho, setSearchedEmojiData,
        _this = this;
      setAtwho = function(at_options) {
        return $(_this.plugin.element).atwho(at_options).on('reposition.atwho', function(e) {
          return $(e.currentTarget).atwho(at_options);
        }).on('hidden.atwho', function(e) {
          return $(e.currentTarget).atwho(at_options);
        });
      };
      setSearchedEmojiData = function(at_obj, match_string) {
        var num, updateAtwho;
        updateAtwho = function(searched_data, at_bak) {
          var at_options;
          at_options = {
            data: searched_data,
            callbacks: {
              highlighter: onHighlighter,
              matcher: function(flag, subtext, should_startWithSpace) {
                var match;
                return match = getMatchString(subtext, getRegexp(flag, should_startWithSpace));
              }
            }
          };
          return at_bak.$inputor.atwho('destroy').atwho($.extend({}, at_bak.setting, at_options)).atwho('run');
        };
        num = ++_this.searching_num;
        ec.Search.search(match_string, function(response) {
          var emoji, searched_data;
          searched_data = (function() {
            var _i, _len, _ref, _results;
            _ref = ec.Search.results;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              emoji = _ref[_i];
              _results.push({
                code: emoji.code.replace(/\s/g, '_'),
                img_url: "" + ec.cdn_url + ec.size_code + "/" + (emoji.code.replace(/\s/g, '_')) + ".png"
              });
            }
            return _results;
          })();
          if (_this.searching_num === num) {
            if (searched_data.length) {
              updateAtwho(searched_data, at_obj);
            }
            return _this.searching_num = 0;
          }
        });
        return match_string;
      };
      getRegexp = function(flag, should_startWithSpace) {
        var regexp, _a, _y;
        _a = decodeURI("%C3%80");
        _y = decodeURI("%C3%BF");
        return regexp = new RegExp("[：" + flag + "]([^：:;@&#~\!\$\+\?\%\*\f\n\r\\\/]+)$", 'gi');
      };
      getMatchString = function(subtext, regexp) {
        var match;
        match = regexp.exec(subtext);
        match = match ? match[2] || match[1] : null;
        return match;
      };
      onHighlighter = function(li, query) {
        var regexp;
        if (!query) {
          return li;
        }
        regexp = new RegExp(">\\s*([^:;@&#~\!\$\+\?\%\*\f\n\r\\\/]*?)(" + (query.replace(/(\(|\))/g, '\\$1')) + ")([^:;@&#~\!\$\+\?\%\*\f\n\r\\\/]*)\\s*<", 'ig');
        return li.replace(regexp, function(str, $1, $2, $3) {
          return "> " + $1 + "<strong>" + $2 + "</strong>" + $3 + " <";
        });
      };
      ec = new EmojidexClient;
      at_init = {
        at: ':',
        suffix: '',
        limit: this.plugin.options.listLimit,
        search_key: "code",
        tpl: "<li data-value=':${code}:'><img src='${img_url}' height='20' width='20'></img>${code}</li>",
        insert_tpl: this.plugin.options.insertImg ? "<img src='${img_url}' height='20' width='20' />" : ":${code}:",
        callbacks: {
          highlighter: onHighlighter,
          matcher: function(flag, subtext, should_startWithSpace) {
            var match;
            match = getMatchString(subtext, getRegexp(flag, should_startWithSpace));
            if (match) {
              return setSearchedEmojiData(this, match);
            }
          }
        }
      };
      return setAtwho(at_init);
    };

    return AutoComplete;

  })();

}).call(this);

(function() {
  var Pallet;

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "emojidexPallet";
    defaults = {
      switch_element: $("#pallet-btn")
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.pallet = new Pallet(this);
      }

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

  Pallet = (function() {
    function Pallet(plugin) {
      this.plugin = plugin;
      this.ec = new EmojidexClient;
      this.clipboard = new Clipboard('.emoji-btn');
      this.can_create_window = true;
      this.setPallet(this.plugin.element);
    }

    Pallet.prototype.setPallet = function(element) {
      var search_emoji_input,
        _this = this;
      search_emoji_input = function() {
        var search_word;
        search_word = $('#pallet-emoji-search-input').val();
        if (search_word.length > 0) {
          return _this.search(search_word);
        }
      };
      return $(element).click(function(e) {
        var search_btn, tab_content, tab_list;
        if (_this.can_create_window) {
          _this.can_create_window = false;
          _this.search_tab_content = $('<div class="tab-pane" id="search_tab"><div class="input-group"><input type="text" name="search" id="pallet-emoji-search-input" class="form-control" placeholder="検索"><span class="input-group-btn"></span></div></div>');
          _this.search_tab_content.find('#pallet-emoji-search-input').keypress(function(e) {
            if (e.keyCode === 13) {
              return search_emoji_input();
            }
          });
          search_btn = $('<button type="submit" class="btn btn-primary" id="pallet-emoji-search-submit"><span class="glyphicon glyphicon-search"></span></button>');
          search_btn.click(function() {
            return search_emoji_input();
          });
          _this.search_tab_content.find('.input-group-btn').append(search_btn);
          tab_list = $('<ul class="nav nav-pills"></ul>');
          tab_content = $('<div class="tab-content"></div>');
          return _this.ec.Categories.sync(function(categories) {
            var category, _i, _len;
            for (_i = 0, _len = categories.length; _i < _len; _i++) {
              category = categories[_i];
              tab_list.append("<li class='" + (tab_list[0].children.length === 0 ? " active" : "") + "'><a href='#" + category.name + "' data-toggle='pill'>" + category.name + "</a></li>");
              tab_content.append("<div class='tab-pane " + (tab_content[0].children.length === 0 ? " active" : "") + "' id='" + category.name + "'>" + category.name + "</div>");
            }
            tab_list.append("<li class=''><a href='#search_tab' data-toggle='pill'>Search</a></li>");
            tab_content.append(_this.search_tab_content);
            _this.emoji_pallet = $('<div class="emoji-pallet"></div>');
            _this.emoji_pallet.append(tab_list.add(tab_content));
            _this.emoji_pallet.find('ul').after('<hr>');
            return _this.setWindow(_this.emoji_pallet);
          });
        }
      });
    };

    Pallet.prototype.search = function(search_word) {
      var _this = this;
      return this.ec.Search.search(search_word, function(result_emoji) {
        var emoji, pagination, search_emoji_list, _i, _len;
        $('.serach-emoji-list').remove();
        $('.search-pagination').remove();
        search_emoji_list = $('<div class="serach-emoji-list clearfix"></div>');
        for (_i = 0, _len = result_emoji.length; _i < _len; _i++) {
          emoji = result_emoji[_i];
          search_emoji_list.append("<button class='emoji-btn btn btn-default col-xs-2 col-sm-1' data-clipboard-text=':" + (emoji.code.replace(/\s/g, '_')) + ":'><img class='img-responsive center-block' src='" + _this.ec.cdn_url + "px32/" + (emoji.code.replace(/\s/g, '_')) + ".png'></img></button>");
        }
        _this.search_tab_content.append(search_emoji_list);
        pagination = $('<div class="search-pagination"><div class="text-center"><ul class="pagination"></ul></div></div>');
        pagination.find('.pagination').append($('<li><span>&laquo;</span></li>').click(function() {
          if (_this.ec.Search.cur_page > 1) {
            return _this.ec.Search.prev();
          }
        }));
        pagination.find('.pagination').append($("<li><span>" + _this.ec.Search.cur_page + " / " + _this.ec.Search.count + "</span></li>"));
        pagination.find('.pagination').append($('<li><span>&raquo;</span></li>').click(function() {
          if (_this.ec.Search.cur_page < _this.ec.Search.count) {
            return _this.ec.Search.next();
          }
        }));
        return _this.search_tab_content.append(pagination);
      });
    };

    Pallet.prototype.setWindow = function(body) {
      var ep, template,
        _this = this;
      template = $("      <div class='window emoji-pallet'>        <div class='window-header'>          <button type='button' class='close' data-dismiss='window' aria-hidden='true'>            x          </button>          <h4 class='window-title text-primary'>          </h4>        </div>        <div class='window-body'>        </div>      </div>    ");
      template.find('.close').click(function() {
        return _this.can_create_window = true;
      });
      return ep = new Window({
        template: template,
        title: 'emoji pallet',
        bodyContent: body
      });
    };

    return Pallet;

  })();

}).call(this);

(function() {
  var Replacer, ReplacerSearch,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = 'emojidexReplace';
    defaults = {
      onComplete: void 0,
      useLoadingImg: true,
      ignore: 'script, style, iframe, textarea, pre, code',
      autoUpdate: true
    };
    Plugin = (function() {
      function Plugin(element, options) {
        var _this = this;
        this.element = element;
        this.element = $(this.element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.ec = new EmojidexClient;
        if (this.checkUpdate()) {
          this.options.regexpUtf = RegExp(this.ec.Data.storage.get('emojidex.regexpUtf'), 'g');
          this.options.utfEmojiData = this.ec.Data.storage.get('emojidex.utfEmojiData');
          this.replace();
        } else {
          $.ajax({
            url: this.ec.api_url + 'moji_codes',
            dataType: 'json',
            success: function(response) {
              var regexp;
              _this.ec.Data.storage.set('emojidex.utfInfoUpdated', new Date().toString());
              regexp = response.moji_array.join('|');
              _this.ec.Data.storage.set('emojidex.regexpUtf', regexp);
              _this.options.regexpUtf = RegExp(regexp, 'g');
              _this.ec.Data.storage.set('emojidex.utfEmojiData', response.moji_index);
              _this.options.utfEmojiData = response.moji_index;
              return _this.replace();
            }
          });
        }
      }

      Plugin.prototype.checkUpdate = function() {
        var current, updated;
        if (this.ec.Data.storage.isSet('emojidex.utfInfoUpdated')) {
          current = new Date;
          updated = new Date(this.ec.Data.storage.get('emojidex.utfInfoUpdated'));
          if (current - updated <= 3600000 * 48) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      };

      Plugin.prototype.replace = function() {
        this.replacer = new ReplacerSearch(this);
        return this.replacer.loadEmoji();
      };

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

  Replacer = (function() {
    function Replacer() {
      var ignore;
      this.loadingNum = 0;
      ignore = '\'":;@&#~{}<>\\r\\n\\[\\]\\!\\$\\+\\?\\%\\*\\/\\\\';
      this.regexpCode = RegExp(":([^\\s" + ignore + "][^" + ignore + "]*[^\\s" + ignore + "]):|:([^\\s" + ignore + "]):", 'g');
    }

    Replacer.prototype.getEmojiTag = function(emoji_code) {
      return "<img class='emojidex-emoji' src='" + this.plugin.ec.cdn_url + this.plugin.ec.size_code + "/" + emoji_code + ".png' title='" + (this.replaceUnderToSpace(emoji_code)) + "'></img>";
    };

    Replacer.prototype.getLoadingTag = function(emoji_data, type) {
      return "<div class='emojidex-loading-icon' data-emoji='" + emoji_data + "' data-type='" + type + "'></div>";
    };

    Replacer.prototype.getLoadingElement = function(element) {
      return $(element.find('.emojidex-loading-icon'));
    };

    Replacer.prototype.setLoadingTag = function(plugin) {
      var _this = this;
      return plugin.element.find(":not(" + plugin.options.ignore + ")").andSelf().contents().filter(function(index, element) {
        var replaced_text;
        if (element.nodeType === Node.TEXT_NODE && element.textContent.match(/\S/)) {
          replaced_text = _this.getTextWithLoadingTag(element.textContent);
          if (replaced_text !== element.textContent) {
            return $(element).replaceWith(replaced_text);
          }
        }
      });
    };

    Replacer.prototype.getTextWithLoadingTag = function(text) {
      var _this = this;
      text = text.replace(this.plugin.options.regexpUtf, function(matched_string) {
        return _this.getLoadingTag(matched_string, 'utf');
      });
      text = text.replace(this.regexpCode, function(matched_string) {
        return _this.getLoadingTag(matched_string, 'code');
      });
      return text;
    };

    Replacer.prototype.reloadEmoji = function() {
      var config, reload, target,
        _this = this;
      reload = function(mutations) {
        var mutation, node, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = mutations.length; _i < _len; _i++) {
          mutation = mutations[_i];
          _results.push((function() {
            var _j, _len1, _ref, _results1;
            _ref = mutation.addedNodes;
            _results1 = [];
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              node = _ref[_j];
              if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
                this.plugin.options.useLoadingImg = false;
                this.plugin.options.autoUpdate = false;
                _results1.push(this.plugin.replacer.loadEmoji());
              } else {
                _results1.push(void 0);
              }
            }
            return _results1;
          }).call(_this));
        }
        return _results;
      };
      this.dom_observer = new MutationObserver(reload);
      if (this.plugin.element.selector) {
        target = document.querySelector(this.plugin.element.selector);
      } else {
        target = this.plugin.element[0];
      }
      config = {
        attributes: true,
        childList: true,
        attributeFilter: ['innerText']
      };
      return this.dom_observer.observe(target, config);
    };

    Replacer.prototype.fadeOutLoadingTag_fadeInEmojiTag = function(element, emoji_code, match) {
      var emoji_tag,
        _this = this;
      if (match == null) {
        match = true;
      }
      emoji_tag = void 0;
      if (match) {
        emoji_tag = $(this.getEmojiTag(emoji_code)).hide();
      } else {
        emoji_tag = emoji_code;
      }
      return element.fadeOut("normal", function() {
        element.after(emoji_tag);
        element.remove();
        if (match) {
          return emoji_tag.fadeIn("fast", function() {
            if (--_this.loadingNum === 0) {
              if (_this.plugin.options.onComplete != null) {
                _this.plugin.options.onComplete(_this.plugin.element);
              }
              if (_this.plugin.options.autoUpdate) {
                return _this.reloadEmoji();
              }
            }
          });
        } else {
          return _this.loadingNum--;
        }
      });
    };

    Replacer.prototype.replaceSpaceToUnder = function(string) {
      return string.replace(/\s/g, '_');
    };

    Replacer.prototype.replaceUnderToSpace = function(string) {
      return string.replace(/_/g, ' ');
    };

    return Replacer;

  })();

  ReplacerSearch = (function(_super) {
    __extends(ReplacerSearch, _super);

    function ReplacerSearch(plugin) {
      this.plugin = plugin;
      ReplacerSearch.__super__.constructor.apply(this, arguments);
    }

    ReplacerSearch.prototype.loadEmoji = function() {
      var checkComplete, checkSearchEnd, replaceCodeToEmojTag_replaceElement, searchEmoji_setEmojiTag, setEomojiTag,
        _this = this;
      searchEmoji_setEmojiTag = function(element) {
        var emoji, loading_element, loading_elements, replaceToEmojiIcon, _i, _len, _results;
        replaceToEmojiIcon = function(type, loading_element, emoji_code) {
          var emoji_image;
          emoji_image = $("<img src='" + _this.plugin.ec.cdn_url + _this.plugin.ec.size_code + "/" + emoji_code + ".png'></img>");
          emoji_image.load(function(e) {
            return _this.fadeOutLoadingTag_fadeInEmojiTag(loading_element, emoji_code);
          });
          return emoji_image.error(function(e) {
            return _this.fadeOutLoadingTag_fadeInEmojiTag(loading_element, "" + loading_element[0].dataset.emoji, false);
          });
        };
        loading_elements = _this.getLoadingElement(element);
        _this.loadingNum = loading_elements.length;
        _results = [];
        for (_i = 0, _len = loading_elements.length; _i < _len; _i++) {
          loading_element = loading_elements[_i];
          switch (loading_element.dataset.type) {
            case 'code':
              _results.push(replaceToEmojiIcon(loading_element.dataset.type, $(loading_element), _this.replaceSpaceToUnder(loading_element.dataset.emoji.replace(/:/g, ''))));
              break;
            case 'utf':
              _results.push((function() {
                var _results1;
                _results1 = [];
                for (emoji in this.plugin.options.utfEmojiData) {
                  if (emoji === loading_element.dataset.emoji) {
                    this.fadeOutLoadingTag_fadeInEmojiTag($(loading_element), this.plugin.options.utfEmojiData[emoji]);
                    break;
                  } else {
                    _results1.push(void 0);
                  }
                }
                return _results1;
              }).call(_this));
              break;
            default:
              _results.push(void 0);
          }
        }
        return _results;
      };
      checkComplete = function() {
        if (_this.replaced_text === _this.targetNum) {
          if (_this.plugin.options.onComplete != null) {
            _this.plugin.options.onComplete(_this.plugin.element);
          }
          if (_this.plugin.options.autoUpdate) {
            _this.reloadEmoji();
          }
        }
      };
      checkSearchEnd = function(searches, element, text, code_emoji) {
        if (searches === 0) {
          return replaceCodeToEmojTag_replaceElement(element, text, code_emoji);
        }
      };
      replaceCodeToEmojTag_replaceElement = function(element, text, code_emoji) {
        var code, replaced_text, _i, _len;
        replaced_text = text;
        for (_i = 0, _len = code_emoji.length; _i < _len; _i++) {
          code = code_emoji[_i];
          replaced_text = replaced_text.replace(code.matched, function() {
            var emoji_tag;
            _this.emoji_tags++;
            emoji_tag = _this.getEmojiTag(_this.replaceSpaceToUnder(code.code));
            return emoji_tag;
          });
        }
        $(element).replaceWith(replaced_text);
        _this.replaced_text++;
        return checkComplete();
      };
      setEomojiTag = function(element) {
        var code_emoji, searches, text;
        code_emoji = [];
        text = element.textContent.replace(_this.plugin.options.regexpUtf, function(matched_string) {
          var emoji, emoji_tag;
          for (emoji in _this.plugin.options.utfEmojiData) {
            if (emoji === matched_string) {
              _this.emoji_tags++;
              emoji_tag = _this.getEmojiTag(_this.plugin.options.utfEmojiData[emoji]);
              return emoji_tag;
            }
          }
        });
        if (text.match(_this.regexpCode)) {
          searches = 0;
          text.replace(_this.regexpCode, function() {
            return searches++;
          });
          return text.replace(_this.regexpCode, function(matched_string) {
            var emoji_image, matched_code;
            matched_code = matched_string.replace(/\:/g, '');
            emoji_image = $("<img src='" + _this.plugin.ec.cdn_url + _this.plugin.ec.size_code + "/" + (_this.replaceSpaceToUnder(matched_code)) + ".png'></img>");
            emoji_image.load(function(e) {
              searches--;
              code_emoji.push({
                matched: matched_string,
                code: matched_code
              });
              return checkSearchEnd(searches, element, text, code_emoji);
            });
            return emoji_image.error(function(e) {
              searches--;
              return checkSearchEnd(searches, element, text, code_emoji);
            });
          });
        } else {
          $(element).replaceWith(text);
          _this.replaced_text++;
          return checkComplete();
        }
      };
      if (this.plugin.options.useLoadingImg) {
        this.setLoadingTag(this.plugin);
        return searchEmoji_setEmojiTag(this.plugin.element);
      } else {
        this.targetNum = 0;
        this.replaced_text = 0;
        this.emoji_tags = 0;
        this.plugin.element.find(":not(" + this.plugin.options.ignore + ")").andSelf().contents().filter(function(index, element) {
          if (element.nodeType === Node.TEXT_NODE && element.textContent.match(/\S/)) {
            return _this.targetNum++;
          }
        });
        return this.plugin.element.find(":not(" + this.plugin.options.ignore + ")").andSelf().contents().filter(function(index, element) {
          if (element.nodeType === Node.TEXT_NODE && element.textContent.match(/\S/)) {
            return setEomojiTag(element);
          }
        });
      }
    };

    return ReplacerSearch;

  })(Replacer);

}).call(this);
