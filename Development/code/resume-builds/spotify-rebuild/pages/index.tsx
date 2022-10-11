import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <h1>This is a Spotify rebuild</h1>
      <main>
        <Sidebar />
        {/* center */}
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  )
}

export default Home
