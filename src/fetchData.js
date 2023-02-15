export async function fetchData() {
  const URL = import.meta.env.VITE_DATABASE_URL
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error("The response is not Ok")
    }
    const data = await response.json()
    return data
  } catch (e) {
    console.error("Error", e)
  }
}
