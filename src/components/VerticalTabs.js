import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BakerProfileSection from "./BakerProfileSection";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function VerticalTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                centered
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    '& .MuiTab-wrapper': {
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }}
            >
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Baker info" {...a11yProps(1)} />
                {/*<Tab label="Alternatives" {...a11yProps(2)} />*/}

            </Tabs>
            <TabPanel value={value} index={0}>
                Description: {props.cake.description}<br/>
                Price: {props.cake.price}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.baker.name}

            </TabPanel>
            {/*<TabPanel value={value} index={2}>*/}
            {/*    Item Three*/}
            {/*</TabPanel>*/}

        </Box>
    );
}

export default VerticalTabs;