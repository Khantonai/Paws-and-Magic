const arr = {"array": ["example", 5, 10]}

async function getResult(arr) {
  const url = "http://localhost:3000/modify-array";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    //Je stocke les données dans la variable players
    arr = json.values();
  } catch (error) {
    console.error(error);
  }
}