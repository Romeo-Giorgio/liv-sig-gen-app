//********** Imports **********//
import http from "./http";
import {
  DeleteSignalerPayload,
  Signaler,
  UpdateSignalerPayload,
} from "./types";

//********** Service **********//
class SignalersDataService {
  getAll() {
    return http.get<Array<Signaler>>("./signalers");
  }

  getAllBySignalerId(raceId: string) {
    return http.get<Array<Signaler>>(`/signalers/${raceId}`);
  }

  get(id: string) {
    return http.get<Signaler>(`/signalers/${id}`);
  }

  create(data: Signaler) {
    return http.post<Signaler>("/signalers", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  delete(id: string) {
    return http.delete<DeleteSignalerPayload>(`/signalers/${id}`);
  }
  updateSignaler(data: Signaler) {
    return http.put<UpdateSignalerPayload>(`/signalers/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default new SignalersDataService();
