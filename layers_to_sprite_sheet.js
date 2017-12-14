// Arrange layers into a sprite sheet. 

if (documents.length > 0) 
{
	
	// --------------------------
	docRef = activeDocument;    
	var activeLayer = docRef.activeLayer;

	numLayers = docRef.artLayers.length; 	
	var cols = docRef.width;
	
 	var spriteX = docRef.width;
 	var spriteY = docRef.height;
	var rows = Math.ceil(numLayers/12)

	// put things in order
	app.preferences.rulerUnits = Units.PIXELS;
	
	
	if (numLayers <= 12){
		
		// resize the canvas
		newX = numLayers * spriteX;
		
		docRef.resizeCanvas( newX, docRef.height, AnchorPosition.TOPLEFT );
			
		// move the layers around
		for (i=0; i < numLayers; i++)
		{ 	
			docRef.artLayers[i].visible = 1;
			
			var movX = spriteX*i;
			
			docRef.artLayers[i].translate(movX, 0);
		}
	}
	else {
		
		// resize the canvas
		newX = spriteX * 12;
		newY = spriteY * rows;
		docRef.resizeCanvas( newX, newY, AnchorPosition.TOPLEFT );
		
		
		
		// move the layers around
		for (i=0; i < numLayers; i++){ 	
		
			docRef.artLayers[i].visible = 1;
			
			var currRow = Math.floor(i/12);
			var currCol = i - (currRow * 12);	
			
			var movX = spriteX*currCol;
			var movY = 768*currRow;
			
			
			docRef.artLayers[i].translate(movX, movY);
			currCol++;
		}
	}
}	
