//********** Imports **********//
import http from "./http";
import { RacePoint } from "./types";

//********** Service **********//
class RacePointsDataService {
  getAll() {
    const data = http.get<Array<RacePoint>>("./racepoints");
    return http.get<Array<RacePoint>>("./racepoints");
  }

  getAllByRaceId(raceId: string) {
    return http.get<Array<RacePoint>>(`/racepoints/${raceId}`);
  }

  //TODO : get with id is not implement yet on api
  get(id: string) {
    return http.get<RacePoint>(`/racepoints/${id}`);
  }

  create(data: RacePoint) {
    return http.post<RacePoint>("/racepoints", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  delete(id: string) {
    return http.delete<RacePoint>(`/racepoints/${id}`);
  }
}

export default new RacePointsDataService();
