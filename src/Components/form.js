import React from "react";
import { Formik } from "formik";
import formdata from "./formData.json";
const BasicFormWithFFormikValidation = () => {
  const Renderinput = (item,values,errors) => {
    if (item.type === "text") {
      return TextInput(item,values,errors);
    }
    if (item.type === "upload") {
      return FileInput(item,values,errors);
    }
    if (item.type === "select") {
      return SelectInput(item,values,errors);
    }
    if (item.type === "radio") {
      return RadioInput(item,values,errors);
    }
    if (item.type === "checkbox") {
      return CheckBox(item,values,errors);
    }
  };
  const TextInput = (item,values,errors) => {
    return (
      <div>
        <label>{item.label}</label>
        <br />
        <input placeholder={item.placeholder} type={item.type} />
        {errors && errors[item.id] && <p style={'color:red'}>{errors[item.id]}</p>}
      </div>
    );
  };
  const FileInput = (item,values,errors) => {
    return (
      <div>
        <label>{item.label}</label>
        <input type={"file"} />
      </div>
    );
  };
  const SelectInput = (item,values,errors) => {
    return (
      <div>
        <label>{item.label}</label>
        <br />
        <select>
          {item?.options?.map((_item, _key) => (
            <option value={_item}>{_item}</option>
          ))}
        </select>
      </div>
    );
  };
  const CheckBox = (item,values,errors) => {
    return (
      <div>
        <label>{item.label}</label>
        <br />
        {item?.options?.map((_item, _key) => (<>
          <input type={item.type} name={_item} value={_item} />

          <label>{_item}</label></>
        ))}
      </div>
    );
  };
  const RadioInput = (item,values,errors) => {
    return (
      <div>
        <label>{item.label}</label>
        <br />
        {item?.options?.map((_item, _key) => (<>
          <input type={item.type} name={_item.id} value={_item} />
          <label>{_item}</label></>
        ))}
      </div>
    );
  };
  return (
    <div>
      <h1>Form Page</h1>
      <Formik
        initialValues={formdata.map((item)=>item.value)}
        validate={(input) => {formdata.map((item)=>item.validations)}}
      >
        {(values, errors) => (
          <form>
            {formdata.map((item, key) => (
              <div key={key}>{Renderinput(item,values,errors)}</div>
            ))}
            <input type="submit" value={"Submit"} />
          </form>
        )}
      </Formik>
    </div>
  );
};
export default BasicFormWithFFormikValidation;
