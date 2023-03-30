$(document).ready(function () {
	$('.save').click(function () {
		$('#error').hide();
		var key = $.trim($('textarea[name=key]').val());

		$.cookie('bosBackendSshKey', key);

		//Make sure it works
		$.ajaxSetup({
			headers: {
				'bos-ssh-key': key || true
			}
		});
		bosBackend('dashboard').get('__is-root', function (res) {
			if (res && res.isRoot) {
				window.location.reload();
			} else {
				$('#error').show();
			}
		});
	});
});
