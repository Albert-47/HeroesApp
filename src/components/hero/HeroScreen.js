import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

const HeroScreen = () => {
  const navigate = useNavigate();
  
  const { heroId } = useParams();
  const hero = useMemo( () => getHeroesById(heroId), [ heroId ]);
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
  if (!hero) return <Navigate to='/'/>
  
  const imagePath = `/assets/${id}.jpg`;
  

  const handleReturn = () => {
    navigate( -1 );
  }
  
  return (
    <div className='row mt-5'>
        <div className="col-4">
          <img src={imagePath} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
        </div>
        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{ superhero }</h3>
          <ul className='list-group list-group-flush '>
            <li className='list-group-item'><b>AlterEgo:</b> {alter_ego}</li>
            <li className='list-group-item'><b>Publisher:</b> {publisher}</li>
            <li className='list-group-item'><b>First appeareance:</b> {first_appearance}</li>
          </ul>
          <h5>Characters:</h5>
          <p>{ characters }</p>
          <button className='btn btn-outline-primary'
           onClick={handleReturn}>
            Go back
          </button>
        </div>
    </div>
  )
}

export default HeroScreen