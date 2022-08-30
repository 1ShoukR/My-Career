export const setFavorites = (dispatch, props) => {
  dispatch({ type: 'SET_FAVORITES', payload: props.item.title || props.item.name });
  alert('Added to Favorites!');
};

export const removeFavorite = (dispatch, props) => {
  console.log(props)
  dispatch({ type: 'REMOVE_FAVORITES', payload: props.fav || props.item.name || props.item.title });
  alert("Removed from Favorites")
}


