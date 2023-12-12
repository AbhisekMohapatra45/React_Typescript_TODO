import React from "react";
import LandingImage from "../Outlets/LandingImage";
import { Button, styled } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { useNavigate } from "react-router-dom";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

function LandingPage(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <Container>
      <LandingImage />
      <Button
        sx={{ background: "black", ":hover": { background: "black" } }}
        variant="contained"
        endIcon={<ListIcon />}
        onClick={(): any => {
          navigate("/todo-list");
        }}
      >
        Tasks
      </Button>
    </Container>
  );
}

export default LandingPage;
