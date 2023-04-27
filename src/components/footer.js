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
            justifyContent: "space-evenly",
            height: "50%",
          }}
        >
          <Typography
            sx={{ fontSize: "24px", fontFamily: "Rufina" }}
            component="div"
          >
            {" "}
            One Big Family
          </Typography>
          <Typography>
            Block no2/1/38, Batisehir, Bagcilar, Istanbul, Turkiye
          </Typography>
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
              <Link
                key={item.title}
                href={`#${item.link}`}
                style={{ textDecoration: "none", curser: "pointer" }}
              >
                <Button sx={{ color: "#fff", ...customStyle }}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ ml: "50px" }}>
            <a href="mailto:oybektoshmatov95@gmail.com">
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
