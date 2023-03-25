"use client"
import Link from 'next/link'


function ClientRoutes({ children, route }) {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default ClientRoutes