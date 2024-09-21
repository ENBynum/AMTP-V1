import { Affix, Alert, Text } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react"



interface RegisterNotificationsProps {
    userExists: boolean,
    registerSuccess: boolean
}

export default function RegisterNotifications({userExists, registerSuccess}: RegisterNotificationsProps) {
    return (
        <Affix position={{bottom: 20, right: 20}}>
            {userExists ? <Alert
                color={'orange'}
                title={'User Exists'}
                icon={<IconInfoCircle/>}
            >
                <Text>
                    A user associated to this DoD ID has already been created.
                </Text>
                <Text>
                    See unit AMTP Management Admin.
                </Text>
            </Alert> : null}
            {registerSuccess ? <Alert
                color={'green'}
                title={'New User Registered'}
                icon={<IconInfoCircle/>}
            >
            </Alert> : null}
        </Affix>
    )
}