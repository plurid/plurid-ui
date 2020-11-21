import {
    PLURID_COM_WWW_DOMAIN,
} from '@plurid/apps.libraries.data.constants.global';

import * as Types from './types';



export const initialState: Types.State = {
    currentLink: PLURID_COM_WWW_DOMAIN,
    tray: false,
};
