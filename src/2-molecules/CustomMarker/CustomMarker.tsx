//********** Imports **********//
import { Marker } from "@react-google-maps/api";
import { Props } from "./CustomMarker.types";

//********** Component **********//
const CustomMarker = (props: Props) => {
  const { id, onMarkerRightClick, onMarkerDrop } = props;

  return (
    <Marker
      onRightClick={(e) => {
        onMarkerRightClick(e, id);
      }}
      onDragEnd={(e) => {
        onMarkerDrop(e, id);
      }}
      {...props}
    />
  );
};
CustomMarker.displayName = "CustomMarker";
export default CustomMarker;
