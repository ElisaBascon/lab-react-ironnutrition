import React from "react";

export default function Searc(props) {
    const { onSearch } = props;
    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}