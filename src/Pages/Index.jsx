
import TxnAll from "../Components/TxnAll.jsx";

function Index({ setBalance }) {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">
        Index
      </h1>
      <TxnAll setBalance={setBalance} />
    </div>
  );
}

export default Index;