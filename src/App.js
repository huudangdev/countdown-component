import React from 'react';

import Countdown from './components/Countdown'

const App = () => {
  return (
    <>
      <Countdown timeTillDate='07 27 2019, 5:00 pm' timeFormat='MM DD YYYY, h:mm a'/>
    </>
  );
}

export default App;
