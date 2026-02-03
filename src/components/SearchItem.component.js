export default function SearchItem() {
    return(
        <div className="SearchItem">
            <label htmlFor="SearchItem">Search item</label>
            <input 
                id="SearchItem"
                name="SearchItem"
                type="text" 
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                placeholder="Search item"
            />
        </div>
    );
};