import { useState } from "react";
import { Item } from "../../types/Item";
import {  } from "../../App";
import cx from "classnames";

type Props = { //cria o props para receber o item
    item: Item;
    onChange: (id: number, done: boolean) => void
}


export const ItemList = ({item, onChange}: Props) => {
    //const[isChecked, setIsChecked] = useState(item.done);
    return(
        <div className="mb-3 mx-8">
            <input className="mx-2" type="checkbox" 
            checked={item.done}
            onChange={e => onChange(item.id, e.target.checked)}
            >
            </input>
            <label className={cx("text-white text-xl", {
                "line-through": item.done
            })}>{item.name}</label>
        </div>
    )
}