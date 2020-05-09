import React from "react";
import Drawer from '@material-ui/core/Drawer';
      
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Drawer
          variant="permanent"
          anchor="left"
        >
          Word
        </Drawer>
      </React.Fragment>
    )
  }
}

export default Sidebar;