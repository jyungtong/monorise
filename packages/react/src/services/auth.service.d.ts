import type { Entity } from '@monorise/base';
import type { AxiosInterceptor } from '../types/api.type';
type LoginPayload = {
    email: string;
};
type Options = {
    apiBaseUrl?: string;
};
declare const initAuthService: (axios: AxiosInterceptor) => {
    requestLoginMagicLink: (entityType: Entity, payload: LoginPayload) => Promise<import("axios").AxiosResponse<any, any>>;
    getSessionProfile: <T extends Record<string, unknown>>() => Promise<import("axios").AxiosResponse<T & {
        displayName: string;
        email: string;
        accountId: string;
    }, any>>;
    logout: () => Promise<import("axios").AxiosResponse<any, any>>;
    setOptions: (opts: Options) => void;
};
export default initAuthService;
export type AuthService = ReturnType<typeof initAuthService>;
//# sourceMappingURL=auth.service.d.ts.map