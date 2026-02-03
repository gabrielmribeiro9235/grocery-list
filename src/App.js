import Header from "./components/Header.component";
import AddItem from "./components/AddItem.component";
import SearchItem from "./components/SearchItem.component";
import Items from "./components/Items.component";

function App() {
  return (
    <div className="App">
        <Header />
        <AddItem />
        <SearchItem />
        <Items />
    </div>
  );
}

export default App;
