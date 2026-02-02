export default function AddItem() {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add new item</label>
            <input 
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