import { useState } from "react";
import DrawerUser from "./drawer";
import { Button } from "antd";
const UserPage = () => {
  const [isOperDrawer, setIsOperDrawer] = useState<boolean>(false);

  const onCloseDrawer = () => {
    setIsOperDrawer(false);
  };

  const onOpenDrawer = () => {
    setIsOperDrawer(true);
  };

  return (
    <>
      <div>user page</div>
      <Button type="primary" onClick={onOpenDrawer}>
        Open Drawer
      </Button>
      <DrawerUser onClose={onCloseDrawer} isOpen={isOperDrawer} />
    </>
  );
};

export default UserPage;
