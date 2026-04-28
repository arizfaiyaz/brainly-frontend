import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'


function App() {
  return (
    <>
      <Button startIcon={<ShareIcon />} size="sm" variant="primary" text="Share"/>
      <Button startIcon={<PlusIcon />} size="md" variant="secondary" text="Add Content"/>
      <Button startIcon={<PlusIcon />} size="lg" variant="secondary" text="Add Content"/>
    </>
  )
}

export default App
