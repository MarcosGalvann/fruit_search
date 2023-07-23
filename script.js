const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

  function search(str) {
	let results = [];
	 const fruits = fruit.filter(food => food.toLowerCase().includes(str.toLowerCase()));
		return fruits += results
	};
	return results;


	// WHAT I'M DOING FOR searchHandler IS MAKING A LI SO I CAN APPEND THE FILTERED FRUIT ARRAY TO IT AND APPEND IT TO THE SUGGESTIONS UL 
function searchHandler(e) {
	e.preventDeafult();
	const fruitList = document.createElement('li');
	const result = search(e.currentTarget.value);
	fruitList.append(result);
	suggestions.append(fruitList);
	
};


// loop through the results and for each suggestion append to suggestions ul and 'results' is the result of that fruit that I'm returning 
function showSuggestions(results, inputVal) {

};


//  create a function that empty's out the suggestions field and use the event listener that listens for clicks to replace the input.value.
function useSuggestion(e) {
	// TODO
};

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);