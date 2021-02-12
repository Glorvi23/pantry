import Items from "./components/Items/Items";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">My Pantry!</h1>
          </div>
        </div>
      </div>

      <Items />
    </div>
  );
}

export default App;
