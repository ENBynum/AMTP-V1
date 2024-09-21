import { useMantineColorScheme } from "@mantine/core"

const scheme = useMantineColorScheme().colorScheme
export function getColorScheme() {
    if (scheme !== 'auto') {
        return scheme
    } else {
        const sysPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return sysPreferDark ? 'dark' : 'light'
    }
}