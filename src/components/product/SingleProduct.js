import React, { useState, useEffect } from "react";
import Api from "../../api/Api";
import { NavLink, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const SingleProduct = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const { id } = useParams();

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await Api.get();
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);
  return (
    <div>
      {isError !== "" && <h2>{isError}</h2>}

<NavLink to='/'>
  
<Button>Back</Button>
</NavLink>

      {/* {id} */}
      <div className="grid">
        {myData
          .filter((post) => post.show.name === id)
          .map((post) => {
            const { score, show } = post;
            return (
              <Card key={show.id} sx={{ minWidth: 275 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={show.image.original}
                  title="green iguana"
                />
                <CardContent>
                  <Typography variant="body2">{show.summary}</Typography>
                  <Typography variant="body2">{show.updated}</Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {score}
                  </Typography>
                  <Typography variant="h4" component="div">
                    {show.id}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {show.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {show.type}
                  </Typography>
                  <Typography variant="body2">{show.language}</Typography>
                  <Typography variant="body2">
                    Genres: {show.genres[0]}, {show.genres[1]}
                  </Typography>
                  <Typography variant="body2">{show.status}</Typography>
                  <Typography variant="body2">{show.runtime}</Typography>
                  <Typography variant="body2">{show.verageRuntimee}</Typography>
                  <Typography variant="body2">{show.premiered}</Typography>
                  <Typography variant="body2">{show.ended}</Typography>
                  <Typography variant="body2">{show.officialSite}</Typography>
                  <Typography variant="body2">
                    Schedule: {show.schedule.time} {show.schedule.days}
                  </Typography>
                  <Typography variant="body2">{show.rating.avarage}</Typography>
                  <Typography variant="body2">{show.weight}</Typography>
                  <Typography variant="body2">
                    Network: {show.network.id}, {show.network.name}{" "}
                    {show.network.country.name} {show.network.country.code}{" "}
                    {show.network.country.timezone} {show.network.officialSite}
                  </Typography>
                  <Typography variant="body2">{show.webChannel}</Typography>
                  <Typography variant="body2">{show.dvdCountry}</Typography>
                  <Typography variant="body2">
                    {show.externals.tvrage}
                  </Typography>
                  <Typography variant="body2">
                    {show.externals.thetvdb}
                  </Typography>
                  <Typography variant="body2">{show.externals.imdb}</Typography>
                  <Typography variant="body2">{show.webChannel}</Typography>
                  <Typography variant="body2">{show.webChannel}</Typography>
                  <Typography variant="body2">{show.webChannel}</Typography>
                  <Typography variant="body2">{show.webChannel}</Typography>
                </CardContent>
                <CardActions>
                  <Box>
                    <a
                      href={show.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Click</Button>
                    </a>
                  </Box>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default SingleProduct;
