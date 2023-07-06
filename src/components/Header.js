import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navbarItem: {
    marginRight: theme.spacing(2),
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Apollo Demirel
          </Typography>
          <Button
            className={`${classes.navbarItem} ${
              selectedItem === "About Me" ? classes.selected : ""
            }`}
            onClick={() => handleItemClick("About")}
            color="inherit"
          >
            About Me
          </Button>
          <Button
            className={`${classes.navbarItem} ${
              selectedItem === "Portfolio" ? classes.selected : ""
            }`}
            onClick={() => handleItemClick("Portfolio")}
            color="inherit"
          >
            Portfolio
          </Button>
          <Button
            className={`${classes.navbarItem} ${
              selectedItem === "Contact" ? classes.selected : ""
            }`}
            onClick={() => handleItemClick("Contact")}
            color="inherit"
          >
            Contact
          </Button>
          <Button
            className={`${classes.navbarItem} ${
              selectedItem === "Resume" ? classes.selected : ""
            }`}
            onClick={() => handleItemClick("Resume")}
            color="inherit"
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
