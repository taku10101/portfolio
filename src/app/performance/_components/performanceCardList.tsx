import { Box, Grid } from "@yamada-ui/react";
import React from "react";
import PerformanceCard from "./performanceCard";

const performanceCardList = () => {
  return (
    <Box mx={3}>
      <Grid templateColumns='repeat(2, 2fr)'>
        <PerformanceCard
          title={"SchemaCreator"}
          image={"/recall_mate.png"}
          alt={""}
          page={"/"}
          presentation={
            "https://docs.google.com/presentation/d/11c_d8L0afDumXIkq_I7PaLniuNadmEG8ORD0o8wZ3Lg/edit?usp=sharing"
          }
        />

        <PerformanceCard
          title={"RecallMate"}
          image={"/recall_mate.png"}
          alt={""}
          page={"/"}
          presentation={
            "https://www.canva.com/design/DAGBdSZKfMU/BV1UDHxux3lP5760vpcIJg/edit?utm_content=DAGBdSZKfMU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          }
        />
        <PerformanceCard
          title={"ArticlePark"}
          image={"/article_park.png"}
          alt={""}
          page={"/"}
          presentation={
            "https://www.canva.com/design/DAF5wtz8EfU/q0ecIbSdw1ycl1CzTQVe1Q/edit?utm_content=DAF5wtz8EfU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          }
        />
      </Grid>
    </Box>
  );
};

export default performanceCardList;
