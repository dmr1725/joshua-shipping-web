import React from 'react';
import { ContainerReceiptInterface } from "@/app/lib/data";
import { ProgressTracker } from "@/app/ui/common/progress-tracker/progress-tracker";
import { ReceiptInfo } from "@/app/ui/client/receipt-details/receipt-info/receipt-info";
import { ReceiptDocuments } from "@/app/ui/client/receipt-details/receipt-documents/receipt-documents";
import { Lots } from "@/app/ui/common/lots/lots";

interface ReceiptDetailsProps {
  receipt: ContainerReceiptInterface;
}

export const ReceiptDetails: React.FC<ReceiptDetailsProps> = ({ receipt }) => {
  const { bl, container_no, ETA, lots, status } = receipt;
  const statusOptions = ["Submitted", "Port Pick Up", "Inspection", "At Warehouse", "Confirmed Inventory"];
  const documents = ["Bill of Lading.pdf", "Commercial Invoice.pdf", "Receiving_Report.pdf"];

  return (
    <div className="flex flex-col gap-[2rem]"> {/* Reduce the gap here */}
      <ProgressTracker statusOptions={statusOptions} currentStatus={status} />
      <div className="flex flex-col gap-[2rem] pt-[2rem] lg:flex-row">
        <ReceiptInfo bl={bl} container_no={container_no} ETA={ETA} />
        <ReceiptDocuments documents={documents} />
      </div>
      <div style={{ borderRadius: "1rem", background: "#FFF" }}>
        <Lots lots={lots} />
      </div>
    </div>
  );
};