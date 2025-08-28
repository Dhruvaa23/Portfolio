import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import MultiPageRoutes from "./components/MultiPageRoutes";


function App() {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout>
                  <MultiPageRoutes />   
            </BaseLayout>
         </BrowserRouter>
      </div>
   );
}


export default App;
