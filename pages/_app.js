import AppLayout from 'components/AppLayout'
import 'styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <section className="Container">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </section>
  )
}
