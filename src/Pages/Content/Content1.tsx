import { Box, Typography, Button, Card, CardMedia } from "@mui/material";

export const Content1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2.5rem 10rem 2.5rem 5rem",
        "@media (max-width: 800px)": {
          padding: "2.5rem 5rem 2.5rem 2.5rem",
        },
        "@media (max-width: 1400px)": {
          paddingRight: "2.5rem",
        },
        "@media (max-width: 1200px)": {
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "40%",
          "@media (max-width: 1200px)": {
            maxWidth: "100%",
            alignItems: "center",
          },
        }}
      >
        <Typography variant="h4" sx={{ color: "rgb(9, 54, 63)" }}>
          Increase your security by using our password generator tool
        </Typography>
        <Typography variant="h6">
          Weak passwords are a leading cause of cybersecurity breaches. In fact,
          30% of internet users have experienced a data breach due to weak
          passwords.
        </Typography>
        <Typography variant="h6">
          It takes a proactive and concerted effort to secure your data online.
          Don&apos;t be another statistic! Do things such as using a unique
          password for every account you have.
        </Typography>
        <Button
          href="https://cipher.com/blog/10-personal-cyber-security-tips-cyberaware/"
          target="_blank"
          sx={{
            padding: "10px",
            backgroundColor: "rgb(9, 54, 63)",
            textTransform: "none",
            letterSpacing: "0.1em",
            width: "60%",
          }}
          variant="contained"
        >
          Find More Security Tips Here
        </Button>
      </Box>
      <Card>
        <CardMedia component="img" src="/phoneHold.jpg" />
      </Card>
    </Box>
  );
};
