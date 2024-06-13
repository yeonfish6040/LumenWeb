import { Router } from "express";

const router = Router();
/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index");
});

export const serviceRouter = router;