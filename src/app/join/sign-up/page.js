import React from 'react'
import styles from './sign-up.module.scss'
import Link from 'next/link'
import { RegisterForm } from '@/components/auth'


export default function SignUpPage() {
  return (
    <div className={styles.signIn}>
      <h3>Crear Cuenta</h3>

      {/* FORM */}
      <RegisterForm />
      
      <div className={styles.actions}>
        <Link href="/join/sign-in">Atras</Link>
      </div>
    </div>
  )
}
