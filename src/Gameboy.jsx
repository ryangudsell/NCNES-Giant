import Screen from './components/Screen'
import { Link, useNavigate } from 'react-router-dom'
import { MoonFill, HouseDoorFill, InfoCircleFill, CartFill, TelephoneFill, CaretUpFill, CaretRightFill, CaretDownFill, CaretLeftFill, CircleFill } from 'react-bootstrap-icons'

const Gameboy = () => {
  const navigate = useNavigate()

  const darkmodeToggle = () => {
    document.querySelectorAll(".darkmode-toggle").forEach(
      element => element.classList.toggle("is-dark"))
  }

  return (
    <>
      <main id='gameboy' className='gameboy-corner'>
      <section id='screen-container' className='gameboy-corner mobile'>
        <article id='settings-container'>
          <ul>
            <div><button className='nes-btn'>+</button>
              <button className='nes-btn'>-</button></div>
            {/* Darkmode button */}
            <div>
            <button className='nes-btn' onClick={() => darkmodeToggle()}><MoonFill style={{imageRendering: "pixelated"}} /></button></div>
            <div><button className='nes-btn' onClick={() => navigate("/")}><HouseDoorFill style={{imageRendering: "pixelated"}} /></button></div>
          </ul>
        </article>
        <Screen />
      </section>
      <div className='screen-grid tablet'>
      <section id='screen-container' className='gameboy-corner'>
        <article id='settings-container'>
          <ul>
            <div><button className='nes-btn'>+</button>
              <button className='nes-btn'>-</button></div>
            {/* Darkmode button */}
            <div>
            <button className='nes-btn' onClick={() => darkmodeToggle()}><MoonFill style={{imageRendering: "pixelated"}} /></button></div>
            <div><button className='nes-btn' onClick={() => navigate("/")}><HouseDoorFill style={{imageRendering: "pixelated"}} /></button></div>
          </ul>
        </article>
        <Screen />
        <label id='gameboy-label' className='tablet'><img src="./img/logo.png" alt='Giant Logo' />Giant </label>
      </section>
      </div>
      <label id='gameboy-label' className='mobile'><img src="./img/logo.png" alt='Giant Logo' />Giant </label>
      <section id='buttons-container' className='mobile'>
        <article id='top-buttons'>
          <div id='d-pad'>
            <div/>
            <div id='up' className='d-pad button-hover'>
              <CaretUpFill style={{imageRendering: "pixelated"}} />
            </div>
            <div/>
            <div id='left' className='d-pad button-hover'>
              <CaretLeftFill style={{imageRendering: "pixelated"}} />
            </div>
            <div id='center' className='d-pad button-hover'>
              <span className='center-dot dot-one' />
              <span className='center-dot dot-two' />
              <span className='center-dot dot-three' />
              <span className='center-dot dot-four' />
              <CircleFill style={{imageRendering: "pixelated"}} />
            </div>
            <div id='right' className='d-pad button-hover'>
              <CaretRightFill style={{imageRendering: "pixelated"}} />
            </div>
            <div/>
            <div id='down' className='d-pad button-hover'>
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

      <div id='d-pad-container' className='dpad-grid tablet'>
        <div id='d-pad' className='dpad-grid tablet'>
        <div/>
        <div id='up' className='d-pad button-hover'>
          <CaretUpFill style={{imageRendering: "pixelated"}} />
        </div>
        <div/>
        <div id='left' className='d-pad button-hover'>
          <CaretLeftFill style={{imageRendering: "pixelated"}} />
        </div>
        <div id='center' className='d-pad button-hover'>
          <span className='center-dot dot-one' />
          <span className='center-dot dot-two' />
          <span className='center-dot dot-three' />
          <span className='center-dot dot-four' />
          <CircleFill style={{imageRendering: "pixelated"}} />
        </div>
        <div id='right' className='d-pad button-hover'>
          <CaretRightFill style={{imageRendering: "pixelated"}} />
        </div>
        <div/>
        <div id='down' className='d-pad button-hover'>
          <CaretDownFill style={{imageRendering: "pixelated"}} />
        </div>
        <div/>            
        </div>
      </div>

      <div id='top-button-icons' className='top-buttons-grid tablet'>
        <span>
          <Link to="/shop"><CartFill style={{imageRendering: "pixelated"}} /></Link>
          <Link to="/contact"><TelephoneFill style={{imageRendering: "pixelated"}} /></Link>
        </span>
      </div>
      <div className='bottom-buttons-grid tablet'>
        <span className='bottom-buttons-spans'><Link to="/">Home <HouseDoorFill style={{imageRendering: "pixelated"}} /></Link></span>
        <span className='bottom-buttons-spans'><Link to="/policy">Policy <InfoCircleFill style={{imageRendering: "pixelated"}} /></Link></span>
      </div>
    </main>
    </>
  )
}

export default Gameboy
