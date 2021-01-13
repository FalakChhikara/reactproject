import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//(what to show in JSX format(single object,
                //  or inside single div 
                // or array format[obj1, obj2, ...]
    // most imp // <React.Fragment> </React.Fragment>)
    //          // <>  </>  or simply do this
// , where to show,
//  callback)
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* {for js expression} */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
