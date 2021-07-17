import logo from './logo.svg'
import './App.css'

function App() {
  const branch = window.branch
  const target = window.target
  const appProps = window.props
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <selction>
          {target} : {branch}
          <br />
          {JSON.stringify(appProps)}
        </selction>
      </header>
    </div>
  )
}

export default App
