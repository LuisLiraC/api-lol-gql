export const championsQueries = {
  async championsList(_: void, { role, region , limit}: any, { dataSources }: { dataSources: any }) {
    try {      
      return await dataSources.champions.getChampions(role, region, limit)
        .then((data: any) => data)
    } catch (error) {
      console.log(error)
    }
  },

  async championByName(_: void, { name }: { name: String }, { dataSources }: { dataSources: any }) {
    try {
      return await dataSources.champions.getChampion(name)
        .then((data: any) => {
          if (Object.keys(data).length === 0) {
            return {
              name: "Champions does not exists"
            }
          }
          return data
        })
    } catch (error) {
      console.log(error)
    }
  }
}