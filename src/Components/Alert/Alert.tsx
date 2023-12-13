import { ReactNode } from "react";
import { ShieldX } from "lucide-react";
import "./index.scss";
import { AlertTypes } from "../types/AlertTypes";
interface IProps {
  tayp: AlertTypes;
  icon: ReactNode;
  title: string;
  description: string;
}

const Alert = ({
  tayp,
  icon,
  title,
  description,
}: IProps) => {
  return (
    <div className={tayp}>
      <div className="Top-section">
        <div className="Titel">
          <ShieldX className="icon" />
          <h1>{title}</h1>
        </div>
        {icon}
      </div>
      <p className="Content">{description}</p>
    </div>
  );
};

export default Alert;
