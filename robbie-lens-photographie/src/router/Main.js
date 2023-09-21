import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import A_propos from '../pages/A_propos'
import Portfolio from '../pages/Portfolio'

export default function main () {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='A_propos' element={<A_propos />} />
        <Route path='Portfolio' element={<Portfolio />} />
      </Routes>
    </>
  )
}
