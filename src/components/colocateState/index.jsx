import { useState } from 'react'

function ColocateState() {
  const [currentUser, setCurrentUser] = useState()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <h1>Colocation State</h1>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Header />
      </div>
      <div style={{ flex: 1 }}>
        {currentUser ? (
          <Dashboard user={currentUser} />
        ) : (
          <LoginScreen onLogin={() => { setCurrentUser({ name: 'Leandro' }) }} />
        )}
      </div>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Footer />
      </div>
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1>header</h1>
    </div>
  )
}

function LoginScreen({ onLogin }) {
  return (
    <div>
    <h3>please login</h3>
    <button onClick={onLogin}>Login</button>
    </div>
  )
}

function Dashboard({ user }) {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />  
      <DashboardContent user={user} />
    </div>
  )
}

function DashboardNav() {
  return (
    <div>
      <h3>dashboard navigation</h3>
    </div>
  )
}

function DashboardContent({ user }) {
  return (
    <div>
      <h3>dashboard content</h3>
      <WelcomeMessage user={user} />
    </div>
  )
}

function WelcomeMessage({ user }) {
  return (
    <div>
      <p>Welcome {user.name}!!!</p>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <h1>footer</h1>
    </div>
  )
}


export default ColocateState
