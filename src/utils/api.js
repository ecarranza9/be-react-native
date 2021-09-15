const fetch = require('node-fetch');
import { parseCpResponse } from '../helpers/parseCp';

const fetchAddress = async (cp) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cp}/json/`);

        return await parseCpResponse(response.json())
    } catch (error) {
        return `cep ${cep} ${error}`;
    }
};

exports.fetchAddress = fetchAddress;