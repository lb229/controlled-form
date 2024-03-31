import { Login } from "./components/Login";

function handleLogin(formaData) {
  console.log('logging in with:', formaData)
}


export function App() {

  return (
    <>
   <Login onLogin={handleLogin} />
    </>
  )
}

