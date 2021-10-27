import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from "@ionic/react";
import { bedOutline, chatbubbleOutline, personCircleOutline, restaurantOutline, ticketOutline } from "ionicons/icons";
import React, { useRef, useState } from "react"

const Explore: React.FC = () => {

    const slideOpts = {
        pagination: false,
        initialSlide: 0,
        slidesPerView: 2.5
    };
    const slideOptsImg = {
        pagination: false,
        initialSlide: 0,
        slidesPerView: 1.5
    };

    return (
        <IonPage>
            <IonContent>
                <div className="header explore-header">
                    <h1>Explore</h1>
                    <IonIcon icon={personCircleOutline} style={{ fontSize: "25px" }} />
                </div>
                <div className="banner">
                    <IonSlides pager={true} options={slideOpts} className="slides">
                        <IonSlide>
                            <IonButton shape="round" className="card-btn">
                                <IonIcon slot="start" icon={bedOutline} className="slide-icon" />
                                <p className="btn-text">Hotels</p>
                            </IonButton>
                        </IonSlide>
                        <IonSlide className="slide">
                            <IonButton shape="round" className="card-btn">
                                <IonIcon slot="start" icon={ticketOutline} />
                                <p className="btn-text">Things to do</p>
                            </IonButton>
                        </IonSlide>
                        <IonSlide>
                            <IonButton shape="round" className="card-btn">
                                <IonIcon slot="start" icon={restaurantOutline} />
                                <p className="btn-text">Restaurant</p>
                            </IonButton>
                        </IonSlide>
                        <IonSlide>
                            <IonButton shape="round" className="card-btn">
                                <IonIcon slot="start" icon={chatbubbleOutline} />
                                <p className="btn-text">Forum</p>
                            </IonButton>
                        </IonSlide>
                    </IonSlides>
                    <div className="main-bg">
                        <img src="https://i.ibb.co/sHmVG8q/banner.png" alt="" style={{ visibility: "hidden" }} />
                    </div>
                </div>

                <div className="bg-image image-0">
                    <div className="content">
                        <h1>Goodbye to <br /> crushing heat and <br /> crushing crowds</h1>
                        <p>Why fall is the best time to visit our national parks</p>
                        <IonButton shape="round" color="light">
                            <p className="btn-text-norm">Get the intel</p>
                        </IonButton>
                    </div>
                </div>

                <div className="card-slider-section">
                    <div className="card-slider-section-content">
                        <h1>Small batch stays <br /><span>Cool cities, cooler boutique hotels</span></h1>
                    </div>
                    <IonSlides pager={true} options={slideOptsImg} className="card-slider">
                        <IonSlide>
                            <div className="card-city city-0"><h1>Austin</h1></div>
                        </IonSlide>
                        <IonSlide>
                            <div className="card-city city-1"><h1>Nashville</h1></div>
                        </IonSlide>
                        <IonSlide>
                            <div className="card-city city-2"><h1>New York City</h1></div>
                        </IonSlide>
                        <IonSlide>
                            <div className="card-city city-3"><h1>Washington DC</h1></div>
                        </IonSlide>
                    </IonSlides>
                </div>


                <div className="card-slider-section">
                    <div className="card-slider-section-content">
                        <h1>Plan your next escape <br /><span>Family-friendly spots to explore</span></h1>
                    </div>
                    <IonSlides pager={true} options={slideOptsImg} className="card-slider">
                        <IonSlide>
                            <div className="card-city city-4"><h1>Charleston</h1></div>
                        </IonSlide>
                        <IonSlide>
                            <div className="card-city city-5"><h1>Gotlinburg</h1></div>
                        </IonSlide>
                        <IonSlide>
                            <div className="card-city city-6"><h1>Dallas</h1></div>
                        </IonSlide>
                        <IonSlide>
                            <div className="card-city city-7"><h1>Sedona</h1></div>
                        </IonSlide>
                    </IonSlides>
                </div>


                <div className="bg-image image-1">
                    <div className="content">
                        <h1>Explore Las Vegas <br /> fork first</h1>
                        <p>Our guide to top celebrity chef restaurant in Vegas</p>
                        <IonButton shape="round" color="light">
                            <p className="btn-text-norm">Check them out</p>
                        </IonButton>
                    </div>
                </div>

                <div className="bg-image image-2">
                    <div className="content">
                        <h1>Pack that<br /> weekender bag</h1>
                        <p>Our guide to last minute road trips you can do right now</p>
                        <IonButton shape="round" color="light">
                            <p className="btn-text-norm">Read the guide</p>
                        </IonButton>
                    </div>
                </div>

                <div className="bg-image image-3">
                    <div className="content">
                        <h1>Shake off the <br />post-summer blues</h1>
                        <p>Here are all the reasons we're excited for fall in Tokyo</p>
                        <IonButton shape="round" color="light">
                            <p className="btn-text-norm">Read the guide</p>
                        </IonButton>
                    </div>
                </div>





            </IonContent>
        </IonPage>
    );
};

export default Explore;