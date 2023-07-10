import { Box, Flex, Text } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';

import Select from 'react-select';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = (data) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const AddPredictForm = () => {
    return (
        <Flex direction='column' gap={8} >
            <Flex justify='space-between'>
                <Box>
                    <Text>
                        Date
                    </Text>
                    <Select
                        formatGroupLabel={formatGroupLabel}
                    />
                </Box>
                <Box>
                    <Text>
                        Pays
                    </Text>
                    <Select
                        formatGroupLabel={formatGroupLabel}
                    />
                </Box>
                <Box>
                    <Text>
                        Championat
                    </Text>
                    <Select
                        formatGroupLabel={formatGroupLabel}
                    />
                </Box>
            </Flex>
            <Box>
                <Text>
                    Rencontre
                </Text>
                <Select
                    formatGroupLabel={formatGroupLabel}
                />
            </Box>
            <Flex justify='space-between'>
                <Box>
                    <Text>
                        Prédiction
                    </Text>
                    <Select
                        formatGroupLabel={formatGroupLabel}
                    />
                </Box>
                <Box>
                    <Text>
                        Cote
                    </Text>
                    <Select
                        formatGroupLabel={formatGroupLabel}
                    />
                </Box>
                <Box>
                    <Text>
                        Type de prédiction
                    </Text>
                    <Select
                        formatGroupLabel={formatGroupLabel}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default AddPredictForm;
