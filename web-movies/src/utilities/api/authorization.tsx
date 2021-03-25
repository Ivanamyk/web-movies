import { api } from './api';
// import { objectToArray } from '../../helpers';

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/movies.json'

    });
    return (data.data)
}
export const auth = { get };
