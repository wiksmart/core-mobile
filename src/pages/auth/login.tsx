import React from 'react'
import { IonContent, IonPage } from '@ionic/react'

type Props = {}

function Login({ }: Props) {
    return (
        <IonPage>
            <IonContent fullscreen>
                <h1 className='font-bold'>Login</h1>
            </IonContent>
        </IonPage>
    )
}

export default Login