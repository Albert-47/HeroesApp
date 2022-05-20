import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);



  useEffect(() => {
      setState({ loading: true, error: null, data: null });
    if (isMounted) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setState({
            loading: false,
            error: null,
            data: data,
          });
        });
    } else {
      console.log("Componente desmontado, no se realizó la petición fetch");
    }
  }, [url]);

  return state;
};
