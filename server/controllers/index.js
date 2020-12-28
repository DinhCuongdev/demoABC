const authController = require("./auth");
const userController = require("./users");

const productController = require("./products");

const profileController = require("./profiles");
const orderController = require("./orders");

const blogController = require("./blogs");
const commentController = require("./comments");
const vnpayController = require("./vnpay");
const bannerController = require("./banners");
const cartController = require("./carts");

module.exports = {
  authController,
  userController,
  brandController,
  categoryController,
  subcategoryController,
  productController,
  contactController,
  profileController,
  orderController,
  discountController,
  couponController,
  blogController,
  commentController,
  vnpayController,
  bannerController,
  cartController,
};
