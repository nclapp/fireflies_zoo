//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------

function Animal(name, legs) {
  this.name = name; // kind of like instance variables
  this.legs = legs;
  // A function ehre will be created each time the constructor function is inkoked. Prototype will just exist once.
  // this.identify = function(){  // This is a prototype method, otherwise fails "just one implementation" test
  //   return "I am a " + this.name + " with " + this.legs + " legs."
  // }

  // FOR PRIVATE (from video, reason to use :
  // var ssn = ssn;
  // this.getSSN = function(){
  //   return ssn;     // this is private, can't access ssn paramer from outside but can get method return value
  // }

  // this.setSSN = function(ssn){
      // ssn = ssn;
  // }
};

// Another Ruby analogy:
// class Animal
//   attr_reader :name, :legs   // More like Animal above than Zoo, which is more like a singleton

//   def initialize(name, legs)    // ==> This is like the constructor
//     @name = name
//     @legs = legs
//   end

//   def identify                  // ==> methods outside initialize could be added to prototype
//     "I am a #{name} with #{legs} legs."
//   end
// end

Animal.prototype.identify = function() { // sort of like a class method?
  return "I am a " + this.name + " with " + this.legs + " legs.";
}

var Zoo = {
  init: function(animals) {  // can call init setup or whatever you want, just getting everything in proper state
    this.animals = animals;
  },

  bipeds: function(){
    return this.animals.filter(function(animal){ // the part after filter is like the code block after `select` in Ruby
      return animal.legs === 2;
    });
  },

  quadrupeds: function(){
    return this.animals.filter(function(animal){ // the part after filter is like the { |x| x = x } after `select` in Ruby
      return animal.legs === 4;
    });
  }

};



// object literal notation just like array literal being [1,2,3] instead of `new Array(1,2,3)`

// a function tied to an object is a method

//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;  // Make testing function, will run and do nothing, or fail
  }
  return true;
}

var animals = [   // initialize animals array
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];

Zoo.init(animals); // should already be some zoo thing that responds to an init function, takes array as parameter

assert(
  Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds" // test and error message
);
assert(
  Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
);
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);

console.log("All tests passed");
