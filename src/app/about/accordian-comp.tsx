"use client"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    className:'text-xl font-bold'
  };
}

export default function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color:'#97144d', }}>
        <Tabs value={value} textColor="inherit" indicatorColor="secondary" onChange={handleChange} aria-label="basic tabs example">
          <Tab label="About Us"   {...a11yProps(0)} />
          <Tab label="Our Mission" {...a11yProps(1)} />
          <Tab label="Our Vision" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
            <p className="mb-6 text-xl text-gray-500 dark:text-gray-400">
                150 Years of Combined Experience in the Industry empowers us with the <span className="text-3xl font-bold text-[#97144D]">“Art of Search Curation”</span> leading to near perfection in Selection. Our DNA- Deliver Not Await! We promise to Deliver results irrespective of challenges we come across. We don&apos;t await answers from our Client&apos;s rather WE present them with solutions and insights to achieve <br /> <span className="text-4xl font-bold text-[#97144D]">“Better ROI”</span>.
            </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
            <p className="mb-6 text-xl text-gray-500 dark:text-gray-400">
            Our mission 2030: <br /> <span className="text-3xl font-bold text-[#97144D]">$100 billion company by 2030.</span> <br />
            Fueled by innovation and a commitment to excellence, we&apos;re on a transformative journey to make a change in the industry. Our dynamic team, cutting-edge tech, and strategic foresight propel us towards this ambitious milestone. Beyond financial success, it&apos;s about cultivating trust, partnerships, and a culture of growth and innovation.
            </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
            <p className="mb-6 text-xl text-gray-500 dark:text-gray-400">
            TalentWorkx aspires to be the<br /> <span className="text-3xl font-bold text-[#97144D]">World&apos;s most admired Human Capital Management Company.</span> <br /> We&apos;re not just about business; we&apos;re about shaping global workplaces. With a commitment to diversity, inclusivity, and continuous learning, we champion human potential. Join us in creating an environment where organizations thrive, and individuals flourish—shaping a future where the human spirit knows no bounds.
            </p>
      </CustomTabPanel>
    </Box>
  );
}