import type { ErrorRequestHandler, RequestHandler } from 'express';

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({ error: 'Route not Found' });
};

export const errorhandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
};
