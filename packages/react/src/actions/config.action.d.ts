import type { Entity, MonoriseEntityConfig } from '@monorise/base';
import type { MonoriseStore } from '../store/monorise.store';
declare const initConfigActions: (store: MonoriseStore) => {
    setConfig: (config: Record<Entity, MonoriseEntityConfig>) => void;
    getConfig: () => Record<Entity, MonoriseEntityConfig<Entity, import("zod").ZodRawShape, import("zod").ZodRawShape, import("zod").ZodRawShape, undefined, undefined>>;
    useConfig: () => Record<Entity, MonoriseEntityConfig<Entity, import("zod").ZodRawShape, import("zod").ZodRawShape, import("zod").ZodRawShape, undefined, undefined>>;
};
export { initConfigActions };
export type ConfigActions = ReturnType<typeof initConfigActions>;
//# sourceMappingURL=config.action.d.ts.map