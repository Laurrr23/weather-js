const el = document.getElementById('java-text');
const btn = document.getElementById('myBtn')
const myBtn = document.getElementById('submit')
const el2 = document.getElementById('java-text-2')
const weatherHtml = document.getElementById('weather');
const feelsLike = document.getElementById('feelsLike');
const uv = document.getElementById('uv')
const locationValue =   document.getElementById('location')
let valueBasic = 'London';

let weather  = {
    method: 'GET',
    url: 'http://api.weatherapi.com/v1/current.json',
    params: {
            key: 'bcf71377ace54fa9ae4123604221912',
            q: valueBasic,
            aqi: 'no'},
  };
  
  function weatherCall(){
  axios.request(weather).then(response => {weatherHtml.innerHTML = response.data.current.temp_c,
    feelsLike.innerHTML = response.data.current.feelslike_c,
    uv.innerHTML = response.data.current.uv,
    console.log(response)
  })  
      .catch(error =>{console.log(`ERROR ${error}`)})
    }


// function changeText(){
// axios.get('https://boredapi.com/api/activity')
// .then(response=>{el.innerHTML = response.data.activity,
//                 el2.innerHTML = response.data.type
// })
// .catch(error=>{console.log(`ERORR ${error}`)})
// }


function workingChangeLocationWithApiCallAndFetchData() {
	const inputValue = locationValue.value;
	weatherApiCallParametrized(inputValue);
}
 function weatherApiCallParametrized(location){
  axios.request({
  	...weather,
  	params: {
  		...weather.params,
  		q: location
  	}

  }).then(response => {weatherHtml.innerHTML = response.data.current.temp_c,
    feelsLike.innerHTML = response.data.current.feelslike_c,
    uv.innerHTML = response.data.current.uv,
    console.log(response)
  })  
      .catch(error =>{console.log(`ERROR ${error}`)})
    }


function changeLocation(){
  // debugger;

// let valueInput = locationValue.value;
//   valueBasic = valueInput;
// console.log(valueInput);
// weatherCall();
workingChangeLocationWithApiCallAndFetchData();
 }

// btn.addEventListener('click',changeText)
myBtn.addEventListener('click',changeLocation)

document.getElementById('location')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            changeLocation();
        }
    })