import { Routes, Route } from "react-router-dom"
import { Index } from "../Index"
import { Brand } from "../views/Brand"

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/brand' element={<Brand />} />
        </Routes>
    </>
  )
}
