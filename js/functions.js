$(document).ready(function() {
    
});

function onDeviceReady() {
    $.ajax({
        type: 'GET',
		dataType: 'json',
        crossdomain: true,
        url: 'http://dev.meucarroturbo.com.br/data.php',
        async: false,
		success: function(response) {
            
            var items = [];
            $.each(response, function( key, val) {
                
                var html = '<li onclick="location.href="single-page.html";">'+
							'<img src="'+ val.guid +'" width="200" height="200">'+
							'<div class="post-info">'+
								'<div class="post-basic-info">'+
									'<h3><a href="#">'+ val.post_title +'</a></h3>'+
									'<span><a href="#"><label> </label>Carros</a></span>'+
									'<p>'+ val.post_content +'</p>'+
								'</div>'+
								'<div class="post-info-rate-share">'+
									'<div class="rateit">'+
										'<span> </span>'+
									'</div>'+
									'<div class="post-share">'+
										'<span> </span>'+
									'</div>'+
									'<div class="clear"> </div>'+
								'</div>'+
							'</div>'+
						'</li>';
                
                $('#tiles').append(html);
            });
        },
        error: function(){
            alert("Encontramos algum erro, tente novamente");
        }
    });
}