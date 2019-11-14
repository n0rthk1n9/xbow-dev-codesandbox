import React from 'react';

import { Emoji } from './components/UI/Emoji/Emoji';
import { Card } from './components/UI/Card/Card';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Card>
        <span>Hello World</span>
        <Emoji symbol="🚀" label="rocket" />
      </Card>
      <Card>
        <span>automatic deployment working</span>
        <Emoji symbol="😍" label="heart_eyed_face" />
      </Card>
    </div>
  );
}

export default App;
