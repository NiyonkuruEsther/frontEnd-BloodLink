import { useState } from "react";
import { MdDelete, MdEditNotifications } from "react-icons/md";

const Tooltip = ({ item, setShowTooltip }) => {
  const [showEditPopup, setShowEditPopup] = useState(false);

  return (
    <>
      <div className="absolute bottom-0 -left-10 text-white bg-black rounded-lg w-fit text-base">
        <ul className="m-0 p-2">
          <li
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => {
              setShowEditPopup(true);
            }}
          >
            <MdEditNotifications className="m-0" /> Confirm
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <MdDelete className="m-0" />
            Reject
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tooltip;
