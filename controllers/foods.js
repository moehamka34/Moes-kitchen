// require dependencies
const express = require('express'); // node modules use the singleton pattern
const Food = require('../models/food');
// initialize the router object
const router = express.Router(); // factory function - function that returns an object once invoked
// define router/controller code


// SEED DATA!
//const foodSeed = require('../models/foodSeed.js');
//router.get('/seed', (req, res) => {
	//Food.deleteMany({}, (error, allFoods) => {});

	//Food.create(foodSeed, (error, data) => {
		//res.redirect('/foods');
	//});
//});

// ROUTES
// INDEX
router.get('/', (req, res) => {
    Food.find({}, (error, allFoods) => {
        res.render('index.ejs', {
            foods: allFoods,
        });
    });
})

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
})


// DELETE
router.delete("/:id", (req, res) => {
    Food.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect("/foods")
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    if (req.body.Paid === "on") {
        req.body.Paid = true
    } else {
        req.body.Paid = false
    }
    
    Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedFood) => {
            res.redirect(`/foods/${req.params.id}`)
        }
    )
})

// CREATE
router.post('/', (req, res) => {

    if (req.body.Paid === 'on') {
        //if checked, req.body.completed is set to 'on'
        req.body.Paid = true;
    } else {
        //if not checked, req.body.completed is undefined
        req.body.Paid = false;
    }

    Food.create(req.body, (error, createdFood) => {
        res.redirect('/foods');
    });
})

// EDIT
router.get("/:id/edit", (req, res) => {
    Food.findById(req.params.id, (error, foundFood) => {
        res.render("edit.ejs", {
            food: foundFood,
        })
    })
})

// SHOW
router.get("/:id", (req, res) => {
    Food.findById(req.params.id, (err, foods) => {
        console.log(foods)
        res.render("show.ejs", {
            food: foods
        })
    })
})

// export the router object using module.exports
module.exports = router;