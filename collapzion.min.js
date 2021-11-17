/*
 ___      _ _                _                _     
  / __\___ | | | __ _ _ __ ___(_) ___  _ __    (_)___ 
 / /  / _ \| | |/ _` | '_ \_  / |/ _ \| '_ \   | / __|
/ /__| (_) | | | (_| | |_) / /| | (_) | | | |_ | \__ \
\____/\___/|_|_|\__,_| .__/___|_|\___/|_| |_(_)/ |___/
                     |_|                     |__/     

 Version: 1.0.0
  Author: channa bandara
 Website:
    Repo: http://github.com/channasmcs

 */
!function(o){"use strict";o.fn.Collapzion=function(t){function a(o){console.log(o)}var l=this,n=o.extend({_pos:{width:"100%","min-height":"20%",position:"fixed",right:"0",left:"-20px",bottom:"-25px","text-align":"center",padding:"0px 8px",display:"block","margin-bottom":"34px"},_child_attribute:[{label:"Post",url:"/",icon:"&#xE150;"}],_main_btn_color:"#2f353e;",_child_btn_color:"#2f353e;"},t);l.init=function(){l.css(n._pos),l.append('<a style="background-color:'+n._main_btn_color+'" href="javascript:void(0)" class="_col_shadow _collapz_parant _close"></a>'),o("#"+this.attr("id")+" a._collapz_parant").on("click",function(){var t=o(this);l.collapz_btn(t,n._child_attribute)})},l.collapz_btn=function(t,a){if(t.hasClass("_close")){t.css({"-webkit-transform":"rotate(90deg)","-moz-transform":"rotate(90deg)",transform:"rotate(90deg)"}),t.removeClass("_close"),t.addClass("_open");var l='<ul class="_child_collapzion">';jQuery.each(a,function(o,t){l+='<li><span class="_title ">'+t.label+'</span><a href="'+t.url+'" class="_col_shadow _collapz_child edit" style="background-color:'+n._child_btn_color+'"><i class="material-icons">'+t.icon+"</i></a></li>"}),l+="</ul>",t.parent().append(l),o("._child_collapzion").css({transform:"translate3d(0, -100%, 0)"})}else o("._child_collapzion").css({transform:"translate3d(0, 0%, 0)"}),o(this).parent().find("ul._child_collapzion").remove(),t.css({"-webkit-transform":"rotate(44deg)","-moz-transform":"rotate(44deg)",transform:"rotate(44deg)"}),t.removeClass("_open"),t.addClass("_close")},l.clicker=function(o){a(o)},l.init()}}(jQuery);