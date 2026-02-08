import { Router } from "express"
import { createProduct } from "../controllers/admin.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"
import { adminOnly } from "../middleware/auth.middleware.js"
import { getAllProducts } from "../controllers/admin.controller.js"
import { updateProduct } from "../controllers/admin.controller.js"
import { upload } from "../middleware/multer.middleware.js"
import { getAllOrders } from "../controllers/admin.controller.js"
import { updateOrderStatus } from "../controllers/admin.controller.js"
import { getAllCustomers } from "../controllers/admin.controller.js"
import { getDashboardStats } from "../controllers/admin.controller.js"
import { deleteProduct } from "../controllers/admin.controller.js"

const router = Router()

//optimization - dry
router.use(protectRoute, adminOnly)

router.post("/products", upload.array("images", 3), createProduct)
router.get("/products", getAllProducts)
router.put("/products/:id", upload.array("images", 3), updateProduct)
router.delete("/products/:id", deleteProduct) // TODO: delete product controller

router.get("/orders", getAllOrders)
router.patch("/orders/:orderId/status", updateOrderStatus)

router.get("/customers", getAllCustomers)

router.get("/stats", getDashboardStats)

export default router
