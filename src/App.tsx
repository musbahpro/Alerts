import Alert from "./Components/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

export default function App() {
  return (
    <div className="alert-conteiner">
      <Alert
        tayp={"alert-default"}
        title={"Upgrade your plan"}
        icon={<AlertTriangle />}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        tayp={"alert-warning"}
        title={"Tips & Tricks"}
        icon={<Ban />}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        tayp={"alert-success"}
        title={"Your order has been processed"}
        icon={<Bell />}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        tayp={"alert-error"}
        title={"Something went wrong"}
        icon={<CheckCheck />}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        tayp={"alert-info"}
        title={"Note"}
        icon={<Info />}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
    </div>
  );
}
