import React, { useState, useEffect } from "react";
import Api from "../api/Api";
import Product from "../components/product/Product";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

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

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {myData.map((post) => {
            const { score, show } = post;
            return (
              <Grid item xs={12} sm={4} md={4} key={show.id}>
                <Product key={show.id} score={score} show={show} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
