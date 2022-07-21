
import './App.css';

import InputBilling from './components/InputBilling';
import ListBills from './components/ListBillings';

function App() {
  return (
    <>
      <div className = "container">
        <h1 className="text-center mt-5"> Billing List </h1>
        <ListBills/>
        <InputBilling/>
      </div>
    </>
  );
}

export default App;
