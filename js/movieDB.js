    //testing movie database
 	//    tmdb.call("/configuration", {},
	//   function(e){
	//     console.log("Success: "+e)
	//   }, 
	//   function(e){
	//     console.log("Error: "+e)
	//   }
	// );
	function filterData(data){
		//poster_path: https://image.tmdb.org/t/p/w185/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg
		memory_array = []; //clear old data

		var base_image_url = 'https://image.tmdb.org/t/p/w185/';

		data.results.sort(shuffle);
		data.results.forEach(function(item){
			memory_array.push(base_image_url + item.poster_path);
		});

		memory_array = memory_array.slice(0, 5);
		memory_array.doubeAndShuffle();
		//console.log(memory_array);
		newBoard(memory_array);
	}

	function displayError(e){
		console.log(e);
	}
	//call moviedb
	var url = '/discover/movie',  //return 20 results
		params = {"page": 5, "primary_release_date.gte" : "2013-01-01"},
		success = filterData,
		error = displayError;


	function searchMovies(){
		tmdb.call(url, params, success, error);	
	}

