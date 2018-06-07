define("fusion-worker/dist/b-pull-refresh/b-pull-refresh",["require","fusion-worker/dist/deps/fusion.best"],function(t){var i=t("fusion-worker/dist/deps/fusion.best"),e=i("b-pull-refresh-worker",{props:{list:{type:String,value:"",onChange:function(){this.render()}},requestOptions:{type:Object,value:{}},showCompleteStatus:{type:Boolean,value:!0},container:{type:String,value:"window"}},holdChild:!0,loading:!1,onDataReceived:function(t,i){this.trigger("dataReceived",{status:t,data:i})},onError:function(t,i){this.trigger("error",{errorType:t,error:i})},request:function(t){return t.dataType="json",t.timeout=t.timeout||5e3,$.ajax(t)},translateY:function(t,i){t.css({"-webkit-transform":"translateY("+i+"px)",transform:"translateY("+i+"px)"})},translateToY:function(t,i,e,o){t.animate({"-webkit-transform":"translateY("+i+"px)",transform:"translateY("+i+"px)"},e,o)},touchstartHandler:function(t){this.loading||(this.originY=t.touches[0].clientY,this.scrollTopStart=this.$container.scrollTop())},touchmoveHandler:function(t){if(!this.loading){this.curY=t.touches[0].clientY,this.moveY=this.curY-this.originY,this.direction=this.moveY>0?"down":"up",this.isTrigger=!1;var i=this.scrollTopStart-this.moveY;if("down"===this.direction&&0>=i&&!this.scrollTopStart){if(t.preventDefault(),this.isTrigger||(this.$head.show(),this.translateY(this.$content,-this.BASE_HEIGHT),this.isTrigger=!0),!this.stickyFlag){this.stickyFlag=!0;var e=$(".c-tabs-content").not('[style*="display"]');e.find(".b-grouplist-sticky-title").eq(0).hide(),e.find(".b-grouplist-sticky-title-shadow").eq(0).show()}this.moveY-=this.scrollTopStart,this.domMoveY=Math.round(this.moveY/2),this.triggerFlag=this.domMoveY>=this.BASE_HEIGHT,this.offsetY=this.domMoveY-this.BASE_HEIGHT,this.translateY(this.$head,this.offsetY),this.translateY(this.$content,this.offsetY);var o=0;if(this.domMoveY>19&&(o=-22*(this.domMoveY-20)),this.domMoveY>45&&(o=-550),this.$icon.css("background-position-y",o+"px"),$(window).height()-this.curY<10)return void this.$content.get(0).dispatchEvent(new Event("touchend"))}}},backToPosition:function(t){this.translateToY(this.$head,t,300,"ease-out"),this.translateToY(this.$content,t,300,"ease-out")},reset:function(){this.$icon.css("background-position-y","0px"),this.$icon.show(),this.$loadingIcon.removeClass(this.CLASS_INLINE),this.$loading.show(),this.$loaded.removeClass(this.CLASS_INLINE),this.translateY(this.$loaded,31),this.backToPosition(-this.BASE_HEIGHT);var t=this;setTimeout(function(){t.$head.css("display","none"),t.$content.css({transfrom:"none","-webkit-transform":"none"})},300),this.loading=!1},touchendHandler:function(){if(!this.loading&&this.isTrigger){var t=this;if(this.stickyFlag){this.stickyFlag=!1;var i=$(".c-tabs-content").not('[style*="display"]');i.find(".b-grouplist-sticky-title").eq(0).show().removeClass("b-grouplist-sticky-fixed"),i.find(".b-grouplist-sticky-title-shadow").eq(0).hide()}if(!t.triggerFlag)return void t.reset();t.loading=!0,t.backToPosition(0),t.$icon.hide(),t.$loadingIcon.addClass(t.CLASS_INLINE);var e=t.getProp("requestOptions"),o=t.request(e);o.done(function(i,e){t.onDataReceived(e,i)}).fail(function(i,e,o){t.onError(e,o)}).always(function(){t.$loading.hide(),t.$loaded.addClass(t.CLASS_INLINE),t.translateToY(t.$loaded,0,280,"ease-out"),setTimeout(function(){t.reset()},1280)})}},init:function(){var t=this;t.CLASS_INLINE="b-pull-refresh-inline",t.BASE_HEIGHT=34,t.PULLING_ICON_HEIGHT=22,t.container=t.getProp("container"),t.$container=$("window"===t.container?window:t.container),t.$head=t.$(".b-pull-refresh-head"),t.$content=t.$(".b-pull-refresh-content"),t.$icon=t.$head.find(".b-pull-refresh-pulling-icon"),t.$loadingIcon=t.$head.find(".b-pull-refresh-loading-icon"),t.$loading=t.$(".b-pull-refresh-loading"),t.$loaded=t.$(".b-pull-refresh-loaded"),t.$loadedText=t.$(".b-pull-refresh-loaded-text");var i=t.$content;i.on("touchstart",t.touchstartHandler.bind(t)),i.on("touchmove",t.touchmoveHandler.bind(t)),i.on("touchend",t.touchendHandler.bind(t))}});return e});