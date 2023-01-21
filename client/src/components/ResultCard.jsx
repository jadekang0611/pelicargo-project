import { Card, CardMedia, Typography, CardActionArea } from "@mui/material";

const ResultCard = ({ item }) => {
  return (
    <>
      <Card xs={{ maxWidth: 345 }} id={item.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={item.src.medium}
            alt={item.alt}
          />
        </CardActionArea>
      </Card>
      <div style={{ paddingTop: "10px" }}>
        <Typography variant="body2" color="text.secondary">
          {item.photographer}
        </Typography>
        <Typography variant="subtitle2" color="text.primary">
          {item.alt}
        </Typography>
      </div>
    </>
  );
};

export default ResultCard;
