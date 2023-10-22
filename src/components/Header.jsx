import { useState } from 'react'
import { useEffect } from "react"

function Header() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Get the user stored in localStorage
    const getUser = async () => {
      const req = localStorage.getItem("user")
      // Convert the stringified user back to an object
      const user = JSON.parse(req)
      // Set the user to state
      setUser(user)
    }
    // Call the function
    getUser()
  }, [])

  return (
    <header className="header">
      <section className="heroText">
        <h1>
          Hi, <br />
          My name is <br />
          <span className="gradient">Ozovehe</span> <br />
          I am a <span className="devRoleAnimation">Frontend Engineer</span>
          {/* Smart Contract Developer and <br />
          a Mobile App Developer */}
        </h1>
      </section>
      <section className="heroImage">
        {user && <img src={user.avatar_url} alt="heroImage" />}
      </section>
    </header>
  )
}

export default Header