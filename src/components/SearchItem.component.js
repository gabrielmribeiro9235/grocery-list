export default function SearchItem() {
    return(
        <div className="SearchItem">
            <label>Search item</label>
            <input 
                type="text" 
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                placeholder="Search item"
            />
        </div>
    );
};