class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  // public key
  _apiKey = 'apikey=7021a063d0296193d0fe45e71f4cd3a1';
  _baseOffset = 210;

// helper function that can be used to fetch data from an API endpoint  
  getResource = async (url) => { // asynchronous arrow function that takes in a url parameter
    // 'await' is used to wait for response to come back before moving on to next line of code
      // 'fetch' send GET request to specified URL
    let res = await fetch(url);  // response object is assigned to 'res' variable
      // this 'if' statement checks whether response status code is not in 200-299 range
      if (!res.ok) { throw new Error(`Could not fetch ${url}, status: ${res.status}`); } 
        // 'await' is used to wait for JSON parsing to complete before returning data
        return await res.json();
  }
/* 
   In summary, 'getResource' function fetches data from specified API endpoint, 
   checks response status code for errors, and returns parsed JSON data if request is successful.
*/

  getAllCharacters = async (offset = this._baseOffset) => {
    // code from block 'INTERACTIVE API TESTER'
    const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    // data from API "data": { "results": [...] }
    return res.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    // code from block 'INTERACTIVE API TESTER'
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    // data from API "data": { "results": [...] }
    return this._transformCharacter(res.data.results[0]);    
  }

  _transformCharacter = (char) => {
    // data from API "data": { "results": [...] }
    return {
      id: char.id,
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    }
  }
}

export default MarvelService;
