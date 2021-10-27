import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonPage } from "@ionic/react";
import { searchOutline, text } from "ionicons/icons";
import React, { useRef, useState } from "react"

const Search: React.FC = () => {

    const [text, setText] = useState<string>();

    return (
        <IonPage>
            <IonContent>
                <div className="header"><h1>Search</h1></div>

                <IonItem className="search-input">
                    <IonIcon icon={searchOutline} style={{ fontSize: "25px" }} slot="start" />
                    <IonInput value={text} placeholder="Where to" onIonChange={e => setText(e.detail.value!)}></IonInput>
                </IonItem>

                <div className="location-settings">
                    <div className="location-settings-content">
                        <h1>See whats good <br /> nearby.</h1>
                        <IonButton shape="round" fill="outline" className="location-btn">
                            <p className="btn-text-norm">Turn on location settings</p>
                        </IonButton>
                    </div>
                </div>

                <div className="destination">
                    <h1 className="dest-title">Destinations travelers love</h1>
                    <div className="dest-div-0">
                        <div className="destination-content">
                            <div className="card-destination dest-0"><h1>New York</h1></div>
                        </div>
                        <div className="destination-content">
                            <div className="card-destination dest-1"><h1>Tokyo</h1></div>
                        </div>
                    </div>
                    <div className="dest-div-1">
                        <div className="destination-content">
                            <div className="card-destination dest-2"><h1>Singapore</h1></div>
                        </div>
                        <div className="destination-content">
                            <div className="card-destination dest-3"><h1>India</h1></div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Search;