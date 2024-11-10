// import Image from "next/image";
import { FormTemp } from "./components/FormTemp";
import { ResumeTemp } from "./components/ResumeTemp";

export default function Home() {
  return (
    <>
    <h1 id='heading' className="text-center text-6xl pt-8 pb-12 font-bold">Dynamic Resume Builder</h1>
    <FormTemp />

    <div className="mt-12">
    <ResumeTemp/>
    </div>

    </>
  );
}
