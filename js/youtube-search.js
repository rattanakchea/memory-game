var memory_array = memory_array || [];

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    
    // Add code here to test out showResponse():
    
}

function searchYoutube(){
	//use javascript client library to create a search.list() API call
	//part: 'id' tells the API that we want to retrieve only the YouTube ids of the search results

	var request = gapi.client.youtube.search.list({
		part: 'snippet'
	});

	//send the request to the API server
	//and invoke onSearchResponse() with the response
	request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    filterResponse(response);
}

function filterResponse(response){
	console.log("filters:");
	//console.log(response.items);
	memory_array = [];
	response.items.forEach(function (item){
		memory_array.push(item.snippet.thumbnails.default.url);
	});
	memory_array.doubeAndShuffle();
	console.log(memory_array);
	newBoard(memory_array);

}

$(function(){
    //newBoard();
});