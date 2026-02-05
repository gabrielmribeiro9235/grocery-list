import SingleItem from "./SingleItem.component";

export default function Items({ handleCheckboxChange, handleDelete, itemsList, search }) {
    const filterItemsList = itemsList.filter(item => item.item.toLowerCase().includes(search.toLowerCase()));
    
    return(
        <main>
            {itemsList.length === 0 ? <p>Add the first item</p>
            : filterItemsList.length !== 0 ? filterItemsList.map((item) => (
                <SingleItem key={item.id} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete} item={item} />
            )): <p>No items found</p>}
        </main>
    );
};
