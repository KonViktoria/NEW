import axios from 'axios'

const API_KEY =process.env.API_KEY

export class GetImages{
  constructor(){
    this.page= 1,
    this.name = ''

  }
  async getInfo(){
    // const searchParams= new URLSearchParams({
    //   key: API_KEY
    
    // })
  
    const { data } = await axios.get('https://api.unsplash.com/search/photos', 
   {
    params: {
      client_id: API_KEY,
      query: this.name,
      page: this.page,
      per_page: 12,
    },
  }
  );
    return data
  
}
pageIncrement(){
  this.page+=1
}

pageStartPosition(){
  this.page = 1 
}
searchName(value){
this.name = value
}


}

