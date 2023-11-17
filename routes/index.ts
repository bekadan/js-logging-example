import express from "express";
import {
  deleteReq,
  getReq,
  patchReq,
  postReq,
  putReq,
} from "../controllers/dummy";
const router = express.Router();

router.post("/post-req", postReq);
router.get("/get-req", getReq);
router.patch("/patch-req", patchReq);
router.put("/put-req", putReq);
router.delete("/delete-req", deleteReq);

module.exports = router;
