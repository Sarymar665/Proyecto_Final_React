import { useEffect } from 'react'
import { useState} from 'react'
function App() {

  const fetchApi = async () => {
    try {
      const req = await fetch("https://restcountries.com/v3.1/all");
      const res = await req.json();
      const data = res.sort((last, next) => last.name.common > next.name.common ? 1 : -1);
      console.log(data)
  
    } catch {error} {
      cosole.log("Hubo un error!: ", error);
    }
  }

useEffect(()=>{
  fetchApi()
})

return (
  <div>

  </div>
)
}
export default App