//WaitForImages
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var r="waitForImages";e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},e.expr[":"]["has-src"]=function(r){return e(r).is('img[src][src!=""]')},e.expr[":"].uncached=function(r){return e(r).is(":has-src")?!r.complete:!1},e.fn.waitForImages=function(){var t,n,s,a=0,i=0,o=e.Deferred();if(e.isPlainObject(arguments[0])?(s=arguments[0].waitForAll,n=arguments[0].each,t=arguments[0].finished):1===arguments.length&&"boolean"===e.type(arguments[0])?s=arguments[0]:(t=arguments[0],n=arguments[1],s=arguments[2]),t=t||e.noop,n=n||e.noop,s=!!s,!e.isFunction(t)||!e.isFunction(n))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var c=e(this),u=[],m=e.waitForImages.hasImageProperties||[],h=e.waitForImages.hasImageAttributes||[],l=/url\(\s*(['"]?)(.*?)\1\s*\)/g;s?c.find("*").addBack().each(function(){var r=e(this);r.is("img:has-src")&&u.push({src:r.attr("src"),element:r[0]}),e.each(m,function(e,t){var n,s=r.css(t);if(!s)return!0;for(;n=l.exec(s);)u.push({src:n[2],element:r[0]})}),e.each(h,function(t,n){var s,a=r.attr(n);return a?(s=a.split(","),void e.each(s,function(t,n){n=e.trim(n).split(" ")[0],u.push({src:n,element:r[0]})})):!0})}):c.find("img:has-src").each(function(){u.push({src:this.src,element:this})}),a=u.length,i=0,0===a&&(t.call(c[0]),o.resolveWith(c[0])),e.each(u,function(s,u){var m=new Image,h="load."+r+" error."+r;e(m).one(h,function l(r){var s=[i,a,"load"==r.type];return i++,n.apply(u.element,s),o.notifyWith(u.element,s),e(this).off(h,l),i==a?(t.call(c[0]),o.resolveWith(c[0]),!1):void 0}),m.src=u.src})}),o.promise()}});

//PhotonicModal
!function(o){o.fn.photonicModal=function(n){function a(n){o(document).height()>o(window).height();o("body, html").css({overflow:"hidden"}),n.hasClass(d.modalTarget+"-off")&&(n.removeClass(d.modalTarget+"-off"),n.addClass(d.modalTarget+"-on")),n.hasClass(d.modalTarget+"-on")&&(d.beforeOpen(),n.css({opacity:d.opacityIn,"z-index":d.zIndexIn}),n.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",t)),l.css("overflow-y",d.overflow).fadeIn(),n.appendTo(s).css("overflow-y",d.overflow).hide().slideDown("slow")}function e(){c.css({"z-index":d.zIndexOut}),d.afterClose()}function t(){d.afterOpen()}var i=o(this),d=o.extend({modalTarget:"photonicModal",closeCSS:"",closeFromRight:0,width:"80%",height:"100%",top:"0px",left:"0px",zIndexIn:"9999",zIndexOut:"-9999",color:"#39BEB9",opacityIn:"1",opacityOut:"0",animatedIn:"zoomIn",animatedOut:"zoomOut",animationDuration:".6s",overflow:"auto",beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){}},n),l=o(document).find(".photonicModalOverlay"),s=o(document).find(".photonicModalOverlayScrollable");0==l.length&&(l=document.createElement("div"),l.className="photonicModalOverlay",s=document.createElement("div"),s.className="photonicModalOverlayScrollable",o(s).appendTo(o(l)),o("body").append(l)),l=o(l),s=o(s);var r=o(i).find(".photonicModalClose");0==r.length&&(r=document.createElement("a"),r.className="photonicModalClose "+d.closeCSS,o(r).css({right:d.closeFromRight}),o(r).html("&times;"),o(r).attr("href","#"),o(r).prependTo(o(i)).show()),r=o(i).find(".photonicModalClose");;var c=o("body").find("#"+d.modalTarget);c.addClass("photonicModal"),c.addClass(d.modalTarget+"-off");var m={width:d.width,height:d.height,top:d.top,left:d.left,"background-color":d.color,"overflow-y":d.overflow,"z-index":d.zIndexOut,opacity:d.opacityOut,"-webkit-animation-duration":d.animationDuration,"-moz-animation-duration":d.animationDuration,"-ms-animation-duration":d.animationDuration,"animation-duration":d.animationDuration};c.css(m),a(c),r.click(function(n){n.preventDefault(),o("body, html").css({overflow:"auto"}),d.beforeClose(),c.hasClass(d.modalTarget+"-on")&&(c.removeClass(d.modalTarget+"-on"),c.addClass(d.modalTarget+"-off")),c.hasClass(d.modalTarget+"-off")&&c.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",e),c.css("overflow-y","hidden").slideUp(),l.css("overflow-y","hidden").fadeOut()})}}(jQuery);

/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/
(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this);

// jQuery Detect Swipe (replacing TouchWipe)
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function e(){this.removeEventListener("touchmove",f),this.removeEventListener("touchend",e),d=!1}function f(f){if(a.detectSwipe.preventDefault&&f.preventDefault(),d){var k,g=f.touches[0].pageX,h=f.touches[0].pageY,i=b-g,j=c-h;Math.abs(i)>=a.detectSwipe.threshold?k=i>0?"left":"right":Math.abs(j)>=a.detectSwipe.threshold&&(k=j>0?"up":"down"),k&&(e.call(this),a(this).trigger("swipe",k).trigger("swipe"+k))}}function g(a){1==a.touches.length&&(b=a.touches[0].pageX,c=a.touches[0].pageY,d=!0,this.addEventListener("touchmove",f,!1),this.addEventListener("touchend",e,!1))}function h(){this.addEventListener&&this.addEventListener("touchstart",g,!1)}a.detectSwipe={version:"2.1.2",enabled:"ontouchstart"in document.documentElement,preventDefault:!0,threshold:20};var b,c,d=!1;a.event.special.swipe={setup:h},a.each(["left","up","down","right"],function(){a.event.special["swipe"+this]={setup:function(){a(this).on("swipe",a.noop)}}})});

/**
 * photonic.js - Contains all custom JavaScript functions required by Photonic
 */
jQuery(document).ready(function($) {
//	var photonicBuyLink = "<a class='photonic-buy-link' href='{photonic_buy_link}' target='_blank' title='Buy'><div class='icon-buy'></div></a>";
	var photonicSocialIcons = "<div id='photonic-social'>" +
			"<a class='photonic-share-fb' href='http://www.facebook.com/sharer/sharer.php?u={photonic_share_link}&amp;title={photonic_share_title}&amp;picture={photonic_share_image}' target='_blank' title='Share on Facebook'><div class='icon-facebook'></div></a>" +
			"<a class='photonic-share-twitter' href='https://twitter.com/share?url={photonic_share_link}&amp;text={photonic_share_title}' target='_blank' title='Share on Twitter'><div class='icon-twitter'></div></a>" +
			"<a class='photonic-share-googleplus' href='https://plus.google.com/share?url={photonic_share_link}' target='_blank' title='Share on Google+'><div class='icon-googleplus'></div></a>" +
			"<a class='photonic-share-pinterest' data-pin-do='buttonPin' href='https://www.pinterest.com/pin/create/button/?url={photonic_share_link}&media={photonic_share_image}&description={photonic_share_title}' data-pin-custom='true'><div class='icon-pinterest'></div></a>" +
//			photonicBuyLink +
		"</div>";

	var deep = location.hash, lastDeep, supportsSVG = !! document.createElementNS && !! document.createElementNS( 'http://www.w3.org/2000/svg', 'svg').createSVGRect;
	var photonicLightboxList = {};
	var isOldIE = $('body').hasClass('photonic-ie');

	window.photonicAddSocial = function(selector, shareable) {
		if ((Photonic_JS.social_media == undefined || Photonic_JS.social_media == '') && shareable['buy'] == undefined) {
			return;
		}
		$('#photonic-social').remove();
		if (location.hash != '') {
			var social = photonicSocialIcons.replace(/\{photonic_share_link\}/g, encodeURIComponent(shareable['url'])).
				replace(/\{photonic_share_title\}/g, encodeURIComponent(shareable['title'])).
				replace(/\{photonic_share_image\}/g, encodeURIComponent(shareable['image']));

			$(selector).append(social);
			if (Photonic_JS.social_media == undefined || Photonic_JS.social_media == '') {
				$('.photonic-share-fb').remove();
				$('.photonic-share-twitter').remove();
				$('.photonic-share-googleplus').remove();
				$('.photonic-share-pinterest').remove();
			}

			if (!supportsSVG) {
				var icon = $('#photonic-social div');
				var bg = icon.css('background-image');
				bg = bg.replace( 'svg', 'png' );
				icon.css({'background-image': bg});
			}
		}
	};

	window.photonicHtmlDecode = function(value){
		return $('<div/>').html(value).text();
	};

	window.photonicFormatFancyBoxTitle = function(title, currentArray, currentIndex, currentOpts) {
		if ($(currentArray[currentIndex]).data('title') != undefined && $(currentArray[currentIndex]).data('title') != '') {
			return $(currentArray[currentIndex]).data('title');
		}
		return title;
	};

	window.photonicGetDeep = function() {
		return lastDeep != undefined ? lastDeep : (deep.length > 1 ? deep : location.hash);
	};

	window.photonicSetHash = function(a) {
		if (Photonic_JS.deep_linking == undefined || Photonic_JS.deep_linking == 'none') {
			return;
		}

		var hash = $.type(a) == 'string' ? a : $(a).data('photonicDeep');
		if (hash == undefined) {
			return;
		}

		if (typeof(window.history.pushState) == 'function' && Photonic_JS.deep_linking == 'yes-history') {
			window.history.pushState({}, document.title, '#' + hash);
		}
		else if (typeof(window.history.replaceState) == 'function' && Photonic_JS.deep_linking == 'no-history') {
			window.history.replaceState({}, document.title, '#' + hash);
		}
		else {
			document.location.hash = hash;
		}
	};

	window.photonicUnsetHash = function() {
		lastDeep = (lastDeep == undefined || deep != '') ? location.hash : lastDeep;
		if (window.history && 'replaceState' in window.history) {
			history.replaceState({}, document.title, location.href.substr(0, location.href.length-location.hash.length));
		}
		else {
			window.location.hash = '';
		}
	};

	window.photonicGetImageSize = function(url, baseline){
		return new Promise(function(resolve){
			var image = document.createElement('img');

			// place a listener on it
			image.addEventListener( "load", function () {
				// retrieve dimensions
				var height = this.height;
				var width = this.width;

				var imageAspectRatio = this.width / this.height;
				var baseAspectRatio = baseline.width / baseline.height;

				var newWidth, newHeight;
				if (baseAspectRatio > imageAspectRatio) {
					// Window is wider than it needs to be ... constrain by window height
					newHeight = baseline.height;
					newWidth = width * newHeight / height;
				}
				else {
					// Window is narrower than it needs to be ... constrain by window width
					newWidth = baseline.width;
					newHeight = height * newWidth / width;
				}

				// send back result
				resolve({
					height : height,
					width : width,
					newHeight: newHeight,
					newWidth: newWidth
				});
			}, false );

			// start download meta-datas
			image.src = url;
		});
	};

	window.photonicShowLoading = function() {
		var loading = $('.photonic-loading');
		if (loading.length > 0) {
			loading = loading[0];
		}
		else {
			loading = document.createElement('div');
		}
		loading.className = 'photonic-loading';
		$(loading).appendTo($('body')).show();
	};

	window.photonicInitializePasswordPrompter = function(selector) {
		$(selector).dialog({
			autoOpen: false,
			modal: true,
			width: 400,
			height: 225,
			dialogClass: 'photonic-jq',
			closeText: '&times;'
		});
	};

	window.photonicLinearMin = function(arr) {
		var computed, result, x, _i, _len;
		for (_i = 0, _len = arr.length; _i < _len; _i++) {
			x = arr[_i];
			computed = x[0];
			if (!result || computed < result.computed) {
				result = {
					value: x,
					computed: computed
				};
			}
		}
		return result.value;
	};

	window.photonicLinearPartition = function(seq, k) {
		var ans, i, j, m, n, solution, table, x, y, _i, _j, _k, _l;
		n = seq.length;
		if (k <= 0) {
			return [];
		}
		if (k > n) {
			return seq.map(function(x) {
				return [x];
			});
		}
		table = (function() {
			var _i, _results;
			_results = [];
			for (y = _i = 0; 0 <= n ? _i < n : _i > n; y = 0 <= n ? ++_i : --_i) {
				_results.push((function() {
					var _j, _results1;
					_results1 = [];
					for (x = _j = 0; 0 <= k ? _j < k : _j > k; x = 0 <= k ? ++_j : --_j) {
						_results1.push(0);
					}
					return _results1;
				})());
			}
			return _results;
		})();
		solution = (function() {
			var _i, _ref, _results;
			_results = [];
			for (y = _i = 0, _ref = n - 1; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
				_results.push((function() {
					var _j, _ref1, _results1;
					_results1 = [];
					for (x = _j = 0, _ref1 = k - 1; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
						_results1.push(0);
					}
					return _results1;
				})());
			}
			return _results;
		})();
		for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
			table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
		}
		for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
			table[0][j] = seq[0];
		}
		for (i = _k = 1; 1 <= n ? _k < n : _k > n; i = 1 <= n ? ++_k : --_k) {
			for (j = _l = 1; 1 <= k ? _l < k : _l > k; j = 1 <= k ? ++_l : --_l) {
				m = photonicLinearMin((function() {
					var _m, _results;
					_results = [];
					for (x = _m = 0; 0 <= i ? _m < i : _m > i; x = 0 <= i ? ++_m : --_m) {
						_results.push([Math.max(table[x][j - 1], table[i][0] - table[x][0]), x]);
					}
					return _results;
				})());
				table[i][j] = m[0];
				solution[i - 1][j - 1] = m[1];
			}
		}
		n = n - 1;
		k = k - 2;
		ans = [];
		while (k >= 0) {
			ans = [
				(function() {
					var _m, _ref, _ref1, _results;
					_results = [];
					for (i = _m = _ref = solution[n - 1][k] + 1, _ref1 = n + 1; _ref <= _ref1 ? _m < _ref1 : _m > _ref1; i = _ref <= _ref1 ? ++_m : --_m) {
						_results.push(seq[i]);
					}
					return _results;
				})()
			].concat(ans);
			n = solution[n - 1][k];
			k = k - 1;
		}
		return [
			(function() {
				var _m, _ref, _results;
				_results = [];
				for (i = _m = 0, _ref = n + 1; 0 <= _ref ? _m < _ref : _m > _ref; i = 0 <= _ref ? ++_m : --_m) {
					_results.push(seq[i]);
				}
				return _results;
			})()
		].concat(ans);
	};

	window.photonicPart = function(seq, k) {
		if (k <= 0) {
			return [];
		}
		while (k) {
			try {
				return photonicLinearPartition(seq, k--);
			} catch (_error) {}
		}
	};

	window.photonicDisplayLevel2 = function(provider, type, args) {
		var identifier = args['panel_id'].substr(('photonic-' + provider + '-' + type + '-thumb-').length);
		var panel = '#photonic-' + provider + '-panel-' + identifier;

		if ($(panel).length == 0) {
			if ($('#' + args['panel_id']).hasClass('photonic-' + provider + '-passworded')) {
				var prompter = '#photonic-' + provider + '-' + type + '-prompter-' + identifier;
				photonicInitializePasswordPrompter(prompter);
				$(prompter).dialog('open');
			}
			else {
				photonicShowLoading();
				photonicProcessRequest(provider, type, identifier, args);
			}
		}
		else {
			photonicShowLoading();
			photonicRedisplayPopupContents(provider, identifier, panel, args);
		}
	};

	window.photonicProcessRequest = function(provider, type, identifier, args) {
		args['action'] = 'photonic_display_level_2_contents';
		$.post(Photonic_JS.ajaxurl, args, function(data) {
			if (data == Photonic_JS.password_failed) {
				$('.photonic-loading').hide();
				var prompter = '#photonic-' + provider + '-' + type + '-prompter-' + identifier;
				$(prompter).dialog('open');
			}
			else {
				if ('show' == args['popup']) {
					photonicDisplayPopup(data, provider, type, identifier);
				}
				else {
					if (data != '') {
						photonicBypassPopup(data);
					}
					else {
						$('.photonic-loading').hide();
					}
				}
			}
		});
	};

	window.photonicProcessL3Request = function(clicked, container, args) {
		args['action'] = 'photonic_display_level_3_contents';
		photonicShowLoading();
		$.post(Photonic_JS.ajaxurl, args, function(data){
			var insert = $(data);
			insert.insertAfter($(container));
			var layout = insert.find('.photonic-level-2-container');
			if (layout.hasClass('photonic-random-layout')) {
				photonicJustifiedGridLayout(false);
			}
			else if (layout.hasClass('photonic-mosaic-layout')) {
				photonicMosaicLayout(false);
			}
			else if (layout.hasClass('photonic-masonry-layout')) {
				photonicMasonryLayout(false);
			}
			insert.find('.photonic-level-2').css({'display': 'inline-block'});
			$('.photonic-loading').hide();
			clicked.removeClass('photonic-level-3-expand-plus').addClass('photonic-level-3-expand-up').attr('title', Photonic_JS.minimize_panel == undefined ? 'Hide' : Photonic_JS.minimize_panel);
		});
	};

	window.photonicMoveHTML5External = function() {
		var $videos = $('#photonic-html5-external-videos');
		$videos = $videos.length ? $videos : $('<div style="display:none;" id="photonic-html5-external-videos"></div>').appendTo(document.body);
		//$('.photonic-html5-external').removeClass('photonic-html5-external').appendTo($videos);
		$('.photonic-html5-external').each(function() {
			$(this).siblings('a.photonic-launch-gallery').addClass('photonic-external-video');
			$(this).removeClass('photonic-html5-external').appendTo($videos);
		});
	};
	photonicMoveHTML5External();

	window.photonicInitializePrettyPhoto = function(e) {
		$("a[rel^='photonic-prettyPhoto']").prettyPhoto({
			theme: Photonic_JS.pphoto_theme,
			autoplay_slideshow: Photonic_JS.slideshow_mode,
			slideshow: Photonic_JS.slideshow_interval,
			show_title: false,
			social_tools: '',
			deeplinking: false,
			changepicturecallback: function() {
				var img = $('#fullResImage');
				if (e != undefined && e['deep'] == undefined) {
					var clicked_thumb = $(e.target).parent();
					var clicked_div = $(clicked_thumb).parent();
					var current_stream = $(clicked_div).parent();

					var active_node = $(current_stream).find('a[href="' + $(img).attr('src') + '"]');

					if (active_node.length == 0) {
						$.each($('div.title-display-regular, div.title-display-below, div.title-display-tooltip, div.title-display-hover-slideup-show, div.title-display-slideup-stick, '+
							'ul.title-display-regular, ul.title-display-below, ul.title-display-tooltip, ul.title-display-hover-slideup-show, ul.title-display-slideup-stick'), function(key, value) {
							active_node = $(this).find('a[href="' + $(img).attr('src') + '"]');
							if (active_node.length != 0) {
								return false;
							}
						});
					}

					photonicSetHash(active_node);
				}
				else if (e['deep'] != undefined) {
					var idx = e['images'].indexOf($(img).attr('src'));
					if (idx > -1) {
						photonicSetHash(e['deep'][idx]);
					}
				}

				var shareable = {
					'url': location.href,
					'title': $('.pp_description').text(),
					'image': img.attr('src')
				};
				photonicAddSocial('#pp_full_res', shareable);

				photonicPPSwipe();
			},
			callback: function() {
				photonicUnsetHash();
			}
		});
	};

	window.photonicFancyboxSwipe = function(e) {
		$("#fancybox-wrap, .fancybox-wrap")
			.on('swipeleft', function() { $.fancybox.next(); })
			.on('swiperight', function() { $.fancybox.prev(); });
	};

	
	$('ul.photonic-slideshow-content').each(function() {
		var $slideshow = $(this);
		var slideAdjustment = Photonic_JS.slide_adjustment == undefined ? 'adapt-height-width' : Photonic_JS.slide_adjustment;
		var fadeMode = $slideshow.data('photonicFx') == 'fade' && ($slideshow.data('photonicLayout') == 'strip-below') &&
			($slideshow.data('photonicColumns') == 'auto' || $slideshow.data('photonicColumns') ==  '');

		var itemCount = ($slideshow.data('photonicColumns') == 'auto' || $slideshow.data('photonicColumns') ==  '' || isNaN(parseInt($slideshow.data('photonicColumns')))) ? 1 : parseInt($slideshow.data('photonicColumns'));
		$slideshow.waitForImages(function() {
			$slideshow.lightSlider({
				gallery: $slideshow.data('photonicLayout') != 'no-strip'  && $slideshow.data('photonicStripStyle') == 'thumbs',
				pager: $slideshow.data('photonicLayout') != 'no-strip',
				vertical: $slideshow.data('photonicLayout') == 'strip-right' || $slideshow.data('photonicLayout') == 'strip-left',
				item: itemCount,
				auto: Photonic_JS.slideshow_autostart,
				loop: true,
				currentPagerPosition: 'middle',
				mode: fadeMode ? 'fade' : 'slide',
				speed: $slideshow.data('photonicSpeed'),
				pauseOnHover: $slideshow.data('photonicPause'),
				pause: $slideshow.data('photonicTimeout'),
				adaptiveHeight: slideAdjustment == 'adapt-height' || slideAdjustment == 'adapt-height-width',
				autoWidth: slideAdjustment == 'start-next',
				controls: $slideshow.data('photonicControls') == 'show',
				responsive : [
					{
						breakpoint:800,
						settings: {
							item: itemCount != 1 ? 2 : 1,
							slideMove: 1
						}
					},
					{
						breakpoint:480,
						settings: {
							item: 1,
							slideMove: 1
						}
					}
				]
			});

			var above = $slideshow.parents('.photonic-slideshow.strip-above');
			if (above.length > 0) {
				above = $(above[0]);
				var gallery = above.find('.lSSlideOuter');
				gallery.find('.lSGallery').insertBefore(gallery.find('.lSSlideWrapper'));
			}
		});
	});

	if (Photonic_JS.slideshow_library == 'fancybox' && Photonic_JS.slideshow_mode) {
		setInterval($.fancybox.next, parseInt(Photonic_JS.slideshow_interval, 10));
	}

	if (Photonic_JS.lightbox_for_all) {
		if (Photonic_JS.slideshow_library == 'prettyphoto') {
			$('a[href]').filter(function() {
				return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test( $(this).attr('href'));
			}).filter(function() {
				var res = new RegExp('photonic-prettyPhoto').test($(this).attr('rel'));
				return !res;
			}).attr("rel", 'photonic-prettyPhoto');
		}
		else if (Photonic_JS.slideshow_library == 'imagelightbox' || Photonic_JS.slideshow_library == 'lightgallery') {
			$('a[href]').filter(function() {
				return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test( $(this).attr('href'));
			}).filter(function() {
				var res = new RegExp('photonic-launch-gallery').test($(this).attr('class'));
				return !res;
			}).attr("rel", 'photonic-' + Photonic_JS.slideshow_library);
		}
		else if (Photonic_JS.slideshow_library == 'lightcase') {
			$('a[href]').filter(function() {
				return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test( $(this).attr('href'));
			}).filter(function() {
				var res = new RegExp('photonic-launch-gallery').test($(this).attr('class'));
				return !res;
			}).attr("data-rel", 'photonic-lightcase');
		}
		else if (Photonic_JS.slideshow_library == 'featherlight') {
			$('a[href]').filter(function() {
				return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test( $(this).attr('href'));
			}).filter(function() {
				var res = new RegExp('photonic-launch-gallery').test($(this).attr('class'));
				return !res;
			}).addClass("photonic-featherlight-solo");
		}
		else if (Photonic_JS.slideshow_library == 'fancybox' || Photonic_JS.slideshow_library == 'fancybox2' || Photonic_JS.slideshow_library == 'fancybox3'){
			$('a[href]').filter(function() {
				return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test( $(this).attr('href'));
			}).addClass("launch-gallery-fancybox").addClass(Photonic_JS.slideshow_library);
		}
		else {
			$('a[href]').filter(function() {
				return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test( $(this).attr('href'));
			}).addClass("launch-gallery-" + Photonic_JS.slideshow_library).addClass(Photonic_JS.slideshow_library);
		}
	}

	window.photonicGetVideoSize = function(url, baseline){
		return new Promise(function(resolve){
			// create the video element
			var video = document.createElement('video');

			// place a listener on it
			video.addEventListener( "loadedmetadata", function () {
				// retrieve dimensions
				var height = this.videoHeight;
				var width = this.videoWidth;

				var videoAspectRatio = this.videoWidth / this.videoHeight;
				var baseAspectRatio = baseline.width / baseline.height;

				var newWidth, newHeight;
				if (baseAspectRatio > videoAspectRatio) {
					// Window is wider than it needs to be ... constrain by window height
					newHeight = baseline.height;
					newWidth = width * newHeight / height;
				}
				else {
					// Window is narrower than it needs to be ... constrain by window width
					newWidth = baseline.width;
					newHeight = height * newWidth / width;
				}

				// send back result
				resolve({
					height : height,
					width : width,
					newHeight: newHeight,
					newWidth: newWidth
				});
			}, false );

			// start download meta-datas
			video.src = url;
		});
	};

	if (Photonic_JS.lightbox_for_videos) {
		var photonicVideoIndex = 1;
		window.photonicCatchYouTubeURL = function(url) {
			var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
			var match = url.match(regExp);
			if (match && match[2].length == 11) {
				return match[2];
			}
		};

		window.photonicCatchVimeoURL = function(url) {
			var regExp = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/;
			var match = url.match(regExp);
			if (match) {
				return match[1];
			}
		};

		$('a[href]').each(function() {
			var regular, embed;
			if (photonicCatchYouTubeURL($(this).attr('href')) !== undefined) {
				regular = 'https://youtube.com/watch?v=' + photonicCatchYouTubeURL($(this).attr('href'));
				embed = 'https://youtube.com/embed/' + photonicCatchYouTubeURL($(this).attr('href'));
			}
			else if (photonicCatchVimeoURL($(this).attr('href')) !== undefined) {
				regular = 'https://vimeo.com/' + photonicCatchVimeoURL($(this).attr('href'));
				embed = 'https://player.vimeo.com/video/' + photonicCatchVimeoURL($(this).attr('href'));
			}

			if (regular !== undefined) {
				$(this).addClass(Photonic_JS.slideshow_library + "-video");

				//Change to embed
				if (Photonic_JS.slideshow_library == 'fancybox' || Photonic_JS.slideshow_library == 'fancybox2' || Photonic_JS.slideshow_library == 'featherlight' ||
					Photonic_JS.slideshow_library == 'lightcase' || Photonic_JS.slideshow_library == 'colorbox') {
					$(this).attr('href', embed);

					if (Photonic_JS.slideshow_library == 'lightcase') { $(this).attr("data-rel", 'photonic-lightcase-video'); }
					else if (Photonic_JS.slideshow_library == 'featherlight') { $(this).attr("data-featherlight", 'iframe').addClass('featherlight-video'); }
				}
				// Change to regular
				else if (Photonic_JS.slideshow_library == 'lightgallery' || Photonic_JS.slideshow_library == 'prettyphoto' ||
						Photonic_JS.slideshow_library == 'swipebox' || Photonic_JS.slideshow_library == 'strip') {
					$(this).attr('href', regular);

					if (Photonic_JS.slideshow_library == 'prettyphoto') { $(this).attr("rel", 'photonic-prettyPhoto-video'); }
					else if (Photonic_JS.slideshow_library == 'strip') { $(this).addClass('strip'); }
				}
				// Don't care: Fancybox3 - it supports everything!
			}

			if (Photonic_JS.slideshow_library == 'colorbox' || Photonic_JS.slideshow_library == 'fancybox' || Photonic_JS.slideshow_library == 'fancybox2' ||
					Photonic_JS.slideshow_library == 'fancybox3' || Photonic_JS.slideshow_library == 'featherlight' || Photonic_JS.slideshow_library == 'lightcase' ||
					Photonic_JS.slideshow_library == 'lightgallery' || Photonic_JS.slideshow_library == 'prettyphoto' || Photonic_JS.slideshow_library == 'swipebox') {
				var html5 = $(this).attr('href').match(new RegExp(/(\.mp4|\.webm|\.ogg)/i));
				var css = $(this).attr('class');
				css = css !== undefined && css.includes('photonic-launch-gallery');
				if (html5 !== null && !css) {
					$(this).addClass(Photonic_JS.slideshow_library + "-html5-video");
					var $videos = $('#photonic-html5-videos');
					if (Photonic_JS.slideshow_library == 'lightcase') { $(this).attr("data-rel", 'photonic-html5-video'); }
					else if (Photonic_JS.slideshow_library == 'featherlight') { $(this).attr('data-featherlight', '<video controls preload="none"><source src="' + $(this).attr('href') + '" type="video/mp4">Your browser does not support HTML5 video.</video>'); }
					else if (Photonic_JS.slideshow_library == 'colorbox' || Photonic_JS.slideshow_library == 'fancybox' || Photonic_JS.slideshow_library == 'fancybox2' ||
						Photonic_JS.slideshow_library == 'lightgallery' || Photonic_JS.slideshow_library == 'swipebox') {
						$videos = $videos.length ? $videos : $('<div style="display:none;" id="photonic-html5-videos"></div>').appendTo(document.body);
						if (Photonic_JS.slideshow_library == 'lightgallery') {
							$videos.append('<div id="photonic-html5-video-' + photonicVideoIndex + '"><video class="lg-video-object lg-html5" controls preload="none"><source src="' + $(this).attr('href') + '" type="video/mp4">Your browser does not support HTML5 video.</video></div>');
							$(this).attr('data-html5-href', $(this).attr('href'));
							$(this).attr({
								href: '',
								'data-html': '#photonic-html5-video-' + photonicVideoIndex,
								'data-sub-html': $(this).attr('title')
							});
						}
						else {
							$videos.append('<div id="photonic-html5-video-' + photonicVideoIndex + '"><video controls preload="none"><source src="' + $(this).attr('href') + '" type="video/mp4">Your browser does not support HTML5 video.</video></div>');
							$(this).attr('data-html5-href', $(this).attr('href'));
							$(this).attr('href', '#photonic-html5-video-' + photonicVideoIndex);
						}
					}
					photonicVideoIndex++;
				}
			}
		});
	}

	if (Photonic_JS.slideshow_library == 'fancybox' || Photonic_JS.slideshow_library == 'fancybox2' || Photonic_JS.slideshow_library == 'fancybox3') {
		window.photonicInitializeFancybox = function(selector, group) {
			if (Photonic_JS.slideshow_library == 'fancybox') {
				$(document).on('click', 'a.launch-gallery-fancybox', function(e) {
					e.preventDefault();
					var videoID = $(this).attr('href');
					var videoURL = $(this).attr('data-html5-href');
					var $vclone;

					$('a.launch-gallery-fancybox').fancybox({
						overlayShow		:	true,
						overlayColor	:	'#000',
						overlayOpacity	: 0.8,
						cyclic			: true,
						titleShow		: Photonic_JS.fbox_show_title,
						titleFormat		: photonicFormatFancyBoxTitle,
						titlePosition	: Photonic_JS.fbox_title_position,
						type : $(this).parent().hasClass('photonic-google-image') ? 'image' : false,
						autoScale: true,
						scrolling: 'no',
						onStart: function(selectedArray, selectedIndex, selectedOpts) {
							var currentItem = selectedArray[selectedIndex];
							videoID = $(currentItem).attr('href');
							videoURL = $(currentItem).attr('data-html5-href');
						},
						onClosed	: function() {
							$('#photonic-html5-external-videos').append($vclone);
							$('.fancybox-inline-tmp').remove();
						},
						onComplete		: function() {
							if (videoURL !== undefined) {
								$vclone = $(videoID).clone(true);
								photonicGetVideoSize(videoURL, {height: window.innerHeight * 0.85, width: window.innerWidth * 0.85}).then(function(dimensions) {
									$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
									$(videoID).css({width: dimensions.newWidth, height: dimensions.newHeight});
									$('#fancybox-content').css({width: dimensions.newWidth, height: dimensions.newHeight});
									$('#fancybox-wrap').css({width: 'auto', height: 'auto' });
									$.fancybox.resize();
								});
							}
							photonicFancyboxSwipe(e);
						}
					});
					this.click();
				});

				$('a.fancybox-video').fancybox({ type: 'iframe' });
				$('a.fancybox-html5-video').each(function() {
					var videoID = $(this).attr('href');
					var videoURL = $(this).attr('data-html5-href');
					var $vclone;
					$(this).fancybox({
						overlayShow		:	true,
						overlayColor	:	'#000',
						overlayOpacity	: 0.8,
						type: 'inline',
						titleShow		: Photonic_JS.fbox_show_title,
						titleFormat		: photonicFormatFancyBoxTitle,
						titlePosition	: Photonic_JS.fbox_title_position,
						autoScale: true,
						scrolling: 'no',
						onStart: function() {
							$vclone = $(videoID).clone(true);
							photonicGetVideoSize(videoURL, {height: window.innerHeight * 0.85, width: window.innerWidth * 0.85}).then(function(dimensions) {
								$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
								$(videoID).css({width: dimensions.newWidth, height: dimensions.newHeight});
								$('#fancybox-content').css({width: dimensions.newWidth + 'px', height: dimensions.newHeight + 'px'});
								$('#fancybox-wrap').css({width: (dimensions.newWidth + 20) + 'px', height: (dimensions.newHeight + 20) + 'px'});
							});
						},
						onClosed	: function() {
							$('#photonic-html5-videos').append($vclone);
							$('.fancybox-inline-tmp').remove();
						},
						onComplete: function() {
							$.fancybox.resize();
						}
					});
				});
			}
			else if (Photonic_JS.slideshow_library == 'fancybox2' && $.fancybox) {
				$('a.launch-gallery-fancybox').fancybox({
					wrapCSS: 'photonic-fancybox',
					autoPlay: Photonic_JS.slideshow_mode,
					playSpeed: parseInt(Photonic_JS.slideshow_interval, 10),
					//type: 'image',
					autoScale: true,
					autoResize: true,
					scrolling: 'no',
					afterShow: function(current, previous) {
						photonicFancyboxSwipe();
						var shareable = {
							'url': location.href,
							'title': photonicHtmlDecode(this.title),
							'image': $(this.element).attr('href')
						};
						photonicAddSocial('.fancybox-title', shareable);

						var videoID = $(this.element).attr('href');
						var videoURL = $(this.element).attr('data-html5-href');
						if (videoURL !== undefined) {
							photonicGetVideoSize(videoURL, {height: window.innerHeight * 0.85 - 30 - 40, width: window.innerWidth * 0.85 - 30}).then(function(dimensions) {
								$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
								$(videoID).css({width: dimensions.newWidth, height: dimensions.newHeight});
								$('.fancybox-skin .fancybox-inner').css({overflow: 'hidden'});
							});
						}
					},
					beforeLoad: function() {
						if (Photonic_JS.fbox_show_title) {
							this.title = $(this.element).data('title');
						}
						photonicSetHash(this.element);
					},
					afterClose: function() {
						photonicUnsetHash();
					},
					helpers: {
						title: {
							type: Photonic_JS.fbox_title_position
						},
						thumbs	: {
							width	: 50,
							height	: 50
						},
						overlay: {
							css: {
								'background': 'rgba(0, 0, 0, 0.8)'
							}
						},
						buttons	: {}
					}
				});
				$('a.fancybox2-video').fancybox({type: 'iframe'});
				$('a.fancybox2-html5-video').each(function() {
					var videoID = $(this).attr('href');
					var videoURL = $(this).attr('data-html5-href');
					$(this).fancybox({
						type: 'inline',
						wrapCSS: 'photonic-fancybox',
						autoScale: true,
						scrolling: 'no',
						beforeLoad: function() {
							photonicGetVideoSize(videoURL, {height: window.innerHeight - 30 - 40, width: window.innerWidth - 30}).then(function(dimensions) {
								$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
								$(videoID).css({width: dimensions.newWidth, height: dimensions.newHeight});
								$('.fancybox-skin .fancybox-inner').css({overflow: 'hidden'});
							});
						},
						onComplete: function() {
							$.fancybox.update();
						}
					});
				});
			}
			else if (Photonic_JS.slideshow_library == 'fancybox3' && $.fancybox) {
				var lightbox_selector;
				if (group !== null && group !== undefined) {
					lightbox_selector = 'a[data-fancybox="' + group + '"]';
				}
				else if (selector !== null && selector !== undefined) {
					lightbox_selector = selector + ' a.launch-gallery-fancybox';
				}
				else {
					lightbox_selector = 'a.launch-gallery-fancybox';
				}

				$(lightbox_selector).fancybox({
					defaultType: 'image',
					hash: false,
					caption: function(instance, item) {
						return $(this).data('title');
					},
					slideShow: {
						autoStart: Photonic_JS.slideshow_mode,
						speed: parseInt(Photonic_JS.slideshow_interval, 10)
					},
					thumbs: {
						autoStart: Photonic_JS.fb3_thumbs == 1,
						hideOnClose: true
					},
					fullScreen: {
						autoStart: Photonic_JS.fb3_fullscreen == 1
					},
					afterShow: function(instance, slide) {
						var shareable = {
							'url': location.href,
							'title': photonicHtmlDecode(this.title),
							'image': $(this.element).attr('href')
						};
						photonicAddSocial('.fancybox-caption', shareable);
					},
					beforeShow: function() {
						var videoID = this.src;
						var videoURL = this.opts.html5Href;
						if (videoURL !== undefined) {
							photonicGetVideoSize(videoURL, {height: window.innerHeight * 0.85, width: window.innerWidth * 0.85}).then(function(dimensions) {
								$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
								$(videoID).css({width: dimensions.newWidth, height: dimensions.newHeight});
							});
						}
						photonicSetHash(this.opts.photonicDeep);
					},
					afterClose: function() {
						photonicUnsetHash();
					}
				});

				$('a.fancybox3-video,a.fancybox3-html5-video').fancybox({
					youtube: { }
				});
			}
		};

		photonicInitializeFancybox();
	}

	if ($.prettyPhoto) {
		$(document).on('click', "a[rel^='photonic-prettyPhoto']", function(e) {
			e.preventDefault();
			photonicInitializePrettyPhoto(e);
			this.click();
		});

		$("a[rel^='photonic-prettyPhoto-video'],a[rel^='photonic-prettyPhoto-html5-video']").prettyPhoto({
			theme: Photonic_JS.pphoto_theme,
			autoplay_slideshow: Photonic_JS.slideshow_mode,
			slideshow: Photonic_JS.slideshow_interval,
			show_title: false,
			social_tools: '',
			deeplinking: false
		});
	}

	if ($.colorbox) {
		$(document).on('click', 'a.launch-gallery-colorbox', function(e) {
			e.preventDefault();
			$('a.launch-gallery-colorbox').not('.photonic-external-video').each(function() {
				$(this).colorbox({
					opacity: 0.8,
					maxWidth: '95%',
					maxHeight: '95%',
					photo: true,
					title: $(this).data('title'),
					slideshow: Photonic_JS.slideshow_mode,
					slideshowSpeed: Photonic_JS.slideshow_interval,
					onLoad: function() {
						photonicSetHash(this);
						var shareable = {
							'url': location.href,
							'title': photonicHtmlDecode($(this).data('title')),
							'image': $(this).attr('href')
						};
						photonicAddSocial('#cboxContent', shareable);
					},
					onClosed: function() {
						photonicUnsetHash();
					}
				});
			});

			$('a.launch-gallery-colorbox.photonic-external-video').each(function() {
				$(this).colorbox({
					opacity: 0.8,
					maxWidth: '90%',
					maxHeight: '90%',
					inline: true,
					title: $(this).data('title'),
					slideshow: Photonic_JS.slideshow_mode,
					slideshowSpeed: Photonic_JS.slideshow_interval,
					scrolling: false,
					onLoad: function() {
						photonicSetHash(this);
						var shareable = {
							'url': location.href,
							'title': photonicHtmlDecode($(this).data('title')),
							'image': $(this).attr('href')
						};
						photonicAddSocial('#cboxContent', shareable);
						var videoID = $(this).attr('href');
						photonicGetVideoSize($(this).attr('data-html5-href'), {height: window.innerHeight * 0.90 - 50, width: window.innerWidth * 0.90}).then(function(dimensions) {
							$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
							$(videoID).css({width: dimensions.newWidth, height: dimensions.newHeight});
						});
					},
					onComplete: function() {
						$(this).colorbox.resize({innerWidth: $($(this).attr('href')).width(), innerHeight: $($(this).attr('href')).height()});
					},
					onClosed: function() {
						photonicUnsetHash();
					}
				});
			});
			this.click();
		});

		$('.colorbox-video').colorbox({
			opacity: 0.8,
			maxWidth: '95%',
			maxHeight: '95%',
			title: $(this).data('title'),
			iframe: true, innerWidth:640, innerHeight:390, scrolling: false
		});

		$('a.colorbox-html5-video').colorbox({
			opacity: 0.8,
			maxWidth: '95%',
			maxHeight: '95%',
			title: $(this).data('title'),
			inline: true, href: $(this).attr('href'),
			scrolling: false,
			onLoad: function() {
				var videoID = $(this).attr('href');
				photonicGetVideoSize($(this).attr('data-html5-href'), {height: window.innerHeight * 0.95 - 50, width: window.innerWidth * 0.95}).then(function(dimensions) {
					$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
					$(videoID).css({width: dimensions.newWidth, height: dimensions.newHeight});
				});
			},
			onComplete: function() {
				$(this).colorbox.resize({innerWidth: $($(this).attr('href')).width(), innerHeight: $($(this).attr('href')).height()});
			}
		});

		$(document).bind('cbox_open', function(){
			$("#colorbox")
				.on('swipeleft', function() { $.colorbox.next(); })
				.on('swiperight', function() {$.colorbox.prev(); } );
		});
	}

	if ($.swipebox) {
		window.photonicSwipeboxChangeSlide = function(thumb, idx) {
			if (thumb != null) {
				var rel = $(thumb).attr('rel');
				var all_thumbs = $('[rel="' + rel + '"]');
				var slide = all_thumbs[idx];
				photonicSetHash(slide);

				var videoID = $(slide).attr('href');
				var videoURL = $(slide).attr('data-html5-href');
				if (videoURL !== undefined) {
					photonicGetVideoSize(videoURL, {width: window.innerWidth, height: window.innerHeight - 50}).then(function(dimensions) {
						$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
						$('.swipebox-inline-container ' + videoID).find('video').attr({ width: dimensions.newWidth, height: dimensions.newHeight });
					});
				}

				var shareable = {
					'url': location.href,
					'title': photonicHtmlDecode($(slide).data('title')),
					'image': $(slide).attr('href')
				};
				photonicAddSocial('#swipebox-arrows', shareable);
			}
		};

		$('a.launch-gallery-swipebox').swipebox({
			hideBarsDelay: 0,
			removeBarsOnMobile: Photonic_JS.enable_swipebox_mobile_bars,
			currentThumb: null,
			videoURL: null,
			videoID: null,
			beforeOpen: function(e) {
				var evt = e || window.event;
				if (evt !== undefined) {
					var clicked = $(evt.target).parents('.launch-gallery-swipebox');
					if (clicked.length > 0) {
						this.currentThumb = clicked[0];
					}
					else {
						var all_matches = $('[data-photonic-deep="' + deep.substr(1) + '"]');
						if (all_matches.length > 0) {
							this.currentThumb = all_matches[0];
						}
					}
				}
				this.videoURL = $(this.currentThumb).attr('data-html5-href');
				this.videoID = $(this.currentThumb).attr('href');
			},
			afterOpen: function(idx) {
				photonicSwipeboxChangeSlide(this.currentThumb, idx);
			},
			prevSlide: function(idx) {
				photonicSwipeboxChangeSlide(this.currentThumb, idx);
			},
			nextSlide: function(idx) {
				photonicSwipeboxChangeSlide(this.currentThumb, idx);
			},
			afterClose: function() {
				photonicUnsetHash();
			}
		});

		$('a.swipebox-video').swipebox({
			hideBarsDelay: 0,
			removeBarsOnMobile: Photonic_JS.enable_swipebox_mobile_bars
		});

		$('a.swipebox-html5-video').swipebox({
			hideBarsDelay: 0,
			removeBarsOnMobile: Photonic_JS.enable_swipebox_mobile_bars,
			videoURL: null,
			videoID: null,
			beforeOpen: function(e) {
				this.videoURL = $(e.target).attr('data-html5-href');
				this.videoID = $(e.target).attr('href');

			},
			afterOpen: function() {
				var videoID = this.videoID;
				photonicGetVideoSize(this.videoURL, {width: window.innerWidth, height: window.innerHeight - 50}).then(function(dimensions) {
					$(videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
					$('.swipebox-inline-container ' + videoID).find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
				});
			}
		});
	}

	if (Photonic_JS.slideshow_library == 'imagelightbox') {
		window.photonicInitializeImageLightbox = function(selector) {
			$(selector).each(function() {
				var current = this;
				var lightbox_selector;
				var rel = $(current).find('a.launch-gallery-imagelightbox');
				if (rel.length > 0) {
					rel = $(rel[0]).attr('rel');
				}

				lightbox_selector = selector.indexOf('rel') > -1 ? selector : 'a[rel="' + rel + '"]';

				var photonicImageLightbox = $(lightbox_selector).imageLightbox({
					onLoadStart: function() {
						imageLightboxCaptionOff();
						imageLightboxLoadingOn();
					},
					onLoadEnd: function() {
						imageLightboxCaptionOn();
						$('#imagelightbox-loading').remove();
						$( '.imagelightbox-arrow' ).css( 'display', 'block' );
						var lightbox = $('#imagelightbox');
						var base = $(current).find('a[href="' + lightbox.attr('src') + '"]');
						photonicSetHash(base);
						var shareable = {
							'url': location.href,
							'title': photonicHtmlDecode($(base).data('title')),
							'image': lightbox.attr('src')
						};
						photonicAddSocial('#imagelightbox-overlay', shareable);
					},
					onStart: function() {
						$('<div id="imagelightbox-overlay"></div>').appendTo('body');
						imageLightboxArrowsOn(photonicImageLightbox, lightbox_selector);
						imageLightboxCloseButtonOn(photonicImageLightbox);
					},
					onEnd: function() {
						imageLightboxCaptionOff();
						$('#imagelightbox-overlay').remove();
						$('#imagelightbox-loading').remove();
						imageLightboxArrowsOff();
						imageLightboxCloseButtonOff();
						photonicUnsetHash();
					}
				});
				photonicLightboxList[lightbox_selector] = photonicImageLightbox;
			});
		};
		photonicInitializeImageLightbox('.photonic-standard-layout,.photonic-random-layout,.photonic-masonry-layout,.photonic-mosaic-layout');
		photonicInitializeImageLightbox('a[rel="photonic-imagelightbox"]');
	}

	if (Photonic_JS.slideshow_library == 'lightcase') {
		window.photonicInitializeLightcase = function(selector) {
			$(selector).each(function() {
				var current = this;
				var provider = $(current).data('photonicStreamProvider');
				var lightbox_selector;
				var rel = $(current).find('a.launch-gallery-lightcase');
				if (rel.length > 0) {
					rel = $(rel[0]).data('rel');
				}

				lightbox_selector = selector.indexOf('data-rel') > -1 ? selector : 'a[data-rel="' + rel + '"]';
				$(lightbox_selector).lightcase({
					transition: 'scrollHorizontal',
					//type: provider == '500px' ? 'image' : null,
					showSequenceInfo: false,
					slideshow: Photonic_JS.slideshow_mode,
					timeout: Photonic_JS.slideshow_interval,
					attrPrefix: '',
					caption: ' ',
					swipe: true,
					onStart: {
						getVideoSize: function() {
							var elem = this;
							var videoURL = $(elem).attr('data-html5-href');// || $(elem).attr('href');
							if (lightbox_selector.indexOf('photonic-html5-video') > -1 || videoURL !== undefined) {
								photonicGetVideoSize(videoURL === undefined ? $(elem).attr('href') : videoURL, {height: window.innerHeight * 0.8, width: 800 }).then(function(dimensions) {
									$(elem).attr('data-lc-options', '{"width": ' + Math.round(dimensions.newWidth) + ', "height": ' + Math.round(dimensions.newHeight) + '}');
									$('#lightcase-content').find('video').attr({ width: Math.round(dimensions.newWidth), height: Math.round(dimensions.newHeight)}).css({ width: Math.round(dimensions.newWidth), height: Math.round(dimensions.newHeight)});
									lightcase.resize({ width: Math.round(dimensions.newWidth), height: Math.round(dimensions.newHeight) });
								});
							}
						}
					},
					onFinish: {
						setHash: function() {
							photonicSetHash(this);
							var shareable = {
								'url': location.href,
								'title': photonicHtmlDecode($(this).data('title')),
								'image': $(this).attr('href')
							};
							photonicAddSocial('#lightcase-caption', shareable);
						}
					},
					onClose: { unsetHash: photonicUnsetHash() }
				});
			});
		};
		photonicInitializeLightcase('.photonic-standard-layout,.photonic-masonry-layout,.photonic-mosaic-layout');
		photonicInitializeLightcase('a[data-rel="photonic-lightcase"]');
		photonicInitializeLightcase('a[data-rel="photonic-lightcase-video"]');
		photonicInitializeLightcase('a[data-rel="photonic-html5-video"]');
	}

	if (Photonic_JS.slideshow_library == 'lightgallery') {
		window.photonicInitializeLightgallery = function(selector, selfSelect) {
			$(selector).each(function() {
				var current = $(this);
				var thumbs = current.find('a.launch-gallery-lightgallery');
				var rel = '';
				if (thumbs.length > 0) {
					rel = $(thumbs[0]).attr('rel');
				}
				if (rel != '' && photonicLightboxList[rel] != undefined) {
					photonicLightboxList[rel].data('lightGallery').destroy(true);
				}
				var $lightbox = current.lightGallery({
					selector: (selfSelect == undefined || !selfSelect) ? 'a[rel="' + rel + '"]' : 'this',
					counter: selfSelect == undefined || !selfSelect,
					pause: Photonic_JS.slideshow_interval,
					getCaptionFromTitleOrAlt: false
				});
				$lightbox.on('onAfterSlide.lg', function(event, prevIndex, index) {
					var thumbs = $(this).find('a.launch-gallery-lightgallery');
					photonicSetHash(thumbs[index]);
					var shareable = {
						'url': location.href,
						'title': photonicHtmlDecode($(thumbs[index]).data('title')),
						'image': $(thumbs[index]).attr('href')
					};
					photonicAddSocial('.lg-toolbar', shareable);
				});
				$lightbox.on('onCloseAfter.lg', function() { photonicUnsetHash(); });
				if (rel != '') {
					photonicLightboxList[rel] = $lightbox;
				}
			});
		};
		photonicInitializeLightgallery('.photonic-standard-layout,.photonic-masonry-layout,.photonic-mosaic-layout');
		photonicInitializeLightgallery('a[rel="photonic-lightgallery"]', true);
		photonicInitializeLightgallery('a.lightgallery-video', true);
		photonicInitializeLightgallery('a.lightgallery-html5-video', true);
	}

	if (Photonic_JS.slideshow_library == 'featherlight' && $.featherlight) {
		window.photonicResizeFeatherlightContainer = function(elem) {
			var target = elem;
			var video = $(target.attr('data-featherlight'));
			var videoURL = $(video.children()[0]).attr('src');
			if (videoURL == undefined) {
				//videoURL = target.attr('data-html5-href');
			}
			photonicGetVideoSize(videoURL, {width: window.innerWidth * 0.85 - 50, height: window.innerHeight * 0.85 - 50}).then(function(dimensions) {
				$('.featherlight-content').find('video').attr('width', dimensions.newWidth).attr('height', dimensions.newHeight);
				target.attr('data-featherlight', $('<div/>').append(video).html());
			});
		};

		window.photonicResizeFeatherlightImageContainer = function(elem) {
			var imageURL = $(elem).attr('href');
			photonicGetImageSize(imageURL, {width: window.innerWidth * 0.85 - 50, height: window.innerHeight * 0.85 - 50}).then(function(dimensions) {
				$('.featherlight-content').find('img').css({ width: dimensions.newWidth + 'px', height: dimensions.newHeight + 'px'});
			});
		};

		window.photonicInitializeFeatherlight = function(selector) {
			$(selector).each(function() {
				var current = $(this);
				var thumbs = current.find('a.launch-gallery-featherlight');
				var rel = '';
				if (thumbs.length > 0) {
					rel = $(thumbs[0]).attr('rel');
				}
				$('a[rel="' + rel + '"]').featherlightGallery({
					gallery: {
						fadeIn: 300,
						fadeOut: 300
					},
					openSpeed: 300,
					closeSpeed: 300,
					afterContent: function() {
						this.$legend = this.$legend || $('<div class="legend"/>').insertAfter(this.$content.parent());
						this.$legend.html(this.$currentTarget.data('title'));
						this.$instance.find('.featherlight-previous img').remove();
						this.$instance.find('.featherlight-next img').remove();
						photonicSetHash(this.$currentTarget);
						var shareable = {
							'url': location.href,
							'title': photonicHtmlDecode(this.$currentTarget.data('title')),
							'image': this.$content.attr('src')
						};
						photonicAddSocial('.photonic-featherlight', shareable);
						$(window).resize();
					},
					afterClose: function() {
						photonicUnsetHash();
					},
					onResize: function() {
						//if ($(this.$currentTarget).attr('data-featherlight-type') == 'video' || $(this.$currentTarget).attr('data-html5-href') != undefined) {
						if ($(this.$currentTarget).attr('data-featherlight-type') == 'video') {
							photonicResizeFeatherlightContainer($(this.$currentTarget));
						}
						else {
							photonicResizeFeatherlightImageContainer($(this.$currentTarget));
						}
					},
					variant: 'photonic-featherlight'
				});
			});
		};

		$('a.photonic-featherlight-solo').featherlight({
			afterContent: function() {
				this.$legend = this.$legend || $('<div class="legend"/>').insertAfter(this.$content.parent());
				this.$legend.html(this.$currentTarget.data('title') || this.$currentTarget.attr('title') || this.$currentTarget.find('img').attr('title') || this.$currentTarget.find('img').attr('alt'));
			},
			type: 'image',
			variant: 'photonic-featherlight'
		});

		$('a.featherlight-video').featherlight({
			iframeWidth: 640,
			iframeHeight: 480,
			iframeFrameborder: 0,
			variant: 'photonic-featherlight'
		});

		$('a.featherlight-html5-video').featherlight({
			onResize: function() {
				photonicResizeFeatherlightContainer($(this.$currentTarget));
			},
			variant: 'photonic-featherlight'
		});

		photonicInitializeFeatherlight('.photonic-standard-layout,.photonic-random-layout,.photonic-masonry-layout,.photonic-mosaic-layout');
	}

	$(document).on('click', '.photonic-level-2-thumb', function(e){
		e.preventDefault();
		var $clicked = $(this);
		var provider = $clicked.data('photonicProvider');
		var singular = $clicked.data('photonicSingular');
		var args = {"panel_id": $clicked.attr('id'), "popup": $clicked.data('photonicPopup'), "photo_count": $clicked.data('photonicPhotoCount'), "photo_more": $clicked.data('photonicPhotoMore')};
		if (provider == 'picasa') args.thumb_size = $clicked.data('photonicThumbSize');
		if (provider == 'google') args.thumb_size = $clicked.data('photonicThumbSize');
		if (provider == 'zenfolio') args.thumb_size = $clicked.data('photonicThumbSize');
		photonicDisplayLevel2(provider, singular, args);
	});

/*
	$('.photonic-password-prompter').dialog({
		autoOpen: false,
		modal: true,
		width: 400,
		height: 225,
		dialogClass: 'photonic-jq',
		closeText: '&times;'
	});
*/

	$(document).on('click', '.photonic-password-submit a', function(e) {
		e.preventDefault();
		var album_id = $(this).parent().parent().attr('id');
		var components = album_id.split('-');
		var provider = components[1];
		var singular_type = components[2];
		var album_key = components.slice(4).join('-');

		var password = $(this).parent().parent().find('input[name="photonic-' + provider + '-password"]');
		password = password[0].value;

		var thumb_id = 'photonic-' + provider + '-' + singular_type + '-thumb-' + album_key;
		var thumb = $('#' + thumb_id);

		$('#photonic-' + provider + '-' + singular_type + '-prompter-' + album_key).dialog('close');
		photonicShowLoading();
		var args = {'panel_id': thumb_id, "popup": thumb.data('photonicPopup'), "photo_count": thumb.data('photonicPhotoCount'), "photo_more": thumb.data('photonicPhotoMore') };
		if (provider == 'smug') {
			args.password = password;
		}
		else if (provider == 'zenfolio') {
			args.password = password;
			args.realm_id = thumb.data('photonicRealm');
			args.thumb_size = thumb.data('photonicThumbSize');
		}
		else if (provider == 'picasa') {
			args.thumb_size = thumb.data('photonicThumbSize');
			var prompt = $('#' + album_id).data('photonicPrompt');
			if (prompt == 'password') {
				args.authkey = password;
			}
			else {
				args.shortlink = password;
			}
		}
		photonicProcessRequest(provider, singular_type, album_key, args);
	});

	$('.photonic-flickr-stream a, a.photonic-flickr-set-thumb, a.photonic-flickr-gallery-thumb, .photonic-picasa-stream a, .photonic-google-stream a, .photonic-500px-stream a, .photonic-smug-stream a, .photonic-instagram-stream a, .photonic-zenfolio-stream a, a.photonic-zenfolio-set-thumb').each(function() {
		if (!($(this).parent().hasClass('photonic-header-title'))) {
			var title = $(this).attr('title');
			$(this).attr('title', photonicHtmlDecode(title));
		}
	});

	$('a.photonic-level-3-expand').on('click', function(e) {
		e.preventDefault();
		var current = $(this);
		var header = current.parent().parent().parent();
		if (current.hasClass('photonic-level-3-expand-plus')) {
			photonicProcessL3Request(current, header, {'view': 'collections', 'node': current.data('photonicLevel-3'), 'layout': current.data('photonicLayout')});
		}
		else if (current.hasClass('photonic-level-3-expand-up')) {
			header.next('.photonic-stream').slideUp();
			current.removeClass('photonic-level-3-expand-up').addClass('photonic-level-3-expand-down').attr('title', Photonic_JS.maximize_panel == undefined ? 'Show' : Photonic_JS.maximize_panel);
		}
		else if (current.hasClass('photonic-level-3-expand-down')) {
			header.next('.photonic-stream').slideDown();
			current.removeClass('photonic-level-3-expand-down').addClass('photonic-level-3-expand-up').attr('title', Photonic_JS.minimize_panel == undefined ? 'Hide' : Photonic_JS.minimize_panel);
		}
	});

	window.photonicChangeHash = function() {
		var node = deep;

		if (node != null) {
			if (node.length > 1) {
				if (window.location.hash && node.indexOf('#access_token=') !== -1) {
					photonicUnsetHash();
				}
				else {
					node = node.substr(1);
					var allMatches = $('[data-photonic-deep="' + node + '"]');
					if (allMatches.length > 0) {
						var thumbToClick = allMatches[0];
						$(thumbToClick).click();
						photonicSetHash(node);
					}
				}
			}
		}
	};

	$(window).on('load', photonicChangeHash);
	$(window).on('hashchange', photonicChangeHash);

	$('.photonic-standard-layout.title-display-below .photonic-pad-photos').each(function(i, item) {
		var img = $(item).find('img');
		img = img[0];
		var title = $(item).find('.photonic-title-info');
		title.css({"width": img.width });
	});

	if ($('.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img').length > 0) {
		$(document).tooltip({
			items: '.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img',
			track: true,
			show: false,
			selector: '.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img',
			hide: false
		});
	}

	$(document).on('mouseenter', '.title-display-hover-slideup-show a, .photonic-slideshow.title-display-hover-slideup-show li', function(e) {
		var title = $(this).find('.photonic-title');
		title.slideDown();
		$(this).data('photonic-title', $(this).attr('title'));
		$(this).attr('title', '');
	});

	$(document).on('mouseleave', '.title-display-hover-slideup-show a, .photonic-slideshow.title-display-hover-slideup-show li', function(e) {
		var title = $(this).find('.photonic-title');
		title.slideUp();
		$(this).data('photonic-title', $(this).attr('title'));
		$(this).attr('title', $(this).data('photonic-title'));
	});

	window.photonicBlankSlideupTitle = function() {
		$('.title-display-slideup-stick, .photonic-slideshow.title-display-slideup-stick').each(function(i, item){
			var a = $(item).find('a');
			$(a).attr('title', '');
		});
	};
	photonicBlankSlideupTitle();

	$('.auth-button').not('.auth-button-picasa, .auth-button-instagram').click(function(){
		var provider = '';
		if ($(this).hasClass('auth-button-flickr')) {
			provider = 'flickr';
		}
		else if ($(this).hasClass('auth-button-500px')) {
			provider = '500px';
		}
		else if ($(this).hasClass('auth-button-smug')) {
			provider = 'smug';
		}
		var callbackId = $(this).attr('rel');

		$.post(Photonic_JS.ajaxurl, "action=photonic_authenticate&provider=" + provider + '&callback_id=' + callbackId, function(data) {
			if (provider == 'flickr') {
				window.location.replace(data);
			}
			else if (provider == '500px') {
				window.location.replace(data);
			}
			else if (provider == 'smug') {
				window.open(data);
			}
		});
		return false;
	});

	$('.photonic-login-box-flickr:not(:first)').remove();
	$('.photonic-login-box-flickr').attr({id: 'photonic-login-box-flickr'});
	$('.photonic-login-box-picasa:not(:first)').remove();
	$('.photonic-login-box-picasa').attr({id: 'photonic-login-box-picasa'});
	$('.photonic-login-box-500px:not(:first)').remove();
	$('.photonic-login-box-500px').attr({id: 'photonic-login-box-500px'});
	$('.photonic-login-box-smug:not(:first)').remove();
	$('.photonic-login-box-smug').attr({id: 'photonic-login-box-smug'});
	$('.photonic-login-box-zenfolio:not(:first)').remove();
	$('.photonic-login-box-zenfolio').attr({id: 'photonic-login-box-zenfolio'});
	$('.photonic-login-box-instagram:not(:first)').remove();
	$('.photonic-login-box-instagram').attr({id: 'photonic-login-box-instagram'});

	$(document).on('click', 'a.photonic-more-button.photonic-more-dynamic', function(e) {
		e.preventDefault();
		var clicked = $(this);
		var container = clicked.prev();
		var query = container.data('photonicStreamQuery');
		var provider = container.data('photonicStreamProvider');
		var level = container.hasClass('photonic-level-1-container') ? 'level-1' : 'level-2';

		photonicShowLoading();
		$.post(Photonic_JS.ajaxurl, { 'action': 'photonic_load_more', 'provider': provider, 'query': query }, function(data) {
			var ret = $(data);
			var images = ret.find('.photonic-' + level);
			var one_existing = container.find('a.photonic-launch-gallery')[0];
			images.children().attr('rel', $(one_existing).attr('rel'));
			if (Photonic_JS.slideshow_library == 'lightcase') images.children().attr('data-rel', 'lightcase:' + $(one_existing).attr('rel'));

			images.appendTo(container);
			photonicMoveHTML5External();

			var lightbox;
			if (Photonic_JS.slideshow_library == 'imagelightbox') {
				lightbox = photonicLightboxList['a[rel="' + $(one_existing).attr('rel') + '"]'];
				if (level == 'level-1') {
					lightbox.addToImageLightbox(images.find('a'));
				}
			}
			else if (Photonic_JS.slideshow_library == 'lightcase') {
				photonicInitializeLightcase('.photonic-standard-layout,.photonic-masonry-layout,.photonic-mosaic-layout');
			}
			else if (Photonic_JS.slideshow_library == 'lightgallery') {
				photonicInitializeLightgallery(container);
			}
			else if (Photonic_JS.slideshow_library == 'featherlight') {
				photonicInitializeFeatherlight(container);
			}
			else if (Photonic_JS.slideshow_library == 'fancybox3') {
				photonicInitializeFancybox(null, $(one_existing).data('fancybox'));
			}
			else if (Photonic_JS.slideshow_library == 'strip') {
				images.children().attr('data-strip-group', $(one_existing).attr('rel'));
			}

			photonicJustifiedGridLayout(true); // true because we don't want to hide the spinner

			images.waitForImages(function() {
				var new_query = ret.find('.photonic-random-layout,.photonic-standard-layout,.photonic-masonry-layout,.photonic-mosaic-layout,.slideshow-grid-panel').data('photonicStreamQuery');
				container.data('photonicStreamQuery', new_query);

				container.find('.photonic-' + level).css({'display': 'inline-block' });

				// If this is a masonry layout in <= IE9, we need to trigger the Masonry function for appended images
				if (container.hasClass('photonic-masonry-layout') && isOldIE && $.isFunction($.fn.masonry)) {
					container.masonry('appended', images);
				}

				var more_button = ret.find('.photonic-more-button');
				if (more_button.length == 0) {
					clicked.fadeOut().remove();
				}

				if (container.hasClass('photonic-mosaic-layout')) {
					photonicMosaicLayout(true);
				}
				else if (container.hasClass('photonic-masonry-layout')) {
					images.find('img').fadeIn().css({ "display": "block" });
				}
				$('.photonic-loading').hide();
			});
		});
	});

	/**
	 * Displays all photos in a popup. Invoked when the popup data is being fetched for the first time for display in a popup.
	 * Must be used by all providers for displaying photos in a popup.
	 *
	 * @param data The contents of the popup
	 * @param provider The data provider: flickr | picasa | smug | zenfolio
	 * @param popup The type of popup object: set | gallery | album
	 * @param panelId The trailing section of the thumbnail's id
	 */
	window.photonicDisplayPopup = function(data, provider, popup, panelId) {
		var unsafePanelId = panelId, // KEEP THIS FOR AJAX RESPONSE SELECTOR
			safePanelId = panelId.replace('.', '\\.'); // FOR EXISTING ELEMENTS WHCICH NEED SANITIZED PANELID
		//panelId = panelId.replace('.', '');  // REMOVE '.' FROM PANELID WHENEVER POSSIBLE
		var div = $(data);
		var grid = div.find('.slideshow-grid-panel');

		$(grid).waitForImages(function() {
			$(div).appendTo($('#photonic-' + provider + '-' + popup + '-' + safePanelId)).show();
			div.photonicModal({
				modalTarget: 'photonic-' + provider + '-panel-' + safePanelId,
				color: '#000',
				width: Photonic_JS.gallery_panel_width + '%',
				closeFromRight: ((100 - Photonic_JS.gallery_panel_width) / 2) + '%'
			});
			photonicMoveHTML5External();

			if (Photonic_JS.slideshow_library == 'imagelightbox') {
				photonicInitializeImageLightbox('#' + div.attr('id'));
			}
			else if (Photonic_JS.slideshow_library == 'lightcase') {
				photonicInitializeLightcase('#' + div.attr('id'));
			}
			else if (Photonic_JS.slideshow_library == 'lightgallery') {
				photonicInitializeLightgallery('#' + div.attr('id'));
			}
			else if (Photonic_JS.slideshow_library == 'featherlight') {
				photonicInitializeFeatherlight('#' + div.attr('id'));
			}
			else if (Photonic_JS.slideshow_library == 'fancybox3') {
				photonicInitializeFancybox('#' + div.attr('id'));
			}

			$('.photonic-loading').hide();
		});
	};

	window.photonicRedisplayPopupContents = function(provider, panelId, panel, args) {
		if ('show' == args['popup']) {
			$('.photonic-loading').hide();
			$(panel).photonicModal({
				modalTarget: 'photonic-' + provider + '-panel-' + panelId,
				color: '#000',
				width: Photonic_JS.gallery_panel_width + '%',
				closeFromRight: ((100 - Photonic_JS.gallery_panel_width) / 2) + '%'
			});
		}
		else {
			photonicBypassPopup($(panel));
		}
	};

	window.photonicPPSwipe = function() {
		$('.pp_hoverContainer').remove();
		$("#pp_full_res")
			.on('swipeleft', function() { $.prettyPhoto.changePage('next'); })
			.on('swiperight', function() { $.prettyPhoto.changePage('previous'); });
	};

	window.photonicBypassPopup = function(data) {
		$('.photonic-loading').hide();
		var panel = $(data);
		panel.hide().appendTo($('body'));
		photonicMoveHTML5External();

		if (Photonic_JS.slideshow_library == 'imagelightbox') {
			photonicInitializeImageLightbox('#' + panel.attr('id'));
		}
		else if (Photonic_JS.slideshow_library == 'lightcase') {
			photonicInitializeLightcase('#' + panel.attr('id'));
		}
		else if (Photonic_JS.slideshow_library == 'lightgallery') {
			photonicInitializeLightgallery('#' + panel.attr('id'));
		}
		else if (Photonic_JS.slideshow_library == 'featherlight') {
			photonicInitializeFeatherlight('#' + panel.attr('id'));
		}
		else if (Photonic_JS.slideshow_library == 'fancybox3') {
			photonicInitializeFancybox('#' + panel.attr('id'));
		}

		var thumbs = $(panel).find('.photonic-launch-gallery');
		if (thumbs.length > 0) {
			deep = '#' + $(thumbs[0]).data('photonicDeep');
			$(thumbs[0]).click();
		}
	};

	window.photonicJustifiedGridLayout = function(resized, selector) {
		if (selector == null || selector == undefined) {
			selector = '.photonic-random-layout';
		}

		if (!resized && $(selector).length > 0) {
			photonicShowLoading();
		}

		$(selector).each(function(idx, obj) {
			var viewportWidth = Math.floor($(this)[0].getBoundingClientRect().width);
			var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			var idealHeight = Math.max(parseInt(windowHeight / 4), Photonic_JS.tile_min_height);

			var gap = Photonic_JS.tile_spacing * 2;

			$(this).waitForImages(function() {
				var container = this;
				var photos = [];
				var images = $(container).find('img');

				$(images).each(function() {
					if ($(this).parents('.photonic-panel').length > 0) {
						return;
					}

					var image = $(this)[0];
					var a = $(this.parentNode);
					var a_clone = a.clone(true);// Clone doesn't get the "data" if the parameter is unspecified or false
					var a_title = a_clone.data('title');
					a_clone.empty();

					var title_info = a.children('.photonic-title-info');

					var div = a.parent();
					var siblings = div.children('div');

					if (!(image.naturalHeight == 0 || image.naturalHeight == undefined || image.naturalWidth == undefined)) {
						photos.push({src: image.src, aspect_ratio: (image.naturalWidth) / (image.naturalHeight), anchor: a_clone[0].outerHTML, a_title: a_title == undefined ? a_clone.attr('title') : a_title, div_id: div.attr('id'), siblings: siblings, title_info: title_info, alt: image.alt});
					}
				});

				var summedWidth = photos.reduce((function(sum, p) {
					return sum += p.aspect_ratio * idealHeight + gap;
				}), 0);

				var rows = Math.max(Math.round(summedWidth / viewportWidth), 1); // At least 1 row should be shown
				var  weights = photos.map(function(p) {
					return Math.round(p.aspect_ratio * 100);
				});

				var partition = photonicPart(weights, rows);
				var index = 0;
				var processedIndex = 0;

				$(container).empty();

				$(partition).each(function() {
					var summedRatios;
					var rowBuffer = [];

					$(this).each(function() {
						rowBuffer.push(photos[index]);
						index++;
					});

					summedRatios = rowBuffer.reduce((function(sum, p) {
						return sum += p.aspect_ratio;
					}), 0);

					$(rowBuffer).each(function() {
//						$($(container).children()[processedIndex++]).css({width: parseInt(viewportWidth / summedRatios * this.aspect_ratio) + "px", height: parseInt(viewportWidth / summedRatios) + "px"});

						var elem = document.createElement("div");
						elem.style.width = parseInt(viewportWidth / summedRatios * this.aspect_ratio)+"px";
						elem.style.height = parseInt(viewportWidth / summedRatios)+"px";
						elem.setAttribute("class", "photonic-tiled-photo");
						if (this.div_id != undefined) {
							elem.id = this.div_id;
						}

						var anchor = $(this.anchor);
						anchor.attr('title', photonicHtmlDecode(this.a_title));
						anchor.data('title', this.a_title);
						$(elem).append(anchor);

						var img = document.createElement('img');
						img.setAttribute('src', this.src);
						img.setAttribute('alt', this.alt);
						$(anchor).append(img);

						$(anchor).append(this.title_info);

						// Re-add panels that may have been created earlier, to avoid reloading them.
						$(elem).append(this.siblings);

						$(container).append(elem);
					});
				});

				if (!resized) {
					$('.photonic-loading').hide();
				}

				$(container).find('.photonic-thumb').fadeIn();
				photonicBlankSlideupTitle();
				$('.title-display-slideup-stick a .photonic-title').each(function(){
					$(this).css({"display": "block" });
				});
				if (Photonic_JS.slideshow_library == 'lightcase') {
					photonicInitializeLightcase('.photonic-random-layout');
				}
				else if (Photonic_JS.slideshow_library == 'lightgallery') {
					photonicInitializeLightgallery(container);
				}
				else if (Photonic_JS.slideshow_library == 'featherlight') {
					photonicInitializeFeatherlight(container);
				}
				else if (Photonic_JS.slideshow_library == 'fancybox3') {
					photonicInitializeFancybox('.photonic-random-layout');
				}
			});
		});
	};

	window.photonicMasonryLayout = function(resized, selector) {
		if (isOldIE) return;

		if (selector == null || selector == undefined) {
			selector = '.photonic-masonry-layout';
		}

		if (!resized && $(selector).length > 0) {
			photonicShowLoading();
		}

		var minWidth = (isNaN(Photonic_JS.masonry_min_width) || parseInt(Photonic_JS.masonry_min_width) <= 0) ? 200 : Photonic_JS.masonry_min_width;
		minWidth = parseInt(minWidth);

		$(selector).each(function(idx, grid) {
			var $grid = $(grid);
			$grid.waitForImages(function() {
				var columns = $grid.attr('data-photonic-gallery-columns');
				columns = (isNaN(parseInt(columns)) || parseInt(columns) <= 0) ? 3 : parseInt(columns);
				var viewportWidth = Math.floor($grid[0].getBoundingClientRect().width);
				var idealColumns = (viewportWidth / columns) > minWidth ? columns : Math.floor(viewportWidth / minWidth);
				$grid.css('column-count', idealColumns);
				$grid.find('img').fadeIn().css({"display": "block" });
				$('.title-display-slideup-stick a .photonic-title').each(function(){
					$(this).css({"display": "block" });
				});
				if (!resized) {
					$('.photonic-loading').hide();
				}
			});
		});
	};

	window.photonicMosaicLayout = function(resized, selector) {
		if (selector == null || selector == undefined) {
			selector = '.photonic-mosaic-layout';
		}

		if (!resized && $(selector).length > 0) {
			photonicShowLoading();
		}

		function getDistribution(setSize, max, min) {
			var distribution = [];
			var processed = 0;
			while (processed < setSize) {
				if (setSize - processed <= 3 && processed > 0) {
					distribution.push(setSize - processed);
					processed += setSize - processed;
				}
				else {
					var current = Math.max(Math.floor(Math.random() * max + 1), min);
					current = Math.min(current, setSize - processed);
					distribution.push(current);
					processed += current;
				}
			}
			return distribution;
		}

		function arrayAlternate(array, remainder) {
			return array.filter(function(value, index) {
				return index % 2 == remainder;
			});
		}

		function setUniformHeightsForRow(array) {
			// First, order the array by increasing height
			array.sort(function(a, b) {
				return a.height - b.height;
			});

			array[0].new_height = array[0].height;
			array[0].new_width = array[0].width;

			for (var i = 1; i < array.length; i++) {
				array[i].new_height = array[0].height;
				array[i].new_width = array[i].new_height * array[i].aspect_ratio;
			}
			var new_width = array.reduce(function(sum, p) {
				return sum += p.new_width ;
			}, 0);
			return { elements: array, height: array[0].new_height, width: new_width, aspect_ratio: new_width / array[0].new_height };
		}

		function finalizeTiledLayout(components, containers) {
			$(components).each(function(c, component) {
				var rowY = component.y;
				var otherRowHeight = 0;
				$(component.elements).each(function(e, element) {
					if (element.photo_position != undefined) {
						// Component is a single image
						var container = containers[element.photo_position];
						container.css('width', (component.new_width));
						container.css('height', (component.new_height));
						container.css('top', (component.y));
						container.css('left', (component.x));
					}
					else {
						// Component is a clique (element is a row). Widths and Heights of cliques have been calculated. But the rows in cliques need to be recalculated
						element.new_width = component.new_width;
						if (otherRowHeight === 0) {
							element.new_height = element.new_width / element.aspect_ratio;
							otherRowHeight = element.new_height;
						}
						else {
							element.new_height = component.new_height - otherRowHeight;
						}
						element.x = component.x;
						element.y = rowY;
						rowY += element.new_height;
						var totalWidth = element.elements.reduce(function(sum, p) {
							return sum += p.new_width ;
						}, 0);

						var rowX = 0;
						$(element.elements).each(function(i, image) {
							image.new_width = element.new_width * image.new_width / totalWidth;
							image.new_height = element.new_height; //image.new_width / image.aspect_ratio;
							image.x = rowX;

							rowX += image.new_width;

							var container = containers[image.photo_position];
							container.css('width', Math.floor(image.new_width));
							container.css('height', Math.floor(image.new_height));
							container.css('top', Math.floor(element.y));
							container.css('left', Math.floor(element.x + image.x));
						});
					}
				});
			});
		}

		$(selector).each(function(idx, grid) {
			var $grid = $(grid);
			$grid.waitForImages(function() {
				var viewportWidth = Math.floor($grid[0].getBoundingClientRect().width);
				var triggerWidth = (isNaN(Photonic_JS.mosaic_trigger_width) || parseInt(Photonic_JS.mosaic_trigger_width) <= 0) ? 200 : parseInt(Photonic_JS.mosaic_trigger_width);
				var maxInRow = Math.floor(viewportWidth / triggerWidth);
				var minInRow = viewportWidth >= (triggerWidth * 2) ? 2 : 1;
				var photos = [];
				var divs = $grid.children();
				var setSize = divs.length;
				if (setSize === 0) {
					return;
				}

				var containers = [];
				var images = $grid.find('img');
				$(images).each(function(imgIdx) {
					if ($(this).parents('.photonic-panel').length > 0) {
						return;
					}

					var image = $(this)[0];
					var a = $(this.parentNode);
					var div = a.parent();
					div.attr('data-photonic-photo-index', imgIdx);
					containers[imgIdx] = div;

					if (!(image.naturalHeight == 0 || image.naturalHeight == undefined || image.naturalWidth == undefined)) {
						var aspectRatio = (image.naturalWidth) / (image.naturalHeight);
						photos.push({src: image.src, width: image.naturalWidth, height: image.naturalHeight, aspect_ratio: aspectRatio, photo_position: imgIdx});
					}
				});

				setSize = photos.length;
				var distribution = getDistribution(setSize, maxInRow, minInRow);

				// We got our random distribution. Let's divide the photos up according to the distribution.
				var groups = [], startIdx = 0;
				$(distribution).each(function(i, size) {
					groups.push(photos.slice(startIdx, startIdx + size));
					startIdx += size;
				});

				var groupY = 0;

				// We now have our groups of photos. We need to find the optimal layout for each group.
				$(groups).each(function(g, group) {
					// First, order the group by aspect ratio
					group.sort(function(a, b) {
						return a.aspect_ratio - b.aspect_ratio;
					});

					// Next, pick a random layout
					var groupLayout;
					if (group.length == 1) {
						groupLayout = [1];
					}
					else if (group.length == 2) {
						groupLayout = [1,1];
					}
					else {
						groupLayout = getDistribution(group.length, group.length - 1, 1);
					}

					// Now, LAYOUT, BABY!!!
					var cliqueF = 0, cliqueL = group.length - 1;
					var cliques = [], indices = [];

					for (var i = 2; i <= maxInRow; i++) {
						var index = $.inArray(i, groupLayout);
						while (-1 < index && cliqueF < cliqueL) {
							// Ideal Layout: one landscape, one portrait. But we will take any 2 with contrasting aspect ratios
							var clique = [];
							var j = 0;
							while (j < i && cliqueF <= cliqueL) {
								clique.push(group[cliqueF++]); // One with a low aspect ratio
								j++;
								if (j < i && cliqueF <= cliqueL) {
									clique.push(group[cliqueL--]); // One with a high aspect ratio
									j++;
								}
							}
							// Clique is formed. Add it to the list of cliques.
							cliques.push(clique);
							indices.push(index); // Keep track of the position of the clique in the row
							index = $.inArray(i, groupLayout, index + 1);
						}
					}

					// The ones that are not in any clique (i.e. the ones in the middle) will be given their own columns in the row.
					var remainder = group.slice(cliqueF, cliqueL + 1);

					// Now let's layout the cliques individually. Each clique is its own column.
					var rowLayout = [];
					$(cliques).each(function(c, clique) {
						var toss = Math.floor(Math.random() * 2); // 0 --> Groups of smallest and largest, or 1 --> Alternating
						var oneRow, otherRow;
						if (toss === 0) {
							// Group the ones with the lowest aspect ratio together, and the ones with the highest aspect ratio together.
							// Lay one group at the top and the other at the bottom
							var wide = Math.max(Math.floor(Math.random() * (clique.length / 2 - 1)), 1);
							oneRow = clique.slice(0, wide);
							otherRow = clique.slice(wide);
						}
						else {
							// Group alternates together.
							// Lay one group at the top and the other at the bottom
							oneRow = arrayAlternate(clique, 0);
							otherRow = arrayAlternate(clique, 1);
						}

						// Make heights consistent within rows:
						oneRow = setUniformHeightsForRow(oneRow);
						otherRow = setUniformHeightsForRow(otherRow);

						// Now make widths consistent
						oneRow.new_width = Math.min(oneRow.width, otherRow.width);
						oneRow.new_height = oneRow.new_width / oneRow.aspect_ratio;
						otherRow.new_width = oneRow.new_width;
						otherRow.new_height = otherRow.new_width / otherRow.aspect_ratio;

						rowLayout.push({elements: [oneRow, otherRow], height: oneRow.new_height + otherRow.new_height, width: oneRow.new_width, aspect_ratio: oneRow.new_width / (oneRow.new_height + otherRow.new_height), element_position: indices[c]});
					});

					rowLayout.sort(function(a, b) {
						return a.element_position - b.element_position;
					});

					var orderedRowLayout = [];
					for (var position = 0; position < groupLayout.length; position++) {
						var cliqueExists = $.inArray(position, indices) > -1;
						if (cliqueExists) {
							orderedRowLayout.push(rowLayout.shift());
						}
						else {
							var rem = remainder.shift();
							orderedRowLayout.push({ elements: [rem], height: rem.height, width: rem.width, aspect_ratio: rem.aspect_ratio });
						}
					}

					// Main Row layout is fully constructed and ordered. Now we need to balance heights and widths of all cliques with the "remainder"
					var totalAspect = orderedRowLayout.reduce(function(sum, p) {
						return sum += p.aspect_ratio ;
					}, 0);

					var elementX = 0;
					$(orderedRowLayout).each(function(c, component) {
						component.new_width = component.aspect_ratio / totalAspect * viewportWidth;
						component.new_height = component.new_width / component.aspect_ratio;
						component.y = groupY;
						component.x = elementX;
						elementX += component.new_width;
					});

					groupY += orderedRowLayout[0].new_height;
					finalizeTiledLayout(orderedRowLayout, containers);
				});
				$grid.css('height', groupY);
				$grid.find('img').fadeIn();
				$('.title-display-slideup-stick a .photonic-title').each(function(){
					$(this).css({"display": "block" });
				});
				if (!resized) {
					$('.photonic-loading').hide();
				}
			});
		});
	};

	photonicJustifiedGridLayout(false);
	photonicMasonryLayout(false);
	photonicMosaicLayout(false);

	$('.photonic-standard-layout .photonic-level-1, .photonic-standard-layout .photonic-level-2').css({'display': 'inline-block'});

	if (!supportsSVG) {
		var icon = $('a.photonic-level-3-expand');
		var bg = icon.css('background-image');
		bg = bg.replace( 'svg', 'png' );
		icon.css({'background-image': bg});
	}

	$(window).on('resize', function() {
		photonicJustifiedGridLayout(true);
		photonicMasonryLayout(true);
		photonicMosaicLayout(true);
	});
});

