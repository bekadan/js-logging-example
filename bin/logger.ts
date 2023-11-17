import { NextFunction, Request, Response } from "express";
import { ILog } from "./interfaces/log";
import { logToFile } from "./file";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  res.on("finish", () => {
    const log: ILog = {
      method: req.method,
      uri: decodeURI(req.url),
      statusCode: res.statusCode,
      statusMessage: res.statusMessage,
    };
    logToFile("./logs.json", log);
  });
  next();
};
