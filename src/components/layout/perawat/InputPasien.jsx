import { useState } from "react";
import Dropdown from "../../common/dropdown";
import Button from "../../common/Button";
import toast from "react-hot-toast";
import axios from "axios";

export default function InputPasien() {
    const statusOptions = ["Pasien Baru", "Pasien Lama", "Pasien Darurat"];
    const roomOptions = ["Kamar VIP", "Kamar Kelas 1", "Kamar Kelas 2", "Kamar Kelas 3"];

    const [Medis, setMedis] = useState("");
    const [Pasien, setPasien] = useState("");
    const [kategoriPasien, setKategoriPasien] = useState("");
    const [pilihKamar, setPilihKamar] = useState("");
    const [statusPasien, setStatusPasien] = useState("");

    const submitDataPasien = async (e) => {
        e.preventDefault();

        if (!Medis || !Pasien || !kategoriPasien || !pilihKamar || !statusPasien) {
            toast.error("Mohon isi Semua field")
            return;
        }

        console.log({
            medis: Medis,
            pasien: Pasien,
            kategoriPasien,
            pilihKamar,
            statusPasien
        });

        try {
            const response = await axios.post('https://api.example.com/submit', {
                medis: Medis,
                pasien: Pasien,
                kategoriPasien,
                pilihKamar,
                statusPasien
            });
            console.log("Response dari server:", response.data);
            toast.success("Data Berhasil diSimpan");
        } catch (error) {
            console.error("Error saat mengirim data:", error);
            toast.error("Data gagal di Simpan");
        }

     
    };

    return (
        <div>
            <h1 className="text-left ml-64 mt-10 text-2xl font-sans font-semibold ">Input Data Pasien</h1>
            <form className="flex flex-col gap-8 mt-7 w-[627px] " onSubmit={submitDataPasien}>

                <div className="flex flex-col font-sans font-medium w-[627px] gap-8  items-end">
                    <div className="flex gap-5 items-center">
                        <label className="font-sans text-base">No. Rekam Medis: </label>
                        <input
                            type="text"
                            className="w-96 h-14 rounded-md shadow-md p-5"
                            value={Medis}
                            onChange={(e) => setMedis(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <label className="font-sans text-base">Nama Pasien: </label>
                        <input
                            type="text"
                            className="w-96 h-14 rounded-md shadow-md p-5"
                            value={Pasien}
                            onChange={(e) => setPasien(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex gap-5 font-sans font-medium w-[598px] justify-items-end justify-end items-end">
                    <label className="font-sans text-base">Kategori Pasien: </label>
                    <div>
                        <label className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name="kategori"
                                value="Sesuai Prosedur"
                                onChange={(e) => setKategoriPasien(e.target.value)}
                            />
                            <span>Sesuai Prosedur</span>
                        </label>
                    </div>
                    <div>
                        <label className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name="kategori"
                                value="Tidak Sesuai Prosedur"
                                onChange={(e) => setKategoriPasien(e.target.value)}
                            />
                            <span>Tidak Sesuai Prosedur</span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-8 w-[450px] items-end">
                    <div className="flex gap-5 items-center font-sans font-medium space-x-1">
                        <label>Tipe Kamar: </label>
                        <Dropdown
                            span={'Pilih Kamar'}
                            placeholder="Pilih Kamar"
                            options={roomOptions}
                            className="w-52 h-16 px-4"
                            value={pilihKamar}
                            onChange={(e) => setPilihKamar(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-5 items-center font-sans font-medium space-x-1">
                        <label>Status Pasien: </label>
                        <Dropdown
                            span={'Status Pasien'}
                            placeholder="Status Pasien"
                            options={statusOptions}
                            className="w-52 h-16 px-4"
                            value={statusPasien}
                            onChange={(e) => setStatusPasien(e.target.value)}
                        />
                    </div>
                </div>

                <div className=" flex flex-col  w-[450px] items-end mb-14">
                    <Button
                        text={'Simpan Data Pasien'}
                        size={'large'}
                        type="submit"
                        
                    />
                </div>

            </form>
        </div>
    );
}
