const Contact = require("../models/Contacts");
module.exports.postContact = async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    if (!req.body.email) {
      res.status(400).send({ message: "email is required" });
      return;
    }
    const finduser = await Contact.findOne({ email: req.body.email });
    console.log(finduser);
    if (finduser) {
      res.status(400).send({ message: "email or name existed" });
      return;
    }
    const findname = await Contact.findOne({ name: req.body.name });
    console.log(findname);
    if (findname) {
      res.status(400).send({ message: "email or name existed" });
      return;
    }
    const response = await newContact.save();
    res.send({ response: response, message: "user is saved" });
  } catch (error) {
    console.log(error);
    res.status(400).send("can not save it");
  }
};
module.exports.getContact = async (req, res) => {
  try {
    const result = await Contact.find();
    console.log(result);
    res.send({ response: result, message: "get all contacts" });
  } catch (error) {
    res.status(400).send({ message: "can not get contacts" });
  }
};
module.exports.getContactId = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    console.log(result);
    res.send({ response: result, message: "get  contact" });
  } catch (error) {
    res.status(400).send({ message: "there is no contact with this id " });
  }
};
module.exports.deleteContact = async (req, res) => {
  try {
    const delet = await Contact.deleteOne({ _id: req.params.id });
    res.send({ response: delet, message: "deleted" });
    delet.n
      ? res.send({ response: "user deleted" })
      : res.send("there is no user with this id ");
  } catch (error) {
    res.status(400).send({ message: " there is no id " });
  }
};
module.exports.updateContact = async (req, res) => {
  try {
    const up = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(up);
    res.send({ message: "updated" });
  } catch (error) {
    res.status(400).send({ message: "not updated" });
  }
};
