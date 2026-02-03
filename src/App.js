import Header from "./components/Header.component";
import AddItem from "./components/AddItem.component";
import SearchItem from "./components/SearchItem.component";
import Items from "./components/Items.component";
import Footer from "./components/Footer.component";
import { useState } from "react";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const addItem = (item) => {
    const newItem = {
      id: itemsList.length !== 0 ? itemsList[itemsList.length-1].id + 1 : 1,
      item: item,
      checked: false,
    }
    setItemsList([ ...itemsList, newItem]);
  };

  return (
    <div className="App">
        <Header />
        <AddItem addItem={addItem} />
        <SearchItem />
        <Items itemsList={itemsList} />
        <Footer itemsList={itemsList} />
    </div>
  );
}

export default App;
