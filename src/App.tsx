
import { CustomerData, companydata} from './components/data'

import Invoice from './components/Invoice'

import './App.css'

function App() {


  return (
    <>
      <div>
        <Invoice  companydata={companydata} customerData={CustomerData} />
        
      </div> 
    </>
  )
}

export default App
