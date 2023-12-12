import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../Components/AppBar";
import { styled } from "@mui/material";

const RootStyle = styled("div")({
  overflow: "hidden",
  display: "flex",
});

const OutletStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  width: "100vw",
}));

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
