document.onLoad = initialize()

function initialize() {

	var tileContainer = document.createElement('div');
	document.body.appendChild(tileContainer);
	tileContainer.style.width = "1000px";
	tileContainer.style.height = "1000px";
	

	globalColor = ""
	clicked = 0

	// tileContainer.style.border = "1px solid black"

	for (var i = 0; i < 1305; i++) {
		var tile = document.createElement('div');
		tileContainer.appendChild(tile);

		tile.style.backgroundColor = 'white';
		tile.style.width = '20px';
		tile.style.height = '20px';
		tile.style.border = "1px solid black"
		tile.style.float = 'left'
		tile.className = "notPaint"
		tile.draggable = "false"

		if (i === 0) {
			tile.style.backgroundColor = 'black';	
			tile.className = "paintColor"		
		};

		if (i === 1) {
			tile.style.backgroundColor = 'green';	
			tile.className = "paintColor"		
		};

		if (i === 2) {
			tile.style.backgroundColor = 'blue';	
			tile.className = "paintColor"		
		};

		if (i === 3) {
			tile.style.backgroundColor = 'yellow';	
			tile.className = "paintColor"		
		};

		if (i === 4) {
			tile.style.backgroundColor = 'pink';	
			tile.className = "paintColor"		
		};

		if (i === 5) {
			tile.style.backgroundColor = 'white';	
			tile.className = "paintColor"		
		};

		if (i === 6) {
			tile.style.backgroundColor = 'orange';	
			tile.className = "paintColor"		
		};
    };


    var tiles = document.querySelectorAll('div')

    for (var i = 1; i < tiles.length; i++) {

      tiles[i].addEventListener('mouseover', function(){
 		  // clicked = 1

    	  console.log(clicked)
      })

      tiles[i].addEventListener('click', function(){

      	if (this.className === "paintColor") {
			 globalColor = this.style.backgroundColor
		} else {
    		 this.style.backgroundColor = globalColor
		}

    	if (clicked === 1) {
    	  	clicked = 0
    	}else {
    	  	clicked = 1
    	};
    	  console.log(clicked)
      })

   
   

  


    };

}

