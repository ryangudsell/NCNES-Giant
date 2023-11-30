import React from 'react'

const Contact = () => {
  return (
    <div className='nes-container with-title is-dark'>
      <p className='title'>Contact</p>
      <p>Contact Us below:</p>
      <button className='nes-btn'>000 000 0000</button>
      <button className='nes-btn' href="mailto:info@giant.com">info@giant.com</button>
      <form>
        <div className='nes-field'>
          <label name='name'>Name</label>
          <input type="text" name='name' className='nes-input is-dark' />
        </div>

        <div className='nes-field'>
          <label name='email'>Email</label>
          <input type="text" name='email' className='nes-input is-dark' />
        </div>

        <div className='nes-field'>
          <label name='subject'>Subject</label>
          <input type="text" name='subject' className='nes-input is-dark' />
        </div>

        <div className='nes-field'>
          <label name='message'>Message</label>
          <textarea rows={10} name='message' className='nes-textarea is-dark'
            style={{resize: 'none'}} />
        </div>
      </form>
    </div>
  )
}

export default Contact
