import './App.css'
import { SoftKeys, TopNavBar, IconButton } from './components/navbar'
import PetPage from './components/petPage';

function AppBody() {
  return (
    <main style={{marginTop:"80px", marginBottom:"80px"}}>
        <PetPage />
    </main>
  );
}

function App() {
  const openNotifications = () => {
    alert("hey");
  }

  return (
    <>
      <TopNavBar>
        <div>
          <IconButton style={{width:"70px", height:"70px"}} href="/" src="FeedOliver.png" />
        </div>
        <div>
          <IconButton onClick={openNotifications} src="Bell.svg" />
        </div>
      </TopNavBar>

      <AppBody />

      <SoftKeys selected={window.location.pathname} />
    </>
  )
}

export default App
