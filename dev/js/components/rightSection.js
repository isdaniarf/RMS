import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import PersonDetail from './personDetail'


const RightSection = () => (
  <Tabs>
    <Tab label="Item One" >
      <div>
          <PersonDetail />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"
    >
      <div>
        <h2>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default RightSection;