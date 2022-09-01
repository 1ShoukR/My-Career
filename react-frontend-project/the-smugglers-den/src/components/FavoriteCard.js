import React from 'react'
import { Card } from '@mui/material';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { removeFavorite } from '../actions/setFavorites';
import '../css/favorites.css';

const FavoriteCard = (props) => {
  const dispatch = useDispatch()
return (
  <div>
    <Card className="favoritesCardContainer">
      <div className="favoritesTitle">{props.fav}</div>
      <div>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            removeFavorite(dispatch, props);
          }}
        >
          Remove From <FavoriteIcon fontSize="small" />
        </Button>
      </div>
    </Card>
  </div>
);
}

export default FavoriteCard