import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, styled } from "@mui/material";
import Logo from "../components/Logo";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  position: "absolute",
}))

const BlankLayout = () => {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <HeaderStyle>
        <Logo sx={{ width: 70, height: 70 }}/>
      </HeaderStyle>
      <Outlet />
    </Stack>
  )
}

export default BlankLayout;