import { Router } from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import {
  addAddress,
  deleteAddress,
  getAddresses,
  updateAddress,
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../controllers/user.controller.js"
import { get } from "mongoose"

const router = Router()

router.use(protectRoute)

//adress routes
router.post("/addresses", addAddress)
router.get("/addresses", getAddresses)
router.put("/addresses/:addressId", updateAddress)
router.delete("/addresses/:addressId", deleteAddress)

//wishlist routes

router.post("/wishlist", addToWishlist)
router.delete("/wishlist/:productId", removeFromWishlist)
router.get("/wishlist", getWishlist)

export default router
