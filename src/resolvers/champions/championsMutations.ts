export const championsMutations = {
  async addChampion(__: void, { champion }: { champion: any }, { dataSources }: { dataSources: any }) {
    try {
      return await dataSources.champions.addChampion(champion)
        .then((data: any) => {
          return data
        })
    } catch (error) {
      console.log(error)
    }
  },

  async editChampion(__: void, { champion }: { champion: any }, { dataSources }: { dataSources: any }) {
    try {
      return await dataSources.champions.editChampion(champion)
        .then((data: any) => {
          return data
        })
    } catch (error) {
      console.log(error)
    }
  },

  async deleteChampion(__: void, { champion }: { champion: any }, { dataSources }: { dataSources: any }) {
    try {
      return await dataSources.champions.deleteChampion(champion)
        .then((data: any) => {
          return data
        })
    } catch (error) {
      console.log(error)
    }
  }
}