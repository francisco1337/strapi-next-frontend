'use client';

import { Button } from 'semantic-ui-react';
import { AuthProvider } from "@/contexts"
import { useAuth } from '@/hooks'

import React from 'react'

export default function Page() {

  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Games shop</h2>
      <Button primary> botón </Button>
      {user ? (
        <div>
          <p>
            Hola, { JSON.stringify(user.username) }
          </p>
          <Button onClick={logout}>Cerrar Sesión</Button>
        </div>
      ) : (
          <div>
            <a href="/join/sign-in">Iniciar sesión</a>  
          </div>
      )}
    
    </div>
  )
}

