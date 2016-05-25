// add scripts
$(function() {

	var $grid = $('.grid').masonry({
			// options
			itemSelector: '.grid-item',
			columnWidth:  '.grid-sizer',
			percentPosition: true,
			gutter: 10
			});

	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.masonry('layout');
	});
}); 



	  



	// var search = instantsearch({
	//        appId: 'W8I2YD0GJC',
	//        apiKey: 'YourSearchOnlyAPIKey',
	//        indexName: '861d0757703675d68f5a0f915072381b'
	//      });

	//      search.addWidget(
	//        instantsearch.widgets.searchBox({
	//          container: '#search-box',
	//          placeholder: 'Search for products...'
	//        })
	//      );

	//      search.addWidget(
	//        instantsearch.widgets.hits({
	//          container: '#hits-container',
	//          templates: {
	//            item: 'Hit {{objectID}}: FIXME'
	//          }
	//        })
	//      );

	//      search.addWidget(
	//        instantsearch.widgets.pagination({
	//          container: '#pagination-container'
	//        })
	//      );

	//      search.start();
