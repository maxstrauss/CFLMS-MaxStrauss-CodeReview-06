// Places //
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var placeArray = [];
var Place = /** @class */ (function () {
    function Place(name, address, ZIP_code, city, img) {
        this.name = '';
        this.address = '';
        this.ZIP_code = 0;
        this.city = '';
        this.img = '';
        this.Creationdate = '';
        this.name = name;
        this.address = address;
        this.ZIP_code = ZIP_code;
        this.city = city;
        this.img = img;
        this.Creationdate = new Date(2018, 1, 1 + Math.random() * 1000, Math.random() * 1000, Math.random() * 100);
        placeArray.push(this);
    }
    ;
    Place.prototype.placeBox = function () {
        return "\n            <div class=\"placeinfo col-sm-12 col-md-6 col-lg-3\">\n                <div class=\"Place-box\">\n                    <div>\n                        <img id=\"img-in-box\" class=\"img-fluid\" src=\"img/" + this.img + "\">\n                    </div>\n                    <div class=\"box-text\">\n                        <h4>" + this.name + "</h4>\n                        <p><b>Adress:</b> " + this.address + ", " + this.ZIP_code + " " + this.city + "</p>\n                        <h6><b>Created:</b> " + this.Creationdate + "</h6>\n                    </div>\n                </div>\n            </div>\n  \t\t    ";
    };
    return Place;
}());
// Restaurants //
var restaurantArray = [];
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, address, ZIP_code, city, img, number, cuisine, webaddress) {
        var _this = _super.call(this, name, address, ZIP_code, city, img) || this;
        _this.number = '';
        _this.cuisine = '';
        _this.webaddress = '';
        _this.number = number;
        _this.cuisine = cuisine;
        _this.webaddress = webaddress;
        restaurantArray.push(_this);
        return _this;
    }
    ;
    Restaurant.prototype.restaurantBox = function () {
        return "\n\t\t<div class=\"placeinfo col-sm-12 col-md-6 col-lg-3\">\n\t\t\t<div class=\"Place-box\">\n\t\t\t\t<div>\n    \t\t\t\t<img id=\"img-in-box\" class=\"img-fluid\" src=\"img/" + this.img + "\">\n    \t\t\t</div>\n    \t\t\t<div class=\"box-text\">\n\t\t\t\t\t<h4>" + this.name + "</h4>\n                    <p><b>Adress:</b> " + this.address + ", " + this.ZIP_code + " " + this.city + "</p>\n                    <p><b>Cuisine:</b> " + this.cuisine + "</p>\n                    <p><b>Phone number:</b> " + this.number + "</p>\n                    <p><b>Website:</b> <a target=\"_blank\" href=\"https://" + this.webaddress + "\">" + this.webaddress + "</a></p>\n                    <h6><b>Created:</b> " + this.Creationdate + "</h6>\n    \t\t    </div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t";
    };
    return Restaurant;
}(Place));
// Events //
var eventArray = [];
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(name, address, ZIP_code, city, img, date, begin, price, webaddress) {
        var _this = _super.call(this, name, address, ZIP_code, city, img) || this;
        _this.date = '';
        _this.begin = '';
        _this.price = '';
        _this.webaddress = '';
        _this.date = date;
        _this.begin = begin;
        _this.price = price;
        _this.webaddress = webaddress;
        eventArray.push(_this);
        return _this;
    }
    ;
    Event.prototype.eventBox = function () {
        return "\n\t\t<div class=\"placeinfo col-sm-12 col-md-6 col-lg-3\">\n\t\t\t<div class=\"Place-box\">\n\t\t\t\t<div>\n    \t\t\t\t<img id=\"img-in-box\" class=\"img-fluid\" src=\"img/" + this.img + "\">\n    \t\t\t</div>\n    \t\t\t<div class=\"box-text\">\n\t\t\t\t\t<h4>" + this.name + "</h4>\n                    <p><b>Adress:</b> " + this.address + ", " + this.ZIP_code + " " + this.city + "</p>\n                    <p><b>Date:</b> " + this.date + "</p>\n                    <p><b>Begin:</b> " + this.begin + "</p>\n                    <p><b>Price:</b> " + this.price + "</p>\n                    <p><b>Website:</b> <a href=\"https://www." + this.webaddress + "\">" + this.webaddress + "</a></p>\n                    <h6><b>Created:</b> " + this.Creationdate + "</h6>\n    \t\t    </div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t";
    };
    return Event;
}(Place));
var placeData = new Array();
placeData[0] = new Place("Place du Casino", "Place du Casino", "98000", "Monaco", "casino.jpg");
placeData[1] = new Place("Port Hercule", "6 Quai Antoine 1er.", "98000", "Monaco", "porthercule.jpg");
placeData[2] = new Place("Jardin Exotique", "62 Boulevard du Jardin", "98000", "Monaco", "jardinexotique.jpg");
placeData[3] = new Place("Oceanographic Museum Monaco", "Avenue Saint-Martin", "98000", "Monaco", "oceanographic.jpg");
var restaurantData = new Array();
restaurantData[0] = new Restaurant("Buddha Bar Monte Carlo", "Place du Casino", "98000", "Monaco", "buddhabar.jpg", "+377 98 06 19 19", "Oriental", "buddhabar.com");
restaurantData[1] = new Restaurant("Son of a Bun", "30, Rue de la Piscine", "98000", "Monaco", "sonofabun.jpg", "+377 97 98 70 70", "American", "sonofabun.mc/");
restaurantData[2] = new Restaurant("Sass Cafe", "11 Av. Princesse Grace", "98000", "Monaco", "sasscafe.jpg", "+377 93 25 52 00", "French, Italian", "sasscafe.com");
restaurantData[3] = new Restaurant("Jimmy’z Monte-Carlo", "26 Av. Princesse Grace", "98000", "Monaco", "jimmyz.jpg", "+377 98 06 70 68", "Cocktails ", "montecarlosbm.com");
var eventData = new Array();
eventData[0] = new Event("Monaco Grand Prix", "Monaco", "98000", "Monaco", "f1.jpg", "20 - 23 May 2021", "8:00", "starting from 90€", "topmarquesmonaco.com");
eventData[1] = new Event("Top Marques Monaco", "10 Av. Princesse Grace", "98000", "Monaco", "topmarquesmonaco.jpg", "11 - 14 June 2020", "9:00", "20€", "monaco-grand-prix.com");
eventData[2] = new Event("Monaco Yacht Show", "1 Quai Antoine 1er.", "98000", "Monaco", "yacht.jpg", "23 - 26 September 2020", "7:00", "80€", "monacoyachtshow.com");
eventData[3] = new Event("Rallye Monte-Carlo", "23 Boulevard Albert 1er", "98000", "Monaco", "rally.jpg", "23 - 26 January 2020", "7:00", "25€", "montecarlosbm.com");
$(document).ready(function () {
    for (var i = 0; i < placeData.length; i++) {
        $("#places").append("" + placeData[i].placeBox());
    }
    for (var i = 0; i < restaurantData.length; i++) {
        $("#restaurants").append("" + restaurantData[i].restaurantBox());
    }
    for (var i = 0; i < eventData.length; i++) {
        $("#events").append("" + eventData[i].eventBox());
    }
});
