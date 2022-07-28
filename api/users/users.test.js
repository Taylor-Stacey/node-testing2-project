const db = require('../../data/dbConfig');
const { testing } = require('../../knexfile');
const Users = require('./users-model');

test('is NODE_ENV set correctly', () => {
    expect(process.env.NODE_ENV).toBe('testing');
});

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

afterAll(async () => {
    await db.destroy();
});

beforeEach(async () => {
    await db('users').truncate();
    await db.seed.run();
});

describe('users-model', () => {
    test('find()', async () => {
        let result = await Users.find();
        expect(result).toHaveLength(4);
        expect(result[0]).toMatchObject({ name: 'sam' });
    });
    test('findById(id)', async () => {
        let result = await Users.findById(2);
        expect(result).toEqual({ id: 2, name: 'kyle' });
        result = await Users.findById(200);
        expect(result).not.toBeDefined();
    })
});