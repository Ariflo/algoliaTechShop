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
	      	return '<div class="grid-item"><img id="'+ data.name +'" src="'+ data.image + '" alt="bestbuy item"></div>';
	      }	
	    }
	  })
	);

	search.addWidget(
	  instantsearch.widgets.refinementList({
	    container: '#brandsMenu',
	    attributeName: 'brand',
	    operator: 'or',
	    limit: 10,
	    templates: {
	      item: '<ul><li class="brandsList"><label class="checkbox-inline"><input type="checkbox"></label></li></ul>'
	    }
	  })
	);

	$('body').on("click","img", function (e) {
		e.target.id
	});

	// <div class="grid"><div class="grid-sizer"></div><div class="grid-item" ng-click="productLookup(item)" ><img src="{{tech.image}}" alt="bestbuy item"></div></div>'
	search.addWidget(
	  instantsearch.widgets.pagination({
	    container: '#pagination-container'
	  })
	);

	search.start();
}); 



	  // app({
	  //   appId: 'latency',
	  //   apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
	  //   indexName: 'instant_search'
	  // });

	  // function app(opts) {
	  //   var search = instantsearch({
	  //     appId: opts.appId,
	  //     apiKey: opts.apiKey,
	  //     indexName: opts.indexName,
	  //     urlSync: true
	  //   });

	  //   var widgets = [
	  //     instantsearch.widgets.searchBox({
	  //       container: '#search-input',
	  //       placeholder: 'Search for products'
	  //     }),
	  //     instantsearch.widgets.hits({
	  //       container: '#hits',
	  //       hitsPerPage: 10,
	  //       templates: {
	  //         item: getTemplate('hit'),
	  //         empty: getTemplate('no-results')
	  //       }
	  //     }),
	  //     instantsearch.widgets.stats({
	  //       container: '#stats'
	  //     }),
	  //     instantsearch.widgets.sortBySelector({
	  //       container: '#sort-by',
	  //       autoHideContainer: true,
	  //       indices: [{
	  //         name: opts.indexName, label: 'Most relevant'
	  //       }, {
	  //         name: opts.indexName + '_price_asc', label: 'Lowest price'
	  //       }, {
	  //         name: opts.indexName + '_price_desc', label: 'Highest price'
	  //       }]
	  //     }),
	  //     instantsearch.widgets.pagination({
	  //       container: '#pagination',
	  //       scrollTo: '#search-input'
	  //     }),
	  //     instantsearch.widgets.refinementList({
	  //       container: '#category',
	  //       attributeName: 'categories',
	  //       limit: 10,
	  //       operator: 'or',
	  //       templates: {
	  //         header: getHeader('Category')
	  //       }
	  //     }),
	  //     instantsearch.widgets.refinementList({
	  //       container: '#brand',
	  //       attributeName: 'brand',
	  //       limit: 10,
	  //       operator: 'or',
	  //       templates: {
	  //         header: getHeader('Brand')
	  //       }
	  //     }),
	  //     instantsearch.widgets.rangeSlider({
	  //       container: '#price',
	  //       attributeName: 'price',
	  //       templates: {
	  //         header: getHeader('Price')
	  //       }
	  //     }),
	  //     instantsearch.widgets.refinementList({
	  //       container: '#type',
	  //       attributeName: 'type',
	  //       limit: 10,
	  //       operator: 'and',
	  //       templates: {
	  //         header: getHeader('Type')
	  //       }
	  //     })
	  //   ];

	  //   widgets.forEach(search.addWidget, search);
	  //   search.start();
	  // }

	  // function getTemplate(templateName) {
	  //   return document.querySelector('#' + templateName + '-template').innerHTML;
	  // }

	  // function getHeader(title) {
	  //   return '<h5>' + title + '</h5>';
	  // }