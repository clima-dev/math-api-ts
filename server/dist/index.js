"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
const api = express_1.default.Router();
app.use(express_1.default.json());
app.use(express_1.default.raw());
app.use(express_1.default.urlencoded());
api.post("/add", async (req, res) => {
    if (!req.body.digitOne || !req.body.digitTwo) {
        return res.status(401).send({ error: "MISSING DIGIT ERROR" });
    }
    const result = Number(req.body.digitOne) + Number(req.body.digitTwo);
    res.status(200).send({ result: result });
});
api.post("/sub", async (req, res) => {
    if (!req.body.digitOne || !req.body.digitTwo) {
        return res.status(401).send({ error: "MISSING DIGIT ERROR" });
    }
    const result = Number(req.body.digitOne) - Number(req.body.digitTwo);
    res.status(200).send({ result: result });
});
api.post("/multiply", async (req, res) => {
    if (!req.body.digitOne || !req.body.digitTwo) {
        return res.status(401).send({ error: "MISSING DIGIT ERROR" });
    }
    const result = Number(req.body.digitOne) * Number(req.body.digitTwo);
    res.status(200).send({ result: result });
});
app.use("/api", api);
app.listen(port, () => {
    console.log("App started on:", port);
});
