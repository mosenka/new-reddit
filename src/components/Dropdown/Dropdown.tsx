import React, { useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
interface IPosition {
  left: number;
  top: number;
}

const NOOP = () => {};
 
  export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
    const node = document.querySelector('#dropdown_root');
    if(!node) return null;
    
    const ref = useRef<HTMLDivElement>(null);
    
    const [position, setPosition] = useState<IPosition>({left: 0, top: 0});
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    React.useEffect(() => {
      setIsDropdownOpen(isOpen)
    }, [isOpen]);

    React.useEffect(() => { 
      isDropdownOpen ? onOpen() : onClose() 
    
    
    }, []);

    React.useEffect(() => {
      if(isDropdownOpen) {
        let styles = getPosition();
        setPosition(styles);
      } 
     
      
      
      

      
    }, [isDropdownOpen]);

    const handleOpen = () => {
      if(isOpen == undefined){
        setIsDropdownOpen(!isDropdownOpen)
      }
    }

    const getPosition = () => {
      let body = document.body;
      let box = ref.current!.getBoundingClientRect();
      let scrollTop = window.pageYOffset || body.scrollTop;

      let left : number = box.x + 30;
      let top: number = box.y + scrollTop + 15;
      return {left: left, top: top}

    }
   

    return (
      <div className={styles.container} >
        <div onClick={handleOpen} ref={ref}>
          { button }
        </div>
        { isDropdownOpen && (
          ReactDOM.createPortal(( 
          <div className={styles.listContainer} style={position}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>), node)
           
          )
        }
      </div>

    );
}


