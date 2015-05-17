'use strict'

var App = App || {};

//initialization
App.openedCard = 0;
App.cards = [];


function getCardData(){
	return $.getJSON( "js/data.js", function( data ) {
	  	App.cards = data.cards;

	  	//shuffle cards
	  	App.cards.sort(function() { return 0.5 - Math.random() });
	  	//copy only first 8 cards
		App.cards = App.cards.slice(0, 8);
	});
}

function selectCard(){
	$(this).addClass("card-flipped");
}

$(function(){
	$.when(getCardData()).then(function(){
		//populate cards into div#cards
		for(var i=0;i<15;i++){
			$('.card:first-child').clone().appendTo('#cards');
		}

		//add events listener to each card
		$('#cards').children().each(function(index){
			$(this).on('click', selectCard);
		});

	
	});
});
