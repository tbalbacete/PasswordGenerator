import {
  Box,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Circle } from "@phosphor-icons/react";

export const Content2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: "2.5rem 10rem 2.5rem 5rem",
        padding: "2rem",
        backgroundColor: "#EBE9E7",
        "@media (max-width: 800px)": {
          padding: "2.5rem 2.5rem 2.5rem 2.5rem",
          margin: "2.5rem 2.5rem 2.5rem 2.5rem",
        },
        "@media (max-width: 1200px)": {
          flexDirection: "column-reverse",
          alignItems: "center",
          gap: "2rem",
        },
      }}
    >
      <Card sx={{ maxHeight: "40rem", maxWidth: "30rem" }}>
        <CardMedia component="img" src="/code.jpg" />
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "40%",
          "@media (max-width: 1200px)": {
            maxWidth: "100%",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "rgb(9, 54, 63)", fontWeight: "600" }}
        >
          What is a password generator?
        </Typography>
        <Typography variant="h6" sx={{ color: "rgb(9, 54, 63)" }}>
          A password generator is a tool that automatically generates a password
          based on guidelines that you set to create strong and unpredictable
          passwords for each of your accounts.
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgb(9, 54, 63)", fontWeight: "600" }}
        >
          Good password generators do the following:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Circle weight="fill" size={10} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">
                Adjust guidelines to fit different sites&apos; unique password
                requirements
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle weight="fill" size={10} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">
                Generate strong passwords using secure technology with built-in
                randomness
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Circle weight="fill" size={10} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">
                Are integrated into a password manager like PassGenius to
                create, manage, and easily use all of your strong passwords
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
