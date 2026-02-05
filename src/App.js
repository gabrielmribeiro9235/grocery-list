import Header from "./components/Header.component";
import AddItem from "./components/AddItem.component";
import SearchItem from "./components/SearchItem.component";
import Items from "./components/Items.component";
import Footer from "./components/Footer.component";
import { useState } from "react";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [search, setSearch] = useState("");
  const addItem = (item) => {
    const newItem = {
      id: itemsList.length !== 0 ? itemsList[itemsList.length-1].id + 1 : 1,
      item: item,
      checked: false,
    }
    setItemsList([ ...itemsList, newItem]);
  };
  const handleCheckboxChange = (id) => {
    const newList = itemsList.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItemsList(newList);
  }
  const handleDelete = (id) => {
    const newList = itemsList.filter(item => item.id !== id);
    setItemsList(newList);
  }

  return (
    <div className="App">
        <Header />
        <AddItem addItem={addItem} />
        <SearchItem setSearch={setSearch} />
        <Items handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete} itemsList={itemsList} search={search} />
        <Footer itemsList={itemsList} />
    </div>
  );
}

export default App;
