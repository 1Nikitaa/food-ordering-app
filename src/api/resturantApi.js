
const dummyResList = 'https://indiarestros.com/api/v1/restaurants';

//https://indiarestros.com/api/docs?utm_source=chatgpt.com API DOC

async function getResList(){
    try {
     let response = await fetch(dummyResList);
        if(!response.ok){
        throw new Error('Error getting data')
        }
        console.log('here at api')
        let data = response.json();
        return data;
     
    }
    catch(error){
        console.error(error)
    }
}
export { getResList }