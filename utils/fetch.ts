import axios from "axios"

export async function fetchProducts() {
    const { data } = await axios.get('/api/product')
    return data
}