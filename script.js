  // Task 1
// Callback hell -> Promise chain
// Clue - Create fn that return a promise
// use setTimeout in that fn

let count = 10;
test = async() => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(count);
		}, 1000);
	}).then((result) => {
		const letter=document.querySelector(".count")
        letter.innerText = result;
		if (count > 1) {
			count--;
			test();
		}else{
            setTimeout(() => {
                letter.innerText="Happy independence day";
            }, 1000);
        }
		return result;
	});
}
test();


//Task2
  //All the countries name which has > 20cr population

  fetch("https://restcountries.eu/rest/v2/all")
  .then(data=>data.json())
  .then(countries=> {return countries.filter((country)=>country.population > 20_00_00_000).map((country)=>[country.name] )})
  .then(pop=>console.log(pop));





