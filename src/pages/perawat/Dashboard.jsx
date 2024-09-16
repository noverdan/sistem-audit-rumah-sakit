import PageHeader from "../../components/layout/PageHeader"
import CardPatientInfo from "../../components/layout/CardPatientInfo"
import PatientChart from "../../components/layout/PatientChart"
import FrequencyPatient from "../../components/layout/FrequencyPatient"

const pasienDirawat = {
    harian: [
        {
            id: 2,
            x: 'Selasa',
            tanggal: '03/09/2024',
            total: 150,
            totalSebelumnya: 100
        },
        {
            id: 3,
            x: 'Rabu',
            tanggal: '04/09/2024',
            total: 130,
            totalSebelumnya: 150
        },
        {
            id: 4,
            x: 'Kamis',
            tanggal: '05/09/2024',
            total: 110,
            totalSebelumnya: 130
        },
        {
            id: 5,
            x: 'Jumat',
            tanggal: '06/09/2024',
            total: 160,
            totalSebelumnya: 110
        },
        {
            id: 6,
            x: 'Sabtu',
            tanggal: '07/09/2024',
            total: 120,
            totalSebelumnya: 160
        },
        {
            id: 7,
            x: 'Minggu',
            tanggal: '08/09/2024',
            total: 100,
            totalSebelumnya: 120
        },
        {
            id: 8,
            x: 'Senin',
            tanggal: '09/09/2024',
            total: 130,
            totalSebelumnya: 100
        }
    ],
    mingguan: [
        {
            id: 2,
            x: '7 Mn. terakhir',
            tanggal: '01/09/2024 - 07/09/2024',
            total: 200,
            totalSebelumnya: 150
        },
        {
            id: 3,
            x: '6 Mn. terakhir',
            tanggal: '08/09/2024 - 14/09/2024',
            total: 159,
            totalSebelumnya: 200
        },
        {
            id: 4,
            x: '5 Mn. terakhir',
            tanggal: '15/09/2024 - 21/09/2024',
            total: 140,
            totalSebelumnya: 159
        },
        {
            id: 5,
            x: '4 Mn. terakhir',
            tanggal: '22/09/2024 - 28/09/2024',
            total: 160,
            totalSebelumnya: 140
        },
        {
            id: 6,
            x: '3 Mn. terakhir',
            tanggal: '29/09/2024 - 05/10/2024',
            total: 130,
            totalSebelumnya: 260
        },
        {
            id: 7,
            x: '2 Mn. terakhir',
            tanggal: '06/10/2024 - 12/10/2024',
            total: 100,
            totalSebelumnya: 130
        },
        {
            id: 8,
            x: '1 Mn. terakhir',
            tanggal: '13/10/2024 - 19/10/2024',
            total: 170,
            totalSebelumnya: 100
        }
    ],
    bulanan: [
        {
            id: 2,
            x: 'Januari',
            tanggal: '01/01/2024 - 31/01/2024',
            total: 100,
            totalSebelumnya: 110
        },
        {
            id: 3,
            x: 'Februari',
            tanggal: '01/02/2024 - 29/02/2024',
            total: 200,
            totalSebelumnya: 100
        },
        {
            id: 4,
            x: 'Maret',
            tanggal: '01/03/2024 - 31/03/2024',
            total: 150,
            totalSebelumnya: 200
        },
        {
            id: 5,
            x: 'April',
            tanggal: '01/04/2024 - 30/04/2024',
            total: 160,
            totalSebelumnya: 150
        },
        {
            id: 6,
            x: 'Mei',
            tanggal: '01/05/2024 - 31/05/2024',
            total: 120,
            totalSebelumnya: 160
        },
        {
            id: 7,
            x: 'Juni',
            tanggal: '01/06/2024 - 30/06/2024',
            total: 100,
            totalSebelumnya: 120
        },
        {
            id: 8,
            x: 'Juli',
            tanggal: '01/07/2024 - 31/07/2024',
            total: 130,
            totalSebelumnya: 100
        }
    ]
}

const frekuensiPasien = [
    {
        id: 1,
        x: 'Jan',
        total: 100,
        bulan: 'Januari'
    },
    {
        id: 2,
        x: 'Feb',
        total: 150,
        bulan: 'Februari'
    },
    {
        id: 3,
        x: 'Mar',
        total: 50,
        bulan: 'Maret'
    },
    {
        id: 4,
        x: 'Apr',
        total: 80,
        bulan: 'April'
    },
    {
        id: 5,
        x: 'Mei',
        total: 160,
        bulan: 'Mei'
    },
    {
        id: 6,
        x: 'Jun',
        total: 110,
        bulan: 'Juni'
    },
    {
        id: 7,
        x: 'Jul',
        total: 126,
        bulan: 'Juli'
    },
    {
        id: 8,
        x: 'Agu',
        total: 70,
        bulan: 'Agustus'
    },
    {
        id: 9,
        x: 'Sep',
        total: 140,
        bulan: 'September'
    },
    {
        id: 10,
        x: 'Okt',
        total: 90,
        bulan: 'Oktober'
    },
    {
        id: 11,
        x: 'Nov',
        total: 110,
        bulan: 'November'
    },
    {
        id: 12,
        x: 'Des',
        total: 150,
        bulan: 'Desember'
    }
]

export default function DashboardPerawat() {
    return (
        <main className="w-full bg-gray-100 min-w-[720px]">
            <PageHeader title="Dashboard" />
            <div className="m-8 flex flex-col gap-8">
                <section className="flex gap-6">
                    <CardPatientInfo total={423} increase={1} type="dirawat" />
                    <CardPatientInfo total={952} increase={-91} type="sembuh" />
                </section>
                <PatientChart data={pasienDirawat} />
                <FrequencyPatient data={frekuensiPasien} />
            </div>
        </main>
    )
}