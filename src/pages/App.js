import ColocateState from "../components/colocateState";
import Header from "../components/header";
import LiftState from "../components/liftState";

function App() {
  return (
    <div className="App">
      <Header />
      <LiftState />
      <hr />
      <ColocateState />
    </div>
  );
}

export default App;
