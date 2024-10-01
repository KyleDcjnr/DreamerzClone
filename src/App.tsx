import { Box, ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./components/theme"
import './index.css'
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import Tournament from "./pages/Tournament";
import Friends from "./pages/Friends";
function App() {
  return (
    <ChakraProvider theme={customTheme}>
    <Box width={'100vw'} overflowX={'hidden'}>
      <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />}  />
            <Route path="/game" element={<Game />}/>
            <Route path="/tournament" element={<Tournament />}/>
            <Route path="/friends" element={<Friends />}/>
          </Routes>
        </BrowserRouter>
    </Box>
    </ChakraProvider>
  )
}

export default App
