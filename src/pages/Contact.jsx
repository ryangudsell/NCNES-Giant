import React from 'react'

const Contact = () => {
  return (
    <div className='nes-container with-title darkmode-toggle is-dark'>
      <p className='title'>Contact</p>
      <p>Contact Us below:</p>
      <button className='nes-btn'>000 000 0000</button>
      <button className='nes-btn' href="mailto:info@giant.com">info@giant.com</button>
      <form>
        <div className='nes-field'>
          <label name='name'>Name</label>
          <input type="text" name='name' className='nes-input darkmode-toggle is-dark' />
        </div>

        <div className='nes-field'>
          <label name='email'>Email</label>
          <input type="text" name='email' className='nes-input darkmode-toggle is-dark' />
        </div>

        <div className='nes-field'>
          <label name='subject'>Subject</label>
          <input type="text" name='subject' className='nes-input darkmode-toggle is-dark' />
        </div>

        <div className='nes-field'>
          <label name='message'>Message</label>
          <textarea rows={10} name='message' className='nes-textarea darkmode-toggle is-dark'
            style={{resize: 'none'}} />
        </div>

        <div className='nes-field'><br />
          <button className='nes-btn' type='button'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
