
import TxnAll from "../Components/TxnAll.jsx";

function Index({ setBalance }) {
  return (
    <div className="index">
      <h1>Index</h1>
      <TxnAll setBalance={setBalance} />
    </div>
  );
}

export default Index;