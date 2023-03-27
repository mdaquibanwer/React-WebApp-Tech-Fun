import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <input type="text" required placeholder='Enter Your Name' />
                    <input type="email" required placeholder='Enter Your E-mail' />
                    <textarea required placeholder='Enter Your Queries' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;