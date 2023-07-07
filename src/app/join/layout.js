
'use client';
import 'semantic-ui-css/semantic.min.css'
import "@/scss/global.scss";
import { Inter } from 'next/font/google'
import styles from "./JoinLayout.module.scss"
import Link from 'next/link';
import { Icon, Image } from 'semantic-ui-react';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })

export default function JoinLayout({ children }) {
  const router = useRouter();
  const { user } = useAuth();

  if (user) { 
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={ styles.topBar }>
        <Link href="/">
          <Image src="/images/logo.png" size="small" alt="Gaming" />
        </Link>
        <Link href="/">
          <Icon name="close" />
        </Link>
      </div>

      <div className={styles.blockLeft}>{children}</div>
      
      <div className={styles.blockRight}></div>
    </div>
  )
}
