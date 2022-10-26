
		function CrearCards(Nombres, Enlaces,EnlaceImagen)
		{
			let ListaCards;
			
			
			let TotalCode ="";
			//Carrousel indicators
			let ContentCarrousel;
			ContentCarrousel = '<div class="carousel-indicators">';
			ContentCarrousel += '<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>';

				for(cnt = 1; cnt < Nombres.length; cnt++)
				{
					ContentCarrousel += '<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="'+cnt+'" aria-label="Slide '+(cnt+1)+'"></button>';
				}
				ContentCarrousel += '</div>';
					
								TotalCode+=ContentCarrousel;

						//Chicha				
				
					TotalCode += '<div class="carousel-inner">';

					var s = "hola";
					var sa = `${s}`;

					let CardCode1 = '<div class="carousel-item active" data-bs-interval="10000">'+
					'<img src="'+EnlaceImagen+'" class="d-block w-100">'+
					'<div class="carousel-caption d-none d-md-block">'+
						'<h3>'+Nombres[0] +'</h3>'+
						'<a href="'+Enlaces[0]+'">Ir a la Pagina</a>'+
						'</div>' + '</div>';
		
						TotalCode += CardCode1;
				for(var cnt = 1; cnt < Enlaces.length; cnt++)
				{
					let CardCode = '<div class="carousel-item" data-bs-interval="2000">'+
					'<img src="'+EnlaceImagen+'" class="d-block w-100" >'+
					'<div class="carousel-caption d-none d-md-block">'+
						'<h3>'+Nombres[cnt] +'</h3>'+
						'<a href="'+Enlaces[cnt]+'">Ir a la Pagina</a>'+
						'</div>' + '</div>';
						TotalCode += CardCode;	
					}	
				
					return TotalCode;
		
			
		}
		function CrearCarrousel(Nombres, Enlaces,EnlaceImagen)
		{
			let Out = '<div class="container-lg"> <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">';
				Out+=CrearCards(Nombres, Enlaces,EnlaceImagen);
				Out+=`
		</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>`;
		document.write(Out);
		}
	