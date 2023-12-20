import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

interface DialogProps {
  action: React.ReactNode;
  isOpen: boolean;
  handleCancel: () => void;
  handleTask: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function TodoDialog({
  action,
  isOpen,
  handleCancel,
  handleTask,
}: DialogProps): React.JSX.Element {
  return (
    <Dialog open={isOpen} fullWidth>
      <DialogTitle>Todo</DialogTitle>
      <DialogContent dividers>
        <Box component={Grid} direction="column" columnSpacing={2}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Task Name"
            placeholder="Task Name"
            onChange={handleTask}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        {action}
      </DialogActions>
    </Dialog>
  );
}

export default TodoDialog;
