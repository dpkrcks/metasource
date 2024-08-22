import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Privacy from "./pages/Privacy"
import Navbar from "./components/Navbar"
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { appRoutes } from "./routes";

function App() {

  return (
    <MantineProvider>
      <RouterProvider
        router={appRoutes}
      />
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/privacy" Component={Privacy} />
        </Routes>
      </BrowserRouter> */}
    </MantineProvider>
  )
}

export default App
