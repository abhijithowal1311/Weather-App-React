import { Button, FormFeedback } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import utils from "../../utils/utils";
import Autosuggest from "react-autosuggest";
import AutoSuggestTest from "../utils/AutoSuggestInput";

export default function UserInfoForm({savedData}) {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [location, setlocation] = useState("")
  const [errors, seterrors] = useState({ name: "", email: "" });

  useEffect(()=> {
    if(savedData && savedData.present) {
        setname(savedData.name)
        setemail(savedData.email)
        setlocation(savedData.location)
    }
  },[savedData])

  function handleEmail(e) {
    setemail(e.target.value);
  }

  function handleName(e) {
    setname(e.target.value);
  }
  
  function handleLocation(e) {
    setlocation(e.target.value);
  }

  function saveData(e) {
    e.preventDefault()
    let validateObj = utils.validateUserForm(name, email, location)
    if (validateObj.errorPresent) {
        seterrors(validateObj.errors)
        return;
    }
    //TODO: change this to react-toastify
    alert("Data saved successfully");
  }

  return (
    <Form className="user__form" onSubmit={saveData}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={handleName} />
        <FormFeedback className="text-danger">{errors.name}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Email Address</Label>
        <Input type="text" value={email} onChange={handleEmail} />
        <div className="text-danger">{errors.email}</div>
      </FormGroup>
      <FormGroup>
        <Label>Location</Label>
        {/* <Input type="text" value={location} onChange={handleLocation} /> */}
        <AutoSuggestTest setLocationName={setlocation} locationName={location} type="settings"/>
      </FormGroup>
      <Button color="primary" className="text-white w-100 mt-3">
        Save
      </Button>
    </Form>
  );
}
