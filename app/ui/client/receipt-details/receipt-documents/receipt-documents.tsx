import React from 'react';
import Image from 'next/image';

interface ReceiptDocumentsProps {
    documents: string[];
}

export const ReceiptDocuments: React.FC<ReceiptDocumentsProps> = ({ documents }) => {
    const hasDocuments = documents && documents.length > 0; // Check if documents exist and are not empty

    return (
        <div style={{ borderRadius: "1rem", background: "#FFF" }} className="flex p-[1.25rem] flex-col items-start gap-[1.25rem] self-stretch w-[100%] min-h-64 lg:w-[50%]">
            <div className="text-[1.5rem] font-bold leading-normal not-italic">Documents</div>
            {hasDocuments ? (
                documents.map((document) => (
                    <div key={document} style={{ borderBottom: "0.5px solid #87B7D1" }} className="flex pb-[0.625rem] gap-[0.625rem] items-center self-stretch">
                        <Image width={36} height={36} src="/icons/pdf.svg" alt="pdf icon" />
                        <div>{document}</div>
                    </div>
                ))
            ) : (
                <div>Documents will be reflected on 2-3 business days.</div> 
            )}
        </div>
    );
};