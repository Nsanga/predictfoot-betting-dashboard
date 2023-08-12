import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tabpane from "./components/Tab";
import OldTips from "./components/OldTips";
import { fetchPredictRequest } from "redux/predict/actions";
import { connect, useDispatch } from "react-redux";

const Pronostic = ({
  predicts,
  loading,
  totalPages,
  page,
  totalCoast,
  predictType,
}) => {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const dispatch = useDispatch();
  const [dateFrom, setDateFrom] = useState("");
  const [type, setType] = useState("Week Tips"); // Initialiser avec "Week Tips" au lieu d'une chaîne vide

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setDateFrom(currentDate);

    const search = "";
    const page = 1;
    const limit = 6;

    dispatch(
      fetchPredictRequest({
        dateFrom: currentDate,
        dateTo: currentDate,
        type,
        search,
        page,
        limit,
      })
    );
    console.log("Dispatched fetchPredictRequest");
  }, [dispatch, type]);

  const handleTabChange = (newType) => {
    setType(newType);
  };

  const handlePageChange = (selectedPage) => {
    console.log('selectedPage', selectedPage)
    const limit = 6;
    const currentDate = new Date().toISOString().split("T")[0];
  
    dispatch(
      fetchPredictRequest({
        dateFrom: currentDate,
        dateTo: currentDate,
        type,
        search: "",
        page: selectedPage + 1,
        limit,
      })
    );
  };
  

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, "2xl": 6 }}
        gap="20px"
        spacingX="8rem"
      >
        <Box boxSize={{ base: "none", lg: "lg" }}>
          <Tabpane
            predicts={predicts}
            totalCoast={totalCoast}
            loading={loading}
            handleTabChange={handleTabChange}
            handlePageChange={handlePageChange}
            predictType={predictType}
            totalPages={totalPages}
            page={page}
          />
        </Box>
        <Box>
          <OldTips />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
const mapStateToProps = ({ PredictReducer }) => ({
  predicts: PredictReducer.predicts,
  loading: PredictReducer.loading,
  totalPages: PredictReducer.totalPages,
  page: PredictReducer.page,
  error: PredictReducer.error,
  totalCoast: PredictReducer.totalCoast,
});

export default connect(mapStateToProps)(Pronostic);
