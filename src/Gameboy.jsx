import { useState, useEffect } from 'react'
import Screen from './components/Screen'
import { Link, useNavigate } from 'react-router-dom'
import { MoonFill, HouseDoorFill, InfoCircleFill, CartFill, TelephoneFill, CaretUpFill, CaretRightFill, CaretDownFill, CaretLeftFill, CircleFill, Box } from 'react-bootstrap-icons'
import axios from 'axios'

const Gameboy = () => {
  const navigate = useNavigate()

  const [gamesArray, setGamesArray] = useState([])
  const [gameIndex, setGameIndex] = useState(0)

  const darkmodeToggle = () => {
    document.querySelectorAll(".darkmode-toggle").forEach(
      element => element.classList.toggle("is-dark"))
  }

  const ThreeDToggle = () => {
    document.getElementById("gameboy").classList.toggle("three-d")
  }

  function changeZoom(zoomLevel) {
    const currentZoom = document.body.style.zoom || 1;
    const newZoom = parseFloat(currentZoom) + zoomLevel;
  
    // Get the current scroll positions
    const scrollX = typeof window.scrollX === 'undefined' ? window.pageXOffset : window.scrollX;
    const scrollY = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY;
  
    // Calculate the center of the window
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;
  
    // Calculate the scroll position after zoom
    const newScrollX = ((scrollX + windowCenterX) * newZoom - windowCenterX);
    const newScrollY = ((scrollY + windowCenterY) * newZoom - windowCenterY);
  
    document.body.style.zoom = newZoom;
    
    // Scroll to the new position after zoom
    window.scrollTo(newScrollX, newScrollY);
  }

  useEffect(() => {
    axios.get("./json/games.json")
    .then((res) => {
      setGamesArray(res.data.games)
    })
    .catch((err) => console.log(err))
  }, [])

  const GameChanger = () => {
    setGameIndex(gameIndex + 1)
    if (gameIndex >= (gamesArray.length - 1)) {
      setGameIndex(0)
      navigate("/")
      return
    }
    navigate(`/games/${gamesArray[gameIndex + 1].name}`)
  }

  function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', {
      key: key,
      code: key === 'ArrowUp' ? 'ArrowUp' : key === 'ArrowDown' ? 'ArrowDown' : key === 'ArrowLeft' ? 'ArrowLeft' : key === 'ArrowRight' ? 'ArrowRight' : '',
      keyCode: key === 'ArrowUp' ? 38 : key === 'ArrowDown' ? 40 : key === 'ArrowLeft' ? 37 : key === 'ArrowRight' ? 39 : undefined,
      which: key === 'ArrowUp' ? 38 : key === 'ArrowDown' ? 40 : key === 'ArrowLeft' ? 37 : key === 'ArrowRight' ? 39 : undefined,
    });
    console.log(`Simulated key press: ${key}`);
    window.dispatchEvent(event);
  }

  return (
    <>
      <main id='gameboy' className='gameboy-corner'>
      <section id='screen-container' className='gameboy-corner mobile'>
        <article id='settings-container'>
          <ul>
            <div>
              <button className='nes-btn'
                onClick={() => changeZoom(0.1)}>+</button>
              <button className='nes-btn'
                onClick={() => changeZoom(-0.1)}>-</button>
            </div>
            {/* Darkmode button */}
            <div>
            <button className='nes-btn' onClick={() => darkmodeToggle()}><MoonFill style={{imageRendering: "pixelated"}} /></button></div>
            <div><button className='nes-btn' onClick={() => ThreeDToggle()}><Box style={{imageRendering: "pixelated"}} /></button></div>
            <div><button className='nes-btn' onClick={() => navigate("/")}><HouseDoorFill style={{imageRendering: "pixelated"}} /></button></div>
          </ul>
        </article>
        <Screen />
      </section>
      <div className='screen-grid tablet'>
      <section id='screen-container' className='gameboy-corner'>
        <article id='settings-container'>
          <ul>
            <div>
              <button className='nes-btn'
                onClick={() => changeZoom(0.1)}>+</button>
              <button className='nes-btn'
                onClick={() => changeZoom(-0.1)}>-</button>
            </div>
            {/* Darkmode button */}
            <div><button className='nes-btn' onClick={() => darkmodeToggle()}><MoonFill style={{imageRendering: "pixelated"}} /></button></div>
            <div><button className='nes-btn' onClick={() => ThreeDToggle()}><Box style={{imageRendering: "pixelated"}} /></button></div>
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
            <div id='up' className='d-pad button-hover'
            onClick={() => simulateKeyPress('ArrowUp')}>
              <CaretUpFill style={{imageRendering: "pixelated"}} />
            </div>
            <div/>
            <div id='left' className='d-pad button-hover'
            onClick={() => simulateKeyPress('ArrowLeft')}>
              <CaretLeftFill style={{imageRendering: "pixelated"}} />
            </div>
            <div id='center' className='d-pad button-hover'
              onClick={() => GameChanger()}>
              <span className='center-dot dot-one' />
              <span className='center-dot dot-two' />
              <span className='center-dot dot-three' />
              <span className='center-dot dot-four' />
              <CircleFill style={{imageRendering: "pixelated"}} />
            </div>
            <div id='right' className='d-pad button-hover'
            onClick={() => simulateKeyPress('ArrowRight')}>
              <CaretRightFill style={{imageRendering: "pixelated"}} />
            </div>
            <div/>
            <div id='down' className='d-pad button-hover'
            onClick={() => simulateKeyPress('ArrowDown')}>
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
        <div id='up' className='d-pad button-hover'
        onClick={() => simulateKeyPress('ArrowUp')}>
          <CaretUpFill style={{imageRendering: "pixelated"}} />
        </div>
        <div/>
        <div id='left' className='d-pad button-hover'
        onClick={() => simulateKeyPress('ArrowLeft')}>
          <CaretLeftFill style={{imageRendering: "pixelated"}} />
        </div>
        <div id='center' className='d-pad button-hover'
              onClick={() => GameChanger()}>
          <span className='center-dot dot-one' />
          <span className='center-dot dot-two' />
          <span className='center-dot dot-three' />
          <span className='center-dot dot-four' />
          <CircleFill style={{imageRendering: "pixelated"}} />
        </div>
        <div id='right' className='d-pad button-hover'
        onClick={() => simulateKeyPress('ArrowRight')}>
          <CaretRightFill style={{imageRendering: "pixelated"}} />
        </div>
        <div/>
        <div id='down' className='d-pad button-hover'
        onClick={() => simulateKeyPress('ArrowDown')}>
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
