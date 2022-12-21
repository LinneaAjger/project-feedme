import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import crypto from "crypto"
import bcrypt from "bcrypt"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-feedme"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// SCHEMAS 
// User-schema 
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
})

const User = mongoose.model("User", UserSchema);

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization")
  try {
    const user = await User.findOne({accessToken: accessToken})
    if (user) {
      next()
    } else {
      res.status(401).json({
        success: false,
        response: "Please log in"
      })
    }
  } catch {
    res.status(401).json({
      success: false,
      response: "Please log in"
    })
  }
}

// Recipe-schema
const RecipeDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  }, 
  userRating: {
    type: Number,
    max: 5,
  }
})

const RecipeTags = new mongoose.Schema({
  meal: {
    type: Array,
  },
  difficulty: {
    type: Array,
  }
})

const RecipeSchema = new mongoose.Schema({
  recipe: {
    type: RecipeDetails
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  likes: {
    type: Number,
    default: 0
  },
  user: {
    type: String,
    required: true
  }, 
  tags: {
    type: RecipeTags
  }
})

const Recipe = mongoose.model("Recipe", RecipeSchema);

// Start defining your routes here
app.get("/", (req, res) => {
  res.json({
    endpoints: {
      "/register": "use with POST to send a request with username & password",
      "/login": "use with POST to send a request with username & password",
      "/recipes": "use with GET & POST to send a request to get the feed and to post recipes to it"
    }
  })
});
// Shows feed when logged in
app.get("/recipes", authenticateUser)
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({createdAt: 'desc'}).limit(20).exec()
    res.status(200).json({
     success: true,
     response: recipes
    })
  } catch (error) {
     res.status(400).json({success: false, response: error});
   }
})

//show all posts from a specific user
app.get("/:userId", authenticateUser)
app.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const usersRecipes = await Recipe.find({user: userId}).sort({createdAt: 'desc'})
    res.status(200).json({
     success: true,
     response: usersRecipes
    })
  } catch (error) {
     res.status(400).json({success: false, response: error});
   }
})

// Posts new recipe to feed
app.post("/recipes", authenticateUser)
app.post("/recipes", async (req, res) => {
  const { recipe } = req.body
  const accessToken = req.header("Authorization")
  const user = await User.findOne({accessToken: accessToken})

  try {
    const newRecipe = await new Recipe({recipe, user: user._id}).save()
    res.status(201).json({
      success: true,
      response: newRecipe
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error
    })
  }
})

// get single recipe based on id
app.get("/recipes/:recipeId", authenticateUser)
app.get("/recipes/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const singleRecipe = await Recipe.find({ _id: recipeId }).sort({createdAt: 'desc'})
    res.status(200).json({
     success: true,
     response: singleRecipe
    })
  } catch (error) {
     res.status(400).json({success: false, response: error});
   }
})

// Delete recipe
app.delete("/recipes/:recipeId", async (req, res) => {
  const { recipeId } = req.params
  try {
    const recipeToDelete = await Recipe.findByIdAndRemove({_id: recipeId})
    res.status(200).json({
      sucess: true,
      response: "Recipe deleted", recipeToDelete
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,
      response: error
    })
  }
})

// Register new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 8 characters long"
      });
    } else {
      const newUser = await new User({username: username, password: bcrypt.hashSync(password, salt)}).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser._id
        }
      });
    }
  } catch(error) {
      res.status(400).json({
        success: false,
        response: error
      });
  }
})

// Log in 
app.post("/login", async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({username})
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json ({
        success: true,
        response: {
          username: user.username, 
          id: user._id,
          accessToken: user.accessToken
        }
      })
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials did not match"
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      response: error
    })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})
