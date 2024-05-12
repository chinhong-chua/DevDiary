const BASE_URL = "http://localhost:5154/api/";

export async function fetchAPI(endpoint, method, data = null) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  };

  const config = {
    method: method,
    headers: headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`${response.status} - ${response.statusText}\n${errorData}`);
    }
    return response.json(); // Assuming server always returns JSON. Adjust if not.
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Optionally re-throw to let callers handle specifically.
  }
}
