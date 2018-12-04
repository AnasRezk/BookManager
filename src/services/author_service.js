import axios from 'axios';
import { from } from 'rxjs';
import { ApiUrl } from '../utils/config';

const rootUrl = `${ApiUrl}authors`;

export const AuthorService = {
    getAuthors() {
        return from(axios.get(`${rootUrl}`));
    },
    getSingleAuthor(id) {
        const url = `${rootUrl}/${id}`;
        return from(axios.get(url));
    },
    createAuthor(values) {
        return from(axios.post(`${rootUrl}`, values));
    },
    updateAuthor(values) {
        const url = `${rootUrl}/${values.id}`;
        return from(axios.put(url, values))
    }
};
