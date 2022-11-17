class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList () {
    return this.BASE_URL.get("/characters");
  }

  getOneRegister = (characterId) => {
    return this.BASE_URL.get(`/characters/${characterId}`);
  }

  createOneRegister = (characterInfo) => {
    return this.BASE_URL.post("/characters", characterInfo);
  }

  updateOneRegister = (characterId, characterInfo) => {
    return this.BASE_URL.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister = (characterId) => {
    return this.BASE_URL.delete(`/characters/${characterId}`);
  }
}

