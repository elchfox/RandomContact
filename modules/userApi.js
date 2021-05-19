
class userApi {
 /* Get users By limit 50 */

 //get the restaurants data from server
 async getRandomUser() {
    const data = await fetch(`https://randomuser.me/api`)

    const json = await data.json()
    return json.results
  }
 

}

export default new userApi();