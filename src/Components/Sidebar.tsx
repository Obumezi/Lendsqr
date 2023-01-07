import '../Styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="sidebar__title">Switch Organisation</h2>
            <FontAwesomeIcon className='coffee' icon={faCoffee} />
            <ul className="sidebar__menu">
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">DashBoard</a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Users</a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Loans </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Decison Models </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Savings </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Loan Requests </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Whitelist </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Karma </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link-head">Business** </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Organization </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Loan Products </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Fees and Charges </a>
                </li> 
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Transactions </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Services </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Service Account </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Settlements </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Reports</a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Settimgs** </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Prefrences </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Fess and Pricing </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Audit Logs </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Savings Products </a>
                </li>

            </ul>
        </aside>
    );
}

export default Sidebar;