// Let's hide the smaller test icon first
$(document).ready(function() {
	$('#smallerText').hide();
});
// Make the text larger by changing the ID 'contentText' to have a font-size value of 16px
// We then want to show the smaller icon and hide the larger one
function largerText() {
	$("#contentText").css('font-size','16px');
	$("#largerText").hide();
	$('#smallerText').show();
}
// This reverses the process by reassigning a font-size value of 14px to the id 'contentText'
// We also want to show the large idon, and hide the small one
function smallerText() {
	$("#contentText").css('font-size','14px');
	$('#smallerText').hide();
	$("#largerText").show();
}