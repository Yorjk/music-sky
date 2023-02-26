import './Styles/style.css';
import { AppRoutes } from './Routes';
import React from 'react';

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false),2000);
  //    }, [])
   return (
    // isLoading ? <Skeleton/> :
        <AppRoutes/>
    
    )
}

export default App;
