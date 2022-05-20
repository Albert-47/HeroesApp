import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import queryString from 'query-string';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {
  
      const navigate = useNavigate();
  
      const location = useLocation();
  
      const { q = '' } = queryString.parse(location.search);
  
  const [ values, setValues ] = useForm({
    searchText: q
  });

  const {searchText} = values;

    const handleSearch = e => {
      e.preventDefault();
      console.log(values.searchText);
      navigate(`?q=${searchText}`);
      
    }
    
  
    const filteredHeroes =  useMemo(() => getHeroesByName(q), [ q ]);

  return (
    <>
      <h1>Searches</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input type="text"
                    placeholder='Search for a hero'
                    className='form-control'
                    name='searchText'
                    value={ searchText }
                    onChange={ setValues }
                     />
            <button 
            type="submit"
            className='btn btn-outline-primary mt-1'>Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '') ?
            <div className="alert alert-info">Search for a hero</div>
            :
            (filteredHeroes.length === 0) && <div className="alert alert-danger">There are no results for: { q }</div>
          }

          {
            filteredHeroes.map(hero => (<HeroCard key={hero.superhero} {...hero} />) )
          }
        </div>
      </div>
    </>
  )
}

export default SearchScreen