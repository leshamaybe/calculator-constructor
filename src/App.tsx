import React from 'react';
import Canvas from './components/canvas/Canvas';
import Board from './components/modules/Board';
import Toggler from './components/toggleSwitch/Toggler';

function App() {
    return (
        <div className="App">
            <Toggler />
            <div className="App-bottom">
                <Board />
                <Canvas />
            </div>
        </div>
    );
}

export default App;
