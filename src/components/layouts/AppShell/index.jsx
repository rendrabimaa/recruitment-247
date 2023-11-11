import Panel from "../Panel"
import Navbar from "../Navbar"
import Footer from "../Footer"

const AppShell = () => {
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
        <Panel />
        <Footer />
    </div>
  )
}

export default AppShell