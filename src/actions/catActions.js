function fetchCats() {
  return async dispatch => {
    dispatch({ type: "LOADING_CATS" });
    const resp = await fetch("http://localhost:4000/db");
    const cats = await resp.json();
    const catPics = cats.images;
    dispatch(fetchedCats(catPics));
  };
}
function fetchedCats(images) {
  return { type: "FETCH_CATS", cats: images };
}

export { fetchCats };
