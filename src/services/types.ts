//********** Types **********//
export interface Race {
  /** ID of the race. */
  id: string;
  /** Name of the race. */
  name: string;
  /** Description of the race. */
  description?: string;
  /** Color of the race. */
  color: string;
}

export interface RacePoint {
  /** ID of the racePoint. */
  id: number;
  /** ID of the race. */
  raceId: string;
  /** Latitude of the point. */
  latitude: number;
  /** Longitude of the point. */
  longitude: number;
}

export interface Signaler {
  /** Id of the signaler. */
  id: string;
  /** Signaler's referent. */
  referent?: string;
  /** Signaler's previous signaler. */
  previousSignaler?: string;
  /** Signaler's next signaler. */
  nextSignaler?: string;
  /** Signaler's lat name. */
  lastName: string;
  /** Signaler's first name. */
  firstName: string;
  /** Signaler's phone number. */
  phone: string;
  /** Signaler's mail adress. */
  mail: string;
  /** Signaler have driving licence ? */
  drivingLicence: boolean;
  /** Latitude of the signaler. */
  latitude?: number;
  /** Longitude of the signaler. */
  longitude?: number;
  /** Localisation of the signaler. */
  localisation: string;
}

export interface Evenement {
  id: number;
  eventLabel: string;
  dateLabel: string;
  bikeLabel: string;
  issueLabel: string;
}

export interface MapUtils {
  /** Selected race. */
  selectedRace?: Race;
  /** Set the selected race. */
  setSelectedRace: (race: Race | undefined) => void;
  /** Selected signaler. */
  selectedSignaler?: Signaler;
  /** Set the selected signaler. */
  setSelectedSignaler: (signaler?: Signaler) => void;
  /** Selected racePoint. */
  selectedRacePoint?: number;
  /** Set the selected race point. */
  setSelectedRacePoint: (racePoint?: number) => void;
}

export type MainMenuMode = "race" | "intersection" | "signaler" | "export";

export interface MainMenuUtils {
  /** Current mode selected in menu. */
  mode: MainMenuMode;
  /** Set the current mode. */
  setMode: (mode: MainMenuMode) => void;
}

export interface DeleteRacePayload {
  /** Deleted id in database. */
  deletedId: string;
}
export interface UpdateRacePayload {
  /** Updated element in database. */
  updatedRace: Race;
}
export interface DeleteRacePointPayload {
  /** Deleted id in database. */
  deletedId: string;
}
export interface UpdateRacePointPayload {
  /** Updated element in database. */
  updatedRacePoint: RacePoint;
}
export interface DeleteSignalerPayload {
  /** Deleted id in database. */
  deletedId: string;
}
export interface UpdateSignalerPayload {
  /** Updated element in database. */
  updatedSignaler: Signaler;
}
export interface UpdateEvenementPayload {
  /** Updated element in database. */
  updatedEvenement: Evenement;
}
