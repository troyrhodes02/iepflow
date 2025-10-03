// apps/web/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A1B9A", // purple for IEPFlow branding (adjust later)
    },
    secondary: {
      main: "#FFB300", // gold accent
    },
  },
  typography: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
  spacing: 8, // 8px base spacing unit
  shape: {
    borderRadius: 8,
  },
});

export default theme;
