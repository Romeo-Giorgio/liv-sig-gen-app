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
  id: string;
  /** ID of the race. */
  raceId: string;
  /** Latitude of the point. */
  latitude: string;
  /** Longitude of the point. */
  longitude: string;
}

export interface MapUtils {
  /** Allows to draw on map when true. */
  drawMode?: boolean;
  /** Set the drawing mode. */
  setDrawMode: (drawMode: boolean) => void;
  /** Race id of the drawn race. */
  newRaceId?: string;
  /** Set the new race's Id. */
  setNewRaceId: (raceId: string) => void;
  /** Race id of the selected race. */
  selectedRaceId?: string;
  /** Set the selected raceId. */
  setSelectedRaceId: (raceId: string) => void;
}
