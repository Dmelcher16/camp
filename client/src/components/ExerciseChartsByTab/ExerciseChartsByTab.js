import React, { useState } from "react";
import {
  ChewingChart,
  LeashChart,
  SitStayChart,
  PottyTrainingChart,
  CommandsChart,
} from "../../components/ExerciseCharts";


function ExerciseChartsByTab() {
  const [key, setKey] = useState("commands");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="commands" title="Commands">
        <Tab.Pane
        <CommandsChart />
      </Tab>
      <Tab eventKey="leash" title="Leash Training">
        <LeashChart />
      </Tab>
      <Tab eventKey="sit" title="Sit/Stay">
        <SitStayChart />
      </Tab>
      <Tab eventKey="potty-training" title="Potty Training">
        <PottyTrainingChart />
      </Tab>
      <Tab eventKey="chewing-chart" title="Items Chewed">
        <ChewingChart />
      </Tab>
    </Tabs>
  );
}

export default ExerciseChartsByTab;
