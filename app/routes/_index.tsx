import { json, type MetaFunction } from "@remix-run/node";
import { Welcome } from "~/components/Welcome/Welcome";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";
import axios from 'axios'
import { useLoaderData } from "@remix-run/react";
import { Loader } from "@mantine/core";


export const meta: MetaFunction = () => {
  return [
    { title: "AMTP Management" },
    { name: "description", content: "Welcome to AMTP Management!" },
  ];
};


export default function Index() {
 
  return (
    <div>
      <Welcome />
      <ColorSchemeToggle />
    </div>
  );
}
