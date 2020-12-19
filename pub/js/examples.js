// Landing Page for examples of my library
"use strict";

const log = console.log
log('Loading DOM Content')

function logId(element) {
	log(element.id)
}

//GETTING STARTED DOCUMENTATION
function gettingStarted() {
    //Title
	const title = document.createElement("div");
	title.append(document.createTextNode("API Documentation"))
	title.style.fontSize = "45px";
	title.style.fontWeight = '900'
	title.style.textAlign = 'center'
	title.style.marginTop = "40px"
	title.appendChild(document.createElement('br'))

	const body = document.querySelector('body');
	body.append(title);

	const title2 = document.createElement("div");
	title2.innerHTML = "<b>Getting Started (How to use this library) <b>"
	title2.style.fontSize = "25px";
	title2.style.textAlign = 'center'
	title2.style.marginTop = "40px"
	title2.appendChild(document.createElement('br'))
	body.append(title2);
	//instructions
	const text = document.createElement("div");
	text.append(document.createTextNode("Include this script in your html header: <script defer type='text/javascript' src='/js/cycle.js'></script>"))
	text.style.fontSize = "20px";
	text.style.textAlign = 'center'
	text.appendChild(document.createElement('br'))
	body.append(text)

	const description = document.createElement("div");
	description.innerHTML = '<b>Properties When Creating a Canvas:</b><br>';
	description.style.textAlign = "center";
	description.marginTop = '50px';
	description.style.fontSize = "25px";
	description.style.marginBottom = "30px";

	const img = document.createElement("img");
	img.src = "/js/documentation1.jpg";	
	description.appendChild(img);

	body.append(description);
}

//Example 1: Basic usage with only ID input 
function example1() {
    //Title
	const title = document.createElement("div");
	title.append(document.createTextNode("Example 1: Basic Usage with id given"))
	title.style.fontSize = "30px";
	title.style.fontWeight = '900'
	title.appendChild(document.createElement('br'))
	title.appendChild(document.createTextNode("Use Case: Advertisements"))
    title.style.marginBottom = "25px";	

	const body = document.querySelector('body');
	body.append(title);

	// usage of my library
	const canvas = new Canvas("canvas1");
	const product1 = document.createElement("div");
	const img = document.createElement("img");
	img.src = "/js/ad1.jpg";
	img.classList.add('products')
	product1.appendChild(img);

	const product2 = document.createElement("div");
	const img2 = document.createElement("img");
	img2.src = "/js/product3.jpg";
	img2.classList.add('products')
	product2.appendChild(img2);

	const product3 = document.createElement("div");
	const img3 = document.createElement("img");
	img3.src = "/js/product5.jpg";
	img3.classList.add('products')
	product3.appendChild(img3);

	const product4 = document.createElement("div");
	const img4 = document.createElement("img");
	img4.src = "/js/product7.jpg";
	img4.classList.add('products')
	product4.appendChild(img4);

	const product5 = document.createElement("div");
	const img5 = document.createElement("img");
	img5.src = "/js/product8.jpg";
	img5.classList.add('products')
	product5.appendChild(img5);

	const product6 = document.createElement("div");
	const img6 = document.createElement("img");
	img6.src = "/js/product1.jpg";
	img6.classList.add('products')
	product6.appendChild(img6);
    
    canvas.elements[0].setElementContent(product1)
	canvas.elements[1].setElementContent(product2)
	canvas.elements[2].setElementContent(product3)
	canvas.elements[3].setElementContent(product4)
	canvas.elements[4].setElementContent(product5)
	canvas.elements[5].setElementContent(product6)



    const api = document.createElement("div");
	api.appendChild(document.createTextNode("API Usage:"))
	api.append(document.createElement('br'))
	api.style.fontSize = "25px";
	api.style.marginBottom = "25px";
    api.style.marginTop = "40px";	
    
    const usage = document.createElement("img");
	usage.src = "/js/usage_1.jpg"
	usage.classList.add("api_img")
    api.appendChild(usage)
	body.append(api);
}

//Example 2: E-commerce items cycling
function example2() {
	const title = document.createElement("div");
	title.append(document.createTextNode("Example 2: E-commerce website where you are cycling your top products"))
	title.style.fontWeight = '900'
	title.style.fontSize = "30px";
	title.style.marginBottom = "25px";
	title.style.marginTop = "40px";	
	const body = document.querySelector('body');
	body.append(title);

	// Example: 10 products
	const canvas = new Canvas("canvas2", 10, 300, 1600, 5, 'horizontal', 2000)
	
    canvas.changeCanvasColor("brown")
	const product1 = document.createElement("div");
	const img = document.createElement("img");
	img.src = "/js/product1.jpg";
	img.classList.add('products')
	product1.appendChild(img);

	const product2 = document.createElement("div");
	const img2 = document.createElement("img");
	img2.src = "/js/product2.jpeg";
	img2.classList.add('products')
	product2.appendChild(img2);

	const product3 = document.createElement("div");
	const img3 = document.createElement("img");
	img3.src = "/js/product3.jpg";
	img3.classList.add('products')
	product3.appendChild(img3);

	const product4 = document.createElement("div");
	const img4 = document.createElement("img");
	img4.src = "/js/product4.jpg";
	img4.classList.add('products')
	product4.appendChild(img4);

	const product5 = document.createElement("div");
	const img5 = document.createElement("img");
	img5.src = "/js/product5.jpg";
	img5.classList.add('products')
	product5.appendChild(img5);

	const product6 = document.createElement("div");
	const img6 = document.createElement("img");
	img6.src = "/js/product6.jpg";
	img6.classList.add('products')
	product6.appendChild(img6);

	const product7 = document.createElement("div");
	const img7 = document.createElement("img");
	img7.src = "/js/product7.jpg";
	img7.classList.add('products')
	product7.appendChild(img7);

	const product8 = document.createElement("div");
	const img8 = document.createElement("img");
	img8.src = "/js/product8.jpg";
	img8.classList.add('products')
	product8.appendChild(img8);

	const product9 = document.createElement("div");
	const img9 = document.createElement("img");
	img9.src = "/js/product9.jpg";
	img9.classList.add('products')
	product9.appendChild(img9);

	const product10 = document.createElement("div");
	const img10 = document.createElement("img");
	img10.src = "/js/product10.jpg";
	img10.classList.add('products')
	product10.appendChild(img10);
    
    canvas.elements[0].setElementContent(product1)
	canvas.elements[1].setElementContent(product2)
	canvas.elements[2].setElementContent(product3)
	canvas.elements[3].setElementContent(product4)
	canvas.elements[4].setElementContent(product5)
	canvas.elements[5].setElementContent(product6)
	canvas.elements[6].setElementContent(product7)
	canvas.elements[7].setElementContent(product8)
	canvas.elements[8].setElementContent(product9)
    canvas.elements[9].setElementContent(product10)


    const api = document.createElement("div");
	api.append(document.createTextNode("API Usage:"))
	api.append(document.createElement('br'))
	api.style.fontSize = "25px";
	api.style.marginBottom = "25px";
    api.style.marginTop = "40px";	
    
    const usage = document.createElement("img");
	usage.src = "/js/usage_2.jpg"
	usage.classList.add("api_img")
    api.append(usage)
	body.append(api);

}

const title = document.createElement("div");
title.innerHTML = "This library cycles elements using DOM manipulation for use cases such as advertisements, title page animations and displaying items on a rotational basis"
title.style.fontSize = "30px";
title.style.marginBottom = "25px";	
const body = document.querySelector('body');
body.append(title);


example1();
example2();
gettingStarted();