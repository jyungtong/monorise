import type { ApplicationRequestError } from '../types/api.type';
import type { MonoriseStore } from '../store/monorise.store';
type StartLoadingPayload<T> = {
    requestKey: string;
    isInterruptive?: boolean;
    message?: string | boolean;
    request: Promise<T>;
};
type EndLoadingPayload = {
    requestKey: string;
    isInterruptive?: boolean;
};
type SetErrorPayload = {
    requestKey: string;
    error: ApplicationRequestError;
};
type Options = {
    modals?: Record<string, React.ComponentType<unknown>>;
};
declare const initAppActions: (store: MonoriseStore) => {
    startLoading: <T>({ requestKey, isInterruptive, message, request, }: StartLoadingPayload<T>) => void;
    endLoading: ({ requestKey, isInterruptive }: EndLoadingPayload) => void;
    setError: ({ requestKey, error }: SetErrorPayload) => void;
    getError: (requestKey: string) => ApplicationRequestError | undefined;
    clearError: (requestKey: string) => void;
    openModal: (modal: {
        name: string;
        context?: unknown;
    }) => void;
    closeModal: () => void;
    checkIsLoading: (requestKey?: string) => boolean;
    useLoadStore: (requestKey?: string) => boolean;
    useInterruptiveLoadStore: () => {
        isLoading: boolean;
        message: string;
    };
    useErrorStore: (requestKey: string) => ApplicationRequestError | undefined;
    useModalStore: () => {
        name: string | null;
        context?: unknown;
    };
    setOptions: (opts: Options) => void;
};
export { initAppActions };
export type AppActions = ReturnType<typeof initAppActions>;
//# sourceMappingURL=app.action.d.ts.map