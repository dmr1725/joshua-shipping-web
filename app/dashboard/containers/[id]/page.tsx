import {ProgressTracker} from "@/app/ui/common/progress-tracker/progress-tracker";
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    return (
        <>
            <ProgressTracker/>
        </>
    );
}