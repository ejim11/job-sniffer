import InputComponent from "@/components/InputComponent";

export default function Home() {
  return (
    <main className="bg-color-white flex w-full h-[100vh]">
      <div className="bg-color-black-1 w-1/2"></div>
      <div className="w-1/2">
        <h1 className="">Job Sniffer</h1>

        <InputComponent />
      </div>
    </main>
  );
}
