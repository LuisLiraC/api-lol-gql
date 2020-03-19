import { LOL } from "./data-source";

export class ChampionsAPI extends LOL {
  constructor() {
    super()
  }

  async getChampions(role: String, region: String, limit: Number) {
    try {
      let endpoint = 'champions?'
      if (role) endpoint += `role=${role}&`
      if (region) endpoint += `region=${region}&`
      if (limit) endpoint += `limit=${limit}`
  
      return await this.get(endpoint)
    } catch (error) {
      console.log(error)
    }
  }

  async getChampion(name: String) {
    try {
      return await this.get(`champions/${name}`)
    } catch (error) {
      console.log(error)
    }
  }

  async addChampion(champion: any) {
    try {
      return await this.simulateAction(champion)
    } catch (error) {
      console.log(error)
    }
  }

  async editChampion(champion: any) {
    try {
      return await this.simulateAction(champion)
    } catch (error) {
      console.log(error)
    }
  }

  async deleteChampion(champion: any) {
    try {
      return await this.simulateAction(champion)
    } catch (error) {
      console.log(error)
    }
  }

  simulateAction(champion: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(champion)
      }, 500)
    })
  }
}