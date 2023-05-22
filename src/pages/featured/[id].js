import { useRouter } from "next/router";
import React, { useState } from "react";
import { featuredData } from "@/constants/featured";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Layout from "@/components/layout.js";
import ImgGallery from "@/components/common/img-gallery";
import ReactImageMagnify from "react-image-magnify";

const customSizeStyles = {
  mr: 2,
  border: "2px solid #347AB7",
  borderRadius: "5px",
  p: "4px 8px",
};

const Detailed = () => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [itemColor, setItemColor] = useState("");
  const { id } = router.query;
  console.log("id", id);
  const [thumb, setThumb] = useState(1);

  const detailedItem = featuredData?.filter((item, idx) => item.id === id);

  console.log("detailedItem", detailedItem);
  return (
    <Grid container sx={{ width: "100%" }}>
      <Layout isFixed>
        {detailedItem?.map((data) => (
          <Grid
            key={data.id}
            sx={{
              p: "8rem 5rem",
              display: "flex",
              bgcolor: "#fff",
              width: "100vw",
            }}
          >
            <Grid item md={6}>
              <ImgGallery
                setHover={setHover}
                setItemColor={setItemColor}
                itemColor={itemColor}
              />
            </Grid>
            <Grid
              id="myPortal"
              style={{ marginLeft: "5%" }}
              container
              item
              md={6}
            >
              <div style={{ display: hover && "none" }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {data?.title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mr: 2 }}
                  >
                    Size:
                  </Typography>
                  {data?.size?.map((s) => (
                    <Box
                      key={s}
                      sx={{
                        ...customSizeStyles,
                      }}
                    >
                      {s}
                    </Box>
                  ))}
                </Box>
                <Divider sx={{ mb: 2 }} />

                <Typography color="#565959">Type: {data?.type}</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography
                  color="#565959"
                  sx={{ textTransform: "capitalize" }}
                >
                  Color: {itemColor.replace("_", " ")}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: "flex", mb: 2 }}>
                  {detailedItem[0].images?.blue && (
                    <CardMedia
                      itemColor="blue"
                      onClick={() => setItemColor("blue")}
                      component="img"
                      alt="blue towel"
                      src={detailedItem[0].images?.blue[0]?.original}
                      sx={{ width: "70px", height: "70px", mr: 2 }}
                    />
                  )}
                  {detailedItem[0].images?.white && (
                    <CardMedia
                      itemColor="white"
                      onClick={() => setItemColor("white")}
                      component="img"
                      alt="white towel"
                      src={detailedItem[0].images?.white[0]?.original}
                      sx={{ width: "70px", height: "70px", mr: 2 }}
                    />
                  )}
                  {detailedItem[0].images?.purple && (
                    <CardMedia
                      itemColor="purple"
                      onClick={() => setItemColor("purple")}
                      component="img"
                      alt="purple towel"
                      src={detailedItem[0].images?.purple[0]?.original}
                      sx={{ width: "70px", height: "70px", mr: 2 }}
                    />
                  )}
                  {detailedItem[0].images?.dark_grey && (
                    <CardMedia
                      itemColor="dark_grey"
                      onClick={() => setItemColor("dark_grey")}
                      component="img"
                      alt="dark grey towel"
                      src={detailedItem[0].images?.dark_grey[0]?.original}
                      sx={{ width: "70px", height: "70px", mr: 2 }}
                    />
                  )}
                  {detailedItem[0].images?.light_grey && (
                    <CardMedia
                      itemColor="light_grey"
                      onClick={() => setItemColor("light_grey")}
                      component="img"
                      alt="white towel"
                      src={detailedItem[0].images?.light_grey[0]?.original}
                      sx={{ width: "70px", height: "70px", mr: 2 }}
                    />
                  )}
                </Box>
                <Typography fontSize="16px" fontWeight="bold">
                  About this item:
                </Typography>
                <Typography>{data?.about}</Typography>
              </div>
            </Grid>
          </Grid>
        ))}
      </Layout>
    </Grid>
  );
};

export default Detailed;
