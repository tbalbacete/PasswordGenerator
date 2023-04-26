import styled from "@emotion/styled";
import { Box, Button, Slider, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "2.5rem 5rem 2.5rem 5rem",
  color: "white",
  "@media (max-width: 800px)": {
    padding: "2.5rem 2.5rem 2.5rem 2.5rem",
  },
});

export const StyledHeader = styled(Box)({
  paddingBottom: "5rem",
  display: "flex",
  gap: "10px",
});

export const StyledBlurb = styled(Typography)({
  fontWeight: 600,
  paddingBottom: "1rem",
});

export const StyledPasswordContent = styled(Box)({
  color: "white",
  borderBottom: "2px solid white",
  display: "flex",
});

export const StyledSubContent = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0 2rem 0",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
});

export const StyledPasswordSafety = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

export const StyledCopyButton = styled(Button)({
  padding: "10px",
  backgroundColor: "white",
  color: "black",
  "&:focus-visible": { background: "white" },
  "&:active": { background: "white" },
  "&:hover": { backgroundColor: "grey" },
});

export const LengthSlider = styled(Slider)({
  "& .MuiSlider-thumb": {
    color: "white",
  },
  "& .MuiSlider-track": {
    color: "white",
  },
  "& .MuiSlider-rail": {
    color: "white",
  },
  "& .MuiSlider-active": {
    color: "white",
  },
});
