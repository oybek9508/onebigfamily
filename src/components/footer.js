import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const navItems = [
  { title: "Towels", link: "towels" },
  { title: "Beddings", link: "beddings" },
  { title: "Threads", link: "threads" },
  { title: "Table Cloth", link: "cloth" },
];

const customStyle = {
  fontFamily: "PT_Serif",
  fontSize: "16px",
  fontWeight: 300,
  textTransform: "capitalize",
};

const Footer = ({ isFixed }) => {
  const router = useRouter();
  return (
    <footer>
      <Grid
        sx={{
          height: "238px",
          bgcolor: "#527768",
          position: isFixed && "fixed",
          left: isFixed && 0,
          bottom: isFixed && 0,
          width: "100%",
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "50%",
          }}
        >
          <Box sx={{ display: "flex", mb: 2 }}>
            <img
              src="/BigWayTrading_Logo_wt.png"
              alt="big way logo"
              style={{ width: "40px", height: "40px", marginRight: "16px" }}
              loading="lazy"
            />
            <Typography
              sx={{ fontSize: "24px", fontFamily: "Rufina" }}
              component="div"
            >
              {" "}
              Big Way Trading
            </Typography>
          </Box>
          <Typography>Aleje Jerozolimskie 214</Typography>
          <Typography>02-486 Warszawa</Typography>
          <Typography>Poland</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "block",
            }}
          >
            <Button
              sx={{
                color: "#fff",
                ...customStyle,
              }}
              onClick={() => router.push("/")}
            >
              Home
            </Button>
            <Button
              sx={{ color: "#fff", ...customStyle }}
              onClick={() => router.push("/about")}
            >
              About us
            </Button>
            {navItems.map((item) => (
              <a
                key={item.title}
                {...(router.asPath !== "/"
                  ? {
                      onClick: () => router.replace(`/#${item.link}`),
                    }
                  : { onClick: () => router.push(`/#${item.link}`) })}
                href={`#${item.link}`}
                style={{ textDecoration: "none", curser: "pointer" }}
              >
                <Button sx={{ color: "#fff", ...customStyle }}>
                  {item.title}
                </Button>
              </a>
            ))}
          </Box>
          <Box sx={{ ml: "50px" }}>
            <a href="mailto:sales@bigwaytrading.com">
              <Button
                sx={{ color: "#fff", bgcolor: "#4A7F51", ...customStyle }}
              >
                Email
              </Button>
            </a>
          </Box>
        </Box>
      </Grid>
    </footer>
  );
};

export default Footer;
