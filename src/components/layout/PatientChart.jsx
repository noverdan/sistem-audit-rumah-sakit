import { Icon } from '@iconify/react'
import { Chart } from "chart.js/auto"
import { CategoryScale } from "chart.js"
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2"
import { useEffect, useState } from 'react';

Chart.register(CategoryScale);
const grafik = {
    HARIAN: "7 Hari Terakhir",
    MINGGUAN: "7 Minggu Terakhir",
    BULANAN: "7 Bulan Terakhir"
}

export default function PatientChart({ data }) {
    const [sort, setSort] = useState(grafik.HARIAN);
    const [showListSort, setShowListSort] = useState(false);
    const [grafikPasien, setGrafikPasien] = useState({
        labels: data.harian?.map((d) => d.x),
        datasets: [
            {
                label: "Pasien",
                data: data.harian?.map((d) => d.total),
                backgroundColor: '#0D6EFD',
                barThickness: 32,
            }
        ]
    })

    const updateChart = (data) => {
        setGrafikPasien({
            labels: data?.map((d) => d.x),
            datasets: [
                {
                    label: "Pasien",
                    data: data?.map((d) => d.total),
                    backgroundColor: '#0D6EFD',
                    barThickness: 32,
                }
            ]
        })
    }

    useEffect(() => {
        if (sort === grafik.HARIAN) {
            updateChart(data.harian?.slice(-7))
        } else if (sort === grafik.MINGGUAN) {
            updateChart(data.mingguan?.slice(-7))
        } else if (sort === grafik.BULANAN) {
            updateChart(data.bulanan?.slice(-7))
        }
    }, [sort, data])

    return (
        <section className="flex flex-col  gap-4 p-8 w-fit bg-white border border-stroke">
            <div className="flex items-center justify-between">
                <p className="font-medium text-lg">Grafik Pasien</p>
                <div tabIndex='0' onBlur={() => setShowListSort(false)} onClick={() => setShowListSort(!showListSort)} className="flex relative items-center gap-1 text-primary-3 select-none cursor-pointer hover:text-primary-4">
                    <p className="text-sm">{sort}</p>
                    <Icon icon="teenyicons:down-solid" width={10} />
                    <div className={`absolute top-7 shadow w-fit bg-white transition-all duration-100 ${showListSort ? "visible opacity-100 " : "invisible opacity-0 -translate-y-5"}`}>
                        <ul className="text-xs w-fit h-full border border-stroke">
                            <li onClick={() => setSort(grafik.HARIAN)} className="p-2 hover:bg-gray-200 text-nowrap">{grafik.HARIAN}</li>
                            <li onClick={() => setSort(grafik.MINGGUAN)} className="p-2 hover:bg-gray-200 text-nowrap">{grafik.MINGGUAN}</li>
                            <li onClick={() => setSort(grafik.BULANAN)} className="p-2 hover:bg-gray-200 text-nowrap">{grafik.BULANAN}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <PieChart chartData={grafikPasien} sort={sort} />
        </section>
    )
}
PatientChart.propTypes = {
    data: PropTypes.object.isRequired
}

function PieChart({ chartData, sort }) {
    return (
        <div className="w-[460px] ">
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    layout: {
                        padding: 0
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                font: {
                                    size: sort === grafik.MINGGUAN ? 10 : 12,
                                    family: 'Poppins'
                                },
                                color: '#c2c2c2',
                            }
                        },
                        y: {
                            grid: {
                                display: true,
                                tickColor: '#ffffff'
                            },
                            ticks: {
                                font: {
                                    size: 12,
                                    family: 'Poppins'
                                },
                                color: '#c2c2c2',
                                count: 5,
                            },
                        }
                    }
                }}
            />
        </div>
    );
}

PieChart.propTypes = {
    chartData: PropTypes.object.isRequired,
    sort: PropTypes.string.isRequired
};