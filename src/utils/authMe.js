import axios from "axios";

export default function authMe() {
    const token = localStorage.getItem("token");

    let config = {
        method: 'get',
        url: '/protected',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    axios.request(config)
        .then((response) => {
            if (response.data.status === 200) {
                // const userEncrypted = token.split(".")[1];
                // console.log("user terautorisasi: ", JSON.parse(atob(userEncrypted)));
                const user = JSON.parse(atob(localStorage.getItem("user")));
                console.log("user terautorisasi: ", user);
            }
        })
        .catch((error) => {
            console.log(error);
        });


}