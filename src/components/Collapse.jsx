import React, {useState} from "react"; // Chemin relatif depuis la racine du projet
import DropdownIcon from "../assets/icons/dropdown.svg";
import DropdownIconOpen from "../assets/icons/dropdown-open.svg";

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="title">
                {isOpen ? true : false} <span>{title}</span>
                <button onClick={toggleCollapse}>{isOpen ? <img src={DropdownIconOpen} alt="Fermer" /> : <img src={DropdownIcon} alt="Ouvrir" />}</button>
            </div>
            {isOpen && (
                <div className="content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;
