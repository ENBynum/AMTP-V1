import { Affix, Alert, Text } from "@mantine/core"
import {IconInfoCircle} from "@tabler/icons-react";



interface LoginNotificationsProps {
    accountDisabled: boolean,
    invalidCredentials: boolean,
    loginSuccess: boolean 
}

export default function LoginNotifications({accountDisabled, invalidCredentials, loginSuccess}: LoginNotificationsProps) {
    return (
        <Affix position={{bottom: 20, right: 20}}>
            {accountDisabled ? <Alert
                color={'red'}
                title={'Login Attempts Exceeded'}
                icon={<IconInfoCircle/>}
            >
                <Text>
                    This account has been disabled.
                </Text>
                <Text>
                    See unit AMTP Admin.
                </Text>
            </Alert> : null}
            {invalidCredentials ? <Alert
                color={'red'}
                title={'Invalid Credentials'}
                icon={<IconInfoCircle/>}
            /> : null}
            {loginSuccess ? <Alert
                color={'green'}
                title={'Login Successful'}
                icon={<IconInfoCircle/>}
            /> : null}
        </Affix>
    )
}