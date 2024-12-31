import axios from 'axios';
const API_URL = process.env.NODE_ENV === 'production'
	? 'https://wordwave-api.ethanlaj.dev/game'
	: 'http://localhost:3001/game';

export default class GameService {
	static async getGameDetails(isConnected, details) {
		const endpoint = isConnected ? '' : '/noWallet'

		const { data } = await axios.post(API_URL + endpoint, details)
		return (data)
	}

	static async submitGame(details) {
		const endpoint = details.address ? 'submit' : 'submitNoWallet'

		const { data } = await axios.post(`${API_URL}/${endpoint}`, details)
		return (data)
	}
}