import { Chart } from "chart.js/auto"
import { CategoryScale } from "chart.js"
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2"
import { useEffect, useState } from "react";

Chart.register(CategoryScale);

export default function FrequencyPatient({ data }) {
    const [dataFrekuansi, setDataFrekuansi] = useState({
        labels: data.map((d) => d.x),
        datasets: [
            {
                label: "Pasien",
                data: data.map((d) => d.total),
                fill: true,
                backgroundColor: 'rgba(12, 110, 253, 0.08)',
                borderColor: '#0D6EFD',
                tension: 0.4
            }
        ]
    })
    useEffect(() => {
        setDataFrekuansi({
            labels: data.map((d) => d.x),
            datasets: [
                {
                    label: "Pasien",
                    data: data.map((d) => d.total),
                    fill: true,
                    backgroundColor: 'rgba(12, 110, 253, 0.08)',
                    borderColor: '#0D6EFD',
                    tension: 0.4
                }
            ]
        })
    }, [data])

    return (
        <section className='flex flex-col  gap-4 p-8 w-fit bg-white border border-stroke'>
            <p className="font-medium text-lg">Frekuensi Pasien Per Bulan</p>
            <LineChart data={dataFrekuansi} />
        </section>
    )
}

function LineChart({ data }) {
    return (
        <section className='w-[630px]'>
            <Line
                data={data}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: {
                                font: {
                                    size: 12,
                                    family: 'Poppins'
                                },
                                color: '#c2c2c2',
                                count: 5,
                            },
                            grid: {
                                tickColor: '#ffffff',
                                tickLength: 16,
                            },
                        },
                        x: {
                            grid: {
                                display: false,
                                tickLength: 16,
                            },
                            ticks: {
                                font: {
                                    size: 12,
                                    family: 'Poppins'
                                },
                                color: '#c2c2c2',
                            },

                        }
                    }
                }}
            />
        </section>
    )
}

LineChart.propTypes = {
    data: PropTypes.object.isRequired
}

FrequencyPatient.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}