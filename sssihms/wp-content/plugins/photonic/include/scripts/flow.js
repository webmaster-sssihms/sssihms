jQuery(document).ready(function($) {
	var photonicLastActiveScreen = 1;

	window.photonicCheckCondition = function(conditions) {
		var conditionMet = true;
		$(conditions).each(function(cidx, condition) {
			var keys = Object.keys(condition);
			$(keys).each(function(kidx, key){
				var keyValue = $('input[type="radio"][name="' + this + '"]:checked').val() || $('select[name="' + this + '"]').val() || $('input[type="text"][name="' + this + '"]').val();
				conditionMet = conditionMet && ($.inArray(keyValue, condition[key]) != -1);
			});
		});
		return conditionMet;
	};

	window.photonicUpdateSelection = function(clicked) {
		var $parent = $(clicked.parents('.photonic-flow-selector-container')[0]);
		var selection = [];
		$parent.find('.photonic-flow-selector.selected .photonic-flow-selector-inner').each(function() {
			selection[selection.length] = $(this).attr('data-photonic-selection-id');
		});
		selection = selection.join();
		var selectorFor = $parent.attr('data-photonic-flow-selector-for');
		$('input[name="' + selectorFor + '"]').val(selection);
	};

	window.photonicFlowLogic = function(screen) {
		$('.photonic-flow-screen').hide();
		var $activeScreen = $('.photonic-flow-screen[data-screen="' + screen + '"]');
		var fieldSequences = $activeScreen.find('.photonic-flow-field[data-photonic-flow-sequence="1"]');
		$(fieldSequences).each(function(i, v) {
			var group = $(v).attr('data-photonic-flow-sequence-group');
			$('.photonic-flow-field[data-photonic-flow-sequence-group="' + group +'"]').each(function(idx, fieldContainer) {
				var $field = $(fieldContainer).find('input, select');
				var fieldName = $field.attr('name');
				var fieldValue = $('input[type="radio"][name="' + fieldName + '"]:checked').val() || $('input[type="text"][name="' + fieldName + '"], select[name="' + fieldName + '"]').val();

				if (idx != 0 && (fieldValue == '' || fieldValue == undefined)) {
					$(fieldContainer).hide();
				}
				var $next = $(fieldContainer).next();
				var siblings = $(fieldContainer).siblings();
				var sequence = parseInt($(fieldContainer).attr('data-photonic-flow-sequence'));
				$field.on('change', function() {
					$('.photonic-flow-error').hide();
					if ($field.val() != '') {
						$(siblings).each(function(sidx, sibling){
							if ($(sibling).attr('data-photonic-flow-sequence') > sequence) {
								if ($(sibling).attr('data-photonic-condition') != undefined) {
									var conditionMet = photonicCheckCondition(JSON.parse($(sibling).attr('data-photonic-condition')));
									if (conditionMet) {
										$(sibling).show();
									}
									else {
										$(sibling).hide();
									}
								}
								else {
									$(sibling).fadeIn();
								}

								var $siblingFieldValues = $(sibling).find('input[type="radio"], option');
								$siblingFieldValues.each(function(sfidx, siblingFieldValue) {
									if ($(siblingFieldValue).attr('data-photonic-option-condition') != undefined) {
										var conditionMet = photonicCheckCondition(JSON.parse($(siblingFieldValue).attr('data-photonic-option-condition')));
										if (conditionMet) {
											if (siblingFieldValue.type == 'radio') {
												$(siblingFieldValue).parents('.photonic-flow-field-radio').show();
											}
											else {
												$(siblingFieldValue).show();
											}
										}
										else {
											if (siblingFieldValue.type == 'radio') {
												siblingFieldValue.checked = false;
												$(siblingFieldValue).parents('.photonic-flow-field-radio').hide();
											}
											else {
												$(siblingFieldValue).hide();
											}
										}
									}
								});
							}
						});
					}
					else {
						$(siblings).each(function(sidx, sibling){
							if ($(sibling).attr('data-photonic-flow-sequence') > sequence) {
								$(sibling).fadeOut();
							}
						});
					}
				});
			});
		});
		$activeScreen.show();
		if (screen == 1) {
			$('.photonic-flow-navigation a.previous').addClass('disabled');
		}
		else {
			$('.photonic-flow-navigation a.previous').removeClass('disabled');
		}
	};

	$('.photonic-flow-navigation a.disabled').click(function(e) {
		e.preventDefault();
	});

	$('.photonic-flow-navigation a').on('click', function(e) {
		if (!$(this).hasClass('disabled')) {
			e.preventDefault();
			var activeScreen = $('.photonic-flow-screen:visible').data('screen');
			var nextScreen = activeScreen + 1;
			var previousScreen = activeScreen - 1;
			var $form = $('#photonic-flow');
			var parameters = $form.serialize();
			if ($(this).hasClass('next')) {
				var $activeScreenElement = $('.photonic-flow-screen[data-screen="' + activeScreen + '"]');
				var screenParameters = $activeScreenElement.find('input, select, textarea').serialize();
				var submission = $activeScreenElement.attr('data-submitted');

				parameters += ((parameters == '') ? '' : '&') + 'action=photonic_flow_next_screen&screen=' + activeScreen;
				// Make AJAX call if we are on the last screen, or if the current screen's parameters have changed since the last time.
				// Otherwise just get the previously fetched screen. This saves a server call, and also helps preserve screen changes not sent to the back-end.
				if (activeScreen == photonicLastActiveScreen || submission != screenParameters) {
					$.post(ajaxurl, parameters, function(data){
						if ($(data).hasClass('photonic-flow-error')) {
							$('.photonic-flow-error').remove();
							$('.photonic-flow-screen[data-screen="' + activeScreen + '"]').before(data);
							$activeScreenElement.attr('data-submitted', '');
						}
						else {
							$('.photonic-flow-error').hide();
							if (nextScreen == 6) console.log(data);
							$('.photonic-flow-screen[data-screen="' + nextScreen + '"]').empty().append(data);
							photonicFlowLogic(nextScreen);
							photonicLastActiveScreen = nextScreen;
							$activeScreenElement.attr('data-submitted', screenParameters);
						}
					});
				}
				else {
					photonicFlowLogic(nextScreen);
				}
			}
			else if ($(this).hasClass('previous')) {
				photonicFlowLogic(previousScreen);
			}
		}
	});

	$('.photonic-gallery a').click(function(e) {
		e.preventDefault();
		$('.photonic-gallery a').removeClass('selected');
		var $clicked = $(this);
		$clicked.addClass('selected');
		$('#provider').val($clicked.data('provider'));
	});

	$(document).on('click', '.photonic-flow-selector', function(e) {
		e.preventDefault();
		var $clicked = $(this);
		var $container = $($clicked.parents('.photonic-flow-selector-container')[0]);
		var selectionMode = $container.attr('data-photonic-flow-selector-mode');
		if (selectionMode == 'none') {
			return;
		}
		else if (selectionMode == 'single' || selectionMode == 'single-no-plus') {
			$container.find('.photonic-flow-selector').removeClass('selected');
			$container.find('.photonic-flow-selector .dashicons').remove();
		}

		if (selectionMode == 'multi' || selectionMode == 'single') {
			$clicked.addClass('selected');
			$clicked.append('<a class="dashicons dashicons-plus" href="#"></a>');
		}
		else if (selectionMode == 'single-no-plus') {
			$clicked.addClass('selected');
		}
		photonicUpdateSelection($clicked);
	});

	$(document).on('mouseenter', '.photonic-flow-selector-container[data-photonic-flow-selector-mode="multi"] .dashicons', function(e) {
		$(this).toggleClass('dashicons-plus');
		$(this).toggleClass('dashicons-minus');
	});

	$(document).on('mouseleave', '.photonic-flow-selector-container[data-photonic-flow-selector-mode="multi"] .dashicons', function(e) {
		$(this).toggleClass('dashicons-plus');
		$(this).toggleClass('dashicons-minus');
	});

	$(document).on('click', '.photonic-flow-selector-container[data-photonic-flow-selector-mode="multi"] .dashicons', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $selector = $(this).parents('.photonic-flow-selector');
		$selector.removeClass('selected');
		$(this).remove();
		photonicUpdateSelection($selector);
	});

	photonicFlowLogic(1);
});
