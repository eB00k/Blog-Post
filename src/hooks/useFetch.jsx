import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error("Could not fetch the data for that resourse");
          }
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError("Could not fetch the data for that resourse");
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
