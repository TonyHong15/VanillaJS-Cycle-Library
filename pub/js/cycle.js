/* JS Library */
"use strict"; 




/* 
Wrap the code that creates your library in an Immediately-Invoked function expression (IIFE).
This allows you to do any setup necessary in this function scope and then only put on the
the global scope the variables needed for developers to access.  Prevents pollution of the 
global scope, conflicts with variables from other libraries, and some control over functionality access.
*/
(function (global) { // the window object serves as the global object in the browser.

    
    // Tips: creating an object constructor and then adding to its prototype.
    
    // Main canvas that will hold all the cycling div elements
    // Mandatory Property: id
    // Possible Properties:
    //               num_elements: number of elements (divs) you want to cycle in this canvas
    //               height: height of this canvas where cycling occurs (pixels)
    //               width: width of this canvas where cycling occurs   (pixels)
    //               margins: margins of this canvas where cycling occurs  (pixels)
    //               border: border of this canvas where cycling occurs (pixels)
    //               num_visible: number of elements you want visible at a time (must be less than or equal to num_elements)
    //               align: If there is more than 1 visible element at a time, how they are positioned relative to each other
    //               element_margins: margins of each element (pixels)
    //               element_border: border of each element (pixels)
    function Canvas(id, num_elements = 6, height = 400, width= 1600, num_visible = 1, align = 'horizontal', time = 2000, margins = 10, border = 5, element_margins = 5, element_border = 2) {
        //Constructor properties based on input
        this.id = id
        this.elements = [];
        this.num_elements = num_elements;
        this.height = height;
        this.width = width;
        this.margins = margins;
        this.border = border;
        this.num_visible = num_visible;
        this.align = align;
        this.element_margins = element_margins
        this.element_border = element_border;
        this.time = time;
        this.head = 0;
        //adjusting in case input for num_visible is bad
        if (this.num_elements < this.num_visible){
            this.num_elements = this.num_visible;
        }

        //setting up the canvas based on user specification
        const canvas_wrapper = document.createElement("div");
        this.canvas_wrapper = canvas_wrapper;
        this.canvas_wrapper.style.height = height + "px";   
        this.canvas_wrapper.style.width = width + "px";  
        this.canvas_wrapper.style.margins = margins+ "px";
        this.canvas_wrapper.style.border = border + "px solid rgb(0,0,0)";
        this.canvas_wrapper.id = id.toString();

        //based on element alignment and how many elements visible at a time, compute height and width of each element
        if (this.align === 'horizontal'){
            this.element_width = Math.floor(this.width/this.num_visible) - ((this.element_margins+ this.element_border) * 2);
            this.element_height = this.height - ((this.element_margins+ this.element_border) * 2);
        }
        else{
            this.element_height = Math.floor(this.height/this.num_visible) - ((this.element_margins+ this.element_border) * 2);
            this.element_width = this.width - ((this.element_margins+ this.element_border) * 2);
        }

        //Creating the dynamic cycling div's based on user specification
        for (let i = 0; i < this.num_elements; i++) {
            const cycle_element = new CycleElement(i, this.canvas_wrapper, this.element_width, this.element_height, this.element_margins, this.element_border);
            this.elements.push(cycle_element);
        }

        //adding the first num_visible elements to the canvas in the DOM
        if (this.align === 'horizontal'){
            for (let i = 0; i < num_visible; i++) {
                this.canvas_wrapper.appendChild(this.elements[i].element);
                this.elements[i].element.style.marginLeft = (i*(this.element_width + this.element_border * 2 + this.element_margins* 2) + this.element_margins+ this.element_border ) + "px";
            }    
        }
        else{
            for (let i = 0; i < num_visible; i++) {
                this.canvas_wrapper.appendChild(this.elements[i].element);
                this.elements[i].element.style.top = (i*(this.element_height + this.element_border * 2 + this.element_margins* 2) + this.element_margins+ this.element_border) + "px";
            }    
        }

        //Cycling each div in and out of the DOM
        setInterval(function(){
            //Removing the element indexed by the head property out of the DOM
        
            const element_id_to_remove = this.elements[this.head].element.id;
            document.getElementById(element_id_to_remove).remove();
            //adding the element next in line to cycle back into the DOM
            this.canvas_wrapper.appendChild(this.elements[(this.head + num_visible) % num_elements].element);
            log(this.elements[(this.head + num_visible) % num_elements].element)
            if ((this.head + 1) === num_elements){
                this.head = 0;
            }
            else{
                this.head += 1;
            }
            for (let i = 0; i < this.num_visible; i++){
                if (this.align === 'horizontal'){
                    this.elements[(this.head + i) % this.num_elements].element.style.marginLeft = (i*(this.element_width + this.element_border * 2 + this.element_margins* 2) + this.element_margins+ this.element_border ) + "px";
                }
                else{
                    this.elements[(this.head + i) % this.num_elements].element.style.marginTop = (i*(this.element_height + this.element_border * 2 + this.element_margins* 2) + this.element_margins+ this.element_border) + "px";
                }
            }
        }.bind(this), this.time);

        const body = document.querySelector('body');
        body.append(this.canvas_wrapper);

    }

    Canvas.prototype = {
        changeCanvasColor: function (backgroundColor) {
            this.canvas_wrapper.style.backgroundColor = backgroundColor;
        },

        //allows user to directly add their already made fancy elements
        addPremadeElement: function (id) {
            const element = document.querySelector('#'+id);
            const element_container = new CycleElement( this.canvas_wrapper, this.element_width, this.element_height, this.element_margins, this.element_border);
            element_container.setElementContent(element);
            this.elements.push(element_container);
            this.num_elements += 1;
        },
    }
        
    // A Div Element within the canvas
    function CycleElement(i, canvas, width, height, margin, border) {
        //Creating a container for this element
        const element = document.createElement("div");
        this.element = element;

        //Setting the properties of this element
        this.id = i;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.margin = margin;
        this.border = border;

        //Setting the DOM properties of this element
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.element.style.backgroundColor = randomColor;
        this.element.id = canvas.id + "element" + i;
        this.element.style.width = width + "px";
        this.element.style.height = height + "px";
        this.element.style.border = border + "px solid rgb(255,0,0)";
        this.element.style.margin = margin + "px";
        this.element.classList.add('cycle_element')
        this.element.style.position = 'absolute';
    }


    // Added common funcionality to the prototype property of the constructor.
    CycleElement.prototype = {

        setElementContent: function (content) {
            this.element.appendChild(content);
        },

        setElementBackgroundColor: function (backgroundColor) {
            this.element.style.backgroundColor = backgroundColor;
        },


    }

    global.Canvas = global.Canvas || Canvas;
    global.CycleElement = global.CycleElement || CycleElement;

})(window); 