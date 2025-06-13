import type { CreatedEntity, Entity, EntitySchemaMap } from '@monorise/base';
import type { Mutual, MutualData } from '../types/mutual.type';
export declare const constructLocal: (entityType: Entity, entityId: string, data: any) => CreatedEntity<Entity>;
export declare const constructMutual: <B extends Entity, T extends Entity>(byEntityType: B, byEntityId: string, entityType: T, entityId: string, mutualData: Partial<MutualData<B, T>>, data: EntitySchemaMap[T]) => Mutual;
export declare const flipMutual: (mutual: Mutual) => Mutual;
export declare const byMutualIndex: (a: Mutual<any, any>, b: Mutual<any, any>) => number;
export declare const byEntityId: (a: CreatedEntity<any>, b: CreatedEntity<any>) => 1 | -1;
export declare const constructOrderByIndex: (mutuals: Mutual<any, any>[]) => string[];
export declare const injectFields: <T extends Entity>(entity: CreatedEntity<T> | undefined, fields: Record<string, any>) => CreatedEntity<T> | undefined;
//# sourceMappingURL=entity.d.ts.map