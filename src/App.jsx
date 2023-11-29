import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <main id='gameboy'>
      <div>
      <section id='screen-container'>
      </section>
      <h1>Name of company</h1>
      </div>
      <section id='buttons-container'>
        <article id='top-buttons'>
          <div>
            <div/>
            <div id='up' className='d-pad'/>
            <div/>
            <div id='left' className='d-pad'/>
            <div id='center' className='d-pad'/>
            <div id='right' className='d-pad'/>
            <div/>
            <div id='down' className='d-pad'/>
            <div/>            
          </div>
          <div>
            <span>
              <Link>()</Link>
              <Link>()</Link>
            </span>
          </div>
          <div></div>
        </article>
        <article id='bottom-buttons'>
          <div>
            <span><Link>Home ()</Link></span>
            <span><Link>Policy ()</Link></span>
          </div>
        </article>
      </section>
    </main>
    </>
  )
}

export default App
