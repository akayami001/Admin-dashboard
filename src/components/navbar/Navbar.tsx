import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>MaT Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" />
        <img src="/app.svg" alt="App" />
        <img src="/expand.svg" alt="Expand" />
        <div className="notification">
        <img src="/notifications.svg" alt="notification" />
        <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos" alt="" />
        <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="settings" className='icon' />
      </div>
    </div>
  )
}

export default Navbar