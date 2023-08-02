import axios from 'axios'


const SearchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 8DDFiCXiWbGhSSExNh_D6gRkHmvwjaLfXpod9kyxZJY'
        }, 
        params: {
            query: term
        }
    });
    return response.data.results;
}
 
export default SearchImage;