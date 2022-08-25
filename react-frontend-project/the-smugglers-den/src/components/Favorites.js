import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import FavoriteCard from './FavoriteCard';



const Favorites = () => {
const dispatch = useDispatch()

const favorites = useSelector((state) => state.favorites)
  return (
    <div>
      <h1>Favorites</h1>
        <h1>
            {favorites.map((fav) =>{
              return (
                <>
                  {<FavoriteCard fav={fav}/>}
                </>
              )
            })}
        </h1>
    </div>
  )
}

export default Favorites