import Image from "next/image";
import { Mqtt as Protocol } from "azure-iot-device-mqtt";
import { Client, Twin } from "azure-iot-device";

export default function Home() {
  const deviceConnectionString: string =
    process.env.IOTHUB_DEVICE_CONNECTION_STRING || "";
  console.log(deviceConnectionString);

  if (deviceConnectionString === "") {
    console.log("device connection string not set");
    process.exit(-1);
  }

  const client: Client = Client.fromConnectionString(
    deviceConnectionString,
    Protocol
  );
  console.log("got client");
  return (
    <>
      <div>test</div>
    </>
  );
}
