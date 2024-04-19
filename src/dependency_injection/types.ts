const TYPES = {
  Mediator: Symbol.for('Mediator'),
  AuthenticationService: Symbol.for('AuthenticationService'),
};

export default TYPES;

// About Symbols
/*
In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 6 (ES6). It represents a unique identifier, providing a way to create "hidden" or private object properties. Unlike strings or numbers, symbols are guaranteed to be unique, even if they have the same description.
*/
