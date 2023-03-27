import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './Search.css';

const Search = () => {
  const [search] = useSearchParams();
  const query = search.get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;

  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
export default Search;
