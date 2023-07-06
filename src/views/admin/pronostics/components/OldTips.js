// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
// Custom components
import Card from "components/card/Card.js";
import React, { useEffect, useState } from "react";
import Project from "views/admin/profile/components/Project";
import SearchBars from './searchBar';
import { Box } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import TabpaneOldTips from "./TabOldTips";
import { connect, useDispatch } from 'react-redux';
import { fetchOldTipsRequest } from 'redux/predict/actions';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const OldTips = ({oldPredicts, totalOldCoast}) => {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const dispatch = useDispatch();
  const [dateFrom, setDateFrom] = useState("");
  const [type, setType] = useState("Week Tips");

  useEffect(() => {
    const currentDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
    setDateFrom(currentDate);

    const search = "";
    const page = 1;
    const limit = 10;

    dispatch(fetchOldTipsRequest({ dateFrom: currentDate, dateTo: currentDate, type, search, page, limit }));
    console.log("Dispatched fetchOldTipsRequest");
  }, [dispatch, type]);
  const handleTabChange = (newType) => {
    console.log('typeOld:', newType)
    setType(newType);
  };
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Old tips
      </Text>

      <TabpaneOldTips oldPredicts={oldPredicts} totalOldCoast={totalOldCoast} handleTabChange={handleTabChange}/>
    </Card>
  );
}
const mapStateToProps = ({ PredictReducer }) => ({
  oldPredicts: PredictReducer.oldPredicts,
  totalPages: PredictReducer.totalPages,
  page: PredictReducer.page,
  error: PredictReducer.error,
  totalOldCoast: PredictReducer.totalOldCoast,
});

export default connect(mapStateToProps)(OldTips);
