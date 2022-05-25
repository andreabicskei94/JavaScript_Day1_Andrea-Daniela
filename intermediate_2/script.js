var fruits = ['apple', 'banana', 'kiwi'];
fruits.push('orange');
console.log(fruits);
fruits.pop();
console.log(fruits);

var animals = ['horse', 'monkey', 'dog'];
animals.pop();
animals.unshift('dog');
console.log(animals);
animals.unshift('cat');
console.log(animals);

var elements = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
elements = elements.split("/").join("\n");
console.log(elements);