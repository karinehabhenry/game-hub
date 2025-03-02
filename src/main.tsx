import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import theme from './theme.ts'
import { ColorModeProvider } from "./components/ui/color-mode.tsx"
import { ChakraProvider } from "@chakra-ui/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider/>
      <App />
    </Provider>
  </StrictMode>,
)
