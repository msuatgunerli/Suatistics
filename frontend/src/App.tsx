import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'

function App() {
  const [instruments, setInstruments] = useState<any[]>([])

  useEffect(() => {
    async function getInstruments() {
      const { data, error } = await supabase.from('instruments').select()
      if (error) {
        console.error('Error fetching instruments:', error)
      } else {
        setInstruments(data)
      }
    }

    getInstruments()
  }, [])

  return (
    <div>
      <h1>🎻 Instruments</h1>
      <ul>
        {instruments.map((instrument) => (
          <li key={instrument.id}>{instrument.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
