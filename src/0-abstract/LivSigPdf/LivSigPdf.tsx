//********** Imports **********//
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Props } from "./LivSigPdf.types";
import { useSelector } from "../../store";
import { signalerAdapter } from "../../slices/signalerSlice";

//********** Styles **********//
const styles = StyleSheet.create({});

//********** Component **********//
const LivSigPdf = (props: Props) => {
  const { evenement, signaler, signalers } = props;
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>LIVRET SIGNALEUR DU SOUFFLE</Text>

          <Text>{`NOM: ${signaler.lastName.toLocaleUpperCase()}`}</Text>
          <Text>{`Prénom: ${signaler.firstName}`}</Text>
          <Text>{`Localisation: ${signaler.localisation}`}</Text>
          <Text>{evenement.eventLabel}</Text>
          <Text>{evenement.dateLabel}</Text>
        </View>
      </Page>
      <Page size="A4">
        <View>
          <Text>PERRSONNE A CONTACTER EN CAS DE PROBLEME</Text>
          <Text>{evenement.issueLabel}</Text>

          {signaler.previousSignaler != null && (
            <Text>{`Signaleur précédent: ${signalers.find(
              (signaler) => signaler.id === signaler.previousSignaler
            )}`}</Text>
          )}
          {signaler.nextSignaler != null && (
            <Text>{`Signaleur suivant: ${signalers.find(
              (signaler) => signaler.id === signaler.nextSignaler
            )}`}</Text>
          )}
          {signaler.referent != null && (
            <Text>{`Signaleur référent: ${signalers.find(
              (signaler) => signaler.id === signaler.referent
            )}`}</Text>
          )}

          <Text>Vélo ouvreur / vélo balais course</Text>
          <Text>{evenement.bikeLabel}</Text>
        </View>
      </Page>
    </Document>
  );
};

LivSigPdf.displayNaame = "LivSigPdf";
export default LivSigPdf;
