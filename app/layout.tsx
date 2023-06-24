/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
          <main className={styles.main}>{props.children}</main>
        </body>
      </html>
    </Providers>
  )
}
