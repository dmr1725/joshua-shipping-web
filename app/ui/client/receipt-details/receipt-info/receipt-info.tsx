import React from 'react';

interface ReceiptInfoProps {
    bl?: string;
    container_no?: string;
    ETA?: Date;
}

export const ReceiptInfo: React.FC<ReceiptInfoProps> = ({bl, container_no, ETA}) => {
    return (
        <div style={{borderRadius: "1rem", background: "#FFF"}} className="flex p-[1.25rem] flex-col items-start gap-[1.25rem] self-stretch w-[100%] lg:w-[50%]">
            <div className="text-[1.5rem] font-bold leading-normal not-italic">General Info</div>
            <div style={{borderBottom: "0.5px solid #87B7D1"}} className="flex pb-[0.625rem] justify-between items-center self-stretch">
                <div>Bill of Lading</div>
                <div>{bl}</div>
            </div>
            <div style={{borderBottom: "0.5px solid #87B7D1"}} className="flex pb-[0.625rem] justify-between items-center self-stretch">
                <div>Container</div>
                <div>{container_no}</div>
            </div>
            <div style={{borderBottom: "0.5px solid #87B7D1"}} className="flex pb-[0.625rem] justify-between items-center self-stretch">
                <div>ETA</div>
                <div>{ETA ? ETA.toLocaleDateString('en-US', { timeZone: 'UTC' }) : 'N/A'}</div>
            </div>
        </div>
    )
}