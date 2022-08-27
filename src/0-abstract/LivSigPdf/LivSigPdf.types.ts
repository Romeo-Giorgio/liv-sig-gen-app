//********** Imports **********//
import { Evenement, Signaler } from "../../services/types";

//********** Props **********//
export interface Props {
  //** Signaler forr the pdf export. */
  signaler: Signaler;
  /** Evenement */
  evenement: Evenement;
  /** List of signalers. */
  signalers: Signaler[];
}
