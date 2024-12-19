
function sortByProperty(array, property) {
    return array.sort((a, b) => a[property] - b[property]);
}

const arrayOfObjects = [
    {'name': 'John', 'age':25},
    {'name': 'Alice', 'age':30},
    {'name': 'Bob','age':20}
];

const sortedByAge = sortByProperty(arrayOfObjects, 'age');
console.log(sortByProperty);