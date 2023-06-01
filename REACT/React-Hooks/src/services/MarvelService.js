// імпортуємо наш хук
import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  // користуємося деструктуризацією
  const { loading, request, error, clearError, process } = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  // public key
  const _apiKey = 'apikey=7021a063d0296193d0fe45e71f4cd3a1';
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    // code from block 'INTERACTIVE API TESTER'
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    // data from API "data": { "results": [...] }
    return res.data.results.map(_transformCharacter);
  }

  const getCharacter = async (id) => {
    // code from block 'INTERACTIVE API TESTER'
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    // data from API "data": { "results": [...] }
    return _transformCharacter(res.data.results[0]);    
  }

  const _transformCharacter = (char) => {
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
  };

  const getAllComics = async (offset = 0) => {
		const res = await request(
			`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformComics);
	};

	const getComics = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

  const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

  return {
	loading,
	error,
	clearError,
	process,
	getAllCharacters,
	getCharacter,
        getAllComics,
	getComics,
   };
};

export default useMarvelService;
