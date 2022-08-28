import { Fragment } from "react";
import Head from 'next/head';

import ContactFrom from "../components/contact/contact-form";

function ContactPage() {
  return (
  <Fragment>
    <Head>
      <title>Contact me</title>
      <meta name="description" content="Send me your messages!"/>
    </Head>
    <ContactFrom />
  </Fragment>
  );
}

export default ContactPage;