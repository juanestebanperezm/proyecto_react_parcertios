import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const base_url = "https://image.tmdb.org/t/p/original/";

function Movie() {
  const [peliculas, setPeliculas] = useState([]);

  const API_KEY = "dbe64acf81cf3dc7f54bd2c298087787";

  const URL = `https://api.themoviedb.org/3//trending/all/day?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc`;

  const fetchApi = async () => {
    const respuesta = await fetch(URL);
    const respuestaJSON = await respuesta.json();
    setPeliculas(respuestaJSON.results);
    
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
      <>
      <Typography variant="h5">
          Peliculas Agogos
      </Typography>
    <Box sx={{ display: "flex", overFlowX: "hidden" }}>
     
      {!peliculas
        ? "no hay"
        : peliculas.map((pelicula) => {
            return (
              <Box>
                <Card>
                  <CardMedia
                    sx={{ width: "50vh" }}
                    component="img"
                    src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
                  />
                </Card>
              </Box>
            );
          })}
    </Box>
    </>
  );
}

export default Movie;
