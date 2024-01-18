import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ShoppingCart } from './pages/ShoppingCart'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<ShoppingCart />} />
        <Route path="/sucesso" element={<Success />} />
      </Route>
    </Routes>
  )
}
