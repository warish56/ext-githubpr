import { MileStones } from "./components/MileStone";

function App() {

  const currentPath = window.location.pathname;
  const isFilesPage = currentPath.includes('/files');

  if(!isFilesPage){
    return null;
  }

  return (
      <MileStones/>
  )
}

export default App
