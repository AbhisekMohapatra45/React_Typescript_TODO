import { Box } from "@mui/material";
import React from "react";

function LandingImage(): React.JSX.Element {
  return (
    <Box
      component={"img"}
      src="Dashboard\Landing.png"
      sx={{
        height: { xs: 400, md: 500 },
        width: { xs: 300, md: 550 },
        objectFit: "contain",
      }}
    />
  );
}

export default LandingImage;
