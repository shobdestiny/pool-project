import React from "react";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  removeEmployee,
  makeLead,
} from "../../../redux/Slices/EmployeeSlice";
interface Props {
  listData: any;
  toggleButtonStyle?: boolean;
  badge?: boolean;
}
const CustomList = ({
  listData,
  toggleButtonStyle = false,
  badge = false,
}: Props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex items-center justify-between">
      <Badge
        invisible={!listData.lead}
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <span className="p-[1px] text-white rounded-full bg-dodgerBlue">
            <FaCrown />
          </span>
        }
      >
        <Avatar
          variant="rounded"
          alt={listData.first_name}
          src={listData.profile_image_url}
        />
      </Badge>
      <div className="w-2/3 pl-10">
        <p className="font-semibold text-md">
          {listData.first_name + " " + listData.last_name}
        </p>
        <p className="text-xs text-matterHorn">{listData.experience} yrs Exp</p>
      </div>
      {toggleButtonStyle ? (
        <>
          <IconButton onClick={handleClick}>
            <BsThreeDotsVertical />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            className="!divide-y-2 !divide-verylightGrey"
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  makeLead({
                    id: listData.id,
                    designation: listData.designation,
                  })
                );
                handleClose();
              }}
            >
              Lead
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(
                  removeEmployee({
                    id: listData.id,
                    designation: listData.designation,
                  })
                );
                handleClose();
              }}
            >
              Remove
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          className="!h-6 !text-xs !capitalize"
          onClick={() => dispatch(addEmployee(listData))}
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default CustomList;
