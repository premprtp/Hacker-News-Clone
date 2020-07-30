import React from "react";
import { IonHeader, IonButtons, IonBackButton, IonTitle, IonToolbar, } from "@ionic/react";


const NavHeader = ({title}) => {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default NavHeader;