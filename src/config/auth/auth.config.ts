export const authConfig = {
    usernameAttributes: 'email',
    signUpConfig: {
        hiddenDefaults: ["phone_number"],
        signUpFields: [{key: 'name', label: 'Name', required: true}],

    }
}