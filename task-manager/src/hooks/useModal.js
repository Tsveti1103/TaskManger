import { useState } from "react";

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);

    const onChange = () => {
        setIsOpen(current => !current);
        if (!isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }
    return [isOpen, onChange];
}