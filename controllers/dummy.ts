import { Request, Response } from "express";

export const postReq = async (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(res.statusCode).json({completed:true});
};

export const getReq = async (req: Request, res: Response) => {
  console.log(req.params);
  return res.status(res.statusCode).json({completed:true});
};

export const putReq = async (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(res.statusCode).json({completed:true});
};

export const patchReq = async (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(res.statusCode).json({completed:true});
};

export const deleteReq = async (req: Request, res: Response) => {
  console.log(req.params);
  return res.status(res.statusCode).json({completed:true});
};
