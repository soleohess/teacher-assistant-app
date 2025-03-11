// src/components/Tabs.js
import React, { useState } from 'react';
import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';
import TabContent3 from './TabContent3';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('page1');

  const renderContent = () => {
    switch (activeTab) {
      case 'page1':
        return <TabContent1 />;
      case 'page2':
        return <TabContent2 />;
      case 'page3':
        return <TabContent3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('page1')}>Page 1</button>
        <button onClick={() => setActiveTab('page2')}>Page 2</button>
        <button onClick={() => setActiveTab('page3')}>Page 3</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;