var testExport = (function(){
    var element = document.querySelector("#kmlExport");  
    element.addEventListener("click", function(){
        var fileParts = [];
        fileParts.push(kmlString);
        var blob = new Blob(fileParts, {type: "application/vnd.google-earth.kml+xml"});
        var url = window.URL.createObjectURL(blob);
        this.href = url;   
    } );
});