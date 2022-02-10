//********** Types **********//
export interface Signaler  {
  /** ID of the signaler. */
  id:string;
  /** LastName of the signaler. */
  lastName:string;
  /** FirstName of the signaler. */
  firstName:string;
  /** Phone of the signaler.*/
  phone:string;
  /** Mail of the signaler. */
  mail:string;
  /** Referrer of the signaler. */
  referrer?:string;
}
//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current signaler. */
  signaler?:Signaler;
  /** Signalers list */
  signalersList?:Signaler[];
  /** Callback fired when one of the current signaler properties is changed. */
  onSignalerChange: (value?: Signaler) => void;
  /** Callback fired when one of the current signaler properties is fully changed and the user leave one of the fields. */
  onSignalerBlur: (value?: Signaler) => void;
  };
  
