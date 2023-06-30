/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en" className="h-full">
        <body className="h-full">
          <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
          <main className={`${styles.main} h-full bg-cyan-950`}>{props.children}</main>
        </body>
      </html>
    </Providers>
  )
}
