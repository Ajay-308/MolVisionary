import Index from "@/components/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MolVisionary : A leading research platform for drug research or discovery",
  description: "MolVisionary is a leading research platform for drug research or discovery",
}

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
