import { drawerWidth } from "@/consts/layoutWidth";
import { Collapse, Drawer, List, ListItemButton, ListItemText, styled } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const [openedProduction, setOpenedProduction] = useState(false);
  const [openedServices, setOpenedServices] = useState(false);

  const handleProductionClick = () => setOpenedProduction((prev) => !prev);
  const handleServicesClick = () => setOpenedServices((prev) => !prev);

  const router = useRouter();

  console.log(router);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <LogoContainer>
        <Image src="/logo.png" alt="Логотип компании" width={150} height={170} />
      </LogoContainer>
      <MenuContainer>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <StyledLink href="/">
            <ListItemButton sx={{ pl: 4 }}>
              <StyledListItemText primary="с нами лучше!" />
            </ListItemButton>
          </StyledLink>
          <ListItemButton sx={{ pl: 4 }} onClick={handleProductionClick}>
            <StyledListItemText primary="продукция" />
            {openedProduction ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openedProduction} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="коробки" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="пакеты" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="pos-материалы" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="полиграфия" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton sx={{ pl: 4 }} onClick={handleServicesClick}>
            <StyledListItemText primary="услуги" />
            {openedServices ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openedServices} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="вырубка, биговка" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="тиснение, конгрев" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="кашировка" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="ламинация" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <StyledListItemText primary="ручные операции" />
              </ListItemButton>
            </List>
          </Collapse>
          <StyledLink href="/contacts">
            <ListItemButton sx={{ pl: 4 }}>
              <StyledListItemText primary="контакты" />
            </ListItemButton>
          </StyledLink>
        </List>
        <ContactsContainer>+7 (925) 010-53-33</ContactsContainer>
      </MenuContainer>
    </Drawer>
  );
};

export default NavBar;

const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  "& img": {
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
    },
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.grey[600],
}));

const MenuContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));

const ContactsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  color: theme.palette.grey[600],
  cursor: "pointer",
}));

const StyledLink = styled(Link)({
  textDecoration: "none",
});
