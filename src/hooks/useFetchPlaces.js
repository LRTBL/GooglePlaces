import React from 'react';

//----- PARAMETROS DE ENDPOINT GOOGLE PLACES API-------//
const params = {
  key: 'AIzaSyCqRyLcGQYNRX6fzvR0-cmp4sVyeGo2FyQ',
  language: 'es-419',
  country: 'pe',
};

/**
 *
 * @param {*} input: Texto del componente de SearchInput
 * @returns {loading: true o false , data: array de predicciones, error: mensaje de error}
 */
const useFetchPlaces = input => {
  const [state, setState] = React.useState({
    data: [],
    loading: false,
    error: null,
  });

  React.useEffect(() => {
    setState({data: [], loading: true, error: null});
    fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&language=${params.language}&components=country:${params.country}&key=${params.key}`,
    )
      .then(res => res.json())
      .then(data => {
        if (data.status === 'OK') {
          setState({
            data: data.predictions,
            loading: false,
            error: null,
          });
        } else {
          setState({data: [], loading: false, error: data.status});
        }
      })
      .catch(console.log);
  }, [input]);

  return state;
};

export default useFetchPlaces;
