import http from "./http";
import { Evenement, UpdateEvenementPayload } from "./types";

class EvenementDataService {
  get() {
    return http.get<Evenement>("./evenement");
  }

  updateEvenement(data: Evenement) {
    return http.put<UpdateEvenementPayload>(`/evenement/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default new EvenementDataService();
