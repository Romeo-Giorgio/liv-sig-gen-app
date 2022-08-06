import http from "./http";
import { DeleteRacePayload, Race, UpdateRacePayload } from "./types";

class RacesDataService {
  getAll() {
    return http.get<Array<Race>>("./races");
  }

  //TODO : get with id is not implement yet on api
  get(id: string) {
    return http.get<Race>(`/races/${id}`);
  }

  create(data: Race) {
    return http.post<Race>("/races", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  delete(id: string) {
    return http.delete<DeleteRacePayload>(`/races/${id}`);
  }
  updateRace(data: Race) {
    return http.put<UpdateRacePayload>(`/races/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default new RacesDataService();
