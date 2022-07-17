//********** Imports **********//

//********** Types **********//
export interface Race {
  /** ID of the race. */
  id: string;
  /** Name of the race. */
  name: string;
  /** Description of the race. */
  description?: string;
}

export interface RacePoint {
  /** ID of the racePoint. */
  id: number;
  /** ID of the race. */
  raceId: string;
  /** Latitude of the point. */
  latitude: string;
  /** Longitude of the point. */
  longitude: string;
}

export interface MapUtils {
  /** Race id of the selected race. */
  selectedRaceId?: string;
  /** Set the selected raceId. */
  setSelectedRaceId: (raceId: string) => void;
}

export type MainMenuMode = "race" | "intersection" | "signaler";

export interface MainMenuUtil {
  /** Current mode selected in menu. */
  mode: MainMenuMode;
  /** Set the current mode. */
  setMode: (mode: MainMenuMode) => void;
}

export interface DeleteRacePayload {
  /** Deleted id in database. */
  deletedId: string;
}
export interface DeleteRacePointPayload {
  /** Deleted id in database. */
  deletedId: string;
}
export interface UpdateRacePointPayload {
  /** Deleted id in database. */
  updatedRacePoint: RacePoint;
}
