// Places //

let placeArray = [];
class Place {
    public name: string = '';
    public address: string = '';
    public ZIP_code: number = 0;
    public city: string = '';
    public img: string = '';
    public Creationdate: any = '';

    constructor(name: string, address: string, ZIP_code: number, city: string, img: string,) {
        this.name = name;
        this.address = address;
        this.ZIP_code = ZIP_code;
        this.city = city;
        this.img = img;
        this.Creationdate = new Date(2018, 1, 1 + Math.random() * 1000, Math.random() * 1000, Math.random() * 100);
        placeArray.push(this);
    };

    placeBox() {
        return `
            <div class="placeinfo col-sm-12 col-md-6 col-lg-3">
                <div class="Place-box">
                    <div>
                        <img id="img-in-box" class="img-fluid" src="img/${this.img}">
                    </div>
                    <div class="box-text">
                        <h4>${this.name}</h4>
                        <p><b>Adress:</b> ${this.address}, ${this.ZIP_code} ${this.city}</p>
                        <h6><b>Created:</b> ${this.Creationdate}</h6>
                    </div>
                </div>
            </div>
  		    `
    }
}

// Restaurants //

let restaurantArray = [];
class Restaurant extends Place {
    number: string = '';
    cuisine: string = '';
    webaddress: string = '';

    constructor(name, address, ZIP_code, city, img, number, cuisine, webaddress) {
        super(name, address, ZIP_code, city, img);
        this.number = number;
        this.cuisine = cuisine;
        this.webaddress = webaddress;
        restaurantArray.push(this);
    };

    restaurantBox() {
        return `
		<div class="placeinfo col-sm-12 col-md-6 col-lg-3">
			<div class="Place-box">
				<div>
    				<img id="img-in-box" class="img-fluid" src="img/${this.img}">
    			</div>
    			<div class="box-text">
					<h4>${this.name}</h4>
                    <p><b>Adress:</b> ${this.address}, ${this.ZIP_code} ${this.city}</p>
                    <p><b>Cuisine:</b> ${this.cuisine}</p>
                    <p><b>Phone number:</b> ${this.number}</p>
                    <p><b>Website:</b> <a target="_blank" href="https://${this.webaddress}">${this.webaddress}</a></p>
                    <h6><b>Created:</b> ${this.Creationdate}</h6>
    		    </div>
  			</div>
  		</div>
  		`
    }
}

// Events //

let eventArray = [];
class Event extends Place {
    date: string = '';
    begin: string = '';
    price: string = '';
    webaddress: string = '';

    constructor(name, address, ZIP_code, city, img, date, begin, price, webaddress) {
        super(name, address, ZIP_code, city, img);
        this.date = date;
        this.begin = begin;
        this.price = price;
        this.webaddress = webaddress;

        eventArray.push(this);
    };

    eventBox() {
        return `
		<div class="placeinfo col-sm-12 col-md-6 col-lg-3">
			<div class="Place-box">
				<div>
    				<img id="img-in-box" class="img-fluid" src="img/${this.img}">
    			</div>
    			<div class="box-text">
					<h4>${this.name}</h4>
                    <p><b>Adress:</b> ${this.address}, ${this.ZIP_code} ${this.city}</p>
                    <p><b>Date:</b> ${this.date}</p>
                    <p><b>Begin:</b> ${this.begin}</p>
                    <p><b>Price:</b> ${this.price}</p>
                    <p><b>Website:</b> <a href="https://www.${this.webaddress}">${this.webaddress}</a></p>
                    <h6><b>Created:</b> ${this.Creationdate}</h6>
    		    </div>
  			</div>
  		</div>
  		`
    }
}


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
    for (let i = 0; i < placeData.length; i++) {
        $("#places").append(`${placeData[i].placeBox()}`)
    }

    for (let i = 0; i < restaurantData.length; i++) {
        $("#restaurants").append(`${restaurantData[i].restaurantBox()}`)
    }

    for (let i = 0; i < eventData.length; i++) {
        $("#events").append(`${eventData[i].eventBox()}`)
    }

});
