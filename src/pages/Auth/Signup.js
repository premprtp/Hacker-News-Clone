import React from "react";
import NavHeader from "../../components/Header/NavHeader";
import { IonContent, IonItem, IonLabel, IonInput, IonRow, IonButton, IonCol, IonPage } from "@ionic/react";


const Signup = () => {
    return (
        <IonPage>
            <NavHeader title="Sign up" />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput name="name" type="text" required></IonInput>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="text" required></IonInput>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput name="password" type="password" required></IonInput>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton
                        type="submit"
                        color="primary"
                        expand="block"
                        >
                            Sign up
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};


export default Signup;