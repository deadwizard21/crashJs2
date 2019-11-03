//console.log('test');

//let;
/*
const circle={
    radious: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function(){
        console.log('draw');
    }
};


circle.draw();
*/


//factory function 
/*
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('test')
        }

    }
};

const circle = createCircle(1);
circle.draw();
*/
// contructor function 
/*
function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('test');
    }
};

//the follwoing 2 are the same
Circle.call({},1);
//const another = new Circle(1);
*/
/*
let x = {value:10};
let y = x;

x.value = 20;
console.log(x);
console.log(y);
*/


//the following works because
// the obj is a reference 
/*
let obj = {value: 10};

function increase(obj){
    obj.value++;
};
increase(obj);
console.log(obj);
*/
/*
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('test');
    }
};

const circle = new Circle(10);
//const circle2 = new Circle(10);


//circle.location = {x: 1};
//console.log(circle);
//console.log(circle);


for (let key in circle){
    if (typeof circle[key] !== 'function'){
        console.log(key, circle[key]);
    }
}


const key = Object.keys(circle);
console.log(key);


if ('radius' in circle){
    console.log('we have a radius is here');
}
*/
/*
function Circle(radius){
    color = red; //this is not a propert because we have not assignmed it like tha
    this.color = color; //this would be the correct way to do this instead of the above 
    this.radius = radius;

    //the bottom stuff cannot be access directly
    //you must first go into the draw function and
    //then call it from there*
    let defaultLocation = {x:0,y:0};
    
    let computeOptimumLocation = function(){
      //do something here...
    }


    this.draw = function(){
        //in this case the bottom function is private
        computeOptimumLocation();
        console.log('test');
    }
};

const circle = new Circle(10);
*/


//getters and setters
function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:0, y:0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    };
    
    this.draw = function(){
        console.log('test');
    };




    Object.defineProperty(this, 'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('invalid location.');
                
                defaultLocation = value;
            
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();













