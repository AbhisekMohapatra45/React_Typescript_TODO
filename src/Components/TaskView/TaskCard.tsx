import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

interface TaskCardPropos {
  taskName: string;
}

export default function TaskCard({
  taskName,
}: TaskCardPropos): React.JSX.Element {
  return (
    <Card
      sx={{
        display: "flex",
        border: "1px solid black",
        borderStyle: "groove",
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography>{taskName}</Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={{ p: 0.5 }} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton sx={{ p: 0.5 }} color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
