import express from 'express';

import healthRouter from './routes/health.js';

const app = express();

app.use(healthRouter);

const port = Number(process.env.PORT ?? 3000);

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
