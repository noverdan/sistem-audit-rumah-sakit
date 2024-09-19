import { useEffect, useState } from "react";
import PageHeader from "../../components/layout/PageHeader";
import InputPasien from "../../components/layout/perawat/InputPasien";
import Button from "../../components/common/Button";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import PropTypes from "prop-types";

export default function DataPasien() {
    const [isInputPasien, setIsInputPasien] = useState(false)
    const [dataPasien, setDataPasien] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchPasien = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get("https://66e435f0d2405277ed1384e0.mockapi.io/api/pasien");
                setDataPasien(response.data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchPasien()
    }, [])


    return (
        <main className="w-full bg-gray-100 min-w-[720px]">
            <PageHeader title="Data Pasien" />
            {
                !isInputPasien && (
                    <div className="m-8 flex flex-col gap-8">
                        <Button leading={<Icon icon="ic:baseline-plus" width={16} />} text={"Input Data Pasien"} onClick={() => setIsInputPasien(!isInputPasien)}>Klik</Button>
                        <ListPasien data={dataPasien} isLoading={isLoading} />
                    </div>
                )
            }
            {
                isInputPasien && (
                    <InputPasien back={(is) => setIsInputPasien(is)} />
                )
            }
        </main>
    )
}

function ListPasien({ data, isLoading }) {
    console.log(data);
    return (
        <div >
            <table className="bg-white w-full text-sm table-auto p-14">
                <thead className="border-b border-gray-300 text-left">
                    <tr className="h-11">
                        <th className="font-medium p-3">No. Rekam Medis</th>
                        <th className="font-medium p-3">Nama Pasien</th>
                        <th className="font-medium p-3">Kategori</th>
                        <th className="font-medium p-3">Tipe Kamar</th>
                        <th className="font-medium p-3">Status Pasien</th>
                        <th className="font-medium p-3">Aksi</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        isLoading && (
                            <tr>
                                <td colSpan="6" className="text-center p-8">Loading...</td>
                            </tr>
                        )
                    }
                    {
                        data?.map((pasien, index) => (
                            <tr key={index} className="hover:bg-gray-200">
                                <td className="p-3 text-gray-500">{pasien.noRekamMedis}</td>
                                <td className="p-3">{pasien.namaPasien}</td>
                                <td className="p-3 text-gray-500">{pasien.kategori}</td>
                                <td className="p-3 text-gray-500">{pasien.tipeKamar}</td>
                                <td className="p-3 text-gray-500">{pasien.statusPasien}</td>
                                <td className="p-3 flex gap-2 items-center w-16">
                                    <button className="btn-edit-pasien bg-green-500 text-white p-1 rounded-sm hover:bg-opacity-70">
                                        <Icon icon="tabler:edit" />
                                        <Tooltip
                                            id="tooltip-styles"
                                            anchorSelect={".btn-edit-pasien"}
                                            content={"Edit Pasien"}
                                            place="top"
                                            delayShow={200}
                                        />
                                    </button>
                                    <button className="btn-delete-pasien bg-warning text-white p-1 rounded-sm hover:bg-opacity-70">
                                        <Icon icon="ant-design:delete-outlined" />
                                        <Tooltip
                                            id="tooltip-styles"
                                            anchorSelect={".btn-delete-pasien"}
                                            content={"Delete Pasien"}
                                            place="top"
                                            delayShow={200}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
ListPasien.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}