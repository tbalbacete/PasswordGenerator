import { Box, Button, IconButton, Slider, Typography } from "@mui/material";
import {
  ArrowsCounterClockwise,
  Brain,
  ShieldCheck,
  ShieldSlash,
  ShieldWarning,
} from "@phosphor-icons/react";
import * as React from "react";
import { useMemo, useState } from "react";
import { generatePassword } from "../utils";
import { useSnackbar } from "notistack";

export const Home: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState(generatePassword(passwordLength));

  const { backgroundColor, shield, passwordSafety } = useMemo(() => {
    let backgroundColor;
    let shield;
    let passwordSafety;

    if (passwordLength <= 6) {
      backgroundColor = "rgb(209, 54, 78)";
      shield = <ShieldSlash size={24} />;
      passwordSafety = "Weak Password";
    } else if (passwordLength < 9) {
      backgroundColor = "rgb(190, 78, 58)";
      shield = <ShieldWarning size={24} />;
      passwordSafety = "Moderately Strong Password";
    } else {
      backgroundColor = "#1C815A";
      shield = <ShieldCheck size={24} />;
      passwordSafety = "Strong Password";
    }

    return { backgroundColor, shield, passwordSafety };
  }, [passwordLength]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setPasswordLength(newValue);
      setPassword(generatePassword(newValue));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem 5rem 2.5rem 5rem",
        backgroundColor,
        color: "white",
      }}
    >
      <Box sx={{ paddingBottom: "5rem", display: "flex", gap: "10px" }}>
        <Brain fill={"white"} size={40} />
        <Typography variant="h4">PassGenius</Typography>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 600, paddingBottom: "1rem" }}>
        Protect yourself. No more Password123.
      </Typography>
      <Box
        sx={{
          color: "white",
          borderBottom: "2px solid white",
          display: "flex",
        }}
      >
        <Typography sx={{ width: "100%" }} variant="h5">
          {password}
        </Typography>
        <IconButton
          onClick={() => setPassword(generatePassword(passwordLength))}
        >
          <ArrowsCounterClockwise fill={"white"} size={24} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 0 2rem 0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {shield}
          <Typography variant="h6">{passwordSafety}</Typography>
        </Box>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(password);
            enqueueSnackbar("Password copied!");
          }}
          sx={{
            padding: "10px",
            backgroundColor: "white",
            color: "black",
            "&:focus-visible": { background: "white" },
            "&:active": { background: "white" },
            "&:hover": { backgroundColor: "grey" },
          }}
          variant="contained"
        >
          Copy password
        </Button>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="body2">{`Length: ${passwordLength}`}</Typography>
        <Slider
          aria-label="Password Length"
          value={passwordLength}
          size="medium"
          color="secondary"
          min={4}
          max={30}
          onChange={handleChange}
          sx={{
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
          }}
        />
      </Box>
    </Box>
  );
};
