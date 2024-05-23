import React from 'react'
class LockedNumbers extends React.Component{
    render(){
        const{isLocked, onLock}=this.props;
return(

    <button className={`btn btn-${isLocked? 'danger' : 'primary'} `} onClick={onLock}>
                        {isLocked ? 'Unlock': 'Lock'}
                    </button>
        
                      
    )}
    
}
export default LockedNumbers



   