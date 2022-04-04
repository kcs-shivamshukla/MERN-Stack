import React, {useRef} from 'react';
import ChildComp from './RefwithEventBinding_Child';

function ParentFunComp() {
   const childCompRef = useRef()

   return(
       <div>
           <button onClick={() => childCompRef.current.showAlert()}>Click Me</button>
           <ChildComp ref={childCompRef} />
       </div>
   )
   }
export default ParentFunComp;