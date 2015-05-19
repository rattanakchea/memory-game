var memory_array = [];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var value = $('input[name=radio]:checked').val();

function run(){
    initialize();
    memory_array.doubeAndShuffle();
    newBoard(memory_array);
}

function initialize(){
    memory_array = [];
    memory_array = ['https://i.imgflip.com/kc3ip.jpg',
                    'https://i.imgflip.com/kc3rr.jpg' ];
}

 function startGame(value){
        switch(value) {
            case 'youtube' :
                console.log('youtube');
                searchYoutube();
                break;
            case 'moviedb':
                console.log('movieDB...');
                searchMovies();
                break;
            default :
                run();
                return;
        }
}


//double and shuffle array
Array.prototype.doubeAndShuffle = function(){
    var length = this.length;
    for(var i=0; i< length; i++){
        this.push(this[i]);
        //console.log(this[i]);
    }
    
    this.sort(shuffle);
}

//shuffle array
function shuffle() {
    return 0.5 - Math.random();
}

//create new board
function newBoard(images){
    tiles_flipped = 0;
    var output = '';
    for(var i=0; i<images.length; i++){
        output += '<div class="card" id="tile_'+i+'" onclick="memoryFlipTile(this,\''+images[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}

//flip a card
//params: tile (the div that contains the card)
//      : val (data, image-url)
function memoryFlipTile(tile,val){
    if(tile.innerHTML == "" && memory_values.length < 2){
        //console.log(JSON.stringify(tile));  //converting circular structure to json
        //console.dir(tile);
        //tile.style.background = '#FFF';
        tile.innerHTML = '<img src="'+val+'" />';
        if(memory_values.length == 0){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if(memory_values.length == 1){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if(memory_values[0] == memory_values[1]){
                tiles_flipped += 2;
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                if(tiles_flipped == memory_array.length){
                    alert("Board cleared... generating new board");
                    document.getElementById('memory_board').innerHTML = "";
                    startGame(value);
                }
            } else {
                //not matched
                function flip2Back(){
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    console.log(tile_1);
                    //tile_1.addClass("card");
                    //tile_1.style.background = 'url(images/default.png) no-repeat';
                    tile_1.innerHTML = '';
                    tile_1.innerHTML = "";
                    //tile_2.style.background = 'url(images/default.png) no-repeat';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}


$(function(){    

    //run default game
    startGame(value);

    $('input[type="radio"]').on('click', function(e){
        value = (this.value);
        startGame(value);
    })


    //movie database

});