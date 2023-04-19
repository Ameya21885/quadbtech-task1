import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

const MiniCart = ({ score, show }) => {
  return (
    <Card key={show.id} sx={{ minWidth: 275 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image={show.image.medium}
        title="green iguana"
      /> */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
      </CardContent>
      <CardActions>
        <Box>
          <a href={show.url} target="_blank" rel="noopener noreferrer">
            <Button>Click</Button>
          </a>
        </Box>
        <NavLink to={`singleProduct/${show.name}`}>
          <Button size="small">Learn More</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default MiniCart;
