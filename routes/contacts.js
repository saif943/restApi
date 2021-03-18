const express = require("express");
const contacts = require("../models/Contacts");
const router = express.Router();
const Contact = require("../models/Contacts");
const controlleres = require("../controllres/contact.controlleres");

//@POST method
//@desc post a contact
//@path : http://localhost:5000/api/contact/
//Params Body

router.post("/", controlleres.postContact);

//@methode GET
//@desc GET all contacts
//@path : http://localhost:5000/api/contact/

router.get("/", controlleres.getContact);
//@methode GET
//@desc GET all contacts
//@path : http://localhost:5000/api/contact/:id
//@Params id

router.get("/:id", controlleres.getContactId);

//@methode DELETE
//@des DELETE on contact by id
//@path : http://localhost:5000/api/contact/:id
//@Params id
router.delete("/:id", controlleres.deleteContact);
//@method PUT
//@des update a contact by id
//@path : http://localhost:5000/api/contact/:id
//@Params id Body
router.put("/:id", controlleres.updateContact);

module.exports = router;
