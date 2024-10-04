const API_URL = 'http://10.26.128.152:3000/api'; // Remplace par ton IP locale
// Remplacez par votre URL d'API

export const fetchData = async (endpoint: string, method: string = 'GET', body?: any) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'appel API :', error);
    throw error;
  }
};
