import { useRef } from "react";

export default function AddItem({ addItem }) {
    const item = useRef();
    const handleSubmit = () => {
        if(item.current && item.current.value) {
            addItem(item.current.value);
            item.current.value = ""
        }
    };

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <label htmlFor="NewItem">Add new item</label>
            <input 
                id="NewItem"
                name="NewItem"
                type="text" 
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                placeholder="Add new item"
                ref={item}
            />
            <button className="addButton">+</button>
        </form>
    );
};