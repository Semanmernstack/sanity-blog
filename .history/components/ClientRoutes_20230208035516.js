import Link from 'next/link'
import React from 'react'

function ClientRoutes({ children, route }) {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default ClientRoutes