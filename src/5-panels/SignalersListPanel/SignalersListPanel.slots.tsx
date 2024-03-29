//********** Imports **********//
import Card, { CardProps } from "@mui/material/Card";
import CardContent, { CardContentProps } from "@mui/material/CardContent";
import { alpha, styled } from "@mui/material/styles";

//********** Styles **********//
export const StyledListCard = styled(Card)<CardProps>(({ theme }) => ({
  background: `${alpha(theme.palette.background.default, 0.95)}`,
  backdropFilter: "blur(30px)",
  borderRadius: theme.shape.borderRadius,
  position: "absolute",
  top: "20vh",
  bottom: "20vh",
  right: 8,
  boxShadow: "none",
}));

export const StyledInputCard = styled(Card)<CardProps>(({ theme }) => ({
  background: `${alpha(theme.palette.background.default, 0.95)}`,
  backdropFilter: "blur(30px)",
  borderRadius: theme.shape.borderRadius,
  position: "absolute",
  bottom: 10,
  left: "calc(50% - 303px)",
  boxShadow: "none",
}));

export const StyledCardContent = styled(CardContent)<CardContentProps>(
  ({ theme }) => ({
    padding: theme.spacing(1),
  })
);
