module Geo365{
    export class Coordinate implements iCoordinate, iKML, iGeometry {
        longitude: number;
        latitude: number;
        
        write = function(): string{
            var exportString = "<Point><coordinates>" + this.longitude + "," + this.latitude + "</coordinates></Point>";
            return exportString;
        }

        constructor(longitude: number, latitude: number) {
            this.longitude = longitude;
            this.latitude = latitude;
        }
        
        geometryType = "Coordinate";

        isEqual(coordinate: Coordinate): boolean{
            if (coordinate.latitude === this.latitude) {
                if (coordinate.longitude === this.longitude) {
                    return true;
                }
            }
            return false;
        };
    }
}