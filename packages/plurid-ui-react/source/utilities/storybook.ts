import themes from '@plurid/plurid-themes';



export const themeLabel = 'Theme';
const computeThemeOptions = () => {
    const options: any = {};
    for (const key of Object.keys(themes)) {
        options[key] = key;
    }
    return options;
}
export const themeOptions = computeThemeOptions();
export const defaultThemeValue = 'plurid';
