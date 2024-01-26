var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
@Name:		Horizontal Multilevel Menu with WP MegaMenu Support
@Author:    Muffin Group
@WWW:       www.muffingroup.com
@Version:   2.0
*/

;(function($){
	$.fn.extend({
		muffingroup_menu: function(options) {
			var menu = $(this);
			
			var defaults = {
				addLast		: false,
				animation   : 'fade',	
				arrows      : false,
				delay       : 100,
				hoverClass  : 'hover'
			};
			options = $.extend(defaults, options);
			
			// .submenu --------------------------
			menu.find("li:has(ul)")
				.addClass("submenu")
				.append("<span class='menu-toggle'>") // responsive menu toggle
			;	
			
			// .mfn-megamenu-parent -------------
			menu.children("li:has(ul.mfn-megamenu)").addClass("mfn-megamenu-parent");	

			// .last-item - submenu -------------
			$(".submenu ul li:last-child", menu).addClass("last-item");
			
			// options.addLast ------------------
			if(options.addLast) {
				$("> li:last-child", menu)
					.addClass("last")
					.prev()
						.addClass("last");
			}
			
			// options.arrows -------------------
			if( options.arrows ) {
				menu.find( "li ul li:has(ul) > a" ).append( "<i class='menu-arrow icon-right-open'></i>" );
			}
			
			// .hover() -------------------------
			menu.find("> li, ul:not(.mfn-megamenu) li").hover(function() {
				$(this).stop(true,true).addClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").stop(true,true).fadeIn(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").stop(true,true).slideDown(options.delay);
				}
			}, function(){
				$(this).stop(true,true).removeClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").stop(true,true).fadeOut(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").stop(true,true).slideUp(options.delay);
				}
			});
	
		}
	});
})(jQuery);

}
/*
     FILE ARCHIVED ON 08:46:14 May 23, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:25:47 Jan 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.19
  exclusion.robots.policy: 0.176
  cdx.remote: 0.142
  esindex: 0.012
  LoadShardBlock: 227.5 (6)
  PetaboxLoader3.datanode: 160.581 (8)
  load_resource: 177.328
  PetaboxLoader3.resolve: 104.229
  loaddict: 51.067
*/