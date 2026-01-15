import { createMMKV } from 'react-native-mmkv'
import { ZENDESK_URL_KEY_UPDATED } from '@env';

export default storage = createMMKV({
    id: 'storage',
    encryptionKey: ZENDESK_URL_KEY_UPDATED
})