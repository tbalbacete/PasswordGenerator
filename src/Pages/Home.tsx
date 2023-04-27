import { Box, IconButton, Typography } from "@mui/material";
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
import {
  LengthSlider,
  StyledBlurb,
  StyledCopyButton,
  StyledHeader,
  StyledPasswordContent,
  StyledPasswordSafety,
  StyledSubContent,
  StyledWrapper,
} from "./Home.styles";
import { Footer } from "./Footer";
import { Content1 } from "./Content";

export const Home: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState(generatePassword(passwordLength));

  const { backgroundColor, shield, passwordSafety } = useMemo(() => {
    const passwordSafetyValues = [
      {
        backgroundColor: "rgb(209, 54, 78)",
        shield: <ShieldSlash size={24} />,
        passwordSafety: "Weak Password",
        threshold: 6,
      },
      {
        backgroundColor: "rgb(190, 78, 58)",
        shield: <ShieldWarning size={24} />,
        passwordSafety: "Average Password",
        threshold: 8,
      },
      {
        backgroundColor: "#1C815A",
        shield: <ShieldCheck size={24} />,
        passwordSafety: "Strong Password",
        threshold: Infinity,
      },
    ];

    const { backgroundColor, shield, passwordSafety } =
      passwordSafetyValues.find(
        ({ threshold }) => passwordLength <= threshold
      )!;

    return { backgroundColor, shield, passwordSafety };
  }, [passwordLength]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(event);
    if (typeof newValue === "number") {
      setPasswordLength(newValue);
      setPassword(generatePassword(newValue));
    }
  };

  return (
    <>
      <StyledWrapper
        sx={{
          backgroundColor,
        }}
      >
        <StyledHeader>
          <Brain fill={"white"} size={40} />
          <Typography variant="h4">PassGenius</Typography>
        </StyledHeader>
        <StyledBlurb variant="h5">
          Protect yourself. No more Password123.
        </StyledBlurb>
        <StyledPasswordContent>
          <Typography sx={{ width: "100%" }} variant="h5">
            {password}
          </Typography>
          <IconButton
            onClick={() => setPassword(generatePassword(passwordLength))}
          >
            <ArrowsCounterClockwise fill={"white"} size={24} />
          </IconButton>
        </StyledPasswordContent>
        <StyledSubContent>
          <StyledPasswordSafety>
            {shield}
            <Typography variant="h6">{passwordSafety}</Typography>
          </StyledPasswordSafety>
          <StyledCopyButton
            onClick={() => {
              navigator.clipboard.writeText(password);
              enqueueSnackbar("Password copied!");
            }}
            variant="contained"
          >
            Copy password
          </StyledCopyButton>
        </StyledSubContent>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body2">{`Length: ${passwordLength}`}</Typography>
          <LengthSlider
            aria-label="Password Length"
            value={passwordLength}
            size="medium"
            color="secondary"
            min={4}
            max={30}
            onChange={handleChange}
          />
        </Box>
      </StyledWrapper>
      <Content1 />
      <Footer />
    </>
  );
};
