import React from "react";
import { IonPage, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { search } from "ionicons/icons";

const Search = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
};

export default Search;