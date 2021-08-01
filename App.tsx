import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native'

import Amplify, {API, Auth, graphqlOperation} from 'aws-amplify'
import config from './aws-exports'
import {authConfig} from "./src/config/auth/auth.config";
import AuthSignOut from "./src/components/auth/authSignOut";
import {getAccount, getUser, listBuckets} from "./src/graphql/queries";
import {BucketCard} from "./src/components/bucket/bucket-card";
import authService from "./src/services/auth/auth.service";
import {createAccount} from "./src/graphql/mutations";

Amplify.configure(config)

const initialAccountFormState = {title: '', totalValue: ''}

const App = () => {
    const [accountFormState, setAccountFormState] = useState(initialAccountFormState)
    const [buckets, setBuckets] = useState([])
    const [account, setAccount] = useState();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser()
        // fetchBuckets()
    }, []);

    async function fetchUser() {
        try {
            const userData = await API.graphql(graphqlOperation(getUser,{userId: await authService.getCurrentUserId()}))
            console.log(`User Data: ${userData}`)
            const user = userData.data.getUser.items[0]
            console.log(`User: ${user}`)
            setUser(user)
        } catch (error) {
            console.log("Failed to get user data. \n", error)
            setUser(null)
        }
    }

    // async function fetchBuckets() {
    //     try {
    //         const bucketData = await API.graphql(graphqlOperation(getAccount))
    //         const buckets = bucketData.data.listBuckets.items
    //         setBuckets(buckets)
    //     } catch (err) {
    //         console.log('error fetching todos')
    //     }
    // }

    // async function addAccount() {
    //     try {
    //         const account = {...accountFormState}
    //         await API.graphql(graphqlOperation(createAccount, {input: account}))
    //         setAccountFormState(initialAccountFormState)
    //         setAccount(account)
    //     } catch (err) {
    //         console.log('error creating todo:', err)
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text>Hello {user.name}</Text>
            <AuthSignOut/>
            {/*{*/}
            {/*    buckets.map((bucket, index) => (*/}
            {/*        <BucketCard  {...bucket} ></BucketCard>*/}
            {/*    ))*/}
            {/*}*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20},
    input: {height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8},
    todoName: {fontSize: 18}
})

export default withAuthenticator(App, authConfig)