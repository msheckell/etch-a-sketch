
// Variables

var rowNum = 10;
var colNum = 20;
var $row = '<tr class="row"></tr>'
var $block  = '<td class="block"></td>';

$(document).ready(function(){
	

	//$('.block').width('.wrapper'.width /5);
	

	blockCreation();

	// Changes square background color on mouse enter by adding css class
	$('.block').mouseenter(function(){
		$(this).addClass('selected');
	});

	// Reset square background color when clicking reset button
	$('.reset').click(function(){
		blockDelete();
		// $('.block').removeClass('selected');
		blockCreation();
	});
});

// Functions

function blockCreation() {
	var r = 0;
	var i = 0;

	var rowNum = prompt("How many rows?");
	var colNum = prompt("How many columns?");

	while(r<rowNum) {
		$('.wrapper').append($row);
		r++;
	};
	while(i<colNum) {
		$('.row').append($block);
		i++;
	};
}

function blockDelete() {
	$('.row').remove();
	$('.block').remove();
}