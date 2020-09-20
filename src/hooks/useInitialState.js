import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  //useState devuelve dos elementos, 1- esvalor del nuestro estado
  //2-la funcion
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
