//********** Imports **********//
import Card, {CardProps} from "@mui/material/Card";
import CardContent, {CardContentProps} from "@mui/material/CardContent";
import { alpha, styled } from "@mui/material/styles";

//********** Styles **********//
export const StyledCard = styled(Card)<CardProps>(({theme})=>({
  background: "none",
  borderRadius: theme.shape.borderRadius,
  position: "absolute",
  top: 0,
  left: "calc(50% - 75px)",
  boxShadow:"none",
}));
export const StyledCardContent = styled(CardContent)<CardContentProps>(({theme})=>({
  padding: theme.spacing(1),
}));