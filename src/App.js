import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './components/navigation';
import CardsSection from './components/CardSection';
import OperationTable from './components/OperationTable';


function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="md-Grid-row">
        <div className="ms-Grid-col ms-sm1 ms-xl1">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm11 ms-xl11">
          <div className="ms-Grid-row">
            <CardsSection />
          </div>
          <div className="ms-Grid-row">
            <OperationTable />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
