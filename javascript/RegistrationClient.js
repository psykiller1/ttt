'use strict';

const clientInfo = document.querySelector('.clientInfo'),
    clientInput = clientInfo.getElementsByTagName('input');

async function getClient() {
    try {
        const clientData = await axios.get('http://localhost:3000/clientData'),
            clientObj = clientData.data[0];
        let i = 0;

        for (const key in clientObj) {
            if (key !== 'id') {
                clientInput[i++].value = clientObj[key];
            }
        }

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

window.addEventListener('load', getClient);