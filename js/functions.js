$(document).ready(function() {
	
	$.ajax({
        type: 'GET',
		dataType: 'json',
        crossDomain: true,
        url: 'http://dev.meucarroturbo.com.br/data.php',
        async: false,
		success: function(response) {
            
			$('#aguarde').html('Carregado!');
			$('#aguarde2').html('Veja os anuncios abaixo!');
			
			var items = [];
			
            $.each(response, function( key, val) {
                
                var html = '<li>'+
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
            $('#aguarde').html('Deu ruim!');
			$('#aguarde2').html('Algo não saiu certo =(!');
        }
    });
});

$(document).bind( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
});


