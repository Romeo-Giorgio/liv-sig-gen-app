//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Callback fired when Tracks button button is clicked. */
  onTracksButtonClick?: () => void;
  /** Callback fired when Intersections button is clicked. */
  onIntersectionsButtonClick?: () => void;
  /** Callback fired when Signalers button is clicked. */
  onSignalersButtonClick?: () => void;
};
