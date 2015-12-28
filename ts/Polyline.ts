///<reference path='Coordinate.ts' />
module Geo365{
    export class Polyline implements iGeometry, iKML {
        constructor(coordinates: Coordinate[]){
            this.coordinates = coordinates
        };
        
        geometryType = "Polyline";
        
        coordinates: Coordinate[];
        
        write = function():string{
            var exportString = "<LineString><coordinates>";
            this.coordinates.forEach(function(coordinate){
                exportString += coordinate.longitude + ",";
                exportString += coordinate.latitude + "\n";
            });
            exportString += "</coordinates></LineString>";
            return exportString;
        };
    }
}