import ControlBar from './ControlBar'
import { useState } from 'react';

/* INTEGRATION WITH ELECTRON */
const remote = window.require('electron').remote
const currentWindow = remote.getCurrentWindow()

function Index() {
    
    
    const [handleMaximizeBtn, setHandleMaximizeBtn] = useState(false)


    function close() {
        currentWindow.close()
    }

    function minimize() {
        currentWindow.minimize()
    }

    function maximize() {
        currentWindow.maximize()
        setHandleMaximizeBtn(!handleMaximizeBtn)
    }

    function unmaximize() {
        currentWindow.unmaximize()
        setHandleMaximizeBtn(!handleMaximizeBtn)
    }

    return (
        <div className="Index-cotrolBar">
            <ControlBar 
            close={close}
            minimize={minimize}
            maximize={handleMaximizeBtn ? maximize : unmaximize} // This don't works in the current version of electron!
            />
        </div>
    );
}

export default Index;