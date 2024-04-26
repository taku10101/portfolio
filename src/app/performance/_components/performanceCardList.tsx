import { Box, Grid } from "@yamada-ui/react";
import React from "react";
import PerformanceCard from "./performanceCard";

function performanceCardList() {
  return (
    <Box mx={3}>
      <Grid
        templateColumns='repeat(2, 2fr)'
        w={"85%"}
        m={"auto"}
        gap={4}
        mt={3}
      >
        <PerformanceCard
          title={"SchemaCreator"}
          image={"/schema_creator.png"}
          alt={""}
          page={"/"}
          presentation={
            "https://docs.google.com/presentation/d/11c_d8L0afDumXIkq_I7PaLniuNadmEG8ORD0o8wZ3Lg/edit?usp=sharing"
          }
        />

        <PerformanceCard
          title={"HackPortal"}
          image={"/hack_hack.png"}
          alt={""}
          page={"/"}
          presentation={
            "https://www.canva.com/design/DAFoj4q5uw0/uyhnGQGDlNWhic4xBpIi1w/edit?utm_content=DAFoj4q5uw0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
}

export default performanceCardList;
