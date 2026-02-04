import SingleItem from "./SingleItem.component";

export default function Items({ handleCheckboxChange, handleDelete, itemsList }) {
    return(
        <main>
            {itemsList.length !== 0 ? itemsList.map((item) => (
                <SingleItem key={item.id} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete} item={item} />
            )): <p>Add the first item</p>}
        </main>
    );
};
