import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { AuthorService } from '../services/author_service';
import { FETCH_AUTHORS, FETCH_SINGLE_AUTHOR } from '../actions/authors_types';
import * as actions from '../actions/authors_actions';

const getAuthors = action$ => {
    return action$.pipe(
        ofType(FETCH_AUTHORS),
        switchMap(() => {
            return AuthorService.getAuthors().pipe(
                map(response => actions.fetchAuthorsSuccess(response.data),
                    responseError => actions.fetchAuthorsFail(responseError))
            );
        })
    );
};

const getSingleAuthor = action$ => {
    return action$.pipe(
        ofType(FETCH_SINGLE_AUTHOR),
        switchMap(action => {
            return AuthorService.getSingleAuthor(action.payload).pipe(
                map(response => actions.fetchSingleAuthorSuccess(response.data),
                    responseError => actions.fetchSingleAuthorFail(responseError))
            );
        })
    );
};

export const rootEpic = combineEpics(
    getAuthors,
    getSingleAuthor
);
