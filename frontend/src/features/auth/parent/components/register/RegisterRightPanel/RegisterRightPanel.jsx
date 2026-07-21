// src/features/auth/parent/components/register/RegisterRightPanel/RegisterRightPanel.jsx
import React from 'react'
import RegisterForm from '../RegisterForm'

const RegisterRightPanel = () => {
  return (
    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-12">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterRightPanel