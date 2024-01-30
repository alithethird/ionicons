import { IonButton,useIonRouter, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons';
import FCC from '../assets/fcc.svg'
import Intro from '../components/Intro';
const Login: React.FC = () => {
    const [introSeen, setIntroSeen] = useState(false);
    const router = useIonRouter();
    const doLogin = (event: any) =>{
    event.preventDefault();
    console.log('doLogin');
    // router.push('/home', 'root');
}
const finishIntro = async() =>{
    console.log('FIN');
    setIntroSeen(true);
}
    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishIntro} />
        ) :(
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='ion-text-center ion-padding'>
                <img src={FCC} alt='FCC logo' width={'50%'} />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='ali@mergen.com'></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label="Password" type='password' placeholder='ali@mergen.com'></IonInput>
                            <IonButton className='ion-margin-top' type='submit' expand='block'>
                                Login
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                                </IonButton>
                            <IonButton className='ion-margin-top' routerLink='/register' color={'secondary'} type='button' expand='block'>
                                Create Account
                                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                                </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar> asda</IonToolbar>
            </IonFooter>
        </IonPage>)}
        </>
    );
};

export default Login;