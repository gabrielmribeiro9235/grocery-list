import { FaTrash } from "react-icons/fa";

export default function SingleItem({ handleCheckboxChange ,item }) {
    return (
        <div className="item" id={item.id}>
            <label htmlFor="itemCheckbox">Item checkbox</label>
            <input 
                id="itemCheckbox"
                name="itemCheckbox"
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
            />
            {item.checked ? <p className="checkedItem">{item.item}</p> : <p>{item.item}</p>}
            <button id="deleteButton">
                <FaTrash size={18} />
            </button>
        </div>
    );
};