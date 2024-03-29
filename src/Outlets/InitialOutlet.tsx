import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../Components/AppBar";
import { styled } from "@mui/material";

const RootStyle = styled("div")({
  overflow: "hidden",
  display: "flex",
});

const OutletStyle = styled("div")({
  paddingTop: 60,
  minWidth: "100%",
  overflow: "auto",
  minHeight: "100%",
});

function InitialOutlet(): React.JSX.Element {
  return (
    <RootStyle>
      <TopBar />
      <OutletStyle>
        <Outlet />
      </OutletStyle>
    </RootStyle>
  );
}

export default InitialOutlet;
