import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowsCounterClockwise, Brain } from "@phosphor-icons/react";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
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
import { Content1, Content2 } from "./Content";
import { Footer } from "./Footer";
import { generatePassword } from "@/utils";
import { passwordSafetyValues } from "@/consts";

export const Home: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [passwordLength, setPasswordLength] = useState(10);
  const [shouldHaveSymbols, setShouldHaveSymbols] = useState(true);
  const [shouldHaveLetters, setShouldHaveLetters] = useState(true);
  const [shouldHaveDigits, setShouldHaveDigits] = useState(true);
  const [password, setPassword] = useState(
    generatePassword(
      passwordLength,
      shouldHaveLetters,
      shouldHaveDigits,
      shouldHaveSymbols
    )
  );

  const { backgroundColor, shield, passwordSafety } = useMemo(() => {
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
    }
  };

  useEffect(() => {
    setPassword(
      generatePassword(
        passwordLength,
        shouldHaveLetters,
        shouldHaveDigits,
        shouldHaveSymbols
      )
    );
  }, [shouldHaveLetters, shouldHaveDigits, shouldHaveSymbols, passwordLength]);

  const handleSymbolCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShouldHaveSymbols(event.target.checked);
  };

  const handleLetterCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShouldHaveLetters(event.target.checked);
  };

  const handleDigitCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShouldHaveDigits(event.target.checked);
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
            onClick={() =>
              setPassword(
                generatePassword(
                  passwordLength,
                  shouldHaveLetters,
                  shouldHaveDigits,
                  shouldHaveSymbols
                )
              )
            }
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
              enqueueSnackbar("Password copied!", {
                style: {
                  fontFamily: "Helvetica",
                  color: "rgb(9, 54, 63)",
                  backgroundColor: "#EBE9E7",
                },
              });
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
        <Box>
          <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: "white" }}
                  size="medium"
                  disabled={!shouldHaveDigits}
                  checked={shouldHaveLetters}
                  color="default"
                  onChange={handleLetterCheck}
                />
              }
              label="Letters(e.g. AbCd)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: "white" }}
                  size="medium"
                  disabled={!shouldHaveLetters}
                  checked={shouldHaveDigits}
                  color="default"
                  onChange={handleDigitCheck}
                />
              }
              label="Numbers(e.g. 1234)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: "white" }}
                  size="medium"
                  checked={shouldHaveSymbols}
                  color="default"
                  onChange={handleSymbolCheck}
                />
              }
              label="Symbols (@#$%^)"
            />
          </Box>
        </Box>
      </StyledWrapper>
      <Content1 />
      <Content2 />
      <Footer />
    </>
  );
};
