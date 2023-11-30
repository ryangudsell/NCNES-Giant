import Screen from './components/Screen'
import { Link, useNavigate } from 'react-router-dom'
import { MoonFill, HouseDoorFill, InfoCircleFill, CartFill, TelephoneFill, CaretUpFill, CaretRightFill, CaretDownFill, CaretLeftFill, CircleFill } from 'react-bootstrap-icons'

const Gameboy = () => {
    const navigate = useNavigate()
  return (
    <>
      <main id='gameboy' className='gameboy-corner'>
      <div>
      <section id='screen-container' className='gameboy-corner'>
        <article id='settings-container'>
          <ul>
            <div><button className='nes-btn'>+</button>
              <button className='nes-btn'>-</button></div>
            <button className='nes-btn'><MoonFill style={{imageRendering: "pixelated"}} /></button>
            <button className='nes-btn' onClick={() => navigate("/")}><HouseDoorFill style={{imageRendering: "pixelated"}} /></button>
          </ul>
        </article>
        <Screen />
      </section>
      <label id='gameboy-label'><img src="./logo.png" alt='Giant Logo' />Giant </label>
      </div>
      <section id='buttons-container'>
        <article id='top-buttons'>
          <div id='d-pad'>
            <div/>
            <div id='up' className='d-pad'>
              <CaretUpFill style={{imageRendering: "pixelated"}} />
            </div>
            <div/>
            <div id='left' className='d-pad'>
              <CaretLeftFill style={{imageRendering: "pixelated"}} />
            </div>
            <div id='center' className='d-pad'>
              <CircleFill style={{imageRendering: "pixelated"}} />
            </div>
            <div id='right' className='d-pad'>
              <CaretRightFill style={{imageRendering: "pixelated"}} />
            </div>
            <div/>
            <div id='down' className='d-pad'>
              <CaretDownFill style={{imageRendering: "pixelated"}} />
            </div>
            <div/>            
          </div>

          <div/>

          <div id='top-button-icons'>
            <span>
              <Link to="/shop"><CartFill style={{imageRendering: "pixelated"}} /></Link>
              <Link to="/contact"><TelephoneFill style={{imageRendering: "pixelated"}} /></Link>
            </span>
          </div>
        </article>
        <article id='bottom-buttons'>
          <div>
            <span><Link to="/">Home <HouseDoorFill style={{imageRendering: "pixelated"}} /></Link></span>
            <span><Link to="/policy">Policy <InfoCircleFill style={{imageRendering: "pixelated"}} /></Link></span>
          </div>
        </article>
      </section>
    </main>
    </>
  )
}

export default Gameboy
