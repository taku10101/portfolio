import { Box } from "@yamada-ui/react";
import PerformanceCardList from "./_components/performanceCardList";
async function page() {
  return (
    <Box mx={3} m={"auto"}>
      <PerformanceCardList />
    </Box>
  );
}

export default page;
