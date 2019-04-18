/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This is set to the global scope, or the window element of the browser.
* 2. This is set to the object Animal
* 3. This is set to the objects created with the new keyword and are called when the object method is invoked.
* 4. This is set to the objects created with the new keyword and then by using (.bind, .call, or .apply), the this keyword is overridden and the bound object is now this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const Animal = {
	action  : 'is Hungry',
	sayName : function(name) {
		return `${this.name} ${this.action}`;
	},
};
console.log(Animal.sayName('Dog'));
// Principle 3

// code example for New Binding
function Person(jsIsAwesome) {
	this.greeting = `is AWESOME!`;
	this.name = jsIsAwesome;
	this.speak = function() {
		return `${this.name} ${this.greeting}`;
	};
}

const Fred = new Person('Fred');
const Wilma = new Person('Wilma');

console.log(Fred.speak());
console.log(Wilma.speak());

// Principle 4

// code example for Explicit Binding

function freakyFriday(messedUp) {
	this.greeting = `Houston, we have a problem!`;
	this.name = messedUp;
	this.speak = function() {
		return `${this.name}, ${this.greeting}`;
	};
}

const Tess = new freakyFriday('Jamie Lee Curtis');
const Anna = new freakyFriday('Lindsay Lohan');

console.log(Tess.speak());
console.log(Anna.speak());

console.log('Jamie Lee Curtis was called: ', Tess.speak.call(Anna));
console.log('Lindsay Lohan was called: ', Anna.speak.apply(Tess));
