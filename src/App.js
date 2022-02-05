import { BrowserRouter } from "react-router-dom"
import {AppRoutes} from './AppRoutes'

// Сохранил json, если отвалится api, чтобы было (src/assets/data/characters.json)

export const App = () => {
  return (
      <BrowserRouter>
          <AppRoutes/>
      </BrowserRouter>
  ) 
}
