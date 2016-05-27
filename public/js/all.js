// add scripts
$(function() {

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
	    templates: {
	      item: function(data){
	      	if(data.popularity >= 0 && data.popularity < 1000){
	      		data.popularity = '☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 2/5</span> <p id="price">$'+data.price+'</p>';

		}else if(data.popularity >= 1000 && data.popularity < 5000 ){
	      		data.popularity = '☆☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 3/5</span> <p id="price">$'+data.price+'</p>';

	     	}else if(data.popularity >= 5000 && data.popularity < 8000 ){
	      		data.popularity = '☆☆☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 4/5</span> <p id="price">$'+data.price+'</p>';

	     	}else{
	      		data.popularity = '☆☆☆☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 5/5</span> <p id="price">$'+data.price+'</p>';
	     	}			
	       }
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
	      }
	    }
	  })
	);

	search.addWidget(
	  instantsearch.widgets.refinementList({
	    container: '#brandsMenu',
	    attributeName: 'brand',
	    operator: 'or',
	    limit: 10
	  })
	);	

	search.addWidget(
	  instantsearch.widgets.refinementList({
	    container: '#typesMenu',
	    attributeName: 'type',
	    operator: 'or',
	    limit: 10
	  })
	);

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

	search.addWidget(
	  instantsearch.widgets.pagination({
	    container: '#pagination-container',
	     scrollTo: '#search-box'
	  })
	);

	search.start();
}); 
$(function(){var i=instantsearch({appId:"W8I2YD0GJC",apiKey:"861d0757703675d68f5a0f915072381b",indexName:"tech_shop_data"});i.addWidget(instantsearch.widgets.searchBox({container:"#search-box",placeholder:"Search for products..."})),i.addWidget(instantsearch.widgets.hits({container:"#hits-container",cssClasses:{item:"productItem"},templates:{item:function(i){return i.popularity>=0&&i.popularity<1e3?(i.popularity="☆☆",'<a href="'+i.url+'"><img id="prodPic" src="'+i.image+'" alt="bestbuy item"></a><h1 id="title">'+i.name+'</h1><p id="description">'+i.description+'</p> <span id="popularity"><h4>Rating</h4>'+i.popularity+' 2/5</span> <p id="price">$'+i.price+"</p>"):i.popularity>=1e3&&i.popularity<5e3?(i.popularity="☆☆☆",'<a href="'+i.url+'"><img id="prodPic" src="'+i.image+'" alt="bestbuy item"></a><h1 id="title">'+i.name+'</h1><p id="description">'+i.description+'</p> <span id="popularity"><h4>Rating</h4>'+i.popularity+' 3/5</span> <p id="price">$'+i.price+"</p>"):i.popularity>=5e3&&i.popularity<8e3?(i.popularity="☆☆☆☆",'<a href="'+i.url+'"><img id="prodPic" src="'+i.image+'" alt="bestbuy item"></a><h1 id="title">'+i.name+'</h1><p id="description">'+i.description+'</p> <span id="popularity"><h4>Rating</h4>'+i.popularity+' 4/5</span> <p id="price">$'+i.price+"</p>"):(i.popularity="☆☆☆☆☆",'<a href="'+i.url+'"><img id="prodPic" src="'+i.image+'" alt="bestbuy item"></a><h1 id="title">'+i.name+'</h1><p id="description">'+i.description+'</p> <span id="popularity"><h4>Rating</h4>'+i.popularity+' 5/5</span> <p id="price">$'+i.price+"</p>")}}})),i.addWidget(instantsearch.widgets.menu({container:"#categoryMenu",attributeName:"categories",operator:"or",limit:10,templates:{item:function(i){return'<ul><li class="categoryList"><label class="checkbox-inline"><input type="checkbox">'+i.name+"</label>  <span><a>"+i.count+"</a></span></li></ul>"}}})),i.addWidget(instantsearch.widgets.rangeSlider({container:"#priceMenu",attributeName:"price",tooltips:{format:function(i){return"$"+i}}})),i.addWidget(instantsearch.widgets.refinementList({container:"#brandsMenu",attributeName:"brand",operator:"or",limit:10})),i.addWidget(instantsearch.widgets.refinementList({container:"#typesMenu",attributeName:"type",operator:"or",limit:10})),$(".categoryLink").on("click",function(){$("#categoryMenu").css("display","block")}),$("#categoryMenu").on("mouseover",function(){$("#categoryMenu").css("display","block")}),$("#categoryMenu").on("mouseout",function(){$("#categoryMenu").css("display","none")}),$(".priceLink").on("click",function(){$("#priceMenu").css("display","block")}),$("#priceMenu").on("mouseover",function(){$("#priceMenu").css("display","block")}),$("#priceMenu").on("mouseout",function(){$("#priceMenu").css("display","none")}),$(".brandLink").on("click",function(){$("#brandsMenu").css("display","block")}),$("#brandsMenu").on("mouseover",function(){$("#brandsMenu").css("display","block")}),$("#brandsMenu").on("mouseout",function(){$("#brandsMenu").css("display","none")}),$(".typeLink").on("click",function(){$("#typesMenu").css("display","block")}),$("#typesMenu").on("mouseover",function(){$("#typesMenu").css("display","block")}),$("#typesMenu").on("mouseout",function(){$("#typesMenu").css("display","none")}),i.addWidget(instantsearch.widgets.pagination({container:"#pagination-container",scrollTo:"#search-box"})),i.start()});
// add scripts
$(function() {

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
	    templates: {
	      item: function(data){
	      	if(data.popularity >= 0 && data.popularity < 1000){
	      		data.popularity = '☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 2/5</span> <p id="price">$'+data.price+'</p>';

		}else if(data.popularity >= 1000 && data.popularity < 5000 ){
	      		data.popularity = '☆☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 3/5</span> <p id="price">$'+data.price+'</p>';

	     	}else if(data.popularity >= 5000 && data.popularity < 8000 ){
	      		data.popularity = '☆☆☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 4/5</span> <p id="price">$'+data.price+'</p>';

	     	}else{
	      		data.popularity = '☆☆☆☆☆';
			return '<a href="'+data.url+'"><img id="prodPic" src="'+ data.image + '" alt="bestbuy item"></a><h1 id="title">'+data.name+'</h1><p id="description">'+data.description+'</p> <span id="popularity"><h4>Rating</h4>'+data.popularity+' 5/5</span> <p id="price">$'+data.price+'</p>';
	     	}			
	       }
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
	      }
	    }
	  })
	);

	search.addWidget(
	  instantsearch.widgets.refinementList({
	    container: '#brandsMenu',
	    attributeName: 'brand',
	    operator: 'or',
	    limit: 10
	  })
	);	

	search.addWidget(
	  instantsearch.widgets.refinementList({
	    container: '#typesMenu',
	    attributeName: 'type',
	    operator: 'or',
	    limit: 10
	  })
	);

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

	search.addWidget(
	  instantsearch.widgets.pagination({
	    container: '#pagination-container',
	     scrollTo: '#search-box'
	  })
	);

	search.start();
}); 