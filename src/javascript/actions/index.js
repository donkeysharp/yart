const cats = [
  { name: 'kitty', color: 'brown' },
  { name: 'furrr', color: 'white' },
  { name: 'brandy', color: 'black' },
  { name: 'tamy', color: 'yellow' },
  { name: 'tabo', color: 'white' }
];


function getCats() {
  return {
    type: 'GET_CATS'
  }
}

function receiveCats(data) {
  return {
    type: 'RECEIVE_CATS',
    data: data
  }
}

export function fetchCats(name) {
  return (dispatch, getState) => {
    dispatch(getCats());

    setTimeout(() => {
      var result = cats.filter((cat) => cat.name.indexOf(name) >= 0);

      dispatch(receiveCats(result));
    }, 500);
  }
}
