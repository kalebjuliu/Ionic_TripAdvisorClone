import { IonButton, IonContent, IonPage } from "@ionic/react";
import React, { useRef, useState } from "react"

const Review: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="header"><h1>Review</h1></div>
                <div className="review-card review-img-0" style={{ marginTop: "2rem" }}>
                    <IonButton shape="round" color="dark" expand="block" className="trip-btn">
                        <p className="btn-text-norm">Write a review</p>
                    </IonButton>
                </div>
                <div className="review-card review-img-1" style={{ marginTop: "0.5rem" }}>
                    <IonButton shape="round" color="dark" expand="block" className="trip-btn">
                        <p className="btn-text-norm">Upload a photo</p>
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Review;