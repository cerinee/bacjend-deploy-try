const router = express.Router();
const { getAllMeals, addMeal, getMealById } = require("../controllers/mealController")

router.get("/", getAllMeals)
router.post("/", addMeal)
router.get("/:id", getMealById)
// testing giiit
module.exports = router