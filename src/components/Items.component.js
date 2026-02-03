import SingleItem from "./SingleItem.component";

export default function Items({ itemsList }) {
    return(
        <main>
            {itemsList.length !== 0 ? itemsList.map((item) => (
                <SingleItem key={item.id} item={item} />
            )): <p>Add the first item</p>}
        </main>
    );
};
