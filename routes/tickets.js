const { Router } = require("express");

// Controllers
const {
  getTickets,
  getTicket,
  postTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/tickets");

const router = Router();

router.get("/", getTickets);
router.get("/:id", getTicket);
router.post("/", postTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;

