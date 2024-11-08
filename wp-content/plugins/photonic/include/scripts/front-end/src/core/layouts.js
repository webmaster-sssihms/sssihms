	$('.photonic-standard-layout.title-display-below').each(function() {
		var $standard = $(this);
		$standard.waitForImages(function(){
			var $block = $(this);
			$block.find('.photonic-pad-photos').each(function(i, item) {
				var img = $(item).find('img');
				img = img[0];
				var title = $(item).find('.photonic-title-info');
				title.css({"width": img.width });
			});
		});
	});

	if ($('.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img').length > 0) {
		if (!$.fn.tooltip) {
			photonicTooltip('[data-photonic-tooltip]', '.photonic-tooltip-container');
		}
		else {
			$(document).tooltip({
				items: '.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img',
				track: true,
				show: false,
				selector: '.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img',
				hide: false
			});
		}
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

	window.photonicShowSlideupTitle = function() {
		var titles = document.documentElement.querySelectorAll('.title-display-slideup-stick a .photonic-title');
		var len = titles.length;
		for (var i = 0; i < len; i++) {
			titles[i].style.display = 'block';
		}
	};

	$('.auth-button').click(function(){
		var provider = '';
		if ($(this).hasClass('auth-button-flickr')) {
			provider = 'flickr';
		}
		else if ($(this).hasClass('auth-button-smug')) {
			provider = 'smug';
		}
		var callbackId = $(this).attr('rel');

		$.post(Photonic_JS.ajaxurl, "action=photonic_authenticate&provider=" + provider + '&callback_id=' + callbackId, function(data) {
			if (provider === 'flickr') {
				window.location.replace(data);
			}
			else if (provider === 'smug') {
				window.open(data);
			}
		});
		return false;
	});

	$('.photonic-login-box-flickr:not(:first)').remove();
	$('.photonic-login-box-flickr').attr({id: 'photonic-login-box-flickr'});
	$('.photonic-login-box-smug:not(:first)').remove();
	$('.photonic-login-box-smug').attr({id: 'photonic-login-box-smug'});

	window.photonicJustifiedGridLayout = function(resized, selector) {
		if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Justified Grid');
		if (selector == null || selector === undefined || $(selector).length === 0) {
			selector = '.photonic-random-layout';
		}

		if (!resized && $(selector).length > 0) {
			photonicShowLoading();
		}

		function linearMin(arr) {
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
		}

		function linearPartition(seq, k) {
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
					m = linearMin((function() {
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
		}

		function part(seq, k) {
			if (k <= 0) {
				return [];
			}
			while (k) {
				try {
					return linearPartition(seq, k--);
				} catch (_error) {}
			}
		}

		$(selector).each(function(idx, obj) {
			var viewportWidth = Math.floor($(this)[0].getBoundingClientRect().width);
			var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			var idealHeight = Math.max(parseInt(windowHeight / 4), Photonic_JS.tile_min_height);

			var gap = Photonic_JS.tile_spacing * 2;

			$(obj).waitForImages(function() {
				var container = this;
				var photos = [];
				var images = $(container).find('img');

				$(images).each(function() {
					if ($(this).parents('.photonic-panel').length > 0) {
						return;
					}

					var image = $(this)[0];
					var div = this.parentNode.parentNode;

					if (!(image.naturalHeight === 0 || image.naturalHeight === undefined || image.naturalWidth === undefined)) {
						photos.push({tile: div, aspect_ratio: (image.naturalWidth) / (image.naturalHeight)});
					}
				});

				var summedWidth = photos.reduce((function(sum, p) {
					return sum += p.aspect_ratio * idealHeight + gap;
				}), 0);

				var rows = Math.max(Math.round(summedWidth / viewportWidth), 1); // At least 1 row should be shown
				var  weights = photos.map(function(p) {
					return Math.round(p.aspect_ratio * 100);
				});

				var partition = part(weights, rows);
				var index = 0;

				var oLen = partition.length;
				for (var o = 0; o < oLen; o++) {
					var onePart = partition[o];
					var summedRatios;
					var rowBuffer = photos.slice(index, index + onePart.length);
					index = index + onePart.length;

					summedRatios = rowBuffer.reduce((function(sum, p) {
						return sum += p.aspect_ratio;
					}), 0);

					var rLen = rowBuffer.length;
					for (var r = 0; r < rLen; r++) {
						var item = rowBuffer[r];
						var existing = item.tile;
						existing.style.width = parseInt(viewportWidth / summedRatios * item.aspect_ratio)+"px";
						existing.style.height = parseInt(viewportWidth / summedRatios)+"px";
					}
				}

				$(container).find('.photonic-thumb, .photonic-thumb img').fadeIn();

				photonicBlankSlideupTitle();
				photonicShowSlideupTitle();

				if (Photonic_JS.slideshow_library === 'lightcase') {
					photonicLightbox.initialize('.photonic-random-layout');
				}
				else if (Photonic_JS.slideshow_library === 'lightgallery') {
					photonicLightbox.initialize(container);
				}
				else if (Photonic_JS.slideshow_library === 'featherlight') {
					photonicLightbox.initialize(container);
				}
				else if (Photonic_JS.slideshow_library === 'fancybox3') {
					photonicLightbox.initialize('.photonic-random-layout');
				}
				else if (Photonic_JS.slideshow_library === 'photoswipe') {
					photonicLightbox.initialize();
				}

				if (!resized) {
					$('.photonic-loading').hide();
				}
			});
		});
		if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Justified Grid');
	};

	window.photonicMasonryLayout = function(resized, selector) {
		if (Photonic_JS.is_old_IE === "1") return;
		if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Masonry');

		if (selector == null || selector === undefined) {
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
				if (idealColumns !== undefined && idealColumns !== null) {
					$grid.css('column-count', idealColumns.toString());
				}
				$grid.find('img').fadeIn().css({"display": "block" });
				photonicShowSlideupTitle();
				if (!resized) {
					$('.photonic-loading').hide();
				}
			});
		});
		if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Masonry');
	};

	window.photonicMosaicLayout = function(resized, selector) {
		if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Mosaic');
		if (selector == null || selector === undefined || $(selector).length === 0) {
			selector = '.photonic-mosaic-layout';
		}

		if (!resized && $(selector).length > 0) {
			photonicShowLoading();
		}

		function getDistribution(setSize, max, min) {
			var distribution = [];
			var processed = 0;
			while (processed < setSize) {
				if (setSize - processed <= max && processed > 0) {
//				if (setSize - processed <= 3 && processed > 0) {
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
				return index % 2 === remainder;
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
			var cLength = components.length;
			for (var c = 0; c < cLength; c++) {
				var component = components[c];
				var rowY = component.y;
				var otherRowHeight = 0;
				var container;
				var ceLen = component.elements.length;
				for (var e = 0; e < ceLen; e++) {
					var element = component.elements[e];
					if (element.photo_position !== undefined) {
						// Component is a single image
						container = containers[element.photo_position];
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
						var eLength = element.elements.length;
						for (var i = 0; i < eLength; i++) {
							var image = element.elements[i];
							image.new_width = element.new_width * image.new_width / totalWidth;
							image.new_height = element.new_height; //image.new_width / image.aspect_ratio;
							image.x = rowX;

							rowX += image.new_width;

							container = containers[image.photo_position];
							container.css('width', Math.floor(image.new_width));
							container.css('height', Math.floor(image.new_height));
							container.css('top', Math.floor(element.y));
							container.css('left', Math.floor(element.x + image.x));
						}
					}
				}
			}
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

					if (!(image.naturalHeight === 0 || image.naturalHeight === undefined || image.naturalWidth === undefined)) {
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
				for (var g = 0; g < groups.length; g++) {
					var group = groups[g];
					// First, order the group by aspect ratio
					group.sort(function(a, b) {
						return a.aspect_ratio - b.aspect_ratio;
					});

					// Next, pick a random layout
					var groupLayout;
					if (group.length === 1) {
						groupLayout = [1];
					}
					else if (group.length === 2) {
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
					for (var c = 0; c < cliques.length; c++) {
						var clique = cliques[c];
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
					}

					rowLayout.sort(function(a, b) {
						return a.element_position - b.element_position;
					});

					var orderedRowLayout = [];
					for (var position = 0; position < groupLayout.length; position++) {
						var cliqueExists = indices.indexOf(position) > -1; //$.inArray(position, indices) > -1;
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
					orderedRowLayout.forEach(function(component) {
						component.new_width = component.aspect_ratio / totalAspect * viewportWidth;
						component.new_height = component.new_width / component.aspect_ratio;
						component.y = groupY;
						component.x = elementX;
						elementX += component.new_width;
					});

					groupY += orderedRowLayout[0].new_height;
					finalizeTiledLayout(orderedRowLayout, containers);
				}

				$grid.css('height', groupY);
				$grid.find('img').fadeIn();
				photonicShowSlideupTitle();
				if (!resized) {
					$('.photonic-loading').hide();
				}
			});
		});
		if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Mosaic');
	};

	photonicJustifiedGridLayout(false);
	photonicMasonryLayout(false);
	photonicMosaicLayout(false);

	var currentStreams = document.documentElement.querySelectorAll('.photonic-stream');
	Array.prototype.forEach.call(currentStreams, function(stream) {
		var container = stream.querySelector('.photonic-level-1-container');
		if (container !== null && container.children !== undefined && container.children.length !== undefined && container.children.length === 0) {
			stream.parentNode.removeChild(stream);
		}
	});

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

