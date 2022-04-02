import * as React from "react";
import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme } from '@mui/material/styles';


export const IntroBanner: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: 300,
          borderRadius: "15px",
          marginTop: "30px",
          backgroundColor: "primary.dark",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          padding: "0 10%",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">
          Aidez à accueillir 100 000 réfugiés en provenance d'Ukraine
        </Typography>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Box>
    </Box>
  );
};
