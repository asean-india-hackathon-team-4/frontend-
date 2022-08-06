import React, { useState } from "react";
import Bid from "./bid";

const LiveBidding = () => {

    const [bid, setBid] = useState(null);

    const headers = [{label: 'Fish Type', id: 'fish_type'}, {label: 'Transaction Hash', id: 'transaction_hash'}, {label: 'Status', id: 'status'},{label: 'TimeStamp', id: 'timestamp'}, {label: 'Bid Price', id: 'bid_price'}, {label: 'More Details', id: 'more_details'}];

    const TableHeaders = [];

    headers.forEach(header => {
        TableHeaders.push(
            <div className={`table-header ${header.id}`}>
                {header.label}
            </div>
        )
    })

    const bids = [
        {
            "Fish Type": "Pirahna",
            "Transaction Hash": "0xf95610020ce621626230cf3cff97fc027f942875fdc9d5b5a8838196825bc443",
            "Status": "Sucecss",
            "Bid Price": "454",
            "Fish Name": "Mumbai Colapuri",
            "Fishing TimeStamp": "Aug-06-2022 08:28:08 AM +UTC",
            "No of days in the stock": 4,
            "Total Quantity in stock": 45,
            "Expiry date": "Aug-16-2022 08:28:08 AM +UTC",
            "Your  Bid": ""
        },
        {
            "Fish Type": "Gold fish",
            "Transaction Hash": "0xf0282360ce621626230cf3cff97fc027f942875fdc9d5b5a8838196825bc4431",
            "Status": "Sucecss",
            "Bid Price": "494",
            "Fish Name": "Bengali Colapuri",
            "Fishing TimeStamp": "Aug-06-2022 06:50:08 AM +UTC",
            "No of days in the stock": 3,
            "Total Quantity in stock": 60,
            "Expiry date": "Aug-09-2022 06:50:08 AM +UTC",
            "Your  Bid": ""
        },
        {
            "Fish Type": "Redcord",
            "Transaction Hash": "0x96177617b2f06009b6eff74902e83dd555d0236411bb172e5e7b427b1dc3f3",
            "Status": "Sucecss",
            "Bid Price": "23",
            "Fish Name": " Odisha Rohu",
            "Fishing TimeStamp": "Aug-05-2022 10:44:09 PM +UTC",
            "No of days in the stock": 1,
            "Total Quantity in stock": 432,
            "Expiry date": "Aug-17-2022 08:28:08 AM +UTC",
            "Your  Bid": ""
        }
    ];

    const Bids = [];

    bids.forEach(bid => {
        Bids.push(
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: 'white', fontSize: '12px'}}>
                <div className="table-entry fish_type">
                    {bid["Fish Type"]}
                </div>
                <div className="table-entry transaction_hash">
                    {bid["Transaction Hash"]}
                </div>
                <div className="table-entry status">
                    {bid["Status"]}
                </div>
                <div className="table-entry timestamp">
                    {bid["Fishing TimeStamp"]}
                </div>
                <div className="table-entry bid_price">
                    {bid["Bid Price"]}
                </div>
                <div className="btn btn-dark table-entry more_details" style={{fontSize: '11px'}} onClick={() => setBid(bid)}>More Details</div>
            </div>
        )
    })

    return (
        <div style={{background: 'black', height: '100%', width: '100%', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            {bid && <Bid bid={bid} close={() => setBid(null)} />}
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                {TableHeaders}
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', margin: '20px 0px'}}>
                {Bids}
            </div>
        </div>
    )
}

export default LiveBidding;
