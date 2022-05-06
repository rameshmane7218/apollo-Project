let countryNews = async (countryCode) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countryCode}`);

        let data = await res.json();
        // console.log('data:', data.articles)
        return data.articles;
    }
    catch (err) {
        console.log('err:', err)
    }
}

let newsData = async (query) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data = await res.json();
        // console.log('data:', data.articles)
        return data.articles;
    }
    catch (err) {
        console.log('err:', err)
    }
}

export {countryNews, newsData};



