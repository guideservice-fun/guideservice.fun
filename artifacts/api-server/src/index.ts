import express from 'express';

import { health } from './routes/health.js';

const app = express();

app.get('/health', health);

const port = Number(process.env.PORT ?? 3000);

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
