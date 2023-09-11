import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BorderAllRounded, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/router";
import { en } from "@/locales/en";
import { es } from "@/locales/es";

export default function ButtonAppBar() {
    const router = useRouter();
    const { locale, locales } = router;

    const t = locale === "en" ? en : es;

    const pages = t.pages;

    const menuItemMarginRight = "24px";

    const handleChange = (e) => {
        router.push("/", "/", { locale: e.target.value });
    };

    return (
        <Box sx={{ flexGrow: 1, marginX: "120px", marginTop: "25px" }}>
            <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Image src="/Logo.png" width={114.91} height={33.99} alt="alt" />
                    </Typography>
                    {pages.map((page) => (
                        <MenuItem sx={{ marginRight: menuItemMarginRight }} key={page}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    <MenuItem sx={{ marginRight: menuItemMarginRight }}>
                        <Typography textAlign="center">{t.login}</Typography>
                    </MenuItem>
                    <MenuItem sx={{ border: "1px solid black", borderRadius: "4px", marginRight: menuItemMarginRight }}>
                        <Typography textAlign="center">{t.signUp}</Typography>
                    </MenuItem>
                    <MenuItem>
                        <FormControl fullWidth>
                            <Select defaultValue={locale} onChange={handleChange}>
                                {locales.map((l) => {
                                    return (
                                        <MenuItem key={l} value={l}>
                                            {l.toUpperCase()}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
