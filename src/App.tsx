import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './ui/components/Header/Header';
import Front from './ui/components/Front/Front';
import Auth from './ui/components/Auth/Auth';
import User from './ui/components/User/User';

//! Old example
// export function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export function WrappedApp() {
//   return (
//     <HashRouter>
//       <App />
//     </HashRouter>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/user" element={<User />} />
          <Route path="/" Component={Front} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
