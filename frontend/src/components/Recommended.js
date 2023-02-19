import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export default function TitlebarImageList() {
  const navigate = useNavigate();
  return (
    <ImageList className="mt-0 pt-0">
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
                onClick={() => navigate("/plantInfo")}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266425_2200-1200x628.jpg",
    title: "Basil",
  },
  {
    img: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/four-bowls-of-beans-1296x728.jpg?w=1155&h=1528",
    title: "Beans",
  },
  {
    img: "https://post.healthline.com/wp-content/uploads/2020/09/cherries-benefits-732x549-thumbnail-732x549.jpg",
    title: "Cherries",
  },
  {
    img: "http://clv.h-cdn.co/assets/15/22/2048x2048/square-1432664914-strawberry-facts1.jpg",
    title: "Strawberries",
  },
  {
    img: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/02/health_benefits_carrots_732x549_thumb.jpg",
    title: "Carrots",
  },
  {
    img: "https://gardenerspath.com/wp-content/uploads/2018/05/Pro-Tips-to-Grow-Your-Own-Raspberries.jpg",
    title: "Raspberries",

    featured: true,
  },
];
