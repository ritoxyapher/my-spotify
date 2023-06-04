
// This is the preload.js. It will fetch the charts and popular songs from the API before the window is loaded so we have access to the object
// For some reason, if we fetch in main.js, it wont work.

// fetches data from shazam api (this is the GET call (get top songs))

// await needs to be used in async functions. wrap around into an anonymous function (a function with no name) and execute it right after by adding () to the end.

async function GetUSCharts(){

    // data pertaining to api
    const url = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f01423a9demsha82796ba5e96b70p152417jsnaa50cf965c22',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


async function Search_API(input){
    const url = `https://spotify81.p.rapidapi.com/search?q=%3C${input}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f01423a9demsha82796ba5e96b70p152417jsnaa50cf965c22',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

GetUSCharts();
// have to wait 5 secs due to api limits
setTimeout(() => { Search_API("Keshi"); }, 5000);


