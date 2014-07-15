$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu'
  	});

  	$('#showExamples').click(function(e){
  		e.stopPropagation();
  		$('#examplesList').toggle();
  	});

  	$('html').click(function(){
  		$('#examplesList').hide();
  	});
  	
  	$( "#accordion" )
  		.accordion({
  			heightStyle: "content"
  	})
  		.accordion({
  			collapsible: true	
  	});

  });
