import type { CreatedEntity, Entity, MonoriseEntityConfig } from '@monorise/base';
import type React from 'react';
import type { ApplicationRequestError } from '../types/api.type';
import type { CommonStore } from '../types/monorise.type';
import type { Mutual } from '../types/mutual.type';
type Options = {
    modals?: Record<string, React.ComponentType<unknown>>;
};
declare const initMonoriseStore: () => {
    setOptions: (opts: Options) => void;
    monoriseStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<{
        app: {
            ongoingRequests: Map<string, Promise<unknown>>;
            loadStack: Map<string, number>;
            intLoadStack: Map<string, number>;
            loadingMessage: string;
            errorStack: Map<string, ApplicationRequestError>;
            modal: {
                name: string | null;
                context?: unknown;
            };
        };
        config: Record<Entity, MonoriseEntityConfig>;
        entity: Record<Entity, CommonStore<CreatedEntity<Entity>>>;
        mutual: Record<string, CommonStore<Mutual>>;
        tag: Record<string, CommonStore<CreatedEntity<Entity>>>;
        auth: {
            isUnauthorized: boolean;
            profile: {
                displayName: string;
                email: string;
                accountId: string;
            };
            isLoading: boolean;
        };
    }>, "setState"> & {
        setState<A extends string | {
            type: string;
        }>(partial: {
            app: {
                ongoingRequests: Map<string, Promise<unknown>>;
                loadStack: Map<string, number>;
                intLoadStack: Map<string, number>;
                loadingMessage: string;
                errorStack: Map<string, ApplicationRequestError>;
                modal: {
                    name: string | null;
                    context?: unknown;
                };
            };
            config: Record<Entity, MonoriseEntityConfig>;
            entity: Record<Entity, CommonStore<CreatedEntity<Entity>>>;
            mutual: Record<string, CommonStore<Mutual>>;
            tag: Record<string, CommonStore<CreatedEntity<Entity>>>;
            auth: {
                isUnauthorized: boolean;
                profile: {
                    displayName: string;
                    email: string;
                    accountId: string;
                };
                isLoading: boolean;
            };
        } | Partial<{
            app: {
                ongoingRequests: Map<string, Promise<unknown>>;
                loadStack: Map<string, number>;
                intLoadStack: Map<string, number>;
                loadingMessage: string;
                errorStack: Map<string, ApplicationRequestError>;
                modal: {
                    name: string | null;
                    context?: unknown;
                };
            };
            config: Record<Entity, MonoriseEntityConfig>;
            entity: Record<Entity, CommonStore<CreatedEntity<Entity>>>;
            mutual: Record<string, CommonStore<Mutual>>;
            tag: Record<string, CommonStore<CreatedEntity<Entity>>>;
            auth: {
                isUnauthorized: boolean;
                profile: {
                    displayName: string;
                    email: string;
                    accountId: string;
                };
                isLoading: boolean;
            };
        }> | ((state: {
            app: {
                ongoingRequests: Map<string, Promise<unknown>>;
                loadStack: Map<string, number>;
                intLoadStack: Map<string, number>;
                loadingMessage: string;
                errorStack: Map<string, ApplicationRequestError>;
                modal: {
                    name: string | null;
                    context?: unknown;
                };
            };
            config: Record<Entity, MonoriseEntityConfig>;
            entity: Record<Entity, CommonStore<CreatedEntity<Entity>>>;
            mutual: Record<string, CommonStore<Mutual>>;
            tag: Record<string, CommonStore<CreatedEntity<Entity>>>;
            auth: {
                isUnauthorized: boolean;
                profile: {
                    displayName: string;
                    email: string;
                    accountId: string;
                };
                isLoading: boolean;
            };
        }) => {
            app: {
                ongoingRequests: Map<string, Promise<unknown>>;
                loadStack: Map<string, number>;
                intLoadStack: Map<string, number>;
                loadingMessage: string;
                errorStack: Map<string, ApplicationRequestError>;
                modal: {
                    name: string | null;
                    context?: unknown;
                };
            };
            config: Record<Entity, MonoriseEntityConfig>;
            entity: Record<Entity, CommonStore<CreatedEntity<Entity>>>;
            mutual: Record<string, CommonStore<Mutual>>;
            tag: Record<string, CommonStore<CreatedEntity<Entity>>>;
            auth: {
                isUnauthorized: boolean;
                profile: {
                    displayName: string;
                    email: string;
                    accountId: string;
                };
                isLoading: boolean;
            };
        } | Partial<{
            app: {
                ongoingRequests: Map<string, Promise<unknown>>;
                loadStack: Map<string, number>;
                intLoadStack: Map<string, number>;
                loadingMessage: string;
                errorStack: Map<string, ApplicationRequestError>;
                modal: {
                    name: string | null;
                    context?: unknown;
                };
            };
            config: Record<Entity, MonoriseEntityConfig>;
            entity: Record<Entity, CommonStore<CreatedEntity<Entity>>>;
            mutual: Record<string, CommonStore<Mutual>>;
            tag: Record<string, CommonStore<CreatedEntity<Entity>>>;
            auth: {
                isUnauthorized: boolean;
                profile: {
                    displayName: string;
                    email: string;
                    accountId: string;
                };
                isLoading: boolean;
            };
        }>), replace?: boolean | undefined, action?: A | undefined): void;
    }>;
};
export { initMonoriseStore };
export type MonoriseStore = Awaited<ReturnType<typeof initMonoriseStore>>['monoriseStore'];
//# sourceMappingURL=monorise.store.d.ts.map