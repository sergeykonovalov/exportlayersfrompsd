#target photoshop
var docRef = app.activeDocument;
var dir = docRef.path.toString()+"/";
var subFolder = "exportName/";
var cFrom = 0;
var cTo = docRef.layers.length;

for (cFrom; cFrom < cTo; cFrom++) {
    var cLayer = docRef.layers[cFrom];
    var cLayerName = docRef.layers[cFrom].name;
    
    try {
    // Log to console
    $.writeln("Working on layer " + cFrom + ", titled " + cLayerName + ".\nWill export as " + cLayerName + ".jpeg at " + dir + ".");
    
    // Make current layer visible    
    cLayer.visible = true;
    
    // Define export options
    var exportOptions = new ExportOptionsSaveForWeb;
    exportOptions.format = SaveDocumentType.JPEG;
    exportOptions.quality = 90;
    exportOptions.transparency = false;
    
    docRef.exportDocument(new File(dir + subFolder + cLayerName + ".jpeg"), ExportType.SAVEFORWEB, exportOptions);
    
    // Make current layer invisible again
    cLayer.visible = false; }
    
    catch(err) {
        $.writeln(err);
    }
}   
