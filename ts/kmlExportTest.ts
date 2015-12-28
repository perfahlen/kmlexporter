
let c1 = new Geo365.Coordinate(0.0, 0.0);
let p1 = new Geo365.Placemark("p1", c1);

let c2 = new Geo365.Coordinate(10.0, 10.0);
let p2 = new Geo365.Placemark("p2", c2);
let c3 = new Geo365.Coordinate(-10.0, 10.0);
let p3 = new Geo365.Placemark("p3", c3);

let polyline = new Geo365.Polyline([c1, c2, c3,]);
let p4 = new Geo365.Placemark(polyline.geometryType, polyline);

let polygon = new Geo365.Polygon([c1, c2, c3, c1]);
let p5 = new Geo365.Placemark(polygon.geometryType, polygon);


let kmlDoc = new Geo365.KmlDoc([p1, p2, p3, p4, p5]);
var kmlString = kmlDoc.write();