import {
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useEffect, useState} from "react";

import {nextToRetiro} from "../hooks/useFerrovias.tsx";


const Tab1: React.FC = () => {
    // @ts-ignore

    const [nextTrainWeekDay, setNextTrainWeekDay] = useState("")
    const [nextTrainSaturday, setNextTrainSaturday] = useState("")
    const [nextTrainSunday, setNextTrainSunday] = useState("")


    useEffect(() => {
        const {weekDay, saturday, sunday} = nextToRetiro();
        setNextTrainWeekDay(weekDay === null ? '-' : weekDay)
        setNextTrainSaturday(saturday === null ? '-' : saturday)
        setNextTrainSunday(sunday === null ? '-' : sunday)
    }, [])

    // @ts-ignore
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>A Retiro</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">A Retiro</IonTitle>
                </IonToolbar>
            </IonHeader>


            <h1 className="ion-text-center">
                Lunes a Viernes
            </h1>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{nextTrainWeekDay}</IonCardTitle>
                    <IonCardSubtitle>M.M. Padilla a Retiro</IonCardSubtitle>
                </IonCardHeader>

                {/*<IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>*/}
            </IonCard>

            <h1 className="ion-text-center">
                Sabados
            </h1>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{nextTrainSaturday}</IonCardTitle>
                    <IonCardSubtitle>M.M. Padilla a Retiro</IonCardSubtitle>
                </IonCardHeader>

                {/*<IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>*/}
            </IonCard>

            <h1 className="ion-text-center">
                Domingos y feriados
            </h1>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{nextTrainSunday}</IonCardTitle>
                    <IonCardSubtitle>M.M. Padilla a Retiro</IonCardSubtitle>
                </IonCardHeader>

                {/*<IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>*/}
            </IonCard>


        </IonContent>
    </IonPage>
    );
};

export default Tab1;
