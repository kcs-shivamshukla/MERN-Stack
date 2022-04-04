const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const EmpDetails = mongoose.model("EmpDetails");

router.get("/", (req, res) => {
  res.render("employee/addOrEdit", {
    viewTitle: "Insert Employee"
  });
});

router.post("/", (req, res) => {
    console.log(req.body._id);
  if (req.body._id =="") insertRecord(req, res);
  else {
    console.log(req.body._id);  
    updateRecord(req, res);}
});

function insertRecord(req, res) {
  var emp = new EmpDetails();
  emp.fullName = req.body.fullName;
  emp.email = req.body.email;
  emp.mobile = req.body.mobile;
  emp.city = req.body.city;
  emp.age = req.body.age;
  emp.salary = req.body.salary;
  emp.save((err, doc) => {
    if (!err) res.redirect("employee/list");
    else {
      if (err.name = "ValidationError") {
        handleValidationError(err, req.body);
        res.render("employee/addOrEdit", {
          viewTitle: "Insert Employee",
          emp: req.body
        });
      } else console.log("Error during record insertion:" + err);
    }
  });
}

function updateRecord(req, res) {
  EmpDetails.findOneAndReplace(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("employee/list");
        
      } else {
        if (err.name = "ValidationError") {
          handleValidationError(err, req.body);
          res.render("employee/addOrEdit", {
            viewTitle: 'Update Employee',
            emp: req.body
          });
        } else {
          console.log("Error during record upddate:" + err);
        }
      }
    }
  );
}

router.get("/list", (req, res) => {
  EmpDetails.find((err, docs) => {
    if (!err) {
      res.render("employee/list", {
        list: JSON.parse(JSON.stringify(docs)),
      });
    } else {
      console.log("Error in retriving employee list:" + err);
    }
  });
});

function handleValidationError(err, body) {
  for (field in err.errors) {
    switch (err.errors[field].path) {
      case "fullName":
        body["fullNameError"] = err.errors[field].message;
        break;

      case "email":
        body["emailError"] = err.errors[field].message;
        break;

      case "mobile":
        body["mobileError"] = err.errors[field].message;
        break;

      case "city":
        body["cityError"] = err.errors[field].message;
        break;

      case "age":
        body["ageError"] = err.errors[field].message;
        break;

      case "salary":
        body["salaryError"] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get("/:id", (req, res) => {
  EmpDetails.findById(req.params.id, (err, doc) => {
    if (!err) {
        console.log(req.params.id);
      res.render("employee/addOrEdit", {
        viewTitle: "Update Employee",
        emp: JSON.parse(JSON.stringify(doc))
      });
    }


  });
});

router.get("/delete/:id", (req, res) => {
  EmpDetails.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/employee/list");
    } else {
      console.log("Error in employee delete" + err);
    }
  });
});
module.exports = router;
