import { Router } from "express"
import { protectRouter } from "../middleware/auth.middleware.js"
import { createOrder } from "../controllers/order.controller.js"
import { getUserOrder } from "../controllers/order.controller.js"

const router = Router()

router.post("/", protectRouter, createOrder)
router.get("/", protectRouter, getUserOrder)

export default router
