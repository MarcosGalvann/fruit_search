const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


  function search(str) {
	let results = [];
	 const fruits = fruit.filter(food => food.toLowerCase().includes(str.toLowerCase()));
		return fruits ;
	};
		
	


	
function searchHandler(e) {
	e.preventDefault(); 
	const results = search(e.currentTarget.value)
	showSuggestions(results, e.currentTarget.value);
};



function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	for (let result of results) {
	  const fruitList = document.createElement('li');
	  const textToBold = result.match( new RegExp (inputVal, 'i'));
	  if (textToBold) {
		let suggestion = result.replace( textToBold[0], `<b>${textToBold[0]}</b>`);
		fruitList.innerHTML = suggestion;
		suggestions.appendChild(fruitList);
	  };
	};
  };


function useSuggestion(e) {
	e.preventDefault()
	if (e.target.tagName === 'LI'){
		input.value = '';
		suggestions.innerHTML='';
		input.value = e.target.innerText;
		
	};
};

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);