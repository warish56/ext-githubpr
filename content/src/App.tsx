import { Snackbar } from "@mui/material";
import { MileStones } from "./components/MileStone";
import { useSnackbar } from "./hooks/useSnackbar";

function App() {

  const {open, message} = useSnackbar();
  const currentPath = window.location.pathname;
  const isFilesPage = currentPath.includes('/files');

  if(!isFilesPage){
    return null;
  }

  return (
      <>
      <MileStones/>
      <Snackbar
        open={open}
        message={message}
        />
      </>
  )
}

export default App
