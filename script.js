const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const results = function search(str) {
	let results = [];
	 const fruits = fruit.filter(food => food.includes(str));
	// if(fruits.toLowerCase().includes(str) || fruits.toUpperCase().includes(str) === true){
	// 	return fruits += results;
	// }
	let foundIndex = fruits.findIndex(string => string.toLowerCase() === 1);

	if (fruits.toLowerCase() === foundIndex){
		return fruits += results
	};
	return results;
};

function searchHandler(e) {
	e.preventDeafult();
	input.innerText = suggestions.value; 
	suggestions.appendChild(results);
};

function showSuggestions(results, inputVal) {

};

function useSuggestion(e) {
	// TODO
};

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// useSuggestion.preventDefault();
// 	if (useSuggestion.target.tagName === 'LI') {
// 		input.value='';
// 		input.value= useSuggestion;