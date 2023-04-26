import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  ArrowsCounterClockwise,
  Brain,
  ShieldCheck,
} from "@phosphor-icons/react";
import * as React from "react";
import { useState } from "react";
import { generatePassword } from "../utils";

export const Home: React.FC = () => {
  const [password, setPassword] = useState(generatePassword(10));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem 5rem 2.5rem 5rem",
        backgroundColor: "#1C815A",
        color: "white",
      }}
    >
      <Box sx={{ paddingBottom: "5rem", display: "flex", gap: "10px" }}>
        <Typography variant="h4">PassGenius</Typography>
        <Brain fill={"darkgreen"} size={40} />
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
        <IconButton onClick={() => setPassword(generatePassword(10))}>
          <ArrowsCounterClockwise fill={"white"} size={24} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <ShieldCheck />
          <Typography variant="h6">Strong password</Typography>
        </Box>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
          sx={{ padding: "10px", backgroundColor: "white", color: "black" }}
          variant="contained"
        >
          Copy password
        </Button>
      </Box>
    </Box>
  );
};
