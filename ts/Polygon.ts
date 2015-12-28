
///<reference path='Polyline.ts' />

module Geo365{
    export class Polygon extends Polyline implements iKML{
        constructor(coordinates: Coordinate[]){
            super(coordinates);
        };
        
        write = function():string{
            var exportString = "<Polygon><extrude>true</extrude><outerBoundaryIs><LinearRing><coordinates>";
            this.coordinates.forEach(function(coordinate){
                exportString += coordinate.longitude + ","
                exportString += coordinate.latitude + "\n";
            });
            exportString += "</coordinates></LinearRing></outerBoundaryIs></Polygon>";
            return exportString;
        }
        
        geometryType = "Polygon";
        
        validatePolygon = function(){
            var firstPoint = this.coordinates[0];
            var lastPoint = this.coordinates[this.coordinates.length-1];
            var polygonClosed = firstPoint.isEqual(lastPoint);
            return polygonClosed;
        }
    }
}