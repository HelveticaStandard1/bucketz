import {Button} from "react-native";
import React from "react";
import {Auth} from 'aws-amplify'

const AuthSignOut = () => {
    async function signOut() {
        try {
            await Auth.signOut()
        } catch (error) {
            console.log("Error signing out: ", error)
        }
    }

    return (
        <Button title="Sign Out" onPress={signOut}/>
    )
}

export default AuthSignOut