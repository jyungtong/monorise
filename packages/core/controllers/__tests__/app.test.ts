import type { Entity as EntityType } from '@monorise/base';
import express, { type Request, type Response } from 'express';
import request from 'supertest';
import { ulid } from 'ulid';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
  StreamHandler,
  createDynamoDbClient,
  createMockEntityConfig,
  createReplicationHandler,
  createStreamClient,
  createTestTable,
  deleteTestTable,
  getTableName,
  waitForStreamReady,
} from '../../helpers/test/test-utils';
import { DependencyContainer } from '../../services/DependencyContainer';
import { setupCommonRoutes } from '../setupRoutes';

// Initialize constants and clients
const TABLE_NAME = getTableName();
const dynamodbClient = createDynamoDbClient();
const streamClient = createStreamClient();
const streamHandler = new StreamHandler(
  TABLE_NAME,
  dynamodbClient,
  streamClient,
);
const mockEntityConfig = createMockEntityConfig();
const EmailAuthEnabledEntities: EntityType[] = [
  // MockEntityType.USER as unknown as EntityType,
];
const replicationHandler = createReplicationHandler(TABLE_NAME, dynamodbClient);
const container = new DependencyContainer({
  EntityConfig: mockEntityConfig,
  AllowedEntityTypes: Object.keys(mockEntityConfig) as unknown as EntityType[],
  EmailAuthEnabledEntities: [],
  dynamodbClient,
  tableName: TABLE_NAME,
  publishEvent: async () => {}, // tmp mock until event util is implemented
});

const app = express();
const router = express.Router();

setupCommonRoutes(container)(router);
app.use(express.json());
app.use('/', router);

describe('E2E Test', () => {
  beforeAll(async () => {
    await createTestTable(TABLE_NAME, dynamodbClient, {
      enableStream: true,
    });
    await waitForStreamReady(TABLE_NAME, dynamodbClient, streamClient);
    await streamHandler.initialize();
  }, 60000); // Increase timeout for table creation

  afterAll(async () => {
    await deleteTestTable(TABLE_NAME, dynamodbClient);
  }, 60000); // Increase timeout for table deletion

  describe('Negative scenarios', () => {
    describe('Invalid entity type', () => {
      it('should return status 404', async () => {
        const response = await request(app).get('/entity/invalid');
        expect(response.status).toBe(404);
      });
    });
  });

  it('should return status 200 and empty results at first', async () => {
    const response = await request(app).get('/entity/user');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: [], totalCount: 0 });
  });

  it('should create a user', async () => {
    const createUser = {
      name: 'Test User',
      username: `test-${ulid()}`,
      email: `test-${ulid()}@example.com`,
    };
    const response = await request(app)
      .post('/entity/user')
      .set('Content-Type', 'application/json')
      .send(createUser);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      entityType: 'user',
      entityId: expect.any(String),
      data: {
        name: createUser.name,
        username: createUser.username,
        email: createUser.email,
      },
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});
