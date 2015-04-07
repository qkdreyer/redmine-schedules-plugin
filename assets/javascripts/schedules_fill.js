$(function() {
	var $corner = $('table.schedule_fill_grid td:first');
	var $rows = $('table.schedule_fill_grid tbody tr th');
	var $columns = $('table.schedule_fill_grid thead tr:last th');
	
	var toggle_cells = function($cells) {
		$.each($cells, function(index, el) {
			var $el = $(el);
			var $input = $el.find('input');
			var data_value = $el.data('value');
			if (!data_value) {
				$el.data('value', $input.val());
				$input.val('');
			} else {
				$input.val(data_value);
				$el.data('value', null);
			}
		});
	}

	$corner.on('click', function() {
		var $that = $(this);
		var $cells = $rows;

		$.each($rows, function(index, row) {
			$(row).trigger('click');
		});
	});

	$rows.on('click', function() {
		var $cells = $(this).siblings(':not(.fill)');
		
		return toggle_cells($cells);
	});

	$columns.on('click', function() {
		var index = $(this).index();
		var $cells = $('table.schedule_fill_grid tbody tr').find('td:eq(' + index + ')');

		return toggle_cells($cells);
	});

});