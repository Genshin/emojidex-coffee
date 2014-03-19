/*
 *  jQuery Emojidex - v0.1.0
 *  emojidex coffee plugin for jQuery/Zepto and compatible
 *  https://github.com/Genshin/emojidex-coffee#emojidex-coffee
 *
 *  Made by Genshin
 *  Under LGPL License
 */
(function() {


}).call(this);

(function(){!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){var b,c,d,e,f,g,h,i,j,k=[].slice;d=function(){function b(b){this.current_flag=null,this.controllers={},this.alias_maps={},this.$inputor=a(b),this.listen()}return b.prototype.controller=function(a){return this.controllers[this.alias_maps[a]||a||this.current_flag]},b.prototype.set_context_for=function(a){return this.current_flag=a,this},b.prototype.reg=function(a,b){var c,d;return c=(d=this.controllers)[a]||(d[a]=new f(this,a)),b.alias&&(this.alias_maps[b.alias]=a),c.init(b),this},b.prototype.listen=function(){return this.$inputor.on("keyup.atwhoInner",function(a){return function(b){return a.on_keyup(b)}}(this)).on("keydown.atwhoInner",function(a){return function(b){return a.on_keydown(b)}}(this)).on("scroll.atwhoInner",function(a){return function(){var b;return null!=(b=a.controller())?b.view.hide():void 0}}(this)).on("blur.atwhoInner",function(a){return function(){var b;return(b=a.controller())?b.view.hide(b.get_opt("display_timeout")):void 0}}(this))},b.prototype.shutdown=function(){var a,b,c;c=this.controllers;for(b in c)a=c[b],a.destroy();return this.$inputor.off(".atwhoInner")},b.prototype.dispatch=function(){return a.map(this.controllers,function(a){return function(b){return b.look_up()?a.set_context_for(b.at):void 0}}(this))},b.prototype.on_keyup=function(b){var c;switch(b.keyCode){case h.ESC:b.preventDefault(),null!=(c=this.controller())&&c.view.hide();break;case h.DOWN:case h.UP:a.noop();break;default:this.dispatch()}},b.prototype.on_keydown=function(b){var c,d;if(c=null!=(d=this.controller())?d.view:void 0,c&&c.visible())switch(b.keyCode){case h.ESC:b.preventDefault(),c.hide();break;case h.UP:b.preventDefault(),c.prev();break;case h.DOWN:b.preventDefault(),c.next();break;case h.TAB:case h.ENTER:if(!c.visible())return;b.preventDefault(),c.choose();break;default:a.noop()}},b}(),f=function(){function c(c,e){this.app=c,this.at=e,this.$inputor=this.app.$inputor,this.oDocument=this.$inputor[0].ownerDocument,this.oWindow=this.oDocument.defaultView||this.oDocument.parentWindow,this.id=this.$inputor[0].id||d(),this.setting=null,this.query=null,this.pos=0,this.cur_rect=null,this.range=null,b.append(this.$el=a("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new i(this),this.view=new j(this)}var d,e;return e=0,d=function(){return e+=1},c.prototype.init=function(b){return this.setting=a.extend({},this.setting||a.fn.atwho["default"],b),this.view.init(),this.model.reload(this.setting.data)},c.prototype.destroy=function(){return this.trigger("beforeDestroy"),this.model.destroy(),this.view.destroy()},c.prototype.call_default=function(){var b,c,d;d=arguments[0],b=2<=arguments.length?k.call(arguments,1):[];try{return g[d].apply(this,b)}catch(e){return c=e,a.error(""+c+" Or maybe At.js doesn't have function "+d)}},c.prototype.trigger=function(a,b){var c,d;return null==b&&(b=[]),b.push(this),c=this.get_opt("alias"),d=c?""+a+"-"+c+".atwho":""+a+".atwho",this.$inputor.trigger(d,b)},c.prototype.callbacks=function(a){return this.get_opt("callbacks")[a]||g[a]},c.prototype.get_opt=function(a){var b;try{return this.setting[a]}catch(c){return b=c,null}},c.prototype.content=function(){return this.$inputor.is("textarea, input")?this.$inputor.val():this.$inputor.text()},c.prototype.catch_query=function(){var a,b,c,d,e,f;return b=this.content(),a=this.$inputor.caret("pos"),f=b.slice(0,a),d=this.callbacks("matcher").call(this,this.at,f,this.get_opt("start_with_space")),"string"==typeof d&&d.length<=this.get_opt("max_len",20)?(e=a-d.length,c=e+d.length,this.pos=e,d={text:d.toLowerCase(),head_pos:e,end_pos:c},this.trigger("matched",[this.at,d.text])):this.view.hide(),this.query=d},c.prototype.rect=function(){var a,b;if(a=this.$inputor.caret("offset",this.pos-1))return"true"===this.$inputor.attr("contentEditable")&&(a=this.cur_rect||(this.cur_rect=a)||a),b=document.selection?0:2,{left:a.left,top:a.top,bottom:a.top+a.height+b}},c.prototype.reset_rect=function(){return"true"===this.$inputor.attr("contentEditable")?this.cur_rect=null:void 0},c.prototype.mark_range=function(){return"true"===this.$inputor.attr("contentEditable")&&(this.oWindow.getSelection&&(this.range=this.oWindow.getSelection().getRangeAt(0)),this.oDocument.selection)?this.ie8_range=this.oDocument.selection.createRange():void 0},c.prototype.insert_content_for=function(b){var c,d,e;return d=b.data("value"),e=this.get_opt("insert_tpl"),this.$inputor.is("textarea, input")||!e?d:(c=a.extend({},b.data("item-data"),{"atwho-data-value":d,"atwho-at":this.at}),this.callbacks("tpl_eval").call(this,e,c))},c.prototype.insert=function(b,c){var d,e,f,g,h,i,j,k,l,m,n;return d=this.$inputor,"true"===d.attr("contentEditable")&&(f="atwho-view-flag atwho-view-flag-"+(this.get_opt("alias")||this.at),g=""+b+"<span contenteditable='false'>&nbsp;<span>",h="<span contenteditable='false' class='"+f+"'>"+g+"</span>",e=a(h,this.oDocument).data("atwho-data-item",c.data("item-data")),this.oDocument.selection&&(e=a("<span contenteditable='true'></span>",this.oDocument).html(e))),d.is("textarea, input")?(b=""+b,l=d.val(),m=l.slice(0,Math.max(this.query.head_pos-this.at.length,0)),n=""+m+b+" "+l.slice(this.query.end_pos||0),d.val(n),d.caret("pos",m.length+b.length+1)):(j=this.range)?(i=j.startOffset-(this.query.end_pos-this.query.head_pos)-this.at.length,j.setStart(j.endContainer,Math.max(i,0)),j.setEnd(j.endContainer,j.endOffset),j.deleteContents(),j.insertNode(e[0]),j.collapse(!1),k=this.oWindow.getSelection(),k.removeAllRanges(),k.addRange(j)):(j=this.ie8_range)&&(j.moveStart("character",this.query.end_pos-this.query.head_pos-this.at.length),j.pasteHTML(g),j.collapse(!1),j.select()),d.is(":focus")||d.focus(),d.change()},c.prototype.render_view=function(a){var b;return b=this.get_opt("search_key"),a=this.callbacks("sorter").call(this,this.query.text,a.slice(0,1001),b),this.view.render(a.slice(0,this.get_opt("limit")))},c.prototype.look_up=function(){var b,c;if(b=this.catch_query())return c=function(a){return a&&a.length>0?this.render_view(a):this.view.hide()},this.model.query(b.text,a.proxy(c,this)),b},c}(),i=function(){function b(a){this.context=a,this.at=this.context.at,this.storage=this.context.$inputor}return b.prototype.destroy=function(){return this.storage.data(this.at,null)},b.prototype.saved=function(){return this.fetch()>0},b.prototype.query=function(a,b){var c,d,e;return c=this.fetch(),d=this.context.get_opt("search_key"),c=this.context.callbacks("filter").call(this.context,a,c,d)||[],e=this.context.callbacks("remote_filter"),c.length>0||!e&&0===c.length?b(c):e.call(this.context,a,b)},b.prototype.fetch=function(){return this.storage.data(this.at)||[]},b.prototype.save=function(a){return this.storage.data(this.at,this.context.callbacks("before_save").call(this.context,a||[]))},b.prototype.load=function(a){return!this.saved()&&a?this._load(a):void 0},b.prototype.reload=function(a){return this._load(a)},b.prototype._load=function(b){return"string"==typeof b?a.ajax(b,{dataType:"json"}).done(function(a){return function(b){return a.save(b)}}(this)):this.save(b)},b}(),j=function(){function b(b){this.context=b,this.$el=a("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),this.timeout_id=null,this.context.$el.append(this.$el),this.bind_event()}return b.prototype.init=function(){var a;return a=this.context.get_opt("alias")||this.context.at.charCodeAt(0),this.$el.attr({id:"at-view-"+a})},b.prototype.destroy=function(){return this.$el.remove()},b.prototype.bind_event=function(){var b;return b=this.$el.find("ul"),b.on("mouseenter.atwho-view","li",function(c){return b.find(".cur").removeClass("cur"),a(c.currentTarget).addClass("cur")}).on("click",function(a){return function(b){return a.choose(),b.preventDefault()}}(this))},b.prototype.visible=function(){return this.$el.is(":visible")},b.prototype.choose=function(){var a,b;return a=this.$el.find(".cur"),b=this.context.insert_content_for(a),this.context.insert(this.context.callbacks("before_insert").call(this.context,b,a),a),this.context.trigger("inserted",[a]),this.hide()},b.prototype.reposition=function(b){var c;return b.bottom+this.$el.height()-a(window).scrollTop()>a(window).height()&&(b.bottom=b.top-this.$el.height()),c={left:b.left,top:b.bottom},this.$el.offset(c),this.context.trigger("reposition",[c])},b.prototype.next=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.next(),b.length||(b=this.$el.find("li:first")),b.addClass("cur")},b.prototype.prev=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.prev(),b.length||(b=this.$el.find("li:last")),b.addClass("cur")},b.prototype.show=function(){var a;return this.context.mark_range(),this.visible()||(this.$el.show(),this.context.trigger("shown")),(a=this.context.rect())?this.reposition(a):void 0},b.prototype.hide=function(a){var b;return isNaN(a&&this.visible())?(this.context.reset_rect(),this.$el.hide(),this.context.trigger("hidden")):(b=function(a){return function(){return a.hide()}}(this),clearTimeout(this.timeout_id),this.timeout_id=setTimeout(b,a))},b.prototype.render=function(b){var c,d,e,f,g,h,i;if(!(a.isArray(b)&&b.length>0))return void this.hide();for(this.$el.find("ul").empty(),d=this.$el.find("ul"),g=this.context.get_opt("tpl"),h=0,i=b.length;i>h;h++)e=b[h],e=a.extend({},e,{"atwho-at":this.context.at}),f=this.context.callbacks("tpl_eval").call(this.context,g,e),c=a(this.context.callbacks("highlighter").call(this.context,f,this.context.query.text)),c.data("item-data",e),d.append(c);return this.show(),d.find("li:first").addClass("cur")},b}(),h={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13},g={before_save:function(b){var c,d,e,f;if(!a.isArray(b))return b;for(f=[],d=0,e=b.length;e>d;d++)c=b[d],f.push(a.isPlainObject(c)?c:{name:c});return f},matcher:function(a,b,c){var d,e;return a=a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),c&&(a="(?:^|\\s)"+a),e=new RegExp(a+"([A-Za-z0-9_+-]*)$|"+a+"([^\\x00-\\xff]*)$","gi"),d=e.exec(b),d?d[2]||d[1]:null},filter:function(a,b,c){var d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],~d[c].toLowerCase().indexOf(a)&&g.push(d);return g},remote_filter:null,sorter:function(a,b,c){var d,e,f,g;if(!a)return b;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],d.atwho_order=d[c].toLowerCase().indexOf(a),d.atwho_order>-1&&g.push(d);return g.sort(function(a,b){return a.atwho_order-b.atwho_order})},tpl_eval:function(a,b){var c;try{return a.replace(/\$\{([^\}]*)\}/g,function(a,c){return b[c]})}catch(d){return c=d,""}},highlighter:function(a,b){var c;return b?(c=new RegExp(">\\s*(\\w*)("+b.replace("+","\\+")+")(\\w*)\\s*<","ig"),a.replace(c,function(a,b,c,d){return"> "+b+"<strong>"+c+"</strong>"+d+" <"})):a},before_insert:function(a){return a}},c={load:function(a,b){var c;return(c=this.controller(a))?c.model.load(b):void 0},getInsertedItemsWithIDs:function(b){var c,d,e;return(c=this.controller(b))?(b&&(b="-"+(c.get_opt("alias")||c.at)),d=[],e=a.map(this.$inputor.find("span.atwho-view-flag"+(b||"")),function(b){var c;return c=a(b).data("atwho-data-item"),d.indexOf(c.id)>-1?void 0:(c.id&&(d.push=c.id),c)}),[d,e]):[null,null]},getInsertedItems:function(a){return c.getInsertedItemsWithIDs.apply(this,[a])[1]},getInsertedIDs:function(a){return c.getInsertedItemsWithIDs.apply(this,[a])[0]},run:function(){return this.dispatch()},destroy:function(){return this.shutdown(),this.$inputor.data("atwho",null)}},e={init:function(b){var c,e;return e=(c=a(this)).data("atwho"),e||c.data("atwho",e=new d(this)),e.reg(b.at,b),this}},b=a("<div id='atwho-container'></div>"),a.fn.atwho=function(d){var f,g;return g=arguments,a("body").append(b),f=null,this.filter("textarea, input, [contenteditable=true]").each(function(){var b;return"object"!=typeof d&&d?c[d]?(b=a(this).data("atwho"))?f=c[d].apply(b,Array.prototype.slice.call(g,1)):void 0:a.error("Method "+d+" does not exist on jQuery.caret"):e.init.apply(this,g)}),f||this},a.fn.atwho["default"]={at:void 0,alias:void 0,data:null,tpl:"<li data-value='${atwho-at}${name}'>${name}</li>",insert_tpl:"<span>${atwho-data-value}</span>",callbacks:g,search_key:"name",start_with_space:!0,limit:5,max_len:20,display_timeout:300}})}).call(this);
//@ sourceMappingURL=jquery.caret.map
/*
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js

  Copyright (c) 2013 chord.luo@gmail.com
  Licensed under the MIT license.
*/


/*
本插件操作 textarea 或者 input 内的插入符
只实现了获得插入符在文本框中的位置，我设置
插入符的位置.
*/


(function() {
  (function(factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery'], factory);
    } else {
      return factory(window.jQuery);
    }
  })(function($) {
    "use strict";
    var EditableCaret, InputCaret, Mirror, Utils, methods, oDocument, oFrame, oWindow, pluginName;
    pluginName = 'caret';
    EditableCaret = (function() {
      function EditableCaret($inputor) {
        this.$inputor = $inputor;
        this.domInputor = this.$inputor[0];
      }

      EditableCaret.prototype.setPos = function(pos) {
        return this.domInputor;
      };

      EditableCaret.prototype.getIEPosition = function() {
        return $.noop();
      };

      EditableCaret.prototype.getPosition = function() {
        return $.noop();
      };

      EditableCaret.prototype.getOldIEPos = function() {
        var preCaretTextRange, textRange;
        textRange = oDocument.selection.createRange();
        preCaretTextRange = oDocument.body.createTextRange();
        preCaretTextRange.moveToElementText(this.domInputor);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        return preCaretTextRange.text.length;
      };

      EditableCaret.prototype.getPos = function() {
        var clonedRange, pos, range;
        if (range = this.range()) {
          clonedRange = range.cloneRange();
          clonedRange.selectNodeContents(this.domInputor);
          clonedRange.setEnd(range.endContainer, range.endOffset);
          pos = clonedRange.toString().length;
          clonedRange.detach();
          return pos;
        } else if (oDocument.selection) {
          return this.getOldIEPos();
        }
      };

      EditableCaret.prototype.getOldIEOffset = function() {
        var range, rect;
        range = oDocument.selection.createRange().duplicate();
        range.moveStart("character", -1);
        rect = range.getBoundingClientRect();
        return {
          height: rect.bottom - rect.top,
          left: rect.left,
          top: rect.top
        };
      };

      EditableCaret.prototype.getOffset = function(pos) {
        var clonedRange, offset, range, rect;
        if (oWindow.getSelection && (range = this.range())) {
          if (range.endOffset - 1 < 0) {
            return null;
          }
          clonedRange = range.cloneRange();
          clonedRange.setStart(range.endContainer, range.endOffset - 1);
          clonedRange.setEnd(range.endContainer, range.endOffset);
          rect = clonedRange.getBoundingClientRect();
          offset = {
            height: rect.height,
            left: rect.left + rect.width,
            top: rect.top
          };
          clonedRange.detach();
        } else if (oDocument.selection) {
          offset = this.getOldIEOffset();
        }
        if (offset && !oFrame) {
          offset.top += $(oWindow).scrollTop();
          offset.left += $(oWindow).scrollLeft();
        }
        return offset;
      };

      EditableCaret.prototype.range = function() {
        var sel;
        if (!oWindow.getSelection) {
          return;
        }
        sel = oWindow.getSelection();
        if (sel.rangeCount > 0) {
          return sel.getRangeAt(0);
        } else {
          return null;
        }
      };

      return EditableCaret;

    })();
    InputCaret = (function() {
      function InputCaret($inputor) {
        this.$inputor = $inputor;
        this.domInputor = this.$inputor[0];
      }

      InputCaret.prototype.getIEPos = function() {
        var endRange, inputor, len, normalizedValue, pos, range, textInputRange;
        inputor = this.domInputor;
        range = oDocument.selection.createRange();
        pos = 0;
        if (range && range.parentElement() === inputor) {
          normalizedValue = inputor.value.replace(/\r\n/g, "\n");
          len = normalizedValue.length;
          textInputRange = inputor.createTextRange();
          textInputRange.moveToBookmark(range.getBookmark());
          endRange = inputor.createTextRange();
          endRange.collapse(false);
          if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
            pos = len;
          } else {
            pos = -textInputRange.moveStart("character", -len);
          }
        }
        return pos;
      };

      InputCaret.prototype.getPos = function() {
        if (oDocument.selection) {
          return this.getIEPos();
        } else {
          return this.domInputor.selectionStart;
        }
      };

      InputCaret.prototype.setPos = function(pos) {
        var inputor, range;
        inputor = this.domInputor;
        if (oDocument.selection) {
          range = inputor.createTextRange();
          range.move("character", pos);
          range.select();
        } else if (inputor.setSelectionRange) {
          inputor.setSelectionRange(pos, pos);
        }
        return inputor;
      };

      InputCaret.prototype.getIEOffset = function(pos) {
        var h, textRange, x, y;
        textRange = this.domInputor.createTextRange();
        pos || (pos = this.getPos());
        textRange.move('character', pos);
        x = textRange.boundingLeft;
        y = textRange.boundingTop;
        h = textRange.boundingHeight;
        return {
          left: x,
          top: y,
          height: h
        };
      };

      InputCaret.prototype.getOffset = function(pos) {
        var $inputor, offset, position;
        $inputor = this.$inputor;
        if (oDocument.selection) {
          offset = this.getIEOffset(pos);
          offset.top += $(oWindow).scrollTop() + $inputor.scrollTop();
          offset.left += $(oWindow).scrollLeft() + $inputor.scrollLeft();
          return offset;
        } else {
          offset = $inputor.offset();
          position = this.getPosition(pos);
          return offset = {
            left: offset.left + position.left - $inputor.scrollLeft(),
            top: offset.top + position.top - $inputor.scrollTop(),
            height: position.height
          };
        }
      };

      InputCaret.prototype.getPosition = function(pos) {
        var $inputor, at_rect, format, html, mirror, start_range;
        $inputor = this.$inputor;
        format = function(value) {
          return value.replace(/</g, '&lt').replace(/>/g, '&gt').replace(/`/g, '&#96').replace(/"/g, '&quot').replace(/\r\n|\r|\n/g, "<br />");
        };
        if (pos === void 0) {
          pos = this.getPos();
        }
        start_range = $inputor.val().slice(0, pos);
        html = "<span>" + format(start_range) + "</span>";
        html += "<span id='caret'>|</span>";
        mirror = new Mirror($inputor);
        return at_rect = mirror.create(html).rect();
      };

      InputCaret.prototype.getIEPosition = function(pos) {
        var h, inputorOffset, offset, x, y;
        offset = this.getIEOffset(pos);
        inputorOffset = this.$inputor.offset();
        x = offset.left - inputorOffset.left;
        y = offset.top - inputorOffset.top;
        h = offset.height;
        return {
          left: x,
          top: y,
          height: h
        };
      };

      return InputCaret;

    })();
    Mirror = (function() {
      Mirror.prototype.css_attr = ["overflowY", "height", "width", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "marginTop", "marginLeft", "marginRight", "marginBottom", "fontFamily", "borderStyle", "borderWidth", "wordWrap", "fontSize", "lineHeight", "overflowX", "text-align"];

      function Mirror($inputor) {
        this.$inputor = $inputor;
      }

      Mirror.prototype.mirrorCss = function() {
        var css,
          _this = this;
        css = {
          position: 'absolute',
          left: -9999,
          top: 0,
          zIndex: -20000,
          'white-space': 'pre-wrap'
        };
        $.each(this.css_attr, function(i, p) {
          return css[p] = _this.$inputor.css(p);
        });
        return css;
      };

      Mirror.prototype.create = function(html) {
        this.$mirror = $('<div></div>');
        this.$mirror.css(this.mirrorCss());
        this.$mirror.html(html);
        this.$inputor.after(this.$mirror);
        return this;
      };

      Mirror.prototype.rect = function() {
        var $flag, pos, rect;
        $flag = this.$mirror.find("#caret");
        pos = $flag.position();
        rect = {
          left: pos.left,
          top: pos.top,
          height: $flag.height()
        };
        this.$mirror.remove();
        return rect;
      };

      return Mirror;

    })();
    Utils = {
      contentEditable: function($inputor) {
        return !!($inputor[0].contentEditable && $inputor[0].contentEditable === 'true');
      }
    };
    methods = {
      pos: function(pos) {
        if (pos) {
          return this.setPos(pos);
        } else {
          return this.getPos();
        }
      },
      position: function(pos) {
        if (oDocument.selection) {
          return this.getIEPosition(pos);
        } else {
          return this.getPosition(pos);
        }
      },
      offset: function(pos) {
        var iOffset, offset;
        offset = this.getOffset(pos);
        if (oFrame) {
          iOffset = $(oFrame).offset();
          offset.top += iOffset.top;
          offset.left += iOffset.left;
        }
        return offset;
      }
    };
    oDocument = null;
    oWindow = null;
    oFrame = null;
    $.fn.caret = function(method) {
      var caret;
      oDocument = this[0].ownerDocument;
      oWindow = oDocument.defaultView || oDocument.parentWindow;
      oFrame = oWindow.frameElement;
      caret = Utils.contentEditable(this) ? new EditableCaret(this) : new InputCaret(this);
      if (methods[method]) {
        return methods[method].apply(caret, Array.prototype.slice.call(arguments, 1));
      } else {
        return $.error("Method " + method + " does not exist on jQuery.caret");
      }
    };
    $.fn.caret.EditableCaret = EditableCaret;
    $.fn.caret.InputCaret = InputCaret;
    $.fn.caret.Utils = Utils;
    return $.fn.caret.apis = methods;
  });

}).call(this);