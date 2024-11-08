$ = jQuery.noConflict();
jQuery(document).ready(function($) {
	$(document).on('click', '.photonic-helper-box input[type="button"]', function() {
		$('.photonic-waiting').show();
		var formValues = $('#photonic-helper-form').serialize();
		var result = $($(this).parents('.photonic-helper-box')[0]).find('.result');
		var nextToken = $(this).data('photonicToken') == undefined ? '' : '&nextPageToken=' + $(this).data('photonicToken');
		$.post(ajaxurl, "action=photonic_invoke_helper&helper=" + this.id + '&' + formValues + nextToken, function(data) {
			if (data.trim().length >= 3 && data.trim().substr(0,3) == '<tr') {
				$($(result).find('input[type="button"]')[0]).parents('tr').remove();
				$(result).find('table').append($(data));
			}
			else {
				$(result).html(data);
			}
			$('.photonic-waiting').hide();
		});
	});

    window.photonicSaveToken = function photonicSaveToken(e) {
        e.preventDefault();
        $('.photonic-waiting').show();
        var provider = $(this).data('photonicProvider');
        var token = $('#' + provider + '-token').text();
        var tokenSecret = $('#' + provider + '-token-secret').text();
        var args = {'action': 'photonic_save_token', 'provider': provider, 'token': token, 'secret': tokenSecret };
        $.post(ajaxurl, args, function(data) {
            window.location.replace(data);
        });
    };

	$('.photonic-picasa-refresh, .photonic-google-refresh').click(function(e) {
		e.preventDefault();
		$('.photonic-waiting').show();
		var provider = $(this).hasClass('photonic-picasa-refresh') ? 'picasa' : 'google';
		var result = $('#' + provider + '-result');
		var args = {'action': 'photonic_obtain_token', 'provider': provider, 'code': $('#photonic-' + provider + '-oauth-code').val(), 'state': $('#photonic-' + provider + '-oauth-state').val() };
		$.post(ajaxurl, args, function(data) {
			data = $.parseJSON(data);
			$(this).remove();
			$("<span class='photonic-helper-button photonic-helper-button-disabled'>" +
				Photonic_Admin_JS.obtain_token == undefined ? 'Step 2: Obtain Token' : Photonic_Admin_JS.obtain_token +
				'</span>').insertBefore(result);
			$(result).html('<strong>Refresh Token:</strong> <code id="' + provider + '-token">' + data['refresh_token'] + '</code>');
            var a = $("<a href='#' class='button button-primary photonic-save-token' data-photonic-provider='" + provider + "'>Save Token</a>");
			a.insertAfter(result);
            a.on('click', photonicSaveToken);
			$('.photonic-waiting').hide();
		});
	});

	$('.photonic-token-request').click(function(e) {
		e.preventDefault();
		$('.photonic-waiting').show();
		var args = {'action': 'photonic_obtain_token', 'provider': $(this).data('photonicProvider') };
		$.post(ajaxurl, args, function(data) {
			window.location.replace(data);
		});
	});

    $('.photonic-save-token').on('click', photonicSaveToken);
});
