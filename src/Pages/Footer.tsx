import { Typography, IconButton } from "@mui/material";
import { GithubLogo, LinkedinLogo, Atom } from "@phosphor-icons/react";
import { StyledFooter } from "./Footer.styles";

export const Footer = () => {
    return (
        <StyledFooter>
            <Typography variant="body2">
                Copyright 2023 - Tony Albacete | Built with: React, Typescript, Vite,
                Material UI, Phosphor
            </Typography>{" "}
            |
            <IconButton
                href="https://github.com/tbalbacete"
                target="_blank"
                sx={{ color: "lightgray", padding: 0 }}
            >
                <GithubLogo size={20} />
            </IconButton>
            <IconButton
                href="https://www.linkedin.com/in/tony-albacete-5b8440108/"
                target="_blank"
                sx={{ color: "lightgray", padding: 0 }}
            >
                <LinkedinLogo size={20} />
            </IconButton>
            <IconButton
                href="https://react.dev/"
                target="_blank"
                sx={{ color: "lightgray", padding: 0 }}
            >
                <Atom size={20} />
            </IconButton>
        </StyledFooter>
    );
};
