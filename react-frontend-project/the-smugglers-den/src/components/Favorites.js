import React from 'react'
import { useSelector } from 'react-redux'; 
import FavoriteCard from './FavoriteCard';



const Favorites = () => {


const favorites = useSelector((state) => state.favoritesR.favorites)
  return (
    <div className="favoritesContainer">
      <div className='favoritesTitle'>
        <h1>Your Favorites!</h1>
      </div>
      <h1 className='h1FavoritesCard'>
        {favorites.map((fav) => {
          return (
            <>
              <FavoriteCard fav={fav} />
            </>
          );
        })}
      </h1>
    </div>
  );
}

export default Favorites