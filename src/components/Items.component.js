export default function Items({ itemsList }) {
    return(
        <main>
            {itemsList.length !== 0 ? itemsList.map((item) => (
                <div key={item.id} id={item.id}>
                    <label htmlFor="itemCheckbox">Item checkbox</label>
                    <input 
                        id="itemCheckbox"
                        name="itemCheckbox"
                        type="checkbox"
                        checked={item.checked}
                    />
                    <p>{item.item}</p>
                    <button id="deleteButton"></button>
                </div>
            )): <p>Add the first item</p>}
        </main>
    );
};
