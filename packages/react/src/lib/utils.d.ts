import type { Entity } from '@monorise/base';
export declare const convertToMap: <T extends Record<string, any>>(data: T[], mapKey: string) => Map<any, any>;
export declare const getMutualStateKey: (byEntity: Entity, byEntityId: string | null, entity: Entity, entityId?: string, chainEntityQuery?: string) => string;
export declare const getTagStateKey: (entityType: Entity, tagName: string, params?: Record<string, string>) => string;
export declare const getUniqueFieldStateKey: (fieldName: string, fieldValue: string) => string;
export declare const getEntityRequestKey: (mode: "create" | "upsert" | "edit" | "delete" | "get" | "list" | "search", entityType: Entity, entityId?: string) => string;
export declare const getMutualRequestKey: (mode: "create" | "update" | "delete" | "get" | "list", byEntityType: Entity, entityType: Entity, byEntityId: string | null, entityId?: string, chainEntityQuery?: string) => string;
export declare const getTagRequestKey: (mode: "list", entityType: Entity, tagName: string, params?: Record<string, string>) => string;
export declare const getUniqueFieldRequestKey: (entityType: Entity, fieldName: string, value: string) => string;
//# sourceMappingURL=utils.d.ts.map