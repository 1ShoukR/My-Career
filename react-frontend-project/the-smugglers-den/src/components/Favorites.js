import React from 'react'
import { useSelector } from 'react-redux'; 
import FavoriteCard from './FavoriteCard';
import CrawlText from './CrawlText';
import "../css/favorites.css"



const Favorites = () => {


const favorites = useSelector((state) => state.favoritesR.favorites)
  return (
    <div className="favoritesContainer">
      <div className="favoritesTitle">
        <h1>Favorites!</h1>
      </div>
      <h1 className="h1FavoritesCard">
        {favorites.map((fav) => {
          return (
            <>
              <FavoriteCard fav={fav} />
            </>
          );
        })}
      </h1>
      <div>
        <CrawlText />
      </div>
    </div>
  );
}

export default Favorites