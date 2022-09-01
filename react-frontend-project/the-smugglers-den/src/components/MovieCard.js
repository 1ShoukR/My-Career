import React from 'react'
import { useDispatch } from 'react-redux'; 
import {setFavorites} from '../actions/setFavorites';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HdRoundedIcon from '@mui/icons-material/HdRounded';
import SdRoundedIcon from '@mui/icons-material/SdRounded';
import Card from '@mui/material/Card';


export const MovieCard = (props) => {
const dispatch = useDispatch();

  return (
    <Card className="movieCardContainer">
      <div className="movieTitle">
        <h1>{props.item.title}</h1>
      </div>
      <div>
        <p>Avaialable in: </p>
      </div>
      <div>
        <p>
          <HdRoundedIcon /> <SdRoundedIcon />
        </p>
      </div>
      <div className="director">
        <p>Directed By: {props.item.director}</p>
      </div>
      <div className="summary">
        <p>Summary: {props.item.opening_crawl}</p>
      </div>
      <div>
        <p>Debut Year: {props.item.created}</p>
      </div>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          setFavorites(dispatch, props);
        }}
      >
        Add to <FavoriteIcon fontSize="small" />
      </Button>
    </Card>
  );
}
