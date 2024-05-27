import "./App.css";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5002";

export const getData = () => {
	return axios.get(`${API_URL}/api/data`);
};

export const getStatus = () => {
	return axios.get(`${API_URL}/api/status`);
};

function App() {
	const [data, setData] = useState(null);
	const [status, setStatus] = useState(null);

	const handleGetData = async () => {
		try {
			const response = await getData();
			setData(response.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const handleGetStatus = async () => {
		try {
			const response = await getStatus();
			setStatus(response.data);
		} catch (error) {
			console.error("Error fetching status:", error);
		}
	};
	return (
		<>
			<h1>THE SECOND APPLICATION</h1>
			<p>Add paragraph into second app, and now alter it </p>
			<button onClick={handleGetData}>Get Data</button>
			<buton onClick={handleGetStatus}>Get Status</buton>

			<div>
				<h2>Data:</h2>
				<pre>{data && JSON.stringify(data, null, 2)}</pre>
			</div>
			<div>
				<h2>Status:</h2>
				<pre>{status && JSON.stringify(status, null, 2)}</pre>
			</div>
		</>
	);
}

export default App;