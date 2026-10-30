import VehicleForm from "./components/VehicleForm";
import VehiclesList from "./components/VehiclesList";

export default function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          <span className="text-blue-700">AutoFix {""}</span>
          Workshop Management
        </h1>

        <div className="mt-12 md:flex">
          <VehicleForm />
          <VehiclesList />
        </div>
      </div>
    </>
  );
}
