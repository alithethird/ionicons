import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons';
import FCC from '../assets/logo.png'

const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister = (event: any) =>{
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='ali@mergen.com'></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label="Password" type='password' placeholder='ali@mergen.com'></IonInput>
                            <IonButton className='ion-margin-top' type='submit' expand='block'>
                            Create my account
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                                </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar> asda</IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Register;