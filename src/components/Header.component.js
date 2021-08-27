import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const Header = () => {
  return (
    <div>
      <AppBar
        position="static"
        className="bg-black shadow-sm text-white inner-shadow-black"
        style={{ height: 65 }}
      >
        <Toolbar className="font-weight-bold" >
          <AcUnitIcon className="mr-1" />
          COLOR PICKER
          <span className="ml-auto">
           
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
