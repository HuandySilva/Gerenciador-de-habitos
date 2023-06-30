import { Outlet } from 'react-router-dom'

export default function HeaderAndFooter() {

  return (
    <>
      <section>
        <header>
            Header
        </header>
        <Outlet/>
        <footer>
            Rodapé
        </footer>
        
        </section>
    </>
  )
}