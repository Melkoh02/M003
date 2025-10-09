import axios, { AxiosError, AxiosHeaders, type AxiosResponse } from 'axios';
import rootStore from '../lib/stores/rootStore.ts'; // --------------- Axios instance ---------------

// --------------- Axios instance ---------------
const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

client.interceptors.request.use(
  config => {
    const token = rootStore.userStore.accessToken;
    if (token) {
      const headers = new AxiosHeaders(config.headers);
      headers.set('Authorization', `Bearer ${token}`);
      config.headers = headers;
    }
    return config;
  },
  error => Promise.reject(error),
);

// --------------- RequestWrapper & helper ---------------
export type HandleOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: AxiosError) => void;
  successMessage?: string;
  errorMessage?: string;
  onFinally?: () => void;
};

class RequestWrapper<T> {
  constructor(private promise: Promise<AxiosResponse<T>>) {}

  handle(opts: HandleOptions<T> = {}) {
    this.promise
      .then(res => {
        if (opts.successMessage) console.log(opts.successMessage);
        opts.onSuccess?.(res.data);
      })
      .catch((err: AxiosError) => {
        // HTTP error (server responded with 4xx/5xx)
        if (err.response) {
          if (opts.errorMessage) console.log(opts.errorMessage);
          opts.onError?.(err);
        } else {
          // Network / no-response error
          console.log('Network error:', err);
        }
      })
      .finally(() => {
        opts.onFinally?.();
      });
  }
}

/**
 * Wrap any Axios call so it gains a .handle() method.
 */
export function wrapRequest<T>(p: Promise<AxiosResponse<T>>) {
  return new RequestWrapper<T>(p);
}

export default client;
