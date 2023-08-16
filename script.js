const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

  function search(str) {
	let results = [];
	 const fruits = fruit.filter(food => food.toLowerCase().includes(str.toLowerCase()));
		return fruits += results;
	};
		return results; 
	


	// showSuggestions and search should be used in here
function searchHandler(e) {
	e.preventDeafult(); 
	showSuggestions(results, e.currentTarget.value);
};


// loop through the results and for each suggestion append to suggestions ul and 'results' is the result of that fruit that I'm returning 
function showSuggestions(results, inputVal) {
const results = search(...str);
const fruitList = document.createElement('li');
for(let result of results){
	if(inputVal.includes(result) === true){
		fruitList.append(result);
		suggestions.append(fruitList);
	};
};
// if (inputVal.includes(...results) === true )
// 	fruitList.append(results);
// 	suggestions.append(fruitList);
// };
};


//  create a function that empty's out the suggestions field and use the event listener that listens for clicks to replace the input.value.
function useSuggestion(e) {
	e.preventDeafult()
	if (e.target.tagName === 'LI'){
		input.value = '';
		suggestions.style.position='static';
		input.value = e.target;
	};
};

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);