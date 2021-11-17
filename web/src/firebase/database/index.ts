import {
  getDatabase, connectDatabaseEmulator,
} from 'firebase/database';
import app from '@/firebase';

const database = getDatabase(app);

/* eslint-disable no-restricted-globals */
if (location.hostname === 'localhost') {
  connectDatabaseEmulator(database, 'localhost', 9000);
}

export default database;
