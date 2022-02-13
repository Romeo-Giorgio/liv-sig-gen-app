//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Callback fired when Races button button is clicked. */
  onRacesButtonClick?: () => void;
  /** Callback fired when Intersections button is clicked. */
  onIntersectionsButtonClick?: () => void;
  /** Callback fired when Signalers button is clicked. */
  onSignalersButtonClick?: () => void;
};
