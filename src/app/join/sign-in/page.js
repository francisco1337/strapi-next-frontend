import React from 'react'
import styles from './sign-in.module.scss'
import Link from 'next/link'
import { LoginForm } from "@/components/auth/LoginForm/LoginForm"

export default function SignInPage() {
  return (
    <div className={styles.signIn} >
      <h3>Iniciar Sesion</h3>

      <LoginForm/>
      
      <div className={styles.actions}>
        <Link href="/join/sign-up">
          ¿No tienes una cuenta?
        </Link>
      </div>
    </div>
  )
}
