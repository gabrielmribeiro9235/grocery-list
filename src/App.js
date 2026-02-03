import Header from "./components/Header.component";
import AddItem from "./components/AddItem.component";
import SearchItem from "./components/SearchItem.component";
import Items from "./components/Items.component";
import Footer from "./components/Footer.component";
import { useState } from "react";

function App() {
  const [itemsList, setItemsList] = useState([]);

  return (
    <div className="App">
        <Header />
        <AddItem />
        <SearchItem />
        <Items itemsList={itemsList} />
        <Footer itemsList={itemsList} />
    </div>
  );
}

export default App;
