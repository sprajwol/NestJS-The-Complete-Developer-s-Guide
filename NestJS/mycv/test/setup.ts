import { rm } from 'fs/promises';
import { join } from 'path';

global.beforeAll(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'), {
      recursive: true,
      force: true,
    });
  } catch (err) {
    console.log('Error Deleting Database...', err);
  }
});
