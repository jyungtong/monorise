import { type AxiosRequestConfig, type AxiosResponse } from 'axios';
export type ApplicationRequestError = {
    code: string;
    message: string;
};
type ExtractModalProps<T> = T extends React.ComponentType<infer P> ? P : void;
export type ModalProps<M> = {
    [K in keyof M]: ExtractModalProps<M[K]>;
};
declare const axios: {
    post: <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data: D, config: AxiosRequestConfig<D>) => Promise<R>;
    put: <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data: D, config: AxiosRequestConfig<D>) => Promise<R>;
    patch: <T = any, R = AxiosResponse<T, any>, D = any>(url: string, data: D, config: AxiosRequestConfig<D>) => Promise<R>;
    delete: <T = any, R = AxiosResponse<T, any>, D = any>(url: string, config: AxiosRequestConfig<D>) => Promise<R>;
    get: <T = any, R = AxiosResponse<T, any>, D = any>(url: string, config: AxiosRequestConfig<D>) => Promise<R>;
    create(config?: import("axios").CreateAxiosDefaults): import("axios").AxiosInstance;
    defaults: Omit<import("axios").AxiosDefaults, "headers"> & {
        headers: import("axios").HeadersDefaults & {
            [key: string]: import("axios").AxiosHeaderValue;
        };
    };
    interceptors: {
        request: import("axios").AxiosInterceptorManager<import("axios").InternalAxiosRequestConfig>;
        response: import("axios").AxiosInterceptorManager<AxiosResponse>;
    };
};
export type AxiosInterceptor = typeof axios;
export {};
//# sourceMappingURL=api.type.d.ts.map