import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Index from "./Pages/Index.jsx";
import New from "./Pages/New.jsx";
import Show from "./Pages/Show.jsx";
import Edit from "./Pages/Edit.jsx";
import Error from "./Pages/Error.jsx";

function App() {
  const [balance, setBalance] = useState(0);

  return (
    <div className="App">
      <Router>
        <header>
          <NavBar balance={balance} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index setBalance={setBalance} />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:id" element={<Show />} />
            <Route path="/transactions/:id/edit" element={<Edit />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
