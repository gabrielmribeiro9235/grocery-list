export default function SearchItem({ setSearch }) {
    return(
        <div className="SearchItems">
            <label htmlFor="SearchItem">Search item</label>
            <input 
                id="SearchItem"
                name="SearchItem"
                type="text" 
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                placeholder="Search item"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
        </div>
    );
};