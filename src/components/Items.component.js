import SingleItem from "./SingleItem.component";

export default function Items({ handleCheckboxChange ,itemsList }) {
    return(
        <main>
            {itemsList.length !== 0 ? itemsList.map((item) => (
                <SingleItem key={item.id} handleCheckboxChange={handleCheckboxChange} item={item} />
            )): <p>Add the first item</p>}
        </main>
    );
};
