'use strict';

const inputClientInfo = document.querySelector('.inputClientInfo'),
	[clientName, clinetNum, clientAddr] = inputClientInfo.querySelectorAll('input'),
	submitBtn = inputClientInfo.querySelector('button');

async function addClient() {
	try {
		const clientData = {
			clientName: clientName.value,
			clientNum: clinetNum.value,
			clientAddr: clientAddr.value,
		}

		await axios.post('http://localhost:3000/clientData', clientData);

		location.href = './html/RegistrationClient.html';
	} catch (err) {
		console.log('데이터를 전송중 오류 발생');
		console.log(err.message);
	}
}

submitBtn.addEventListener('click', addClient);