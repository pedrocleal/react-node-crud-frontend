export async function listContacts() {
  try {
    const response = await fetch('http://localhost:3030/contacts');
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    return 1;
  }
}
