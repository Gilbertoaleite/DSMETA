import './style.css';
import Icon from '../../assets/img/notification-icon.svg';
export default function NotificationButton() {
    return (

        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
                <img src={ Icon } alt="Notificar" />
            </div>
        </div>
    )
}