import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { PrismicRichText } from "./PrismicRichText";
import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Button from "./Button";

function SignUpForm({ settings }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBNNnVAI6mPg8SWMszs2ud5anSpDkbW69c",
  });
  const center = {
    lat: 50.7639236,
    lng: 15.0541447,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = "/api/contact";
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <section className="flex min-h-[50] w-full flex-col items-center justify-center bg-glass-200 py-20">
      <h2>Kontaktujte nás</h2>
      <div className="grid w-screen grid-cols-1 grid-rows-2 items-center justify-center sm:grid-cols-2 sm:grid-rows-1">
        <div className="m-auto box-border h-[50vh] w-full max-w-xl p-4">
          {isLoaded && (
            <GoogleMap
              mapContainerClassName="w-full h-full "
              center={center}
              zoom={19}
            >
              <Marker position={center} />
            </GoogleMap>
          )}
        </div>
        <div className="box-border flex w-full flex-col items-center justify-center p-8">
          <div class="mb-6 w-full max-w-xl">
            <label for="default-input" class="mb-2 block text-sm font-medium">
              Jméno
            </label>
            <input
              placeholder="Jméno"
              type="text"
              id="default-input"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6 w-full max-w-xl">
            <label for="default-input" class="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="default-input"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6 w-full max-w-xl">
            <label for="large-input" class="mb-2 block text-sm font-medium">
              Zpráva
            </label>
            <input
              placeholder="Zpráva..."
              type="text"
              id="large-input"
              class="sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4  focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button>Odeslat</Button>
        </div>
      </div>
    </section>
  );
}

export function Footer({ settings, navigation }) {
  return (
    <>
      <SignUpForm settings={settings} />
      <footer class="bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
        <div class="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            class="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/*  <PrismicNextImage field={settings.data.logo} /> */}
            <span className="text-slate-100">
              <PrismicRichText field={settings.data.siteTitle} />
            </span>
          </a>
          <p class="my-6 text-gray-500 dark:text-gray-400">
            Open-source library of over 400+ web components and interactive
            elements built for better web.
          </p>
          <ul class="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="mr-4 font-semibold tracking-tight hover:underline md:mr-6 "
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
          <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2021-2022 <a href="#" class="hover:underline"></a>. All Rights
            Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
