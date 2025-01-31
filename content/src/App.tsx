import { Snackbar, ThemeProvider, useMediaQuery } from "@mui/material";
import { MileStones } from "./components/MileStone";
import { useSnackbar } from "./hooks/useSnackbar";
import { lightTheme } from "./services/theme";
import { darkTheme } from "./services/theme";

function App() {
  const {open, message} = useSnackbar();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const currentPath = window.location.pathname;
  const isFilesPage = currentPath.includes('/files');
  const theme = prefersDarkMode ? darkTheme : lightTheme;

  if(!isFilesPage){
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <MileStones/>
      <Snackbar
        open={open}
        message={message}
        />
      </ThemeProvider>
  )
}

export default App
