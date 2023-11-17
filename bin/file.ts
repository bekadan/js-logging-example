import fs from "fs";
import { ILog } from "./interfaces/log";

export const logToFile = (path: string, data: ILog) => {
  if (fs.existsSync(path)) {
    const fileData:ILog[] = JSON.parse(fs.readFileSync(path, "utf8"));
    fileData.push(data);
    fs.writeFileSync(path, JSON.stringify(fileData));
  } else {
    const logs:ILog[] = [];
    logs.push(data);
    fs.writeFileSync(path, JSON.stringify(logs), "utf8");
  }
};
