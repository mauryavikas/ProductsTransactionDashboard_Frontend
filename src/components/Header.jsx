import React from 'react'

function Header() {
    return (
        <div style={{ ...style.navBar }}>
            <div style={{ display: "flex", alignItems: "baseline", gap:"10px"}}>
                <h2 style={{ color: "blue"}}>Dashboard</h2>
                <h3>Product Transaction</h3>
            </div>
        </div>
    )
}

const style = {
    navBar: {
        height: "54px",
        minHeight: "54px",
        boxSizing: "border-box",
        width: "100%",
        justifyContent: "start",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        paddingRight: "20px",
        paddingLeft: "20px",
        borderBottom: "1px solid #e6e6e6",
    },
}

export default React.memo(Header)