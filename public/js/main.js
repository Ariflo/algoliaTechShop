

// add scripts
$(function() {

	//set focus on search on page load
	$("#search-box").focus();

	// algolia instantsearch widgets
	var search = instantsearch({
	       appId: 'W8I2YD0GJC',
	       apiKey: '861d0757703675d68f5a0f915072381b',
	       indexName: 'tech_shop_data'
	});

	search.addWidget(
             instantsearch.widgets.searchBox({
               container: '#search-box',
               placeholder: 'Search for products...'
             })
            );

	search.addWidget(
	  instantsearch.widgets.hits({
	    container: '#hits-container',
	    cssClasses:{
	    	item: "productItem"
	    		},
	    hitsPerPage: 50,
	    templates: {
	      item: function(data){
	      	if(data.popularity >= 0 && data.popularity < 1000){
	      		data.popularity = '☆☆';
			return '<img id="prodPic" src="'+ data.image +'" alt="bestbuy item"><div class="row"><span id="popularity"><h4>'+data.popularity+' 2/5</h4></span></div><div class="row"><p id="price">$'+data.price+'</p></div><div class="row"><a href="'+data.url+'"><button class="btn btn-success btn-lg">Buy</button></a></div><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p>';

		}else if(data.popularity >= 1000 && data.popularity < 5000 ){
	      		data.popularity = '☆☆☆';
			return '<img id="prodPic" src="'+ data.image +'" alt="bestbuy item"><div class="row"><span id="popularity"><h4>'+data.popularity+' 3/5</h4></div></span><div class="row"><p id="price">$'+data.price+'</p></div><div class="row"><a href="'+data.url+'"><button class="btn btn-success btn-lg">Buy</button></a></div><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p>';

	     	}else if(data.popularity >= 5000 && data.popularity < 8000 ){
	      		data.popularity = '☆☆☆☆';
			return '<img id="prodPic" src="'+ data.image +'" alt="bestbuy item"><div class="row"><span id="popularity"><h4>'+data.popularity+' 4/5</h4></div></span><div class="row"><p id="price">$'+data.price+'</p></div><div class="row"><a href="'+data.url+'"><button class="btn btn-success btn-lg">Buy</button></a></div><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p>';

	     	}else{
	      		data.popularity = '☆☆☆☆☆';
			return '<img id="prodPic" src="'+ data.image +'" alt="bestbuy item"><div class="row"><span id="popularity"><h4>'+data.popularity+' 5/5</h4></div></span><div class="row"><p id="price">$'+data.price+'</p></div><div class="row"><a href="'+data.url+'"><button class="btn  btn-success btn-lg">Buy</button></a></div><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p>';
	     	}

	       },
	       empty: '<div id="notFoundContainer"><h1 id="notFoundHeader">Sorry Snoopy cannot find what you seek...</h1><img id="notFound" src="./assets/images/notFound.gif"></div>'	
	    }
	  })
	);




	search.addWidget(
	  instantsearch.widgets.menu({
	    container: '#categoryMenu',
	    attributeName: 'categories',
	    operator: 'or',
	    limit: 10,
	   templates:{
	   	item: function(data){
	   		return '<ul><li class="categoryList"><label class="checkbox-inline"><input type="checkbox">'+data.name+'</label>  <span><a>'+data.count+'</a></span></li></ul>'
	   	}
	       }
	  })
	  );

	search.addWidget(
	  instantsearch.widgets.rangeSlider({
	    container: '#priceMenu',
	    attributeName: 'price',
	    tooltips: {
	      format: function(formattedValue) {
	        return '$' + formattedValue;
	      },
	      min:0,
	      max: 5000
	    }
	  })
	);

	search.addWidget(
	  instantsearch.widgets.refinementList({
	    container: '#brandsMenu',
	    attributeName: 'brand',
	    operator: 'or',
	    limit: 10,
	    templates:{
	    	item: function(data){
	    		return '<ul><li class="brandsList"><label class="checkbox-inline"><input type="checkbox">'+data.name+'</label>  <span><a>'+data.count+'</a></span></li></ul>'
	    	}
	        }
	  })
	);	

	search.addWidget(
	  instantsearch.widgets.refinementList({
	    container: '#typesMenu',
	    attributeName: 'type',
	    operator: 'or',
	    limit: 10,
	    templates:{
	    	item: function(data){
	    		return '<ul><li class="typesList"><label class="checkbox-inline"><input type="checkbox">'+data.name+'</label>  <span><a>'+data.count+'</a></span></li></ul>'
	    	}
	        }
	  })
	);

	search.addWidget(
	  instantsearch.widgets.pagination({
	    container: '#pagination-container',
	     scrollTo: '#search-box',
	     cssClasses: {
	     	root:"page",
	     	link:"num"
	     }
	  })
	);

	search.start();

	//Navbar animations
	$('.categoryLink').on("click", function () {
		$('#categoryMenu').css("display", "block");
	});	

	$('#categoryMenu').on('mouseover', function(){
		$('#categoryMenu').css("display", "block");
	})	

	$('#categoryMenu').on('mouseout', function(){
		$('#categoryMenu').css("display", "none");
	})	


	$('.priceLink').on("click", function () {
		$('#priceMenu').css("display", "block");
	});	

	$('#priceMenu').on('mouseover', function(){
		$('#priceMenu').css("display", "block");
	})	

	$('#priceMenu').on('mouseout', function(){
		$('#priceMenu').css("display", "none");
	})	



	$('.brandLink').on("click", function () {
		$('#brandsMenu').css("display", "block");
	});	

	$('#brandsMenu').on('mouseover', function(){
		$('#brandsMenu').css("display", "block");
	})	

	$('#brandsMenu').on('mouseout', function(){
		$('#brandsMenu').css("display", "none");
	})
	

	$('.typeLink').on("click", function () {
		$('#typesMenu').css("display", "block");
	});	

	$('#typesMenu').on('mouseover', function(){
		$('#typesMenu').css("display", "block");
	})	

	$('#typesMenu').on('mouseout', function(){
		$('#typesMenu').css("display", "none");
	})
}); 