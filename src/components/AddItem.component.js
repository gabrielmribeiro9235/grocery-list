export default function AddItem() {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="NewItem">Add new item</label>
            <input 
                id="NewItem"
                name="NewItem"
                type="text" 
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                placeholder="Add new item"
            />
            <button className="addButton">+</button>
        </form>
    );
};