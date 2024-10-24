import { fetchReceiptById } from "@/app/lib/data";
import { ReceiptDetails } from "@/app/ui/client/receipt-details/receipt-details";
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const receipt = await fetchReceiptById(id)
    return (
        <ReceiptDetails receipt={receipt}/>
    );
}