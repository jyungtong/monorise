import type { Entity } from '@monorise/base';
import type { AuthService } from '../services/auth.service';
import type { MonoriseStore } from '../store/monorise.store';
declare const initAuthActions: (store: MonoriseStore, authService: AuthService) => {
    requestLogin: (entityType: Entity, payload: {
        email: string;
    }) => Promise<any>;
    useProfile: <T extends Record<string, unknown>>() => T & {
        displayName: string;
        email: string;
        accountId: string;
        impersonatorId?: string;
    };
    getProfile: () => Promise<void>;
    useIsUnauthorized: () => {
        isUnauthorized: boolean;
        isLoading: boolean;
    };
    setIsUnauthorized: (isUnauthorized: boolean) => void;
    logout: () => void;
};
export { initAuthActions };
export type AuthActions = ReturnType<typeof initAuthActions>;
//# sourceMappingURL=auth.action.d.ts.map