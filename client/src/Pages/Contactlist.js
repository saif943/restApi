import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Components/Contact/Contact";
import { getContacts } from "../JS/actions/actions";
const Contactlist = () => {
  const contacList = useSelector((state) => state.contactReducer.contacList);
  const loadContact = useSelector((state) => state.contactReducer.loadContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div>
      {loadContact ? (
        <h2> sp </h2>
      ) : (
        contacList.map((el) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Contact contact={el} key={el.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default Contactlist;
