import React, { FC, PropsWithChildren } from "react";
import NavBar from "../NavBar";
import { Box } from "@mui/material";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      {children}
    </Box>
  );
};

export default Layout;
