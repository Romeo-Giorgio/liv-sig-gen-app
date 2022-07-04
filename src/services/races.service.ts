import http from "./http";
import { Race } from "../3-organisms/RaceInput/RaceInput.types";
import { DeleteRacePayload } from "./types";

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
}

export default new RacesDataService();
