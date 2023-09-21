import { useState,useEffect } from "react"
import { items } from "../listItems"

export const MultipleFilters = () => {
    const btnFilters = ['Bags', 'Watches', 'Sports', 'Sunglasses']

    const[selectedFilters,setSelectedFilters] = useState([])
    const[filteredItems,setFilteredItems] = useState(items)

    // logic to collect category on click of the button
    const hanldeButtonClick = (cate) => {
        if(selectedFilters.includes(cate)){
            let filters = cate.filter((ele) => ele !== cate)
            setSelectedFilters(filters)
        }else {
            setSelectedFilters([...selectedFilters,cate])
        }
    }

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = items.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...items]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    return (
        <>
            <h1 className="text-center my-2 font-weight-bold text-capitalize">
                moonshotX filters
            </h1>

            {
                btnFilters.map((category,id) => {
                    return <button 
                        className={`mx-3 my-2 ${selectedFilters.includes(category) ? 'active' : ''}`}
                        key={id}
                        onClick={() => hanldeButtonClick(category)}
                    >{category}</button>
                })
            }

            <div className="items-container">
                {filteredItems.map((item, idx) => (
                <div key={`items-${idx}`} className="item">
                    <p>{item.name}</p>
                    <p className="category">{item.category}</p>
                </div>
                ))}
            </div>
        </>
    )
}