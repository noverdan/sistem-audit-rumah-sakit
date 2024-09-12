// import { useState } from "react";
import Button from "./components/common/Button";
import { Icon } from '@iconify/react';

function App() {
    return (
        <div className="m-10">
            <h1 className="text-warn" >Sistem Audit Rumah Sakit</h1>
            <Button
                text="Input Data Pasien"
                size="large"
                onClick={() => console.log("Klik")}
                leading={<Icon icon="ic:outline-plus" />}
                id="btn1"
                tooltip={"Menambahkan data pasien"}
            />
        </div>
    );
}

export default App;
