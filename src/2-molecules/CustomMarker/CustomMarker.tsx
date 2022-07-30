//********** Imports **********//
import { Marker } from "@react-google-maps/api";
import { markerByType, Props } from "./CustomMarker.types";

//********** Component **********//
const CustomMarker = (props: Props) => {
  const { id, onMarkerRightClick, onMarkerDrop, markerType } = props;

  return (
    <Marker
      //icon={markerByType[markerType]}
      onRightClick={(e) => {
        if (onMarkerRightClick) onMarkerRightClick(e, id);
      }}
      onDragEnd={(e) => {
        if (onMarkerDrop) onMarkerDrop(e, id);
      }}
      {...props}
    />
  );
};
CustomMarker.displayName = "CustomMarker";
export default CustomMarker;
