///<reference path='iKml.ts' />
module Geo365{
    export class Placemark implements iKML  {
        name: string;
        geometry: iGeometry;
        
        constructor(name: string, geometry: iGeometry){
            this.name = name;
            this.geometry = geometry;
        };
        
        write = function():string{
            var exportString = "<Placemark>";
            exportString += "<name>" + this.name + "</name>";
            exportString += this.geometry.write();
            exportString += "</Placemark>";
            return exportString;
        };
    }
}