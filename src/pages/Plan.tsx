import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSegment, IonSegmentButton } from "@ionic/react";
import { heart, heartCircleOutline, heartOutline, navigateCircleOutline, newspaperOutline, personAddOutline } from "ionicons/icons";
import React, { useRef, useState } from "react"

const Plan: React.FC = () => {
    const [segValue, setSegValue] = useState<'trips' | 'savings' | 'bookings'>('trips')

    const inputChangeHandler = (event: CustomEvent) => {
        setSegValue(event.detail.value)
    }

    return (
        <IonPage>
            <IonContent>
                <div className="header"><h1>Plan</h1></div>
                <div className="segment">
                    <IonSegment value={segValue} onIonChange={inputChangeHandler} color="dark">
                        <IonSegmentButton value="trips">
                            <IonLabel style={{ textTransform: "capitalize" }}>Trips</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="savings">
                            <IonLabel style={{ textTransform: "capitalize" }}>Savings</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="bookings">
                            <IonLabel style={{ textTransform: "capitalize" }}>Bookings</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </div>

                {segValue == 'trips' && <div className="trips">
                    <div className="trips-list">
                        <IonItem lines="none">
                            <IonIcon icon={heart} className="trips-icon"></IonIcon>
                            <p className="trips-text">Save places you'd like to visit</p>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon icon={navigateCircleOutline} className="trips-icon"></IonIcon>
                            <p className="trips-text">See your saves on a map</p>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon icon={newspaperOutline} className="trips-icon"></IonIcon>
                            <p className="trips-text">Keep track of notes, links, and more</p>
                        </IonItem>
                        <IonItem lines="none">
                            <IonIcon icon={personAddOutline} className="trips-icon"></IonIcon>
                            <p className="trips-text">Share and collaborate on your plans</p>
                        </IonItem>
                    </div>
                    <p className="trip-label">Trip name</p>
                    <IonItem className="trips-input">
                        <IonInput placeholder="Ex: Weekend in NYC"></IonInput>
                    </IonItem>
                    <IonButton shape="round" color="dark" expand="block" className="trip-btn" size="large">
                        <p className="btn-text-norm">Create a trip</p>
                    </IonButton>
                </div>}
                {segValue == 'savings' && <div className="savings">
                    <div className="savings ion-text-center">
                        <p><span style={{ fontWeight: "bold" }}>No saves yet</span><br /> Places you save will appear here.</p>
                    </div>
                </div>}
                {segValue == 'bookings' && <div className="bookings">
                    <IonButton shape="round" color="dark" expand="block" className="trip-btn" size="large" style={{ marginTop: "1.5em" }}>
                        <p className="btn-text-norm">View my bookings</p>
                    </IonButton>
                </div>}
            </IonContent>
        </IonPage>
    );
};

export default Plan;