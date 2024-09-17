import { useState } from "react";
import PageHeader from "../../components/layout/PageHeader";
import InputPasien from "../../components/layout/perawat/InputPasien";

export default function DataPasien() {
    const [isInputPasien, setIsInputPasien]= useState(false)
    return (
        <main className="w-full bg-gray-100 min-w-[720px]">
            <PageHeader title="Data Pasien" />
            {
                !isInputPasien && (
                    <button onClick={()=>setIsInputPasien(!isInputPasien)}>Klik</button>
                )
            }
            {
                isInputPasien && (
                    <InputPasien />
                )
            }
        </main>
    )
}