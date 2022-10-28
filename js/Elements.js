
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
		function CrearNavBar()
		{
			let out= `<nav class="navbar navbar-expand-lg navbar-light bg-info" >
			<div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
			  <a class="navbar-brand" href="index.html">Uristoteles WEB</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse text-center" id="navbarNav">
				<ul class="navbar-nav">
				  <li class="nav-item">
					<a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
				  </li>
				  
				  
				  <li class="nav-item">
					<a class="nav-link active" href="SecondPage.html" tabindex="-1" aria-disabled="true">MiniProgramas</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link active" href="https://github.com/UristotelesCEP" tabindex="-1" aria-disabled="true">GitHub</a>
				  </li>
				</ul>
			  </div>
			</div>
		  </nav>`;
		  document.write(out);
		}
	function CrearCardIndex(NombreCard, DescripcionCard, ImagenCard, ListaElementos, Enlaces, lenguages)
	{
		let out = `<div class="card" style="width: 18rem;">
		<img class="card-img-top" src="`+ImagenCard+`" alt="Card image cap" width="300" height="300	">
		<div class="card-body">
		  <h5 class="card-title">`+NombreCard+`</h5>
		  <p class="card-text">`+DescripcionCard+`</p>
		</div>`+AfegirElementsCardIndex(ListaElementos,Enlaces,lenguages)+`</div>`;			
	  

	  document.write(out);
	}
	function AfegirElementsCardIndex(ListaElementos, Enlaces, lenguages)
	{
		let StringDeRetornoConLaLista = "";
		StringDeRetornoConLaLista+=`<ul class="list-group">`;
		for(cnt = 0; cnt < ListaElementos.length; cnt++){
			let TempString = `<li class="list-group-item d-flex justify-content-between align-items-center">`+ CrearBadages(lenguages[cnt])+`<a href="`+Enlaces[cnt]+`"target="_blank">`+ListaElementos[cnt]+` </a> </li>`;
			StringDeRetornoConLaLista += TempString;
		}
		StringDeRetornoConLaLista += `</ul>`;
		return StringDeRetornoConLaLista

	}
	
	function CrearBadages(indexNum)
	{
		console.log(indexNum);
		let out;

		

		switch(indexNum)
		{
			case IndexPhp:
				return `<span class="badge bg-`+Llenguatges[1][0]+` text-light" style="margin-right: 10px;">`+Llenguatges[0][0]+`</span>`;
			break;
			case IndexJS:
				return `<span class="badge bg-`+Llenguatges[1][1]+` text-dark" style="margin-right: 10px;">`+Llenguatges[0][1]+`</span>`;
			break;
			case IndexPersonal:
				return `<span class="badge bg-`+Llenguatges[1][3]+` text-light" style="margin-right: 10px;">`+Llenguatges[0][3]+`</span>`;
			break;
			case IndexCss:
				return `<span class="badge bg-`+Llenguatges[1][2]+` text-dark" style="margin-right: 10px;">`+Llenguatges[0][2]+`</span>`;
			break;
		}
		

		return out;
		
		
		/*<span class="badge bg-warning text-dark">Warning</span>*/	
	}
	