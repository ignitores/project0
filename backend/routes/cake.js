import express from 'express';

import { testFunction1, testFunction2 } from '../controllers/cake.js'

const router = express.Router();

// temporary
// url to test -->> http://localhost:8000/cake/test1
router.get('/test1', testFunction1);

// url to test -->> http://localhost:8000/cake/test2
router.get('/test2', testFunction2);

export default router;