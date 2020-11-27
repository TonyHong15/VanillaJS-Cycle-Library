// Landing Page for examples of my library
"use strict";

const log = console.log
log('Loading DOM Content')

function logId(element) {
	log(element.id)
}

//Example 1: Basic usage with only ID input 
function example1() {
    //Title
	const title = document.createElement("div");
	title.innerHTML = "Example 1: Basic Usage with id given"
	title.appendChild(document.createElement('br'))
	title.appendChild(document.createTextNode("Use Case: Advertisements"))
	title.style.fontSize = "25px";
    title.style.marginBottom = "25px";	

	const body = document.querySelector('body');
	body.append(title);

	// usage of my library
	const canvas = new Canvas("canvas1");
	for (let i = 0; i < 6; i++){
        canvas.elements[i].setElementContent(document.createTextNode('advertisement '+ i + ' goes here'))
	}


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
	title.style.fontSize = "25px";
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
    
    canvas.elements[0].setElementContent(product1)
    canvas.elements[1].setElementContent(product2)
    for (let i = 2; i < 10; i++){
        canvas.elements[i].setElementContent(document.createTextNode('product '+ i + ' goes here'))
    }

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
title.innerHTML = "This is a proof of concept for a library that takes in or creates elements that it will cycle using DOM manipulation"
title.style.fontSize = "15px";
title.style.marginBottom = "25px";	
const body = document.querySelector('body');
body.append(title);


example1();
example2();