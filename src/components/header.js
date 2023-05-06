import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { title: "Towels", link: "towels" },
  { title: "Beddings", link: "beddings" },
  { title: "Threads", link: "threads" },
  { title: "Table Cloth", link: "cloth" },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DrawerAppBar = (props) => {
  const { window } = props;
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  console.log("router", router);

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar component="nav" position="fixed" sx={{ bgcolor: "#527768" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Button sx={{ color: "#fff" }} onClick={() => router.push("/")}>
              <Typography
                component="div"
                fontFamily="Rufina"
                sx={{
                  display: {
                    fontSize: "24px",
                    xs: "none",
                    sm: "block",
                    cursor: "pointer",
                    textTransform: "capitalize",
                  },
                }}
              >
                Big Way Trading
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{
                color: "#fff",
                fontFamily: "PT_Serif",
                textTransform: "capitalize",
                fontSize: "20px",
                fontWeight: 300,
              }}
              onClick={() => router.push("/about")}
            >
              About us
            </Button>
            {navItems.map((item) => (
              <a
                {...(router.asPath !== "/"
                  ? {
                      onClick: () => router.replace(`/#${item.link}`),
                    }
                  : { onClick: () => router.push(`/#${item.link}`) })}
                key={item.title}
                href={`#${item.link}`}
                style={{
                  textDecoration: "none",
                  curser: "pointer",
                  // display: "flex",
                }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    fontFamily: "PT_Serif",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    fontWeight: 300,
                  }}
                >
                  {item.title}
                </Button>
              </a>
            ))}
          </Box>
          <Box sx={{ ml: "50px" }}>
            <Link href={`#contacts`}>
              <Button
                sx={{
                  color: "#fff",
                  bgcolor: "#4A7F51",
                  fontFamily: "PT_Serif",
                  textTransform: "capitalize",
                  fontSize: "24px",
                  fontWeight: 300,
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
