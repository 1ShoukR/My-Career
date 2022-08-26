const setFavorites = (dispatch, props) => {
  dispatch({ type: 'SET_FAVORITES', payload: props.item.title || props.item.name });
  alert('Added to Favorites!');
};

export default setFavorites
