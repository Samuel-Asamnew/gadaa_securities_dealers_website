import LoadingScreen from './LoadingScreen.jsx'
import TopBar        from './TopBar.jsx'
import Header        from './Header.jsx'
import BackToTop     from './BackToTop.jsx'

export default function Layout({ children }) {
  return (
    <>
      <LoadingScreen />
      <TopBar />
      <Header />
      <main>{children}</main>
      <BackToTop />
    </>
  )
}
