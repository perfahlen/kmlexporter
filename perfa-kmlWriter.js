var Geo365;
(function (Geo365) {
    var Coordinate = (function () {
        function Coordinate(longitude, latitude) {
            this.write = function () {
                var exportString = "<Point><coordinates>" + this.longitude + "," + this.latitude + "</coordinates></Point>";
                return exportString;
            };
            this.geometryType = "Coordinate";
            this.longitude = longitude;
            this.latitude = latitude;
        }
        Coordinate.prototype.isEqual = function (coordinate) {
            if (coordinate.latitude === this.latitude) {
                if (coordinate.longitude === this.longitude) {
                    return true;
                }
            }
            return false;
        };
        ;
        return Coordinate;
    })();
    Geo365.Coordinate = Coordinate;
})(Geo365 || (Geo365 = {}));
var Geo365;
(function (Geo365) {
    var KmlDoc = (function () {
        function KmlDoc(placemarks) {
            this.write = function () {
                var exportString = '<?xml version="1.0" encoding="utf-8"?>';
                exportString += '<kml xmlns="http://www.opengis.net/kml/2.2">';
                exportString += "<Folder>";
                this.placeMarks.forEach(function (pm) {
                    var placeMarkString = pm.write();
                    exportString += placeMarkString;
                });
                exportString += "</Folder>";
                exportString += "</kml>";
                return exportString;
            };
            this.placeMarks = placemarks;
        }
        return KmlDoc;
    })();
    Geo365.KmlDoc = KmlDoc;
})(Geo365 || (Geo365 = {}));
///<reference path='iKml.ts' />
var Geo365;
(function (Geo365) {
    var Placemark = (function () {
        function Placemark(name, geometry) {
            this.write = function () {
                var exportString = "<Placemark>";
                exportString += "<name>" + this.name + "</name>";
                exportString += this.geometry.write();
                exportString += "</Placemark>";
                return exportString;
            };
            this.name = name;
            this.geometry = geometry;
        }
        ;
        return Placemark;
    })();
    Geo365.Placemark = Placemark;
})(Geo365 || (Geo365 = {}));
///<reference path='Coordinate.ts' />
var Geo365;
(function (Geo365) {
    var Polyline = (function () {
        function Polyline(coordinates) {
            this.geometryType = "Polyline";
            this.write = function () {
                var exportString = "<LineString><coordinates>";
                this.coordinates.forEach(function (coordinate) {
                    exportString += coordinate.longitude + ",";
                    exportString += coordinate.latitude + "\n";
                });
                exportString += "</coordinates></LineString>";
                return exportString;
            };
            this.coordinates = coordinates;
        }
        ;
        return Polyline;
    })();
    Geo365.Polyline = Polyline;
})(Geo365 || (Geo365 = {}));
///<reference path='Polyline.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Geo365;
(function (Geo365) {
    var Polygon = (function (_super) {
        __extends(Polygon, _super);
        function Polygon(coordinates) {
            _super.call(this, coordinates);
            this.write = function () {
                var exportString = "<Polygon><extrude>true</extrude><outerBoundaryIs><LinearRing><coordinates>";
                this.coordinates.forEach(function (coordinate) {
                    exportString += coordinate.longitude + ",";
                    exportString += coordinate.latitude + "\n";
                });
                exportString += "</coordinates></LinearRing></outerBoundaryIs></Polygon>";
                return exportString;
            };
            this.geometryType = "Polygon";
            this.validatePolygon = function () {
                var firstPoint = this.coordinates[0];
                var lastPoint = this.coordinates[this.coordinates.length - 1];
                var polygonClosed = firstPoint.isEqual(lastPoint);
                return polygonClosed;
            };
        }
        ;
        return Polygon;
    })(Geo365.Polyline);
    Geo365.Polygon = Polygon;
})(Geo365 || (Geo365 = {}));
var c1 = new Geo365.Coordinate(0.0, 0.0);
var p1 = new Geo365.Placemark("p1", c1);
var c2 = new Geo365.Coordinate(10.0, 10.0);
var p2 = new Geo365.Placemark("p2", c2);
var c3 = new Geo365.Coordinate(-10.0, 10.0);
var p3 = new Geo365.Placemark("p3", c3);
var polyline = new Geo365.Polyline([c1, c2, c3,]);
var p4 = new Geo365.Placemark(polyline.geometryType, polyline);
var polygon = new Geo365.Polygon([c1, c2, c3, c1]);
var p5 = new Geo365.Placemark(polygon.geometryType, polygon);
var kmlDoc = new Geo365.KmlDoc([p1, p2, p3, p4, p5]);
var kmlString = kmlDoc.write();
//# sourceMappingURL=perfa-kmlWriter.js.map