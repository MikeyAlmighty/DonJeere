import "./Styles.scss"

import {Form} from "../form/Form";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
});

export const ContactUs = () => (
    <span className="contactUsContainer" id="contact-us">
        <p className="heading">Contact Us</p>
        <Form schema={schema} />
    </span>
);