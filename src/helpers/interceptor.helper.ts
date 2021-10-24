import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const interceptor = (): void => {
    axios.interceptors.request.use(
        req => AxiosLogger.requestLogger(req, { data: false }),
        error => Promise.reject(error),
    );
    axios.interceptors.response.use(
        res => AxiosLogger.responseLogger(res, { data: false }),
        error => {
            if (error?.response?.status === 401) {
                delete axios.defaults.headers.common.Authorization;
                console.log('logout');
            }

            return Promise.reject(error);
        },
    );
};

export default interceptor;
