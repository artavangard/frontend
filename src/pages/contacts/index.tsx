/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from "@mui/material";
import React, { FC } from "react";

const ContactsPage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Контактная информация
        </Typography>
        <Typography variant="subtitle1">ООО "Фенька компани"</Typography>
        <Typography variant="subtitle1">ИНН 7713693791</Typography>
      </Box>
    </Container>
  );
};

export default ContactsPage;
