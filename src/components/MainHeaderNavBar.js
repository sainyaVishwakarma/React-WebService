import {NavLink} from 'react-router-dom'
const MainHeaderNavBar=()=>{
  return (
  <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="home">Home</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink className="nav-link" to="/table">Table <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/form">Form</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link" to="#">Procing</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="#">Disabled</NavLink>
      </li>
    </ul>
  </div>
</nav>
  </div>
  )
}

export default MainHeaderNavBar;