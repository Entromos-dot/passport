/*! validatorjs - v1.3.2 - https://github.com/skaterdav85/validatorjs - 2015-02-11 */!function(){function a(){for(var b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length;i>h;h++)if(null!=(e=arguments[h]))for(d in e)b=g[d],c=e[d],g!==c&&(c&&"object"==typeof c?(f=b&&"object"==typeof b?b:{},g[d]=a(f,c)):void 0!==c&&(g[d]=c));return g}var b={accepted:"The :attribute must be accepted.",alpha:"The :attribute field must contain only alphabetic characters.",alpha_dash:"The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.",alpha_num:"The :attribute field must be alphanumeric.",confirmed:"The :attribute confirmation does not match.",email:"The :attribute format is invalid.",def:"The :attribute attribute has errors.",digits:"The :attribute must be :digits digits.",different:"The :attribute and :different must be different.","in":"The selected :attribute is invalid.",integer:"The :attribute must be an integer.",min:{numeric:"The :attribute must be at least :min.",string:"The :attribute must be at least :min characters."},max:{numeric:"The :attribute must be less than :max.",string:"The :attribute must be less than :max characters."},not_in:"The selected :attribute is invalid.",numeric:"The :attribute must be a number.",required:"The :attribute field is required.",same:"The :attribute and :same fields must match.",size:{numeric:"The :attribute must be :size.",string:"The :attribute must be :size characters."},url:"The :attribute format is invalid.",regex:"The :attribute format is invalid"};Array.prototype.forEach||(Array.prototype.forEach=function(a,b){"use strict";var c,d;for(c=0,d=this.length;d>c;++c)c in this&&a.call(b,this[c],c,this)});var c=function(){};c.prototype={constructor:c,get:function(a){return this[a]?this[a]:[]},first:function(a){return this[a]?this[a][0]:!1},all:function(){return this},has:function(a){return this[a]&&this[a].length>0?!0:!1}};var d=function(d,e,f){this.input=d,this.rules=e,this.messages=a({},b,f||{}),this.errors=new c,this.errorCount=0,this.check()};d.prototype={constructor:d,_createMessage:function(a,b){var c,d;if("string"==typeof a&&"object"==typeof b){c=a;for(d in b)b.hasOwnProperty(d)&&(c=c.replace(":"+d,b[d]))}return c},check:function(){var a=this;this._each(this.rules,function(b){var c=this.rules[b];"string"==typeof c&&(c=this.rules[b].split("|"));var d=this.input[b];c.forEach(function(c){var e,f,g,h,i=a._extractRuleAndRuleValue(c),j=i.rule,k=i.ruleValue;e=a.validate[j].call(a,d,k,b),e||(a.errors.hasOwnProperty(b)||(a.errors[b]=[]),f=a._createErrorMessageTemplateData(b,j,k),g=a._selectMessageTemplate(j,d,b),h=a._createMessage(g,f),a._addErrorMessage(b,h))})},this)},_each:function(a,b,c){for(var d in a)b.call(c,d)},_extractRuleAndRuleValue:function(a){var b,c={};return c.rule=a,a.indexOf(":")>=0&&(b=a.split(":"),c.rule=b[0],c.ruleValue=b.slice(1).join(":")),c},_addErrorMessage:function(a,b){this.errors[a].push(b),this.errorCount++},_createErrorMessageTemplateData:function(a,b,c){var d={attribute:a};return d[b]=c,d},_selectMessageTemplate:function(a,b,c){var d,e=this.messages;if(e.hasOwnProperty(a+"."+c))d=e[a+"."+c];else if(e.hasOwnProperty(a)){if(d=e[a],"object"==typeof d)switch(typeof b){case"number":d=d.numeric;break;case"string":d=d.string}}else d=e.def;return d},passes:function(){return 0===this.errorCount?!0:!1},fails:function(){return this.errorCount>0?!0:!1},validate:{required:function(a){var b;return void 0===a||null===a?!1:(b=String(a).replace(/\s/g,""),b.length>0?!0:!1)},size:function(a,b){return a?(b=parseFloat(b),"number"==typeof a?a===b?!0:!1:a.length===b?!0:!1):!0},min:function(a,b){return void 0===a||""===a?!0:"number"==typeof a?a>=b?!0:!1:a.length>=b?!0:!1},max:function(a,b){return void 0===a||""===a?!0:"number"==typeof a?b>=a?!0:!1:a.length<=b?!0:!1},email:function(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return void 0===a||""===a?!0:b.test(a)},numeric:function(a){var b;return void 0===a||""===a?!0:(b=Number(a),"number"!=typeof b||isNaN(b)||"boolean"==typeof a?!1:!0)},url:function(a){return void 0===a||""===a?!0:/^https?:\/\/\S+/.test(a)},alpha:function(a){return void 0===a||""===a?!0:/^[a-zA-Z]+$/.test(a)},alpha_dash:function(a){return void 0===a||""===a?!0:/^[a-zA-Z0-9_\-]+$/.test(a)},alpha_num:function(a){return void 0===a||""===a?!0:/^[a-zA-Z0-9]+$/.test(a)},same:function(a,b){var c=this.input[b],d=a;return c===d?!0:!1},different:function(a,b){var c=this.input[b],d=a;return c!==d?!0:!1},"in":function(a,b){var c,d,e;if(a){c=b.split(","),d=c.length,e=!1,a=String(a);for(var f=0;d>f;f++)if(a===c[f]){e=!0;break}return e}return!0},not_in:function(a,b){var c=b.split(","),d=c.length,e=!0;a=String(a);for(var f=0;d>f;f++)if(a===c[f]){e=!1;break}return e},accepted:function(a){return"on"===a||"yes"===a||1===a||"1"===a?!0:!1},confirmed:function(a,b,c){var d=c+"_confirmation";return this.input[d]===a?!0:!1},integer:function(a){return void 0===a||""===a?!0:(a=String(a),/^\d+$/.test(a)?!0:!1)},digits:function(a,b){return this.validate.numeric(a)&&String(a).length===parseInt(b)?!0:!1},regex:function(a,b){var c=/[g|i|m]{1,3}$/,d=b.match(c);return d=d?d[0]:"i",b=b.replace(c,"").slice(1,-1),b=new RegExp(b,d),!!a.match(b)}}},d.register=function(a,c,d){this.prototype.validate[a]=c,b[a]="string"==typeof d?d:b.def},d.make=function(a,b,c){return new d(a,b,c)},"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd?define("Validator",[],function(){return d}):window.Validator=d}();