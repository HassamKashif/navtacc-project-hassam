import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function UserRoute() {
  const { user } = useAuth()
  return (
    <>
        { user.token ? <Outlet /> : <Navigate to="/login"/>}
    </>
  )
}

export default UserRoute