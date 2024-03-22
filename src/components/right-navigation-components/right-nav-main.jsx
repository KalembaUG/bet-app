
import { RightIcon } from './icons';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToRightNavChange ,rightNavChanged} from '../../features/navigation/navigationSlice';
import { rightNavMainItems } from '../../constants';




export const RightNavItem = ({name ,selected, onClick,icon,count=''}) => {
    return (
        <div className={selected ? "right-nav-item selected" :"right-nav-item"} onClick={onClick}>
            <div className="right-side">
                <div className='right-nav-item-icon'></div>
                {icon({className :'nav-item-icon'})}
                <div className="right-nav-item-name">{name}</div>
            </div>
            <div className="left-side">
                {count ? <div className="right-nav-item-number">{ count}</div> :''}
                <div className="right-nav-item-icon-last">
                    <RightIcon/>
                </div>
            </div>
        </div>
    )
}


const RightNavMain = () => {

    const storeValue = useSelector(subscribeToRightNavChange)

    const dispatch = useDispatch();

    const selectedValue = rightNavMainItems.findIndex((item) =>{return item.name === storeValue})

    return (
        <div className='right-nav-main'>
            {rightNavMainItems.map((navItem, i) => {
                return (<RightNavItem onClick={() => { dispatch(rightNavChanged(navItem.name))  }} name={navItem.name} selected={selectedValue == i} icon={ navItem.icon} />)
            })}
        </div>
    );
}

export default RightNavMain;
