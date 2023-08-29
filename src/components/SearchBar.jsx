import React, { useRef } from 'react'

function SearchBar({ searchInput, onSearchChange = (s) => { } }) {

    const inputValue = useRef(null);

    const handleChange = () => {
        const value = inputValue.current.value;
        onSearchChange(value);
    }

    return (
        <div style={{ ...style.search }}>
            <div style={{ width: "50%" }}>
                <input className='text-input' ref={inputValue} />
            </div>
            <button className='button' onClick={handleChange}>SEARCH</button>
        </div>
    )
}

const style = {
    search: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        flex: "1"
    }
}
export default React.memo(SearchBar)
