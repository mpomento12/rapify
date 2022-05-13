const BASE_URL = 'https://rhymebrain.com/talk?function=getRhymes&maxResults=10&word='

export async function getRhyme(word){
    const res = await fetch(BASE_URL + word)
    return res.json()
}