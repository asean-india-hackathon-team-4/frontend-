import React from "react";

const Bid = ({bid, close}) => {
    return (
        <div className="mask">
            <div className="bid">
                <div className="bid-entry">
                    <div>Fish Type:</div>
                    <div className="bid-entry-value">{bid["Fish Type"]}</div>
                </div>
                <div className="bid-entry">
                    <div>Fishing Date:</div>
                    <div className="bid-entry-value">{bid["Fishing TimeStamp"]}</div>
                </div>
                <div className="bid-entry">
                    <div>No of days in the stock:</div>
                    <div className="bid-entry-value">{bid["No of days in the stock"]}</div>
                </div>
                <div className="bid-entry">
                    <div>Total Quantity in stock:</div>
                    <div className="bid-entry-value">{bid["Total Quantity in stock"]}</div>
                </div>
                <div className="bid-entry">
                    <div>Expiry date:</div>
                    <div className="bid-entry-value">{bid["Expiry date"]}</div>
                </div>
                <div className="bid-entry">
                    <div>Your bid:</div>
                    <input className="bid-entry-value"></input>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'auto'}}>
                    <button className="btn btn-dark" onClick={close}>close</button>
                </div>
            </div>
        </div>
    )
}

export default Bid;
