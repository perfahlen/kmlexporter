module Geo365{
    export class KmlDoc implements iKML{
        placeMarks : Placemark[];
        
        constructor(placemarks: Placemark[]){
            this.placeMarks = placemarks;
        }
        write = function(): string{
            var exportString = '<?xml version="1.0" encoding="utf-8"?>';
            exportString += '<kml xmlns="http://www.opengis.net/kml/2.2">';
            exportString += "<Folder>"
            this.placeMarks.forEach(function(pm){
               var placeMarkString = pm.write();
               exportString += placeMarkString; 
            });
            exportString += "</Folder>";
            exportString += "</kml>";
            return exportString;
        }
        
    }
}