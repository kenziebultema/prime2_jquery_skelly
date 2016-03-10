$(document).ready(function(){
    $('#cats').on('submit', getCat);
    getCat();
    addCat();
});

function getCat(){
    $.ajax({
        type: 'GET',
        url: '/cats',
        success: function(data){
            console.log(data);
            // appendDom(data);
        }
    });
}

function addCat(){
    $.ajax({
        type: 'POST',
        url: '/add',
        success: function(cat){
            console.log(cat);

        }
    });
}

function emptyForm(){
    var values = {};

	$.each($(".employeeInfo").serializeArray(), function(i, field){
		values[field.name] = field.value;
	});

	$('.employeeInfo').find('input[type = text]').val("");
}

// function appendDom(object){
//     for(var i = 0; i < object.length; i++){
//          $('.container').append('<p>Works</p>');
//}
// }


console.log('connected');
