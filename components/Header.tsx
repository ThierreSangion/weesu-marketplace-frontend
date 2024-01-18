"use-client";

import { useEffect, useState } from "react";
import { AppBar, Box, Button, InputBase, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import LogoImage from "@/public/logo.svg";
import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface HeaderProps {
  searchTermProp: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ searchTermProp: searchTermProp }) => {
  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
  setSearchTerm(searchTermProp);
  }, [searchTermProp]);



// ...

return (
  <Box sx={{ flexGrow: 1 }}>
  <AppBar
    position="static"
    sx={{
      backgroundImage: "linear-gradient(to right, #3a6186, #89253e)",
    }}
  >
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        <Link href={`/`}>
            <Image
              src={LogoImage}
              alt="Logo"
              width={150}
              height={90}
              style={{ marginRight: 2 }}
            />
        </Link>
      </Typography>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.href='/'}
        sx={{ marginRight: 2 }}
      >
        Voltar
      </Button>
    </Toolbar>
  </AppBar>
  </Box>
 );
      }

export default HeaderComponent;
