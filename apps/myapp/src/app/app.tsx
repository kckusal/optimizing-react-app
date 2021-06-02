import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import AppLayout from './AppLayout';
import RoutesLoader from './RoutesLoader';

export function App() {
  return (
    <Router>
      <AppLayout>
        <RoutesLoader />
      </AppLayout>
    </Router>
  );
}

export default App;
