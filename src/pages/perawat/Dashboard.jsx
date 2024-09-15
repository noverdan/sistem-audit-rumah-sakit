import PageHeader from "../../components/layout/PageHeader"
import CardPatientInfo from "../../components/layout/CardPatientInfo"

export default function DashboardPerawat() {
    return (
        <main className="w-full bg-gray-100 min-w-[1024px]">
            <PageHeader title="Dashboard" />
            <div className="m-8">
                <section className="flex gap-6">
                    <CardPatientInfo total={423} increase={1} type="dirawat" />
                    <CardPatientInfo total={952} increase={-91} type="sembuh" />
                </section>
            </div>
        </main>
    )
}