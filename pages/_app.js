import AppLayout from 'components/AppLayout'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <section className="Container">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </section>
  )
}

export default MyApp
