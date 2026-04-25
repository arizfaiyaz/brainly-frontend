import './App.css'
import { Button } from './components/ui/Button'
import { Plusicon } from './icons/Plusicon'


function App() {
  return (
    <>
      <Button size="sm" variant="primary" text="Share"/>
      <Button startIcon={<Plusicon />} size="md" variant="secondary" text="Add Content"/>
      <Button startIcon={<Plusicon />} size="lg" variant="secondary" text="Add Content"/>
    </>
  )
}

export default App
